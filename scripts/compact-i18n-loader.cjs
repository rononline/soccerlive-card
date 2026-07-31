"use strict";

const acorn = require("acorn");

const propertyName = property => (
  property.computed ? property.key.value : (property.key.name ?? property.key.value)
);

function compactI18n(source) {
  const program = acorn.parse(source, {
    ecmaVersion: "latest",
    sourceType: "module",
  });
  let translationsNode;
  let translateFunction;

  for (const statement of program.body) {
    if (statement.type === "VariableDeclaration") {
      const declaration = statement.declarations.find(item => item.id?.name === "TRANSLATIONS");
      if (declaration) translationsNode = { statement, declaration };
    }
    if (
      statement.type === "ExportNamedDeclaration"
      && statement.declaration?.type === "FunctionDeclaration"
      && statement.declaration.id?.name === "t"
    ) {
      translateFunction = statement.declaration;
    }
  }

  if (!translationsNode || !translateFunction) {
    throw new Error("Could not find TRANSLATIONS and exported t() in i18n.js");
  }
  const root = translationsNode.declaration.init;
  if (root?.type !== "ObjectExpression") {
    throw new Error("TRANSLATIONS must be an object literal");
  }

  const dictionaries = {};
  for (const languageProperty of root.properties) {
    const language = propertyName(languageProperty);
    if (languageProperty.value?.type !== "ObjectExpression") {
      throw new Error(`Translation dictionary ${language} must be an object literal`);
    }
    const dictionary = {};
    for (const entry of languageProperty.value.properties) {
      const key = propertyName(entry);
      if (typeof entry.value?.value !== "string") {
        throw new Error(`Translation ${language}.${key} must be a static string`);
      }
      dictionary[key] = entry.value.value;
    }
    dictionaries[language] = dictionary;
  }

  const english = dictionaries.en;
  if (!english) throw new Error("English translations are required");
  const keys = [...new Set(
    Object.values(dictionaries).flatMap(dictionary => Object.keys(dictionary)),
  )];

  const index = Object.fromEntries(keys.map((key, position) => [key, position]));
  const valueCounts = Object.values(dictionaries)
    .flatMap(dictionary => Object.values(dictionary))
    .reduce((counts, value) => {
      counts.set(value, (counts.get(value) || 0) + 1);
      return counts;
    }, new Map());
  const values = [...valueCounts]
    .filter(([value, count]) => count > 1 && value.length >= 4)
    .map(([value]) => value);
  const valueIndex = new Map(values.map((value, position) => [value, position]));
  const packed = Object.fromEntries(
    Object.entries(dictionaries).map(([language, dictionary]) => [
      language,
      keys.map(key => (
        dictionary[key] == null
          ? null
          : (valueIndex.has(dictionary[key])
            ? valueIndex.get(dictionary[key])
            : dictionary[key])
      )),
    ]),
  );
  const declarations = (
    `const TRANSLATION_INDEX=${JSON.stringify(index)};\n`
    + `const TRANSLATION_VALUES=${JSON.stringify(values)};\n`
    + `const TRANSLATIONS=${JSON.stringify(packed)};`
  );
  const translate = `function t(key, lang, vars) {
  const index = TRANSLATION_INDEX[key];
  if (index === undefined) return key;
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
  let token = dict[index];
  if (token == null) token = TRANSLATIONS.en[index];
  if (token == null) return key;
  let str = typeof token === 'number' ? TRANSLATION_VALUES[token] : token;
  if (vars) {
    Object.keys(vars).forEach(k => {
      str = str.replace(new RegExp('\\\\{' + k + '\\\\}', 'g'), vars[k]);
    });
  }
  return str;
}`;

  return [
    { start: translationsNode.statement.start, end: translationsNode.statement.end, value: declarations },
    { start: translateFunction.start, end: translateFunction.end, value: translate },
  ]
    .sort((left, right) => right.start - left.start)
    .reduce(
      (result, replacement) => (
        result.slice(0, replacement.start)
        + replacement.value
        + result.slice(replacement.end)
      ),
      source,
    );
}

module.exports = function compactI18nLoader(source) {
  return compactI18n(source);
};
module.exports.compactI18n = compactI18n;
