import { c as createComponent } from './consts_lZTZLDJh.mjs';
import 'piccolore';
import { aJ as maybeRenderHead, aK as addAttribute, X as renderComponent, Y as renderTemplate } from './sequence_BOg4xrWM.mjs';
import { $ as $$Image } from './_astro_assets_m5DGn2Iu.mjs';
import { $ as $$Icon } from './global_6cnxje-w.mjs';

const $$CardSmall = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$CardSmall;
  const { product, productLocale = "" } = Astro2.props;
  const imageClass = "absolute inset-0 h-full w-full object-cover object-center transition duration-[600ms] ease-[cubic-bezier(0.45,0,0.55,1)] group-hover:scale-110";
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(productLocale && productLocale !== "en" ? `/${productLocale}/products/${product.id.replace(/^fr\//, "")}/` : `/products/${product.id.replace(/^en\//, "")}/`, "href")} data-astro-prefetch class="group relative flex h-48 items-end overflow-hidden rounded-xl shadow-lg ring-zinc-500 outline-hidden focus-visible:ring-3 md:h-80 dark:ring-zinc-200 dark:focus:outline-hidden">  ${renderComponent($$result, "Image", $$Image, { "src": product.data.main.imgCard, "alt": product.data.main.imgAlt, "draggable": "false", "class": imageClass, "format": "avif" })}  <div class="pointer-events-none absolute inset-0 bg-linear-to-t from-neutral-800 via-transparent to-transparent opacity-50"></div>  <span class="relative mb-3 ml-4 inline-block text-sm font-bold text-neutral-50 transition duration-[600ms] ease-[cubic-bezier(0.45,0,0.55,1)] group-hover:scale-110 md:ml-5 md:text-lg">${product.data.description} ${renderComponent($$result, "Icon", $$Icon, { "name": "openInNew" })} </span> </a>`;
}, "C:/myProject/G K Enterprise/client/src/components/ui/cards/CardSmall.astro", void 0);

const $$CardWide = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$CardWide;
  const { product, productLocale = "" } = Astro2.props;
  const imageClass = "absolute inset-0 h-full w-full object-cover object-center transition duration-[600ms] ease-[cubic-bezier(0.45,0,0.55,1)] group-hover:scale-110";
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(productLocale && productLocale !== "en" ? `/${productLocale}/products/${product.id.replace(/^fr\//, "")}/` : `/products/${product.id.replace(/^en\//, "")}/`, "href")} data-astro-prefetch class="group relative flex h-48 items-end overflow-hidden rounded-lg shadow-xl ring-zinc-500 outline-hidden focus-visible:ring-3 md:col-span-2 md:h-80 dark:ring-zinc-200 dark:focus:outline-hidden">  ${renderComponent($$result, "Image", $$Image, { "src": product.data.main.imgCard, "alt": product.data.main.imgAlt, "draggable": "false", "class": imageClass, "format": "avif" })}  <div class="pointer-events-none absolute inset-0 bg-linear-to-t from-neutral-800 via-transparent to-transparent opacity-50"></div>  <span class="relative mb-3 ml-4 inline-block text-sm font-bold text-neutral-50 transition duration-[600ms] ease-[cubic-bezier(0.45,0,0.55,1)] group-hover:scale-110 md:ml-5 md:text-lg">${product.data.description} ${renderComponent($$result, "Icon", $$Icon, { "name": "openInNew" })}</span> </a>`;
}, "C:/myProject/G K Enterprise/client/src/components/ui/cards/CardWide.astro", void 0);

export { $$CardSmall as $, $$CardWide as a };
