import { m as manifest, g as getLocaleRelativeUrl } from './entrypoint_CpucajTR.mjs';
import 'piccolore';
import 'es-module-lexer';
import './sequence_BOg4xrWM.mjs';
import 'clsx';

function toRoutingStrategy(routing, domains) {
  let strategy;
  const hasDomains = domains ? Object.keys(domains).length > 0 : false;
  if (routing === "manual") {
    strategy = "manual";
  } else {
    if (!hasDomains) {
      if (routing?.prefixDefaultLocale === true) {
        if (routing.redirectToDefaultLocale) {
          strategy = "pathname-prefix-always";
        } else {
          strategy = "pathname-prefix-always-no-redirect";
        }
      } else {
        strategy = "pathname-prefix-other-locales";
      }
    } else {
      if (routing?.prefixDefaultLocale === true) {
        if (routing.redirectToDefaultLocale) {
          strategy = "domains-prefix-always";
        } else {
          strategy = "domains-prefix-always-no-redirect";
        }
      } else {
        strategy = "domains-prefix-other-locales";
      }
    }
  }
  return strategy;
}
function toFallbackType(routing) {
  if (routing === "manual") {
    return "rewrite";
  }
  return routing.fallbackType;
}
const PREFIX_DEFAULT_LOCALE = /* @__PURE__ */ new Set([
  "pathname-prefix-always",
  "domains-prefix-always",
  "pathname-prefix-always-no-redirect",
  "domains-prefix-always-no-redirect"
]);
const REDIRECT_TO_DEFAULT_LOCALE = /* @__PURE__ */ new Set([
  "pathname-prefix-always-no-redirect",
  "domains-prefix-always-no-redirect"
]);
function fromRoutingStrategy(strategy, fallbackType) {
  let routing;
  if (strategy === "manual") {
    routing = "manual";
  } else {
    routing = {
      prefixDefaultLocale: PREFIX_DEFAULT_LOCALE.has(strategy),
      redirectToDefaultLocale: !REDIRECT_TO_DEFAULT_LOCALE.has(strategy),
      fallbackType
    };
  }
  return routing;
}

let i18n$1 = undefined;
if (manifest.i18n) {
 i18n$1 = {
   defaultLocale: manifest.i18n.defaultLocale,
   locales: manifest.i18n.locales,
   routing: fromRoutingStrategy(manifest.i18n.strategy, manifest.i18n.fallbackType),
   fallback: manifest.i18n.fallback,
   domains: manifest.i18n.domains,
 };
}
if (manifest.image) {
  ({
    objectFit: manifest.image.objectFit,
    objectPosition: manifest.image.objectPosition,
    layout: manifest.image.layout,
  });
}

manifest.base;
const build$1 = {
  server: new URL(manifest.buildServerDir),
  client: new URL(manifest.buildClientDir),
  format: manifest.buildFormat,
};

new URL(manifest.cacheDir);
new URL(manifest.outDir);
new URL(manifest.publicDir);
new URL(manifest.srcDir);
new URL(manifest.rootDir);
const trailingSlash$1 = manifest.trailingSlash;
manifest.site;
manifest.compressHTML;

const config = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  build: build$1,
  get i18n () { return i18n$1; },
  trailingSlash: trailingSlash$1
}, Symbol.toStringTag, { value: 'Module' }));

const { trailingSlash, i18n, build } = config;
const { format } = build;
const { defaultLocale, locales, domains, fallback, routing } = i18n;
const base = "/";
let strategy = toRoutingStrategy(routing, domains);
toFallbackType(routing);
const getRelativeLocaleUrl = (locale, path, options) => getLocaleRelativeUrl({
  locale,
  path,
  base,
  trailingSlash,
  format,
  defaultLocale,
  locales,
  strategy,
  ...options
});
if (i18n?.routing === "manual") ;
if (i18n?.routing === "manual") ;
if (i18n?.routing === "manual") ;
if (i18n?.routing === "manual") ;
if (i18n?.routing === "manual") ;

export { getRelativeLocaleUrl as g };
