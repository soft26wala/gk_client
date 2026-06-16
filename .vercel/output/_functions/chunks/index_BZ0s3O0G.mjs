import { c as createComponent } from './consts_lZTZLDJh.mjs';
import 'piccolore';
import { aJ as maybeRenderHead, X as renderComponent, Y as renderTemplate, aL as Fragment, aN as unescapeHTML, aK as addAttribute } from './sequence_BOg4xrWM.mjs';
import { $ as $$MainLayout } from './MainLayout_DWGq4cje.mjs';
import { $ as $$PrimaryCTA } from './PrimaryCTA_BAFe-Pzp.mjs';
import { $ as $$CardSmall, a as $$CardWide } from './CardWide_B6480UHJ.mjs';
import { $ as $$Image } from './_astro_assets_m5DGn2Iu.mjs';
import { f as featureImage } from './features-image_W5Vqnpgd.mjs';
import 'clsx';
import { g as getCollection } from './_astro_content_CfMDc9Va.mjs';

const $$FeaturesStatsAlt = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$FeaturesStatsAlt;
  const { title, subTitle, benefits } = Astro2.props;
  const ListItemMarker = `<svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mt-0.5 h-6 w-6 text-orange-400 dark:text-orange-300 flex-none"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>`;
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full">  <div class="lg:grid lg:grid-cols-12 lg:items-center lg:gap-16"> <div class="lg:col-span-7"> ${renderComponent($$result, "Image", $$Image, { "class": "rounded-xl", "src": featureImage, "alt": "Mockup of floating boxes" })} </div> <div class="mt-5 sm:mt-10 lg:col-span-5 lg:mt-0"> <div class="space-y-6 sm:space-y-8"> <div class="space-y-2 md:space-y-4"> <h2 class="text-3xl font-bold text-balance text-neutral-800 lg:text-4xl dark:text-neutral-200"> ${title} </h2> ${subTitle && renderTemplate`<p class="text-pretty text-neutral-600 dark:text-neutral-400"> ${subTitle} </p>`} </div> ${benefits && renderTemplate`<ul class="space-y-2 sm:space-y-4"> ${benefits.map((item) => renderTemplate`<li class="flex space-x-3"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(ListItemMarker)}` })} <span class="text-base font-medium text-pretty text-neutral-600 dark:text-neutral-400"> ${item} </span> </li>`)} </ul>`} </div> </div> </div> </section>`;
}, "C:/myProject/G K Enterprise/client/src/components/sections/features/FeaturesStatsAlt.astro", void 0);

const $$AvatarTestimonialSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$AvatarTestimonialSection;
  const { src, alt } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="shrink-0"> <img class="size-8 rounded-full sm:h-[2.875rem] sm:w-[2.875rem]"${addAttribute(src, "src")}${addAttribute(alt, "alt")} loading="lazy"> </div>`;
}, "C:/myProject/G K Enterprise/client/src/components/ui/avatars/AvatarTestimonialSection.astro", void 0);

const $$TestimonialsSectionAlt = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$TestimonialsSectionAlt;
  const { title, testimonials } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full" id="testimonials">  <div class="mb-6 w-3/4 max-w-2xl sm:mb-10 md:mb-16 lg:w-1/2"> <h2 class="text-2xl font-bold text-balance text-neutral-800 sm:text-3xl lg:text-4xl dark:text-neutral-200"> ${title} </h2> </div> <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">  ${testimonials.map((testimonial) => renderTemplate`<div class="flex h-auto"> <div class="flex flex-col rounded-xl bg-neutral-50 dark:bg-neutral-700"> <div class="flex-auto p-4 md:p-6">  <p class="text-base text-pretty text-neutral-600 italic md:text-lg dark:text-neutral-300"> ${testimonial.content} </p> </div> <div class="rounded-b-xl bg-neutral-300/30 p-4 md:px-7 dark:bg-neutral-900/30"> <div class="flex items-center"> ${renderComponent($$result, "AvatarTestimonialSection", $$AvatarTestimonialSection, { "src": testimonial.avatarSrc, "alt": testimonial.avatarAlt })} <div class="ms-3 grow"> <p class="text-sm font-bold text-neutral-800 sm:text-base dark:text-neutral-200"> ${testimonial.author} </p> <p class="text-xs text-neutral-600 dark:text-neutral-400"> ${testimonial.role} </p> </div> </div> </div> </div> </div>`)} </div> </section>`;
}, "C:/myProject/G K Enterprise/client/src/components/sections/testimonials/TestimonialsSectionAlt.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  const product = (await getCollection("products", ({ id }) => {
    return id.startsWith("fr/");
  })).sort(
    (a, b) => a.data.main.id - b.data.main.id
  );
  const title = "Produits";
  const subTitle = "Explorez la durabilité et la précision des outils ScrewFast, conçus aussi bien pour les professionnels que pour les amateurs. Chacun de nos produits est fabriqué avec précision et conçu pour durer, garantissant que vous disposez du bon outil pour chaque tâche.";
  const testimonials = [
    {
      content: "Depuis que nous avons adopté les outils matériels de ScrewFast, l'efficacité sur nos chantiers de construction a explosé. La durabilité des boulons hexagonaux et la précision des vis machine sont tout simplement inégalées. C'est rafraîchissant de travailler avec une entreprise qui comprend vraiment les exigences quotidiennes de l'industrie.",
      author: "Jason Clark",
      role: "Contremaître de chantier | TopBuild",
      avatarSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80",
      avatarAlt: "Description de l'image"
    },
    {
      content: "En tant que designer d'intérieur, je suis toujours à la recherche de matériaux et d'outils de haute qualité qui m'aident à donner vie à mes visions. L'assortiment de vis mixtes de ScrewFast a révolutionné mes projets, offrant le mélange parfait de qualité et de variété. Le support client exceptionnel était la cerise sur le gâteau !",
      author: "Maria Gonzalez",
      role: "Designer d'intérieur | Creative Spaces",
      avatarSrc: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80",
      avatarAlt: "Description de l'image"
    },
    {
      content: "Je suis menuisier professionnel depuis plus de 15 ans, et je peux sincèrement dire que les boulons et écrous à tarauder de ScrewFast sont parmi les meilleurs que j'ai utilisés. Ils adhèrent comme aucun autre, et j'ai une confiance totale dans chaque joint et élément. De plus, le service est impeccable - ils se soucient vraiment du succès de mon projet.",
      author: "Richard Kim",
      role: "Menuisier-Maître | WoodWright",
      avatarSrc: "https://images.unsplash.com/photo-1474176857210-7287d38d27c6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80",
      avatarAlt: "Description de l'image"
    }
  ];
  const pageTitle = "Produits | ScrewFast";
  const metaDescription = "Explorez la durabilité et la précision des outils ScrewFast, conçus aussi bien pour les professionnels que pour les passionnés.";
  const ogTitle = "Outils Matériels | ScrewFast";
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle, "lang": "fr", "customDescription": metaDescription, "customOgTitle": ogTitle, "structuredData": {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://screwfast.uk/fr/products",
    url: "https://screwfast.uk/fr/products",
    name: "Outils Matériels | ScrewFast",
    description: "Explorez la durabilité et la précision des outils ScrewFast, conçus aussi bien pour les professionnels que pour les passionnés.",
    isPartOf: {
      "@type": "WebSite",
      url: "https://screwfast.uk/fr",
      name: "ScrewFast",
      description: "ScrewFast propose des outils matériels de premier ordre et des services de construction experts pour répondre à tous vos besoins de projet."
    },
    inLanguage: "fr"
  } }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> <div class="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12"> <div class="flex items-center gap-12"> <h1 class="text-2xl font-bold tracking-tight text-balance text-neutral-800 md:text-4xl md:leading-tight dark:text-neutral-200"> ${title} </h1> ${renderTemplate`<p class="hidden max-w-(--breakpoint-sm) text-pretty text-neutral-600 md:block dark:text-neutral-400"> ${subTitle} </p>`} </div> ${renderComponent($$result2, "PrimaryCTA", $$PrimaryCTA, { "title": "Histoires de clients", "url": "#testimonials", "noArrow": true })} </div>   <section class="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8"> ${product.map((product2, index) => {
    const position = index % 4;
    if (position === 0 || position === 3) {
      return renderTemplate`${renderComponent($$result2, "CardSmall", $$CardSmall, { "product": product2, "productLocale": "fr" })}`;
    } else {
      return renderTemplate`${renderComponent($$result2, "CardWide", $$CardWide, { "product": product2, "productLocale": "fr" })}`;
    }
  })} </section> </div> ${renderComponent($$result2, "FeaturesStatsAlt", $$FeaturesStatsAlt, { "title": "Pourquoi choisir ScrewFast ?", "subTitle": "Transformez vos idées en résultats tangibles avec les outils ScrewFast. Que vous commenciez par un croquis sur un coin de table ou plongiez dans un projet de construction complet, nos outils sont conçus pour vous aider à construire en toute confiance.", "benefits": [
    "Outils robustes et fiables pour des performances durables.",
    "Solutions innovantes adaptées aux besoins de construction modernes.",
    "Support client dédié au succès de votre projet."
  ] })} ${renderComponent($$result2, "TestimonialsSectionAlt", $$TestimonialsSectionAlt, { "title": "Ce que disent nos clients", "testimonials": testimonials })} ` })}`;
}, "C:/myProject/G K Enterprise/client/src/pages/fr/products/index.astro", void 0);

const $$file = "C:/myProject/G K Enterprise/client/src/pages/fr/products/index.astro";
const $$url = "/fr/products";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
