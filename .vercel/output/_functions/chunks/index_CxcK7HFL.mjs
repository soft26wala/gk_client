import { c as createComponent } from './consts_lZTZLDJh.mjs';
import 'piccolore';
import { X as renderComponent, Y as renderTemplate, aJ as maybeRenderHead } from './sequence_BOg4xrWM.mjs';
import { $ as $$MainLayout } from './MainLayout_DWGq4cje.mjs';
import { $ as $$CardBlog, a as $$CardBlogRecent, b as $$CardInsight } from './CardInsight_CLQIwMUh.mjs';
import { g as getCollection } from './_astro_content_CfMDc9Va.mjs';
import { S as SITE } from './global_6cnxje-w.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const frenchBlogEntries = await getCollection("blog", ({ id }) => {
    return id.startsWith("fr/");
  });
  const frenchInsightsEntries = await getCollection("insights", ({ id }) => {
    return id.startsWith("fr/");
  });
  const blogPosts = frenchBlogEntries.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  const insightPosts = frenchInsightsEntries;
  const mostRecentPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);
  const title = "Votre Passerelle vers l'Excellence en Construction";
  const subTitle = "Explorez les dernières actualités, astuces et analyses de ScrewFast pour améliorer vos projets de construction. Des mises en avant de produits aux stratégies de gestion de projet, notre blog est votre ressource incontournable pour tout ce qui concerne les outils et la construction.";
  const secondTitle = "Perspectives";
  const secondSubTitle = "Restez à jour avec les dernières tendances et évolutions de l'industrie de la construction grâce aux analyses de l'équipe d'experts de ScrewFast.";
  const pageTitle = `Blog | ${SITE.title}`;
  const metaDescription = "Restez informé des dernières tendances et évolutions dans le secteur de la construction avec les analyses de l'équipe d'experts de ScrewFast.";
  const ogTitle = "Blog de l'Industrie de la Construction | ScrewFast";
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "lang": "fr", "title": pageTitle, "customDescription": metaDescription, "customOgTitle": ogTitle, "structuredData": {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://screwfast.uk/fr/blog",
    url: "https://screwfast.uk/fr/blog",
    name: "Blog | ScrewFast",
    description: "Restez informé des dernières tendances et évolutions dans le secteur de la construction avec les analyses de l'équipe d'experts de ScrewFast.",
    isPartOf: {
      "@type": "WebSite",
      url: "https://screwfast.uk/fr",
      name: "ScrewFast",
      description: "ScrewFast propose des outils matériels de premier ordre et des services de construction experts pour répondre à tous vos besoins de projet."
    },
    inLanguage: "fr"
  } }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mx-auto max-w-[85rem] space-y-8 px-4 pt-16 sm:px-6 lg:px-8 2xl:max-w-full">  <div class="mx-auto max-w-3xl text-left sm:text-center"> <h1 class="block text-4xl font-bold tracking-tight text-balance text-neutral-800 md:text-5xl lg:text-6xl dark:text-neutral-200"> ${title} </h1> <p class="mt-4 text-lg text-pretty text-neutral-600 dark:text-neutral-400"> ${subTitle} </p> </div> </section> <section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full">  <div class="grid gap-6 lg:grid-cols-2"> ${otherPosts.map((blogEntry) => renderTemplate`${renderComponent($$result2, "CardBlog", $$CardBlog, { "blogEntry": blogEntry, "blogLocale": "fr" })}`)} </div> </section> <section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> ${renderComponent($$result2, "CardBlogRecent", $$CardBlogRecent, { "blogEntry": mostRecentPost, "recentBlogLocale": "fr" })} </section> <section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> <div class="mx-auto mb-10 max-w-2xl text-center lg:mb-14"> <h2 class="text-2xl font-bold text-neutral-800 md:text-4xl md:leading-tight dark:text-neutral-200"> ${secondTitle} </h2> <p class="mt-1 text-pretty text-neutral-600 dark:text-neutral-400"> ${secondSubTitle} </p> </div> <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"> ${insightPosts.map((insightEntry) => renderTemplate`${renderComponent($$result2, "CardInsight", $$CardInsight, { "insightEntry": insightEntry, "insightLocale": "fr" })}`)} </div> </section> ` })}`;
}, "C:/myProject/G K Enterprise/client/src/pages/fr/blog/index.astro", void 0);

const $$file = "C:/myProject/G K Enterprise/client/src/pages/fr/blog/index.astro";
const $$url = "/fr/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
