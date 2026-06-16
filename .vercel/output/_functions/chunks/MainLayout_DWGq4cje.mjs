import { c as createComponent } from './consts_lZTZLDJh.mjs';
import 'piccolore';
import { Y as renderTemplate, X as renderComponent, aM as renderSlot, aO as renderHead, aK as addAttribute } from './sequence_BOg4xrWM.mjs';
import { r as renderScript } from './script_B7gzqb1r.mjs';
import { S as SITE, c as $$FooterSection, d as $$Navbar, e as $$Meta } from './global_6cnxje-w.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$MainLayout;
  const {
    title = SITE.title,
    meta,
    structuredData,
    lang = "en",
    customDescription = null,
    customOgTitle = null
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["<html", ' class="scrollbar-hide lenis lenis-smooth scroll-pt-16 astro-ouamjn2i"> <head>', "<title>", "</title><script>\n      // Script to handle dark mode. It will check if the theme is stored in localStorage or if dark theme is preferred by system settings\n      if (\n        localStorage.getItem('hs_theme') === 'dark' ||\n        (!('hs_theme' in localStorage) &&\n          window.matchMedia('(prefers-color-scheme: dark)').matches)\n      ) {\n        document.documentElement.classList.add('dark');\n      } else {\n        document.documentElement.classList.remove('dark');\n      }\n    <\/script>", "", '</head> <body class="flex min-h-screen flex-col bg-neutral-200 selection:bg-yellow-400 selection:text-neutral-700 dark:bg-neutral-800 astro-ouamjn2i">  <div class="mx-auto w-full max-w-(--breakpoint-2xl) grow px-4 sm:px-6 lg:px-8 astro-ouamjn2i"> ', ' <main class="astro-ouamjn2i"> ', " </main> </div> ", ` <div id="toast-container" aria-live="polite" aria-atomic="true" class="astro-ouamjn2i"></div> <script>
      window.showToast = function (message, type = 'info', duration = 4000) {
        const container = document.getElementById('toast-container');
        if (!container) return;

        const toast = document.createElement('div');
        toast.className = \`toast \${type}\`;
        toast.textContent = message;

        container.appendChild(toast);
        requestAnimationFrame(() => toast.classList.add('visible'));

        const removeToast = () => {
          toast.classList.remove('visible');
          toast.addEventListener('transitionend', () => toast.remove(), {
            once: true,
          });
        };

        setTimeout(removeToast, duration);
        toast.addEventListener('click', removeToast);
      };
    <\/script> `, "  ", " </body> </html>"], ["<html", ' class="scrollbar-hide lenis lenis-smooth scroll-pt-16 astro-ouamjn2i"> <head>', "<title>", "</title><script>\n      // Script to handle dark mode. It will check if the theme is stored in localStorage or if dark theme is preferred by system settings\n      if (\n        localStorage.getItem('hs_theme') === 'dark' ||\n        (!('hs_theme' in localStorage) &&\n          window.matchMedia('(prefers-color-scheme: dark)').matches)\n      ) {\n        document.documentElement.classList.add('dark');\n      } else {\n        document.documentElement.classList.remove('dark');\n      }\n    <\/script>", "", '</head> <body class="flex min-h-screen flex-col bg-neutral-200 selection:bg-yellow-400 selection:text-neutral-700 dark:bg-neutral-800 astro-ouamjn2i">  <div class="mx-auto w-full max-w-(--breakpoint-2xl) grow px-4 sm:px-6 lg:px-8 astro-ouamjn2i"> ', ' <main class="astro-ouamjn2i"> ', " </main> </div> ", ` <div id="toast-container" aria-live="polite" aria-atomic="true" class="astro-ouamjn2i"></div> <script>
      window.showToast = function (message, type = 'info', duration = 4000) {
        const container = document.getElementById('toast-container');
        if (!container) return;

        const toast = document.createElement('div');
        toast.className = \\\`toast \\\${type}\\\`;
        toast.textContent = message;

        container.appendChild(toast);
        requestAnimationFrame(() => toast.classList.add('visible'));

        const removeToast = () => {
          toast.classList.remove('visible');
          toast.addEventListener('transitionend', () => toast.remove(), {
            once: true,
          });
        };

        setTimeout(removeToast, duration);
        toast.addEventListener('click', removeToast);
      };
    <\/script> `, "  ", " </body> </html>"])), addAttribute(lang, "lang"), renderComponent($$result, "Meta", $$Meta, { "meta": meta, "structuredData": structuredData, "customDescription": customDescription, "customOgTitle": customOgTitle, "class": "astro-ouamjn2i" }), title, renderScript($$result, "C:/myProject/G K Enterprise/client/src/layouts/MainLayout.astro?astro&type=script&index=0&lang.ts"), renderHead(), renderComponent($$result, "Navbar", $$Navbar, { "class": "astro-ouamjn2i" }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "FooterSection", $$FooterSection, { "class": "astro-ouamjn2i" }), renderScript($$result, "C:/myProject/G K Enterprise/client/src/layouts/MainLayout.astro?astro&type=script&index=1&lang.ts"), renderScript($$result, "C:/myProject/G K Enterprise/client/src/layouts/MainLayout.astro?astro&type=script&index=2&lang.ts"));
}, "C:/myProject/G K Enterprise/client/src/layouts/MainLayout.astro", void 0);

export { $$MainLayout as $ };
