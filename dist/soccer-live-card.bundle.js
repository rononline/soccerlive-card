/*! For license information please see soccer-live-card.bundle.js.LICENSE.txt */
(()=>{"use strict";const e=globalThis,t=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,a=Symbol(),i=new WeakMap;class n{constructor(e,t,i){if(this._$cssResult$=!0,i!==a)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const a=this.t;if(t&&void 0===e){const t=void 0!==a&&1===a.length;t&&(e=i.get(a)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&i.set(a,e))}return e}toString(){return this.cssText}}const s=(e,...t)=>{const i=1===e.length?e[0]:t.reduce(((t,a,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+e[i+1]),e[0]);return new n(i,e,a)},o=(a,i)=>{if(t)a.adoptedStyleSheets=i.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const t of i){const i=document.createElement("style"),n=e.litNonce;void 0!==n&&i.setAttribute("nonce",n),i.textContent=t.cssText,a.appendChild(i)}},r=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const a of e.cssRules)t+=a.cssText;return(e=>new n("string"==typeof e?e:e+"",void 0,a))(t)})(e):e,{is:l,defineProperty:c,getOwnPropertyDescriptor:d,getOwnPropertyNames:p,getOwnPropertySymbols:h,getPrototypeOf:g}=Object,u=globalThis,m=u.trustedTypes,f=m?m.emptyScript:"",v=u.reactiveElementPolyfillSupport,_=(e,t)=>e,b={toAttribute(e,t){switch(t){case Boolean:e=e?f:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let a=e;switch(t){case Boolean:a=null!==e;break;case Number:a=null===e?null:Number(e);break;case Object:case Array:try{a=JSON.parse(e)}catch(e){a=null}}return a}},x=(e,t)=>!l(e,t),y={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:x};Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;class w extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=y){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const a=Symbol(),i=this.getPropertyDescriptor(e,a,t);void 0!==i&&c(this.prototype,e,i)}}static getPropertyDescriptor(e,t,a){const{get:i,set:n}=d(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return i?.call(this)},set(t){const s=i?.call(this);n.call(this,t),this.requestUpdate(e,s,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??y}static _$Ei(){if(this.hasOwnProperty(_("elementProperties")))return;const e=g(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(_("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_("properties"))){const e=this.properties,t=[...p(e),...h(e)];for(const a of t)this.createProperty(a,e[a])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,a]of t)this.elementProperties.set(e,a)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const a=this._$Eu(e,t);void 0!==a&&this._$Eh.set(a,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const a=new Set(e.flat(1/0).reverse());for(const e of a)t.unshift(r(e))}else void 0!==e&&t.push(r(e));return t}static _$Eu(e,t){const a=t.attribute;return!1===a?void 0:"string"==typeof a?a:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const a of t.keys())this.hasOwnProperty(a)&&(e.set(a,this[a]),delete this[a]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return o(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,a){this._$AK(e,a)}_$EC(e,t){const a=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,a);if(void 0!==i&&!0===a.reflect){const n=(void 0!==a.converter?.toAttribute?a.converter:b).toAttribute(t,a.type);this._$Em=e,null==n?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(e,t){const a=this.constructor,i=a._$Eh.get(e);if(void 0!==i&&this._$Em!==i){const e=a.getPropertyOptions(i),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:b;this._$Em=i,this[i]=n.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,a){if(void 0!==e){if(a??=this.constructor.getPropertyOptions(e),!(a.hasChanged??x)(this[e],t))return;this.P(e,t,a)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,a){this._$AL.has(e)||this._$AL.set(e,t),!0===a.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,a]of e)!0!==a.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],a)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EC(e,this[e]))),this._$EU()}updated(e){}firstUpdated(e){}}w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[_("elementProperties")]=new Map,w[_("finalized")]=new Map,v?.({ReactiveElement:w}),(u.reactiveElementVersions??=[]).push("2.0.4");const $=globalThis,k=$.trustedTypes,C=k?k.createPolicy("lit-html",{createHTML:e=>e}):void 0,z="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,E="?"+S,A=`<${E}>`,T=document,N=()=>T.createComment(""),L=e=>null===e||"object"!=typeof e&&"function"!=typeof e,P=Array.isArray,M="[ \t\n\f\r]",j=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,D=/-->/g,V=/>/g,O=RegExp(`>|${M}(?:([^\\s"'>=/]+)(${M}*=${M}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),H=/'/g,I=/"/g,F=/^(?:script|style|textarea|title)$/i,B=e=>(t,...a)=>({_$litType$:e,strings:t,values:a}),R=B(1),q=B(2),G=(B(3),Symbol.for("lit-noChange")),U=Symbol.for("lit-nothing"),W=new WeakMap,K=T.createTreeWalker(T,129);function J(e,t){if(!P(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==C?C.createHTML(t):t}class Z{constructor({strings:e,_$litType$:t},a){let i;this.parts=[];let n=0,s=0;const o=e.length-1,r=this.parts,[l,c]=((e,t)=>{const a=e.length-1,i=[];let n,s=2===t?"<svg>":3===t?"<math>":"",o=j;for(let t=0;t<a;t++){const a=e[t];let r,l,c=-1,d=0;for(;d<a.length&&(o.lastIndex=d,l=o.exec(a),null!==l);)d=o.lastIndex,o===j?"!--"===l[1]?o=D:void 0!==l[1]?o=V:void 0!==l[2]?(F.test(l[2])&&(n=RegExp("</"+l[2],"g")),o=O):void 0!==l[3]&&(o=O):o===O?">"===l[0]?(o=n??j,c=-1):void 0===l[1]?c=-2:(c=o.lastIndex-l[2].length,r=l[1],o=void 0===l[3]?O:'"'===l[3]?I:H):o===I||o===H?o=O:o===D||o===V?o=j:(o=O,n=void 0);const p=o===O&&e[t+1].startsWith("/>")?" ":"";s+=o===j?a+A:c>=0?(i.push(r),a.slice(0,c)+z+a.slice(c)+S+p):a+S+(-2===c?t:p)}return[J(e,s+(e[a]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),i]})(e,t);if(this.el=Z.createElement(l,a),K.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=K.nextNode())&&r.length<o;){if(1===i.nodeType){if(i.hasAttributes())for(const e of i.getAttributeNames())if(e.endsWith(z)){const t=c[s++],a=i.getAttribute(e).split(S),o=/([.?@])?(.*)/.exec(t);r.push({type:1,index:n,name:o[2],strings:a,ctor:"."===o[1]?te:"?"===o[1]?ae:"@"===o[1]?ie:ee}),i.removeAttribute(e)}else e.startsWith(S)&&(r.push({type:6,index:n}),i.removeAttribute(e));if(F.test(i.tagName)){const e=i.textContent.split(S),t=e.length-1;if(t>0){i.textContent=k?k.emptyScript:"";for(let a=0;a<t;a++)i.append(e[a],N()),K.nextNode(),r.push({type:2,index:++n});i.append(e[t],N())}}}else if(8===i.nodeType)if(i.data===E)r.push({type:2,index:n});else{let e=-1;for(;-1!==(e=i.data.indexOf(S,e+1));)r.push({type:7,index:n}),e+=S.length-1}n++}}static createElement(e,t){const a=T.createElement("template");return a.innerHTML=e,a}}function Q(e,t,a=e,i){if(t===G)return t;let n=void 0!==i?a.o?.[i]:a.l;const s=L(t)?void 0:t._$litDirective$;return n?.constructor!==s&&(n?._$AO?.(!1),void 0===s?n=void 0:(n=new s(e),n._$AT(e,a,i)),void 0!==i?(a.o??=[])[i]=n:a.l=n),void 0!==n&&(t=Q(e,n._$AS(e,t.values),n,i)),t}class Y{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:a}=this._$AD,i=(e?.creationScope??T).importNode(t,!0);K.currentNode=i;let n=K.nextNode(),s=0,o=0,r=a[0];for(;void 0!==r;){if(s===r.index){let t;2===r.type?t=new X(n,n.nextSibling,this,e):1===r.type?t=new r.ctor(n,r.name,r.strings,this,e):6===r.type&&(t=new ne(n,this,e)),this._$AV.push(t),r=a[++o]}s!==r?.index&&(n=K.nextNode(),s++)}return K.currentNode=T,i}p(e){let t=0;for(const a of this._$AV)void 0!==a&&(void 0!==a.strings?(a._$AI(e,a,t),t+=a.strings.length-2):a._$AI(e[t])),t++}}class X{get _$AU(){return this._$AM?._$AU??this.v}constructor(e,t,a,i){this.type=2,this._$AH=U,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=a,this.options=i,this.v=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Q(this,e,t),L(e)?e===U||null==e||""===e?(this._$AH!==U&&this._$AR(),this._$AH=U):e!==this._$AH&&e!==G&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>P(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==U&&L(this._$AH)?this._$AA.nextSibling.data=e:this.T(T.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:a}=e,i="number"==typeof a?this._$AC(e):(void 0===a.el&&(a.el=Z.createElement(J(a.h,a.h[0]),this.options)),a);if(this._$AH?._$AD===i)this._$AH.p(t);else{const e=new Y(i,this),a=e.u(this.options);e.p(t),this.T(a),this._$AH=e}}_$AC(e){let t=W.get(e.strings);return void 0===t&&W.set(e.strings,t=new Z(e)),t}k(e){P(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let a,i=0;for(const n of e)i===t.length?t.push(a=new X(this.O(N()),this.O(N()),this,this.options)):a=t[i],a._$AI(n),i++;i<t.length&&(this._$AR(a&&a._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this.v=e,this._$AP?.(e))}}class ee{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,a,i,n){this.type=1,this._$AH=U,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=n,a.length>2||""!==a[0]||""!==a[1]?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=U}_$AI(e,t=this,a,i){const n=this.strings;let s=!1;if(void 0===n)e=Q(this,e,t,0),s=!L(e)||e!==this._$AH&&e!==G,s&&(this._$AH=e);else{const i=e;let o,r;for(e=n[0],o=0;o<n.length-1;o++)r=Q(this,i[a+o],t,o),r===G&&(r=this._$AH[o]),s||=!L(r)||r!==this._$AH[o],r===U?e=U:e!==U&&(e+=(r??"")+n[o+1]),this._$AH[o]=r}s&&!i&&this.j(e)}j(e){e===U?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class te extends ee{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===U?void 0:e}}class ae extends ee{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==U)}}class ie extends ee{constructor(e,t,a,i,n){super(e,t,a,i,n),this.type=5}_$AI(e,t=this){if((e=Q(this,e,t,0)??U)===G)return;const a=this._$AH,i=e===U&&a!==U||e.capture!==a.capture||e.once!==a.once||e.passive!==a.passive,n=e!==U&&(a===U||i);i&&this.element.removeEventListener(this.name,this,a),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ne{constructor(e,t,a){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(e){Q(this,e)}}const se=$.litHtmlPolyfillSupport;se?.(Z,X),($.litHtmlVersions??=[]).push("3.2.0");class oe extends w{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this.o=((e,t,a)=>{const i=a?.renderBefore??t;let n=i._$litPart$;if(void 0===n){const e=a?.renderBefore??null;i._$litPart$=n=new X(t.insertBefore(N(),e),e,void 0,a??{})}return n._$AI(e),n})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.o?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.o?.setConnected(!1)}render(){return G}}oe._$litElement$=!0,oe.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:oe});const re=globalThis.litElementPolyfillSupport;re?.({LitElement:oe}),(globalThis.litElementVersions??=[]).push("4.1.0");const le={en:{"card.bracket":"Bracket","card.lineup":"Lineups","card.timeline":"Timeline","card.news":"News","card.standings":"Standings","card.scorers":"Top Scorers","card.stats":"Stats","card.commentary":"Commentary","card.video":"Video","competition.round":"Matchday","ui.neutral_site":"Neutral venue","ui.open_stats":"Open ESPN stats","ui.open_commentary":"Open ESPN commentary","ui.open_video":"Open ESPN video","round.final":"Final","round.semifinals":"Semifinals","round.quarterfinals":"Quarterfinals","round.r16":"Round of 16","round.r32":"Round of 32","round.knockout_playoffs":"Knockout Playoffs","round.preliminary":"Preliminary Round","round.short.semifinals":"Semis","round.short.quarterfinals":"Quarters","round.short.r16":"R16","bracket.empty.title":"Bracket not available","bracket.empty.sub":"Knockout stage starts soon","bracket.tbd":"TBD","bracket.tied_agg":"Tied agg.","bracket.agg":"Agg.","status.live":"Live","status.finished":"Finished","status.scheduled":"Scheduled","status.full_time":"Full Time","status.halftime":"Halftime","status.first_half":"1st Half","status.second_half":"2nd Half","status.kickoff":"Kickoff","status.end":"End","event.goal":"Goal","event.yellow_card":"Yellow Card","event.red_card":"Red Card","event.substitution":"Substitution","event.var":"VAR","event.header":"Header","event.shot":"Shot","event.penalty":"Penalty","event.free_kick":"Free kick","form.W":"W","form.D":"D","form.L":"L","team.details":"Details","team.possession":"Possession","team.shots":"Shots","team.on_target":"On target","team.fouls":"Fouls","team.spectators":"spectators","team.top_scorer":"Top scorer","team.next_match":"Next match","team.upcoming_matches":"Upcoming matches","team.previous_matches":"Previous matches","team.form_trend":"Season form","team.h2h":"Head to head","standings.stats":"matches played · goals","standings.pos_label":"Position","standings.compact_hidden":"teams hidden","team.in":"In","team.no_match":"No match available","team.off_season":"New season starts soon","team.unknown_entity":"Unknown entity","time.today":"Today","time.yesterday":"Yesterday","time.tomorrow":"Tomorrow","time.now":"now","time.in_n_min":"in {n} min","time.in_n_h":"in {n} h","time.in_n_d":"in {n} d","time.n_min_ago":"{n} min ago","time.n_h_ago":"{n} h ago","time.n_d_ago":"{n} d ago","cd.days":"days","cd.hrs":"hrs","cd.min":"min","cd.sec":"sec","lineup.bench":"Bench","lineup.empty.title":"Lineups not available","lineup.empty.sub":"Lineups are published shortly before kick-off","timeline.empty.title":"No events yet","timeline.empty.sub":"Events appear during the match","timeline.event":"Event","timeline.penalty":"Penalty","news.empty":"No news available","news.articles":"{n} articles","zone.champions":"Champions","zone.europa":"Europa","zone.relegation":"Relegation","zone.conference":"Conference League","zone.qualified":"Qualified","zone.third_place_playoff":"Best 3rd","zone.eliminated":"Eliminated","hero.groups":"groups","hero.teams":"teams","hero.not_started":"Not started","phase.regular_season":"Regular season","phase.group_stage":"Group stage","phase.playoffs":"Playoffs","col.pos":"#","col.team":"Team","col.played":"P","col.wins":"W","col.draws":"D","col.losses":"L","col.gd":"+/-","col.points":"Pts","generic.no_match":"No match available","generic.matches_count":"{n} matches","generic.unknown_entity":"Unknown entity","generic.close":"Close","generic.unknown":"Unknown","popup.match_details":"Match details","popup.lineups":"Lineups","popup.timeline":"Timeline","popup.h2h":"Head-to-head","popup.no_events":"No events available","month.1":"Jan","month.2":"Feb","month.3":"Mar","month.4":"Apr","month.5":"May","month.6":"Jun","month.7":"Jul","month.8":"Aug","month.9":"Sep","month.10":"Oct","month.11":"Nov","month.12":"Dec","scorers.goals":"Goals","scorers.matches":"Matches","scorers.empty":"No top scorers available","scorers.rank":"#","commentary.empty":"No live commentary available","ui.loading":"Loading...","ui.select_entity":"Select entity","ui.unknown_entity":"Unknown entity","ui.sensor_unavailable":"Sensor unavailable","ui.invalid_config":"Invalid configuration","ui.entity_required":"Entity required","ui.loading_timeout":"Loading timeout","ui.entity_not_responding":"Entity not responding","ui.check_integration":"Check if the integration is running","ui.no_live_match":"No live match right now","ui.no_live_match_hint":"Commentary appears here during a live game","ui.off_season":"Off season","ui.off_season_hint":"No matches scheduled in this period","ui.endpoint_unsupported":"Not available for this competition","ui.endpoint_unsupported_hint":"ESPN does not provide this data for all competitions","ui.wrong_entity_type":"Wrong sensor type","ui.wrong_entity_type_hint":"This card expects a different sensor","card.my_teams":"My Teams","match.vs":"vs","weather.wind":"Wind speed (Beaufort)"},nl:{"card.bracket":"Schema","card.lineup":"Opstellingen","card.timeline":"Tijdlijn","card.news":"Nieuws","card.standings":"Stand","card.scorers":"Topschutters","card.stats":"Stats","card.commentary":"Commentaar","card.video":"Video","competition.round":"Speelronde","ui.neutral_site":"Neutraal terrein","ui.open_stats":"Open statistieken op ESPN","ui.open_commentary":"Open commentaar op ESPN","ui.open_video":"Open video op ESPN","round.final":"Finale","round.semifinals":"Halve finales","round.quarterfinals":"Kwartfinales","round.r16":"Achtste finales","round.r32":"Zestiende finales","round.knockout_playoffs":"Knock-out play-offs","round.preliminary":"Voorronde","round.short.semifinals":"Halve finales","round.short.quarterfinals":"Kwart","round.short.r16":"8e finale","bracket.empty.title":"Schema niet beschikbaar","bracket.empty.sub":"De knock-outfase begint binnenkort","bracket.tbd":"N.t.b.","bracket.tied_agg":"Gelijk totaal","bracket.agg":"Totaal","status.live":"Live","status.finished":"Afgelopen","status.scheduled":"Gepland","status.full_time":"Einde wedstrijd","status.halftime":"Rust","status.first_half":"1e helft","status.second_half":"2e helft","status.kickoff":"Aftrap","status.end":"Einde","event.goal":"Doelpunt","event.yellow_card":"Gele kaart","event.red_card":"Rode kaart","event.substitution":"Wissel","event.var":"VAR","event.header":"Kopbal","event.shot":"Schot","event.penalty":"Penalty","event.free_kick":"Vrije trap","form.W":"W","form.D":"G","form.L":"V","team.details":"Details","team.possession":"Balbezit","team.shots":"Schoten","team.on_target":"Op doel","team.fouls":"Overtredingen","team.spectators":"toeschouwers","team.top_scorer":"Topscorer","team.next_match":"Volgende wedstrijd","team.upcoming_matches":"Volgende wedstrijden","team.previous_matches":"Vorige wedstrijden","team.form_trend":"Seizoenvorm","team.h2h":"Onderlinge duels","standings.stats":"wedstrijden gespeeld · doelpunten","standings.pos_label":"Positie","standings.compact_hidden":"ploegen","team.in":"Over","team.no_match":"Geen wedstrijd beschikbaar","team.off_season":"Nieuw seizoen begint binnenkort","team.unknown_entity":"Onbekende entiteit","time.today":"Vandaag","time.yesterday":"Gisteren","time.tomorrow":"Morgen","time.now":"nu","time.in_n_min":"over {n} min","time.in_n_h":"over {n} uur","time.in_n_d":"over {n} dagen","time.n_min_ago":"{n} min geleden","time.n_h_ago":"{n} uur geleden","time.n_d_ago":"{n} dagen geleden","cd.days":"dagen","cd.hrs":"uur","cd.min":"min","cd.sec":"sec","lineup.bench":"Bank","lineup.empty.title":"Opstellingen niet beschikbaar","lineup.empty.sub":"Opstellingen worden kort voor de aftrap gepubliceerd","timeline.empty.title":"Nog geen gebeurtenissen","timeline.empty.sub":"Gebeurtenissen verschijnen tijdens de wedstrijd","timeline.event":"Gebeurtenis","timeline.penalty":"Penalty","news.empty":"Geen nieuws beschikbaar","news.articles":"{n} artikelen","phase.regular_season":"Competitie","phase.group_stage":"Groepsfase","phase.playoffs":"Play-offs","zone.champions":"Champions League","zone.europa":"Europa League","zone.conference":"Conference League","zone.relegation":"Degradatie","zone.qualified":"Gekwalificeerd","zone.third_place_playoff":"Beste 3e","zone.eliminated":"Uitgeschakeld","hero.groups":"groepen","hero.teams":"teams","hero.not_started":"Niet gestart","col.pos":"#","col.team":"Team","col.played":"G","col.wins":"W","col.draws":"GL","col.losses":"V","col.gd":"+/-","col.points":"Pnt","generic.no_match":"Geen wedstrijd beschikbaar","generic.matches_count":"{n} wedstrijden","generic.unknown_entity":"Onbekende entiteit","generic.close":"Sluiten","generic.unknown":"Onbekend","popup.match_details":"Wedstrijddetails","popup.lineups":"Opstellingen","popup.timeline":"Tijdlijn","popup.h2h":"Onderlinge duels","popup.no_events":"Geen gebeurtenissen beschikbaar","month.1":"Jan","month.2":"Feb","month.3":"Mrt","month.4":"Apr","month.5":"Mei","month.6":"Jun","month.7":"Jul","month.8":"Aug","month.9":"Sep","month.10":"Okt","month.11":"Nov","month.12":"Dec","scorers.goals":"Doelpunten","scorers.matches":"Wedstrijden","scorers.empty":"Geen topschutters beschikbaar","scorers.rank":"#","commentary.empty":"Geen live commentaar beschikbaar","ui.loading":"Laden...","ui.select_entity":"Selecteer entiteit","ui.unknown_entity":"Onbekende entiteit","ui.sensor_unavailable":"Sensor niet beschikbaar","ui.invalid_config":"Ongeldige configuratie","ui.entity_required":"Entiteit vereist","ui.loading_timeout":"Laden mislukt","ui.entity_not_responding":"Entiteit reageert niet","ui.check_integration":"Controleer of de integratie actief is","ui.no_live_match":"Geen live wedstrijd nu","ui.no_live_match_hint":"Commentaar verschijnt hier tijdens een live wedstrijd","ui.off_season":"Geen wedstrijden","ui.off_season_hint":"Geen wedstrijden gepland in deze periode","ui.endpoint_unsupported":"Niet beschikbaar voor dit toernooi","ui.endpoint_unsupported_hint":"ESPN biedt deze data niet voor alle competities","ui.wrong_entity_type":"Verkeerd sensortype","ui.wrong_entity_type_hint":"Deze kaart verwacht een ander sensortype","card.my_teams":"Mijn Teams","match.vs":"tegen","weather.wind":"Windsnelheid (Beaufort)"},it:{"card.bracket":"Tabellone","card.lineup":"Formazioni","card.timeline":"Cronologia","card.news":"Notizie","card.standings":"Classifica","card.scorers":"Capocannonieri","card.stats":"Statistiche","card.commentary":"Telecronaca","card.video":"Video","competition.round":"Giornata","ui.neutral_site":"Campo neutro","ui.open_stats":"Apri statistiche ESPN","ui.open_commentary":"Apri telecronaca ESPN","ui.open_video":"Apri video ESPN","round.final":"Finale","round.semifinals":"Semifinali","round.quarterfinals":"Quarti di finale","round.r16":"Ottavi di finale","round.r32":"Sedicesimi","round.knockout_playoffs":"Spareggi KO","round.preliminary":"Turno preliminare","round.short.semifinals":"Semi","round.short.quarterfinals":"Quarti","round.short.r16":"Ottavi","bracket.empty.title":"Tabellone non disponibile","bracket.empty.sub":"La fase a eliminazione diretta inizierà presto","bracket.tbd":"Da def.","bracket.tied_agg":"Pari aggreg.","bracket.agg":"Aggreg.","status.live":"Diretta","status.finished":"Finita","status.scheduled":"Programmata","status.full_time":"Termine","status.halftime":"Intervallo","status.first_half":"Primo Tempo","status.second_half":"Secondo Tempo","status.kickoff":"Inizio","status.end":"Fine","event.goal":"Goal","event.yellow_card":"Cartellino giallo","event.red_card":"Cartellino rosso","event.substitution":"Sostituzione","event.var":"VAR","event.header":"Colpo di testa","event.shot":"Tiro","event.penalty":"Rigore","event.free_kick":"Calcio di punizione","form.W":"V","form.D":"N","form.L":"P","team.details":"Dettagli","team.possession":"Possesso","team.shots":"Tiri","team.on_target":"In porta","team.fouls":"Falli","team.spectators":"spettatori","team.top_scorer":"Capocannoniere","team.next_match":"Prossima partita","team.in":"A","team.no_match":"Nessuna partita disponibile","team.off_season":"Nuova stagione in arrivo","team.unknown_entity":"Entità sconosciuta","team.upcoming_matches":"Prossime partite","team.previous_matches":"Partite precedenti","team.form_trend":"Forma stagionale","team.h2h":"Testa a testa","standings.stats":"partite giocate · gol","standings.pos_label":"Posizione","standings.compact_hidden":"squadre nascoste","time.today":"Oggi","time.yesterday":"Ieri","time.tomorrow":"Domani","time.now":"ora","time.in_n_min":"tra {n} min","time.in_n_h":"tra {n} h","time.in_n_d":"tra {n} g","time.n_min_ago":"{n} min fa","time.n_h_ago":"{n} h fa","time.n_d_ago":"{n} g fa","cd.days":"giorni","cd.hrs":"ore","cd.min":"min","cd.sec":"sec","lineup.bench":"Panchina","lineup.empty.title":"Formazioni non disponibili","lineup.empty.sub":"Le formazioni vengono pubblicate poco prima del fischio d'inizio","timeline.empty.title":"Nessun evento ancora","timeline.empty.sub":"Gli eventi compaiono durante la partita","timeline.event":"Evento","timeline.penalty":"Rigore","news.empty":"Nessuna notizia disponibile","news.articles":"{n} articoli","zone.champions":"Champions","zone.europa":"Europa","zone.conference":"Conference League","zone.relegation":"Retrocessione","zone.qualified":"Qualificate","zone.third_place_playoff":"Migliori 3°","zone.eliminated":"Eliminate","hero.groups":"gironi","hero.teams":"squadre","hero.not_started":"Non iniziato","phase.regular_season":"Campionato","phase.group_stage":"Fase a gironi","phase.playoffs":"Play-off","col.pos":"#","col.team":"Squadra","col.played":"P","col.wins":"V","col.draws":"N","col.losses":"S","col.gd":"+/-","col.points":"Pt","generic.no_match":"Nessuna partita disponibile","generic.matches_count":"{n} partite","generic.unknown_entity":"Entità sconosciuta","generic.close":"Chiudi","generic.unknown":"Sconosciuto","popup.match_details":"Dettagli partita","popup.lineups":"Formazioni","popup.timeline":"Cronologia","popup.h2h":"Precedenti","popup.no_events":"Nessun evento disponibile","month.1":"Gen","month.2":"Feb","month.3":"Mar","month.4":"Apr","month.5":"Mag","month.6":"Giu","month.7":"Lug","month.8":"Ago","month.9":"Set","month.10":"Ott","month.11":"Nov","month.12":"Dic","scorers.goals":"Gol","scorers.matches":"Partite","scorers.empty":"Nessun capocannoniere disponibile","scorers.rank":"#","commentary.empty":"Nessun commento in diretta disponibile","ui.loading":"Caricamento...","ui.select_entity":"Seleziona entità","ui.unknown_entity":"Entità sconosciuta","ui.sensor_unavailable":"Sensore non disponibile","ui.invalid_config":"Configurazione non valida","ui.entity_required":"Entità obbligatoria","ui.loading_timeout":"Timeout caricamento","ui.entity_not_responding":"Entità non risponde","ui.check_integration":"Controlla se l'integrazione è attiva","ui.no_live_match":"Nessuna partita in diretta","ui.no_live_match_hint":"Il commento appare qui durante una partita live","ui.off_season":"Fuori stagione","ui.off_season_hint":"Nessuna partita programmata in questo periodo","ui.endpoint_unsupported":"Non disponibile per questa competizione","ui.endpoint_unsupported_hint":"ESPN non fornisce questi dati per tutte le competizioni","ui.wrong_entity_type":"Tipo di sensore errato","ui.wrong_entity_type_hint":"Questa card si aspetta un sensore diverso","card.my_teams":"I Miei Team","match.vs":"contro","weather.wind":"Velocità del vento (Beaufort)"},fr:{"card.bracket":"Tableau","card.lineup":"Compositions","card.timeline":"Chronologie","card.news":"Actualités","card.standings":"Classement","card.scorers":"Buteurs","card.stats":"Stats","card.commentary":"Commentaire","card.video":"Vidéo","competition.round":"Journée","ui.neutral_site":"Terrain neutre","ui.open_stats":"Ouvrir les stats ESPN","ui.open_commentary":"Ouvrir le commentaire ESPN","ui.open_video":"Ouvrir la vidéo ESPN","round.final":"Finale","round.semifinals":"Demi-finales","round.quarterfinals":"Quarts de finale","round.r16":"Huitièmes de finale","round.r32":"Seizièmes","round.knockout_playoffs":"Barrages","round.preliminary":"Tour préliminaire","round.short.semifinals":"Demis","round.short.quarterfinals":"Quarts","round.short.r16":"8èmes","bracket.empty.title":"Tableau non disponible","bracket.empty.sub":"La phase à élimination directe commencera bientôt","bracket.tbd":"À déf.","bracket.tied_agg":"Score cumulé égal","bracket.agg":"Cumul","status.live":"En direct","status.finished":"Terminé","status.scheduled":"Programmé","status.full_time":"Temps régl.","status.halftime":"Mi-temps","status.first_half":"1ère mi-temps","status.second_half":"2ème mi-temps","status.kickoff":"Coup d'envoi","status.end":"Fin","event.goal":"But","event.yellow_card":"Carton jaune","event.red_card":"Carton rouge","event.substitution":"Remplacement","event.var":"VAR","event.header":"Coup de tête","event.shot":"Tir","event.penalty":"Penalty","event.free_kick":"Coup franc","form.W":"V","form.D":"N","form.L":"D","team.details":"Détails","team.possession":"Possession","team.shots":"Tirs","team.on_target":"Cadrés","team.fouls":"Fautes","team.spectators":"spectateurs","team.top_scorer":"Meilleur buteur","team.next_match":"Prochain match","team.in":"À","team.no_match":"Aucun match disponible","team.off_season":"Nouvelle saison bientôt","team.unknown_entity":"Entité inconnue","team.upcoming_matches":"Prochains matchs","team.previous_matches":"Matchs précédents","team.form_trend":"Forme de la saison","team.h2h":"Face à face","standings.stats":"matchs joués · buts","standings.pos_label":"Position","standings.compact_hidden":"équipes masquées","time.today":"Aujourd'hui","time.yesterday":"Hier","time.tomorrow":"Demain","time.now":"maintenant","time.in_n_min":"dans {n} min","time.in_n_h":"dans {n} h","time.in_n_d":"dans {n} j","time.n_min_ago":"il y a {n} min","time.n_h_ago":"il y a {n} h","time.n_d_ago":"il y a {n} j","cd.days":"jours","cd.hrs":"hrs","cd.min":"min","cd.sec":"sec","lineup.bench":"Banc","lineup.empty.title":"Compositions non disponibles","lineup.empty.sub":"Les compositions sont publiées peu avant le coup d'envoi","timeline.empty.title":"Aucun événement","timeline.empty.sub":"Les événements apparaissent pendant le match","timeline.event":"Événement","timeline.penalty":"Penalty","news.empty":"Aucune actualité disponible","news.articles":"{n} articles","zone.champions":"Champions","zone.europa":"Europa","zone.conference":"Conference League","zone.relegation":"Relégation","zone.qualified":"Qualifiées","zone.third_place_playoff":"Meilleurs 3es","zone.eliminated":"Éliminées","hero.groups":"groupes","hero.teams":"équipes","hero.not_started":"Pas commencé","phase.regular_season":"Saison régulière","phase.group_stage":"Phase de groupes","phase.playoffs":"Barrages","col.pos":"#","col.team":"Équipe","col.played":"J","col.wins":"G","col.draws":"N","col.losses":"P","col.gd":"+/-","col.points":"Pts","generic.no_match":"Aucun match disponible","generic.matches_count":"{n} matchs","generic.unknown_entity":"Entité inconnue","generic.close":"Fermer","generic.unknown":"Inconnu","popup.match_details":"Détails du match","popup.lineups":"Compositions","popup.timeline":"Chronologie","popup.h2h":"Confrontations","popup.no_events":"Aucun événement disponible","month.1":"Janv","month.2":"Févr","month.3":"Mars","month.4":"Avr","month.5":"Mai","month.6":"Juin","month.7":"Juil","month.8":"Août","month.9":"Sept","month.10":"Oct","month.11":"Nov","month.12":"Déc","scorers.goals":"Buts","scorers.matches":"Matchs","scorers.empty":"Aucun buteur disponible","scorers.rank":"#","commentary.empty":"Aucun commentaire en direct disponible","ui.loading":"Chargement...","ui.select_entity":"Sélectionner une entité","ui.unknown_entity":"Entité inconnue","ui.sensor_unavailable":"Capteur indisponible","ui.invalid_config":"Configuration invalide","ui.entity_required":"Entité requise","ui.loading_timeout":"Délai de chargement dépassé","ui.entity_not_responding":"L'entité ne répond pas","ui.check_integration":"Vérifiez que l'intégration est active","ui.no_live_match":"Aucun match en direct","ui.no_live_match_hint":"Le commentaire s'affiche ici pendant un match en direct","ui.off_season":"Hors saison","ui.off_season_hint":"Aucun match prévu pendant cette période","ui.endpoint_unsupported":"Non disponible pour cette compétition","ui.endpoint_unsupported_hint":"ESPN ne fournit pas ces données pour toutes les compétitions","ui.wrong_entity_type":"Mauvais type de capteur","ui.wrong_entity_type_hint":"Cette carte attend un capteur différent","card.my_teams":"Mes Équipes","match.vs":"contre","weather.wind":"Vitesse du vent (Beaufort)"},es:{"card.bracket":"Cuadro","card.lineup":"Alineaciones","card.timeline":"Cronología","card.news":"Noticias","card.standings":"Clasificación","card.scorers":"Goleadores","card.stats":"Stats","card.commentary":"Comentario","card.video":"Vídeo","competition.round":"Jornada","ui.neutral_site":"Campo neutral","ui.open_stats":"Abrir estadísticas ESPN","ui.open_commentary":"Abrir comentario ESPN","ui.open_video":"Abrir vídeo ESPN","round.final":"Final","round.semifinals":"Semifinales","round.quarterfinals":"Cuartos de final","round.r16":"Octavos de final","round.r32":"Dieciseisavos","round.knockout_playoffs":"Eliminatorias previas","round.preliminary":"Ronda preliminar","round.short.semifinals":"Semis","round.short.quarterfinals":"Cuartos","round.short.r16":"Octavos","bracket.empty.title":"Cuadro no disponible","bracket.empty.sub":"La fase eliminatoria comenzará pronto","bracket.tbd":"Por def.","bracket.tied_agg":"Empate global","bracket.agg":"Global","status.live":"En vivo","status.finished":"Finalizado","status.scheduled":"Programado","status.full_time":"Final","status.halftime":"Descanso","status.first_half":"Primer tiempo","status.second_half":"Segundo tiempo","status.kickoff":"Saque inicial","status.end":"Fin","event.goal":"Gol","event.yellow_card":"Tarjeta amarilla","event.red_card":"Tarjeta roja","event.substitution":"Sustitución","event.var":"VAR","event.header":"Cabezazo","event.shot":"Disparo","event.penalty":"Penalti","event.free_kick":"Falta directa","form.W":"V","form.D":"E","form.L":"D","team.details":"Detalles","team.possession":"Posesión","team.shots":"Tiros","team.on_target":"Al arco","team.fouls":"Faltas","team.spectators":"espectadores","team.top_scorer":"Goleador","team.next_match":"Próximo partido","team.in":"En","team.no_match":"Ningún partido disponible","team.off_season":"Nueva temporada próximamente","team.unknown_entity":"Entidad desconocida","team.upcoming_matches":"Próximos partidos","team.previous_matches":"Partidos anteriores","team.form_trend":"Forma de la temporada","team.h2h":"Cara a cara","standings.stats":"partidos jugados · goles","standings.pos_label":"Posición","standings.compact_hidden":"equipos ocultos","time.today":"Hoy","time.yesterday":"Ayer","time.tomorrow":"Mañana","time.now":"ahora","time.in_n_min":"en {n} min","time.in_n_h":"en {n} h","time.in_n_d":"en {n} d","time.n_min_ago":"hace {n} min","time.n_h_ago":"hace {n} h","time.n_d_ago":"hace {n} d","cd.days":"días","cd.hrs":"hrs","cd.min":"min","cd.sec":"seg","lineup.bench":"Banquillo","lineup.empty.title":"Alineaciones no disponibles","lineup.empty.sub":"Las alineaciones se publican poco antes del saque inicial","timeline.empty.title":"Aún no hay eventos","timeline.empty.sub":"Los eventos aparecen durante el partido","timeline.event":"Evento","timeline.penalty":"Penalti","news.empty":"No hay noticias disponibles","news.articles":"{n} artículos","zone.champions":"Champions","zone.europa":"Europa","zone.conference":"Conference League","zone.relegation":"Descenso","zone.qualified":"Clasificadas","zone.third_place_playoff":"Mejores 3°","zone.eliminated":"Eliminadas","hero.groups":"grupos","hero.teams":"equipos","hero.not_started":"No iniciado","phase.regular_season":"Temporada regular","phase.group_stage":"Fase de grupos","phase.playoffs":"Eliminatorias","col.pos":"#","col.team":"Equipo","col.played":"PJ","col.wins":"G","col.draws":"E","col.losses":"P","col.gd":"+/-","col.points":"Pts","generic.no_match":"Ningún partido disponible","generic.matches_count":"{n} partidos","generic.unknown_entity":"Entidad desconocida","generic.close":"Cerrar","generic.unknown":"Desconocido","popup.match_details":"Detalles del partido","popup.lineups":"Alineaciones","popup.timeline":"Cronología","popup.h2h":"Enfrentamientos","popup.no_events":"Sin eventos disponibles","month.1":"Ene","month.2":"Feb","month.3":"Mar","month.4":"Abr","month.5":"May","month.6":"Jun","month.7":"Jul","month.8":"Ago","month.9":"Sep","month.10":"Oct","month.11":"Nov","month.12":"Dic","scorers.goals":"Goles","scorers.matches":"Partidos","scorers.empty":"No hay goleadores disponibles","scorers.rank":"#","commentary.empty":"No hay comentario en vivo disponible","ui.loading":"Cargando...","ui.select_entity":"Seleccionar entidad","ui.unknown_entity":"Entidad desconocida","ui.sensor_unavailable":"Sensor no disponible","ui.invalid_config":"Configuración inválida","ui.entity_required":"Entidad requerida","ui.loading_timeout":"Tiempo de carga agotado","ui.entity_not_responding":"La entidad no responde","ui.check_integration":"Comprueba si la integración está activa","ui.no_live_match":"Sin partido en directo ahora","ui.no_live_match_hint":"El comentario aparece aquí durante un partido en vivo","ui.off_season":"Fuera de temporada","ui.off_season_hint":"No hay partidos programados en este período","ui.endpoint_unsupported":"No disponible para esta competición","ui.endpoint_unsupported_hint":"ESPN no proporciona estos datos para todas las competiciones","ui.wrong_entity_type":"Tipo de sensor incorrecto","ui.wrong_entity_type_hint":"Esta tarjeta espera un sensor diferente","card.my_teams":"Mis Equipos","match.vs":"vs","weather.wind":"Velocidad del viento (Beaufort)"},de:{"card.bracket":"K.o.-Runde","card.lineup":"Aufstellungen","card.timeline":"Spielverlauf","card.news":"Nachrichten","card.standings":"Tabelle","card.scorers":"Torschützen","card.stats":"Stats","card.commentary":"Kommentar","card.video":"Video","competition.round":"Spieltag","ui.neutral_site":"Neutraler Platz","ui.open_stats":"ESPN-Statistiken öffnen","ui.open_commentary":"ESPN-Kommentar öffnen","ui.open_video":"ESPN-Video öffnen","round.final":"Finale","round.semifinals":"Halbfinale","round.quarterfinals":"Viertelfinale","round.r16":"Achtelfinale","round.r32":"Sechzehntelfinale","round.knockout_playoffs":"K.o.-Playoffs","round.preliminary":"Vorrunde","round.short.semifinals":"HF","round.short.quarterfinals":"VF","round.short.r16":"AF","bracket.empty.title":"K.o.-Runde nicht verfügbar","bracket.empty.sub":"Die K.o.-Phase beginnt bald","bracket.tbd":"N.N.","bracket.tied_agg":"Gleichstand gesamt","bracket.agg":"Gesamt","status.live":"Live","status.finished":"Beendet","status.scheduled":"Geplant","status.full_time":"Endstand","status.halftime":"Halbzeit","status.first_half":"1. Halbzeit","status.second_half":"2. Halbzeit","status.kickoff":"Anstoß","status.end":"Ende","event.goal":"Tor","event.yellow_card":"Gelbe Karte","event.red_card":"Rote Karte","event.substitution":"Auswechslung","event.var":"VAR","event.header":"Kopfball","event.shot":"Schuss","event.penalty":"Elfmeter","event.free_kick":"Freistoß","form.W":"S","form.D":"U","form.L":"N","team.details":"Details","team.possession":"Ballbesitz","team.shots":"Schüsse","team.on_target":"Aufs Tor","team.fouls":"Fouls","team.spectators":"Zuschauer","team.top_scorer":"Torschützenkönig","team.next_match":"Nächstes Spiel","team.upcoming_matches":"Nächste Spiele","team.previous_matches":"Vorherige Spiele","team.form_trend":"Saisonform","team.h2h":"Direktvergleich","team.in":"in","team.no_match":"Kein Spiel verfügbar","team.off_season":"Neue Saison beginnt bald","team.unknown_entity":"Unbekannte Entität","standings.stats":"Spiele · Tore","standings.pos_label":"Position","standings.compact_hidden":"Teams ausgeblendet","time.today":"Heute","time.yesterday":"Gestern","time.tomorrow":"Morgen","time.now":"jetzt","time.in_n_min":"in {n} Min.","time.in_n_h":"in {n} Std.","time.in_n_d":"in {n} T.","time.n_min_ago":"vor {n} Min.","time.n_h_ago":"vor {n} Std.","time.n_d_ago":"vor {n} T.","cd.days":"Tage","cd.hrs":"Std","cd.min":"Min","cd.sec":"Sek","lineup.bench":"Bank","lineup.empty.title":"Aufstellungen nicht verfügbar","lineup.empty.sub":"Aufstellungen werden kurz vor Anstoß veröffentlicht","timeline.empty.title":"Noch keine Ereignisse","timeline.empty.sub":"Ereignisse erscheinen während des Spiels","timeline.event":"Ereignis","timeline.penalty":"Elfmeter","news.empty":"Keine Nachrichten verfügbar","news.articles":"{n} Artikel","zone.champions":"Champions League","zone.europa":"Europa League","zone.conference":"Conference League","zone.relegation":"Abstieg","zone.qualified":"Qualifiziert","zone.third_place_playoff":"Bester 3.","zone.eliminated":"Ausgeschieden","hero.groups":"Gruppen","hero.teams":"Teams","hero.not_started":"Nicht gestartet","phase.regular_season":"Reguläre Saison","phase.group_stage":"Gruppenphase","phase.playoffs":"Playoffs","col.pos":"#","col.team":"Verein","col.played":"Sp","col.wins":"S","col.draws":"U","col.losses":"N","col.gd":"+/-","col.points":"Pkt","generic.no_match":"Kein Spiel verfügbar","generic.matches_count":"{n} Spiele","generic.unknown_entity":"Unbekannte Entität","generic.close":"Schließen","generic.unknown":"Unbekannt","popup.match_details":"Spieldetails","popup.lineups":"Aufstellungen","popup.timeline":"Spielverlauf","popup.h2h":"Direktvergleich","popup.no_events":"Keine Ereignisse verfügbar","month.1":"Jan","month.2":"Feb","month.3":"Mär","month.4":"Apr","month.5":"Mai","month.6":"Jun","month.7":"Jul","month.8":"Aug","month.9":"Sep","month.10":"Okt","month.11":"Nov","month.12":"Dez","scorers.goals":"Tore","scorers.matches":"Spiele","scorers.empty":"Keine Torschützen verfügbar","scorers.rank":"#","commentary.empty":"Kein Live-Kommentar verfügbar","ui.loading":"Wird geladen...","ui.select_entity":"Entität auswählen","ui.unknown_entity":"Unbekannte Entität","ui.sensor_unavailable":"Sensor nicht verfügbar","ui.invalid_config":"Ungültige Konfiguration","ui.entity_required":"Entität erforderlich","ui.loading_timeout":"Ladetimeout","ui.entity_not_responding":"Entität antwortet nicht","ui.check_integration":"Prüfe ob die Integration aktiv ist","ui.no_live_match":"Kein Live-Spiel gerade","ui.no_live_match_hint":"Kommentar erscheint hier während eines Live-Spiels","ui.off_season":"Keine Spiele","ui.off_season_hint":"Keine Spiele in diesem Zeitraum geplant","ui.endpoint_unsupported":"Nicht verfügbar für diesen Wettbewerb","ui.endpoint_unsupported_hint":"ESPN stellt diese Daten nicht für alle Wettbewerbe bereit","ui.wrong_entity_type":"Falscher Sensortyp","ui.wrong_entity_type_hint":"Diese Karte erwartet einen anderen Sensor","card.my_teams":"Meine Teams","match.vs":"gegen","weather.wind":"Windgeschwindigkeit (Beaufort)"},pt:{"card.bracket":"Chave","card.lineup":"Escalações","card.timeline":"Cronologia","card.news":"Notícias","card.standings":"Classificação","card.scorers":"Artilheiros","card.stats":"Estatísticas","card.commentary":"Comentário","card.video":"Vídeo","competition.round":"Jornada","ui.neutral_site":"Campo neutro","ui.open_stats":"Abrir estatísticas ESPN","ui.open_commentary":"Abrir comentário ESPN","ui.open_video":"Abrir vídeo ESPN","round.final":"Final","round.semifinals":"Meias-finais","round.quarterfinals":"Quartas de final","round.r16":"Oitavas de final","round.r32":"Avos de final","round.knockout_playoffs":"Pré-eliminatórias","round.preliminary":"Fase preliminar","round.short.semifinals":"Semis","round.short.quarterfinals":"Quartas","round.short.r16":"Oitavas","bracket.empty.title":"Chave não disponível","bracket.empty.sub":"A fase eliminatória começa em breve","bracket.tbd":"A def.","bracket.tied_agg":"Empate no agregado","bracket.agg":"Agregado","status.live":"Ao vivo","status.finished":"Encerrado","status.scheduled":"Programado","status.full_time":"Tempo normal","status.halftime":"Intervalo","status.first_half":"1º tempo","status.second_half":"2º tempo","status.kickoff":"Pontapé inicial","status.end":"Fim","event.goal":"Gol","event.yellow_card":"Cartão amarelo","event.red_card":"Cartão vermelho","event.substitution":"Substituição","event.var":"VAR","event.header":"Cabeçada","event.shot":"Chute","event.penalty":"Pênalti","event.free_kick":"Falta","form.W":"V","form.D":"E","form.L":"D","team.details":"Detalhes","team.possession":"Posse","team.shots":"Chutes","team.on_target":"No gol","team.fouls":"Faltas","team.spectators":"espectadores","team.top_scorer":"Artilheiro","team.next_match":"Próximo jogo","team.upcoming_matches":"Próximos jogos","team.previous_matches":"Jogos anteriores","team.form_trend":"Forma na temporada","team.h2h":"Confronto direto","team.in":"em","team.no_match":"Nenhum jogo disponível","team.off_season":"Nova temporada em breve","team.unknown_entity":"Entidade desconhecida","standings.stats":"jogos disputados · gols","standings.pos_label":"Posição","standings.compact_hidden":"times ocultos","time.today":"Hoje","time.yesterday":"Ontem","time.tomorrow":"Amanhã","time.now":"agora","time.in_n_min":"em {n} min","time.in_n_h":"em {n} h","time.in_n_d":"em {n} d","time.n_min_ago":"há {n} min","time.n_h_ago":"há {n} h","time.n_d_ago":"há {n} d","cd.days":"dias","cd.hrs":"hrs","cd.min":"min","cd.sec":"seg","lineup.bench":"Banco","lineup.empty.title":"Escalações não disponíveis","lineup.empty.sub":"As escalações são publicadas pouco antes do início","timeline.empty.title":"Ainda sem eventos","timeline.empty.sub":"Os eventos aparecem durante o jogo","timeline.event":"Evento","timeline.penalty":"Pênalti","news.empty":"Sem notícias disponíveis","news.articles":"{n} artigos","zone.champions":"Champions League","zone.europa":"Europa League","zone.conference":"Conference League","zone.relegation":"Rebaixamento","zone.qualified":"Classificado","zone.third_place_playoff":"Melhores 3°","zone.eliminated":"Eliminado","hero.groups":"grupos","hero.teams":"times","hero.not_started":"Não iniciado","phase.regular_season":"Temporada regular","phase.group_stage":"Fase de grupos","phase.playoffs":"Eliminatórias","col.pos":"#","col.team":"Time","col.played":"J","col.wins":"V","col.draws":"E","col.losses":"D","col.gd":"+/-","col.points":"Pts","generic.no_match":"Nenhum jogo disponível","generic.matches_count":"{n} jogos","generic.unknown_entity":"Entidade desconhecida","generic.close":"Fechar","generic.unknown":"Desconhecido","popup.match_details":"Detalhes do jogo","popup.lineups":"Escalações","popup.timeline":"Cronologia","popup.h2h":"Confronto direto","popup.no_events":"Sem eventos disponíveis","month.1":"Jan","month.2":"Fev","month.3":"Mar","month.4":"Abr","month.5":"Mai","month.6":"Jun","month.7":"Jul","month.8":"Ago","month.9":"Set","month.10":"Out","month.11":"Nov","month.12":"Dez","scorers.goals":"Gols","scorers.matches":"Jogos","scorers.empty":"Nenhum artilheiro disponível","scorers.rank":"#","commentary.empty":"Nenhum comentário ao vivo disponível","ui.loading":"Carregando...","ui.select_entity":"Selecionar entidade","ui.unknown_entity":"Entidade desconhecida","ui.sensor_unavailable":"Sensor indisponível","ui.invalid_config":"Configuração inválida","ui.entity_required":"Entidade obrigatória","ui.loading_timeout":"Tempo de carregamento esgotado","ui.entity_not_responding":"Entidade não responde","ui.check_integration":"Verifique se a integração está ativa","ui.no_live_match":"Sem jogo ao vivo agora","ui.no_live_match_hint":"O comentário aparece aqui durante um jogo ao vivo","ui.off_season":"Fora de temporada","ui.off_season_hint":"Nenhum jogo agendado neste período","ui.endpoint_unsupported":"Não disponível para esta competição","ui.endpoint_unsupported_hint":"ESPN não fornece esses dados para todas as competições","ui.wrong_entity_type":"Tipo de sensor incorreto","ui.wrong_entity_type_hint":"Este cartão espera um sensor diferente","card.my_teams":"Meus Times","match.vs":"contra","weather.wind":"Velocidade do vento (Beaufort)"}},ce=["en","it","fr","es","nl","de","pt"];function de(e,t){const a=[];t&&"string"==typeof t.language&&a.push(t.language),e&&e.locale&&e.locale.language&&a.push(e.locale.language),e&&e.language&&a.push(e.language);for(const e of a){if(!e)continue;const t=String(e).toLowerCase().split("-")[0];if(ce.includes(t))return t}return"en"}function pe(e,t,a){let i=(le[t]||le.en)[e];return void 0===i&&(i=le.en[e]),void 0===i?e:(a&&Object.keys(a).forEach((e=>{i=i.replace(new RegExp("\\{"+e+"\\}","g"),a[e])})),i)}const he=s`
  :host {
    /* Accent palette — standaard (dark/light) */
    --cl-accent: #6366f1;
    --cl-accent-2: #ec4899;
    /* RGB-waarden voor gebruik in rgba() */
    --cl-accent-rgb: 99,102,241;
    --cl-accent-2-rgb: 236,72,153;
    --cl-live: #ef4444;
    --cl-live-glow: rgba(239,68,68,0.5);
    --cl-green: #10b981;
    --cl-gold: #fbbf24;
    --cl-gold-glow: rgba(251,191,36,0.4);
    --cl-gold-text: #fde047;
    --cl-cl: #6366f1;
    --cl-el: #f97316;
    --cl-rel: #ef4444;
    --cl-conf: #a855f7;
  }

  /* ---------- DARK (standaard) ---------- */
  :host,
  :host([data-skin="dark"]) {
    --cl-bg: #14182a;
    --cl-surface: rgba(255,255,255,0.05);
    --cl-surface-2: rgba(255,255,255,0.08);
    --cl-card-2: rgba(255,255,255,0.05);
    --cl-divider: rgba(255,255,255,0.08);
    --cl-glass-border: rgba(255,255,255,0.08);
    --cl-text: #f4f6fb;
    --cl-text-2: #aab2c5;
    --cl-shadow: rgba(0,0,0,0.30);
    --cl-overlay-strong: rgba(0,0,0,0.55);
    --cl-overlay-soft: rgba(0,0,0,0.25);
    --cl-chip-bg: rgba(255,255,255,0.10);
    --cl-chip-border: rgba(255,255,255,0.12);
    --cl-toast-bg: #0b0f1a;
    --cl-num-bg: #0b0f1a;
  }

  /* ---------- LIGHT ---------- */
  :host([data-skin="light"]) {
    --cl-bg: #ffffff;
    --cl-surface: rgba(15,23,42,0.04);
    --cl-surface-2: rgba(15,23,42,0.07);
    --cl-card-2: rgba(15,23,42,0.04);
    --cl-divider: rgba(15,23,42,0.10);
    --cl-glass-border: rgba(15,23,42,0.10);
    --cl-text: #14182a;
    --cl-text-2: #5b6577;
    --cl-shadow: rgba(15,23,42,0.12);
    --cl-overlay-strong: rgba(0,0,0,0.45);
    --cl-overlay-soft: rgba(0,0,0,0.18);
    --cl-chip-bg: rgba(15,23,42,0.06);
    --cl-chip-border: rgba(15,23,42,0.12);
    --cl-toast-bg: #1a1f33;
    --cl-num-bg: #1a1f33;
  }

  /* ---------- FEYENOORD (rood/zwart) ---------- */
  :host([data-skin="red-white"]) {
    --cl-accent: #e50000;
    --cl-accent-2: #ff2222;
    --cl-accent-rgb: 229,0,0;
    --cl-accent-2-rgb: 255,34,34;
    --cl-live: #ff3333;
    --cl-live-glow: rgba(229,0,0,0.65);
    --cl-cl: #e50000;
    --cl-el: #ff5500;
    --cl-rel: #aa0000;
    --cl-conf: #cc2200;
    --cl-gold: #ffd700;
    --cl-gold-glow: rgba(255,215,0,0.4);
    --cl-gold-text: #ffe55c;
    --cl-bg: #0a0000;
    --cl-surface: rgba(229,0,0,0.10);
    --cl-surface-2: rgba(229,0,0,0.18);
    --cl-card-2: rgba(60,0,0,0.85);
    --cl-divider: rgba(229,0,0,0.22);
    --cl-glass-border: rgba(229,0,0,0.25);
    --cl-text: #ffffff;
    --cl-text-2: #c8a0a0;
    --cl-shadow: rgba(0,0,0,0.50);
    --cl-overlay-strong: rgba(0,0,0,0.65);
    --cl-overlay-soft: rgba(0,0,0,0.35);
    --cl-chip-bg: rgba(229,0,0,0.22);
    --cl-chip-border: rgba(229,0,0,0.35);
    --cl-toast-bg: #0a0000;
    --cl-num-bg: #0a0000;
  }

  /* ---------- CLASSIC (groen/goud — voetbalveld) ---------- */
  :host([data-skin="classic"]) {
    --cl-accent: #16a34a;
    --cl-accent-2: #22c55e;
    --cl-accent-rgb: 22,163,74;
    --cl-accent-2-rgb: 34,197,94;
    --cl-live: #ef4444;
    --cl-live-glow: rgba(239,68,68,0.5);
    --cl-cl: #16a34a;
    --cl-el: #f97316;
    --cl-rel: #ef4444;
    --cl-conf: #84cc16;
    --cl-bg: #0a120a;
    --cl-surface: rgba(22,163,74,0.07);
    --cl-surface-2: rgba(22,163,74,0.12);
    --cl-card-2: rgba(22,163,74,0.07);
    --cl-divider: rgba(22,163,74,0.18);
    --cl-glass-border: rgba(22,163,74,0.20);
    --cl-text: #f0f4f0;
    --cl-text-2: #8aaa8a;
    --cl-shadow: rgba(0,0,0,0.35);
    --cl-overlay-strong: rgba(0,0,0,0.55);
    --cl-overlay-soft: rgba(0,0,0,0.25);
    --cl-chip-bg: rgba(22,163,74,0.10);
    --cl-chip-border: rgba(22,163,74,0.22);
    --cl-toast-bg: #060d06;
    --cl-num-bg: #060d06;
  }

  /* ---------- NEON (cyberpunk) ---------- */
  :host([data-skin="neon"]) {
    --cl-accent: #00e5ff;
    --cl-accent-2: #ff00aa;
    --cl-accent-rgb: 0,229,255;
    --cl-accent-2-rgb: 255,0,170;
    --cl-live: #ff2d55;
    --cl-live-glow: rgba(255,45,85,0.6);
    --cl-cl: #00e5ff;
    --cl-el: #ff9500;
    --cl-rel: #ff2d55;
    --cl-conf: #bf5af2;
    --cl-gold: #ffd60a;
    --cl-gold-glow: rgba(255,214,10,0.5);
    --cl-gold-text: #ffe55c;
    --cl-bg: #080816;
    --cl-surface: rgba(0,229,255,0.05);
    --cl-surface-2: rgba(0,229,255,0.09);
    --cl-card-2: rgba(0,229,255,0.05);
    --cl-divider: rgba(0,229,255,0.14);
    --cl-glass-border: rgba(0,229,255,0.18);
    --cl-text: #e8f8ff;
    --cl-text-2: #7ab8cc;
    --cl-shadow: rgba(0,0,0,0.45);
    --cl-overlay-strong: rgba(0,0,0,0.65);
    --cl-overlay-soft: rgba(0,0,0,0.30);
    --cl-chip-bg: rgba(0,229,255,0.08);
    --cl-chip-border: rgba(0,229,255,0.20);
    --cl-toast-bg: #040410;
    --cl-num-bg: #040410;
  }

  /* ---------- GOLD (premium/Champions League) ---------- */
  :host([data-skin="gold"]) {
    --cl-accent: #f59e0b;
    --cl-accent-2: #fcd34d;
    --cl-accent-rgb: 245,158,11;
    --cl-accent-2-rgb: 252,211,77;
    --cl-live: #ef4444;
    --cl-live-glow: rgba(239,68,68,0.5);
    --cl-cl: #f59e0b;
    --cl-el: #f97316;
    --cl-rel: #ef4444;
    --cl-conf: #a855f7;
    --cl-gold: #f59e0b;
    --cl-gold-glow: rgba(245,158,11,0.5);
    --cl-gold-text: #fde047;
    --cl-bg: #0d0900;
    --cl-surface: rgba(245,158,11,0.06);
    --cl-surface-2: rgba(245,158,11,0.11);
    --cl-card-2: rgba(245,158,11,0.06);
    --cl-divider: rgba(245,158,11,0.16);
    --cl-glass-border: rgba(245,158,11,0.20);
    --cl-text: #faf6ed;
    --cl-text-2: #c4a96a;
    --cl-shadow: rgba(0,0,0,0.40);
    --cl-overlay-strong: rgba(0,0,0,0.60);
    --cl-overlay-soft: rgba(0,0,0,0.28);
    --cl-chip-bg: rgba(245,158,11,0.10);
    --cl-chip-border: rgba(245,158,11,0.22);
    --cl-toast-bg: #090600;
    --cl-num-bg: #090600;
  }

  /* ---------- ORANGE (Netherlands / Ajax / Dutch clubs) ---------- */
  :host([data-skin="orange"]) {
    --cl-accent: #f97316;
    --cl-accent-2: #fb923c;
    --cl-accent-rgb: 249,115,22;
    --cl-accent-2-rgb: 251,146,60;
    --cl-live: #ef4444;
    --cl-live-glow: rgba(249,115,22,0.65);
    --cl-cl: #f97316;
    --cl-el: #fbbf24;
    --cl-rel: #dc2626;
    --cl-conf: #f59e0b;
    --cl-gold: #fbbf24;
    --cl-gold-glow: rgba(251,191,36,0.45);
    --cl-gold-text: #fde68a;
    --cl-bg: #0d0600;
    --cl-surface: rgba(249,115,22,0.08);
    --cl-surface-2: rgba(249,115,22,0.14);
    --cl-card-2: rgba(249,115,22,0.08);
    --cl-divider: rgba(249,115,22,0.20);
    --cl-glass-border: rgba(249,115,22,0.24);
    --cl-text: #fff8f0;
    --cl-text-2: #c09060;
    --cl-shadow: rgba(0,0,0,0.45);
    --cl-overlay-strong: rgba(0,0,0,0.60);
    --cl-overlay-soft: rgba(0,0,0,0.28);
    --cl-chip-bg: rgba(249,115,22,0.12);
    --cl-chip-border: rgba(249,115,22,0.28);
    --cl-toast-bg: #080400;
    --cl-num-bg: #080400;
  }

  /* ---------- BLUE (Chelsea / PSG / Man City / Inter / Napoli / Lazio) ---------- */
  :host([data-skin="blue"]) {
    --cl-accent: #2563eb;
    --cl-accent-2: #60a5fa;
    --cl-accent-rgb: 37,99,235;
    --cl-accent-2-rgb: 96,165,250;
    --cl-live: #ef4444;
    --cl-live-glow: rgba(239,68,68,0.5);
    --cl-cl: #2563eb;
    --cl-el: #f97316;
    --cl-rel: #dc2626;
    --cl-conf: #7c3aed;
    --cl-gold: #fbbf24;
    --cl-gold-glow: rgba(251,191,36,0.45);
    --cl-gold-text: #fde68a;
    --cl-bg: #00050f;
    --cl-surface: rgba(37,99,235,0.08);
    --cl-surface-2: rgba(37,99,235,0.14);
    --cl-card-2: rgba(37,99,235,0.08);
    --cl-divider: rgba(37,99,235,0.20);
    --cl-glass-border: rgba(37,99,235,0.24);
    --cl-text: #f0f4ff;
    --cl-text-2: #7090c0;
    --cl-shadow: rgba(0,0,0,0.50);
    --cl-overlay-strong: rgba(0,0,0,0.65);
    --cl-overlay-soft: rgba(0,0,0,0.30);
    --cl-chip-bg: rgba(37,99,235,0.12);
    --cl-chip-border: rgba(37,99,235,0.28);
    --cl-toast-bg: #00030a;
    --cl-num-bg: #00030a;
  }

  /* ---------- BLACK-WHITE (Juventus / Newcastle / Borussia) ---------- */
  :host([data-skin="black-white"]) {
    --cl-accent: #e2e8f0;
    --cl-accent-2: #ffffff;
    --cl-accent-rgb: 226,232,240;
    --cl-accent-2-rgb: 255,255,255;
    --cl-live: #ef4444;
    --cl-live-glow: rgba(239,68,68,0.5);
    --cl-cl: #e2e8f0;
    --cl-el: #f97316;
    --cl-rel: #ef4444;
    --cl-conf: #a0aec0;
    --cl-gold: #fbbf24;
    --cl-gold-glow: rgba(251,191,36,0.45);
    --cl-gold-text: #fde68a;
    --cl-bg: #000000;
    --cl-surface: rgba(255,255,255,0.06);
    --cl-surface-2: rgba(255,255,255,0.10);
    --cl-card-2: rgba(255,255,255,0.06);
    --cl-divider: rgba(255,255,255,0.12);
    --cl-glass-border: rgba(255,255,255,0.15);
    --cl-text: #ffffff;
    --cl-text-2: #94a3b8;
    --cl-shadow: rgba(0,0,0,0.70);
    --cl-overlay-strong: rgba(0,0,0,0.70);
    --cl-overlay-soft: rgba(0,0,0,0.40);
    --cl-chip-bg: rgba(255,255,255,0.09);
    --cl-chip-border: rgba(255,255,255,0.18);
    --cl-toast-bg: #000000;
    --cl-num-bg: #000000;
  }

  /* ---------- ARSENAL (cannon red / gold) ---------- */
  :host([data-skin="arsenal"]) {
    --cl-accent: #ef0107;
    --cl-accent-2: #c8a232;
    --cl-accent-rgb: 239,1,7;
    --cl-accent-2-rgb: 200,162,50;
    --cl-live: #ff3333;
    --cl-live-glow: rgba(239,1,7,0.65);
    --cl-cl: #ef0107;
    --cl-el: #c8a232;
    --cl-rel: #990000;
    --cl-conf: #cc0000;
    --cl-gold: #c8a232;
    --cl-gold-glow: rgba(200,162,50,0.45);
    --cl-gold-text: #e8c84a;
    --cl-bg: #0a0000;
    --cl-surface: rgba(239,1,7,0.08);
    --cl-surface-2: rgba(239,1,7,0.14);
    --cl-card-2: rgba(50,0,0,0.90);
    --cl-divider: rgba(239,1,7,0.20);
    --cl-glass-border: rgba(239,1,7,0.25);
    --cl-text: #ffffff;
    --cl-text-2: #c09090;
    --cl-shadow: rgba(0,0,0,0.55);
    --cl-overlay-strong: rgba(0,0,0,0.65);
    --cl-overlay-soft: rgba(0,0,0,0.35);
    --cl-chip-bg: rgba(239,1,7,0.14);
    --cl-chip-border: rgba(239,1,7,0.30);
    --cl-toast-bg: #050000;
    --cl-num-bg: #050000;
  }

  /* ---------- BARCELONA (blaugrana) ---------- */
  :host([data-skin="barcelona"]) {
    --cl-accent: #004d98;
    --cl-accent-2: #a50044;
    --cl-accent-rgb: 0,77,152;
    --cl-accent-2-rgb: 165,0,68;
    --cl-live: #ef4444;
    --cl-live-glow: rgba(165,0,68,0.65);
    --cl-cl: #004d98;
    --cl-el: #a50044;
    --cl-rel: #7a0033;
    --cl-conf: #0066cc;
    --cl-gold: #fbbf24;
    --cl-gold-glow: rgba(251,191,36,0.40);
    --cl-gold-text: #fde68a;
    --cl-bg: #000510;
    --cl-surface: rgba(0,77,152,0.10);
    --cl-surface-2: rgba(0,77,152,0.18);
    --cl-card-2: rgba(0,10,40,0.90);
    --cl-divider: rgba(0,77,152,0.25);
    --cl-glass-border: rgba(0,77,152,0.30);
    --cl-text: #f0f4ff;
    --cl-text-2: #7a9abf;
    --cl-shadow: rgba(0,0,0,0.55);
    --cl-overlay-strong: rgba(0,0,0,0.65);
    --cl-overlay-soft: rgba(0,0,0,0.32);
    --cl-chip-bg: rgba(0,77,152,0.15);
    --cl-chip-border: rgba(165,0,68,0.35);
    --cl-toast-bg: #000308;
    --cl-num-bg: #000308;
  }

  /* ---------- REAL MADRID (los blancos) ---------- */
  :host([data-skin="real-madrid"]) {
    --cl-accent: #f5f5f5;
    --cl-accent-2: #c8a951;
    --cl-accent-rgb: 245,245,245;
    --cl-accent-2-rgb: 200,169,81;
    --cl-live: #ef4444;
    --cl-live-glow: rgba(239,68,68,0.5);
    --cl-cl: #f5f5f5;
    --cl-el: #c8a951;
    --cl-rel: #ef4444;
    --cl-conf: #b0b8cc;
    --cl-gold: #c8a951;
    --cl-gold-glow: rgba(200,169,81,0.45);
    --cl-gold-text: #e8cc70;
    --cl-bg: #06071a;
    --cl-surface: rgba(245,245,245,0.06);
    --cl-surface-2: rgba(245,245,245,0.10);
    --cl-card-2: rgba(10,12,30,0.90);
    --cl-divider: rgba(245,245,245,0.12);
    --cl-glass-border: rgba(245,245,245,0.16);
    --cl-text: #ffffff;
    --cl-text-2: #8a96b4;
    --cl-shadow: rgba(0,0,0,0.60);
    --cl-overlay-strong: rgba(0,0,0,0.70);
    --cl-overlay-soft: rgba(0,0,0,0.38);
    --cl-chip-bg: rgba(245,245,245,0.09);
    --cl-chip-border: rgba(200,169,81,0.35);
    --cl-toast-bg: #030410;
    --cl-num-bg: #030410;
  }
`,ge=["dark","light","red-white","classic","neon","gold","orange","blue","black-white","arsenal","barcelona","real-madrid"],ue={feyenoord:"red-white"};function me(e,t){const a=function(e){const t=e&&"string"==typeof e.skin?e.skin.toLowerCase():"dark";return ue[t]?ue[t]:ge.includes(t)?t:"dark"}(t);return e&&e.setAttribute&&e.setAttribute("data-skin",a),a}const fe=(e,t)=>Array.from({length:t-e+1},((t,a)=>e+a)),ve={serie_a:{match:(e,t)=>"ita.1"===e||t.includes("italian_serie_a"),champions:[1,2,3,4],europa:[5],conference:[6],relegation:"bottom3"},premier_league:{match:(e,t)=>"eng.1"===e||t.includes("english_premier"),champions:[1,2,3,4,5],europa:[6],conference:[7],relegation:"bottom3"},laliga:{match:(e,t)=>"esp.1"===e||t.includes("spanish_la_liga")||t.includes("spanish_laliga"),champions:[1,2,3,4],europa:[5],conference:[6],relegation:"bottom3"},bundesliga:{match:(e,t)=>"ger.1"===e||t.includes("german_bundesliga"),champions:[1,2,3,4],europa:[5],conference:[6],relegation:[17,18]},ligue_1:{match:(e,t)=>"fra.1"===e||t.includes("french_ligue_1"),champions:[1,2,3],europa:[4],conference:[5],relegation:[17,18]},eredivisie:{match:(e,t)=>"ned.1"===e||t.includes("dutch_eredivisie"),champions:[1,2],europa:[3],conference:[4,5],relegation:[17,18]},primeira_liga:{match:(e,t)=>"por.1"===e||t.includes("portuguese_primeira"),champions:[1,2],europa:[3],conference:[4],relegation:[17,18]},ucl_league_phase:{match:(e,t)=>"uefa.champions"===e||t.includes("uefa_champions_league"),champions:fe(1,8),europa:fe(9,24),conference:[],relegation:"bottom12"},uel_league_phase:{match:(e,t)=>"uefa.europa"===e||t.includes("uefa_europa_league"),champions:fe(1,8),europa:fe(9,24),conference:[],relegation:"bottom12"},uecl_league_phase:{match:(e,t)=>"uefa.europa.conf"===e||t.includes("uefa_conference"),champions:fe(1,8),europa:fe(9,24),conference:[],relegation:"bottom12"},world_cup:{match:(e,t)=>"fifa.world"===e||t.includes("fifa_world_cup")||t.includes("world_cup"),champions:[1,2],europa:[3],conference:[],relegation:"bottom1",kind:"cup_group",hero:{icon:"🏆",accent:"world_cup"},labels:{champions:"zone.qualified",europa:"zone.third_place_playoff",conference:null,relegation:"zone.eliminated"}},uefa_euro:{match:(e,t)=>"uefa.euro"===e||t.includes("uefa_euro")||t.includes("european_championship"),champions:[1,2],europa:[3],conference:[],relegation:"bottom1",kind:"cup_group",hero:{icon:"⭐",accent:"uefa_euro"},labels:{champions:"zone.qualified",europa:"zone.third_place_playoff",conference:null,relegation:"zone.eliminated"}},copa_america:{match:(e,t)=>"conmebol.america"===e||t.includes("copa_america")||t.includes("conmebol_america"),champions:[1,2],europa:[],conference:[],relegation:"bottom2",kind:"cup_group",hero:{icon:"🏆",accent:"copa_america"},labels:{champions:"zone.qualified",europa:null,conference:null,relegation:"zone.eliminated"}}};customElements.define("soccer-live-standings",class extends oe{static get properties(){return{hass:{},_config:{},maxTeamsVisible:{type:Number},hideHeader:{type:Boolean},selectedGroup:{type:String},_eventSubscriptions:{type:Array},_toastMessage:{type:String},_toastVisible:{type:Boolean},_toastVariant:{type:String}}}setConfig(e){if(!e.entity)throw new Error("Entity required");this._config=e,me(this,e),this.maxTeamsVisible=e.max_teams_visible?e.max_teams_visible:10,this.hideHeader=e.hide_header||!1,this.selectedGroup=e.selected_group||"",this.showEventToasts=!0===e.show_event_toasts,this.highlightTeam=(e.highlight_team||e.my_team||"").toLowerCase(),this.showStats=!1!==e.show_stats,this.showGoalsFor=!0===e.show_goals_for,this.compactMode=!0===e.compact_mode,this.compactTop=parseInt(e.compact_top)||5,this.compactBottom=parseInt(e.compact_bottom)||3,this._toastMessage="",this._toastVisible=!1,this._toastVariant="goal",this._toastTimer=null}_t(e,t){return pe(e,de(this.hass,this._config),t)}connectedCallback(){super.connectedCallback(),this._subscribeToEvents()}disconnectedCallback(){super.disconnectedCallback(),this._toastTimer&&clearTimeout(this._toastTimer),this._eventSubscriptions&&Array.isArray(this._eventSubscriptions)&&(this._eventSubscriptions.forEach((e=>{"function"==typeof e&&e()})),this._eventSubscriptions=[])}updated(e){e.has("hass")&&this.hass&&!this._eventSubscriptions?.length&&this._subscribeToEvents()}_subscribeToEvents(){this.hass&&this.hass.connection&&(this._eventSubscriptions&&this._eventSubscriptions.length>0||(this._eventSubscriptions=[],["soccer_live_goal","soccer_live_yellow_card","soccer_live_red_card"].forEach((e=>{this.hass.connection.subscribeEvents(this._handleSoccerLiveEvent.bind(this),e).then((e=>{"function"==typeof e&&this._eventSubscriptions.push(e)}))}))))}_eventBelongsToThisCard(e){if(!this.hass||!this._config)return!1;const t=this._config.entity||"",a=e.competition_code;if(!a)return!1;const i=a.replace(/\./g,"_").toLowerCase();return t.toLowerCase().includes(i)}_handleSoccerLiveEvent(e){const t=e.event_type,a=e.data;this._eventBelongsToThisCard(a)&&this.showEventToasts&&this._showEventToast(t,a)}_showEventToast(e,t){let a="",i="goal";"soccer_live_goal"===e?(a=`<strong>${this._t("event.goal").toUpperCase()}!</strong> ${t.player} · ${t.home_team} ${t.home_score} - ${t.away_score} ${t.away_team}`,i="goal"):"soccer_live_yellow_card"===e?(a=`🟨 <strong>${this._t("event.yellow_card")}</strong> · ${t.player}${t.minute?` (${t.minute}')`:""}`,i="yellow"):"soccer_live_red_card"===e?(a=`🟥 <strong>${this._t("event.red_card")}</strong> · ${t.player}${t.minute?` (${t.minute}')`:""}`,i="red"):"soccer_live_match_finished"===e&&(a=`<strong>${this._t("status.finished")}!</strong> ${t.home_team} ${t.home_score} - ${t.away_score} ${t.away_team}`,i="finished"),a&&(this._toastMessage=a,this._toastVariant=i,this._toastVisible=!0,this._toastTimer&&clearTimeout(this._toastTimer),this._toastTimer=setTimeout((()=>{this._toastVisible=!1,this.requestUpdate()}),4e3),this.requestUpdate())}getCardSize(){return 5}static getConfigElement(){return document.createElement("soccer-live-standings-editor")}static getStubConfig(){return{entity:"sensor.soccer_live_standings_",max_teams_visible:10,hide_header:!1,selected_group:"",show_event_toasts:!1}}_getZoneConfig(){if(this._config.zone_config)return this._config.zone_config;if(this._config.zone_preset&&ve[this._config.zone_preset])return ve[this._config.zone_preset];return this._inferPresetFromEntity()||{champions:[],europa:[],conference:[],relegation:null}}_getZoneLabels(){const e=this._getZoneConfig().labels||{};return{champions:void 0!==e.champions?e.champions:"zone.champions",europa:void 0!==e.europa?e.europa:"zone.europa",conference:void 0!==e.conference?e.conference:"zone.conference",relegation:void 0!==e.relegation?e.relegation:"zone.relegation"}}_hasZonePositions(e){return!!e&&(Array.isArray(e)?e.length>0:"string"==typeof e&&/^bottom\d+$/.test(e))}_inferPresetFromEntity(){const e=(this._config.entity||"").toLowerCase(),t=this.hass&&this._config.entity?this.hass.states[this._config.entity]:null,a=t&&t.attributes?String(t.attributes.competition_code||"").toLowerCase():"";for(const[,t]of Object.entries(ve))if(t.match&&t.match(a,e))return t;return null}_positionInZone(e,t,a){if(!a)return!1;const i=String(a).match(/^bottom(\d+)$/);if(i){const a=parseInt(i[1],10);return t&&e>t-a}return!!Array.isArray(a)&&a.includes(Number(e))}_translatePhase(e){return e?{"regular-season":this._t("phase.regular_season"),"regular season":this._t("phase.regular_season"),"group-stage":this._t("phase.group_stage"),"group stage":this._t("phase.group_stage"),playoffs:this._t("phase.playoffs")}[String(e).toLowerCase()]||e:""}_shouldShowPhase(e){return!!e&&("regular-season"!==String(e).toLowerCase()&&!/\d{4}/.test(e))}_isCupGroupStage(){const e=this._getZoneConfig();return e&&"cup_group"===e.kind}_groupHasNoMatches(e){if(!e||!e.length)return!1;const t=e=>{if(null==e||""===e)return 0;const t=parseInt(String(e).replace("+",""),10);return isNaN(t)?0:t};return e.every((e=>t(e.wins)+t(e.draws)+t(e.losses)===0))}_zoneClass(e,t,a){if(a&&a.zone_color)return"zone-espn";const i=this._getZoneConfig();return this._positionInZone(e,t,i.champions)?1!==e||this._isCupGroupStage()?"zone-cl":"zone-cl rank-first":this._positionInZone(e,t,i.europa)?"zone-el":this._positionInZone(e,t,i.conference)?"zone-conf":this._positionInZone(e,t,i.relegation)?"zone-rel":"zone-default"}_sortStandings(e,t){let a=(e||[]).filter((e=>null!=e.rank));return t.includes("MLS")?(a=a.slice().sort(((e,t)=>t.points!==e.points?t.points-e.points:t.goal_difference!==e.goal_difference?t.goal_difference-e.goal_difference:t.goals_for-e.goals_for)),a.forEach(((e,t)=>{e.rank=t+1}))):a=a.slice().sort(((e,t)=>e.rank-t.rank)),a}_currentGroup(e){return e.find((e=>e.name===this.selectedGroup))||e[0]}render(){if(!this.hass||!this._config)return R``;const e=this._config.entity,t=this.hass.states[e];if(!t)return R`<ha-card class="empty">${this._t("generic.unknown_entity")}: ${e}</ha-card>`;const a=t.attributes.season||"",i=t.attributes.league_abbreviation&&"N/A"!==t.attributes.league_abbreviation?t.attributes.league_abbreviation:null,n=i&&t.attributes.league_name?a.replace(t.attributes.league_name,i).trim():a,s=t.attributes.standings_groups||[],o=!this.selectedGroup&&s.length>1,r=this._currentGroup(s),l=this._sortStandings(r?r.standings:[],n),c=l.length,d=48*Math.min(this.maxTeamsVisible,c)+50,p=this.highlightTeam?(l.find((e=>e.team_name&&e.team_name.toLowerCase().includes(this.highlightTeam)))||{}).rank:null,h=Math.round(l.reduce(((e,t)=>e+(parseInt(t.games_played)||0)),0)/2),g=l.reduce(((e,t)=>e+(parseInt(t.goals_for)||0)),0),u=(t.attributes.standings_groups||[]).some((e=>(e.standings||[]).some((e=>(parseInt(e.games_played)||0)>0)))),m=!u&&c>0&&l.every((e=>0===parseInt(e.wins??"0")&&0===parseInt(e.draws??"0")&&0===parseInt(e.losses??"0")));return R`
      <ha-card>
        ${this.showEventToasts&&this._toastVisible?R`
          <div class="event-toast variant-${this._toastVariant}" .textContent=${this._toastMessage}></div>
        `:""}

        ${this.hideHeader?"":this._renderHeader(t,n,r,s,o,p)}

        ${m?R`
          <div class="preseason-banner">
            <span class="preseason-icon">🗓️</span>
            <span>Seizoen ${n||""} is nog niet begonnen</span>
          </div>
        `:""}

        ${o?this._renderGroupsGrid(s,n):R`
            <div class="table-wrap" style="max-height: ${d}px;">
              ${this._renderFullTable(l,c)}
            </div>
          `}

        ${this.showStats&&h>0?R`
          <div class="season-stats">
            <span>${h} ${this._t("standings.stats").split("·")[0].trim()}</span>
            <span class="stats-dot">·</span>
            <span>${g} ${this._t("standings.stats").split("·")[1]?.trim()||"doelpunten"}</span>
          </div>
        `:""}

        ${this._renderLegend(r)}
      </ha-card>
    `}_renderFullTable(e,t){let a=e,i=null;if(this.compactMode&&t>this.compactTop+this.compactBottom){const n=e.slice(0,this.compactTop),s=e.slice(t-this.compactBottom),o=t-this.compactTop-this.compactBottom,r=this.highlightTeam?e.slice(this.compactTop,t-this.compactBottom).find((e=>e.team_name&&e.team_name.toLowerCase().includes(this.highlightTeam))):null;a=[...n,...r?[r]:[],{_separator:!0,hiddenCount:o},...s],i=!0}return R`
      <table class="standings-table">
        <thead>
          <tr>
            <th>${this._t("col.pos")}</th>
            <th class="team-col">${this._t("col.team")}</th>
            <th>${this._t("col.played")}</th>
            <th>${this._t("col.wins")}</th>
            <th>${this._t("col.draws")}</th>
            <th>${this._t("col.losses")}</th>
            <th>${this._t("col.gd")}</th>
            <th>${this._t("col.points")}</th>
          </tr>
        </thead>
        <tbody>
          ${a.map((e=>{if(e._separator)return R`
              <tr class="separator-row">
                <td colspan="8">
                  <span class="separator-dots">· · · ${e.hiddenCount} ${this._t("standings.compact_hidden")} · · ·</span>
                </td>
              </tr>`;const a=this.highlightTeam&&e.team_name&&e.team_name.toLowerCase().includes(this.highlightTeam),i=e=>{if(null==e||""===e)return null;const t=parseInt(String(e).replace("+",""),10);return isNaN(t)?null:t},n=i(e.wins),s=i(e.draws),o=i(e.losses),r=i(e.goal_difference),l=null!==n&&null!==s&&null!==o?n+s+o:null,c=null===r?"":r>0?"gd-pos":r<0?"gd-neg":"",d=null===r?"-":r>0?`+${r}`:`${r}`;return R`
              <tr class="${this._zoneClass(e.rank,t,e)} ${a?"highlighted-team":""}" style="${e.zone_color?`--cl-zone-espn:${e.zone_color}`:""}">
                <td><div class="rank-cell"><div class="rank-num">${e.rank}</div></div></td>
                <td class="team-cell">
                  <img src="${e.team_logo}" alt="${e.team_name}" />
                  <div class="tname-group">
                    <span class="tname">${e.team_name}</span>
                    ${this.showGoalsFor&&e.goals_for&&parseInt(e.goals_for)>=0?R`<span class="goals-for-hint">⚽ ${e.goals_for}</span>`:""}
                  </div>
                </td>
                <td>${l??"-"}</td>
                <td>${n??"-"}</td>
                <td>${s??"-"}</td>
                <td>${o??"-"}</td>
                <td class="${c}">${d}</td>
                <td class="points-cell">${e.points??"-"}</td>
              </tr>
            `}))}
        </tbody>
      </table>
    `}_renderCompactTable(e,t){return R`
      <table class="standings-table compact">
        <thead>
          <tr>
            <th>${this._t("col.pos")}</th>
            <th class="team-col">${this._t("col.team")}</th>
            <th>${this._t("col.gd")}</th>
            <th>${this._t("col.points")}</th>
          </tr>
        </thead>
        <tbody>
          ${e.map((e=>{const a=(e=>{if(null==e||""===e)return null;const t=parseInt(String(e).replace("+",""),10);return isNaN(t)?null:t})(e.goal_difference),i=null===a?"":a>0?"gd-pos":a<0?"gd-neg":"",n=null===a?"-":a>0?`+${a}`:`${a}`;return R`
              <tr class="${this._zoneClass(e.rank,t,e)}" style="${e.zone_color?`--cl-zone-espn:${e.zone_color}`:""}">
                <td><div class="rank-cell"><div class="rank-num">${e.rank}</div></div></td>
                <td class="team-cell">
                  <img src="${e.team_logo}" alt="${e.team_name}" />
                  <span class="tname">${e.team_name}</span>
                </td>
                <td class="${i}">${n}</td>
                <td class="points-cell">${e.points??"-"}</td>
              </tr>
            `}))}
        </tbody>
      </table>
    `}_renderHeader(e,t,a,i,n,s){const o=this._getZoneConfig(),r=this._isCupGroupStage(),l=o&&o.hero?o.hero:null,c=e.attributes.league_abbreviation&&"N/A"!==e.attributes.league_abbreviation?e.attributes.league_abbreviation:null,d=c&&t?t.replace(c,"").trim():t&&"n/a"!==t.toLowerCase()?t:"",p=n?this._t("phase.group_stage"):this._shouldShowPhase(a&&a.name)?this._translatePhase(a.name):"",h=[];c&&h.push(this._t("card.standings")),d&&h.push(d),p&&h.push(p);let g=0;if(n)for(const e of i)g+=(e.standings||[]).filter((e=>null!=e.rank)).length;return R`
      <div class="top-bar ${r?"top-bar-cup":""} ${l?`accent-${l.accent}`:""}">
        ${l&&l.icon?R`<div class="hero-icon">${l.icon}</div>`:""}
        <div class="league-title">
          <h2>${c||e.state}</h2>
          <div class="sub">${h.join(" · ")}</div>
        </div>
        ${s?R`<span class="highlight-pos-badge">${s}e</span>`:""}
        ${n&&r?R`
          <div class="hero-badges">
            <span class="badge">${i.length} ${this._t("hero.groups")}</span>
            <span class="badge">${g} ${this._t("hero.teams")}</span>
          </div>
        `:""}
      </div>
    `}_renderLegend(e){const t=new Map;for(const a of e&&e.standings||[])a.zone_color&&a.zone_label&&!t.has(a.zone_label)&&t.set(a.zone_label,{color:a.zone_color,abbrev:a.zone_abbrev});if(t.size)return R`
        <div class="legend">
          ${[...t.entries()].map((e=>{let[t,a]=e;return R`
            <div class="legend-item" title="${t}">
              <span class="legend-dot" style="background:${a.color};"></span>${a.abbrev||t}
            </div>
          `}))}
        </div>
      `;const a=this._getZoneConfig(),i=this._getZoneLabels(),n=[{key:"champions",dot:"cl",positions:a.champions,label:i.champions},{key:"europa",dot:"el",positions:a.europa,label:i.europa},{key:"conference",dot:"conf",positions:a.conference,label:i.conference},{key:"relegation",dot:"rel",positions:a.relegation,label:i.relegation}].filter((e=>e.label&&this._hasZonePositions(e.positions)));return n.length?R`
      <div class="legend">
        ${n.map((e=>R`
          <div class="legend-item">
            <span class="legend-dot ${e.dot}"></span>${this._t(e.label)}
          </div>
        `))}
      </div>
    `:""}_renderGroupsGrid(e,t){const a=this._isCupGroupStage();return R`
      <div class="groups-grid ${a?"groups-grid-cup":""}">
        ${e.map((e=>{const a=this._sortStandings(e.standings||[],t),i=this._groupHasNoMatches(a);return R`
            <div class="group-cell ${i?"group-cell-pending":""}">
              <div class="group-title">
                <span>${e.name}</span>
                ${i?R`<span class="group-pending-badge">${this._t("hero.not_started")}</span>`:""}
              </div>
              ${this._renderCompactTable(a,a.length)}
            </div>
          `}))}
      </div>
    `}static get styles(){return[he,s`
      ha-card {
        position: relative;
        overflow: hidden;
        border-radius: 20px;
        padding: 0;
        background: var(--cl-bg);
        color: var(--cl-text);
        box-shadow: 0 4px 24px var(--cl-shadow);
      }
      ha-card.empty {
        padding: 24px;
        text-align: center;
        color: var(--cl-text-2);
      }

      .top-bar {
        position: relative;
        padding: 20px 18px;
        background:
          linear-gradient(135deg, rgba(var(--cl-accent-rgb),0.15), rgba(var(--cl-accent-2-rgb),0.10) 60%, transparent);
        border-bottom: 1px solid var(--cl-divider);
        overflow: hidden;
      }
      .top-bar::before {
        content: '⚽';
        position: absolute;
        right: -10px; top: -10px;
        font-size: 90px;
        opacity: 0.06;
        transform: rotate(15deg);
      }
      .top-bar-cup {
        padding: 28px 22px 22px;
        background:
          radial-gradient(circle at 20% 20%, rgba(99,102,241,0.30), transparent 55%),
          radial-gradient(circle at 80% 60%, rgba(var(--cl-accent-2-rgb),0.20), transparent 50%),
          linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0));
      }
      .top-bar-cup::before { display: none; }
      .top-bar-cup .hero-icon {
        position: absolute;
        right: 14px; top: 14px;
        font-size: 56px;
        line-height: 1;
        opacity: 0.95;
        filter: drop-shadow(0 4px 12px rgba(0,0,0,0.45));
      }
      .top-bar-cup h2 {
        font-size: 24px;
        letter-spacing: -0.04em;
      }
      .top-bar-cup .sub {
        font-size: 13px;
        margin-top: 6px;
        letter-spacing: 0.02em;
      }
      .top-bar.accent-world_cup {
        background:
          radial-gradient(circle at 20% 20%, rgba(251,191,36,0.22), transparent 55%),
          radial-gradient(circle at 80% 60%, rgba(99,102,241,0.18), transparent 55%),
          linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0));
      }
      .top-bar.accent-uefa_euro {
        background:
          radial-gradient(circle at 20% 20%, rgba(59,130,246,0.30), transparent 55%),
          radial-gradient(circle at 80% 60%, rgba(251,191,36,0.18), transparent 55%),
          linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0));
      }
      .top-bar.accent-copa_america {
        background:
          radial-gradient(circle at 20% 20%, rgba(16,185,129,0.25), transparent 55%),
          radial-gradient(circle at 80% 60%, rgba(245,158,11,0.20), transparent 55%),
          linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0));
      }
      .hero-badges {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin-top: 12px;
      }
      .hero-badges .badge {
        font-size: 10px;
        font-weight: 800;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        padding: 4px 10px;
        border-radius: 999px;
        background: rgba(255,255,255,0.10);
        border: 1px solid rgba(255,255,255,0.12);
        color: var(--cl-text);
        backdrop-filter: blur(8px);
      }
      .top-bar h2 {
        margin: 0;
        font-size: 20px;
        font-weight: 900;
        letter-spacing: -0.03em;
        background: linear-gradient(135deg, var(--cl-text), var(--cl-accent));
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .top-bar .sub {
        color: var(--cl-text-2);
        font-size: 12px;
        margin-top: 4px;
        font-weight: 500;
      }

      .table-wrap {
        overflow-y: auto;
      }
      .standings-table {
        width: 100%;
        border-collapse: separate;
        border-spacing: 0;
        font-size: 13px;
      }
      .standings-table thead th {
        position: sticky;
        top: 0;
        background: var(--cl-card-2);
        backdrop-filter: blur(8px);
        padding: 10px 4px;
        text-align: center;
        font-size: 10px;
        font-weight: 800;
        color: var(--cl-text-2);
        text-transform: uppercase;
        letter-spacing: 0.1em;
        border-bottom: 1px solid var(--cl-divider);
        z-index: 1;
      }
      .standings-table thead th:first-child { padding-left: 14px; text-align: left; }
      .standings-table thead th:last-child { padding-right: 14px; }
      .standings-table thead th.team-col { text-align: left; }

      .standings-table tbody tr {
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      }
      .standings-table tbody tr:hover {
        background: var(--cl-card-2);
      }
      .standings-table tbody td {
        padding: 10px 4px;
        text-align: center;
        border-bottom: 1px solid var(--cl-divider);
        font-variant-numeric: tabular-nums;
        font-weight: 600;
        color: var(--cl-text);
      }
      .standings-table tbody tr:last-child td { border-bottom: none; }
      .preseason-banner {
        display: flex; align-items: center; gap: 10px;
        margin: 0 14px 4px;
        padding: 10px 14px;
        background: rgba(var(--cl-accent-rgb),0.08);
        border: 1px solid rgba(99,102,241,0.18);
        border-radius: 10px;
        font-size: 12px;
        font-weight: 600;
        color: var(--cl-text-2);
      }
      .preseason-icon { font-size: 16px; }

      .standings-table tbody td:first-child { padding-left: 14px; text-align: left; }
      .highlight-pos-badge {
        flex-shrink: 0;
        background: linear-gradient(135deg, var(--cl-accent), var(--cl-accent-2));
        color: white;
        font-size: 12px;
        font-weight: 900;
        padding: 4px 10px;
        border-radius: 999px;
        box-shadow: 0 2px 10px rgba(var(--cl-accent-rgb),0.4);
        letter-spacing: -0.01em;
      }
      .season-stats {
        display: flex; align-items: center; gap: 8px;
        padding: 8px 16px;
        font-size: 11px; font-weight: 600;
        color: var(--cl-text-2);
        border-top: 1px solid var(--cl-divider);
        justify-content: center;
      }
      .stats-dot { opacity: 0.5; }
      .separator-row td { padding: 6px 0; text-align: center; border: none; }
      .separator-dots {
        font-size: 10px; font-weight: 700;
        color: var(--cl-text-2); letter-spacing: 0.1em; opacity: 0.6;
      }
      .tname-group { display: flex; flex-direction: column; min-width: 0; overflow: hidden; }
      .goals-for-hint {
        font-size: 9px; font-weight: 600;
        color: var(--cl-text-2); opacity: 0.7;
        margin-top: 1px;
      }
      .highlighted-team { background: rgba(var(--cl-accent-rgb),0.07); }
      .highlighted-team .tname { font-weight: 800; color: var(--cl-text); }
      .highlighted-team .points-cell { color: var(--cl-accent); font-weight: 900; }
      .zone-cl td:first-child   { border-left: 3px solid var(--cl-cl);        padding-left: 11px; }
      .zone-el td:first-child   { border-left: 3px solid var(--cl-el);        padding-left: 11px; }
      .zone-conf td:first-child { border-left: 3px solid var(--cl-conf);      padding-left: 11px; }
      .zone-rel td:first-child  { border-left: 3px solid var(--cl-rel);       padding-left: 11px; }
      .zone-espn td:first-child { border-left: 3px solid var(--cl-zone-espn); padding-left: 11px; }
      .standings-table tbody td:last-child { padding-right: 14px; }

      .rank-cell {
        display: flex; align-items: center; gap: 6px;
        font-weight: 800;
      }
      .rank-num {
        width: 24px; height: 24px;
        border-radius: 7px;
        display: flex; align-items: center; justify-content: center;
        font-size: 11px;
        font-weight: 900;
      }
      .zone-cl .rank-num {
        background: linear-gradient(135deg, var(--cl-cl), #4f46e5);
        color: white;
        box-shadow: 0 2px 12px rgba(var(--cl-accent-rgb),0.4);
      }
      .zone-cl.rank-first .rank-num {
        background: linear-gradient(135deg, var(--cl-gold), #d97706);
        color: #1f1410;
        box-shadow: 0 2px 16px var(--cl-gold-glow);
        animation: gold-shimmer 3s ease-in-out infinite;
      }
      @keyframes gold-shimmer {
        0%, 100% { box-shadow: 0 2px 16px var(--cl-gold-glow); }
        50% { box-shadow: 0 2px 24px var(--cl-gold-glow), 0 0 32px var(--cl-gold-glow); }
      }
      .zone-el .rank-num {
        background: linear-gradient(135deg, var(--cl-el), #ea580c);
        color: white;
        box-shadow: 0 2px 12px rgba(249,115,22,0.4);
      }
      .zone-rel .rank-num {
        background: linear-gradient(135deg, var(--cl-rel), #b91c1c);
        color: white;
        box-shadow: 0 2px 12px rgba(239,68,68,0.4);
      }
      .zone-conf .rank-num {
        background: linear-gradient(135deg, var(--cl-conf), #7e22ce);
        color: white;
        box-shadow: 0 2px 12px rgba(168,85,247,0.4);
      }
      .zone-default .rank-num {
        background: var(--cl-card-2);
        color: var(--cl-text-2);
      }

      .team-cell {
        display: flex; align-items: center; gap: 10px;
        text-align: left !important;
      }
      .team-cell img {
        width: 24px; height: 24px;
        object-fit: contain;
        flex-shrink: 0;
      }
      .team-cell .tname {
        font-weight: 700;
        font-size: 13px;
        letter-spacing: -0.01em;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .points-cell {
        font-weight: 900 !important;
        font-size: 14px !important;
      }
      .gd-pos { color: var(--cl-green); font-weight: 800 !important; }
      .gd-neg { color: var(--cl-live); font-weight: 800 !important; }

      .groups-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 12px;
        padding: 12px;
      }
      .group-cell {
        background: var(--cl-card-2);
        border: 1px solid var(--cl-divider);
        border-radius: 14px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
      }
      .group-title {
        padding: 10px 14px;
        font-size: 11px;
        font-weight: 900;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: var(--cl-text);
        background: linear-gradient(135deg, rgba(var(--cl-accent-rgb),0.12), rgba(236,72,153,0.06));
        border-bottom: 1px solid var(--cl-divider);
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
      }
      .group-pending-badge {
        font-size: 9px;
        font-weight: 800;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        padding: 2px 7px;
        border-radius: 999px;
        background: rgba(255,255,255,0.08);
        color: var(--cl-text-2);
        border: 1px solid var(--cl-divider);
      }
      .groups-grid-cup .group-cell {
        border-left: 3px solid var(--cl-accent);
      }
      .groups-grid-cup .group-cell-pending {
        border-left-color: var(--cl-divider);
        opacity: 0.92;
      }
      .standings-table.compact {
        font-size: 12px;
      }
      .standings-table.compact thead th {
        padding: 8px 4px;
        font-size: 9px;
        letter-spacing: 0.08em;
      }
      .standings-table.compact tbody td {
        padding: 7px 4px;
        font-size: 12px;
      }
      .standings-table.compact .rank-num {
        width: 20px; height: 20px;
        font-size: 10px;
        border-radius: 6px;
      }
      .standings-table.compact .team-cell { gap: 7px; }
      .standings-table.compact .team-cell img {
        width: 18px; height: 18px;
      }
      .standings-table.compact .team-cell .tname {
        font-size: 12px;
        font-weight: 700;
      }
      .standings-table.compact .points-cell {
        font-size: 13px !important;
      }

      .legend {
        display: flex; flex-wrap: wrap;
        gap: 12px;
        padding: 12px 16px;
        border-top: 1px solid var(--cl-divider);
        background: var(--cl-card-2);
      }
      .legend-item {
        display: flex; align-items: center; gap: 6px;
        font-size: 10px;
        color: var(--cl-text-2);
        font-weight: 700;
        letter-spacing: 0.04em;
      }
      .legend-dot {
        width: 10px; height: 10px; border-radius: 3px;
      }
      .legend-dot.cl { background: linear-gradient(135deg, var(--cl-cl), #4f46e5); }
      .legend-dot.el { background: linear-gradient(135deg, var(--cl-el), #ea580c); }
      .legend-dot.rel { background: linear-gradient(135deg, var(--cl-rel), #b91c1c); }
      .legend-dot.conf { background: linear-gradient(135deg, var(--cl-conf), #7e22ce); }

      /* Toast */
      .event-toast {
        position: absolute;
        top: 12px;
        left: 50%;
        transform: translateX(-50%);
        background: var(--cl-toast-bg);
        color: #ffffff;
        padding: 10px 18px;
        border-radius: 14px;
        font-size: 13px;
        font-weight: 800;
        z-index: 100;
        animation: toast-bounce 4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        pointer-events: none;
        max-width: 90%;
        text-align: center;
        letter-spacing: -0.01em;
        text-shadow: 0 1px 2px rgba(0,0,0,0.8);
      }
      .event-toast.variant-goal {
        box-shadow: 0 0 0 2px var(--cl-gold), 0 0 0 4px rgba(251,191,36,0.3),
                    0 12px 40px rgba(0,0,0,0.7), 0 0 60px rgba(251,191,36,0.4);
      }
      .event-toast.variant-goal strong { color: var(--cl-gold-text); }
      .event-toast.variant-yellow {
        box-shadow: 0 0 0 2px #f59e0b, 0 0 0 4px rgba(245,158,11,0.3), 0 12px 40px rgba(0,0,0,0.7);
      }
      .event-toast.variant-yellow strong { color: #fbbf24; }
      .event-toast.variant-red {
        box-shadow: 0 0 0 2px var(--cl-live), 0 0 0 4px rgba(239,68,68,0.3), 0 12px 40px rgba(0,0,0,0.7);
      }
      .event-toast.variant-red strong { color: #fca5a5; }
      .event-toast.variant-finished {
        box-shadow: 0 0 0 2px var(--cl-green), 0 0 0 4px rgba(16,185,129,0.3), 0 12px 40px rgba(0,0,0,0.7);
      }
      .event-toast.variant-finished strong { color: #6ee7b7; }
      @keyframes toast-bounce {
        0%   { opacity: 0; transform: translate(-50%, -20px) scale(0.7); }
        8%   { opacity: 1; transform: translate(-50%, 0) scale(1.08); }
        14%  { transform: translate(-50%, 0) scale(1); }
        90%  { opacity: 1; transform: translate(-50%, 0) scale(1); }
        100% { opacity: 0; transform: translate(-50%, -10px) scale(0.95); }
      }
    `]}}),window.customCards=window.customCards||[],window.customCards.push({type:"soccer-live-standings",name:"Soccer Live Standings Card",description:"Shows the standings for a league or cup competition"});const _e=s`
  .editor-section { margin-bottom: 20px; }
  .editor-section h3 { margin: 12px 0 8px; font-size: 13px; text-transform: uppercase; color: var(--secondary-text-color); }
  .editor-field { margin-bottom: 12px; }
  .field-label { display: block; font-size: 12px; font-weight: 600; margin-bottom: 4px; color: var(--primary-text-color); }
  .field-hint { display: block; font-size: 11px; color: var(--secondary-text-color); margin-top: 2px; }
  select, input, ha-entity-picker { width: 100%; }
  .field-info { background: rgba(33, 150, 243, 0.1); border-left: 3px solid var(--primary-color); padding: 8px 12px; border-radius: 2px; font-size: 12px; margin-top: 8px; }
  .field-warning { background: rgba(255, 152, 0, 0.1); border-left: 3px solid #ff9800; padding: 8px 12px; border-radius: 2px; font-size: 12px; margin-top: 8px; }
`;customElements.define("soccer-live-standings-editor",class extends oe{static get properties(){return{_config:{type:Object},hass:{type:Object},entities:{type:Array},groups:{type:Array}}}constructor(){super(),this.entities=[],this.groups=[]}static get styles(){return[_e,s`
      .card-config {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }
      .option {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
      }
      label {
        font-size: 14px;
        color: var(--primary-text-color);
      }
      .field-label {
        display: block;
        font-size: 12px;
        color: var(--secondary-text-color);
        margin-bottom: 4px;
        font-weight: 600;
      }
      select, input[type="number"] {
        width: 100%;
        padding: 10px 12px;
        font-size: 14px;
        border-radius: 8px;
        border: 1px solid var(--divider-color, rgba(0,0,0,0.12));
        background: var(--card-background-color, #fff);
        color: var(--primary-text-color, #000);
        box-sizing: border-box;
      }
      select:focus, input:focus {
        outline: 2px solid var(--primary-color, #03a9f4);
        outline-offset: -1px;
      }
      h3 {
        margin: 8px 0 0;
        font-size: 13px;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: var(--secondary-text-color);
      }
    `]}setConfig(e){if(!e)throw new Error("Invalid configuration");this._config={...e}}get config(){return this._config}updated(e){e.has("hass")&&this._fetchEntities(),(e.has("_config")||e.has("hass"))&&this._config&&this._config.entity&&this._fetchGroups()}_fireConfigChanged(e){this._config=e,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0})),this.requestUpdate()}_entityChanged(e){if(!this._config)return;const t=e.target.value;t!==this._config.entity&&this._fireConfigChanged({...this._config,entity:t})}_groupChanged(e){if(!this._config)return;const t=e.target.value;t!==this._config.selected_group&&this._fireConfigChanged({...this._config,selected_group:t})}_switchChanged(e){if(!this._config)return;const t=e.target;if(!t.dataset||!t.dataset.configValue)return;const a=t.dataset.configValue,i=t.checked;this._config[a]!==i&&this._fireConfigChanged({...this._config,[a]:i})}_selectChanged(e){if(!this._config)return;const t=e.target;if(!t.dataset||!t.dataset.configValue)return;const a=t.dataset.configValue,i=t.value;this._config[a]!==i&&this._fireConfigChanged({...this._config,[a]:i})}_numberChanged(e){if(!this._config)return;const t=e.target;if(!t.dataset||!t.dataset.configValue)return;const a=t.dataset.configValue,i=parseInt(t.value,10);isNaN(i)||this._config[a]!==i&&this._fireConfigChanged({...this._config,[a]:i})}_fetchEntities(){this.hass&&(this.entities=Object.keys(this.hass.states).filter((e=>e.includes("soccerlive_standings")||e.includes("soccer_live_standings"))).sort())}_fetchGroups(){const e=this._config&&this._config.entity;if(!this.hass||!e)return void(this.groups=[]);const t=this.hass.states[e];t&&t.attributes&&t.attributes.standings_groups?this.groups=t.attributes.standings_groups.map((e=>e.name)):this.groups=[]}render(){if(!this._config||!this.hass)return R``;const e=this._config.entity||"",t=e&&this.entities.includes(e);return R`
      <div class="card-config">
        <h3>Sensor</h3>
        <div>
          <label class="field-label">Entity</label>
          <select @change=${this._entityChanged}>
            ${t?"":R`<option value="${e}" selected>${e||"— select —"}</option>`}
            ${this.entities.map((t=>R`
              <option value="${t}" ?selected=${t===e}>${t}</option>
            `))}
          </select>
        </div>

        <h3>Settings</h3>
        <div>
          <label class="field-label">Group</label>
          <select @change=${this._groupChanged}>
            <option value="" ?selected=${!this._config.selected_group}>— All —</option>
            ${this.groups.map((e=>R`
              <option value="${e}" ?selected=${e===this._config.selected_group}>${e}</option>
            `))}
          </select>
        </div>

        <div class="option">
          <label>Hide Header</label>
          <ha-switch
            .checked=${!0===this._config.hide_header}
            data-config-value="hide_header"
            @change=${this._switchChanged}
          ></ha-switch>
        </div>

        <div class="option">
          <label>Show Event Toasts (in-card)</label>
          <ha-switch
            .checked=${!0===this._config.show_event_toasts}
            data-config-value="show_event_toasts"
            @change=${this._switchChanged}
          ></ha-switch>
        </div>

        <div>
          <label class="field-label">Max Teams Visible</label>
          <input type="number" min="1" max="50"
            .value=${this._config.max_teams_visible||10}
            data-config-value="max_teams_visible" @change=${this._numberChanged} />
        </div>

        <div>
          <label class="field-label">Uitgelicht team (my_team)</label>
          <input type="text" placeholder="bijv. Feyenoord Rotterdam"
            .value=${this._config.highlight_team||this._config.my_team||""}
            @change=${e=>this._fireConfigChanged({...this._config,highlight_team:e.target.value,my_team:e.target.value})} />
        </div>

        <div class="option">
          <label>Seizoenstotalen tonen</label>
          <ha-switch .checked=${!1!==this._config.show_stats}
            data-config-value="show_stats" @change=${this._switchChanged}></ha-switch>
        </div>
        <div class="option">
          <label>Doelpunten per team tonen</label>
          <ha-switch .checked=${!0===this._config.show_goals_for}
            data-config-value="show_goals_for" @change=${this._switchChanged}></ha-switch>
        </div>

        <div class="option">
          <label>Compact modus</label>
          <ha-switch .checked=${!0===this._config.compact_mode}
            data-config-value="compact_mode" @change=${this._switchChanged}></ha-switch>
        </div>

        ${this._config.compact_mode?R`
          <div>
            <label class="field-label">Top N teams</label>
            <input type="number" min="1" max="20"
              .value=${this._config.compact_top||5}
              data-config-value="compact_top" @change=${this._numberChanged} />
          </div>
          <div>
            <label class="field-label">Bottom N teams</label>
            <input type="number" min="1" max="10"
              .value=${this._config.compact_bottom||3}
              data-config-value="compact_bottom" @change=${this._numberChanged} />
          </div>
        `:""}
        <div>
          <label class="field-label">Skin</label>
          <select data-config-value="skin" @change=${this._selectChanged}>
            <option value="dark"       ?selected=${"dark"===(this._config.skin||"dark")}>Dark (standaard)</option>
            <option value="light"      ?selected=${"light"===this._config.skin}>Light</option>
            <option value="red-white"  ?selected=${"red-white"===this._config.skin}>Red & White</option>
            <option value="classic"    ?selected=${"classic"===this._config.skin}>Classic (groen)</option>
            <option value="neon"       ?selected=${"neon"===this._config.skin}>Neon</option>
            <option value="gold"        ?selected=${"gold"===this._config.skin}>Gold</option>
            <option value="orange"     ?selected=${"orange"===this._config.skin}>Orange (Netherlands)</option>
            <option value="blue"       ?selected=${"blue"===this._config.skin}>Blue (Chelsea / PSG / Inter)</option>
            <option value="black-white" ?selected=${"black-white"===this._config.skin}>Black &amp; White (Juventus)</option>
            <option value="feyenoord"  ?selected=${"feyenoord"===this._config.skin}>Feyenoord (red/white)</option>
            <option value="arsenal"    ?selected=${"arsenal"===this._config.skin}>Arsenal</option>
            <option value="barcelona"  ?selected=${"barcelona"===this._config.skin}>Barcelona</option>
            <option value="real-madrid" ?selected=${"real-madrid"===this._config.skin}>Real Madrid</option>
          </select>
        </div>
        <div>
          <label class="field-label">Language</label>
          <select data-config-value="language" @change=${this._selectChanged}>
            <option value="" ?selected=${!this._config.language}>Auto (HA locale)</option>
            <option value="en" ?selected=${"en"===this._config.language}>English</option>
            <option value="it" ?selected=${"it"===this._config.language}>Italiano</option>
            <option value="fr" ?selected=${"fr"===this._config.language}>Français</option>
            <option value="es" ?selected=${"es"===this._config.language}>Español</option>
            <option value="nl" ?selected=${"nl"===this._config.language}>Nederlands</option>
            <option value="de" ?selected=${"de"===this._config.language}>Deutsch</option>
            <option value="pt" ?selected=${"pt"===this._config.language}>Português</option>
          </select>
        </div>
      </div>
    `}}),customElements.define("soccer-live-matches",class extends oe{static get properties(){return{hass:{},_config:{},showPopup:{type:Boolean},activeMatch:{type:Object},_eventSubscriptions:{type:Array},_recentEventMatches:{type:Object},_toastMessage:{type:String},_toastVisible:{type:Boolean},_toastVariant:{type:String}}}constructor(){super(),this._recentEventMatches=new Map,this._eventSubscriptions=[],this._toastMessage="",this._toastVisible=!1,this._toastVariant="goal",this._toastTimer=null}setConfig(e){if(!e.entity)throw new Error("Entity required");this._config=e,me(this,e),this.maxEventsVisible=e.max_events_visible?e.max_events_visible:5,this.maxEventsTotal=e.max_events_total?e.max_events_total:50,this.showFinishedMatches=void 0===e.show_finished_matches||e.show_finished_matches,this.hideHeader=void 0!==e.hide_header&&e.hide_header,this.hidePastDays=void 0!==e.hide_past_days?e.hide_past_days:0,this.reverseOrder=!0===e.reverse_order,this.showEventToasts=!0===e.show_event_toasts,this.myTeam=(e.my_team||"").toLowerCase(),this.showLiveTicker=!1!==e.show_live_ticker,this.activeMatch=null,this.showPopup=!1}_t(e,t){return pe(e,de(this.hass,this._config),t)}connectedCallback(){super.connectedCallback(),this._subscribeToEvents()}disconnectedCallback(){super.disconnectedCallback(),this._toastTimer&&clearTimeout(this._toastTimer),this._eventSubscriptions&&Array.isArray(this._eventSubscriptions)&&(this._eventSubscriptions.forEach((e=>{"function"==typeof e&&e()})),this._eventSubscriptions=[]),this._escHandler&&(document.removeEventListener("keydown",this._escHandler),this._escHandler=null)}_subscribeToEvents(){this.hass&&this.hass.connection&&(this._eventSubscriptions&&this._eventSubscriptions.length>0||(this._eventSubscriptions=[],["soccer_live_goal","soccer_live_yellow_card","soccer_live_red_card"].forEach((e=>{this.hass.connection.subscribeEvents(this._handleSoccerLiveEvent.bind(this),e).then((e=>{"function"==typeof e&&this._eventSubscriptions.push(e)}))}))))}_eventBelongsToThisCard(e){if(!this.hass||!this._config)return!1;const t=this.hass.states[this._config.entity];return!!t&&(t.attributes.matches||[]).some((t=>t.home_team===e.home_team&&t.away_team===e.away_team))}_handleSoccerLiveEvent(e){const t=e.event_type,a=e.data;if(!this._eventBelongsToThisCard(a))return;const i=`${a.home_team}_${a.away_team}`;this._recentEventMatches.set(i,"soccer_live_goal"===t?"goal":"card"),this.requestUpdate(),setTimeout((()=>{this._recentEventMatches.delete(i),this.requestUpdate()}),5e3),"soccer_live_goal"===t&&requestAnimationFrame((()=>this._triggerGoalCelebration())),this.showEventToasts&&this._showEventToast(t,a)}_triggerGoalCelebration(){const e=this.shadowRoot&&this.shadowRoot.querySelector("ha-card");if(!e)return;e.querySelectorAll(".confetti").forEach((e=>e.remove()));const t=["#ec4899","#6366f1","#06b6d4","#fbbf24","#10b981","#ef4444"],a=["⚽","🎉","✨","🔥","⭐"];for(let i=0;i<28;i++){const i=document.createElement("div");i.className="confetti",Math.random()>.55?(i.textContent=a[Math.floor(Math.random()*a.length)],i.style.fontSize=12+10*Math.random()+"px",i.style.background="transparent"):(i.style.background=t[Math.floor(Math.random()*t.length)],i.style.borderRadius=Math.random()>.5?"50%":"2px"),i.style.setProperty("--dx",380*(Math.random()-.5)+"px"),i.style.setProperty("--dy",200*Math.random()+80+"px"),i.style.animationDelay=.4*Math.random()+"s",e.appendChild(i),setTimeout((()=>i.remove()),2200)}}_showEventToast(e,t){let a="",i="goal";"soccer_live_goal"===e?(a=`<strong>${this._t("event.goal").toUpperCase()}!</strong> ${t.player} · ${t.home_team} ${t.home_score} - ${t.away_score} ${t.away_team}`,i="goal"):"soccer_live_yellow_card"===e?(a=`🟨 <strong>${this._t("event.yellow_card")}</strong> · ${t.player}${t.minute?` (${t.minute}')`:""}`,i="yellow"):"soccer_live_red_card"===e&&(a=`🟥 <strong>${this._t("event.red_card")}</strong> · ${t.player}${t.minute?` (${t.minute}')`:""}`,i="red"),a&&(this._toastMessage=a,this._toastVariant=i,this._toastVisible=!0,this._toastTimer&&clearTimeout(this._toastTimer),this._toastTimer=setTimeout((()=>{this._toastVisible=!1,this.requestUpdate()}),4e3),this.requestUpdate())}getCardSize(){return 4}static getConfigElement(){return document.createElement("soccer-live-matches-editor")}static getStubConfig(){return{entity:"sensor.soccer_live_all_",max_events_visible:5,max_events_total:50,hide_past_days:0,show_finished_matches:!0,hide_header:!1,show_event_toasts:!1}}_parseMatchDate(e){if(!e)return null;const[t,a]=e.split(" "),[i,n,s]=t.split(/[-\/]/).map(Number),[o,r]=a?a.split(":").map(Number):[0,0];return new Date(s,n-1,i,o,r)}_matchTimeLabel(e){if("in"===e.state)return e.clock&&"N/A"!==e.clock?e.clock:"LIVE";if("post"===e.state)return"FT";if(e.date){const t=e.date.split(" ");return t[1]||t[0]}return"—"}_matchScore(e,t){if("pre"===e.state)return"-";const a=e["home"===t?"home_score":"away_score"];return null==a||"N/A"===a?"-":a}_isWinner(e,t){if("pre"===e.state)return null;const a=parseInt(e.home_score),i=parseInt(e.away_score);return isNaN(a)||isNaN(i)||a===i?null:"home"===t?a>i:i>a}_dayKey(e){if(!e.date)return"—";const t=this._parseMatchDate(e.date);if(!t)return e.date.split(" ")[0]||"—";const a=new Date;a.setHours(0,0,0,0);const i=new Date(t);i.setHours(0,0,0,0);const n=Math.round((i-a)/864e5);if(0===n)return"⚡ "+this._t("time.today");if(-1===n)return this._t("time.yesterday");if(1===n)return this._t("time.tomorrow");const s=this._t("month."+(i.getMonth()+1));return`${i.getDate()} ${s}`}showDetails(e){this.activeMatch=e,this.showPopup=!0}closePopup(){this.showPopup=!1}separateEvents(e){const t=[],a=[],i=[];return e.forEach((e=>{const n=String(e||"");n.includes("Goal")||n.includes("Penalty - Scored")?t.push(this.formatMatchEvent(n)):n.includes("Yellow Card")?a.push(this.formatMatchEvent(n)):n.includes("Red Card")&&i.push(this.formatMatchEvent(n))})),{goals:t,yellowCards:a,redCards:i}}formatMatchEvent(e){const t=e=>this._t(e);let a=String(e||"").trim();a=a.replace(/^Goal\s*-\s*/i,"").replace(/^Yellow Card\s*-\s*/i,"").replace(/^Red Card\s*-\s*/i,"").replace(/^Penalty - Scored\s*-\s*/i,`${t("event.penalty")} - `).replace(/^Header\s*-\s*/i,`${t("event.header")} - `).replace(/^Shot\s*-\s*/i,`${t("event.shot")} - `).replace(/^Free-kick\s*-\s*/i,`${t("event.free_kick")} - `).replace(/^Penalty\s*-\s*/i,`${t("event.penalty")} - `),a=a.replace(/^([^:]+):\s*/,"$1 ");const i=[t("event.header"),t("event.shot"),t("event.penalty"),t("event.free_kick")].map((e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")));return a=a.replace(new RegExp(`^(${i.join("|")})\\s*-\\s*(.+)$`,"i"),((e,t,a)=>`${a} (${t.toLowerCase()})`)),a=a.replace(/\bN\/A\b/g,t("generic.unknown")),a}render(){if(!this.hass||!this._config)return R``;const e=this._config.entity,t=this.hass.states[e];if(!t)return R`<ha-card class="empty">${this._t("generic.unknown_entity")}: ${e}</ha-card>`;let a=t.attributes.matches||[];const i=t.attributes.league_info?t.attributes.league_info[0]:null,n=t.attributes.team_logo||null;if(this.showFinishedMatches||(a=a.filter((e=>"Full Time"!==e.status))),a=a.slice().sort(((e,t)=>{const a=this._parseMatchDate(e.date)||new Date(0),i=this._parseMatchDate(t.date)||new Date(0);return this.reverseOrder?i-a:a-i})),this.hidePastDays>0){const e=new Date;e.setDate(e.getDate()-this.hidePastDays),a=a.filter((t=>{const a=this._parseMatchDate(t.date);return!a||a>=e}))}const s=a.slice(0,this.maxEventsTotal);if(0===s.length)return R`<ha-card class="empty">${this._t("generic.no_match")}</ha-card>`;const o=s.filter((e=>"in"===e.state)).length,r=new Set(s.map((e=>e.league_name)).filter((e=>e&&"N/A"!==e))),l=r.size>1,c=[];let d=null;s.forEach((e=>{const t=this._dayKey(e);if(t!==d){d=t;const a=this._parseMatchDate(e.date);let i=null;if(a){const e=new Date;e.setHours(0,0,0,0);const t=new Date(a);t.setHours(0,0,0,0),i=Math.round((t-e)/864e5)}c.push({key:t,dayDiff:i,matches:[e]})}else c[c.length-1].matches.push(e)}));const p=Math.max(80*this.maxEventsVisible,240),h=s.filter((e=>"in"===e.state)),g=h.map((e=>`${e.home_abbrev||e.home_team}  ${e.home_score??"-"} - ${e.away_score??"-"}  ${e.away_abbrev||e.away_team}`)).join("     ·     ");return R`
      <ha-card>
        <div class="hero-bg"></div>

        ${this.showEventToasts&&this._toastVisible?R`
          <div class="event-toast variant-${this._toastVariant}" .textContent=${this._toastMessage}></div>
        `:""}

        ${this.showLiveTicker&&h.length>0?R`
          <div class="live-ticker">
            <span class="ticker-badge">LIVE</span>
            <div class="ticker-track">
              <span class="ticker-content">${g}</span>
              <span class="ticker-content" aria-hidden="true">${g}</span>
            </div>
          </div>
        `:""}

        ${this.hideHeader?"":R`
          <div class="matches-header">
            ${i&&i.logo_href?R`<img class="league-logo" src="${i.logo_href}" alt="${i.abbreviation||""}" />`:n?R`<img class="league-logo" src="${n}" alt="" />`:""}
            <div class="league-info">
              <div class="league-name">${i&&i.abbreviation||t.state||"Soccer Live"}</div>
              <div class="league-dates">
                ${(()=>{const e=t.attributes.total_matches||t.attributes.matches?.length||0,a=t.attributes.finished_matches_count??(t.attributes.matches||[]).filter((e=>"post"===e.state)).length;return e>0&&a>=0?`${a} / ${e} gespeeld`:i&&i.startDate?`${i.startDate} → ${i.endDate}`:this._t("generic.matches_count",{n:s.length})})()}
              </div>
            </div>
            ${o>0?R`<span class="live-counter">${o} LIVE</span>`:""}
          </div>
        `}

        <div class="scroll-content" style="max-height: ${p}px;">
          ${c.map((e=>R`
            <div class="day-divider ${0===e.dayDiff?"today":-1===e.dayDiff?"yesterday":1===e.dayDiff?"tomorrow":""}">
              ${e.key}
              ${null!==e.dayDiff&&e.dayDiff>1?R`<span class="day-rel">· over ${e.dayDiff} d</span>`:""}
            </div>
            ${e.matches.map((e=>{const t=`${e.home_team}_${e.away_team}`,a="in"===e.state,i=this._recentEventMatches.get(t),n=this._isWinner(e,"home"),s=this._isWinner(e,"away"),o=e.broadcast&&""!==e.broadcast&&"N/A"!==e.broadcast?e.broadcast:"",r="pre"===e.state,c=this.myTeam&&e.home_team&&e.home_team.toLowerCase().includes(this.myTeam),d=this.myTeam&&e.away_team&&e.away_team.toLowerCase().includes(this.myTeam);return R`
                <div class="match-row ${a?"live":""} ${"goal"===i?"goal-pulse":""} ${"card"===i?"card-pulse":""}"
                     @click="${()=>this.showDetails(e)}">
                  <div class="match-time ${a?"live-time":""} ${"post"===e.state?"ft":""}">
                    ${this._matchTimeLabel(e)}
                  </div>
                  <div class="match-teams">
                    <div class="match-team">
                      <img src="${e.home_logo}" alt="${e.home_team}" />
                      <span class="name ${!0===n?"winner":!1===n?"loser":""} ${c?"my-team-name":""}">${e.home_team}</span>
                      <span class="score ${!0===n?"winner":!1===n?"loser":""}">${this._matchScore(e,"home")}</span>
                    </div>
                    <div class="match-team">
                      <img src="${e.away_logo}" alt="${e.away_team}" />
                      <span class="name ${!0===s?"winner":!1===s?"loser":""} ${d?"my-team-name":""}">${e.away_team}</span>
                      <span class="score ${!0===s?"winner":!1===s?"loser":""}">${this._matchScore(e,"away")}</span>
                    </div>
                    ${o&&r||l&&e.league_name&&"N/A"!==e.league_name?R`
                      <div class="row-extras">
                        ${l&&e.league_name&&"N/A"!==e.league_name?R`
                          <span class="league-chip">${e.league_name}</span>
                        `:""}
                        ${o&&r?R`
                          <span class="tv-chip" title="Live TV">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="13" rx="2"/><polyline points="17 2 12 7 7 2"/></svg>
                            ${o}
                          </span>
                        `:""}
                      </div>
                    `:""}
                  </div>
                  <div class="match-status-icon">›</div>
                </div>
              `}))}
          `))}
        </div>
      </ha-card>
      ${this.showPopup&&this.activeMatch?this._renderPopup():""}
    `}updated(e){e.has("hass")&&this.hass&&!this._eventSubscriptions?.length&&this._subscribeToEvents(),e.has("showPopup")&&(this.showPopup?this._escHandler||(this._escHandler=e=>{"Escape"===e.key&&(this.showPopup=!1)},document.addEventListener("keydown",this._escHandler)):this._escHandler&&(document.removeEventListener("keydown",this._escHandler),this._escHandler=null))}_renderPopup(){const e=this.activeMatch,t=e=>e&&"N/A"!==e?e:"-",a=e.clock&&"N/A"!==e.clock?e.clock:e.status&&"N/A"!==e.status?e.status:"",{goals:i,yellowCards:n,redCards:s}=this.separateEvents(e.match_details||[]),o=(e,t,a)=>t.length?R`
      <div class="mp-event-group ${a}">
        <h5 class="mp-event-title">${e}</h5>
        <ul class="mp-event-list">${t.map((e=>R`<li>${e}</li>`))}</ul>
      </div>`:"",r=i.length||n.length||s.length;return R`
      <div class="mp-overlay" @click="${e=>{e.target===e.currentTarget&&(this.showPopup=!1)}}">
        <div class="mp-box">
          <h3 class="mp-title">${this._t("popup.match_details")}</h3>
          <div class="mp-score-row">
            <img class="mp-logo" src="${e.home_logo}" alt="" @error="${e=>e.target.style.display="none"}">
            <div class="mp-score-center">
              <div class="mp-score">${t(e.home_score)}<span class="mp-sep"> - </span>${t(e.away_score)}</div>
              ${a?R`<div class="mp-clock">${a}</div>`:""}
            </div>
            <img class="mp-logo" src="${e.away_logo}" alt="" @error="${e=>e.target.style.display="none"}">
          </div>
          <p class="mp-teams"><strong>${e.home_team}</strong> – <strong>${e.away_team}</strong></p>
          ${o(this._t("event.goal"),i,"goal")}
          ${o(this._t("event.yellow_card"),n,"yellow")}
          ${o(this._t("event.red_card"),s,"red")}
          ${r?"":R`<p class="mp-no-events">${this._t("popup.no_events")}</p>`}
          <button class="mp-close" @click="${()=>this.showPopup=!1}">${this._t("generic.close")}</button>
        </div>
      </div>
    `}static get styles(){return[he,s`
      :host {
        --cl-accent: #6366f1;
        --cl-accent-2: #ec4899;
        --cl-live: #ef4444;
        --cl-live-glow: rgba(239,68,68,0.5);
        --cl-green: #10b981;
        --cl-gold: #fbbf24;
        --cl-gold-text: #fde047;
        --cl-card-2: rgba(255,255,255,0.05);
        --cl-divider: rgba(255,255,255,0.08);
        --cl-glass-border: rgba(255,255,255,0.08);
      }
      ha-card {
        position: relative;
        overflow: hidden;
        border-radius: 20px;
        padding: 0;
        box-shadow: 0 4px 24px rgba(0,0,0,0.15);
        background: var(--cl-bg);
        color: var(--cl-text);
      }
      ha-card.empty {
        padding: 24px;
        text-align: center;
        color: var(--cl-text-2);
      }
      .mp-overlay {
        position: fixed; inset: 0; z-index: 999999;
        display: flex; justify-content: center; align-items: center;
        background: rgba(0,0,0,0.72); backdrop-filter: blur(8px);
        overflow: auto; padding: 16px;
      }
      .mp-box {
        background: var(--cl-bg, #1a1f2e);
        border: 1px solid var(--cl-divider, rgba(255,255,255,0.08));
        border-radius: 20px; box-shadow: 0 24px 64px rgba(0,0,0,0.6);
        color: var(--cl-text, #f8fafc);
        max-height: 85vh; max-width: 560px; width: 100%;
        overflow-y: auto; padding: 24px; margin: auto;
      }
      .mp-title {
        margin: 0 0 20px; font-size: 22px; font-weight: 800; letter-spacing: -0.02em;
        background: linear-gradient(135deg, var(--cl-accent, #6366f1), var(--cl-accent-2, #ec4899));
        -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;
      }
      .mp-score-row { display: flex; justify-content: center; align-items: center; gap: 18px; margin-bottom: 16px; }
      .mp-logo { width: 64px; height: 64px; object-fit: contain; }
      .mp-score-center { text-align: center; }
      .mp-score { font-size: 38px; font-weight: 900; letter-spacing: -0.04em; line-height: 1; }
      .mp-sep { opacity: 0.4; }
      .mp-clock { font-size: 12px; color: var(--cl-text-2, #94a3b8); margin-top: 6px; font-weight: 600; }
      .mp-teams { text-align: center; color: var(--cl-text-2, #94a3b8); font-size: 14px; margin: 0 0 20px; }
      .mp-event-group { margin-bottom: 14px; padding: 14px; border-radius: 10px; border-left: 3px solid; }
      .mp-event-group.goal { background: rgba(99,102,241,0.1); border-color: #6366f1; }
      .mp-event-group.yellow { background: rgba(245,158,11,0.1); border-color: #f59e0b; }
      .mp-event-group.red { background: rgba(239,68,68,0.1); border-color: #ef4444; }
      .mp-event-title { margin: 0 0 8px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 800; }
      .mp-event-group.goal .mp-event-title { color: #6366f1; }
      .mp-event-group.yellow .mp-event-title { color: #f59e0b; }
      .mp-event-group.red .mp-event-title { color: #ef4444; }
      .mp-event-list { margin: 0; padding-left: 18px; font-size: 13px; color: #cbd5e1; }
      .mp-event-list li { margin: 4px 0; }
      .mp-no-events { text-align: center; color: #94a3b8; font-size: 13px; }
      .mp-close {
        background: linear-gradient(135deg, var(--cl-accent, #6366f1), var(--cl-accent-2, #ec4899));
        color: white; padding: 12px 20px; border: none; border-radius: 12px;
        cursor: pointer; margin-top: 20px; font-weight: 800; width: 100%; font-size: 14px;
      }
      .hero-bg {
        position: absolute;
        inset: 0;
        background:
          radial-gradient(ellipse at 0% 0%, rgba(var(--cl-accent-rgb),0.10), transparent 50%),
          radial-gradient(ellipse at 100% 100%, rgba(var(--cl-accent-2-rgb),0.10), transparent 50%);
        pointer-events: none;
        z-index: 0;
      }
      .live-ticker {
        display: flex; align-items: center; gap: 10px;
        background: rgba(239,68,68,0.08);
        border-bottom: 1px solid rgba(239,68,68,0.15);
        padding: 6px 14px;
        overflow: hidden;
        position: relative; z-index: 1;
      }
      .ticker-badge {
        flex-shrink: 0;
        background: var(--cl-live);
        color: white;
        font-size: 9px; font-weight: 800;
        padding: 2px 7px;
        border-radius: 4px;
        letter-spacing: 0.08em;
        box-shadow: 0 0 8px var(--cl-live-glow);
      }
      .ticker-track {
        flex: 1; overflow: hidden;
        display: flex; gap: 60px;
      }
      .ticker-content {
        white-space: nowrap; flex-shrink: 0;
        font-size: 11px; font-weight: 700;
        color: var(--cl-text);
        animation: ticker-scroll 18s linear infinite;
      }
      @keyframes ticker-scroll {
        from { transform: translateX(0); }
        to { transform: translateX(calc(-100% - 60px)); }
      }
      .matches-header {
        position: relative;
        z-index: 1;
        display: flex; align-items: center; gap: 14px;
        padding: 16px 16px 14px;
        border-bottom: 1px solid var(--cl-divider);
      }
      .matches-header::after {
        content: '';
        position: absolute;
        left: 14px; right: 14px; bottom: -1px;
        height: 1px;
        background: linear-gradient(90deg, transparent, var(--cl-accent), transparent);
        opacity: 0.4;
      }
      .league-logo {
        width: 42px; height: 42px;
        object-fit: contain;
        filter: drop-shadow(0 2px 8px rgba(var(--cl-accent-rgb),0.3));
      }
      .league-info {
        flex: 1;
        min-width: 0;
      }
      .league-name {
        font-size: 16px;
        font-weight: 800;
        letter-spacing: -0.02em;
        color: var(--cl-text);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .league-dates {
        font-size: 11px;
        color: var(--cl-text-2);
        margin-top: 2px;
        font-weight: 500;
      }
      .live-counter {
        flex-shrink: 0;
        background: linear-gradient(135deg, var(--cl-live), #f97316);
        color: white;
        padding: 4px 10px;
        border-radius: 999px;
        font-size: 10px;
        font-weight: 800;
        letter-spacing: 0.06em;
        box-shadow: 0 2px 12px var(--cl-live-glow);
      }
      .scroll-content {
        position: relative;
        z-index: 1;
        overflow-y: auto;
        padding: 4px 4px 12px;
      }
      .day-divider {
        padding: 12px 12px 4px;
        font-size: 10px;
        text-transform: uppercase;
        letter-spacing: 0.15em;
        color: var(--cl-text-2);
        font-weight: 800;
        display: flex; align-items: center; gap: 8px;
      }
      .day-divider::after {
        content: '';
        flex: 1; height: 1px;
        background: linear-gradient(90deg, var(--cl-divider), transparent);
      }
      .day-divider.today { color: var(--cl-accent); }
      .day-divider.today::after {
        background: linear-gradient(90deg, var(--cl-accent), transparent);
        opacity: 0.4;
      }
      .day-rel {
        font-size: 9px; font-weight: 600;
        color: var(--cl-text-2); opacity: 0.55;
        text-transform: none; letter-spacing: 0;
        flex-shrink: 0;
      }
      .day-divider.tomorrow { color: var(--cl-accent-2); opacity: 0.9; }
      .day-divider.tomorrow::after {
        background: linear-gradient(90deg, var(--cl-accent-2), transparent);
        opacity: 0.3;
      }
      .day-divider.yesterday { opacity: 0.55; }

      .confetti {
        position: absolute;
        top: 20px; left: 50%;
        width: 8px; height: 8px;
        pointer-events: none;
        z-index: 99;
        animation: confetti-fly 2s ease-out forwards;
      }
      @keyframes confetti-fly {
        0%   { transform: translate(-50%, 0) rotate(0deg); opacity: 1; }
        100% { transform: translate(calc(-50% + var(--dx)), var(--dy)) rotate(720deg); opacity: 0; }
      }

      .match-row {
        display: grid;
        grid-template-columns: auto 1fr auto;
        align-items: center;
        gap: 12px;
        padding: 12px;
        border-radius: 14px;
        cursor: pointer;
        transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        margin: 0 4px;
        position: relative;
      }
      .match-row:hover {
        background: var(--cl-card-2);
        transform: translateX(3px);
      }
      .match-row.live {
        background: linear-gradient(90deg, rgba(239,68,68,0.10), rgba(239,68,68,0.02) 60%);
        animation: live-row-glow 3s ease-in-out infinite;
      }
      .match-row.live::before {
        content: '';
        position: absolute;
        left: -2px; top: 50%;
        transform: translateY(-50%);
        width: 4px;
        height: 70%;
        background: linear-gradient(180deg, var(--cl-live), #f97316);
        border-radius: 0 4px 4px 0;
        box-shadow: 0 0 12px var(--cl-live-glow);
      }
      @keyframes live-row-glow {
        0%, 100% { background: linear-gradient(90deg, rgba(239,68,68,0.10), rgba(239,68,68,0.02) 60%); }
        50% { background: linear-gradient(90deg, rgba(239,68,68,0.18), rgba(239,68,68,0.05) 60%); }
      }
      .match-row.goal-pulse {
        animation: goal-pulse 1.6s cubic-bezier(0.16, 1, 0.3, 1);
      }
      @keyframes goal-pulse {
        0%   { box-shadow: none; transform: scale(1); }
        20%  { box-shadow: 0 0 0 3px var(--cl-gold), 0 0 24px var(--cl-gold); transform: scale(1.02); }
        100% { box-shadow: none; transform: scale(1); }
      }
      .match-row.card-pulse {
        animation: card-pulse-row 1s ease-out;
      }
      @keyframes card-pulse-row {
        0%   { box-shadow: none; }
        30%  { box-shadow: 0 0 0 2px #f59e0b; }
        100% { box-shadow: none; }
      }

      .match-time {
        font-size: 11px;
        color: var(--cl-text-2);
        font-weight: 700;
        font-variant-numeric: tabular-nums;
        min-width: 44px;
        text-align: center;
        padding: 6px 8px;
        background: var(--cl-card-2);
        border-radius: 8px;
      }
      .match-time.live-time {
        background: rgba(239,68,68,0.15);
        color: var(--cl-live);
      }
      .match-time.ft {
        background: rgba(16,185,129,0.12);
        color: var(--cl-green);
      }
      .match-teams {
        display: flex; flex-direction: column;
        gap: 4px;
        min-width: 0;
      }
      .match-team {
        display: flex; align-items: center; gap: 10px;
      }
      .match-team img { width: 22px; height: 22px; object-fit: contain; flex-shrink: 0; }
      .match-team .name {
        font-size: 13px;
        font-weight: 600;
        flex: 1;
        letter-spacing: -0.01em;
        color: var(--cl-text);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .match-team .name.winner { font-weight: 800; }
      .match-team .name.loser { color: var(--cl-text-2); }
      .match-team .name.my-team-name { font-weight: 800; color: var(--cl-accent); }
      .match-team .score {
        font-size: 14px;
        font-weight: 800;
        font-variant-numeric: tabular-nums;
        min-width: 22px;
        text-align: right;
        color: var(--cl-text);
      }
      .match-team .score.winner { color: var(--cl-accent); }
      .match-team .score.loser { color: var(--cl-text-2); opacity: 0.6; }
      .row-extras {
        display: flex;
        gap: 6px;
        margin-top: 4px;
      }
      .tv-chip {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        padding: 2px 7px;
        background: rgba(var(--cl-accent-rgb),0.12);
        border: 1px solid rgba(var(--cl-accent-rgb),0.25);
        border-radius: 999px;
        font-size: 9px;
        font-weight: 700;
        color: var(--cl-accent);
        text-transform: uppercase;
        letter-spacing: 0.04em;
      }
      .tv-chip svg { width: 10px; height: 10px; }
      .league-chip {
        display: inline-flex;
        align-items: center;
        padding: 2px 7px;
        background: rgba(var(--cl-accent-2-rgb),0.10);
        border: 1px solid rgba(var(--cl-accent-2-rgb),0.22);
        border-radius: 999px;
        font-size: 9px;
        font-weight: 700;
        color: var(--cl-accent-2);
        letter-spacing: 0.03em;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 140px;
      }
      .match-status-icon {
        color: var(--cl-text-2);
        font-size: 18px;
        opacity: 0.5;
        transition: all 0.2s;
      }
      .match-row:hover .match-status-icon {
        color: var(--cl-accent);
        opacity: 1;
        transform: translateX(3px);
      }

      /* Toast */
      .event-toast {
        position: absolute;
        top: 12px;
        left: 50%;
        transform: translateX(-50%);
        background: var(--cl-toast-bg);
        color: #ffffff;
        padding: 10px 18px;
        border-radius: 14px;
        font-size: 13px;
        font-weight: 800;
        z-index: 100;
        animation: toast-bounce 4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        pointer-events: none;
        max-width: 90%;
        text-align: center;
        letter-spacing: -0.01em;
        text-shadow: 0 1px 2px rgba(0,0,0,0.8);
      }
      .event-toast.variant-goal {
        box-shadow:
          0 0 0 2px var(--cl-gold),
          0 0 0 4px rgba(251, 191, 36, 0.3),
          0 12px 40px rgba(0, 0, 0, 0.7),
          0 0 60px rgba(251, 191, 36, 0.4);
      }
      .event-toast.variant-goal strong { color: var(--cl-gold-text); }
      .event-toast.variant-yellow {
        box-shadow: 0 0 0 2px #f59e0b, 0 0 0 4px rgba(245,158,11,0.3), 0 12px 40px rgba(0,0,0,0.7);
      }
      .event-toast.variant-yellow strong { color: #fbbf24; }
      .event-toast.variant-red {
        box-shadow: 0 0 0 2px var(--cl-live), 0 0 0 4px rgba(239,68,68,0.3), 0 12px 40px rgba(0,0,0,0.7);
      }
      .event-toast.variant-red strong { color: #fca5a5; }
      @keyframes toast-bounce {
        0%   { opacity: 0; transform: translate(-50%, -20px) scale(0.7); }
        8%   { opacity: 1; transform: translate(-50%, 0) scale(1.08); }
        14%  { transform: translate(-50%, 0) scale(1); }
        90%  { opacity: 1; transform: translate(-50%, 0) scale(1); }
        100% { opacity: 0; transform: translate(-50%, -10px) scale(0.95); }
      }
    `]}}),window.customCards=window.customCards||[],window.customCards.push({type:"soccer-live-matches",name:"Soccer Live Matches Card",description:"Shows all matches for a competition or team"}),customElements.define("soccer-live-matches-editor",class extends oe{static get properties(){return{_config:{type:Object},hass:{type:Object},entities:{type:Array}}}constructor(){super(),this.entities=[]}static get styles(){return[_e,s`
      .card-config {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }
      .option {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
      }
      label {
        font-size: 14px;
        color: var(--primary-text-color);
      }
      .field-label {
        display: block;
        font-size: 12px;
        color: var(--secondary-text-color);
        margin-bottom: 4px;
        font-weight: 600;
      }
      select, input[type="number"] {
        width: 100%;
        padding: 10px 12px;
        font-size: 14px;
        border-radius: 8px;
        border: 1px solid var(--divider-color, rgba(0,0,0,0.12));
        background: var(--card-background-color, #fff);
        color: var(--primary-text-color, #000);
        box-sizing: border-box;
      }
      select:focus, input:focus {
        outline: 2px solid var(--primary-color, #03a9f4);
        outline-offset: -1px;
      }
      h3 {
        margin: 8px 0 0;
        font-size: 13px;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: var(--secondary-text-color);
      }
      .hint {
        font-size: 12px;
        color: var(--secondary-text-color);
        margin-top: -4px;
      }
    `]}setConfig(e){if(!e)throw new Error("Invalid configuration");this._config={...e}}get config(){return this._config}updated(e){e.has("hass")&&this._fetchEntities()}_fireConfigChanged(e){this._config=e,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0})),this.requestUpdate()}_entityChanged(e){if(!this._config)return;const t=e.target.value;t!==this._config.entity&&this._fireConfigChanged({...this._config,entity:t})}_switchChanged(e){if(!this._config)return;const t=e.target;if(!t.dataset||!t.dataset.configValue)return;const a=t.dataset.configValue,i=t.checked;this._config[a]!==i&&this._fireConfigChanged({...this._config,[a]:i})}_selectChanged(e){if(!this._config)return;const t=e.target;if(!t.dataset||!t.dataset.configValue)return;const a=t.dataset.configValue,i=t.value;this._config[a]!==i&&this._fireConfigChanged({...this._config,[a]:i})}_numberChanged(e){if(!this._config)return;const t=e.target;if(!t.dataset||!t.dataset.configValue)return;const a=t.dataset.configValue,i=parseInt(t.value,10);isNaN(i)||this._config[a]!==i&&this._fireConfigChanged({...this._config,[a]:i})}_fetchEntities(){this.hass&&(this.entities=Object.keys(this.hass.states).filter((e=>e.includes("soccerlive_all")||e.includes("soccer_live_all"))).sort())}render(){if(!this._config||!this.hass)return R``;const e=this._config.entity||"",t=e&&this.entities.includes(e);return R`
      <div class="card-config">
        <h3>Sensor</h3>
        <div>
          <label class="field-label">Entity</label>
          <select @change=${this._entityChanged}>
            ${t?"":R`<option value="${e}" selected>${e||"— select —"}</option>`}
            ${this.entities.map((t=>R`
              <option value="${t}" ?selected=${t===e}>${t}</option>
            `))}
          </select>
        </div>

        <h3>Settings</h3>

        <div>
          <label class="field-label">Mijn team (accentueren)</label>
          <input type="text" placeholder="bijv. Feyenoord Rotterdam"
            .value=${this._config.my_team||""}
            @change=${e=>this._fireConfigChanged({...this._config,my_team:e.target.value})} />
        </div>

        <div class="option">
          <label>Live ticker tonen (bij live wedstrijden)</label>
          <ha-switch .checked=${!1!==this._config.show_live_ticker}
            data-config-value="show_live_ticker" @change=${this._switchChanged}></ha-switch>
        </div>

        <div class="option">
          <label>Show Finished Matches</label>
          <ha-switch
            .checked=${!1!==this._config.show_finished_matches}
            data-config-value="show_finished_matches"
            @change=${this._switchChanged}
          ></ha-switch>
        </div>

        <div class="option">
          <label>Hide Header</label>
          <ha-switch
            .checked=${!0===this._config.hide_header}
            data-config-value="hide_header"
            @change=${this._switchChanged}
          ></ha-switch>
        </div>

        <div class="option">
          <label>Newest Matches First</label>
          <ha-switch
            .checked=${!0===this._config.reverse_order}
            data-config-value="reverse_order"
            @change=${this._switchChanged}
          ></ha-switch>
        </div>

        <div class="option">
          <label>Show Event Toasts (in-card)</label>
          <ha-switch
            .checked=${!0===this._config.show_event_toasts}
            data-config-value="show_event_toasts"
            @change=${this._switchChanged}
          ></ha-switch>
        </div>

        <div>
          <label class="field-label">Max Events Visible</label>
          <input
            type="number"
            min="1"
            max="100"
            .value=${this._config.max_events_visible||5}
            data-config-value="max_events_visible"
            @change=${this._numberChanged}
          />
        </div>

        <div>
          <label class="field-label">Max Events Total</label>
          <input
            type="number"
            min="1"
            max="500"
            .value=${this._config.max_events_total||50}
            data-config-value="max_events_total"
            @change=${this._numberChanged}
          />
        </div>

        <div>
          <label class="field-label">Hide Matches Older Than (Days)</label>
          <input
            type="number"
            min="0"
            max="365"
            .value=${this._config.hide_past_days||0}
            data-config-value="hide_past_days"
            @change=${this._numberChanged}
          />
          <div class="hint">Only works when "Show Finished Matches" is enabled.</div>
        </div>
        <div>
          <label class="field-label">Skin</label>
          <select data-config-value="skin" @change=${this._selectChanged}>
            <option value="dark"       ?selected=${"dark"===(this._config.skin||"dark")}>Dark (standaard)</option>
            <option value="light"      ?selected=${"light"===this._config.skin}>Light</option>
            <option value="red-white"  ?selected=${"red-white"===this._config.skin}>Red & White</option>
            <option value="classic"    ?selected=${"classic"===this._config.skin}>Classic (groen)</option>
            <option value="neon"       ?selected=${"neon"===this._config.skin}>Neon</option>
            <option value="gold"        ?selected=${"gold"===this._config.skin}>Gold</option>
            <option value="orange"     ?selected=${"orange"===this._config.skin}>Orange (Netherlands)</option>
            <option value="blue"       ?selected=${"blue"===this._config.skin}>Blue (Chelsea / PSG / Inter)</option>
            <option value="black-white" ?selected=${"black-white"===this._config.skin}>Black &amp; White (Juventus)</option>
            <option value="feyenoord"  ?selected=${"feyenoord"===this._config.skin}>Feyenoord (red/white)</option>
            <option value="arsenal"    ?selected=${"arsenal"===this._config.skin}>Arsenal</option>
            <option value="barcelona"  ?selected=${"barcelona"===this._config.skin}>Barcelona</option>
            <option value="real-madrid" ?selected=${"real-madrid"===this._config.skin}>Real Madrid</option>
          </select>
        </div>
        <div>
          <label class="field-label">Language</label>
          <select data-config-value="language" @change=${this._selectChanged}>
            <option value="" ?selected=${!this._config.language}>Auto (HA locale)</option>
            <option value="en" ?selected=${"en"===this._config.language}>English</option>
            <option value="it" ?selected=${"it"===this._config.language}>Italiano</option>
            <option value="fr" ?selected=${"fr"===this._config.language}>Français</option>
            <option value="es" ?selected=${"es"===this._config.language}>Español</option>
            <option value="nl" ?selected=${"nl"===this._config.language}>Nederlands</option>
            <option value="de" ?selected=${"de"===this._config.language}>Deutsch</option>
            <option value="pt" ?selected=${"pt"===this._config.language}>Português</option>
          </select>
        </div>
      </div>
    `}});const be=new Map,xe=new Map,ye=150,we={"Johan Cruijff Arena":{lat:52.3145,lon:4.9425},"Johan Cruijff ArenA":{lat:52.3145,lon:4.9425},"Philips Stadion":{lat:51.4424,lon:5.4675},"Stadion Feyenoord":{lat:51.8896,lon:4.5219},"Feyenoord Stadium":{lat:51.8896,lon:4.5219},"De Kuip":{lat:51.8896,lon:4.5219},"Stadion de Kuip":{lat:51.8896,lon:4.5219},"AFAS Stadion":{lat:52.6281,lon:4.7483},"Stadion Galgenwaard":{lat:52.0779,lon:5.1456},"De Grolsch Veste":{lat:52.2373,lon:6.8296},"Goffert Stadion":{lat:51.8307,lon:5.8606},"Abe Lenstra Stadion":{lat:52.9584,lon:5.9141},"Sparta-Stadion Het Kasteel":{lat:51.9171,lon:4.4658},"Het Kasteel":{lat:51.9171,lon:4.4658},"De Adelaarshorst":{lat:52.2488,lon:6.1737},"Polman Stadion":{lat:52.3514,lon:6.6582},"Mandemakers Stadion":{lat:51.6853,lon:5.0535},Euroborg:{lat:53.1822,lon:6.5942},"MAC³PARK Stadion":{lat:52.5143,lon:6.1006},"MACPARK Stadion":{lat:52.5143,lon:6.1006},"Yanmar Stadion":{lat:52.3893,lon:5.2152},"Rat Verlegh Stadion":{lat:51.5747,lon:4.7716},"Koning Willem II Stadion":{lat:51.5547,lon:5.0917},"Fortuna Sittard Stadion":{lat:51.0011,lon:5.8683},GelreDome:{lat:51.9653,lon:5.9111},"Kras Stadion":{lat:52.4436,lon:4.6264},"De Vijverberg":{lat:51.963,lon:6.2872},"Cambuur Stadion":{lat:53.2112,lon:5.8102},"Parkstad Limburg Stadion":{lat:50.9081,lon:5.9928},"Cars Jeans Stadion":{lat:52.0667,lon:4.3167},"BENU Stadion":{lat:52.0667,lon:4.3167},"MetLife Stadium":{lat:40.8135,lon:-74.0745},"AT&T Stadium":{lat:32.748,lon:-97.0927},"SoFi Stadium":{lat:33.9535,lon:-118.3392},"Levi's Stadium":{lat:37.4032,lon:-121.9699},"Hard Rock Stadium":{lat:25.958,lon:-80.2389},"Lincoln Financial Field":{lat:39.9008,lon:-75.1675},"Arrowhead Stadium":{lat:39.049,lon:-94.4839},"Allegiant Stadium":{lat:36.0908,lon:-115.1839},"Gillette Stadium":{lat:42.0909,lon:-71.2643},"Century Link Field":{lat:47.5952,lon:-122.3316},"Lumen Field":{lat:47.5952,lon:-122.3316},"BC Place":{lat:49.2768,lon:-123.1117},"BMO Field":{lat:43.6334,lon:-79.4179},"Estadio Azteca":{lat:19.303,lon:-99.1506},"Estadio BBVA":{lat:25.6694,lon:-100.2436},"Estadio Akron":{lat:20.6854,lon:-103.4673},"Allianz Arena":{lat:48.2188,lon:11.6247},"Signal Iduna Park":{lat:51.4532,lon:7.4516},Olympiastadion:{lat:52.5147,lon:13.2395},"Wembley Stadium":{lat:51.556,lon:-.2796},"Tottenham Hotspur Stadium":{lat:51.6043,lon:-.0665},"Emirates Stadium":{lat:51.5549,lon:-.1084},"Stamford Bridge":{lat:51.4821,lon:-.191},"Old Trafford":{lat:53.4632,lon:-2.291},"Etihad Stadium":{lat:53.4831,lon:-2.2004},Anfield:{lat:53.4308,lon:-2.9608},"Villa Park":{lat:52.5092,lon:-1.8847},"Camp Nou":{lat:41.3815,lon:2.1229},"Spotify Camp Nou":{lat:41.3815,lon:2.1229},"Estadi Olímpic Lluís Companys":{lat:41.3643,lon:2.158},"Santiago Bernabéu":{lat:40.453,lon:-3.6883},"Civitas Metropolitano":{lat:40.4361,lon:-3.5995},"San Mamés":{lat:43.2627,lon:-2.9385},"Estadio de La Cerámica":{lat:39.9441,lon:-.1042},Mestalla:{lat:39.4747,lon:-.3583},"Parc des Princes":{lat:48.8414,lon:2.253},"Stade de France":{lat:48.9244,lon:2.3601},"Groupama Stadium":{lat:45.7654,lon:4.9825},Vélodrome:{lat:43.2697,lon:5.3961},"Stade Vélodrome":{lat:43.2697,lon:5.3961},"San Siro":{lat:45.4781,lon:9.124},"Stadio Giuseppe Meazza":{lat:45.4781,lon:9.124},"Allianz Stadium":{lat:45.1096,lon:7.6412},"Stadio Olimpico":{lat:41.9341,lon:12.4547},"Stadio Diego Armando Maradona":{lat:40.8279,lon:14.193},BayArena:{lat:51.0382,lon:7.0023},"Red Bull Arena":{lat:51.3457,lon:12.3484},Volksparkstadion:{lat:53.5875,lon:9.8985},"Volksparkstadion Hamburg":{lat:53.5875,lon:9.8985},"Stadion Feijenoord":{lat:51.8896,lon:4.5219},"Estádio da Luz":{lat:38.7526,lon:-9.1849},"Estádio José Alvalade":{lat:38.7613,lon:-9.1609},"Estádio do Dragão":{lat:41.1611,lon:-8.5834},"Celtic Park":{lat:55.8491,lon:-4.2051},"Ibrox Stadium":{lat:55.8508,lon:-4.3095},"Johan Cruyff Arena":{lat:52.3145,lon:4.9425},"PSV Stadion":{lat:51.4424,lon:5.4675},"Fenerbahçe Şükrü Saracoğlu":{lat:40.9836,lon:29.0333},"Türk Telekom Stadium":{lat:41.1066,lon:29.0103},"Vodafone Park":{lat:41.0038,lon:28.9967}};function $e(e){if(e.size>=ye){const t=e.keys().next().value;e.delete(t)}}function ke(e){return{0:"Clear",1:"Mostly clear",2:"Partly cloudy",3:"Cloudy",45:"Foggy",48:"Foggy",51:"Light drizzle",53:"Drizzle",55:"Heavy drizzle",61:"Rain",63:"Heavy rain",65:"Very heavy rain",71:"Light snow",73:"Snow",75:"Heavy snow",77:"Snow grains",80:"Showers",81:"Heavy showers",82:"Violent showers",85:"Snow showers",86:"Heavy snow showers",95:"Thunderstorm",96:"Thunderstorm + hail",99:"Thunderstorm + heavy hail"}[e]||"Unknown"}const Ce=s`
  .weather-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 10px;
    border-radius: 6px;
    background: rgba(0, 0, 0, 0.1);
    font-size: 12px;
    color: var(--primary-text-color);
  }
  .weather-icon {
    font-size: 18px;
  }
  .weather-temp {
    font-weight: 600;
  }
  .weather-wind {
    font-size: 11px;
    opacity: 0.7;
  }
`;async function ze(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if(!e||"N/A"===e)return R``;try{let s=null;if(s=null!==i&&null!==n?{lat:i,lon:n}:await function(e){if(!e||"N/A"===e)return null;if(be.has(e))return be.get(e);const t=we[e]||null;return t&&($e(be),be.set(e,t)),t}(e),!s)return R``;const o=await async function(e,t){const a=`${e},${t}`;if(xe.has(a)){const e=xe.get(a);if(Date.now()-e.timestamp<36e5)return e.data}try{const s=await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${e}&longitude=${t}&current=temperature_2m,weather_code,wind_speed_10m&timezone=auto`),o=await s.json();if(o.current){const e={temp:Math.round(o.current.temperature_2m),code:o.current.weather_code,wind:(n=o.current.wind_speed_10m,n<1?0:n<6?1:n<12?2:n<20?3:n<29?4:n<39?5:n<50?6:n<62?7:n<75?8:n<89?9:n<103?10:n<118?11:12),wind_unit:"BFT",icon:(i=o.current.weather_code,i&&0!==i&&1!==i?2===i?"⛅":3===i?"☁️":45===i||48===i?"🌫️":i>=51&&i<=55?"🌦️":i>=61&&i<=65?"🌧️":i>=71&&i<=77?"🌨️":i>=80&&i<=82?"🌧️":85===i||86===i?"🌨️":95===i||96===i||99===i?"⛈️":"🌤️":"☀️"),description:ke(o.current.weather_code),timestamp:Date.now()};return $e(xe),xe.set(a,{data:e,timestamp:Date.now()}),e}}catch(e){console.warn("Weather fetch failed:",e)}var i,n;return null}(s.lat,s.lon);if(!o)return R``;const r=t?pe("weather.wind",de(t,a)):"Wind speed (Beaufort)";return R`
      <div class="weather-badge" title="${e}: ${o.description}">
        <span class="weather-icon">${o.icon}</span>
        <span class="weather-temp">${o.temp}°</span>
        <span class="weather-wind" title="${r}">${o.wind} ${o.wind_unit||"BFT"}</span>
      </div>
    `}catch(e){return console.warn("Weather badge error:",e),R``}}const Se=s`
  .spinner-container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    min-height: 100px;
  }

  .spinner {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    border-top-color: var(--primary-color, #2196F3);
    animation: spinner-rotate 1s linear infinite;
  }

  @keyframes spinner-rotate {
    to { transform: rotate(360deg); }
  }

  .spinner-text {
    margin-left: 12px;
    font-size: 12px;
    color: var(--secondary-text-color);
  }
`,Ee=function(){return R`
  <div class="spinner-container">
    <div class="spinner"></div>
    <span class="spinner-text">${arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Loading..."}</span>
  </div>
`},Ae=(s`
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
`,function(e,t,a){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return R`
  <ha-card style="padding: 16px; text-align: center; color: var(--error-color, #ef5350);">
    <div style="font-size: 24px; margin-bottom: 8px;">${e}</div>
    <div style="font-size: 14px; font-weight: 600; margin-bottom: 4px;">${t}</div>
    <div style="font-size: 12px; color: var(--secondary-text-color); margin-bottom: 8px;">${a}</div>
    ${i?R`<div style="font-size: 11px; color: var(--text-primary-color); background: rgba(0,0,0,0.1); padding: 8px; border-radius: 4px; margin-top: 8px;">${i}</div>`:""}
  </ha-card>
`}),Te=function(e,t,a){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return R`
  <ha-card style="padding: 24px 16px; text-align: center; color: var(--secondary-text-color);">
    <div style="font-size: 32px; margin-bottom: 12px; opacity: 0.5;">${e}</div>
    <div style="font-size: 13px; font-weight: 600; margin-bottom: 4px; color: var(--primary-text-color);">${t}</div>
    <div style="font-size: 12px; opacity: 0.7; margin-bottom: 8px;">${a}</div>
    ${i?R`<div style="font-size: 11px; opacity: 0.5; margin-top: 8px;">${i}</div>`:""}
  </ha-card>
`},Ne="soccer_live_cache_",Le=new Map;class Pe{static set(e,t){try{const a=JSON.stringify(t);if(Le.get(e)===a)return;Le.size>=50&&Le.delete(Le.keys().next().value),Le.set(e,a),localStorage.setItem(Ne+e,JSON.stringify({timestamp:Date.now(),data:t}))}catch(e){console.warn("Failed to cache:",e)}}static get(e){try{const t=localStorage.getItem(Ne+e);if(!t)return null;const{timestamp:a,data:i}=JSON.parse(t),n=Date.now()-a;return n<864e5?{data:i,age:n,isCached:!0}:(this.clear(e),null)}catch(e){return console.warn("Failed to read cache:",e),null}}static clear(e){try{localStorage.removeItem(Ne+e)}catch(e){console.warn("Failed to clear cache:",e)}}static clearAll(){try{Object.keys(localStorage).forEach((e=>{e.startsWith(Ne)&&localStorage.removeItem(e)}))}catch(e){console.warn("Failed to clear all cache:",e)}}static getAge(e){const t=localStorage.getItem(Ne+e);if(!t)return null;try{const{timestamp:e}=JSON.parse(t),a=Date.now()-e,i=Math.floor(a/6e4);if(i<60)return`${i}m ago`;const n=Math.floor(i/60);return n<24?`${n}h ago`:`${Math.floor(n/24)}d ago`}catch(e){return null}}}customElements.define("soccer-live-team",class extends oe{static get properties(){return{hass:{},_config:{},_isLoading:{type:Boolean},showPopup:{type:Boolean},activeMatch:{type:Object},_eventSubscriptions:{type:Array},_toastMessage:{type:String},_toastVisible:{type:Boolean},_toastVariant:{type:String},_weatherBadge:{type:Object},_cachedData:{type:Object}}}setConfig(e){if(!e.entity)throw new Error("Entity required");this._config=e,me(this,e);const t=["big","huge"].includes(e.score_size)?e.score_size:"normal";this.setAttribute("data-score",t),this._isLoading=!0,this._loadingStarted=Date.now(),this._lastWeatherVenue=null,this.showPopup=!1,this.activeMatch=null,this.showEventToasts=!0===e.show_event_toasts,this.myTeam=(e.my_team||"").toLowerCase(),this.showPreviousMatches=!0===e.show_previous_matches,this.showFormTrend=!0===e.show_form_trend,this._toastMessage="",this._toastVisible=!1,this._toastVariant="goal",this._toastTimer=null}_t(e,t){return pe(e,de(this.hass,this._config),t)}_translatePhase(e){return e?{"regular-season":this._t("phase.regular_season"),"regular season":this._t("phase.regular_season"),"group-stage":this._t("phase.group_stage"),"group stage":this._t("phase.group_stage"),playoffs:this._t("phase.playoffs")}[String(e).toLowerCase()]||e:""}_shouldShowPhase(e){return!!e&&"regular-season"!==String(e).toLowerCase()}connectedCallback(){super.connectedCallback(),this._subscribeToEvents(),this._countdownInterval=setInterval((()=>this.requestUpdate()),3e4),this._loadingTimer=setTimeout((()=>this.requestUpdate()),1e4)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this._countdownInterval),this._countdownInterval=null,clearTimeout(this._loadingTimer),this._eventSubscriptions&&Array.isArray(this._eventSubscriptions)&&(this._eventSubscriptions.forEach((e=>{"function"==typeof e&&e()})),this._eventSubscriptions=[]),this._escHandler&&(document.removeEventListener("keydown",this._escHandler),this._escHandler=null)}_subscribeToEvents(){this.hass&&this.hass.connection&&(this._eventSubscriptions&&this._eventSubscriptions.length>0||(this._eventSubscriptions=[],["soccer_live_goal","soccer_live_yellow_card","soccer_live_red_card"].forEach((e=>{this.hass.connection.subscribeEvents(this._handleSoccerLiveEvent.bind(this),e).then((e=>{"function"==typeof e&&this._eventSubscriptions.push(e)}))}))))}_eventBelongsToThisCard(e){if(!this.hass||!this._config)return!1;const t=this.hass.states[this._config.entity];if(!t)return!1;const a=t.attributes.matches||[];if(0===a.length)return!1;const i=a[0];return i.home_team===e.home_team&&i.away_team===e.away_team}_handleSoccerLiveEvent(e){const t=e.event_type,a=e.data;if(this._eventBelongsToThisCard(a)&&this.showEventToasts)if("soccer_live_goal"===t){const e=a.team===a.home_team?"home":"away";requestAnimationFrame((()=>this._triggerGoalCelebration(e,a)))}else this._showEventToast(t,a)}_showEventToast(e,t){let a="",i="goal";"soccer_live_goal"===e?(a=`<strong>${this._t("event.goal").toUpperCase()}!</strong> ${t.player} · ${t.home_team} ${t.home_score} - ${t.away_score} ${t.away_team}`,i="goal"):"soccer_live_yellow_card"===e?(a=`🟨 <strong>${this._t("event.yellow_card")}</strong> · ${t.player}${t.minute?` (${t.minute}')`:""}`,i="yellow"):"soccer_live_red_card"===e&&(a=`🟥 <strong>${this._t("event.red_card")}</strong> · ${t.player}${t.minute?` (${t.minute}')`:""}`,i="red"),a&&(this._toastMessage=a,this._toastVariant=i,this._toastVisible=!0,this._toastTimer&&clearTimeout(this._toastTimer),this._toastTimer=setTimeout((()=>{this._toastVisible=!1,this.requestUpdate()}),4e3),this.requestUpdate())}_triggerGoalCelebration(e,t){const a=this.shadowRoot&&this.shadowRoot.querySelector("ha-card");if(!a)return;a.querySelectorAll(".confetti, .goal-banner, .goal-flash-overlay").forEach((e=>e.remove())),a.classList.remove("goal-flash"),a.offsetWidth,a.classList.add("goal-flash"),setTimeout((()=>a.classList.remove("goal-flash")),1700);const i=document.createElement("div");i.className="goal-flash-overlay",a.appendChild(i),setTimeout((()=>i.remove()),1e3);const n=document.createElement("div");n.className="goal-banner",n.innerHTML='<div class="goal-banner-text">GOAL!</div>',a.appendChild(n),setTimeout((()=>n.remove()),1700);const s=a.querySelector(".score-numbers");s&&(s.classList.remove("goal-scored"),s.offsetWidth,s.classList.add("goal-scored"),setTimeout((()=>s.classList.remove("goal-scored")),1300));const o=a.querySelectorAll(".team-side .team-logo-big"),r="away"===e?o[1]:o[0];r&&(r.classList.remove("scorer-bounce"),r.offsetWidth,r.classList.add("scorer-bounce"),setTimeout((()=>r.classList.remove("scorer-bounce")),1300)),navigator.vibrate&&navigator.vibrate([180,80,180,80,280]),setTimeout((()=>this._showEventToast("soccer_live_goal",t)),600);const l=["#ec4899","#6366f1","#06b6d4","#fbbf24","#10b981","#ef4444"],c=["⚽","🎉","✨","🔥","⭐"];for(let e=0;e<36;e++){const e=document.createElement("div");e.className="confetti",Math.random()>.55?(e.textContent=c[Math.floor(Math.random()*c.length)],e.style.fontSize=14+10*Math.random()+"px",e.style.background="transparent"):(e.style.background=l[Math.floor(Math.random()*l.length)],e.style.borderRadius=Math.random()>.5?"50%":"2px");const t=380*(Math.random()-.5)+"px",i=240*Math.random()+100+"px";e.style.setProperty("--dx",t),e.style.setProperty("--dy",i),e.style.animationDelay=.3*Math.random()+"s",a.appendChild(e),setTimeout((()=>e.remove()),2e3)}}_parseMatchDate(e){if(!e||"N/A"===e)return null;try{const[t,a]=e.split(" "),[i,n,s]=t.split(/[-\/]/).map(Number),[o,r]=(a||"00:00").split(":").map(Number);return new Date(s,n-1,i,o,r)}catch(e){return null}}_liveCountdown(e){if(!e||"pre"!==e.state)return null;const t=this._parseMatchDate(e.date);if(!t)return null;const a=t-new Date;if(a<=0||a>1728e5)return null;const i=Math.floor(a/6e4);if(i<1)return this._t("time.now");if(i<60)return this._t("time.in_n_min",{n:i});const n=Math.floor(i/60);return this._t("time.in_n_h",{n})}getCardSize(){return 4}static getConfigElement(){return document.createElement("soccer-live-team-editor")}static getStubConfig(){return{entity:"sensor.soccer_live_next_",show_event_toasts:!1}}showDetails(e){this.activeMatch=e,this.showPopup=!0}closePopup(){this.showPopup=!1}separateEvents(e){const t=[],a=[],i=[];return e.forEach((e=>{const n=String(e||"");n.includes("Goal")||n.includes("Penalty - Scored")?t.push(this.formatMatchEvent(n)):n.includes("Yellow Card")?a.push(this.formatMatchEvent(n)):n.includes("Red Card")&&i.push(this.formatMatchEvent(n))})),{goals:t,yellowCards:a,redCards:i}}formatMatchEvent(e){const t=e=>this._t(e);let a=String(e||"").trim();a=a.replace(/^Goal\s*-\s*/i,"").replace(/^Yellow Card\s*-\s*/i,"").replace(/^Red Card\s*-\s*/i,"").replace(/^Penalty - Scored\s*-\s*/i,`${t("event.penalty")} - `).replace(/^Header\s*-\s*/i,`${t("event.header")} - `).replace(/^Shot\s*-\s*/i,`${t("event.shot")} - `).replace(/^Free-kick\s*-\s*/i,`${t("event.free_kick")} - `).replace(/^Penalty\s*-\s*/i,`${t("event.penalty")} - `),a=a.replace(/^([^:]+):\s*/,"$1 ");const i=[t("event.header"),t("event.shot"),t("event.penalty"),t("event.free_kick")].map((e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")));return a=a.replace(new RegExp(`^(${i.join("|")})\\s*-\\s*(.+)$`,"i"),((e,t,a)=>`${a} (${t.toLowerCase()})`)),a=a.replace(/\bN\/A\b/g,t("generic.unknown")),a}_renderStatusBadge(e){const t=e.state;return"in"===t?R`<span class="status-badge live"><span class="dot"></span>${this._t("status.live")}</span>`:"post"===t?R`<span class="status-badge finished">${this._t("status.finished")}</span>`:R`<span class="status-badge scheduled">${e.date||this._t("status.scheduled")}</span>`}_renderClock(e){const t=e.state;if("in"===t){const t=e.status_detail&&"N/A"!==e.status_detail?e.status_detail:"",a=(e.clock&&"N/A"!==e.clock?e.clock:"")||t||e.status||"";return R`<div class="clock"><span class="dot"></span>${a}</div>`}if("post"===t)return R`<div class="clock finished">${this._t("status.full_time")}</div>`;const a=this._liveCountdown(e);return R`<div class="clock upcoming">${a||e.date||""}</div>`}_renderRecord(e){if(!e||"N/A"===e)return"";const t=String(e).split("-");return 3===t.length?t.every((e=>0===parseInt(e)))?"":R`<div class="record">
        <span class="rec rec-w">${t[0]}${this._t("form.W")}</span>
        <span class="rec rec-d">${t[1]}${this._t("form.D")}</span>
        <span class="rec rec-l">${t[2]}${this._t("form.L")}</span>
      </div>`:R`<div class="record"><span class="rec">${e}</span></div>`}_hexToRgb(e){if(!e||"N/A"===e)return null;const t=String(e).replace("#","");return 6!==t.length?null:`${parseInt(t.slice(0,2),16)},${parseInt(t.slice(2,4),16)},${parseInt(t.slice(4,6),16)}`}_renderTopScorer(e){if(!e||!e.name)return"";const t=e.short_name||e.name,a=this._t("team.top_scorer");return R`
      <div class="top-scorer" title="${a}: ${e.name} (${e.value})">
        <span class="ts-label">⚽ ${a}</span>
        <div class="ts-row">
          <span class="ts-name">${t}</span>
          <span class="ts-val">${e.value}<span class="ts-unit">★</span></span>
        </div>
      </div>
    `}_renderForm(e){if(!e||"N/A"===e)return"";const t=String(e).replace(/[^WLDwld]/g,"").toUpperCase();if(t.length<2)return"";const a=t.slice(-5).split(""),i=e=>this._t("form."+e);return R`
      <div class="form-pills">
        ${a.map((e=>R`<div class="form-pill ${e}">${i(e)}</div>`))}
      </div>
    `}_renderStatsRow(e){const t=e.home_statistics||{},a=e.away_statistics||{},i=[],n=e=>{const t=parseFloat(e);return isNaN(t)?null:t},s=function(e,s,o){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";const l=n(t[s]),c=n(a[o]);null!==l&&null!==c&&i.push({label:e,home:t[s],away:a[o],hNum:l,aNum:c,suffix:r})};return s(this._t("team.possession"),"possessionPct","possessionPct","%"),s(this._t("team.shots"),"totalShots","totalShots"),s(this._t("team.on_target"),"shotsOnTarget","shotsOnTarget"),0===i.length?"":R`
      <div class="stats-row">
        ${i.map((e=>{const t=e.hNum+e.aNum,a=t>0?e.hNum/t*100:50,i=100-a;return R`
            <div class="stat-bar">
              <div class="stat-bar-label">
                <span class="home-val">${e.home}${e.suffix}</span>
                <span class="label-text">${e.label}</span>
                <span class="away-val">${e.away}${e.suffix}</span>
              </div>
              <div class="stat-bar-track">
                <div class="stat-bar-home" style="width: ${a}%;"></div>
                <div class="stat-bar-away" style="width: ${i}%;"></div>
              </div>
            </div>
          `}))}
      </div>
    `}render(){if(!this.hass||!this._config)return Ee("Loading...");const e=this._config.entity,t=this.hass.states[e];if(!t){const t=Pe.get(e);return t?Ae("⏱","Offline - showing cached data","Last update: "+new Date(t.data.timestamp||Date.now()).toLocaleTimeString(),"Waiting for integration to come online"):Ae("⚠️","Entity not found",`Unable to find: ${e}`,"Check the entity configuration")}if("unavailable"===t.state){const t=Pe.get(e);if(!t||!t.data.matches)return Ae("📡","Sensor unavailable","The integration may not be running","Restart Home Assistant or check the integration");this._cachedData=t.data}if(this._isLoading)return Date.now()-this._loadingStarted>1e4?Ae("⏱",this._t("ui.loading_timeout"),`${this._t("ui.entity_not_responding")}: ${this._config.entity}`,this._t("ui.check_integration")):Ee(this._t("ui.loading"));const a=t&&"unavailable"!==t.state?t.attributes:this._cachedData;if(!a||!a.matches||0===a.matches.length){const e=this._config.entity||"";return e.includes("soccerlive_next")||e.includes("soccerlive_all_mixed")||e.includes("soccer_live_next")||e.includes("soccer_live_all_mixed")?Te("📅",this._t("ui.off_season"),this._t("team.off_season")):Ae("⚠️",this._t("ui.wrong_entity_type"),e,this._t("ui.wrong_entity_type_hint"))}const i=a.matches[0],n=a.league_info?a.league_info[0]:null,s=n&&n.logo_href&&"N/A"!==n.logo_href?n.logo_href:null,o="in"===i.state,r="post"===i.state,l=o||r,c=n&&n.abbreviation&&"N/A"!==n.abbreviation?n.abbreviation:i.league_name&&"N/A"!==i.league_name?i.league_name:i.season_info&&"N/A"!==i.season_info&&this._shouldShowPhase(i.season_info)?this._translatePhase(i.season_info):"",d=i.venue&&"N/A"!==i.venue?i.venue:"",p=i.venue_city&&"N/A"!==i.venue_city?i.venue_city:"",h=d?p?`${d}, ${p}`:d:"—",g=i.broadcast&&""!==i.broadcast&&"N/A"!==i.broadcast?i.broadcast:"",u=Array.isArray(i.broadcasts)&&i.broadcasts.length?i.broadcasts:g?[g]:[],m=i.neutral_site||!1,f=parseInt(i.attendance,10),v=!isNaN(f)&&f>0,_=this._hexToRgb(i.home_color),b=this._hexToRgb(i.away_color),x=_||b?`background:\n      radial-gradient(ellipse at 0% 0%, rgba(${_||"99,102,241"},0.18), transparent 55%),\n      radial-gradient(ellipse at 100% 100%, rgba(${b||"236,72,153"},0.18), transparent 55%)`:"",y=this.myTeam||(a.team_name||"").toLowerCase(),w=y&&i.home_team&&i.home_team.toLowerCase().includes(y),$=y&&i.away_team&&i.away_team.toLowerCase().includes(y);return R`
      <ha-card class="${o?"live":""}">
        <div class="bg-logos">
          <div class="bg-logo home"><img src="${i.home_logo}" alt="" loading="lazy"></div>
          <div class="bg-logo away"><img src="${i.away_logo}" alt="" loading="lazy"></div>
        </div>
        <div class="hero-bg" style="${x}"></div>

        ${this.showEventToasts&&this._toastVisible?R`
          <div class="event-toast variant-${this._toastVariant}" .textContent=${this._toastMessage}></div>
        `:""}

        <div class="top-bar">
          <div class="competition">
            <span class="comp-icon">
              ${s?R`<img src="${s}" alt="" />`:"⚽"}
            </span>
            <span class="comp-name">${c||" "}</span>
          </div>
          ${this._renderStatusBadge(i)}
        </div>

        <div class="scoreboard">
          <div class="team-side home">
            <div class="team-logo-wrap">
              <img class="team-logo-big" src="${i.home_logo}" alt="${i.home_team}" />
            </div>
            <div class="team-name-big ${w?"my-team":""}">${i.home_team}</div>
            ${!o&&i.home_standing_summary?R`<div class="standing-summary">${i.home_standing_summary}</div>`:""}
            ${this._renderRecord(i.home_record)}
            ${o?this._renderForm(i.home_form):this._renderForm(i.last_five_home)||this._renderForm(i.home_form)}
            ${o?"":this._renderTopScorer(i.home_top_scorer)}
          </div>

          <div class="score-center">
            ${l?R`<div class="score-numbers">${i.home_score} <span class="dash">-</span> ${i.away_score}</div>`:R`<div class="score-vs">tegen</div>`}
            ${this._renderClock(i)}
          </div>

          <div class="team-side away">
            <div class="team-logo-wrap">
              <img class="team-logo-big" src="${i.away_logo}" alt="${i.away_team}" />
            </div>
            <div class="team-name-big ${$?"my-team":""}">${i.away_team}</div>
            ${!o&&i.away_standing_summary?R`<div class="standing-summary">${i.away_standing_summary}</div>`:""}
            ${this._renderRecord(i.away_record)}
            ${o?this._renderForm(i.away_form):this._renderForm(i.last_five_away)||this._renderForm(i.away_form)}
            ${o?"":this._renderTopScorer(i.away_top_scorer)}
          </div>
        </div>

        ${o?this._renderStatsRow(i):""}

        <div class="meta-row">
          <div class="meta-item venue-item" style="flex-wrap: wrap; gap: 8px;">
            <div style="display: flex; align-items: center; gap: 4px;">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>${h}</span>
            </div>
            ${this._weatherBadge?this._weatherBadge:""}
          </div>
          ${l?R`<button class="info-btn" @click="${()=>this.showDetails(i)}">${this._t("team.details")} ›</button>`:R`
              <div class="meta-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                <span>${i.date||""}</span>
              </div>
            `}
        </div>

        ${u.length||v||m||i.has_stats||i.has_commentary||i.links&&i.links.video?R`
          <div class="extras-row">
            ${u.length?R`
              <div class="extra-chip broadcast">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="13" rx="2"/><polyline points="17 2 12 7 7 2"/></svg>
                <span>${u.join(" · ")}</span>
              </div>
            `:""}
            ${v?R`
              <div class="extra-chip attendance">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
                <span>${f.toLocaleString(de(this.hass,this._config))} ${this._t("team.spectators")}</span>
              </div>
            `:""}
            ${m?R`<div class="extra-chip neutral">⚖️ <span>${this._t("ui.neutral_site")}</span></div>`:""}
            ${i.has_stats&&i.links&&(i.links.stats||i.links.summary)?R`<div class="extra-chip info clickable" @click="${()=>window.open(i.links.stats||i.links.summary,"_blank","noopener,noreferrer")}" title="${this._t("ui.open_stats")}">📊 <span>${this._t("card.stats")}</span></div>`:""}
            ${i.has_commentary&&i.links&&(i.links.commentary||i.links.summary)?R`<div class="extra-chip info clickable" @click="${()=>window.open(i.links.commentary||i.links.summary,"_blank","noopener,noreferrer")}" title="${this._t("ui.open_commentary")}">💬 <span>${this._t("card.commentary")}</span></div>`:""}
            ${i.links&&i.links.video?R`<div class="extra-chip info clickable" @click="${()=>window.open(i.links.video,"_blank","noopener,noreferrer")}" title="${this._t("ui.open_video")}">🎬 <span>${this._t("card.video")}</span></div>`:""}
          </div>
        `:""}

        ${this.showFormTrend?this._renderFormTrend(a.previous_matches,a.matches,this.myTeam||a.team_name):""}
        ${this.showPreviousMatches?this._renderPreviousMatches(a.previous_matches,a.matches,this.myTeam||a.team_name):""}
        ${this._renderH2H(i.head_to_head,i.home_team)}
        ${this._renderUpcomingList(a.upcoming_matches,a.matches,this.myTeam||a.team_name)}
      </ha-card>
      ${this.showPopup&&this.activeMatch?this._renderPopup():""}
    `}_relativeDate(e){if(!e)return"";const t=e.split(" "),[a,i,n]=(t[0]||"").split(/[-\/]/).map(Number);if(!a||!i||!n)return t[0]||"";const s=new Date(n,i-1,a),o=new Date;o.setHours(0,0,0,0);const r=Math.round((s-o)/864e5);if(1===r)return this._t("time.tomorrow");if(r<=6&&r>1)return this._t("time.in_n_d",{n:r});de(this.hass,this._config);const l=`month.${i}`;return`${a} ${this._t(l)}`}_teamBadge(e,t){const a=t&&"N/A"!==t?`#${t.replace("#","")}`:"rgba(var(--cl-accent-rgb),0.25)";return R`<span class="abbrev-badge" style="background:${a}">${e}</span>`}_renderFormTrend(e,t,a){const i=(a||"").toLowerCase(),n=e&&e.length>0?e:(t||[]).filter((e=>"post"===e.state)).slice(-10).reverse();if(0===n.length)return"";const s=n.map((e=>{const t=e.home_team&&e.home_team.toLowerCase().includes(i),a=parseInt(e.home_score),n=parseInt(e.away_score);return isNaN(a)||isNaN(n)?null:a===n?"D":t&&a>n||!t&&n>a?"W":"L"})).filter(Boolean).reverse();if(s.length<2)return"";const o=s.filter((e=>"W"===e)).length,r=s.filter((e=>"D"===e)).length,l=s.filter((e=>"L"===e)).length;return R`
      <div class="form-trend-section">
        <div class="upcoming-list-title">${this._t("team.form_trend")||"Seizoenvorm"}</div>
        <div class="form-trend-row">
          <div class="form-trend-dots">
            ${s.map((e=>R`<span class="ft-dot ${e.toLowerCase()}">${this._t("form."+e)}</span>`))}
          </div>
          <span class="form-trend-summary">${o}${this._t("form.W")} ${r}${this._t("form.D")} ${l}${this._t("form.L")}</span>
        </div>
      </div>
    `}_renderPreviousMatches(e,t,a){const i=e&&e.length>0?e.filter((e=>"post"===e.state||!e.state)):t?t.filter((e=>"post"===e.state)).slice(-3).reverse():[];if(0===i.length)return"";const n=(a||"").toLowerCase();return R`
      <div class="upcoming-list">
        <div class="upcoming-list-title">${this._t("team.previous_matches")}</div>
        ${i.map((e=>{const t=n&&e.home_team&&e.home_team.toLowerCase().includes(n),a=n&&e.away_team&&e.away_team.toLowerCase().includes(n),i=parseInt(e.home_score),s=parseInt(e.away_score),o=!isNaN(i)&&!isNaN(s)&&i>s,r=!isNaN(i)&&!isNaN(s)&&s>i;return R`
            <div class="upcoming-row">
              <span class="upcoming-date">
                ${e.date?e.date.split(" ")[0]:""}
                <span class="upcoming-date-day">&nbsp;</span>
              </span>
              <span class="upcoming-team home-side ${t?"tracked":""}">
                <img src="${e.home_logo}" alt="" />
                ${this._teamBadge(e.home_abbrev||"?",e.home_color)}
              </span>
              <span class="prev-score ${o?"home-win":r?"away-win":"draw"}">
                ${e.home_score??"-"}-${e.away_score??"-"}
              </span>
              <span class="upcoming-team away-side ${a?"tracked":""}">
                ${this._teamBadge(e.away_abbrev||"?",e.away_color)}
                <img src="${e.away_logo}" alt="" />
              </span>
            </div>
          `}))}
      </div>
    `}_renderUpcomingList(e,t,a){const i=e&&e.length>0?e:t&&t.length>1?t.slice(1).filter((e=>"pre"===e.state||"in"===e.state)).slice(0,4):[];if(0===i.length)return"";const n=(a||"").toLowerCase();return R`
      <div class="upcoming-list">
        <div class="upcoming-list-title">${this._t("team.upcoming_matches")}</div>
        ${i.map((e=>{const t=n&&e.home_team&&e.home_team.toLowerCase().includes(n),a=n&&e.away_team&&e.away_team.toLowerCase().includes(n),i="in"===e.state,s=e.head_to_head&&e.head_to_head.length>0;return R`
            <div class="upcoming-row ${s?"clickable":""}"
                 @click="${s?()=>this.showDetails(e):null}">
              <span class="upcoming-date">
                ${e.date&&e.date.split(" ")[1]||""}
                <span class="upcoming-date-day">${this._relativeDate(e.date)}</span>
              </span>
              <span class="upcoming-team home-side ${t?"tracked":""}">
                <img src="${e.home_logo}" alt="" />
                ${this._teamBadge(e.home_abbrev||"?",e.home_color)}
              </span>
              ${i?R`<span class="upcoming-live-score">${e.home_score}<span class="live-dot">●</span>${e.away_score}</span>`:R`<span class="upcoming-vs">-</span>`}
              <span class="upcoming-team away-side ${a?"tracked":""}">
                ${this._teamBadge(e.away_abbrev||"?",e.away_color)}
                <img src="${e.away_logo}" alt="" />
              </span>
            </div>
          `}))}
      </div>
    `}_renderH2H(e,t){if(!e||0===e.length)return"";const a=(t||"").toLowerCase();let i=0,n=0,s=0;e.forEach((e=>{const t=parseInt(e.home_score)||0,o=parseInt(e.away_score)||0;t!==o?((e.home_team||"").toLowerCase().includes(a)||a.includes((e.home_team||"").toLowerCase().split(" ")[0])?t>o:o>t)?i++:s++:n++}));const o=i+n+s,r=o?Math.round(i/o*100):33,l=o?Math.round(n/o*100):34,c=100-r-l;return R`
      <div class="h2h-section">
        <div class="upcoming-list-title">${this._t("team.h2h")}</div>
        <div class="h2h-summary">
          <span class="h2h-summary-num home">${i}</span>
          <span class="h2h-summary-label">${this._t("match.draw")||"D"} ${n}</span>
          <span class="h2h-summary-num away">${s}</span>
        </div>
        <div class="h2h-bar">
          <div class="h2h-bar-seg home" style="width:${r}%"></div>
          <div class="h2h-bar-seg draw" style="width:${l}%"></div>
          <div class="h2h-bar-seg away" style="width:${c}%"></div>
        </div>
        ${e.slice(0,5).map((e=>{const t=e.date?e.date.split("T")[0].split("-"):[],a=3===t.length?`${t[2]}/${t[1]}/${t[0].slice(2)}`:"",i=parseInt(e.home_score)>parseInt(e.away_score),n=parseInt(e.away_score)>parseInt(e.home_score);return R`
            <div class="h2h-row">
              <span class="h2h-date">${a}</span>
              <span class="h2h-team ${i?"winner":""}">${e.home_team||""}</span>
              <span class="h2h-score">${e.home_score} - ${e.away_score}</span>
              <span class="h2h-team away ${n?"winner":""}">${e.away_team||""}</span>
            </div>
          `}))}
      </div>
    `}updated(e){if(e.has("showPopup")&&(this.showPopup?this._escHandler||(this._escHandler=e=>{"Escape"===e.key&&(this.showPopup=!1)},document.addEventListener("keydown",this._escHandler)):this._escHandler&&(document.removeEventListener("keydown",this._escHandler),this._escHandler=null)),e.has("activeMatch")&&this.activeMatch&&this._loadWeather(this.activeMatch.venue,this.activeMatch.venue_lat,this.activeMatch.venue_lon),e.has("hass")&&this.hass&&!this._eventSubscriptions?.length&&this._subscribeToEvents(),e.has("hass")&&this.hass&&this._config){const e=this.hass.states[this._config.entity];if(e&&"unavailable"!==e.state&&(this._isLoading=!1,Pe.set(this._config.entity,e.attributes)),e&&e.attributes.matches&&e.attributes.matches[0]){const t=e.attributes.matches[0];t.venue!==this._lastWeatherVenue&&this._loadWeather(t.venue,t.venue_lat,t.venue_lon)}}}async _loadWeather(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this._lastWeatherVenue=e;try{this._weatherBadge=await ze(e,this.hass,this._config,t,a),this.requestUpdate()}catch(e){console.warn("Weather load failed:",e)}}_renderPopup(){const e=this.activeMatch;return R`
      <div class="popup-overlay" @click="${e=>{e.target===e.currentTarget&&(this.showPopup=!1)}}">
        <div class="popup-box">
          <h3 class="popup-title">${this._t("popup.match_details")}</h3>
          <div class="popup-score-row">
            <img class="popup-logo" src="${e.home_logo}" alt="" @error="${e=>e.target.style.display="none"}">
            <div class="popup-score-center">
              <div class="popup-score">${e.home_score??"-"}<span class="popup-score-sep"> - </span>${e.away_score??"-"}</div>
              <div class="popup-clock">${e.clock??e.status??""}</div>
            </div>
            <img class="popup-logo" src="${e.away_logo}" alt="" @error="${e=>e.target.style.display="none"}">
          </div>
          <div class="popup-stats-grid">
            ${this._renderPopupStatBox(e.home_team,e.home_statistics)}
            ${this._renderPopupStatBox(e.away_team,e.away_statistics)}
          </div>
          ${this._renderPopupEventGroups(e)}
          ${this._renderPopupLineup(e)}
          ${this._renderPopupTimeline(e)}
          ${this._renderPopupH2H(e)}
          <button class="popup-close-btn" @click="${()=>this.showPopup=!1}">${this._t("generic.close")}</button>
        </div>
      </div>
    `}_renderPopupStatBox(e,t){const a=t||{};return Object.keys(a).length>0?R`
      <div class="popup-stat-box">
        <div class="popup-stat-team">${e}</div>
        <div class="popup-stat-row"><span>${this._t("team.possession")}:</span> <strong>${a.possessionPct??"—"}</strong></div>
        <div class="popup-stat-row"><span>${this._t("team.shots")}:</span> <strong>${a.totalShots??"—"}</strong></div>
        <div class="popup-stat-row"><span>${this._t("team.on_target")}:</span> <strong>${a.shotsOnTarget??"—"}</strong></div>
        <div class="popup-stat-row"><span>${this._t("team.fouls")}:</span> <strong>${a.foulsCommitted??"—"}</strong></div>
      </div>
    `:R`<div class="popup-stat-box"><div class="popup-stat-team">${e}</div></div>`}_renderPopupEventGroups(e){const{goals:t,yellowCards:a,redCards:i}=this.separateEvents(e.match_details||[]);if(!t.length&&!a.length&&!i.length)return"";const n=(e,t,a)=>t.length?R`
      <div class="popup-event-group ${a}">
        <h5 class="popup-event-title">${e}</h5>
        <ul class="popup-event-list">${t.map((e=>R`<li>${e}</li>`))}</ul>
      </div>`:"";return R`
      ${n(this._t("event.goal"),t,"goal")}
      ${n(this._t("event.yellow_card"),a,"yellow")}
      ${n(this._t("event.red_card"),i,"red")}
    `}_renderPopupLineup(e){const t=e.lineup_home||[],a=e.lineup_away||[];if(!t.length&&!a.length)return"";const i=(e,t,a)=>{const i=(e||[]).filter((e=>e.starter));return i.length?R`
        <div class="popup-lineup-team">
          <div class="popup-lineup-header">
            <span>${a}</span>
            ${t?R`<span class="popup-formation">${t}</span>`:""}
          </div>
          <div class="popup-lineup-players">
            ${i.map((e=>R`<span class="popup-player">${e.jersey?R`<strong class="popup-jersey">${e.jersey}</strong> `:""}${e.short_name||e.name}</span>`))}
          </div>
        </div>`:""};return R`
      <div class="popup-section popup-section-lineup">
        <h5 class="popup-section-title lineup">${this._t("popup.lineups")}</h5>
        ${i(t,e.formation_home,e.home_team)}
        ${i(a,e.formation_away,e.away_team)}
      </div>`}_renderPopupTimeline(e){const t=(e.key_events||[]).filter((e=>!(e.type_text||"").toLowerCase().includes("delay")));if(!t.length)return"";const a={kickoff:"status.kickoff",halftime:"status.halftime","half time":"status.halftime","end of half":"status.halftime","start 2nd half":"status.second_half","second half":"status.second_half","first half":"status.first_half","full time":"status.full_time",final:"status.full_time",end:"status.end"},i=e=>{const t=(e.athletes||[]).filter(Boolean);if(t.length)return t.join(", ");const i=a[(e.type_text||"").toLowerCase()];return i?this._t(i):e.type_text||""};return R`
      <div class="popup-section popup-section-timeline">
        <h5 class="popup-section-title timeline">${this._t("popup.timeline")}</h5>
        <ul class="popup-timeline-list">
          ${t.map((e=>R`
            <li class="popup-timeline-item">
              <span class="popup-tl-clock">${e.clock||""}</span>
              <span class="popup-tl-icon">${(e=>{const t=(e.type||"").toLowerCase(),a=(e.type_text||"").toLowerCase();return"goal"===t||e.scoring_play?"⚽":a.includes("yellow")?"🟨":a.includes("red card")?"🟥":"substitution"===t||a.includes("substitut")?"🔄":a.includes("halftime")||"end of half"===a?"⏸":a.includes("kickoff")||a.includes("start")||a.includes("2nd half")?"▶":a.includes("end")?"🏁":a.includes("var")?"📺":"·"})(e)}</span>
              <span class="popup-tl-text"><strong>${i(e)}</strong>${e.team?R`<br><span class="popup-tl-team">${e.team}</span>`:""}</span>
            </li>`))}
        </ul>
      </div>`}_renderPopupH2H(e){const t=e.head_to_head||[];if(!t.length)return"";const a=(e.home_team||"").toLowerCase();let i=0,n=0,s=0;t.forEach((e=>{const t=parseInt(e.home_score)||0,o=parseInt(e.away_score)||0;t!==o?((e.home_team||"").toLowerCase().includes(a)||a.includes((e.home_team||"").toLowerCase().split(" ")[0])?t>o:o>t)?i++:s++:n++}));const o=i+n+s,r=o?Math.round(i/o*100):33,l=o?Math.round(n/o*100):34,c=100-r-l,d=de(this.hass,this._config);return R`
      <div class="popup-section popup-section-h2h">
        <h5 class="popup-section-title h2h">${this._t("popup.h2h")} (${t.length})</h5>
        <div class="popup-h2h-summary">
          <span><strong class="popup-h2h-num">${i}</strong> ${e.home_team||""}</span>
          <span class="popup-h2h-draw">${n} ${this._t("match.draw")||"D"}</span>
          <span>${e.away_team||""} <strong class="popup-h2h-num">${s}</strong></span>
        </div>
        <div class="popup-h2h-bar">
          <div class="popup-h2h-seg home" style="width:${r}%"></div>
          <div class="popup-h2h-seg draw" style="width:${l}%"></div>
          <div class="popup-h2h-seg away" style="width:${c}%"></div>
        </div>
        <ul class="popup-h2h-list">
          ${t.slice(0,8).map((e=>{const t=parseInt(e.home_score)||0,a=parseInt(e.away_score)||0,i=e.date?new Date(e.date).toLocaleDateString(d):"";return R`
              <li class="popup-h2h-row">
                <span class="popup-h2h-team ${t>a?"winner":""}">${e.home_team}</span>
                <span class="popup-h2h-score">${e.home_score??"-"} - ${e.away_score??"-"}</span>
                <span class="popup-h2h-team away ${a>t?"winner":""}">${e.away_team}</span>
              </li>
              <li class="popup-h2h-date">${i}</li>`}))}
        </ul>
      </div>`}static get styles(){return[he,Se,Ce,s`
      /* ── Popup overlay (renders inside shadow DOM, position:fixed escapes the card) ── */
      .popup-overlay {
        position: fixed; inset: 0; z-index: 999999;
        display: flex; justify-content: center; align-items: center;
        background: rgba(0,0,0,0.72); backdrop-filter: blur(8px);
        overflow: auto; padding: 16px;
      }
      .popup-box {
        background: var(--cl-bg, #1a1f2e);
        border: 1px solid var(--cl-divider, rgba(255,255,255,0.08));
        border-radius: 20px; box-shadow: 0 24px 64px rgba(0,0,0,0.6);
        color: var(--cl-text, #f8fafc);
        max-height: 85vh; max-width: 560px; width: 100%;
        overflow-y: auto; padding: 24px; margin: auto;
      }
      .popup-title {
        margin: 0 0 20px; font-size: 22px; font-weight: 800; letter-spacing: -0.02em;
        background: linear-gradient(135deg, var(--cl-accent, #6366f1), var(--cl-accent-2, #ec4899));
        -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;
      }
      .popup-score-row { display: flex; justify-content: center; align-items: center; gap: 18px; margin-bottom: 24px; }
      .popup-logo { width: 72px; height: 72px; object-fit: contain; filter: drop-shadow(0 4px 12px rgba(0,0,0,0.4)); }
      .popup-score-center { text-align: center; }
      .popup-score { font-size: 42px; font-weight: 900; letter-spacing: -0.04em; line-height: 1; }
      .popup-score-sep { opacity: 0.4; }
      .popup-clock { font-size: 12px; color: var(--cl-text-2, #94a3b8); margin-top: 8px; font-weight: 600; }
      .popup-stats-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 18px; }
      .popup-stat-box { background: rgba(255,255,255,0.04); padding: 14px; border-radius: 14px; }
      .popup-stat-team { font-size: 10px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--cl-text-2, #94a3b8); font-weight: 700; margin-bottom: 6px; }
      .popup-stat-row { font-size: 13px; margin-bottom: 2px; }
      .popup-stat-row span { color: var(--cl-text-2, #94a3b8); }
      .popup-event-group { margin-bottom: 14px; padding: 14px; border-radius: 10px; border-left: 3px solid; }
      .popup-event-group.goal { background: rgba(99,102,241,0.1); border-color: #6366f1; }
      .popup-event-group.yellow { background: rgba(245,158,11,0.1); border-color: #f59e0b; }
      .popup-event-group.red { background: rgba(239,68,68,0.1); border-color: #ef4444; }
      .popup-event-title { margin: 0 0 8px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 800; }
      .popup-event-group.goal .popup-event-title { color: #6366f1; }
      .popup-event-group.yellow .popup-event-title { color: #f59e0b; }
      .popup-event-group.red .popup-event-title { color: #ef4444; }
      .popup-event-list { margin: 0; padding-left: 18px; font-size: 13px; color: #cbd5e1; }
      .popup-event-list li { margin: 4px 0; }
      .popup-section { margin-bottom: 14px; padding: 14px; border-radius: 10px; border-left: 3px solid; }
      .popup-section-lineup { background: rgba(16,185,129,0.08); border-color: #10b981; }
      .popup-section-timeline { background: rgba(251,191,36,0.08); border-color: #fbbf24; }
      .popup-section-h2h { background: rgba(99,102,241,0.08); border-color: var(--cl-accent, #6366f1); }
      .popup-section-title { margin: 0 0 10px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 800; }
      .popup-section-title.lineup { color: #10b981; }
      .popup-section-title.timeline { color: #fbbf24; }
      .popup-section-title.h2h { color: var(--cl-accent, #6366f1); }
      .popup-lineup-team { margin-bottom: 8px; }
      .popup-lineup-header { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 6px; }
      .popup-lineup-header span:first-child { font-size: 12px; font-weight: 800; color: #fff; }
      .popup-formation { font-size: 10px; font-weight: 700; color: var(--cl-accent, #6366f1); letter-spacing: 0.1em; }
      .popup-lineup-players { font-size: 12px; color: #cbd5e1; line-height: 1.7; }
      .popup-player { display: inline-block; padding: 2px 8px; background: rgba(255,255,255,0.05); border-radius: 6px; margin: 2px; }
      .popup-jersey { color: #fbbf24; }
      .popup-timeline-list { margin: 0; padding: 0; list-style: none; }
      .popup-timeline-item { display: grid; grid-template-columns: 36px 24px 1fr; gap: 8px; align-items: start; padding: 5px 0; border-bottom: 1px solid rgba(255,255,255,0.04); font-size: 12px; color: #cbd5e1; }
      .popup-timeline-item:last-child { border-bottom: none; }
      .popup-tl-clock { text-align: right; font-weight: 700; color: #94a3b8; font-variant-numeric: tabular-nums; }
      .popup-tl-icon { text-align: center; }
      .popup-tl-text strong { color: #fff; }
      .popup-tl-team { color: #94a3b8; font-size: 11px; }
      .popup-h2h-summary { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; font-size: 12px; color: #cbd5e1; }
      .popup-h2h-num { color: #fff; font-size: 18px; font-weight: 800; }
      .popup-h2h-draw { color: #94a3b8; }
      .popup-h2h-bar { display: flex; gap: 2px; height: 6px; border-radius: 3px; overflow: hidden; margin-bottom: 12px; }
      .popup-h2h-seg.home { background: var(--cl-accent, #6366f1); border-radius: 3px 0 0 3px; }
      .popup-h2h-seg.draw { background: #94a3b8; }
      .popup-h2h-seg.away { background: var(--cl-accent-2, #ec4899); border-radius: 0 3px 3px 0; }
      .popup-h2h-list { margin: 0; padding: 0; list-style: none; }
      .popup-h2h-row { display: grid; grid-template-columns: 1fr auto 1fr; gap: 6px; align-items: center; padding: 5px 0; border-bottom: 1px solid rgba(255,255,255,0.04); font-size: 12px; }
      .popup-h2h-team { color: #94a3b8; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; text-align: right; }
      .popup-h2h-team.away { text-align: left; }
      .popup-h2h-team.winner { color: #fff; font-weight: 800; }
      .popup-h2h-score { font-weight: 700; color: #cbd5e1; white-space: nowrap; text-align: center; }
      .popup-h2h-date { text-align: center; padding: 2px 0; font-size: 10px; color: #475569; border-bottom: 1px solid rgba(255,255,255,0.04); list-style: none; }
      .popup-close-btn {
        background: linear-gradient(135deg, var(--cl-accent, #6366f1), var(--cl-accent-2, #ec4899));
        color: white; padding: 12px 20px; border: none; border-radius: 12px;
        cursor: pointer; margin-top: 20px; font-weight: 800; width: 100%; font-size: 14px;
      }
      @media (max-width: 600px) {
        .popup-box { padding: 16px; }
        .popup-logo { width: 52px; height: 52px; }
        .popup-score { font-size: 32px; }
        .popup-stats-grid { grid-template-columns: 1fr; }
      }

      :host {
        --cl-accent: #6366f1;
        --cl-accent-2: #ec4899;
        --cl-live: #ef4444;
        --cl-live-glow: rgba(239,68,68,0.5);
        --cl-green: #10b981;
        --cl-gold: #fbbf24;
        --cl-gold-text: #fde047;
        --cl-card-2: rgba(255,255,255,0.05);
        --cl-divider: rgba(255,255,255,0.08);
        --cl-glass-border: rgba(255,255,255,0.08);
      }

      ha-card {
        position: relative;
        overflow: hidden;
        border-radius: 20px;
        padding: 0;
        box-shadow: 0 4px 24px rgba(0,0,0,0.15);
        background: var(--cl-bg);
        color: var(--cl-text);
      }
      ha-card.empty {
        padding: 24px;
        text-align: center;
        color: var(--cl-text-2);
      }

      .bg-logos {
        position: absolute;
        inset: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        pointer-events: none;
        overflow: hidden;
        z-index: 0;
      }
      .bg-logo {
        width: 60%;
        height: 140%;
        display: flex;
        align-items: center;
        opacity: 0.09;
      }
      .bg-logo.home {
        justify-content: flex-start;
        transform: translateX(-30%);
      }
      .bg-logo.away {
        justify-content: flex-end;
        transform: translateX(30%);
      }
      .bg-logo img {
        width: 100%;
        object-fit: contain;
      }

      .hero-bg {
        position: absolute;
        inset: 0;
        background:
          radial-gradient(ellipse at 0% 0%, rgba(var(--cl-accent-rgb),0.20), transparent 50%),
          radial-gradient(ellipse at 100% 100%, rgba(var(--cl-accent-2-rgb),0.20), transparent 50%);
        pointer-events: none;
        z-index: 1;
      }
      ha-card.live .hero-bg {
        background:
          radial-gradient(ellipse at 0% 0%, rgba(239,68,68,0.25), transparent 50%),
          radial-gradient(ellipse at 100% 100%, rgba(251,191,36,0.20), transparent 50%);
        animation: hero-pulse 3s ease-in-out infinite;
      }
      @keyframes hero-pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.6; }
      }

      .top-bar, .scoreboard, .stats-row, .meta-row {
        position: relative;
        z-index: 2;
      }

      .top-bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 14px 18px;
        border-bottom: 1px solid var(--cl-divider);
      }
      .competition {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 12px;
        font-weight: 700;
        color: var(--cl-text);
        letter-spacing: -0.01em;
        min-width: 0;
      }
      .comp-icon {
        flex-shrink: 0;
        width: 24px; height: 24px;
        border-radius: 8px;
        background: linear-gradient(135deg, var(--cl-accent), var(--cl-accent-2));
        display: flex; align-items: center; justify-content: center;
        font-size: 12px;
        box-shadow: 0 2px 8px rgba(var(--cl-accent-rgb),0.4);
        overflow: hidden;
      }
      .comp-icon img {
        width: 100%; height: 100%;
        object-fit: contain;
      }
      .comp-name {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .status-badge {
        flex-shrink: 0;
        padding: 5px 11px;
        border-radius: 999px;
        font-size: 10px;
        font-weight: 800;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        display: inline-flex;
        align-items: center;
        gap: 6px;
      }
      .status-badge.live {
        background: linear-gradient(135deg, var(--cl-live), #f97316);
        color: white;
        box-shadow: 0 4px 16px var(--cl-live-glow);
        animation: badge-pulse 2s ease-in-out infinite;
      }
      .status-badge.live .dot {
        width: 6px; height: 6px; border-radius: 50%; background: white;
        animation: pulse-dot 1.2s ease-in-out infinite;
      }
      .status-badge.finished {
        background: linear-gradient(135deg, var(--cl-green), #059669);
        color: white;
      }
      .status-badge.scheduled {
        background: var(--cl-card-2);
        border: 1px solid var(--cl-glass-border);
        color: var(--cl-text);
      }
      @keyframes badge-pulse {
        0%, 100% { box-shadow: 0 4px 16px var(--cl-live-glow); }
        50% { box-shadow: 0 4px 24px var(--cl-live-glow), 0 0 32px var(--cl-live-glow); }
      }
      @keyframes pulse-dot {
        0%, 100% { opacity: 1; transform: scale(1); }
        50% { opacity: 0.3; transform: scale(0.7); }
      }

      .scoreboard {
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        align-items: center;
        gap: 10px;
        padding: 28px 18px 22px;
      }
      .team-side {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
        text-align: center;
        min-width: 0;
      }
      .team-logo-wrap {
        position: relative;
        width: 80px; height: 80px;
        display: flex; align-items: center; justify-content: center;
      }
      .team-logo-wrap::before {
        content: '';
        position: absolute;
        inset: -8px;
        background: radial-gradient(circle, rgba(var(--cl-accent-rgb),0.22), transparent 70%);
        border-radius: 50%;
        animation: logo-glow 4s ease-in-out infinite;
      }
      .team-logo-big {
        position: relative;
        width: 72px; height: 72px;
        object-fit: contain;
        filter: drop-shadow(0 6px 16px rgba(0,0,0,0.25));
        transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
      }
      .team-side:hover .team-logo-big { transform: scale(1.1) rotate(-3deg); }
      @keyframes logo-glow {
        0%, 100% { opacity: 0.6; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.15); }
      }
      .team-name-big {
        font-size: 13px;
        font-weight: 700;
        line-height: 1.2;
        max-width: 110px;
        letter-spacing: -0.01em;
        color: var(--cl-text);
      }
      .form-pills {
        display: flex; gap: 3px;
        padding: 3px 7px;
        background: var(--cl-card-2);
        border: 1px solid var(--cl-glass-border);
        border-radius: 999px;
      }
      .record {
        display: flex; gap: 4px;
        font-size: 9px;
        font-weight: 800;
        letter-spacing: 0.04em;
      }
      .record .rec {
        padding: 2px 6px;
        border-radius: 4px;
        font-variant-numeric: tabular-nums;
      }
      .record .rec-w { background: rgba(16,185,129,0.18); color: var(--cl-green); }
      .record .rec-d { background: rgba(245,158,11,0.18); color: #f59e0b; }
      .record .rec-l { background: rgba(239,68,68,0.18); color: var(--cl-live); }
      .top-scorer {
        display: inline-flex;
        flex-direction: column;
        align-items: stretch;
        gap: 4px;
        padding: 5px 9px 6px;
        background: var(--cl-card-2);
        border: 1px solid var(--cl-glass-border);
        border-radius: 10px;
        font-size: 10px;
        font-weight: 700;
        color: var(--cl-text-2);
        max-width: 150px;
      }
      .top-scorer .ts-label {
        font-size: 8px;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        color: var(--cl-gold);
        text-align: center;
        line-height: 1;
      }
      .top-scorer .ts-row {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
      }
      .top-scorer .ts-name {
        max-width: 90px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: var(--cl-text);
        font-size: 11px;
        font-weight: 700;
      }
      .top-scorer .ts-val {
        display: inline-flex;
        align-items: baseline;
        gap: 1px;
        color: var(--cl-gold);
        font-weight: 800;
        font-variant-numeric: tabular-nums;
        font-size: 12px;
      }
      .top-scorer .ts-unit {
        font-size: 9px;
        opacity: 0.85;
      }
      .form-pill {
        width: 14px; height: 14px;
        border-radius: 4px;
        font-size: 8px;
        font-weight: 800;
        color: white;
        display: flex; align-items: center; justify-content: center;
      }
      .form-pill.W { background: linear-gradient(135deg, #10b981, #059669); }
      .form-pill.L { background: linear-gradient(135deg, #ef4444, #dc2626); }
      .form-pill.D { background: linear-gradient(135deg, #f59e0b, #d97706); }

      .score-center {
        display: flex; flex-direction: column;
        align-items: center; gap: 8px;
        padding: 0 4px;
      }
      .score-numbers {
        font-size: 48px;
        font-weight: 900;
        letter-spacing: -0.04em;
        font-variant-numeric: tabular-nums;
        line-height: 0.95;
        background: linear-gradient(180deg, var(--cl-text) 30%, var(--cl-accent));
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: score-pop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) backwards;
      }
      .score-numbers .dash {
        opacity: 0.4;
        font-weight: 700;
        margin: 0 4px;
      }
      /* score_size: big / huge — ingrandisce il punteggio */
      :host([data-score="big"]) .score-numbers { font-size: 68px; }
      :host([data-score="huge"]) .score-numbers { font-size: 92px; }
      :host([data-score="big"]) .score-vs { font-size: 38px; }
      :host([data-score="huge"]) .score-vs { font-size: 48px; }
      .score-vs {
        font-size: 30px;
        font-weight: 800;
        letter-spacing: 0.08em;
        color: var(--cl-text-2);
        opacity: 0.6;
      }
      @keyframes score-pop {
        0% { opacity: 0; transform: scale(0.5); }
        70% { transform: scale(1.1); }
        100% { opacity: 1; transform: scale(1); }
      }
      .clock {
        font-size: 11px;
        font-weight: 700;
        font-variant-numeric: tabular-nums;
        display: inline-flex; align-items: center; gap: 5px;
        padding: 4px 10px;
        border-radius: 999px;
        color: var(--cl-live);
        background: rgba(239,68,68,0.12);
      }
      .clock .dot {
        width: 5px; height: 5px;
        border-radius: 50%;
        background: currentColor;
        animation: pulse-dot 1.4s ease-in-out infinite;
      }
      .clock.upcoming {
        color: var(--cl-accent);
        background: rgba(var(--cl-accent-rgb),0.12);
      }
      .clock.upcoming .dot, .clock.finished .dot { animation: none; }
      .clock.finished {
        color: var(--cl-green);
        background: rgba(16,185,129,0.12);
      }

      .stats-row {
        padding: 0 18px 18px;
        display: flex; flex-direction: column; gap: 10px;
      }
      .stat-bar { display: flex; flex-direction: column; gap: 4px; }
      .stat-bar-label {
        display: flex; justify-content: space-between;
        font-size: 11px; font-weight: 700;
      }
      .stat-bar-label .home-val { color: var(--cl-accent); }
      .stat-bar-label .away-val { color: var(--cl-accent-2); }
      .stat-bar-label .label-text {
        text-transform: uppercase;
        letter-spacing: 0.1em;
        font-size: 9px;
        color: var(--cl-text-2);
      }
      .stat-bar-track {
        height: 6px;
        background: var(--cl-card-2);
        border-radius: 999px;
        overflow: hidden;
        display: flex;
      }
      .stat-bar-home {
        height: 100%;
        background: linear-gradient(90deg, var(--cl-accent), var(--cl-accent));
        border-radius: 999px 0 0 999px;
        transition: width 0.8s cubic-bezier(0.16, 1, 0.3, 1);
      }
      .stat-bar-away {
        height: 100%;
        background: linear-gradient(90deg, var(--cl-accent-2), var(--cl-accent-2));
        margin-left: auto;
        border-radius: 0 999px 999px 0;
        transition: width 0.8s cubic-bezier(0.16, 1, 0.3, 1);
      }

      .meta-row {
        display: flex; justify-content: space-between;
        align-items: center;
        gap: 12px;
        padding: 12px 18px;
        border-top: 1px solid var(--cl-divider);
        background: var(--cl-card-2);
      }
      .venue-item { min-width: 0; }
      .venue-item span {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .extras-row {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        padding: 8px 18px 12px;
        background: var(--cl-card-2);
        position: relative;
        z-index: 2;
      }
      .extra-chip.clickable { cursor: pointer; }
      .extra-chip.clickable:hover { opacity: 0.8; transform: scale(1.03); transition: all 0.15s; }
      .extra-chip {
        display: inline-flex;
        align-items: center;
        gap: 5px;
        padding: 4px 10px;
        background: rgba(var(--cl-accent-rgb),0.12);
        border: 1px solid rgba(var(--cl-accent-rgb),0.25);
        border-radius: 999px;
        font-size: 11px;
        font-weight: 700;
        color: var(--cl-accent);
      }
      .extra-chip svg { width: 12px; height: 12px; }
      .extra-chip.broadcast {
        background: rgba(var(--cl-accent-rgb),0.12);
        border-color: rgba(var(--cl-accent-rgb),0.3);
        color: var(--cl-accent);
      }
      .extra-chip.attendance {
        background: rgba(16,185,129,0.12);
        border-color: rgba(16,185,129,0.3);
        color: var(--cl-green);
      }
      .meta-item {
        display: flex; align-items: center; gap: 6px;
        color: var(--cl-text-2);
        font-size: 11px;
        font-weight: 600;
      }
      .meta-item svg { width: 14px; height: 14px; opacity: 0.7; }
      .info-btn {
        background: linear-gradient(135deg, var(--cl-accent), var(--cl-accent-2));
        color: white;
        border: none;
        padding: 7px 14px;
        border-radius: 999px;
        font-size: 11px;
        font-weight: 800;
        letter-spacing: 0.04em;
        cursor: pointer;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0 4px 12px rgba(var(--cl-accent-rgb),0.4);
      }
      .info-btn:hover {
        transform: translateY(-1px) scale(1.04);
        box-shadow: 0 8px 20px rgba(99,102,241,0.6);
      }

      /* Toast */
      .event-toast {
        position: absolute;
        top: 12px;
        left: 50%;
        transform: translateX(-50%);
        background: var(--cl-toast-bg);
        color: #ffffff;
        padding: 10px 18px;
        border-radius: 14px;
        font-size: 13px;
        font-weight: 800;
        z-index: 100;
        animation: toast-bounce 4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        pointer-events: none;
        max-width: 90%;
        text-align: center;
        letter-spacing: -0.01em;
        text-shadow: 0 1px 2px rgba(0,0,0,0.8);
      }
      .event-toast.variant-goal {
        box-shadow:
          0 0 0 2px var(--cl-gold),
          0 0 0 4px rgba(251, 191, 36, 0.3),
          0 12px 40px rgba(0, 0, 0, 0.7),
          0 0 60px rgba(251, 191, 36, 0.4);
      }
      .event-toast.variant-goal strong { color: var(--cl-gold-text); }
      .event-toast.variant-yellow {
        box-shadow:
          0 0 0 2px #f59e0b,
          0 0 0 4px rgba(245, 158, 11, 0.3),
          0 12px 40px rgba(0, 0, 0, 0.7);
      }
      .event-toast.variant-yellow strong { color: #fbbf24; }
      .event-toast.variant-red {
        box-shadow:
          0 0 0 2px var(--cl-live),
          0 0 0 4px rgba(239, 68, 68, 0.3),
          0 12px 40px rgba(0, 0, 0, 0.7);
      }
      .event-toast.variant-red strong { color: #fca5a5; }
      @keyframes toast-bounce {
        0%   { opacity: 0; transform: translate(-50%, -20px) scale(0.7); }
        8%   { opacity: 1; transform: translate(-50%, 0) scale(1.08); }
        14%  { transform: translate(-50%, 0) scale(1); }
        90%  { opacity: 1; transform: translate(-50%, 0) scale(1); }
        100% { opacity: 0; transform: translate(-50%, -10px) scale(0.95); }
      }

      .upcoming-list {
        border-top: 1px solid var(--cl-divider);
        padding: 10px 16px 14px;
      }
      .upcoming-list-title {
        font-size: 9px;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 0.12em;
        color: var(--cl-text-2);
        margin-bottom: 8px;
      }
      .upcoming-row {
        display: grid;
        grid-template-columns: 52px 1fr 45px 1fr;
        align-items: center;
        gap: 6px;
        padding: 6px 0;
        border-bottom: 1px solid rgba(255,255,255,0.04);
        font-size: 12px;
      }
      .upcoming-row:last-child { border-bottom: none; }
      .upcoming-date {
        font-size: 11px;
        font-weight: 700;
        color: var(--cl-accent);
        font-variant-numeric: tabular-nums;
        display: flex;
        flex-direction: column;
        line-height: 1.3;
        flex-shrink: 0;
        white-space: nowrap;
        min-width: 52px;
      }
      .upcoming-date-day {
        font-size: 9px;
        font-weight: 600;
        color: var(--cl-text-2);
      }
      .upcoming-team {
        display: flex; align-items: center; gap: 5px;
        font-weight: 600;
        color: var(--cl-text);
        min-width: 0;
        overflow: hidden;
      }
      /* Thuisploeg: rechts uitgelijnd — logo links, badge rechts richting het streepje */
      .upcoming-team.home-side { justify-content: flex-end; }
      /* Uitploeg: links uitgelijnd — badge links richting het streepje, logo rechts */
      .upcoming-team.away-side { justify-content: flex-start; }
      .upcoming-team img { width: 18px; height: 18px; object-fit: contain; flex-shrink: 0; }
      .upcoming-team.tracked .abbrev-badge { outline: 2px solid rgba(255,255,255,0.5); }
      .upcoming-row.clickable { cursor: pointer; }
      .upcoming-row.clickable:hover { background: var(--cl-card-2); border-radius: 8px; }
      .form-trend-section {
        border-top: 1px solid var(--cl-divider);
        padding: 10px 16px 8px;
      }
      .form-trend-row {
        display: flex; align-items: center; gap: 10px; margin-top: 6px;
      }
      .form-trend-dots { display: flex; gap: 4px; flex-wrap: wrap; }
      .ft-dot {
        width: 20px; height: 20px; border-radius: 5px;
        display: flex; align-items: center; justify-content: center;
        font-size: 9px; font-weight: 800; color: white; flex-shrink: 0;
      }
      .ft-dot.w { background: var(--cl-green); }
      .ft-dot.d { background: var(--cl-gold); color: rgba(0,0,0,0.7); }
      .ft-dot.l { background: var(--cl-live); }
      .form-trend-summary {
        font-size: 10px; font-weight: 700; color: var(--cl-text-2);
        white-space: nowrap; flex-shrink: 0;
      }
      .prev-score {
        font-size: 12px; font-weight: 900;
        color: var(--cl-text-2);
        text-align: center; min-width: 32px;
        font-variant-numeric: tabular-nums;
      }
      .prev-score.home-win { color: var(--cl-green); }
      .prev-score.away-win { color: var(--cl-live); }
      .prev-score.draw { color: var(--cl-text-2); }
      .upcoming-live-score {
        font-size: 12px; font-weight: 900;
        color: var(--cl-live);
        text-align: center; min-width: 16px;
        font-variant-numeric: tabular-nums;
        display: flex; align-items: center; gap: 2px;
      }
      .live-dot { font-size: 7px; animation: live-blink 1s ease-in-out infinite; }
      @keyframes live-blink { 0%,100%{opacity:1} 50%{opacity:0.2} }
      .team-name-big.my-team {
        background: linear-gradient(135deg, var(--cl-text), var(--cl-accent));
        -webkit-background-clip: text; background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .upcoming-vs {
        font-size: 11px;
        font-weight: 700;
        color: var(--cl-text-2);
        text-align: center;
      }
      .abbrev-badge {
        display: inline-flex; align-items: center; justify-content: center;
        padding: 2px 6px;
        border-radius: 5px;
        font-size: 10px;
        font-weight: 800;
        color: white;
        letter-spacing: 0.03em;
        text-shadow: 0 1px 2px rgba(0,0,0,0.4);
        flex-shrink: 0;
      }
      .h2h-section {
        border-top: 1px solid var(--cl-divider);
        padding: 10px 16px 14px;
      }
      .h2h-summary {
        display: flex; justify-content: space-between; align-items: center;
        font-size: 11px; margin-bottom: 6px; color: var(--cl-text-2);
      }
      .h2h-summary-num { font-size: 20px; font-weight: 800; color: var(--cl-text); }
      .h2h-summary-label { font-size: 10px; text-align: center; color: var(--cl-text-2); }
      .h2h-bar {
        display: flex; height: 5px; border-radius: 3px; overflow: hidden; gap: 2px;
        margin-bottom: 10px;
      }
      .h2h-bar-seg.home { background: var(--cl-accent); border-radius: 3px 0 0 3px; }
      .h2h-bar-seg.draw { background: var(--cl-text-2); opacity: 0.4; }
      .h2h-bar-seg.away { background: var(--cl-accent-2); border-radius: 0 3px 3px 0; }
      .h2h-row {
        display: flex; align-items: center; gap: 6px;
        padding: 5px 0;
        border-bottom: 1px solid rgba(255,255,255,0.04);
        font-size: 11px;
      }
      .h2h-row:last-child { border-bottom: none; }
      .h2h-date {
        font-size: 10px; font-weight: 600; color: var(--cl-text-2);
        min-width: 44px; flex-shrink: 0;
      }
      .h2h-team {
        flex: 1; font-weight: 600; color: var(--cl-text-2);
        white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
      }
      .h2h-team.away { text-align: right; }
      .h2h-team.winner { color: var(--cl-text); font-weight: 800; }
      .h2h-score {
        font-size: 12px; font-weight: 800; color: var(--cl-text);
        flex-shrink: 0; text-align: center; min-width: 36px;
        font-variant-numeric: tabular-nums;
      }

      /* Goal celebration */
      ha-card.goal-flash {
        animation: card-goal-flash 1.6s cubic-bezier(0.16, 1, 0.3, 1);
      }
      @keyframes card-goal-flash {
        0%   { box-shadow: 0 4px 24px rgba(0,0,0,0.15); }
        20%  { box-shadow: 0 0 0 4px var(--cl-accent), 0 0 60px 20px var(--cl-accent), 0 4px 24px rgba(0,0,0,0.15); }
        50%  { box-shadow: 0 0 0 2px var(--cl-accent-2), 0 0 40px 10px var(--cl-accent-2), 0 4px 24px rgba(0,0,0,0.15); }
        100% { box-shadow: 0 4px 24px rgba(0,0,0,0.15); }
      }
      .score-numbers.goal-scored {
        animation: score-goal-pop 1.2s cubic-bezier(0.34, 1.56, 0.64, 1);
      }
      @keyframes score-goal-pop {
        0%   { transform: scale(1); }
        20%  { transform: scale(1.4); filter: drop-shadow(0 0 30px var(--cl-accent)); }
        40%  { transform: scale(0.95); }
        60%  { transform: scale(1.15); }
        100% { transform: scale(1); }
      }
      .team-logo-big.scorer-bounce {
        animation: scorer-bounce 1.2s cubic-bezier(0.34, 1.56, 0.64, 1);
      }
      @keyframes scorer-bounce {
        0%   { transform: scale(1) rotate(0deg); }
        25%  { transform: scale(1.3) rotate(-15deg); }
        50%  { transform: scale(1.1) rotate(10deg); }
        75%  { transform: scale(1.2) rotate(-5deg); }
        100% { transform: scale(1) rotate(0deg); }
      }
      .goal-banner {
        position: absolute;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        pointer-events: none;
        z-index: 50;
        overflow: hidden;
      }
      .goal-banner::before {
        content: '';
        position: absolute;
        inset: 0;
        background: radial-gradient(ellipse at center, var(--cl-overlay-strong) 0%, var(--cl-overlay-soft) 40%, transparent 70%);
        animation: banner-backdrop 1.6s ease-out forwards;
      }
      @keyframes banner-backdrop {
        0%   { opacity: 0; }
        20%  { opacity: 1; }
        80%  { opacity: 1; }
        100% { opacity: 0; }
      }
      .goal-banner-text {
        position: relative;
        font-size: 84px;
        font-weight: 900;
        letter-spacing: -0.06em;
        color: var(--cl-gold-text);
        -webkit-text-stroke: 2px #1a0f00;
        text-shadow:
          0 0 24px rgba(251, 191, 36, 1),
          0 0 48px rgba(251, 191, 36, 0.7),
          0 6px 0 #b45309,
          0 8px 24px rgba(0, 0, 0, 0.6);
        animation: goal-text-blast 1.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        transform-origin: center;
      }
      @keyframes goal-text-blast {
        0%   { opacity: 0; transform: scale(0.3) rotate(-8deg); }
        20%  { opacity: 1; transform: scale(1.15) rotate(-3deg); }
        40%  { transform: scale(0.95) rotate(2deg); }
        60%  { transform: scale(1.05) rotate(0deg); }
        80%  { opacity: 1; transform: scale(1) rotate(0deg); }
        100% { opacity: 0; transform: scale(1.3) rotate(0deg); }
      }
      .goal-flash-overlay {
        position: absolute;
        inset: 0;
        background: radial-gradient(circle at center, rgba(251,191,36,0.25), transparent 70%);
        pointer-events: none;
        z-index: 49;
        animation: flash-overlay 1s ease-out forwards;
      }
      @keyframes flash-overlay {
        0%   { opacity: 0; }
        20%  { opacity: 1; }
        100% { opacity: 0; }
      }
      .confetti {
        position: absolute;
        top: 20px; left: 50%;
        width: 8px; height: 8px;
        pointer-events: none;
        z-index: 99;
        animation: confetti-fly 1.8s ease-out forwards;
      }
      @keyframes confetti-fly {
        0% {
          transform: translate(-50%, 0) rotate(0deg);
          opacity: 1;
        }
        100% {
          transform: translate(calc(-50% + var(--dx)), var(--dy)) rotate(720deg);
          opacity: 0;
        }
      }

      @media (max-width: 600px) {
        ha-card { padding: 12px !important; }
        .hero { padding: 14px 10px 12px !important; }
        .team-logo { width: 40px !important; height: 40px !important; }
        .team-name { font-size: 12px !important; }
        .score { font-size: 32px !important; letter-spacing: 4px !important; }
        .vs-text { font-size: 18px !important; }
        .stat-val { font-size: 11px !important; min-width: 24px !important; }
        .stat-label { font-size: 9px !important; }
        .comp-logo { width: 14px !important; height: 14px !important; }
        .comp-name { font-size: 10px !important; }
        .meta { font-size: 10px !important; padding: 8px 12px !important; }
        .events { max-height: 180px !important; }
        .event-row { padding: 4px 0 !important; font-size: 11px !important; }
        .event-min { font-size: 10px !important; }
        .form-indicator { width: 18px !important; height: 18px !important; font-size: 10px !important; }
      }

      @media (max-width: 400px) {
        .score { font-size: 28px !important; letter-spacing: 2px !important; }
        .team-name { font-size: 11px !important; max-width: 70px !important; }
        .event-icon { font-size: 12px !important; }
      }
    `]}}),window.customCards=window.customCards||[],window.customCards.push({type:"soccer-live-team",name:"Soccer Live Team Card",description:"Shows the next or current match for your team"}),customElements.define("soccer-live-team-editor",class extends oe{static get properties(){return{_config:{type:Object},hass:{type:Object},entities:{type:Array}}}constructor(){super(),this.entities=[]}static get styles(){return[_e,s`
      .card-config {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }
      .option {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
      }
      label {
        font-size: 14px;
        color: var(--primary-text-color);
      }
      .field-label {
        display: block;
        font-size: 12px;
        color: var(--secondary-text-color);
        margin-bottom: 4px;
        font-weight: 600;
      }
      select {
        width: 100%;
        padding: 10px 12px;
        font-size: 14px;
        border-radius: 8px;
        border: 1px solid var(--divider-color, rgba(0,0,0,0.12));
        background: var(--card-background-color, #fff);
        color: var(--primary-text-color, #000);
        box-sizing: border-box;
      }
      select:focus {
        outline: 2px solid var(--primary-color, #03a9f4);
        outline-offset: -1px;
      }
      h3 {
        margin: 8px 0 0;
        font-size: 13px;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: var(--secondary-text-color);
      }
    `]}setConfig(e){if(!e)throw new Error("Invalid configuration");this._config={...e}}get config(){return this._config}updated(e){e.has("hass")&&this._fetchEntities()}_fireConfigChanged(e){this._config=e,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0})),this.requestUpdate()}_entityChanged(e){if(!this._config)return;const t=e.target.value;t!==this._config.entity&&this._fireConfigChanged({...this._config,entity:t})}_switchChanged(e){if(!this._config)return;const t=e.target;if(!t.dataset||!t.dataset.configValue)return;const a=t.dataset.configValue,i=t.checked;this._config[a]!==i&&this._fireConfigChanged({...this._config,[a]:i})}_selectChanged(e){if(!this._config)return;const t=e.target;if(!t.dataset||!t.dataset.configValue)return;const a=t.dataset.configValue,i=t.value;this._config[a]!==i&&this._fireConfigChanged({...this._config,[a]:i})}_fetchEntities(){this.hass&&(this.entities=Object.keys(this.hass.states).filter((e=>e.includes("soccerlive_next")||e.includes("soccer_live_next")||e.includes("soccerlive_all_mixed")||e.includes("soccer_live_all_mixed"))).sort())}render(){if(!this._config||!this.hass)return R``;const e=this._config.entity||"",t=e&&this.entities.includes(e);return R`
      <div class="card-config">
        <h3>Sensor</h3>
        <div>
          <label class="field-label">Entity</label>
          <select @change=${this._entityChanged}>
            ${t?"":R`<option value="${e}" selected>${e||"— select —"}</option>`}
            ${this.entities.map((t=>R`
              <option value="${t}" ?selected=${t===e}>${t}</option>
            `))}
          </select>
        </div>

        <h3>Settings</h3>
        <div>
          <label class="field-label">Mijn team (accentueren)</label>
          <input type="text" placeholder="bijv. Feyenoord Rotterdam"
            .value=${this._config.my_team||""}
            @change=${e=>this._fireConfigChanged({...this._config,my_team:e.target.value})} />
        </div>
        <div class="option">
          <label>Seizoenvorm-trend tonen</label>
          <ha-switch .checked=${!0===this._config.show_form_trend}
            data-config-value="show_form_trend" @change=${this._switchChanged}></ha-switch>
        </div>
        <div class="option">
          <label>Vorige wedstrijden tonen</label>
          <ha-switch .checked=${!0===this._config.show_previous_matches}
            data-config-value="show_previous_matches" @change=${this._switchChanged}></ha-switch>
        </div>
        <div class="option">
          <label>Show Event Toasts (in-card)</label>
          <ha-switch
            .checked=${!0===this._config.show_event_toasts}
            data-config-value="show_event_toasts"
            @change=${this._switchChanged}
          ></ha-switch>
        </div>
        <div>
          <label class="field-label">Skin</label>
          <select data-config-value="skin" @change=${this._selectChanged}>
            <option value="dark"       ?selected=${"dark"===(this._config.skin||"dark")}>Dark (standaard)</option>
            <option value="light"      ?selected=${"light"===this._config.skin}>Light</option>
            <option value="red-white"  ?selected=${"red-white"===this._config.skin}>Red & White</option>
            <option value="classic"    ?selected=${"classic"===this._config.skin}>Classic (groen)</option>
            <option value="neon"       ?selected=${"neon"===this._config.skin}>Neon</option>
            <option value="gold"        ?selected=${"gold"===this._config.skin}>Gold</option>
            <option value="orange"     ?selected=${"orange"===this._config.skin}>Orange (Netherlands)</option>
            <option value="blue"       ?selected=${"blue"===this._config.skin}>Blue (Chelsea / PSG / Inter)</option>
            <option value="black-white" ?selected=${"black-white"===this._config.skin}>Black &amp; White (Juventus)</option>
            <option value="feyenoord"  ?selected=${"feyenoord"===this._config.skin}>Feyenoord (red/white)</option>
            <option value="arsenal"    ?selected=${"arsenal"===this._config.skin}>Arsenal</option>
            <option value="barcelona"  ?selected=${"barcelona"===this._config.skin}>Barcelona</option>
            <option value="real-madrid" ?selected=${"real-madrid"===this._config.skin}>Real Madrid</option>
          </select>
        </div>
        <div>
          <label class="field-label">Score Size</label>
          <select data-config-value="score_size" @change=${this._selectChanged}>
            <option value="normal" ?selected=${"normal"===(this._config.score_size||"normal")}>Normal</option>
            <option value="big" ?selected=${"big"===this._config.score_size}>Big</option>
            <option value="huge" ?selected=${"huge"===this._config.score_size}>Huge</option>
          </select>
        </div>
        <div>
          <label class="field-label">Language</label>
          <select data-config-value="language" @change=${this._selectChanged}>
            <option value="" ?selected=${!this._config.language}>Auto (HA locale)</option>
            <option value="en" ?selected=${"en"===this._config.language}>English</option>
            <option value="it" ?selected=${"it"===this._config.language}>Italiano</option>
            <option value="fr" ?selected=${"fr"===this._config.language}>Français</option>
            <option value="es" ?selected=${"es"===this._config.language}>Español</option>
            <option value="nl" ?selected=${"nl"===this._config.language}>Nederlands</option>
            <option value="de" ?selected=${"de"===this._config.language}>Deutsch</option>
            <option value="pt" ?selected=${"pt"===this._config.language}>Português</option>
          </select>
        </div>
      </div>
    `}}),customElements.define("soccer-live-news",class extends oe{static get properties(){return{hass:{},_config:{}}}setConfig(e){if(!e.entity)throw new Error("Entity required");this._config=e,me(this,e),this.maxArticles=e.max_articles?e.max_articles:5,this.hideHeader=!0===e.hide_header,this.hideImages=!0===e.hide_images}_t(e,t){return pe(e,de(this.hass,this._config),t)}getCardSize(){return 4}static getConfigElement(){return document.createElement("soccer-live-news-editor")}static getStubConfig(){return{entity:"sensor.soccer_live_news",max_articles:5,hide_header:!1,hide_images:!1}}_formatDate(e){if(!e)return"";try{const t=new Date(e),a=(new Date-t)/1e3;if(a<60)return this._t("time.now");if(a<3600)return this._t("time.n_min_ago",{n:Math.floor(a/60)});if(a<86400)return this._t("time.n_h_ago",{n:Math.floor(a/3600)});if(a<604800)return this._t("time.n_d_ago",{n:Math.floor(a/86400)});const i=this._t("month."+(t.getMonth()+1));return`${t.getDate()} ${i}`}catch(e){return""}}_openLink(e){e&&window.open(e,"_blank","noopener,noreferrer")}render(){if(!this.hass||!this._config)return R``;const e=this.hass.states[this._config.entity];if(!e)return R`<ha-card class="empty">${this._t("generic.unknown_entity")}: ${this._config.entity}</ha-card>`;const t=(e.attributes.articles||[]).slice(0,this.maxArticles);return 0===t.length?R`
      <ha-card class="empty">
        <div style="font-size:38px; opacity:0.25; margin-bottom:10px;">📰</div>
        <div style="font-weight:700;">${this._t("news.empty")}</div>
      </ha-card>`:R`
      <ha-card>
        <div class="hero-bg"></div>
        ${this.hideHeader?"":R`
          <div class="news-header">
            <div class="header-icon">📰</div>
            <div class="header-text">
              <div class="title">${this._t("card.news")}</div>
              <div class="subtitle">${e.state}</div>
            </div>
          </div>
        `}
        <div class="news-list">
          ${t.map((e=>R`
            <article class="news-item ${this.hideImages||!e.image?"no-img":""}" @click="${()=>this._openLink(e.link)}">
              ${!this.hideImages&&e.image?R`
                <div class="news-img" style="background-image: url('${e.image}');"></div>
              `:""}
              <div class="news-body">
                <div class="news-meta">
                  ${e.premium?R`<span class="cat premium">★ Premium</span>`:e.category?R`<span class="cat">${e.category}</span>`:""}
                  <span class="date">${this._formatDate(e.published)}</span>
                </div>
                <div class="news-headline">${e.headline}</div>
                ${e.description?R`<div class="news-desc">${e.description}</div>`:""}
                ${e.byline?R`<div class="news-byline">✍ ${e.byline}</div>`:""}
                ${e.tags&&e.tags.length>1?R`<div class="news-tags">${e.tags.slice(0,4).map((e=>R`<span class="news-tag">${e}</span>`))}</div>`:""}
              </div>
            </article>
          `))}
        </div>
      </ha-card>
    `}static get styles(){return[he,s`
      :host {
        --cl-accent: #6366f1;
        --cl-accent-2: #ec4899;
        --cl-card-2: rgba(255,255,255,0.05);
        --cl-divider: rgba(255,255,255,0.08);
      }
      ha-card {
        position: relative;
        overflow: hidden;
        border-radius: 20px;
        padding: 0;
        box-shadow: 0 4px 24px rgba(0,0,0,0.15);
        background: var(--cl-bg);
        color: var(--cl-text);
      }
      ha-card.empty {
        padding: 24px;
        text-align: center;
        color: var(--cl-text-2);
      }
      .hero-bg {
        position: absolute; inset: 0; z-index: 0;
        background:
          radial-gradient(ellipse at 0% 0%, rgba(236,72,153,0.10), transparent 50%),
          radial-gradient(ellipse at 100% 0%, rgba(99,102,241,0.10), transparent 50%);
        pointer-events: none;
      }
      .news-header {
        position: relative; z-index: 1;
        display: flex; align-items: center; gap: 12px;
        padding: 16px 18px;
        border-bottom: 1px solid var(--cl-divider);
      }
      .news-header::after {
        content: '';
        position: absolute;
        left: 18px; right: 18px; bottom: -1px;
        height: 1px;
        background: linear-gradient(90deg, transparent, var(--cl-accent-2), transparent);
        opacity: 0.4;
      }
      .header-icon {
        width: 40px; height: 40px;
        border-radius: 12px;
        background: linear-gradient(135deg, var(--cl-accent), var(--cl-accent-2));
        display: flex; align-items: center; justify-content: center;
        font-size: 20px;
        box-shadow: 0 4px 16px rgba(236,72,153,0.4);
      }
      .header-text .title {
        font-size: 18px;
        font-weight: 900;
        letter-spacing: -0.02em;
        color: var(--cl-text);
      }
      .header-text .subtitle {
        font-size: 11px;
        color: var(--cl-text-2);
        margin-top: 2px;
        font-weight: 600;
      }

      .news-list {
        position: relative; z-index: 1;
        display: flex; flex-direction: column;
        padding: 6px;
      }
      .news-item {
        display: grid;
        grid-template-columns: 96px 1fr;
        gap: 14px;
        padding: 12px;
        border-radius: 14px;
        cursor: pointer;
        transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
      }
      .news-item.no-img {
        grid-template-columns: 1fr;
      }
      .news-item:hover {
        background: var(--cl-card-2);
        transform: translateX(3px);
      }
      .news-img {
        width: 96px;
        height: 72px;
        border-radius: 10px;
        background-size: cover;
        background-position: center;
        background-color: var(--cl-card-2);
        flex-shrink: 0;
        box-shadow: 0 4px 12px rgba(0,0,0,0.25);
      }
      .news-body {
        display: flex; flex-direction: column;
        gap: 4px;
        min-width: 0;
      }
      .news-meta {
        display: flex; gap: 8px;
        font-size: 10px;
        font-weight: 700;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        color: var(--cl-text-2);
      }
      .news-meta .cat {
        background: rgba(99,102,241,0.15);
        color: var(--cl-accent);
        border-radius: 4px;
        padding: 2px 7px;
        font-size: 10px;
        font-weight: 600;
      }
      .news-meta .cat.premium {
        background: rgba(251,191,36,0.18);
        color: var(--cl-gold, #fbbf24);
      }
      .news-meta .date::before {
        content: '·';
        margin-right: 8px;
        opacity: 0.4;
      }
      .news-meta .cat + .date::before { content: '·'; }
      .news-byline {
        font-size: 10px;
        color: var(--cl-text-2);
        margin-top: 4px;
        opacity: 0.7;
      }
      .news-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
        margin-top: 6px;
      }
      .news-tag {
        font-size: 10px;
        background: rgba(255,255,255,0.06);
        color: var(--cl-text-2);
        border: 1px solid rgba(255,255,255,0.08);
        border-radius: 4px;
        padding: 2px 6px;
        white-space: nowrap;
      }
      .news-headline {
        font-size: 14px;
        font-weight: 800;
        line-height: 1.3;
        color: var(--cl-text);
        letter-spacing: -0.01em;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
      .news-desc {
        font-size: 12px;
        font-weight: 500;
        color: var(--cl-text-2);
        line-height: 1.4;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    `]}}),window.customCards=window.customCards||[],window.customCards.push({type:"soccer-live-news",name:"Soccer Live News Card",description:"Shows the latest football news for a competition"}),customElements.define("soccer-live-news-editor",class extends oe{static get properties(){return{_config:{type:Object},hass:{type:Object},entities:{type:Array}}}constructor(){super(),this.entities=[]}static get styles(){return s`
      .card-config { display: flex; flex-direction: column; gap: 16px; }
      .option { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
      label { font-size: 14px; color: var(--primary-text-color); }
      .field-label { display: block; font-size: 12px; color: var(--secondary-text-color); margin-bottom: 4px; font-weight: 600; }
      select, input[type="number"] {
        width: 100%; padding: 10px 12px; font-size: 14px;
        border-radius: 8px;
        border: 1px solid var(--divider-color, rgba(0,0,0,0.12));
        background: var(--card-background-color, #fff);
        color: var(--primary-text-color, #000);
        box-sizing: border-box;
      }
      h3 { margin: 8px 0 0; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; color: var(--secondary-text-color); }
    `}setConfig(e){if(!e)throw new Error("Invalid configuration");this._config={...e}}get config(){return this._config}updated(e){e.has("hass")&&this._fetchEntities()}_fireConfigChanged(e){this._config=e,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0})),this.requestUpdate()}_entityChanged(e){if(!this._config)return;const t=e.target.value;t!==this._config.entity&&this._fireConfigChanged({...this._config,entity:t})}_switchChanged(e){if(!this._config)return;const t=e.target;if(!t.dataset||!t.dataset.configValue)return;const a=t.dataset.configValue,i=t.checked;this._config[a]!==i&&this._fireConfigChanged({...this._config,[a]:i})}_selectChanged(e){if(!this._config)return;const t=e.target;if(!t.dataset||!t.dataset.configValue)return;const a=t.dataset.configValue,i=t.value;this._config[a]!==i&&this._fireConfigChanged({...this._config,[a]:i})}_numberChanged(e){if(!this._config)return;const t=e.target;if(!t.dataset||!t.dataset.configValue)return;const a=t.dataset.configValue,i=parseInt(t.value,10);isNaN(i)||this._config[a]!==i&&this._fireConfigChanged({...this._config,[a]:i})}_fetchEntities(){this.hass&&(this.entities=Object.keys(this.hass.states).filter((e=>e.includes("soccerlive_news")||e.includes("soccer_live_news"))).sort())}render(){if(!this._config||!this.hass)return R``;const e=this._config.entity||"",t=e&&this.entities.includes(e);return R`
      <div class="card-config">
        <h3>Sensor</h3>
        <div>
          <label class="field-label">Entity (news sensor)</label>
          <select @change=${this._entityChanged}>
            ${t?"":R`<option value="${e}" selected>${e||"— select —"}</option>`}
            ${this.entities.map((t=>R`<option value="${t}" ?selected=${t===e}>${t}</option>`))}
          </select>
        </div>

        <h3>Settings</h3>
        <div class="option">
          <label>Hide Header</label>
          <ha-switch
            .checked=${!0===this._config.hide_header}
            data-config-value="hide_header"
            @change=${this._switchChanged}
          ></ha-switch>
        </div>
        <div class="option">
          <label>Hide Images</label>
          <ha-switch
            .checked=${!0===this._config.hide_images}
            data-config-value="hide_images"
            @change=${this._switchChanged}
          ></ha-switch>
        </div>
        <div>
          <label class="field-label">Max Articles</label>
          <input type="number" min="1" max="20"
            .value=${this._config.max_articles||5}
            data-config-value="max_articles"
            @change=${this._numberChanged} />
        </div>
        <div>
          <label class="field-label">Skin</label>
          <select data-config-value="skin" @change=${this._selectChanged}>
            <option value="dark"       ?selected=${"dark"===(this._config.skin||"dark")}>Dark (standaard)</option>
            <option value="light"      ?selected=${"light"===this._config.skin}>Light</option>
            <option value="red-white"  ?selected=${"red-white"===this._config.skin}>Red & White</option>
            <option value="classic"    ?selected=${"classic"===this._config.skin}>Classic (groen)</option>
            <option value="neon"       ?selected=${"neon"===this._config.skin}>Neon</option>
            <option value="gold"        ?selected=${"gold"===this._config.skin}>Gold</option>
            <option value="orange"     ?selected=${"orange"===this._config.skin}>Orange (Netherlands)</option>
            <option value="blue"       ?selected=${"blue"===this._config.skin}>Blue (Chelsea / PSG / Inter)</option>
            <option value="black-white" ?selected=${"black-white"===this._config.skin}>Black &amp; White (Juventus)</option>
            <option value="feyenoord"  ?selected=${"feyenoord"===this._config.skin}>Feyenoord (red/white)</option>
            <option value="arsenal"    ?selected=${"arsenal"===this._config.skin}>Arsenal</option>
            <option value="barcelona"  ?selected=${"barcelona"===this._config.skin}>Barcelona</option>
            <option value="real-madrid" ?selected=${"real-madrid"===this._config.skin}>Real Madrid</option>
          </select>
        </div>
        <div>
          <label class="field-label">Language</label>
          <select data-config-value="language" @change=${this._selectChanged}>
            <option value="" ?selected=${!this._config.language}>Auto (HA locale)</option>
            <option value="en" ?selected=${"en"===this._config.language}>English</option>
            <option value="it" ?selected=${"it"===this._config.language}>Italiano</option>
            <option value="fr" ?selected=${"fr"===this._config.language}>Français</option>
            <option value="es" ?selected=${"es"===this._config.language}>Español</option>
            <option value="nl" ?selected=${"nl"===this._config.language}>Nederlands</option>
            <option value="de" ?selected=${"de"===this._config.language}>Deutsch</option>
            <option value="pt" ?selected=${"pt"===this._config.language}>Português</option>
          </select>
        </div>
      </div>
    `}}),customElements.define("soccer-live-lineup",class extends oe{static get properties(){return{hass:{},_config:{}}}setConfig(e){if(!e.entity)throw new Error("Entity required");this._config=e,me(this,e),this.hideHeader=!0===e.hide_header}_t(e,t){return pe(e,de(this.hass,this._config),t)}getCardSize(){return 6}static getConfigElement(){return document.createElement("soccer-live-lineup-editor")}static getStubConfig(){return{entity:"sensor.soccer_live_next",hide_header:!1}}_starters(e){return(e||[]).filter((e=>!0===e.starter))}_bench(e){return(e||[]).filter((e=>!e.starter))}_renderPlayer(e){const t=(e.short_name||e.name||"").split(" ").map((e=>e[0])).slice(0,2).join("");return R`
      <div class="player" title="${e.name}">
        <div class="player-card">
          ${e.headshot?R`<img class="player-img" src="${e.headshot}" alt="${e.name}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" />
                   <div class="player-init" style="display:none;">${t}</div>`:R`<div class="player-init">${t}</div>`}
          ${e.jersey?R`<div class="player-num">${e.jersey}</div>`:""}
        </div>
        <div class="player-name">${e.short_name||e.name}</div>
        ${e.position?R`<div class="player-pos">${e.position}</div>`:""}
      </div>
    `}render(){if(!this.hass||!this._config)return R``;const e=this.hass.states[this._config.entity];if(!e)return R`<ha-card class="empty">${this._t("generic.unknown_entity")}: ${this._config.entity}</ha-card>`;const t=e.attributes.matches||[];if(0===t.length)return R`<ha-card class="empty">${this._t("generic.no_match")}</ha-card>`;const a=t[0],i=a.lineup_home||e.attributes.lineup_home||[],n=a.lineup_away||e.attributes.lineup_away||[],s=a.formation_home||e.attributes.formation_home||"",o=a.formation_away||e.attributes.formation_away||"";if(0===i.length&&0===n.length)return R`
        <ha-card class="empty">
          <div class="hero-bg"></div>
          <div class="empty-state">
            <div class="empty-icon">👥</div>
            <div class="empty-title">${this._t("lineup.empty.title")}</div>
            <div class="empty-sub">${this._t("lineup.empty.sub")}</div>
          </div>
        </ha-card>
      `;const r=this._starters(i),l=this._bench(i),c=this._starters(n),d=this._bench(n);return R`
      <ha-card>
        <div class="hero-bg"></div>
        ${this.hideHeader?"":R`
          <div class="lineup-header">
            <div class="header-icon">👥</div>
            <div class="header-text">
              <div class="title">${this._t("card.lineup")}</div>
              <div class="subtitle">${a.home_team} tegen ${a.away_team}</div>
            </div>
          </div>
        `}

        <div class="teams-row">
          <div class="team-block">
            <div class="team-block-head">
              <img src="${a.home_logo}" alt="${a.home_team}" />
              <div class="team-block-info">
                <div class="team-block-name">${a.home_team}</div>
                ${s?R`<div class="formation">${s}</div>`:""}
              </div>
            </div>
            <div class="players-grid">
              ${r.map((e=>this._renderPlayer(e)))}
            </div>
            ${l.length?R`
              <div class="bench-label">${this._t("lineup.bench")}</div>
              <div class="players-grid bench">
                ${l.map((e=>this._renderPlayer(e)))}
              </div>
            `:""}
          </div>

          <div class="team-block">
            <div class="team-block-head">
              <img src="${a.away_logo}" alt="${a.away_team}" />
              <div class="team-block-info">
                <div class="team-block-name">${a.away_team}</div>
                ${o?R`<div class="formation">${o}</div>`:""}
              </div>
            </div>
            <div class="players-grid">
              ${c.map((e=>this._renderPlayer(e)))}
            </div>
            ${d.length?R`
              <div class="bench-label">${this._t("lineup.bench")}</div>
              <div class="players-grid bench">
                ${d.map((e=>this._renderPlayer(e)))}
              </div>
            `:""}
          </div>
        </div>
      </ha-card>
    `}static get styles(){return[he,s`
      :host {
        --cl-accent: #6366f1;
        --cl-accent-2: #ec4899;
        --cl-card-2: rgba(255,255,255,0.05);
        --cl-divider: rgba(255,255,255,0.08);
        --cl-glass-border: rgba(255,255,255,0.08);
      }
      ha-card {
        position: relative;
        overflow: hidden;
        border-radius: 20px;
        padding: 0;
        box-shadow: 0 4px 24px rgba(0,0,0,0.15);
        background: var(--cl-bg);
        color: var(--cl-text);
      }
      ha-card.empty {
        padding: 24px;
        text-align: center;
        color: var(--cl-text-2);
      }
      .empty-state {
        display: flex; flex-direction: column;
        align-items: center; gap: 8px;
        padding: 24px;
      }
      .empty-icon { font-size: 38px; opacity: 0.4; }
      .empty-title { font-weight: 800; color: var(--cl-text); }
      .empty-sub { font-size: 12px; color: var(--cl-text-2); }

      .hero-bg {
        position: absolute; inset: 0; z-index: 0;
        background:
          radial-gradient(ellipse at 0% 0%, rgba(var(--cl-accent-rgb),0.10), transparent 50%),
          radial-gradient(ellipse at 100% 100%, rgba(16,185,129,0.10), transparent 50%);
        pointer-events: none;
      }

      .lineup-header {
        position: relative; z-index: 1;
        display: flex; align-items: center; gap: 12px;
        padding: 16px 18px;
        border-bottom: 1px solid var(--cl-divider);
      }
      .header-icon {
        width: 40px; height: 40px;
        border-radius: 12px;
        background: linear-gradient(135deg, var(--cl-accent), #10b981);
        display: flex; align-items: center; justify-content: center;
        font-size: 20px;
        box-shadow: 0 4px 16px rgba(var(--cl-accent-rgb),0.4);
      }
      .header-text .title {
        font-size: 18px; font-weight: 900;
        letter-spacing: -0.02em;
        color: var(--cl-text);
      }
      .header-text .subtitle {
        font-size: 11px;
        color: var(--cl-text-2);
        margin-top: 2px;
        font-weight: 600;
      }

      .teams-row {
        position: relative; z-index: 1;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0;
      }
      .team-block {
        padding: 16px 12px;
        border-right: 1px solid var(--cl-divider);
      }
      .team-block:last-child { border-right: none; }
      .team-block-head {
        display: flex; align-items: center; gap: 10px;
        padding-bottom: 12px;
        margin-bottom: 12px;
        border-bottom: 1px solid var(--cl-divider);
      }
      .team-block-head img {
        width: 32px; height: 32px;
        object-fit: contain;
        flex-shrink: 0;
      }
      .team-block-info { min-width: 0; flex: 1; }
      .team-block-name {
        font-size: 13px; font-weight: 800;
        white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        color: var(--cl-text);
      }
      .formation {
        font-size: 10px;
        font-weight: 700;
        letter-spacing: 0.1em;
        color: var(--cl-accent);
        margin-top: 2px;
        font-variant-numeric: tabular-nums;
      }
      .players-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(56px, 1fr));
        gap: 10px;
      }
      .players-grid.bench { opacity: 0.85; }
      .player {
        display: flex; flex-direction: column;
        align-items: center;
        gap: 4px;
        text-align: center;
      }
      .player-card {
        position: relative;
        width: 48px; height: 48px;
      }
      .player-img {
        width: 48px; height: 48px;
        border-radius: 50%;
        object-fit: cover;
        background: var(--cl-card-2);
        border: 2px solid var(--cl-glass-border);
      }
      .player-init {
        width: 48px; height: 48px;
        border-radius: 50%;
        background: linear-gradient(135deg, var(--cl-accent), var(--cl-accent-2));
        color: white;
        display: flex; align-items: center; justify-content: center;
        font-size: 14px; font-weight: 800;
        letter-spacing: -0.02em;
      }
      .player-num {
        position: absolute;
        bottom: -3px; right: -4px;
        background: var(--cl-num-bg);
        color: white;
        border: 2px solid var(--cl-bg);
        font-size: 9px; font-weight: 800;
        min-width: 18px; height: 18px;
        border-radius: 50%;
        display: flex; align-items: center; justify-content: center;
        font-variant-numeric: tabular-nums;
        padding: 0 3px;
      }
      .player-name {
        font-size: 10px; font-weight: 700;
        line-height: 1.1;
        max-width: 64px;
        color: var(--cl-text);
        word-wrap: break-word;
        text-align: center;
      }
      .player-pos {
        font-size: 8px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: var(--cl-text-2);
        background: var(--cl-card-2);
        padding: 1px 5px;
        border-radius: 4px;
      }
      .bench-label {
        margin-top: 16px; margin-bottom: 8px;
        font-size: 10px; font-weight: 800;
        text-transform: uppercase; letter-spacing: 0.15em;
        color: var(--cl-text-2);
        display: flex; align-items: center; gap: 8px;
      }
      .bench-label::after {
        content: '';
        flex: 1; height: 1px;
        background: linear-gradient(90deg, var(--cl-divider), transparent);
      }

      @media (max-width: 480px) {
        .teams-row { grid-template-columns: 1fr; }
        .team-block { border-right: none; border-bottom: 1px solid var(--cl-divider); }
        .team-block:last-child { border-bottom: none; }
      }
    `]}}),window.customCards=window.customCards||[],window.customCards.push({type:"soccer-live-lineup",name:"Soccer Live Lineup Card",description:"Shows the lineups of both teams for the current or upcoming match"}),customElements.define("soccer-live-lineup-editor",class extends oe{static get properties(){return{_config:{type:Object},hass:{type:Object},entities:{type:Array}}}constructor(){super(),this.entities=[]}static get styles(){return[_e,s`
      .card-config { display: flex; flex-direction: column; gap: 16px; }
      .option { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
      label { font-size: 14px; color: var(--primary-text-color); }
      .field-label { display: block; font-size: 12px; color: var(--secondary-text-color); margin-bottom: 4px; font-weight: 600; }
      select {
        width: 100%; padding: 10px 12px; font-size: 14px;
        border-radius: 8px;
        border: 1px solid var(--divider-color, rgba(0,0,0,0.12));
        background: var(--card-background-color, #fff);
        color: var(--primary-text-color, #000);
        box-sizing: border-box;
      }
      h3 { margin: 8px 0 0; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; color: var(--secondary-text-color); }
      .hint { font-size: 12px; color: var(--secondary-text-color); }
    `]}setConfig(e){if(!e)throw new Error("Invalid configuration");this._config={...e}}get config(){return this._config}updated(e){e.has("hass")&&this._fetchEntities()}_fireConfigChanged(e){this._config=e,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0})),this.requestUpdate()}_entityChanged(e){if(!this._config)return;const t=e.target.value;t!==this._config.entity&&this._fireConfigChanged({...this._config,entity:t})}_switchChanged(e){if(!this._config)return;const t=e.target;if(!t.dataset||!t.dataset.configValue)return;const a=t.dataset.configValue,i=t.checked;this._config[a]!==i&&this._fireConfigChanged({...this._config,[a]:i})}_selectChanged(e){if(!this._config)return;const t=e.target;if(!t.dataset||!t.dataset.configValue)return;const a=t.dataset.configValue,i=t.value;this._config[a]!==i&&this._fireConfigChanged({...this._config,[a]:i})}_fetchEntities(){this.hass&&(this.entities=Object.keys(this.hass.states).filter((e=>e.includes("soccerlive_next")||e.includes("soccer_live_next"))).sort())}render(){if(!this._config||!this.hass)return R``;const e=this._config.entity||"",t=e&&this.entities.includes(e);return R`
      <div class="card-config">
        <h3>Sensor</h3>
        <div>
          <label class="field-label">Entity (team_match sensor — soccer_live_next_*)</label>
          <select @change=${this._entityChanged}>
            ${t?"":R`<option value="${e}" selected>${e||"— select —"}</option>`}
            ${this.entities.map((t=>R`<option value="${t}" ?selected=${t===e}>${t}</option>`))}
          </select>
          <div class="hint" style="margin-top: 4px;">Lineups are published shortly before kick-off.</div>
        </div>

        <h3>Settings</h3>
        <div class="option">
          <label>Hide Header</label>
          <ha-switch
            .checked=${!0===this._config.hide_header}
            data-config-value="hide_header"
            @change=${this._switchChanged}
          ></ha-switch>
        </div>
        <div>
          <label class="field-label">Skin</label>
          <select data-config-value="skin" @change=${this._selectChanged}>
            <option value="dark"       ?selected=${"dark"===(this._config.skin||"dark")}>Dark (standaard)</option>
            <option value="light"      ?selected=${"light"===this._config.skin}>Light</option>
            <option value="red-white"  ?selected=${"red-white"===this._config.skin}>Red & White</option>
            <option value="classic"    ?selected=${"classic"===this._config.skin}>Classic (groen)</option>
            <option value="neon"       ?selected=${"neon"===this._config.skin}>Neon</option>
            <option value="gold"        ?selected=${"gold"===this._config.skin}>Gold</option>
            <option value="orange"     ?selected=${"orange"===this._config.skin}>Orange (Netherlands)</option>
            <option value="blue"       ?selected=${"blue"===this._config.skin}>Blue (Chelsea / PSG / Inter)</option>
            <option value="black-white" ?selected=${"black-white"===this._config.skin}>Black &amp; White (Juventus)</option>
            <option value="feyenoord"  ?selected=${"feyenoord"===this._config.skin}>Feyenoord (red/white)</option>
            <option value="arsenal"    ?selected=${"arsenal"===this._config.skin}>Arsenal</option>
            <option value="barcelona"  ?selected=${"barcelona"===this._config.skin}>Barcelona</option>
            <option value="real-madrid" ?selected=${"real-madrid"===this._config.skin}>Real Madrid</option>
          </select>
        </div>
        <div>
          <label class="field-label">Language</label>
          <select data-config-value="language" @change=${this._selectChanged}>
            <option value="" ?selected=${!this._config.language}>Auto (HA locale)</option>
            <option value="en" ?selected=${"en"===this._config.language}>English</option>
            <option value="it" ?selected=${"it"===this._config.language}>Italiano</option>
            <option value="fr" ?selected=${"fr"===this._config.language}>Français</option>
            <option value="es" ?selected=${"es"===this._config.language}>Español</option>
            <option value="nl" ?selected=${"nl"===this._config.language}>Nederlands</option>
            <option value="de" ?selected=${"de"===this._config.language}>Deutsch</option>
            <option value="pt" ?selected=${"pt"===this._config.language}>Português</option>
          </select>
        </div>
      </div>
    `}}),customElements.define("soccer-live-timeline",class extends oe{static get properties(){return{hass:{},_config:{}}}setConfig(e){if(!e.entity)throw new Error("Entity required");this._config=e,me(this,e),this.hideHeader=!0===e.hide_header,this.reverseOrder=!0===e.reverse_order}_t(e,t){return pe(e,de(this.hass,this._config),t)}getCardSize(){return 5}static getConfigElement(){return document.createElement("soccer-live-timeline-editor")}static getStubConfig(){return{entity:"sensor.soccer_live_next",hide_header:!1,reverse_order:!0}}_eventMeta(e){const t=(e.type||"").toLowerCase(),a=(e.type_text||"").toLowerCase();return a.includes("kickoff")||"kickoff"===t?{icon:"⚽",label:this._t("status.kickoff"),cls:"meta"}:a.includes("halftime")||a.includes("intervallo")?{icon:"⏸",label:this._t("status.halftime"),cls:"meta"}:a.includes("start 2nd")||a.includes("secondo tempo")?{icon:"▶",label:this._t("status.second_half"),cls:"meta"}:a.includes("end regular")||a.includes("full time")?{icon:"🏁",label:this._t("status.end"),cls:"meta"}:"goal"===t||e.scoring_play?{icon:"⚽",label:this._t("event.goal"),cls:"goal"}:a.includes("penalty")?{icon:"⚽",label:this._t("timeline.penalty"),cls:"goal"}:a.includes("yellow card")?{icon:"🟨",label:this._t("event.yellow_card"),cls:"yellow"}:a.includes("red card")?{icon:"🟥",label:this._t("event.red_card"),cls:"red"}:"substitution"===t||a.includes("substitution")?{icon:"🔄",label:this._t("event.substitution"),cls:"sub"}:a.includes("var")?{icon:"📺",label:this._t("event.var"),cls:"meta"}:{icon:"·",label:e.type_text||this._t("timeline.event"),cls:"meta"}}render(){if(!this.hass||!this._config)return R``;const e=this.hass.states[this._config.entity];if(!e)return R`<ha-card class="empty">${this._t("generic.unknown_entity")}: ${this._config.entity}</ha-card>`;const t=e.attributes.matches||[];if(0===t.length)return R`<ha-card class="empty">${this._t("generic.no_match")}</ha-card>`;const a=t[0],i=(a.key_events||e.attributes.key_events||[]).filter((e=>!(e.type_text||"").toLowerCase().includes("delay")));if(0===i.length)return R`
        <ha-card class="empty">
          <div class="hero-bg"></div>
          <div class="empty-state">
            <div class="empty-icon">⏱</div>
            <div class="empty-title">${this._t("timeline.empty.title")}</div>
            <div class="empty-sub">${this._t("timeline.empty.sub")}</div>
          </div>
        </ha-card>
      `;const n=this.reverseOrder?[...i].reverse():i;return R`
      <ha-card>
        <div class="hero-bg"></div>
        ${this.hideHeader?"":R`
          <div class="tl-header">
            <div class="header-icon">⏱</div>
            <div class="header-text">
              <div class="title">${this._t("card.timeline")}</div>
              <div class="subtitle">
                <img class="mini-logo" src="${a.home_logo}" alt="" />
                <span>${a.home_score??"-"} - ${a.away_score??"-"}</span>
                <img class="mini-logo" src="${a.away_logo}" alt="" />
              </div>
            </div>
          </div>
        `}

        <div class="tl-body">
          ${n.map((e=>{const t=this._eventMeta(e),i=a.home_team&&e.team===a.home_team,n=a.away_team&&e.team===a.away_team,s=i?"home":n?"away":"meta",o=(e.athletes||[]).filter(Boolean);return R`
              <div class="tl-row side-${s} type-${t.cls}">
                <div class="tl-time">${e.clock||""}</div>
                <div class="tl-axis">
                  <div class="tl-dot ${t.cls}">${t.icon}</div>
                </div>
                <div class="tl-card">
                  <div class="tl-card-head">
                    <span class="tl-label">${t.label}</span>
                    ${e.team?R`<span class="tl-team">${e.team}</span>`:""}
                  </div>
                  ${o.length?R`
                    <div class="tl-athletes">${o.join(", ")}</div>
                  `:""}
                  ${e.short_text?R`<div class="tl-text">${e.short_text}</div>`:""}
                </div>
              </div>
            `}))}
        </div>
      </ha-card>
    `}static get styles(){return[he,s`
      :host {
        --cl-accent: #6366f1;
        --cl-accent-2: #ec4899;
        --cl-live: #ef4444;
        --cl-green: #10b981;
        --cl-gold: #fbbf24;
        --cl-card-2: rgba(255,255,255,0.05);
        --cl-divider: rgba(255,255,255,0.08);
        --cl-glass-border: rgba(255,255,255,0.08);
      }
      ha-card {
        position: relative;
        overflow: hidden;
        border-radius: 20px;
        padding: 0;
        box-shadow: 0 4px 24px rgba(0,0,0,0.15);
        background: var(--cl-bg);
        color: var(--cl-text);
      }
      ha-card.empty {
        padding: 24px;
        text-align: center;
        color: var(--cl-text-2);
      }
      .empty-state {
        display: flex; flex-direction: column;
        align-items: center; gap: 8px;
        padding: 24px;
      }
      .empty-icon { font-size: 38px; opacity: 0.4; }
      .empty-title { font-weight: 800; color: var(--cl-text); }
      .empty-sub { font-size: 12px; color: var(--cl-text-2); }

      .hero-bg {
        position: absolute; inset: 0; z-index: 0;
        background:
          radial-gradient(ellipse at 0% 0%, rgba(var(--cl-accent-rgb),0.10), transparent 50%),
          radial-gradient(ellipse at 100% 100%, rgba(251,191,36,0.10), transparent 50%);
        pointer-events: none;
      }

      .tl-header {
        position: relative; z-index: 1;
        display: flex; align-items: center; gap: 12px;
        padding: 16px 18px;
        border-bottom: 1px solid var(--cl-divider);
      }
      .header-icon {
        width: 40px; height: 40px;
        border-radius: 12px;
        background: linear-gradient(135deg, var(--cl-accent), var(--cl-gold));
        display: flex; align-items: center; justify-content: center;
        font-size: 20px;
      }
      .header-text .title {
        font-size: 18px; font-weight: 900;
        letter-spacing: -0.02em;
        color: var(--cl-text);
      }
      .header-text .subtitle {
        display: flex; align-items: center; gap: 6px;
        font-size: 12px;
        color: var(--cl-text-2);
        margin-top: 2px;
        font-weight: 700;
      }
      .mini-logo { width: 16px; height: 16px; object-fit: contain; }

      .tl-body {
        position: relative; z-index: 1;
        padding: 16px 12px 20px;
      }
      .tl-row {
        display: grid;
        grid-template-columns: 44px 32px 1fr;
        gap: 10px;
        align-items: flex-start;
        position: relative;
      }
      .tl-row + .tl-row { margin-top: 4px; }
      .tl-time {
        text-align: right;
        font-size: 11px;
        font-weight: 700;
        color: var(--cl-text-2);
        font-variant-numeric: tabular-nums;
        padding: 8px 0;
      }
      .tl-axis {
        position: relative;
        display: flex; justify-content: center;
        padding: 4px 0;
      }
      .tl-axis::before {
        content: '';
        position: absolute;
        top: 0; bottom: 0;
        left: 50%;
        width: 2px;
        background: var(--cl-divider);
        transform: translateX(-50%);
      }
      .tl-row:first-child .tl-axis::before { top: 50%; }
      .tl-row:last-child .tl-axis::before { bottom: 50%; }
      .tl-dot {
        position: relative;
        z-index: 1;
        width: 26px; height: 26px;
        border-radius: 50%;
        background: var(--cl-bg);
        border: 2px solid var(--cl-divider);
        display: flex; align-items: center; justify-content: center;
        font-size: 12px;
      }
      .tl-dot.goal {
        background: linear-gradient(135deg, var(--cl-gold), #d97706);
        border-color: var(--cl-gold);
        box-shadow: 0 0 0 4px rgba(251,191,36,0.2);
      }
      .tl-dot.yellow {
        background: rgba(245,158,11,0.18);
        border-color: #f59e0b;
      }
      .tl-dot.red {
        background: rgba(239,68,68,0.18);
        border-color: var(--cl-live);
      }
      .tl-dot.sub {
        background: rgba(99,102,241,0.18);
        border-color: var(--cl-accent);
      }
      .tl-dot.meta {
        background: var(--cl-card-2);
      }
      .tl-card {
        background: var(--cl-card-2);
        border: 1px solid var(--cl-glass-border);
        border-radius: 12px;
        padding: 8px 12px;
      }
      .tl-row.type-goal .tl-card {
        background: linear-gradient(135deg, rgba(251,191,36,0.10), rgba(251,191,36,0.02));
        border-color: rgba(251,191,36,0.3);
      }
      .tl-row.type-red .tl-card {
        border-color: rgba(239,68,68,0.3);
      }
      .tl-row.type-yellow .tl-card {
        border-color: rgba(245,158,11,0.3);
      }
      .tl-card-head {
        display: flex; justify-content: space-between;
        align-items: baseline;
        gap: 8px;
      }
      .tl-label {
        font-size: 11px;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: var(--cl-text);
      }
      .tl-row.type-goal .tl-label { color: var(--cl-gold); }
      .tl-row.type-yellow .tl-label { color: #f59e0b; }
      .tl-row.type-red .tl-label { color: var(--cl-live); }
      .tl-row.type-sub .tl-label { color: var(--cl-accent); }
      .tl-team {
        font-size: 10px;
        font-weight: 700;
        color: var(--cl-text-2);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 50%;
      }
      .tl-athletes {
        font-size: 13px;
        font-weight: 700;
        color: var(--cl-text);
        margin-top: 3px;
        line-height: 1.3;
      }
      .tl-text {
        font-size: 11px;
        font-weight: 500;
        color: var(--cl-text-2);
        margin-top: 3px;
        line-height: 1.4;
      }
    `]}}),window.customCards=window.customCards||[],window.customCards.push({type:"soccer-live-timeline",name:"Soccer Live Timeline Card",description:"Minute-by-minute timeline of match events"}),customElements.define("soccer-live-timeline-editor",class extends oe{static get properties(){return{_config:{type:Object},hass:{type:Object},entities:{type:Array}}}constructor(){super(),this.entities=[]}static get styles(){return s`
      .card-config { display: flex; flex-direction: column; gap: 16px; }
      .option { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
      label { font-size: 14px; color: var(--primary-text-color); }
      .field-label { display: block; font-size: 12px; color: var(--secondary-text-color); margin-bottom: 4px; font-weight: 600; }
      select {
        width: 100%; padding: 10px 12px; font-size: 14px;
        border-radius: 8px;
        border: 1px solid var(--divider-color, rgba(0,0,0,0.12));
        background: var(--card-background-color, #fff);
        color: var(--primary-text-color, #000);
        box-sizing: border-box;
      }
      h3 { margin: 8px 0 0; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; color: var(--secondary-text-color); }
      .hint { font-size: 12px; color: var(--secondary-text-color); }
    `}setConfig(e){if(!e)throw new Error("Invalid configuration");this._config={...e}}get config(){return this._config}updated(e){e.has("hass")&&this._fetchEntities()}_fireConfigChanged(e){this._config=e,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0})),this.requestUpdate()}_entityChanged(e){if(!this._config)return;const t=e.target.value;t!==this._config.entity&&this._fireConfigChanged({...this._config,entity:t})}_switchChanged(e){if(!this._config)return;const t=e.target;if(!t.dataset||!t.dataset.configValue)return;const a=t.dataset.configValue,i=t.checked;this._config[a]!==i&&this._fireConfigChanged({...this._config,[a]:i})}_selectChanged(e){if(!this._config)return;const t=e.target;if(!t.dataset||!t.dataset.configValue)return;const a=t.dataset.configValue,i=t.value;this._config[a]!==i&&this._fireConfigChanged({...this._config,[a]:i})}_fetchEntities(){this.hass&&(this.entities=Object.keys(this.hass.states).filter((e=>e.includes("soccerlive_next")||e.includes("soccer_live_next"))).sort())}render(){if(!this._config||!this.hass)return R``;const e=this._config.entity||"",t=e&&this.entities.includes(e);return R`
      <div class="card-config">
        <h3>Sensor</h3>
        <div>
          <label class="field-label">Entity (team_match sensor — soccer_live_next_*)</label>
          <select @change=${this._entityChanged}>
            ${t?"":R`<option value="${e}" selected>${e||"— select —"}</option>`}
            ${this.entities.map((t=>R`<option value="${t}" ?selected=${t===e}>${t}</option>`))}
          </select>
          <div class="hint" style="margin-top: 4px;">Events are published during the match.</div>
        </div>

        <h3>Settings</h3>
        <div class="option">
          <label>Hide Header</label>
          <ha-switch
            .checked=${!0===this._config.hide_header}
            data-config-value="hide_header"
            @change=${this._switchChanged}
          ></ha-switch>
        </div>
        <div class="option">
          <label>Reverse order (newest first)</label>
          <ha-switch
            .checked=${!0===this._config.reverse_order}
            data-config-value="reverse_order"
            @change=${this._switchChanged}
          ></ha-switch>
        </div>
        <div>
          <label class="field-label">Skin</label>
          <select data-config-value="skin" @change=${this._selectChanged}>
            <option value="dark"       ?selected=${"dark"===(this._config.skin||"dark")}>Dark (standaard)</option>
            <option value="light"      ?selected=${"light"===this._config.skin}>Light</option>
            <option value="red-white"  ?selected=${"red-white"===this._config.skin}>Red & White</option>
            <option value="classic"    ?selected=${"classic"===this._config.skin}>Classic (groen)</option>
            <option value="neon"       ?selected=${"neon"===this._config.skin}>Neon</option>
            <option value="gold"        ?selected=${"gold"===this._config.skin}>Gold</option>
            <option value="orange"     ?selected=${"orange"===this._config.skin}>Orange (Netherlands)</option>
            <option value="blue"       ?selected=${"blue"===this._config.skin}>Blue (Chelsea / PSG / Inter)</option>
            <option value="black-white" ?selected=${"black-white"===this._config.skin}>Black &amp; White (Juventus)</option>
            <option value="feyenoord"  ?selected=${"feyenoord"===this._config.skin}>Feyenoord (red/white)</option>
            <option value="arsenal"    ?selected=${"arsenal"===this._config.skin}>Arsenal</option>
            <option value="barcelona"  ?selected=${"barcelona"===this._config.skin}>Barcelona</option>
            <option value="real-madrid" ?selected=${"real-madrid"===this._config.skin}>Real Madrid</option>
          </select>
        </div>
        <div>
          <label class="field-label">Language</label>
          <select data-config-value="language" @change=${this._selectChanged}>
            <option value="" ?selected=${!this._config.language}>Auto (HA locale)</option>
            <option value="en" ?selected=${"en"===this._config.language}>English</option>
            <option value="it" ?selected=${"it"===this._config.language}>Italiano</option>
            <option value="fr" ?selected=${"fr"===this._config.language}>Français</option>
            <option value="es" ?selected=${"es"===this._config.language}>Español</option>
            <option value="nl" ?selected=${"nl"===this._config.language}>Nederlands</option>
            <option value="de" ?selected=${"de"===this._config.language}>Deutsch</option>
            <option value="pt" ?selected=${"pt"===this._config.language}>Português</option>
          </select>
        </div>
      </div>
    `}}),customElements.define("soccer-live-bracket",class extends oe{static get properties(){return{hass:{},_config:{}}}setConfig(e){if(!e.entity)throw new Error("Entity required");this._config=e,me(this,e),this.hideHeader=!0===e.hide_header,this.compactMode=!0===e.compact,this._cardStyle="tree"===e.style?"tree":"list",this.treeShowPlayoffs=!0===e.tree_show_playoffs}_t(e,t){return pe(e,de(this.hass,this._config),t)}_formatDate(e){if(!e)return"";try{const t=new Date(e),a=this._t("month."+(t.getMonth()+1));return`${t.getDate()} ${a}`}catch(e){return""}}_localizeRoundName(e){const t={Final:"round.final",Semifinals:"round.semifinals",Quarterfinals:"round.quarterfinals","Round of 16":"round.r16","Round of 32":"round.r32","Knockout Playoffs":"round.knockout_playoffs","Preliminary Round":"round.preliminary"}[e.name];return t?this._t(t):e.name}getCardSize(){return 6}static getConfigElement(){return document.createElement("soccer-live-bracket-editor")}static getStubConfig(){return{entity:"sensor.soccer_live_bracket",hide_header:!1,compact:!1,style:"list"}}_formatScore(e){return null==e?"-":String(e)}_renderTie(e){const t=e.team_a||{},a=e.team_b||{},i=e.leg1,n=e.leg2,s=e.single,o=e.winner_team,r=o&&t.name&&o===t.name,l=o&&a.name&&o===a.name,c=(e,t)=>e&&t&&t.name?e.home_team===t.name?e.home_score:e.away_team===t.name?e.away_score:null:null,d=c(i,t),p=c(i,a),h=c(n,t),g=c(n,a),u=c(s,t),m=c(s,a),f=i&&"in"===i.state||n&&"in"===n.state||s&&"in"===s.state,v=!i&&!s;return R`
      <div class="tie ${f?"live":""} ${e.completed?"done":""}">
        <div class="tie-row ${r?"winner":""} ${l?"loser":""}">
          <img src="${t.logo}" alt="${t.name}" />
          <span class="tname">${t.name||"TBD"}</span>
          <span class="legs">
            ${s?R`<span class="leg">${this._formatScore(u)}</span>`:R`
              <span class="leg">${this._formatScore(d)}</span>
              <span class="leg">${this._formatScore(h)}</span>
            `}
          </span>
        </div>
        <div class="tie-row ${l?"winner":""} ${r?"loser":""}">
          <img src="${a.logo}" alt="${a.name}" />
          <span class="tname">${a.name||"TBD"}</span>
          <span class="legs">
            ${s?R`<span class="leg">${this._formatScore(m)}</span>`:R`
              <span class="leg">${this._formatScore(p)}</span>
              <span class="leg">${this._formatScore(g)}</span>
            `}
          </span>
        </div>
        <div class="tie-foot">
          ${f?R`<span class="live-badge"><span class="dot"></span>LIVE</span>`:""}
          ${e.aggregate?R`<span class="agg">${this._t("bracket.agg")} ${e.aggregate}</span>`:""}
          ${e.tied?R`<span class="agg tied">${this._t("bracket.tied_agg")}</span>`:""}
          ${e.completed||f||!e.first_leg_date?"":R`<span class="date">${this._formatDate(e.first_leg_date)}</span>`}
          ${v?R`<span class="date pending">${this._t("bracket.tbd")}</span>`:""}
        </div>
      </div>
    `}_aggregateFor(e,t){if(!t||!t.name)return null;const a=(e,t)=>e&&t&&t.name?e.home_team===t.name?e.home_score:e.away_team===t.name?e.away_score:null:null;if(e.single)return a(e.single,t);let i=0,n=!1;const s=a(e.leg1,t),o=a(e.leg2,t);return null!=s&&(i+=s,n=!0),null!=o&&(i+=o,n=!0),n?i:null}_renderMiniTie(e){const t=e.team_a||{},a=e.team_b||{},i=this._aggregateFor(e,t),n=this._aggregateFor(e,a),s=e.winner_team,o=s&&t.name&&s===t.name,r=s&&a.name&&s===a.name,l=e.leg1&&"in"===e.leg1.state||e.leg2&&"in"===e.leg2.state||e.single&&"in"===e.single.state,c=!e.leg1&&!e.single,d=t.abbrev||(t.name?t.name.substring(0,3).toUpperCase():"TBD"),p=a.abbrev||(a.name?a.name.substring(0,3).toUpperCase():"TBD");return R`
      <div class="mini-tie ${l?"live":""} ${e.completed?"done":""} ${c?"pending":""}">
        <div class="mini-team ${o?"winner":""} ${r?"loser":""}">
          ${t.logo?R`<img src="${t.logo}" alt="${t.name}" />`:R`<div class="logo-ph"></div>`}
          <span class="abbr">${d}</span>
          <span class="agg-num">${null!==i?i:"-"}</span>
        </div>
        <div class="mini-team ${r?"winner":""} ${o?"loser":""}">
          ${a.logo?R`<img src="${a.logo}" alt="${a.name}" />`:R`<div class="logo-ph"></div>`}
          <span class="abbr">${p}</span>
          <span class="agg-num">${null!==n?n:"-"}</span>
        </div>
        ${l?R`<span class="mini-live"><span class="dot"></span></span>`:""}
      </div>
    `}_renderTreeRound(e,t){return R`
      <div class="tree-col">
        <div class="tree-col-label">
          <span class="tree-col-label-en">${this._t(t)}</span>
        </div>
        <div class="tree-col-ties">
          ${e.map((e=>this._renderMiniTie(e)))}
        </div>
      </div>
    `}_renderArrows(e,t){if(e<=0)return"";const a=2*e,i=[],n="left"===t,s=`arrow-${t}`;for(let t=0;t<e;t++){const o=(2*t+.5)/a*100,r=(2*t+1.5)/a*100,l=(t+.5)/e*100;n?(i.push(q`<line x1="0" y1="${o}%" x2="50%" y2="${o}%" stroke-linecap="round" />`),i.push(q`<line x1="0" y1="${r}%" x2="50%" y2="${r}%" stroke-linecap="round" />`),i.push(q`<line x1="50%" y1="${o}%" x2="50%" y2="${r}%" />`),i.push(q`<line x1="50%" y1="${l}%" x2="100%" y2="${l}%" marker-end="url(#${s})" />`)):(i.push(q`<line x1="100%" y1="${o}%" x2="50%" y2="${o}%" stroke-linecap="round" />`),i.push(q`<line x1="100%" y1="${r}%" x2="50%" y2="${r}%" stroke-linecap="round" />`),i.push(q`<line x1="50%" y1="${o}%" x2="50%" y2="${r}%" />`),i.push(q`<line x1="50%" y1="${l}%" x2="0" y2="${l}%" marker-end="url(#${s})" />`))}const o=n?q`<marker id="${s}" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="7" markerHeight="7" markerUnits="strokeWidth" overflow="visible"><path d="M0,0 L10,5 L0,10 z" fill="var(--cl-accent)" /></marker>`:q`<marker id="${s}" viewBox="0 0 10 10" refX="0" refY="5" markerWidth="7" markerHeight="7" markerUnits="strokeWidth" overflow="visible"><path d="M10,0 L0,5 L10,10 z" fill="var(--cl-accent)" /></marker>`;return R`
      <div class="tree-arrows ${t}">
        <svg class="connector-svg ${t}" preserveAspectRatio="none">
          <defs>${o}</defs>
          ${i}
        </svg>
      </div>
    `}_renderTree(e){const t=t=>{const a=e.filter((e=>e.size===t));if(0===a.length)return null;return a.find((e=>"Knockout Playoffs"!==e.name&&"Preliminary Round"!==e.name))||a[a.length-1]},a=e.find((e=>"Knockout Playoffs"===e.name)),i=t(8),n=t(4),s=t(2),o=t(1),r=e=>{if(!e)return{left:[],right:[]};const t=e.ties||[],a=Math.ceil(t.length/2);return{left:t.slice(0,a),right:t.slice(a)}},l=r(i),c=r(n),d=r(s),p=this.treeShowPlayoffs?r(a):null,h=o?o.ties[0]:null;return R`
      <div class="tree-wrap">
        <div class="tree">
          <div class="tree-half left">
            ${p&&p.left.length?R`
              ${this._renderTreeRound(p.left,"round.knockout_playoffs")}
              ${l.left.length?this._renderArrows(l.left.length,"left"):""}
            `:""}
            ${l.left.length?this._renderTreeRound(l.left,"round.r16"):""}
            ${l.left.length&&c.left.length?this._renderArrows(c.left.length,"left"):""}
            ${c.left.length?this._renderTreeRound(c.left,"round.quarterfinals"):""}
            ${c.left.length&&d.left.length?this._renderArrows(d.left.length,"left"):""}
            ${d.left.length?this._renderTreeRound(d.left,"round.semifinals"):""}
            ${d.left.length?this._renderArrows(1,"left"):""}
          </div>

          <div class="tree-center">
            <div class="trophy">🏆</div>
            <div class="trophy-label">${this._t("round.final")}</div>
            ${h?R`<div class="final-tie-wrap">${this._renderMiniTie(h)}</div>`:R`<div class="final-placeholder">${this._t("bracket.tbd")}</div>`}
          </div>

          <div class="tree-half right">
            ${d.right.length?this._renderArrows(1,"right"):""}
            ${d.right.length?this._renderTreeRound(d.right,"round.semifinals"):""}
            ${d.right.length&&c.right.length?this._renderArrows(d.right.length,"right"):""}
            ${c.right.length?this._renderTreeRound(c.right,"round.quarterfinals"):""}
            ${c.right.length&&l.right.length?this._renderArrows(c.right.length,"right"):""}
            ${l.right.length?this._renderTreeRound(l.right,"round.r16"):""}
            ${p&&p.right.length?R`
              ${l.right.length?this._renderArrows(l.right.length,"right"):""}
              ${this._renderTreeRound(p.right,"round.knockout_playoffs")}
            `:""}
          </div>
        </div>
      </div>
    `}render(){if(!this.hass||!this._config)return R``;const e=this.hass.states[this._config.entity];if(!e)return R`<ha-card class="empty">${this._t("generic.unknown_entity")}: ${this._config.entity}</ha-card>`;const t=e.attributes.rounds||[];return 0===t.length?R`
        <ha-card class="empty">
          <div class="hero-bg"></div>
          <div class="empty-state">
            <div class="empty-icon">🏆</div>
            <div class="empty-title">${this._t("bracket.empty.title")}</div>
            <div class="empty-sub">${this._t("bracket.empty.sub")}</div>
          </div>
        </ha-card>
      `:R`
      <ha-card class="${this.compactMode?"compact":""} style-${this._cardStyle}">
        <div class="hero-bg"></div>
        ${this.hideHeader?"":R`
          <div class="bracket-header">
            <div class="header-icon">🏆</div>
            <div class="header-text">
              <div class="title">${this._t("card.bracket")}</div>
              <div class="subtitle">${e.state}</div>
            </div>
          </div>
        `}

        ${"tree"===this._cardStyle?this._renderTree(t):R`
          <div class="rounds-container">
            ${t.map((e=>R`
              <div class="round">
                <div class="round-name">
                  <span class="round-name-en">${this._localizeRoundName(e)}</span>
                </div>
                <div class="round-ties">
                  ${e.ties.map((e=>this._renderTie(e)))}
                </div>
              </div>
            `))}
          </div>
        `}
      </ha-card>
    `}static get styles(){return[he,s`
      :host {
        --cl-accent: #6366f1;
        --cl-accent-2: #ec4899;
        --cl-live: #ef4444;
        --cl-live-glow: rgba(239,68,68,0.5);
        --cl-green: #10b981;
        --cl-gold: #fbbf24;
        --cl-card-2: rgba(255,255,255,0.05);
        --cl-divider: rgba(255,255,255,0.08);
        --cl-glass-border: rgba(255,255,255,0.08);
      }
      ha-card {
        position: relative;
        overflow: hidden;
        border-radius: 20px;
        padding: 0;
        box-shadow: 0 4px 24px rgba(0,0,0,0.15);
        background: var(--cl-bg);
        color: var(--cl-text);
      }
      ha-card.empty {
        padding: 24px;
        text-align: center;
        color: var(--cl-text-2);
      }
      .empty-state {
        display: flex; flex-direction: column;
        align-items: center; gap: 8px;
        padding: 24px;
      }
      .empty-icon { font-size: 38px; opacity: 0.4; }
      .empty-title { font-weight: 800; color: var(--cl-text); }
      .empty-sub { font-size: 12px; color: var(--cl-text-2); }

      .hero-bg {
        position: absolute; inset: 0; z-index: 0;
        background:
          radial-gradient(ellipse at 0% 0%, rgba(var(--cl-accent-rgb),0.10), transparent 50%),
          radial-gradient(ellipse at 100% 100%, rgba(251,191,36,0.10), transparent 50%);
        pointer-events: none;
      }

      .bracket-header {
        position: relative; z-index: 1;
        display: flex; align-items: center; gap: 12px;
        padding: 16px 18px;
        border-bottom: 1px solid var(--cl-divider);
      }
      .header-icon {
        width: 40px; height: 40px;
        border-radius: 12px;
        background: linear-gradient(135deg, var(--cl-gold), #d97706);
        display: flex; align-items: center; justify-content: center;
        font-size: 22px;
        box-shadow: 0 4px 16px rgba(251,191,36,0.4);
      }
      .header-text .title {
        font-size: 18px; font-weight: 900;
        letter-spacing: -0.02em;
        color: var(--cl-text);
      }
      .header-text .subtitle {
        font-size: 11px;
        color: var(--cl-text-2);
        margin-top: 2px;
        font-weight: 600;
      }

      .rounds-container {
        position: relative; z-index: 1;
        display: flex;
        gap: 16px;
        padding: 18px;
        overflow-x: auto;
      }
      .round {
        flex: 1 0 240px;
        min-width: 240px;
        display: flex; flex-direction: column;
        gap: 8px;
        justify-content: space-around;
      }
      .round-name {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2px;
        text-align: center;
        padding: 6px 12px;
        border-radius: 12px;
        background: rgba(var(--cl-accent-rgb),0.12);
        align-self: center;
        margin-bottom: 4px;
      }
      .round-name-en {
        font-size: 11px;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 0.12em;
        color: var(--cl-accent);
        line-height: 1;
      }
      .round-ties {
        display: flex; flex-direction: column;
        gap: 12px;
        justify-content: space-around;
        flex: 1;
      }

      .tie {
        background: var(--cl-card-2);
        border: 1px solid var(--cl-glass-border);
        border-radius: 12px;
        padding: 10px 12px;
        transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        position: relative;
      }
      .tie:hover {
        border-color: var(--cl-accent);
        transform: translateY(-2px);
      }
      .tie.live {
        border-color: var(--cl-live);
        box-shadow: 0 0 0 1px var(--cl-live), 0 0 20px var(--cl-live-glow);
        animation: tie-pulse 2s ease-in-out infinite;
      }
      @keyframes tie-pulse {
        0%, 100% { box-shadow: 0 0 0 1px var(--cl-live), 0 0 20px var(--cl-live-glow); }
        50% { box-shadow: 0 0 0 2px var(--cl-live), 0 0 30px var(--cl-live-glow); }
      }
      .tie.done {
        border-color: rgba(16,185,129,0.3);
      }

      .tie-row {
        display: grid;
        grid-template-columns: 22px 1fr auto;
        align-items: center;
        gap: 10px;
        padding: 5px 0;
      }
      .tie-row + .tie-row {
        border-top: 1px solid var(--cl-divider);
      }
      .tie-row img {
        width: 22px; height: 22px;
        object-fit: contain;
      }
      .tie-row .tname {
        font-size: 13px;
        font-weight: 600;
        color: var(--cl-text);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        letter-spacing: -0.01em;
      }
      .tie-row.winner .tname { font-weight: 800; }
      .tie-row.loser .tname { color: var(--cl-text-2); }
      .tie-row.loser img { opacity: 0.55; }

      .legs {
        display: inline-flex;
        gap: 4px;
      }
      .leg {
        min-width: 22px;
        text-align: center;
        font-size: 13px;
        font-weight: 800;
        font-variant-numeric: tabular-nums;
        padding: 2px 6px;
        border-radius: 6px;
        background: rgba(255,255,255,0.06);
        color: var(--cl-text);
      }
      .tie-row.winner .leg {
        background: rgba(16,185,129,0.2);
        color: var(--cl-green);
      }
      .tie-row.loser .leg {
        opacity: 0.5;
      }

      .tie-foot {
        margin-top: 8px;
        padding-top: 8px;
        border-top: 1px dashed var(--cl-divider);
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 6px;
        flex-wrap: wrap;
      }
      .agg {
        font-size: 10px;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: var(--cl-green);
        padding: 2px 8px;
        background: rgba(16,185,129,0.12);
        border-radius: 6px;
      }
      .agg.tied {
        color: var(--cl-gold);
        background: rgba(251,191,36,0.12);
      }
      .date {
        font-size: 10px;
        font-weight: 700;
        color: var(--cl-text-2);
        text-transform: uppercase;
        letter-spacing: 0.06em;
      }
      .date.pending {
        color: var(--cl-accent);
      }
      .live-badge {
        display: inline-flex; align-items: center; gap: 5px;
        background: linear-gradient(135deg, var(--cl-live), #f97316);
        color: white;
        padding: 2px 8px;
        border-radius: 999px;
        font-size: 9px;
        font-weight: 800;
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }
      .live-badge .dot {
        width: 5px; height: 5px;
        border-radius: 50%;
        background: white;
        animation: dot-pulse 1.2s ease-in-out infinite;
      }
      @keyframes dot-pulse {
        0%, 100% { opacity: 1; transform: scale(1); }
        50% { opacity: 0.3; transform: scale(0.7); }
      }

      /* Compact mode (vertical, single column per round) */
      ha-card.compact .rounds-container {
        flex-direction: column;
        overflow-x: visible;
      }
      ha-card.compact .round {
        flex: none;
        min-width: 0;
      }

      @media (max-width: 600px) {
        ha-card.style-list .rounds-container {
          flex-direction: column;
        }
        ha-card.style-list .round {
          flex: none;
          min-width: 0;
        }
      }

      /* ============== STYLE: TREE ============== */
      .tree-wrap {
        position: relative;
        z-index: 1;
        overflow-x: auto;
        padding: 24px 12px 24px;
      }
      .tree {
        display: flex;
        align-items: stretch;
        justify-content: center;
        min-height: 480px;
        gap: 0;
      }
      .tree-half {
        flex: 1;
        display: flex;
        align-items: stretch;
        min-width: 0;
      }
      /* Niente row-reverse: per la "specularità" del lato destro renderizziamo
         direttamente i figli nell'ordine SF→QF→R16 (vedi _renderTree). */

      .tree-col {
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 0 6px;
        min-width: 110px;
        max-width: 140px;
      }
      .tree-col-label {
        text-align: center;
        padding: 4px 8px;
        background: rgba(var(--cl-accent-rgb),0.12);
        border-radius: 8px;
        margin-bottom: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1px;
      }
      .tree-col-label-en {
        font-size: 9px;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        color: var(--cl-accent);
        line-height: 1;
      }
      .tree-col-ties {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        gap: 6px;
        position: relative;
      }

      /* SVG bracket arrow connectors — colonne più larghe e con frecce sempre visibili */
      .tree-arrows {
        flex: 0 0 36px;
        min-width: 36px;
        display: flex;
        align-items: stretch;
        padding-top: 44px; /* compensa la label dei round */
        padding-bottom: 0;
      }
      .connector-svg {
        width: 100%;
        height: 100%;
        stroke: var(--cl-accent);
        stroke-width: 2;
        fill: none;
        overflow: visible;
        display: block;
      }
      .connector-svg .arrow-head {
        fill: var(--cl-accent);
        stroke: none;
      }

      /* Mini tie card */
      .mini-tie {
        background: var(--cl-bg);
        border: 1.5px solid var(--cl-accent);
        border-radius: 10px;
        padding: 7px 9px;
        display: flex;
        flex-direction: column;
        gap: 2px;
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        position: relative;
        box-shadow: 0 2px 8px rgba(var(--cl-accent-rgb),0.15);
      }
      .mini-tie:hover {
        border-color: var(--cl-accent);
        transform: scale(1.04);
        z-index: 5;
      }
      .mini-tie.live {
        border-color: var(--cl-live);
        box-shadow: 0 0 0 1px var(--cl-live), 0 0 16px var(--cl-live-glow);
        animation: tie-pulse 2s ease-in-out infinite;
      }
      .mini-tie.done {
        border-color: rgba(16,185,129,0.3);
      }
      .mini-tie.pending {
        opacity: 0.55;
        background: transparent;
        border-style: dashed;
      }
      .mini-team {
        display: grid;
        grid-template-columns: 18px 1fr auto;
        align-items: center;
        gap: 6px;
        padding: 2px 0;
      }
      .mini-team img {
        width: 18px; height: 18px;
        object-fit: contain;
      }
      .mini-team .logo-ph {
        width: 18px; height: 18px;
        border-radius: 50%;
        background: var(--cl-card-2);
      }
      .mini-team .abbr {
        font-size: 11px;
        font-weight: 700;
        color: var(--cl-text);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        letter-spacing: -0.01em;
      }
      .mini-team .agg-num {
        font-size: 12px;
        font-weight: 800;
        font-variant-numeric: tabular-nums;
        min-width: 14px;
        text-align: right;
        color: var(--cl-text-2);
      }
      .mini-team.winner .abbr {
        font-weight: 800;
      }
      .mini-team.winner .agg-num {
        color: var(--cl-green);
      }
      .mini-team.loser .abbr {
        color: var(--cl-text-2);
      }
      .mini-team.loser img {
        opacity: 0.5;
      }
      .mini-team.loser .agg-num {
        opacity: 0.55;
      }
      .mini-live {
        position: absolute;
        top: -3px; right: -3px;
        width: 10px; height: 10px;
      }
      .mini-live .dot {
        display: block;
        width: 10px; height: 10px;
        border-radius: 50%;
        background: var(--cl-live);
        box-shadow: 0 0 8px var(--cl-live-glow);
        animation: dot-pulse 1.2s ease-in-out infinite;
      }

      /* Tree center (trophy + final) */
      .tree-center {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 20px 16px;
        gap: 14px;
        min-width: 200px;
        flex: 0 0 200px;
        position: relative;
      }
      .tree-center::before {
        content: '';
        position: absolute;
        inset: 20% 8%;
        background:
          radial-gradient(circle at center, rgba(251,191,36,0.20), transparent 65%);
        pointer-events: none;
        border-radius: 50%;
      }
      .trophy {
        position: relative;
        font-size: 64px;
        line-height: 1;
        filter: drop-shadow(0 4px 24px rgba(251,191,36,0.7));
        animation: trophy-shine 4s ease-in-out infinite;
        z-index: 2;
      }
      @keyframes trophy-shine {
        0%, 100% { filter: drop-shadow(0 4px 24px rgba(251,191,36,0.7)); transform: scale(1); }
        50% { filter: drop-shadow(0 4px 36px rgba(251,191,36,1)) drop-shadow(0 0 12px #fbbf24); transform: scale(1.04); }
      }
      .trophy-label {
        position: relative;
        font-size: 12px;
        font-weight: 900;
        text-transform: uppercase;
        letter-spacing: 0.18em;
        background: linear-gradient(135deg, var(--cl-gold), #d97706);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        text-align: center;
        z-index: 2;
      }
      .final-tie-wrap {
        position: relative;
        width: 100%;
        max-width: 170px;
        z-index: 2;
      }
      .final-tie-wrap .mini-tie {
        background: linear-gradient(135deg, rgba(251,191,36,0.12), rgba(251,191,36,0.02));
        border-color: rgba(251,191,36,0.4);
        box-shadow: 0 4px 16px rgba(251,191,36,0.2);
      }
      .final-tie-wrap .mini-team.winner .agg-num {
        color: var(--cl-gold);
      }
      .final-placeholder {
        position: relative;
        font-size: 11px;
        font-weight: 800;
        color: var(--cl-text-2);
        padding: 8px 14px;
        background: var(--cl-card-2);
        border: 1px dashed var(--cl-glass-border);
        border-radius: 8px;
        letter-spacing: 0.1em;
      }

      /* Mobile per tree */
      @media (max-width: 720px) {
        ha-card.style-tree .tree-col {
          min-width: 100px;
        }
        ha-card.style-tree .tree-center {
          min-width: 140px;
        }
        ha-card.style-tree .trophy {
          font-size: 56px;
        }
      }
      @media (max-width: 520px) {
        ha-card.style-tree .tree {
          flex-direction: column;
          min-height: 0;
        }
        ha-card.style-tree .tree-half {
          flex-direction: row;
        }
        ha-card.style-tree .tree-half.right {
          flex-direction: row;
        }
        ha-card.style-tree .tree-center {
          order: -1;
          padding: 12px;
        }
      }
    `]}}),window.customCards=window.customCards||[],window.customCards.push({type:"soccer-live-bracket",name:"Soccer Live Bracket Card",description:"Knockout bracket for Champions League, Europa League, and other cup competitions"}),customElements.define("soccer-live-bracket-editor",class extends oe{static get properties(){return{_config:{type:Object},hass:{type:Object},entities:{type:Array}}}constructor(){super(),this.entities=[]}static get styles(){return s`
      .card-config { display: flex; flex-direction: column; gap: 16px; }
      .option { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
      label { font-size: 14px; color: var(--primary-text-color); }
      .field-label { display: block; font-size: 12px; color: var(--secondary-text-color); margin-bottom: 4px; font-weight: 600; }
      select {
        width: 100%; padding: 10px 12px; font-size: 14px;
        border-radius: 8px;
        border: 1px solid var(--divider-color, rgba(0,0,0,0.12));
        background: var(--card-background-color, #fff);
        color: var(--primary-text-color, #000);
        box-sizing: border-box;
      }
      h3 { margin: 8px 0 0; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; color: var(--secondary-text-color); }
      .hint { font-size: 12px; color: var(--secondary-text-color); }
    `}setConfig(e){if(!e)throw new Error("Invalid configuration");this._config={...e}}get config(){return this._config}updated(e){e.has("hass")&&this._fetchEntities()}_fireConfigChanged(e){this._config=e,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0})),this.requestUpdate()}_entityChanged(e){if(!this._config)return;const t=e.target.value;t!==this._config.entity&&this._fireConfigChanged({...this._config,entity:t})}_switchChanged(e){if(!this._config)return;const t=e.target;if(!t.dataset||!t.dataset.configValue)return;const a=t.dataset.configValue,i=t.checked;this._config[a]!==i&&this._fireConfigChanged({...this._config,[a]:i})}_selectChanged(e){if(!this._config)return;const t=e.target;if(!t.dataset||!t.dataset.configValue)return;const a=t.dataset.configValue,i=t.value;this._config[a]!==i&&this._fireConfigChanged({...this._config,[a]:i})}_fetchEntities(){this.hass&&(this.entities=Object.keys(this.hass.states).filter((e=>e.includes("soccerlive_bracket")||e.includes("soccer_live_bracket"))).sort())}render(){if(!this._config||!this.hass)return R``;const e=this._config.entity||"",t=e&&this.entities.includes(e);return R`
      <div class="card-config">
        <h3>Sensor</h3>
        <div>
          <label class="field-label">Entity (bracket sensor — soccer_live_bracket_*)</label>
          <select @change=${this._entityChanged}>
            ${t?"":R`<option value="${e}" selected>${e||"— select —"}</option>`}
            ${this.entities.map((t=>R`<option value="${t}" ?selected=${t===e}>${t}</option>`))}
          </select>
          <div class="hint" style="margin-top: 4px;">Available for Champions League, Europa League, Conference League, FIFA World Cup and other cup competitions.</div>
        </div>

        <h3>Settings</h3>
        <div>
          <label class="field-label">Style</label>
          <select data-config-value="style" @change=${this._selectChanged}>
            <option value="list" ?selected=${"tree"!==this._config.style}>List (default)</option>
            <option value="tree" ?selected=${"tree"===this._config.style}>Tree (bracket with central trophy)</option>
          </select>
        </div>
        <div class="option">
          <label>Hide Header</label>
          <ha-switch
            .checked=${!0===this._config.hide_header}
            data-config-value="hide_header"
            @change=${this._switchChanged}
          ></ha-switch>
        </div>
        <div class="option">
          <label>Compact (list mode: rounds stacked)</label>
          <ha-switch
            .checked=${!0===this._config.compact}
            data-config-value="compact"
            @change=${this._switchChanged}
          ></ha-switch>
        </div>
        <div class="option">
          <label>Tree: include Playoffs</label>
          <ha-switch
            .checked=${!0===this._config.tree_show_playoffs}
            data-config-value="tree_show_playoffs"
            @change=${this._switchChanged}
          ></ha-switch>
        </div>
        <div>
          <label class="field-label">Skin</label>
          <select data-config-value="skin" @change=${this._selectChanged}>
            <option value="dark"       ?selected=${"dark"===(this._config.skin||"dark")}>Dark (standaard)</option>
            <option value="light"      ?selected=${"light"===this._config.skin}>Light</option>
            <option value="red-white"  ?selected=${"red-white"===this._config.skin}>Red & White</option>
            <option value="classic"    ?selected=${"classic"===this._config.skin}>Classic (groen)</option>
            <option value="neon"       ?selected=${"neon"===this._config.skin}>Neon</option>
            <option value="gold"        ?selected=${"gold"===this._config.skin}>Gold</option>
            <option value="orange"     ?selected=${"orange"===this._config.skin}>Orange (Netherlands)</option>
            <option value="blue"       ?selected=${"blue"===this._config.skin}>Blue (Chelsea / PSG / Inter)</option>
            <option value="black-white" ?selected=${"black-white"===this._config.skin}>Black &amp; White (Juventus)</option>
            <option value="feyenoord"  ?selected=${"feyenoord"===this._config.skin}>Feyenoord (red/white)</option>
            <option value="arsenal"    ?selected=${"arsenal"===this._config.skin}>Arsenal</option>
            <option value="barcelona"  ?selected=${"barcelona"===this._config.skin}>Barcelona</option>
            <option value="real-madrid" ?selected=${"real-madrid"===this._config.skin}>Real Madrid</option>
          </select>
        </div>
        <div>
          <label class="field-label">Language</label>
          <select data-config-value="language" @change=${this._selectChanged}>
            <option value="" ?selected=${!this._config.language}>Auto (HA locale)</option>
            <option value="en" ?selected=${"en"===this._config.language}>English</option>
            <option value="it" ?selected=${"it"===this._config.language}>Italiano</option>
            <option value="fr" ?selected=${"fr"===this._config.language}>Français</option>
            <option value="es" ?selected=${"es"===this._config.language}>Español</option>
            <option value="nl" ?selected=${"nl"===this._config.language}>Nederlands</option>
            <option value="de" ?selected=${"de"===this._config.language}>Deutsch</option>
            <option value="pt" ?selected=${"pt"===this._config.language}>Português</option>
          </select>
        </div>
      </div>
    `}});const Me=["dark","light","red-white","classic","neon","gold"],je=["auto","en","nl","de","pt","fr","es","it"];customElements.define("soccer-live-scorers-editor",class extends oe{static get properties(){return{_config:{type:Object},hass:{type:Object},entities:{type:Array}}}constructor(){super(),this.entities=[]}static get styles(){return s`
      .card-config {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }
      .option {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
      }
      label {
        font-size: 14px;
        color: var(--primary-text-color);
      }
      .field-label {
        display: block;
        font-size: 12px;
        color: var(--secondary-text-color);
        margin-bottom: 4px;
        font-weight: 600;
      }
      select, input[type="number"] {
        width: 100%;
        padding: 10px 12px;
        font-size: 14px;
        border-radius: 8px;
        border: 1px solid var(--divider-color, rgba(0,0,0,0.12));
        background: var(--card-background-color, #fff);
        color: var(--primary-text-color, #000);
        box-sizing: border-box;
      }
      select:focus, input:focus {
        outline: 2px solid var(--primary-color, #03a9f4);
        outline-offset: -1px;
      }
      h3 {
        margin: 8px 0 0;
        font-size: 13px;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: var(--secondary-text-color);
      }
    `}setConfig(e){if(!e)throw new Error("Invalid configuration");this._config={...e}}updated(e){e.has("hass")&&this._fetchEntities()}_fetchEntities(){this.hass&&(this.entities=Object.keys(this.hass.states).filter((e=>e.includes("soccerlive_scorers")||e.includes("soccer_live_scorers"))).sort())}_fire(e){this._config=e,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0})),this.requestUpdate()}_entityChanged(e){const t=e.target.value;t!==this._config.entity&&this._fire({...this._config,entity:t})}_selectChanged(e){const{configValue:t}=e.target.dataset;if(!t)return;const a=e.target.value;this._config[t]!==a&&this._fire({...this._config,[t]:a})}_numberChanged(e){const{configValue:t}=e.target.dataset;if(!t)return;const a=parseInt(e.target.value,10);isNaN(a)||this._config[t]===a||this._fire({...this._config,[t]:a})}_switchChanged(e){const{configValue:t}=e.target.dataset;if(!t)return;const a=e.target.checked;this._config[t]!==a&&this._fire({...this._config,[t]:a})}render(){if(!this._config||!this.hass)return R``;const e=this._config.entity||"",t=e&&this.entities.includes(e);return R`
      <div class="card-config">
        <h3>Sensor</h3>
        <div>
          <label class="field-label">Entity</label>
          <select @change=${this._entityChanged}>
            ${t?"":R`<option value="${e}" selected>${e||"— select —"}</option>`}
            ${this.entities.map((t=>R`
              <option value="${t}" ?selected=${t===e}>${t}</option>
            `))}
          </select>
        </div>

        <h3>Settings</h3>
        <div>
          <label class="field-label">Max. items</label>
          <input type="number" min="1" max="25"
            .value=${this._config.max_items??10}
            data-config-value="max_items"
            @change=${this._numberChanged}>
        </div>

        <div class="option">
          <label>Hide header</label>
          <ha-switch
            .checked=${!0===this._config.hide_header}
            data-config-value="hide_header"
            @change=${this._switchChanged}>
          </ha-switch>
        </div>

        <h3>Appearance</h3>
        <div>
          <label class="field-label">Theme</label>
          <select data-config-value="skin" @change=${this._selectChanged}>
            ${Me.map((e=>R`
              <option value="${e}" ?selected=${(this._config.skin||"dark")===e}>${e}</option>
            `))}
          </select>
        </div>

        <div>
          <label class="field-label">Language</label>
          <select data-config-value="language" @change=${this._selectChanged}>
            ${je.map((e=>R`
              <option value="${"auto"===e?"":e}" ?selected=${(this._config.language||"")===("auto"===e?"":e)}>
                ${e}
              </option>
            `))}
          </select>
        </div>
      </div>
    `}}),customElements.define("soccer-live-mini-standings",class extends oe{static get properties(){return{hass:{},_config:{},_selectedGroup:{type:String}}}setConfig(e){if(!e.entity)throw new Error("Entity required");this._config=e,this._selectedGroup=e.default_group||null,me(this,e)}getCardSize(){return 3}_t(e,t){return pe(e,de(this.hass,this._config),t)}static getConfigElement(){return document.createElement("soccer-live-mini-standings-editor")}static getStubConfig(){return{entity:"sensor.soccer_live_standings_",max_rows:5}}_selectGroup(e){this._selectedGroup=e,this.requestUpdate()}static get styles(){return[he,s`
      ha-card {
        background: var(--cl-bg);
        color: var(--cl-text);
        padding: 12px;
        border-radius: 12px;
      }
      .header { display: flex; align-items: center; gap: 8px; margin-bottom: 8px; }
      .league-logo { width: 22px; height: 22px; object-fit: contain; }
      .title { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: var(--cl-text); flex: 1; }
      .groups { display: flex; flex-wrap: wrap; gap: 4px; margin-bottom: 8px; }
      .group-btn {
        font-size: 10px; font-weight: 700; padding: 3px 8px; border-radius: 99px; cursor: pointer;
        border: 1px solid var(--cl-divider); background: var(--cl-surface);
        color: var(--cl-text-2); white-space: nowrap;
      }
      .group-btn.active {
        background: var(--cl-accent); border-color: var(--cl-accent); color: #fff;
      }
      table { width: 100%; border-collapse: collapse; font-size: 12px; }
      th { color: var(--cl-text-2); font-weight: 600; padding: 2px 4px; text-align: center; font-size: 11px; }
      th.left { text-align: left; }
      td { padding: 5px 4px; text-align: center; color: var(--cl-text); border-top: 1px solid var(--cl-divider); }
      td.left { text-align: left; }
      .team-row { display: flex; align-items: center; gap: 6px; }
      .team-logo { width: 16px; height: 16px; object-fit: contain; }
      .team-name { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 110px; }
      .hl td { background: rgba(var(--cl-accent-rgb), 0.2) !important; }
      .pos { width: 22px; font-weight: 700; color: var(--cl-text-2); }
      .pts { font-weight: 700; color: var(--cl-accent); }
      .empty { padding: 16px; text-align: center; color: var(--cl-text-2); font-size: 13px; }
    `]}render(){if(!this.hass||!this._config)return R``;const e=this.hass.states[this._config.entity];if(!e)return Ae("⚠️","Entity not found",`Unable to find: ${this._config.entity}`,"Check the entity configuration");const t=e.attributes.standings_groups||[];if(!t.length)return Ae("⚽","No standings data","Unable to fetch league standings","Check if the league has started");const a=t.find((e=>e.name===this._selectedGroup))||t[0];let i=a&&a.standings||[];i=i.sort(((e,t)=>{const a=parseInt(e.pts||e.points||0),i=parseInt(t.pts||t.points||0);if(a!==i)return i-a;const n=parseInt(e.W||e.wins||0),s=parseInt(t.W||t.wins||0);if(n!==s)return s-n;const o=parseInt(e.GD||e.goal_difference||0);return parseInt(t.GD||t.goal_difference||0)-o}));const n=this._config.max_rows||i.length,s=(this._config.highlight_team||"").toLowerCase(),o=e.attributes.league_name||e.attributes.league_abbreviation||"",r=e.attributes.league_logo||"",l=i.slice(0,n),c=t.length>1;return R`
      <ha-card>
        ${this._config.hide_header?"":R`
          <div class="header">
            ${r?R`<img class="league-logo" src="${r}" alt="">`:""}
            <span class="title">${a&&c?a.name:o}</span>
          </div>
        `}

        ${c?R`
          <div class="groups">
            ${t.map((e=>R`
              <span
                class="group-btn ${e.name===a.name?"active":""}"
                @click=${()=>this._selectGroup(e.name)}>
                ${e.name}
              </span>
            `))}
          </div>
        `:""}

        <table>
          <tr>
            <th class="left" style="width:22px">#</th>
            <th class="left">Team</th>
            <th>P</th>
            ${this._config.hide_stats?"":R`<th>W</th><th>D</th><th>L</th><th>GD</th>`}
            <th>Pts</th>
          </tr>
          ${l.map((e=>{const t=s&&e.team_name&&e.team_name.toLowerCase().includes(s),a=(parseInt(e.wins)||0)+(parseInt(e.draws)||0)+(parseInt(e.losses)||0),i=parseInt(e.goal_difference)||0,n=i>0?`+${i}`:`${i}`;return R`
              <tr class="${t?"hl":""}">
                <td class="pos">${e.rank??""}</td>
                <td class="left">
                  <div class="team-row">
                    ${e.team_logo?R`<img class="team-logo" src="${e.team_logo}" alt="" @error=${e=>e.target.style.display="none"}>`:""}
                    <span class="team-name">${e.team_name||""}</span>
                  </div>
                </td>
                <td>${a||0}</td>
                ${this._config.hide_stats?"":R`<td>${e.wins??0}</td><td>${e.draws??0}</td><td>${e.losses??0}</td><td>${null!=e.goal_difference?n:0}</td>`}
                <td class="pts">${e.points??0}</td>
              </tr>
            `}))}
        </table>
      </ha-card>
    `}}),window.customCards=window.customCards||[],window.customCards.push({type:"soccer-live-mini-standings",name:"Soccer Live Mini Standings",description:"Compact standings table with group selector"});const De=["dark","light","red-white","classic","neon","gold"],Ve=["auto","en","nl","de","pt","fr","es","it"];customElements.define("soccer-live-mini-standings-editor",class extends oe{static get properties(){return{_config:{type:Object},hass:{type:Object},entities:{type:Array}}}constructor(){super(),this.entities=[]}static get styles(){return[_e,s``]}setConfig(e){this._config={...e}}updated(e){e.has("hass")&&this._fetchEntities()}_fetchEntities(){this.hass&&(this.entities=Object.keys(this.hass.states).filter((e=>e.includes("soccerlive_standings")||e.includes("soccer_live_standings"))).sort())}_fire(e){this._config=e,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0})),this.requestUpdate()}_entityChanged(e){this._fire({...this._config,entity:e.target.value})}_selectChanged(e){this._fire({...this._config,[e.target.dataset.configValue]:e.target.value})}_numberChanged(e){const t=parseInt(e.target.value,10);isNaN(t)||this._fire({...this._config,[e.target.dataset.configValue]:t})}_switchChanged(e){this._fire({...this._config,[e.target.dataset.configValue]:e.target.checked})}_textChanged(e){this._fire({...this._config,[e.target.dataset.configValue]:e.target.value})}render(){if(!this._config||!this.hass)return R``;const e=this._config.entity||"",t=e&&this.entities.includes(e);return R`
      <div class="card-config">
        <h3>Sensor</h3>
        <div>
          <label class="field-label">Standings entity</label>
          <select @change=${this._entityChanged}>
            ${t?"":R`<option value="${e}" selected>${e||"— select —"}</option>`}
            ${this.entities.map((t=>R`<option value="${t}" ?selected=${t===e}>${t}</option>`))}
          </select>
        </div>
        <h3>Settings</h3>
        <div>
          <label class="field-label">Default group (optional, e.g. "Group A")</label>
          <input type="text" .value=${this._config.default_group||""} data-config-value="default_group" @input=${this._textChanged} placeholder="Leave empty for first group">
        </div>
        <div>
          <label class="field-label">Max rows (default all)</label>
          <input type="number" min="1" max="20" .value=${this._config.max_rows??5} data-config-value="max_rows" @change=${this._numberChanged}>
        </div>
        <div>
          <label class="field-label">Highlight team (partial name)</label>
          <input type="text" .value=${this._config.highlight_team||""} data-config-value="highlight_team" @input=${this._textChanged}>
        </div>
        <div class="option">
          <label>Hide W/D/L/GD columns</label>
          <ha-switch .checked=${!0===this._config.hide_stats} data-config-value="hide_stats" @change=${this._switchChanged}></ha-switch>
        </div>
        <div class="option">
          <label>Hide header</label>
          <ha-switch .checked=${!0===this._config.hide_header} data-config-value="hide_header" @change=${this._switchChanged}></ha-switch>
        </div>
        <h3>Appearance</h3>
        <div>
          <label class="field-label">Theme</label>
          <select data-config-value="skin" @change=${this._selectChanged}>
            ${De.map((e=>R`<option value="${e}" ?selected=${(this._config.skin||"dark")===e}>${e}</option>`))}
          </select>
        </div>
        <div>
          <label class="field-label">Language</label>
          <select data-config-value="language" @change=${this._selectChanged}>
            ${Ve.map((e=>R`<option value="${"auto"===e?"":e}" ?selected=${(this._config.language||"")===("auto"===e?"":e)}>${e}</option>`))}
          </select>
        </div>
      </div>
    `}}),customElements.define("soccer-live-countdown",class extends oe{static get properties(){return{hass:{},_config:{},_isLoading:{type:Boolean},_now:{},_weatherBadge:{},_cachedData:{}}}setConfig(e){if(!e.entity)throw new Error("Entity required");this._config=e,me(this,e),this._isLoading=!0,this._loadingStarted=Date.now(),this._lastWeatherVenue=null}connectedCallback(){super.connectedCallback(),this._now=new Date,this._timer=setInterval((()=>{this._now=new Date,this.requestUpdate()}),1e3),this._loadWeather()}updated(e){if(e.has("hass")){const e=this.hass?.states[this._config?.entity];e&&"unavailable"!==e.state&&(this._isLoading=!1,Pe.set(this._config.entity,e.attributes))}if(e.has("hass")||e.has("_config")){const e=this.hass?.states[this._config?.entity],t=e?.attributes?.matches?.[0]?.venue;t&&t!==this._lastWeatherVenue&&this._loadWeather()}}async _loadWeather(){if(!this.hass||!this._config)return;const e=this.hass.states[this._config.entity],t=e&&"unavailable"!==e.state?e.attributes:this._cachedData;if(!t?.matches)return;const a=t.matches[0];if(a&&a.venue){this._lastWeatherVenue=a.venue;try{this._weatherBadge=await ze(a.venue,this.hass,this._config,a.venue_lat,a.venue_lon),this.requestUpdate()}catch(e){console.warn("Weather load failed:",e)}}}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this._timer)}getCardSize(){return 3}_t(e,t){return pe(e,de(this.hass,this._config),t)}static getConfigElement(){return document.createElement("soccer-live-countdown-editor")}static getStubConfig(){return{entity:"sensor.soccer_live_next_"}}_parseDate(e){if(!e||"N/A"===e)return null;try{const[t,a]=e.split(" "),i=t.split(/[-\/]/).map(Number),[n,s]=(a||"00:00").split(":").map(Number);if(3===i.length){const[e,t,a]=i;return new Date(a,t-1,e,n,s)}}catch(e){}return null}_getNextMatch(e){const t=e.attributes.matches||[];return t.find((e=>"pre"===e.state))||t.find((e=>"in"===e.state))||t.find((e=>"post"===e.state))||t[0]||null}_countdown(e){const t=this._parseDate(e);if(!t)return null;const a=t-(this._now||new Date);return a<=0?null:{days:Math.floor(a/864e5),hours:Math.floor(a%864e5/36e5),mins:Math.floor(a%36e5/6e4),secs:Math.floor(a%6e4/1e3)}}static get styles(){return[he,Se,Ce,s`
      ha-card {
        background: var(--cl-bg);
        color: var(--cl-text);
        padding: 16px;
        border-radius: 12px;
      }
      .header { display: flex; align-items: center; justify-content: center; gap: 6px; margin-bottom: 14px; }
      .comp-logo { width: 18px; height: 18px; object-fit: contain; }
      .comp-name { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: var(--cl-text-2); }
      .teams { display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px; }
      .team { display: flex; flex-direction: column; align-items: center; gap: 8px; flex: 1; }
      .team-logo { width: 52px; height: 52px; object-fit: contain; }
      .team-name { font-size: 13px; font-weight: 700; text-align: center; color: var(--cl-text); }
      .center { text-align: center; flex: 0 0 auto; padding: 0 8px; }
      .live-badge { display: inline-block; background: var(--cl-live); color: #fff; font-size: 10px; font-weight: 700; padding: 2px 10px; border-radius: 99px; margin-bottom: 4px; }
      .ft-badge { font-size: 11px; color: var(--cl-text-2); margin-bottom: 4px; }
      .score { font-size: 42px; font-weight: 900; letter-spacing: 6px; color: var(--cl-text); line-height: 1; }
      .minute { font-size: 12px; color: var(--cl-text-2); margin-top: 2px; }
      .sched-date { font-size: 11px; color: var(--cl-text-2); margin-bottom: 6px; }
      .countdown { display: flex; justify-content: center; gap: 8px; }
      .cd-block { display: flex; flex-direction: column; align-items: center; min-width: 38px; }
      .cd-num { font-size: 30px; font-weight: 900; color: var(--cl-accent); line-height: 1; }
      .cd-label { font-size: 9px; color: var(--cl-text-2); text-transform: uppercase; letter-spacing: 0.05em; margin-top: 2px; }
      .cd-sep { font-size: 26px; font-weight: 900; color: var(--cl-text-2); align-self: flex-start; padding-top: 2px; }
      .vs-text { font-size: 20px; font-weight: 900; color: var(--cl-text-2); }
      .meta { display: flex; align-items: center; justify-content: center; gap: 6px; margin-top: 12px; font-size: 11px; color: var(--cl-text-2); }
      .empty { padding: 16px; text-align: center; color: var(--cl-text-2); }

      @media (max-width: 600px) {
        ha-card { padding: 12px !important; }
        .team-logo { width: 40px !important; height: 40px !important; }
        .team-name { font-size: 12px !important; }
        .score { font-size: 32px !important; letter-spacing: 4px !important; }
        .vs-text { font-size: 16px !important; }
        .cd-num { font-size: 24px !important; }
        .cd-label { font-size: 8px !important; }
        .cd-sep { font-size: 20px !important; }
        .sched-date { font-size: 10px !important; }
        .meta { font-size: 10px !important; padding: 10px 12px !important; gap: 4px !important; }
        .comp-name { font-size: 10px !important; }
      }

      @media (max-width: 400px) {
        .score { font-size: 28px !important; letter-spacing: 2px !important; }
        .countdown { gap: 4px !important; }
        .cd-num { font-size: 20px !important; min-width: 32px !important; }
        .team-name { font-size: 11px !important; }
      }
    `]}render(){if(!this.hass||!this._config)return Ee("Loading...");const e=this.hass.states[this._config.entity];if(!e)return Pe.get(this._config.entity)?Ae("⏱","Offline - showing cached data","Last update: "+(new Date).toLocaleTimeString(),"Waiting for integration to come online"):Ae("⚠️","Entity not found",`Unable to find: ${this._config.entity}`,"Check the entity configuration");if("unavailable"===e.state){const e=Pe.get(this._config.entity);if(!e)return Ae("📡","Sensor unavailable","The integration may not be running","Restart Home Assistant or check the integration");this._cachedData=e.data}if(this._isLoading)return Date.now()-this._loadingStarted>1e4?Ae("⏱",this._t("ui.loading_timeout"),`${this._t("ui.entity_not_responding")}: ${this._config.entity}`,this._t("ui.check_integration")):Ee(this._t("ui.loading"));const t=e&&"unavailable"!==e.state?e.attributes:this._cachedData,a=this._getNextMatch({attributes:t});if(!a)return Te("📅",this._t("ui.off_season"),this._t("ui.off_season_hint"));const i="in"===a.state,n="post"===a.state,s=i||n?null:this._countdown(a.date),o=a.competition_name||t?.league_name||"",r=a.competition_logo||t?.league_logo||"",l=a.venue&&"N/A"!==a.venue?a.venue:"",c=a.venue_city&&"N/A"!==a.venue_city?a.venue_city:"",d=Array.isArray(a.broadcasts)&&a.broadcasts.length?a.broadcasts:a.broadcast&&"N/A"!==a.broadcast?[a.broadcast]:[],p=a.neutral_site||!1,h=this._t("cd.days")||"days",g=this._t("cd.hrs")||"hrs",u=this._t("cd.min")||"min",m=this._t("cd.sec")||"sec";return R`
      <ha-card>
        ${!this._config.hide_header&&o?R`
          <div class="header">
            ${r?R`<img class="comp-logo" src="${r}" alt="">`:""}
            <span class="comp-name">${o}</span>
          </div>
        `:""}

        <div class="teams">
          <div class="team">
            ${a.home_logo?R`<img class="team-logo" src="${a.home_logo}" alt="" @error=${e=>e.target.style.display="none"}>`:""}
            <span class="team-name">${a.home_team||"?"}</span>
          </div>

          <div class="center">
            ${i?R`
              <div class="live-badge">LIVE</div>
              <div class="score">${a.home_score??0} - ${a.away_score??0}</div>
              ${a.clock?R`<div class="minute">${a.clock}</div>`:""}
            `:n?R`
              <div class="ft-badge">${this._t("status.full_time")}</div>
              <div class="score">${a.home_score??0} - ${a.away_score??0}</div>
            `:s?R`
              ${a.date?R`<div class="sched-date">${a.date}</div>`:""}
              <div class="countdown">
                ${s.days>0?R`
                  <div class="cd-block"><span class="cd-num">${s.days}</span><span class="cd-label">${h}</span></div>
                  <span class="cd-sep">:</span>
                `:""}
                <div class="cd-block"><span class="cd-num">${String(s.hours).padStart(2,"0")}</span><span class="cd-label">${g}</span></div>
                <span class="cd-sep">:</span>
                <div class="cd-block"><span class="cd-num">${String(s.mins).padStart(2,"0")}</span><span class="cd-label">${u}</span></div>
                <span class="cd-sep">:</span>
                <div class="cd-block"><span class="cd-num">${String(s.secs).padStart(2,"0")}</span><span class="cd-label">${m}</span></div>
              </div>
            `:R`
              ${a.date?R`<div class="sched-date">${a.date}</div>`:""}
              <div class="vs-text">${this._t("match.vs")}</div>
            `}
          </div>

          <div class="team">
            ${a.away_logo?R`<img class="team-logo" src="${a.away_logo}" alt="" @error=${e=>e.target.style.display="none"}>`:""}
            <span class="team-name">${a.away_team||"?"}</span>
          </div>
        </div>

        ${l||d.length?R`
          <div class="meta">
            <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
              ${l?R`<span>🏟 ${l}${c?`, ${c}`:""}${p?" ⚖️":""}</span>`:""}
              ${d.length?R`<span style="color:var(--cl-accent);">📺 ${d.join(" · ")}</span>`:""}
              ${this._weatherBadge?this._weatherBadge:""}
            </div>
          </div>
        `:""}
      </ha-card>
    `}}),window.customCards=window.customCards||[],window.customCards.push({type:"soccer-live-countdown",name:"Soccer Live Match Countdown",description:"Countdown to next match with live score"});const Oe=["dark","light","red-white","classic","neon","gold"],He=["auto","en","nl","de","pt","fr","es","it"];customElements.define("soccer-live-countdown-editor",class extends oe{static get properties(){return{_config:{type:Object},hass:{type:Object},entities:{type:Array}}}constructor(){super(),this.entities=[]}static get styles(){return[_e,s`
      .card-config { display: flex; flex-direction: column; gap: 16px; }
      .option { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
      label { font-size: 14px; color: var(--primary-text-color); }
      .field-label { display: block; font-size: 12px; color: var(--secondary-text-color); margin-bottom: 4px; font-weight: 600; }
      select, input { width: 100%; padding: 10px 12px; font-size: 14px; border-radius: 8px; border: 1px solid var(--divider-color, rgba(0,0,0,0.12)); background: var(--card-background-color, #fff); color: var(--primary-text-color, #000); box-sizing: border-box; }
      h3 { margin: 8px 0 0; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; color: var(--secondary-text-color); }
    `]}setConfig(e){this._config={...e}}updated(e){e.has("hass")&&this._fetchEntities()}_fetchEntities(){this.hass&&(this.entities=Object.keys(this.hass.states).filter((e=>e.includes("soccerlive_next")||e.includes("soccer_live_next"))).sort())}_fire(e){this._config=e,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0})),this.requestUpdate()}_entityChanged(e){this._fire({...this._config,entity:e.target.value})}_selectChanged(e){this._fire({...this._config,[e.target.dataset.configValue]:e.target.value})}_switchChanged(e){this._fire({...this._config,[e.target.dataset.configValue]:e.target.checked})}render(){if(!this._config||!this.hass)return R``;const e=this._config.entity||"",t=e&&this.entities.includes(e);return R`
      <div class="card-config">
        <h3>Sensor</h3>
        <div>
          <label class="field-label">Team match entity (soccer_live_next_*)</label>
          <select @change=${this._entityChanged}>
            ${t?"":R`<option value="${e}" selected>${e||"— select —"}</option>`}
            ${this.entities.map((t=>R`<option value="${t}" ?selected=${t===e}>${t}</option>`))}
          </select>
        </div>
        <h3>Settings</h3>
        <div class="option">
          <label>Hide header</label>
          <ha-switch .checked=${!0===this._config.hide_header} data-config-value="hide_header" @change=${this._switchChanged}></ha-switch>
        </div>
        <h3>Appearance</h3>
        <div>
          <label class="field-label">Theme</label>
          <select data-config-value="skin" @change=${this._selectChanged}>
            ${Oe.map((e=>R`<option value="${e}" ?selected=${(this._config.skin||"dark")===e}>${e}</option>`))}
          </select>
        </div>
        <div>
          <label class="field-label">Language</label>
          <select data-config-value="language" @change=${this._selectChanged}>
            ${He.map((e=>R`<option value="${"auto"===e?"":e}" ?selected=${(this._config.language||"")===("auto"===e?"":e)}>${e}</option>`))}
          </select>
        </div>
      </div>
    `}}),customElements.define("soccer-live-live-match",class extends oe{static get properties(){return{hass:{},_config:{},_isLoading:{type:Boolean},_cachedData:{}}}constructor(){super(),this._isLoading=!0,this._loadingStarted=Date.now()}connectedCallback(){super.connectedCallback(),this._loadingTimer=setTimeout((()=>this.requestUpdate()),1e4)}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this._loadingTimer)}setConfig(e){if(!e.entity)throw new Error("Entity required");this._config=e,me(this,e)}getCardSize(){return 5}_t(e,t){return pe(e,de(this.hass,this._config),t)}static getConfigElement(){return document.createElement("soccer-live-live-match-editor")}static getStubConfig(){return{entity:"sensor.soccer_live_next_"}}_getMatch(e){const t=e.attributes.matches||[];return t.find((e=>"in"===e.state||"live"===e.status))||t.find((e=>"pre"===e.state||"scheduled"===e.status))||t.find((e=>"post"===e.state))||t[0]||null}_eventIcon(e){if(!e)return"📋";const t=(e||"").toLowerCase();return t.includes("goal")||t.includes("score")?"⚽":t.includes("yellow")?"🟨":t.includes("red")?"🟥":t.includes("sub")||t.includes("substitut")?"🔄":t.includes("pen")?"⚽🎯":"📋"}static get styles(){return[he,Se,s`
      ha-card { background: var(--cl-bg); color: var(--cl-text); padding: 0; overflow: hidden; border-radius: 12px; }
      .hero { position: relative; padding: 20px 16px 16px; }
      .bg-logo { position: absolute; opacity: 0.06; width: 110px; height: 110px; object-fit: contain; top: 0; }
      .bg-logo.home { left: -10px; }
      .bg-logo.away { right: -10px; }
      .comp-row { display: flex; align-items: center; justify-content: center; gap: 6px; margin-bottom: 14px; }
      .comp-logo { width: 16px; height: 16px; object-fit: contain; }
      .comp-name { font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--cl-text-2); font-weight: 600; }
      .teams-row { display: flex; align-items: center; justify-content: space-between; }
      .team { display: flex; flex-direction: column; align-items: center; gap: 8px; flex: 1; }
      .team-logo { width: 54px; height: 54px; object-fit: contain; }
      .team-name { font-size: 13px; font-weight: 700; text-align: center; max-width: 100px; color: var(--cl-text); }
      .score-center { text-align: center; flex: 0 0 auto; padding: 0 8px; }
      .live-badge { display: inline-block; background: #e53935; color: #fff; font-size: 10px; font-weight: 700; padding: 2px 10px; border-radius: 99px; margin-bottom: 4px; }
      .sched-info { font-size: 11px; color: var(--cl-text-2); margin-bottom: 4px; }
      .score { font-size: 44px; font-weight: 900; letter-spacing: 6px; color: var(--cl-text); line-height: 1; }
      .vs-text { font-size: 24px; font-weight: 900; color: var(--cl-text-2); padding: 8px 0; }
      .minute { font-size: 12px; color: var(--cl-text-2); margin-top: 4px; }
      .divider { height: 1px; background: var(--divider-color, var(--cl-divider)); margin: 0 16px; }
      .events { padding: 12px 16px; max-height: 220px; overflow-y: auto; }
      .event-row { display: flex; align-items: center; gap: 8px; padding: 5px 0; font-size: 12px; border-bottom: 1px solid var(--divider-color, var(--cl-divider)); }
      .event-row:last-child { border-bottom: none; }
      .event-min { font-weight: 700; color: var(--cl-text-2); min-width: 32px; font-size: 11px; }
      .event-icon { font-size: 14px; min-width: 20px; text-align: center; }
      .event-text { flex: 1; color: var(--cl-text); }
      .event-team { font-size: 10px; color: var(--cl-text-2); }
      .no-events { text-align: center; color: var(--cl-text-2); font-size: 12px; padding: 10px 0; }
      .meta { display: flex; align-items: center; justify-content: center; gap: 6px; padding: 10px 16px; font-size: 11px; color: var(--cl-text-2); }
      .empty { padding: 20px; text-align: center; color: var(--cl-text-2); }
      .stats-row { display: flex; align-items: center; padding: 5px 16px; font-size: 11px; gap: 6px; }
      .stat-val { font-weight: 700; min-width: 32px; text-align: center; color: var(--cl-text); }
      .stat-center { flex: 1; display: flex; flex-direction: column; gap: 3px; }
      .stat-label { text-align: center; color: var(--cl-text-2); font-size: 10px; }
      .stat-bars { display: flex; gap: 2px; height: 4px; border-radius: 2px; overflow: hidden; }
      .stat-bar.home { background: var(--cl-accent); border-radius: 2px 0 0 2px; }
      .stat-bar.away { background: var(--cl-text-2); opacity: 0.4; border-radius: 0 2px 2px 0; }

      @media (max-width: 600px) {
        .hero { padding: 14px 10px 12px !important; }
        .team-logo { width: 40px !important; height: 40px !important; }
        .team-name { font-size: 12px !important; }
        .score { font-size: 32px !important; letter-spacing: 4px !important; }
        .vs-text { font-size: 18px !important; }
        .minute { font-size: 11px !important; }
        .event-row { padding: 4px 0 !important; font-size: 11px !important; }
        .event-min { font-size: 10px !important; }
        .event-icon { font-size: 12px !important; }
        .stat-val { font-size: 10px !important; min-width: 22px !important; }
        .stat-label { font-size: 9px !important; }
        .meta { font-size: 10px !important; padding: 8px 12px !important; }
      }

      @media (max-width: 400px) {
        .score { font-size: 28px !important; letter-spacing: 2px !important; }
        .team-name { font-size: 11px !important; max-width: 65px !important; }
      }
    `]}updated(e){if(e.has("hass")){const e=this.hass?.states[this._config?.entity];e&&"unavailable"!==e.state&&(this._isLoading=!1,Pe.set(this._config.entity,e.attributes))}}render(){if(!this.hass||!this._config)return Ee("Loading...");const e=this.hass.states[this._config.entity];if(!e)return Pe.get(this._config.entity)?Ae("⏱","Offline - showing cached data","Last update: "+(new Date).toLocaleTimeString(),"Waiting for integration"):Ae("⚠️","Entity not found",`Unable to find: ${this._config.entity}`,"Check the entity configuration");if("unavailable"===e.state){const e=Pe.get(this._config.entity);if(!e||!e.data.matches)return Ae("📡","Sensor unavailable","The integration may not be running","Restart Home Assistant or check the integration");this._cachedData=e.data}if(this._isLoading)return Date.now()-this._loadingStarted>1e4?Ae("⏱",this._t("ui.loading_timeout"),`${this._t("ui.entity_not_responding")}: ${this._config.entity}`,this._t("ui.check_integration")):Ee(this._t("ui.loading"));const t=e&&"unavailable"!==e.state?e.attributes:this._cachedData,a=t?.matches||[],i=this._getMatch({attributes:t});if(!i)return a.length?Te("⚽",this._t("ui.no_live_match"),this._t("ui.no_live_match_hint")):Te("📅",this._t("ui.off_season"),this._t("ui.off_season_hint"));const n="in"===i.state||"live"===i.status,s="post"===i.state,o=("pre"===i.state||i.status,i.key_events||i.events||i.match_events||[]),r=i.competition_name||t?.league_name||"",l=i.competition_logo||t?.league_logo||"",c=(Array.isArray(i.broadcasts)&&i.broadcasts.length?i.broadcasts:i.broadcast&&"N/A"!==i.broadcast&&i.broadcast,i.neutral_site,i.venue&&"N/A"!==i.venue?i.venue:""),d=i.venue_city&&"N/A"!==i.venue_city?i.venue_city:"";let p=i.stats||[];if(!p.length&&i.home_statistics&&"object"==typeof i.home_statistics){const e=i.home_statistics,t=i.away_statistics||{};p=Object.entries(e).filter((e=>{let[t]=e;return"Unknown"!==t})).map((e=>{let[a,i]=e;return{label:a,home:i,away:t[a]??"N/A"}}))}return R`
      <ha-card>
        <div class="hero">
          ${i.home_logo?R`<img class="bg-logo home" src="${i.home_logo}" alt="">`:""}
          ${i.away_logo?R`<img class="bg-logo away" src="${i.away_logo}" alt="">`:""}

          ${r?R`
            <div class="comp-row">
              ${l?R`<img class="comp-logo" src="${l}" alt="">`:""}
              <span class="comp-name">${r}</span>
            </div>
          `:""}

          <div class="teams-row">
            <div class="team">
              ${i.home_logo?R`<img class="team-logo" src="${i.home_logo}" alt="" @error=${e=>e.target.style.display="none"}>`:""}
              <span class="team-name">${i.home_team||"?"}</span>
            </div>

            <div class="score-center">
              ${n?R`<div class="live-badge">LIVE</div>`:s?R`<div class="sched-info">FT</div>`:R`<div class="sched-info">${i.date||this._t("match.vs")}</div>`}
              ${n||s?R`<div class="score">${i.home_score??0} - ${i.away_score??0}</div>`:R`<div class="vs-text">${this._t("match.vs")}</div>`}
              ${n&&i.clock?R`<div class="minute">${i.clock}</div>`:""}
            </div>

            <div class="team">
              ${i.away_logo?R`<img class="team-logo" src="${i.away_logo}" alt="" @error=${e=>e.target.style.display="none"}>`:""}
              <span class="team-name">${i.away_team||"?"}</span>
            </div>
          </div>
        </div>

        ${o.length>0?R`
          <div class="divider"></div>
          <div class="events">
            ${o.map((e=>R`
              <div class="event-row">
                <span class="event-min">${e.clock||e.minute?`${e.clock||e.minute}'`:""}</span>
                <span class="event-icon">${this._eventIcon(e.type)}</span>
                <div class="event-text">
                  <div>${e.player_name||e.player||e.text||e.description||""}</div>
                  ${e.team?R`<div class="event-team">${e.team}</div>`:""}
                </div>
              </div>
            `))}
          </div>
        `:n?R`
          <div class="divider"></div>
          <div class="events"><div class="no-events">${this._t("popup.no_events")}</div></div>
        `:""}

        ${p.length>0?R`
          <div class="divider"></div>
          ${p.map((e=>{const t=String(e.home??e.homeValue??""),a=String(e.away??e.awayValue??""),i=parseFloat(t)||0,n=i+(parseFloat(a)||0),s=n>0?Math.round(i/n*100):50;return R`
              <div class="stats-row">
                <span class="stat-val">${t}</span>
                <div class="stat-center">
                  <div class="stat-label">${e.label||e.name||e.type||""}</div>
                  <div class="stat-bars">
                    <div class="stat-bar home" style="width:${s}%"></div>
                    <div class="stat-bar away" style="width:${100-s}%"></div>
                  </div>
                </div>
                <span class="stat-val">${a}</span>
              </div>
            `}))}
        `:""}

        ${c?R`
          <div class="divider"></div>
          <div class="meta">🏟 ${c}${d?`, ${d}`:""}</div>
        `:""}
      </ha-card>
    `}}),window.customCards=window.customCards||[],window.customCards.push({type:"soccer-live-live-match",name:"Soccer Live Match Card",description:"Live match details with events and stats"});const Ie=["dark","light","red-white","classic","neon","gold"],Fe=["auto","en","nl","de","pt","fr","es","it"];customElements.define("soccer-live-live-match-editor",class extends oe{static get properties(){return{_config:{type:Object},hass:{type:Object},entities:{type:Array}}}constructor(){super(),this.entities=[]}static get styles(){return[_e,s``]}setConfig(e){this._config={...e}}updated(e){e.has("hass")&&this._fetchEntities()}_fetchEntities(){this.hass&&(this.entities=Object.keys(this.hass.states).filter((e=>e.includes("soccerlive_next")||e.includes("soccer_live_next")||e.includes("soccerlive_all")||e.includes("soccer_live_all"))).sort())}_fire(e){this._config=e,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0})),this.requestUpdate()}_entityChanged(e){this._fire({...this._config,entity:e.target.value})}_selectChanged(e){this._fire({...this._config,[e.target.dataset.configValue]:e.target.value})}_numberChanged(e){const t=parseInt(e.target.value,10);isNaN(t)||this._fire({...this._config,[e.target.dataset.configValue]:t})}render(){if(!this._config||!this.hass)return R``;const e=this._config.entity||"",t=e&&this.entities.includes(e);return R`
      <div class="card-config">
        <h3>Sensor</h3>
        <div>
          <label class="field-label">Team sensor</label>
          <select @change=${this._entityChanged}>
            ${t?"":R`<option value="${e}" selected>${e||"— select —"}</option>`}
            ${this.entities.map((t=>R`<option value="${t}" ?selected=${t===e}>${t}</option>`))}
          </select>
        </div>
        <h3>Settings</h3>
        <div>
          <label class="field-label">Max stats shown (default 4)</label>
          <input type="number" min="0" max="10" .value=${this._config.max_stats??4} data-config-value="max_stats" @change=${this._numberChanged}>
        </div>
        <h3>Appearance</h3>
        <div>
          <label class="field-label">Theme</label>
          <select data-config-value="skin" @change=${this._selectChanged}>
            ${Ie.map((e=>R`<option value="${e}" ?selected=${(this._config.skin||"dark")===e}>${e}</option>`))}
          </select>
        </div>
        <div>
          <label class="field-label">Language</label>
          <select data-config-value="language" @change=${this._selectChanged}>
            ${Fe.map((e=>R`<option value="${"auto"===e?"":e}" ?selected=${(this._config.language||"")===("auto"===e?"":e)}>${e}</option>`))}
          </select>
        </div>
      </div>
    `}}),customElements.define("soccer-live-multi-team",class extends oe{static get properties(){return{hass:{},_config:{},_isLoading:{type:Boolean},_cachedData:{}}}setConfig(e){if(!e.entities||!e.entities.length)throw new Error("At least one entity required");this._config=e,me(this,e),this._isLoading=!0,this._loadingStarted=Date.now(),this._lastWeatherVenue=null}connectedCallback(){super.connectedCallback(),this._loadingTimer=setTimeout((()=>this.requestUpdate()),1e4)}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this._loadingTimer)}updated(e){if(e.has("hass")){const e=this._config?.entities||[],t=e.every((e=>{const t=this.hass?.states[e];return t&&"unavailable"!==t.state}));t&&(this._isLoading=!1,e.forEach((e=>{const t=this.hass?.states[e];t&&Pe.set(e,t.attributes)})))}}getCardSize(){return Math.max(2,(this._config.entities||[]).length+1)}_t(e,t){return pe(e,de(this.hass,this._config),t)}static getConfigElement(){return document.createElement("soccer-live-multi-team-editor")}static getStubConfig(){return{entities:[]}}_getMatch(e){const t=e.attributes.matches||[];return t.find((e=>"in"===e.state))||t.find((e=>"pre"===e.state))||t.find((e=>"post"===e.state))||t[0]||null}static get styles(){return[he,Se,s`
      ha-card { background: var(--cl-bg); color: var(--cl-text); padding: 12px; border-radius: 12px; }
      .title { font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--cl-text-2); margin-bottom: 10px; }
      .match-row { display: flex; align-items: center; padding: 8px 0; border-bottom: 1px solid var(--divider-color, rgba(255,255,255,0.07)); gap: 8px; }
      .match-row:last-child { border-bottom: none; }
      .team-block { display: flex; align-items: center; gap: 6px; flex: 1; min-width: 0; }
      .team-block.right { flex-direction: row-reverse; }
      .team-logo { width: 20px; height: 20px; object-fit: contain; flex-shrink: 0; }
      .team-name { font-size: 12px; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; color: var(--cl-text); }
      .score-block { text-align: center; min-width: 60px; }
      .score { font-size: 15px; font-weight: 900; color: var(--cl-text); letter-spacing: 2px; }
      .live-dot { display: inline-block; width: 6px; height: 6px; background: #e53935; border-radius: 50%; margin-right: 3px; animation: pulse 1s infinite; }
      .status { font-size: 10px; color: var(--cl-text-2); }
      @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
      .no-match { font-size: 11px; color: var(--cl-text-2); text-align: center; padding: 4px; }
      .empty { padding: 16px; text-align: center; color: var(--cl-text-2); }
    `]}_renderMatch(e){const t=this.hass.states[e];if(!t)return R`<div class="match-row"><div class="no-match">${this._t("team.unknown_entity")}: ${e}</div></div>`;const a=this._getMatch(t);if(!a)return R`<div class="match-row"><div class="no-match">${this._t("team.no_match")} (${e})</div></div>`;const i="in"===a.state,n="post"===a.state,s=i||n,o=a.date||"";return R`
      <div class="match-row">
        <div class="team-block">
          ${a.home_logo?R`<img class="team-logo" src="${a.home_logo}" alt="" @error=${e=>e.target.style.display="none"}>`:""}
          <span class="team-name">${a.home_team||"?"}</span>
        </div>

        <div class="score-block">
          ${i?R`<div><span class="live-dot"></span><span class="status">${a.clock||"LIVE"}</span></div>`:""}
          ${s?R`<div class="score">${a.home_score??0} - ${a.away_score??0}</div>`:R`<div class="status">${o||this._t("match.vs")}</div>`}
          ${n?R`<div class="status">FT</div>`:""}
        </div>

        <div class="team-block right">
          <span class="team-name">${a.away_team||"?"}</span>
          ${a.away_logo?R`<img class="team-logo" src="${a.away_logo}" alt="" @error=${e=>e.target.style.display="none"}>`:""}
        </div>
      </div>
    `}render(){if(!this.hass||!this._config)return Ee("Loading...");const e=this._config.entities||[];if(!e.length)return Ae("⚽","No entities","No entities configured","Add at least one team entity");if(this._isLoading)return Date.now()-this._loadingStarted>1e4?Ae("⏱",this._t("ui.loading_timeout"),this._t("ui.entity_not_responding"),this._t("ui.check_integration")):Ee(this._t("ui.loading"));const t=e.filter((e=>!this.hass.states[e])),a=e.some((e=>"unavailable"===this.hass.states[e]?.state));return t.length>0&&!a?Pe.get(e[0])?Ae("⏱","Offline - showing cached data","Last update: "+(new Date).toLocaleTimeString(),"Waiting for integration"):Ae("⚠️","Entity not found",`Unable to find: ${t[0]}`,"Check your entity configuration"):R`
      <ha-card>
        ${this._config.hide_header?"":R`<div class="title">${this._config.title||this._t("card.my_teams")}</div>`}
        ${e.map((e=>this._renderMatch(e)))}
      </ha-card>
    `}}),window.customCards=window.customCards||[],window.customCards.push({type:"soccer-live-multi-team",name:"Soccer Live Multi Team",description:"Shows multiple teams' matches in one card"});const Be=["dark","light","red-white","classic","neon","gold"],Re=["auto","en","nl","de","pt","fr","es","it"];customElements.define("soccer-live-multi-team-editor",class extends oe{static get properties(){return{_config:{type:Object},hass:{type:Object},_allEntities:{type:Array}}}constructor(){super(),this._allEntities=[]}static get styles(){return[_e,s`
      .entity-list { display: flex; flex-direction: column; gap: 8px; }
      .entity-row { display: flex; gap: 8px; align-items: center; }
      .entity-row select { flex: 1; }
      .remove-btn { background: none; border: 1px solid var(--error-color, #e53935); color: var(--error-color, #e53935); border-radius: 6px; padding: 6px 10px; cursor: pointer; font-size: 13px; }
      .add-btn { background: var(--primary-color, #03a9f4); color: #fff; border: none; border-radius: 8px; padding: 10px 16px; cursor: pointer; font-size: 13px; font-weight: 600; width: 100%; }
      .hint { font-size: 11px; color: var(--secondary-text-color); }
    `]}setConfig(e){this._config={...e,entities:[...e.entities||[]]}}updated(e){e.has("hass")&&this._fetchEntities()}_fetchEntities(){this.hass&&(this._allEntities=Object.keys(this.hass.states).filter((e=>e.includes("soccerlive_next")||e.includes("soccer_live_next")||e.includes("all_mixed"))).sort())}_fire(e){this._config=e,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0})),this.requestUpdate()}_selectChanged(e){this._fire({...this._config,[e.target.dataset.configValue]:e.target.value})}_switchChanged(e){this._fire({...this._config,[e.target.dataset.configValue]:e.target.checked})}_textChanged(e){this._fire({...this._config,[e.target.dataset.configValue]:e.target.value})}_entityChanged(e,t){const a=[...this._config.entities||[]];a[t]=e.target.value,this._fire({...this._config,entities:a})}_removeEntity(e){const t=[...this._config.entities||[]];t.splice(e,1),this._fire({...this._config,entities:t})}_addEntity(){const e=[...this._config.entities||[],""];this._fire({...this._config,entities:e})}render(){if(!this._config||!this.hass)return R``;const e=this._config.entities||[];return R`
      <div class="card-config">
        <h3>Teams</h3>
        <p class="hint">Add one soccer_live_next_* or soccer_live_all_mixed_* sensor per team</p>
        <div class="entity-list">
          ${e.map(((e,t)=>R`
            <div class="entity-row">
              <select @change=${e=>this._entityChanged(e,t)}>
                ${e&&this._allEntities.includes(e)?"":R`<option value="${e}" selected>${e||"— select —"}</option>`}
                ${this._allEntities.map((t=>R`<option value="${t}" ?selected=${t===e}>${t}</option>`))}
              </select>
              <button class="remove-btn" @click=${()=>this._removeEntity(t)}>✕</button>
            </div>
          `))}
        </div>
        <button class="add-btn" @click=${this._addEntity}>+ Add team</button>

        <h3>Settings</h3>
        <div>
          <label class="field-label">Card title</label>
          <input type="text" .value=${this._config.title||""} data-config-value="title" @input=${this._textChanged} placeholder="My Teams">
        </div>
        <div class="option">
          <label>Hide header</label>
          <ha-switch .checked=${!0===this._config.hide_header} data-config-value="hide_header" @change=${this._switchChanged}></ha-switch>
        </div>
        <h3>Appearance</h3>
        <div>
          <label class="field-label">Theme</label>
          <select data-config-value="skin" @change=${this._selectChanged}>
            ${Be.map((e=>R`<option value="${e}" ?selected=${(this._config.skin||"dark")===e}>${e}</option>`))}
          </select>
        </div>
        <div>
          <label class="field-label">Language</label>
          <select data-config-value="language" @change=${this._selectChanged}>
            ${Re.map((e=>R`<option value="${"auto"===e?"":e}" ?selected=${(this._config.language||"")===("auto"===e?"":e)}>${e}</option>`))}
          </select>
        </div>
      </div>
    `}}),customElements.define("soccer-live-team-competitions",class extends oe{static get properties(){return{hass:{},_config:{},_selectedComp:{type:String}}}setConfig(e){if(!e.entity)throw new Error("Entity required");this._config=e,this._selectedComp=e.default_comp||null,me(this,e)}getCardSize(){return 4}_t(e,t){return pe(e,de(this.hass,this._config),t)}static getConfigElement(){return document.createElement("soccer-live-team-competitions-editor")}static getStubConfig(){return{entity:"sensor.soccer_live_all_mixed_"}}_selectComp(e){this._selectedComp=e,this.requestUpdate()}_groupByCompetition(e){const t={};for(const a of e){const e=a.league_name||a.competition_name||"Other";t[e]||(t[e]={key:e,name:e,logo:a.league_logo||a.competition_logo||"",matches:[]}),t[e].matches.push(a)}return Object.values(t).map((e=>{const t=e.matches.find((e=>"in"===e.state)),a=e.matches.find((e=>"pre"===e.state)),i=[...e.matches].reverse().find((e=>"post"===e.state));return{...e,featured:t||a||i||e.matches[0]}})).filter((e=>e.featured)).sort(((e,t)=>("in"===e.featured.state?0:"pre"===e.featured.state?1:2)-("in"===t.featured.state?0:"pre"===t.featured.state?1:2)))}static get styles(){return[he,s`
      ha-card {
        background: var(--cl-bg);
        color: var(--cl-text);
        padding: 0;
        border-radius: 12px;
        overflow: hidden;
      }
      .card-header {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 14px 16px 10px;
        border-bottom: 1px solid var(--cl-divider);
      }
      .team-logo { width: 32px; height: 32px; object-fit: contain; }
      .team-name { font-size: 15px; font-weight: 700; color: var(--cl-text); }
      .comp-tabs {
        display: flex;
        gap: 2px;
        padding: 0 16px 8px;
        overflow-x: auto;
        border-bottom: 1px solid var(--cl-divider);
      }
      .comp-tab {
        font-size: 11px; font-weight: 700; padding: 6px 10px; border-radius: 99px;
        cursor: pointer; white-space: nowrap;
        border: 1px solid var(--cl-divider); background: var(--cl-surface);
        color: var(--cl-text-2);
      }
      .comp-tab.active {
        background: var(--cl-accent); border-color: var(--cl-accent); color: #fff;
      }
      .match-display {
        display: flex;
        align-items: center;
        padding: 12px 16px;
        gap: 10px;
      }
      .comp-logo { width: 24px; height: 24px; object-fit: contain; flex-shrink: 0; }
      .match-block { display: flex; align-items: center; gap: 8px; flex: 1; }
      .team-block { display: flex; align-items: center; gap: 5px; flex: 1; min-width: 0; }
      .team-block.right { flex-direction: row-reverse; }
      .team-logo { width: 18px; height: 18px; object-fit: contain; flex-shrink: 0; }
      .team-name { font-size: 11px; font-weight: 600; color: var(--cl-text); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
      .score-block { text-align: center; min-width: 50px; flex-shrink: 0; }
      .score { font-size: 15px; font-weight: 900; color: var(--cl-text); letter-spacing: 1px; }
      .state { font-size: 10px; color: var(--cl-text-2); }
      .live-dot { display: inline-block; width: 5px; height: 5px; background: var(--cl-live, #ef4444); border-radius: 50%; margin-right: 2px; animation: pulse 1s infinite; }
      @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
      .empty { padding: 20px; text-align: center; color: var(--cl-text-2); font-size: 13px; }
    `]}render(){if(!this.hass||!this._config)return R``;const e=this.hass.states[this._config.entity];if(!e)return Ae("⚠️","Entity not found",`Unable to find: ${this._config.entity}`,"Check the entity configuration");const t=e.attributes.matches||[];if(!t.length)return Ae("⚽","No match data","Unable to find matches","Check if the team has scheduled matches");const a=this._groupByCompetition(t),i=a.find((e=>e.key===this._selectedComp))||a[0],n=this._config.team_name||e.attributes.team_name||"",s=e.attributes.team_logo||"",o=i.featured;return R`
      <ha-card>
        ${this._config.hide_header?"":R`
          <div class="card-header">
            ${s?R`<img class="team-logo" src="${s}" alt="" @error=${e=>e.target.style.display="none"}>`:""}
            <span class="team-name">${n||"Team"}</span>
          </div>
        `}

        ${a.length>1?R`
          <div class="comp-tabs">
            ${a.map((e=>R`
              <span
                class="comp-tab ${e.key===i.key?"active":""}"
                @click=${()=>this._selectComp(e.key)}>
                ${e.name}
              </span>
            `))}
          </div>
        `:""}

        ${i&&o?R`
          <div class="match-display">
            ${i.logo?R`<img class="comp-logo" src="${i.logo}" alt="" @error=${e=>e.target.style.display="none"}>`:""}

            <div class="match-block">
              <div class="team-block">
                ${o.home_logo?R`<img class="team-logo" src="${o.home_logo}" alt="" @error=${e=>e.target.style.display="none"}>`:""}
                <span class="team-name">${o.home_team||"?"}</span>
              </div>

              <div class="score-block">
                ${"in"===o.state?R`
                  <div class="state"><span class="live-dot"></span>${o.clock||"LIVE"}</div>
                  <div class="score">${o.home_score??0}-${o.away_score??0}</div>
                `:"post"===o.state?R`
                  <div class="state">FT</div>
                  <div class="score">${o.home_score??0}-${o.away_score??0}</div>
                `:R`
                  <div class="state">${o.date||this._t("match.vs")}</div>
                `}
              </div>

              <div class="team-block right">
                <span class="team-name">${o.away_team||"?"}</span>
                ${o.away_logo?R`<img class="team-logo" src="${o.away_logo}" alt="" @error=${e=>e.target.style.display="none"}>`:""}
              </div>
            </div>
          </div>
        `:""}
      </ha-card>
    `}}),window.customCards=window.customCards||[],window.customCards.push({type:"soccer-live-team-competitions",name:"Soccer Live Team Competitions",description:"All team competitions with tab selector"});const qe=["dark","light","red-white","classic","neon","gold"],Ge=["auto","en","nl","de","pt","fr","es","it"];customElements.define("soccer-live-team-competitions-editor",class extends oe{static get properties(){return{_config:{type:Object},hass:{type:Object},entities:{type:Array}}}constructor(){super(),this.entities=[]}static get styles(){return[_e,s`
      .hint { font-size: 11px; color: var(--secondary-text-color); }
    `]}setConfig(e){this._config={...e}}updated(e){e.has("hass")&&this._fetchEntities()}_fetchEntities(){this.hass&&(this.entities=Object.keys(this.hass.states).filter((e=>e.includes("all_mixed"))).sort())}_fire(e){this._config=e,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0})),this.requestUpdate()}_entityChanged(e){this._fire({...this._config,entity:e.target.value})}_selectChanged(e){this._fire({...this._config,[e.target.dataset.configValue]:e.target.value})}_numberChanged(e){const t=parseInt(e.target.value,10);isNaN(t)||this._fire({...this._config,[e.target.dataset.configValue]:t})}_textChanged(e){this._fire({...this._config,[e.target.dataset.configValue]:e.target.value})}_switchChanged(e){this._fire({...this._config,[e.target.dataset.configValue]:e.target.checked})}render(){if(!this._config||!this.hass)return R``;const e=this._config.entity||"",t=e&&this.entities.includes(e);return R`
      <div class="card-config">
        <h3>Sensor</h3>
        <p class="hint">Use a <strong>soccer_live_all_mixed_*</strong> sensor (contains all competitions for one team)</p>
        <div>
          <label class="field-label">Entity</label>
          <select @change=${this._entityChanged}>
            ${t?"":R`<option value="${e}" selected>${e||"— select —"}</option>`}
            ${this.entities.map((t=>R`<option value="${t}" ?selected=${t===e}>${t}</option>`))}
          </select>
        </div>

        <h3>Settings</h3>
        <div>
          <label class="field-label">Team name (shown in header)</label>
          <input type="text" .value=${this._config.team_name||""} data-config-value="team_name" @input=${this._textChanged} placeholder="e.g. Feyenoord Rotterdam">
        </div>
        <div>
          <label class="field-label">Default competition (optional)</label>
          <input type="text" .value=${this._config.default_comp||""} data-config-value="default_comp" @input=${this._textChanged} placeholder="e.g. Eredivisie">
        </div>
        <div class="option">
          <label>Hide header</label>
          <ha-switch .checked=${!0===this._config.hide_header} data-config-value="hide_header" @change=${this._switchChanged}></ha-switch>
        </div>

        <h3>Appearance</h3>
        <div>
          <label class="field-label">Theme</label>
          <select data-config-value="skin" @change=${this._selectChanged}>
            ${qe.map((e=>R`<option value="${e}" ?selected=${(this._config.skin||"dark")===e}>${e}</option>`))}
          </select>
        </div>
        <div>
          <label class="field-label">Language</label>
          <select data-config-value="language" @change=${this._selectChanged}>
            ${Ge.map((e=>R`<option value="${"auto"===e?"":e}" ?selected=${(this._config.language||"")===("auto"===e?"":e)}>${e}</option>`))}
          </select>
        </div>
      </div>
    `}}),customElements.define("soccer-live-live-commentary",class extends oe{static get properties(){return{hass:{},_config:{}}}setConfig(e){if(!e.entity)throw new Error("Entity required");this._config=e,me(this,e)}getCardSize(){return 5}_t(e,t){return pe(e,de(this.hass,this._config),t)}static getConfigElement(){return document.createElement("soccer-live-live-commentary-editor")}static getStubConfig(){return{entity:"sensor.soccer_live_commentary_"}}static get styles(){return[he,s`
      ha-card {
        background: var(--cl-bg);
        color: var(--cl-text);
        padding: 0;
        border-radius: 12px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
      }
      .header {
        padding: 16px;
        border-bottom: 1px solid var(--cl-divider);
      }
      .match-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        margin-bottom: 8px;
      }
      .team-block { display: flex; align-items: center; gap: 8px; flex: 1; }
      .team-block.right { flex-direction: row-reverse; }
      .team-logo { width: 24px; height: 24px; object-fit: contain; }
      .team-name { font-size: 13px; font-weight: 600; color: var(--cl-text); }
      .score-block {
        text-align: center;
        flex: 0 0 auto;
        min-width: 70px;
      }
      .score { font-size: 20px; font-weight: 900; color: var(--cl-text); letter-spacing: 2px; }
      .clock {
        font-size: 11px;
        color: var(--cl-text-2);
        margin-top: 2px;
      }
      .live-badge {
        display: inline-block;
        width: 8px;
        height: 8px;
        background: #e53935;
        border-radius: 50%;
        margin-right: 4px;
        animation: pulse 1s infinite;
      }
      @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
      .comp-name {
        font-size: 11px;
        color: var(--cl-text-2);
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }
      .commentary-list {
        flex: 1;
        overflow-y: auto;
        display: flex;
        flex-direction: column-reverse;
        padding: 0;
      }
      .event {
        display: flex;
        gap: 12px;
        padding: 12px 16px;
        border-top: 1px solid var(--cl-divider);
        font-size: 12px;
      }
      .event:first-child { border-top: none; }
      .event-min {
        font-weight: 700;
        color: var(--cl-accent);
        min-width: 36px;
        font-size: 13px;
      }
      .event-icon {
        font-size: 16px;
        min-width: 20px;
        text-align: center;
        flex-shrink: 0;
      }
      .event-content { flex: 1; }
      .event-text { color: var(--cl-text); margin-bottom: 2px; font-weight: 600; }
      .event-desc { font-size: 11px; color: var(--cl-text-2); }
      .no-commentary { text-align: center; padding: 24px 16px; color: var(--cl-text-2); }
      .empty { padding: 20px; text-align: center; color: var(--cl-text-2); }
    `]}_getEventIcon(e){if(!e)return"📋";const t=e.toLowerCase();return t.includes("goal")?"⚽":t.includes("yellow")?"🟨":t.includes("red")?"🟥":t.includes("substitut")||t.includes("sub")?"🔄":t.includes("penaalty")||t.includes("pen")?"⚽":t.includes("own goal")?"🔴":"📋"}render(){if(!this.hass||!this._config)return R``;const e=this.hass.states[this._config.entity];if(!e)return Ae("⚠️",this._t("ui.unknown_entity"),`${this._config.entity}`,this._t("ui.wrong_entity_type_hint"));if("unavailable"===e.state)return Ae("📡",this._t("ui.sensor_unavailable"),"",this._t("ui.check_integration"));const t=e.attributes.commentary||[],a=(e.attributes.matches||[]).find((e=>"in"===e.state));if(!a&&!t.length)return Te("🎙️",this._t("ui.no_live_match"),this._t("ui.no_live_match_hint"));const i=a?.home_team||e.attributes.home_team||"?",n=a?.away_team||e.attributes.away_team||"?",s=a?.home_score??e.attributes.home_score??0,o=a?.away_score??e.attributes.away_score??0,r=e.attributes.match_status||"",l=(e.attributes.league_info||[{}])[0].abbreviation||"",c="in"===r||a&&"in"===a.state,d=a?a.clock:"",p=a?a.home_logo:"",h=a?a.away_logo:"";return R`
      <ha-card>
        <div class="header">
          ${l?R`<div class="comp-name">${l}</div>`:""}
          <div class="match-header">
            <div class="team-block">
              ${p?R`<img class="team-logo" src="${p}" alt="" @error=${e=>e.target.style.display="none"}>`:""}
              <span class="team-name">${i}</span>
            </div>

            <div class="score-block">
              <div class="score">${s} - ${o}</div>
              <div class="clock">
                ${c?R`<span class="live-badge"></span>`:""}
                ${d||"—"}
              </div>
            </div>

            <div class="team-block right">
              <span class="team-name">${n}</span>
              ${h?R`<img class="team-logo" src="${h}" alt="" @error=${e=>e.target.style.display="none"}>`:""}
            </div>
          </div>
        </div>

        ${t.length>0?R`
          <div class="commentary-list">
            ${t.map((e=>R`
              <div class="event">
                <span class="event-min">${e.clock||"—"}'</span>
                <span class="event-icon">${this._getEventIcon(e.type)}</span>
                <div class="event-content">
                  <div class="event-text">${e.text||e.description||"Event"}</div>
                  ${void 0!==e.home_score&&void 0!==e.away_score?R`
                    <div class="event-desc">${e.home_score}-${e.away_score}</div>
                  `:""}
                </div>
              </div>
            `))}
          </div>
        `:R`
          <div class="no-commentary">${this._t("commentary.empty")}</div>
        `}
      </ha-card>
    `}}),window.customCards=window.customCards||[],window.customCards.push({type:"soccer-live-live-commentary",name:"Soccer Live Commentary",description:"Live match commentary and events"})})();