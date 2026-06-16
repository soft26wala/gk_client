import { c as createComponent } from './consts_lZTZLDJh.mjs';
import 'piccolore';
import { Y as renderTemplate, X as renderComponent, aM as renderSlot, aO as renderHead, aK as addAttribute } from './sequence_BOg4xrWM.mjs';
import { r as renderScript } from './script_B7gzqb1r.mjs';
import { S as SITE, c as $$FooterSection, d as $$Navbar, e as $$Meta } from './global_6cnxje-w.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$AdminLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$AdminLayout;
  const {
    title = SITE.title,
    meta,
    structuredData,
    lang = "en",
    customDescription = null,
    customOgTitle = null
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<!-- <body>\n  <main>\n    <script src="https://cdn.tailwindcss.com"><\/script>\n     </main>\n</body> --><html', ' class="scrollbar-hide lenis lenis-smooth scroll-pt-16 astro-2kanml4j"> <head>', "<title>", "</title><script>\n      try {\n        const token = localStorage.getItem('token');\n        const userJSON = localStorage.getItem('user');\n        const user = userJSON ? JSON.parse(userJSON) : null;\n        const isAdmin =\n          typeof user?.role === 'string' && user.role.toLowerCase() === 'admin';\n\n        if (!token || !user || !isAdmin) {\n          localStorage.removeItem('user');\n          localStorage.removeItem('token');\n          window.location.replace('/');\n        }\n      } catch (err) {\n        localStorage.removeItem('user');\n        localStorage.removeItem('token');\n        window.location.replace('/');\n      }\n    <\/script><script>\n      // Script to handle dark mode. It will check if the theme is stored in localStorage or if dark theme is preferred by system settings\n      if (\n        localStorage.getItem('hs_theme') === 'dark' ||\n        (!('hs_theme' in localStorage) &&\n          window.matchMedia('(prefers-color-scheme: dark)').matches)\n      ) {\n        document.documentElement.classList.add('dark');\n      } else {\n        document.documentElement.classList.remove('dark');\n      }\n    <\/script>", "", '</head> <body class="flex min-h-screen flex-col bg-neutral-200 selection:bg-yellow-400 selection:text-neutral-700 dark:bg-neutral-800 astro-2kanml4j">  <div class="mx-auto w-full max-w-(--breakpoint-2xl) grow px-4 sm:px-6 lg:px-8 astro-2kanml4j"> ', ' <main class="astro-2kanml4j"> ', " </main> </div> ", ` <div id="toast-container" aria-live="polite" aria-atomic="true" class="astro-2kanml4j"></div> <script>
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
          toast.addEventListener('transitionend', () => toast.remove(), { once: true });
        };

        setTimeout(removeToast, duration);
        toast.addEventListener('click', removeToast);
      };
    <\/script> `, " </body> </html>"], ['<!-- <body>\n  <main>\n    <script src="https://cdn.tailwindcss.com"><\/script>\n     </main>\n</body> --><html', ' class="scrollbar-hide lenis lenis-smooth scroll-pt-16 astro-2kanml4j"> <head>', "<title>", "</title><script>\n      try {\n        const token = localStorage.getItem('token');\n        const userJSON = localStorage.getItem('user');\n        const user = userJSON ? JSON.parse(userJSON) : null;\n        const isAdmin =\n          typeof user?.role === 'string' && user.role.toLowerCase() === 'admin';\n\n        if (!token || !user || !isAdmin) {\n          localStorage.removeItem('user');\n          localStorage.removeItem('token');\n          window.location.replace('/');\n        }\n      } catch (err) {\n        localStorage.removeItem('user');\n        localStorage.removeItem('token');\n        window.location.replace('/');\n      }\n    <\/script><script>\n      // Script to handle dark mode. It will check if the theme is stored in localStorage or if dark theme is preferred by system settings\n      if (\n        localStorage.getItem('hs_theme') === 'dark' ||\n        (!('hs_theme' in localStorage) &&\n          window.matchMedia('(prefers-color-scheme: dark)').matches)\n      ) {\n        document.documentElement.classList.add('dark');\n      } else {\n        document.documentElement.classList.remove('dark');\n      }\n    <\/script>", "", '</head> <body class="flex min-h-screen flex-col bg-neutral-200 selection:bg-yellow-400 selection:text-neutral-700 dark:bg-neutral-800 astro-2kanml4j">  <div class="mx-auto w-full max-w-(--breakpoint-2xl) grow px-4 sm:px-6 lg:px-8 astro-2kanml4j"> ', ' <main class="astro-2kanml4j"> ', " </main> </div> ", ` <div id="toast-container" aria-live="polite" aria-atomic="true" class="astro-2kanml4j"></div> <script>
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
          toast.addEventListener('transitionend', () => toast.remove(), { once: true });
        };

        setTimeout(removeToast, duration);
        toast.addEventListener('click', removeToast);
      };
    <\/script> `, " </body> </html>"])), addAttribute(lang, "lang"), renderComponent($$result, "Meta", $$Meta, { "meta": meta, "structuredData": structuredData, "customDescription": customDescription, "customOgTitle": customOgTitle, "class": "astro-2kanml4j" }), title, renderScript($$result, "C:/myProject/G K Enterprise/client/src/layouts/AdminLayout.astro?astro&type=script&index=0&lang.ts"), renderHead(), renderComponent($$result, "Navbar", $$Navbar, { "class": "astro-2kanml4j" }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "FooterSection", $$FooterSection, { "class": "astro-2kanml4j" }), renderScript($$result, "C:/myProject/G K Enterprise/client/src/layouts/AdminLayout.astro?astro&type=script&index=1&lang.ts"));
}, "C:/myProject/G K Enterprise/client/src/layouts/AdminLayout.astro", void 0);

export { $$AdminLayout as $ };
