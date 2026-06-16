import { c as createComponent } from './consts_lZTZLDJh.mjs';
import 'piccolore';
import { X as renderComponent, Y as renderTemplate, aJ as maybeRenderHead } from './sequence_BOg4xrWM.mjs';
import { $ as $$MainLayout } from './MainLayout_DWGq4cje.mjs';
import { $ as $$PrimaryCTA } from './PrimaryCTA_BAFe-Pzp.mjs';
import { $ as $$CardSmall, a as $$CardWide } from './CardWide_B6480UHJ.mjs';
import { g as getCollection } from './_astro_content_CfMDc9Va.mjs';
import { S as SITE } from './global_6cnxje-w.mjs';
import { $ as $$Why } from './Why_BIlnmkoT.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  const product = (await getCollection("products", ({ id }) => {
    return id.startsWith("en/");
  })).sort(
    (a, b) => a.data.main.id - b.data.main.id
  );
  const title = "Products";
  const subTitle = "Explore the durability and precision of G K Enterprisetools, designed for both professionals and enthusiasts. Each of our products is crafted with precision and built to last, ensuring you have the right tool for every job.";
  const pageTitle = `Products | ${SITE.title}`;
  const metaDescription = "Explore the durability and precision of G K Enterprise tools, designed for both professionals and enthusiasts.";
  const ogTitle = "Hardware Tools | G K Enterprise";
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle, "customDescription": metaDescription, "customOgTitle": ogTitle, "structuredData": {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://G K Enterprise.uk/products",
    url: "https://G K Enterprise.uk/products",
    name: "Hardware Tools | G K Enterprise",
    description: "Explore the durability and precision of G K Enterprisetools, designed for both professionals and enthusiasts.",
    isPartOf: {
      "@type": "WebSite",
      url: "https://G K Enterprise.uk",
      name: "G K Enterprise",
      description: "G K Enterpriseoffers top-tier hardware tools and expert construction services to meet all your project needs."
    },
    inLanguage: "en-US"
  } }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> <div class="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12"> <div class="flex items-center gap-12"> <h1 class="text-2xl font-bold tracking-tight text-balance text-neutral-800 md:text-4xl md:leading-tight dark:text-neutral-200"> ${title} </h1> ${renderTemplate`<p class="hidden max-w-(--breakpoint-sm) text-pretty text-neutral-600 md:block dark:text-neutral-400"> ${subTitle} </p>`} </div> ${renderComponent($$result2, "PrimaryCTA", $$PrimaryCTA, { "title": "Customer Stories", "url": "#testimonials", "noArrow": true })} </div>  <section class="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8"> ${product.map((product2, index) => {
    const position = index % 4;
    if (position === 0 || position === 3) {
      return renderTemplate`${renderComponent($$result2, "CardSmall", $$CardSmall, { "product": product2 })}`;
    } else {
      return renderTemplate`${renderComponent($$result2, "CardWide", $$CardWide, { "product": product2 })}`;
    }
  })} </section> </div>  ${renderComponent($$result2, "Why", $$Why, {})}  ` })}`;
}, "C:/myProject/G K Enterprise/client/src/pages/products/index.astro", void 0);

const $$file = "C:/myProject/G K Enterprise/client/src/pages/products/index.astro";
const $$url = "/products";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
