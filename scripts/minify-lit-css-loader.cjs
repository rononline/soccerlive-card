"use strict";

/**
 * Minify static Lit css tagged templates without touching quoted CSS content.
 *
 * Soccer Live does not interpolate values inside its css templates. Keeping
 * this as a tiny local loader avoids adding another build dependency merely to
 * remove formatting whitespace from strings that JavaScript minifiers treat as
 * semantically opaque.
 */
function minifyCss(css) {
  let result = "";
  let quote = "";
  let escaped = false;

  for (let index = 0; index < css.length; index += 1) {
    const char = css[index];
    const next = css[index + 1];

    if (quote) {
      result += char;
      if (escaped) escaped = false;
      else if (char === "\\") escaped = true;
      else if (char === quote) quote = "";
      continue;
    }

    if (char === "'" || char === '"') {
      quote = char;
      result += char;
      continue;
    }

    if (char === "/" && next === "*") {
      index += 2;
      while (index < css.length && !(css[index] === "*" && css[index + 1] === "/")) {
        index += 1;
      }
      index += 1;
      continue;
    }

    if (/\s/.test(char)) {
      while (index + 1 < css.length && /\s/.test(css[index + 1])) index += 1;
      const previous = result.at(-1) || "";
      const following = css[index + 1] || "";
      if (
        previous
        && following
        && !/[{}:;,>~]/.test(previous)
        && !/[{}:;,>~]/.test(following)
      ) {
        result += " ";
      }
      continue;
    }

    result += char;
  }

  return result.trim();
}

function minifyLitCss(source) {
  return source.replace(/\bcss`([\s\S]*?)`/g, (_match, value) => `css\`${minifyCss(value)}\``);
}

module.exports = function litCssLoader(source) {
  return minifyLitCss(source);
};
module.exports.minifyCss = minifyCss;
module.exports.minifyLitCss = minifyLitCss;
