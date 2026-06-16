import { c as createComponent } from './consts_lZTZLDJh.mjs';
import 'piccolore';
import { aJ as maybeRenderHead, aK as addAttribute, X as renderComponent, Y as renderTemplate, aN as unescapeHTML, aM as renderSlot, aL as Fragment } from './sequence_BOg4xrWM.mjs';
import { $ as $$MainLayout } from './MainLayout_DWGq4cje.mjs';
import { $ as $$HeroSection, a as $$FeaturesGeneral, b as $$PricingSection } from './PricingSection_DouC9G3C.mjs';
import { $ as $$Icon, p as partnersData } from './global_6cnxje-w.mjs';
import 'clsx';
import { $ as $$Image } from './_astro_assets_m5DGn2Iu.mjs';
import { r as renderScript } from './script_B7gzqb1r.mjs';
import { f as featureImage } from './features-image_W5Vqnpgd.mjs';
import { g as getRelativeLocaleUrl } from './i18n_DmSBeoNI.mjs';

const $$GithubBtn = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$GithubBtn;
  const { title, url } = Astro2.props;
  const baseClasses = "group inline-flex items-center justify-center gap-x-3 rounded-lg px-4 py-3 text-center text-sm font-medium text-neutral-700 ring-zinc-500 focus-visible:ring-3 transition duration-300 outline-hidden";
  const borderClasses = "border border-transparent";
  const bgColorClasses = "bg-yellow-400 dark:focus:outline-hidden";
  const hoverClasses = "hover:shadow-2xl hover:shadow-yellow-500";
  const fontSizeClasses = "2xl:text-base";
  const ringClasses = "dark:ring-zinc-200";
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`${baseClasses} ${borderClasses} ${bgColorClasses} ${hoverClasses} ${fontSizeClasses} ${ringClasses}`, "class")}${addAttribute(url, "href")} target="_blank" rel="noopener noreferrer"> ${renderComponent($$result, "Icon", $$Icon, { "name": "github" })} ${title} </a>`;
}, "C:/myProject/G K Enterprise/client/src/components/ui/buttons/GithubBtn.astro", void 0);

const $$HeroSectionAlt = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$HeroSectionAlt;
  const { title, subTitle, url } = Astro2.props;
  const btnTitle = Astro2.currentLocale === "fr" ? "Continuer avec Github" : "Continue with Github";
  return renderTemplate`${maybeRenderHead()}<section class="relative mx-auto max-w-[85rem] px-4 pt-10 pb-24 sm:px-6 lg:px-8">  <div class="absolute top-[55%] left-0 scale-90 md:top-[20%] xl:top-[25%] xl:left-[10%]"> <svg width="64" height="64" fill="none" stroke-width="1.5" color="#ea580c" viewBox="0 0 24 24"> <path fill="#ea580c" stroke="#ea580c" stroke-linecap="round" stroke-linejoin="round" d="M12 23a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM3 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM3 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path> <path stroke="#ea580c" stroke-linecap="round" stroke-linejoin="round" d="M21 7.353v9.294a.6.6 0 0 1-.309.525l-8.4 4.666a.6.6 0 0 1-.582 0l-8.4-4.666A.6.6 0 0 1 3 16.647V7.353a.6.6 0 0 1 .309-.524l8.4-4.667a.6.6 0 0 1 .582 0l8.4 4.667a.6.6 0 0 1 .309.524Z"></path> <path stroke="#ea580c" stroke-linecap="round" stroke-linejoin="round" d="m3.528 7.294 8.18 4.544a.6.6 0 0 0 .583 0l8.209-4.56M12 21v-9"></path> </svg> </div> <div class="absolute top-0 left-[85%] scale-75"> <svg width="64" height="64" fill="none" stroke-width="1.5" color="#fbbf24" viewBox="0 0 24 24"> <path stroke="#fbbf24" stroke-linecap="round" stroke-linejoin="round" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"></path> <path fill="#fbbf24" stroke="#fbbf24" stroke-linecap="round" stroke-linejoin="round" d="M5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path> <path stroke="#fbbf24" stroke-linecap="round" stroke-linejoin="round" d="M5 10.5V9M5 15v-1.5"></path> <path fill="#fbbf24" stroke="#fbbf24" stroke-linecap="round" stroke-linejoin="round" d="M5 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM19 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path> <path stroke="#fbbf24" stroke-linecap="round" stroke-linejoin="round" d="M10.5 19H9M15 19h-1.5"></path> </svg> </div> <div class="absolute bottom-[5%] left-[60%] scale-[.6] xl:bottom-[15%] xl:left-[35%]"> <svg width="64" height="64" fill="none" stroke-width="1.5" color="#a3a3a3" viewBox="0 0 24 24"> <path stroke="#a3a3a3" stroke-linecap="round" stroke-linejoin="round" d="M5.164 17c.29-1.049.67-2.052 1.132-3M11.5 7.794A16.838 16.838 0 0 1 14 6.296M4.5 22a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"></path> <path stroke="#a3a3a3" stroke-linecap="round" stroke-linejoin="round" d="M9.5 12a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5ZM19.5 7a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"></path> </svg> </div>  <div class="mx-auto mt-5 max-w-xl text-center"> <h2 class="block text-4xl leading-tight font-bold tracking-tight text-balance text-neutral-800 md:text-5xl lg:text-6xl dark:text-neutral-200"> ${title} </h2> </div>  <div class="mx-auto mt-5 max-w-3xl text-center"> ${subTitle && renderTemplate`<p class="text-lg text-pretty text-neutral-600 dark:text-neutral-400"> ${subTitle} </p>`} </div>  ${url && renderTemplate`<div class="mt-8 flex justify-center gap-3"> ${renderComponent($$result, "GithubBtn", $$GithubBtn, { "url": url, "title": btnTitle })} </div>`} </section>`;
}, "C:/myProject/G K Enterprise/client/src/components/sections/landing/HeroSectionAlt.astro", void 0);

const $$ClientsSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ClientsSection;
  const { title, subTitle, partners } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full">  <div class="mx-auto mb-6 w-full space-y-1 text-center sm:w-1/2 lg:w-1/3"> <h2 class="text-2xl leading-tight font-bold text-balance text-neutral-800 sm:text-3xl dark:text-neutral-200"> ${title} </h2> ${subTitle && renderTemplate`<p class="leading-tight text-pretty text-neutral-600 dark:text-neutral-400"> ${subTitle} </p>`} </div> <div class="flex flex-col items-center justify-center gap-y-2 sm:flex-row sm:gap-x-12 sm:gap-y-0 lg:gap-x-24">  ${partners.map((partner) => renderTemplate`<a${addAttribute(partner.href, "href")} target="_blank" rel="noopener noreferrer"> <div>${unescapeHTML(partner.icon)}</div> </a>`)} </div> </section>`;
}, "C:/myProject/G K Enterprise/client/src/components/sections/landing/ClientsSection.astro", void 0);

const $$TabNav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$TabNav;
  const { aria, dataTab, id, heading, content, first } = Astro2.props;
  const BUTTON_CLASS = "dark:hover:bg-neutral-700 rounded-xl p-4 text-start outline-hidden ring-zinc-500 transition duration-300 hover:bg-neutral-200 focus-visible:ring-3 hs-tab-active:bg-neutral-50 hs-tab-active:shadow-md hs-tab-active:hover:border-transparent dark:ring-zinc-200 dark:focus:outline-hidden  dark:hs-tab-active:bg-neutral-700/60 md:p-5";
  return renderTemplate`${maybeRenderHead()}<button type="button"${addAttribute(`${first ? "active " : ""}${BUTTON_CLASS}`, "class")}${addAttribute(id, "id")}${addAttribute(dataTab, "data-hs-tab")}${addAttribute(aria, "aria-controls")}${addAttribute(first ? "true" : "false", "aria-selected")} role="tab">  <span class="flex"> ${renderSlot($$result, $$slots["default"])}  <span class="ms-6 grow">  <span class="hs-tab-active:text-orange-400 dark:hs-tab-active:text-orange-300 block text-lg font-bold text-neutral-800 dark:text-neutral-200">${heading}</span>  <span class="hs-tab-active:text-neutral-600 dark:hs-tab-active:text-neutral-200 mt-1 block text-neutral-500 dark:text-neutral-400">${content}</span> </span> </span> </button>`;
}, "C:/myProject/G K Enterprise/client/src/components/ui/blocks/TabNav.astro", void 0);

const $$TabContent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$TabContent;
  const { id, aria, src, alt, first, second } = Astro2.props;
  const firstClass = first ? "" : "hidden";
  const secondClass = second ? "shadow-xl aspect-video object-contain bg-neutral-300 dark:bg-neutral-600 p-3 lg:object-cover lg:aspect-square shadow-neutral-200 rounded-xl dark:shadow-neutral-900/[.2]" : "shadow-xl aspect-video object-cover lg:aspect-square shadow-neutral-200 rounded-xl dark:shadow-neutral-900/[.2]";
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(id, "id")} role="tabpanel"${addAttribute(firstClass, "class")}${addAttribute(aria, "aria-labelledby")}> <!-- Astro Image component to display the image with dynamic classes based on the 'second' property --> ${renderComponent($$result, "Image", $$Image, { "src": src, "alt": alt, "class": secondClass, "draggable": "false", "format": "avif", "loading": "eager" })} </div>`;
}, "C:/myProject/G K Enterprise/client/src/components/ui/blocks/TabContent.astro", void 0);

const $$FeaturesNavs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$FeaturesNavs;
  const { title, tabs } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> <div class="relative p-6 md:p-16"> <div class="relative z-10 lg:grid lg:grid-cols-12 lg:items-center lg:gap-16">  <div class="mb-10 lg:order-2 lg:col-span-6 lg:col-start-8 lg:mb-0"> <h2 class="text-2xl font-bold text-neutral-800 sm:text-3xl dark:text-neutral-200">  ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(title)}` })} </h2>  <nav class="mt-5 grid gap-4 md:mt-10" aria-label="Tabs" role="tablist"> ${tabs.map((tab, index) => renderTemplate`${renderComponent($$result, "TabNav", $$TabNav, { "id": `tabs-with-card-item-${index + 1}`, "dataTab": `#tabs-with-card-${index + 1}`, "aria": `tabs-with-card-${index + 1}`, "heading": tab.heading, "content": tab.content, "first": tab.first }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "name": tab.svg })} ` })}`)} </nav> </div>  <div class="lg:col-span-6"> <div class="relative"> <div> ${tabs.map((tab, index) => renderTemplate`${renderComponent($$result, "TabContent", $$TabContent, { "id": `tabs-with-card-${index + 1}`, "aria": `tabs-with-card-item-${index + 1}`, "src": tab.src, "alt": tab.alt, "first": tab.first, "second": tab.second })}`)} </div> </div> </div> </div> <div class="absolute inset-0 grid h-full w-full grid-cols-12">  <div class="col-span-full h-5/6 w-full rounded-xl bg-neutral-100 sm:h-3/4 lg:col-span-7 lg:col-start-6 lg:h-full dark:bg-white/[.075]"></div> </div> </div> </section>`;
}, "C:/myProject/G K Enterprise/client/src/components/sections/features/FeaturesNavs.astro", void 0);

const $$TestimonialItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$TestimonialItem;
  const { content, author, role, avatarSrc } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<blockquote class="relative"> ${renderComponent($$result, "Icon", $$Icon, { "name": "quotation" })} <div class="relative z-10"> <p class="text-xl text-neutral-800 italic dark:text-neutral-200"> ${content} </p> </div> <div class="mt-6"> <div class="flex items-center"> <div class="shrink-0"> ${renderComponent($$result, "Image", $$Image, { "class": "h-8 w-8 rounded-full", "src": avatarSrc, "alt": "Avatar Description", "loading": "eager", "inferSize": true })} </div> <div class="ms-4 grow"> <div class="font-bold text-neutral-800 dark:text-neutral-200"> ${author} </div> <div class="text-xs text-neutral-500">${role}</div> </div> </div> </div> </blockquote>`;
}, "C:/myProject/G K Enterprise/client/src/components/sections/testimonials/TestimonialItem.astro", void 0);

const $$StatsGrid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$StatsGrid;
  const { count, description, index } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="-m-0.5 flex flex-col p-4 sm:p-8"> <div class="mb-2 flex items-end gap-x-2 text-3xl font-bold text-neutral-800 sm:text-5xl dark:text-neutral-200"> ${index === 1 || index === 2 ? renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": "arrowUp" })}` : null} ${count} </div> <p class="text-sm text-neutral-600 sm:text-base dark:text-neutral-400"> ${description} </p> </li>`;
}, "C:/myProject/G K Enterprise/client/src/components/ui/blocks/StatsGrid.astro", void 0);

const $$TestimonialsSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$TestimonialsSection;
  const { title, subTitle, testimonials, statistics } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full">  <div class="lg:grid lg:grid-cols-12 lg:items-center lg:justify-between lg:gap-16"> <div class="lg:col-span-5 lg:col-start-1">  <div class="mb-8"> <h2 class="mb-2 text-3xl font-bold text-neutral-800 lg:text-4xl dark:text-neutral-200"> ${title} </h2> ${subTitle && renderTemplate`<p class="text-neutral-600 dark:text-neutral-400">${subTitle}</p>`} </div>  ${testimonials && testimonials.map((testimonial) => renderTemplate`${renderComponent($$result, "TestimonialItem", $$TestimonialItem, { "content": testimonial.content, "author": testimonial.author, "role": testimonial.role, "avatarSrc": testimonial.avatarSrc })}`)} </div> ${statistics && renderTemplate`<div class="mt-10 lg:col-span-6 lg:col-end-13 lg:mt-0"> <div class="space-y-6 sm:space-y-8"> <ul class="grid grid-cols-2 divide-x-2 divide-y-2 divide-neutral-300 overflow-hidden dark:divide-neutral-700">  ${statistics.map((stat, index) => renderTemplate`${renderComponent($$result, "StatsGrid", $$StatsGrid, { "count": stat.count, "description": stat.description, "index": index })}`)} </ul> </div> </div>`} </div> </section>`;
}, "C:/myProject/G K Enterprise/client/src/components/sections/testimonials/TestimonialsSection.astro", void 0);

const $$AccordionItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$AccordionItem;
  const { id, collapseId, question, answer, first } = Astro2.props;
  const ACCORDION_CLASS_DEFAULT = "hs-accordion pb-3 active";
  const ACCORDION_CLASS_COLLAPSED = "hs-accordion pt-6 pb-3";
  const ACCORDION_CONTENT_CLASS = "hs-accordion-content w-full overflow-hidden transition-[height] duration-300";
  function getAccordionClass(first2 = false) {
    return first2 ? ACCORDION_CLASS_DEFAULT : ACCORDION_CLASS_COLLAPSED;
  }
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(getAccordionClass(first), "class")}${addAttribute(id, "id")}>  <button class="hs-accordion-toggle group inline-flex w-full items-center justify-between gap-x-3 rounded-lg pb-3 text-start font-bold text-balance text-neutral-800 ring-zinc-500 outline-hidden transition hover:text-neutral-500 focus-visible:ring-3 md:text-lg dark:text-neutral-200 dark:ring-zinc-200 dark:hover:text-neutral-400 dark:focus:outline-hidden"${addAttribute(first, "aria-expanded")}${addAttribute(collapseId, "aria-controls")}> ${question}  ${renderComponent($$result, "Icon", $$Icon, { "name": "accordionNotActive" })}  ${renderComponent($$result, "Icon", $$Icon, { "name": "accordionActive" })} </button>  <div${addAttribute(collapseId, "id")} role="region"${addAttribute(id, "aria-labelledby")}${addAttribute(`${first ? ACCORDION_CONTENT_CLASS : "hidden " + ACCORDION_CONTENT_CLASS}`, "class")}>  <p class="text-pretty text-neutral-600 dark:text-neutral-400"> ${answer} </p> </div> </div>`;
}, "C:/myProject/G K Enterprise/client/src/components/ui/blocks/AccordionItem.astro", void 0);

const $$FAQ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$FAQ;
  const { title = "Frequently Asked Questions", faqs } = Astro2.props;
  const faqItems = Array.isArray(faqs) ? faqs : faqs?.faqs ?? [];
  const subTitle = Array.isArray(faqs) ? null : faqs?.subTitle;
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-14 2xl:max-w-full"> <div class="grid gap-10 md:grid-cols-5"> <div class="md:col-span-2"> <h2 class="text-3xl font-bold tracking-tight text-balance text-neutral-800 md:text-4xl dark:text-neutral-200">${unescapeHTML(title)}</h2> ${subTitle && renderTemplate`<p class="mt-4 text-pretty text-neutral-600 dark:text-neutral-400"> ${subTitle} </p>`} </div> <div class="md:col-span-3"> <div class="hs-accordion-group divide-y divide-neutral-200 dark:divide-neutral-700"> ${faqItems.map((item, index) => renderTemplate`${renderComponent($$result, "AccordionItem", $$AccordionItem, { "id": `faq-${index + 1}`, "collapseId": `faq-collapse-${index + 1}`, "question": item.question, "answer": item.answer, "first": index === 0 })}`)} </div> </div> </div> </section>`;
}, "C:/myProject/G K Enterprise/client/src/components/sections/misc/FAQ.astro", void 0);

const $$AnnouncementBanner = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$AnnouncementBanner;
  const { title, btnId, btnTitle, url } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "astro-banner", "astro-banner", { "btnId": btnId }, { "default": () => renderTemplate` ${maybeRenderHead()}<div class="fixed start-1/2 bottom-0 z-50 mx-auto w-full -translate-x-1/2 transform p-6 sm:max-w-4xl" role="region" aria-label="Informational Banner"> <div class="rounded-xl bg-neutral-800 bg-[url('/banner-pattern.svg')] bg-cover bg-center bg-no-repeat p-4 text-center shadow-xs dark:bg-neutral-200"> <div class="flex items-center justify-center"> <div class="ml-auto"> ${title && renderTemplate`<p class="me-2 inline-block font-medium text-neutral-50 dark:text-neutral-700"> ${title} </p>`} <a class="group inline-flex items-center gap-x-2 rounded-full border-2 border-neutral-50 px-3 py-2 text-sm font-semibold text-neutral-50 backdrop-brightness-75 transition duration-300 hover:border-neutral-100/70 hover:text-neutral-50/70 disabled:pointer-events-none disabled:opacity-50 sm:backdrop-brightness-100 dark:border-neutral-700 dark:text-neutral-700 dark:backdrop-brightness-100 dark:hover:border-neutral-700/70 dark:hover:text-neutral-800/70 dark:focus:outline-hidden"${addAttribute(url, "href")} target="_blank"> ${btnTitle} <svg class="size-4 shrink-0 transition duration-300 group-hover:translate-x-1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"></path></svg> </a> </div> <button type="button" class="ml-auto inline-flex items-center gap-x-2 rounded-full border border-transparent bg-gray-100 p-2 text-sm font-semibold text-gray-800 hover:bg-gray-200 disabled:pointer-events-none disabled:opacity-50 dark:bg-neutral-700 dark:text-neutral-50 dark:hover:bg-neutral-700/80 dark:hover:text-neutral-50 dark:focus:outline-hidden"${addAttribute(btnId, "id")}> <span class="sr-only">Dismiss</span> <svg class="size-5 shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg> </button> </div> </div> </div> ` })} ${renderScript($$result, "C:/myProject/G K Enterprise/client/src/components/ui/banners/AnnouncementBanner.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/myProject/G K Enterprise/client/src/components/ui/banners/AnnouncementBanner.astro", void 0);

const heroImage = new Proxy({"src":"/_astro/hero-image.DRPoHq2O.avif","width":4067,"height":2576,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/myProject/G K Enterprise/client/src/images/hero-image.avif";
							}
							
							return target[name];
						}
					});

const subTitle$1 = "Posez-nous toutes vos questions sur notre marque et nos produits, et obtenez des réponses factuelles.";
const faqs = [{"question":"Quels types d'outils sont inclus dans le Kit de Démarrage?","answer":"Le Kit de Démarrage comprend des outils à main et électriques essentiels pour différents projets de bricolage, notamment des marteaux, des perceuses, des tournevis et une variété de fixations. C'est une sélection soigneusement élaborée pour aider les débutants et les bricoleurs expérimentés à aborder la plupart des tâches d'amélioration de l'habitat."},{"question":"Puis-je passer du Kit de Démarrage à la Boîte à Outils Professionnelle?","answer":"Absolument ! Vous pouvez passer à la Boîte à Outils Professionnelle à tout moment pour accéder à une gamme plus large d'outils de haute qualité, bénéficier d'un support client prioritaire et recevoir un contenu exclusif. Contactez notre équipe de support pour une transition sans problème."},{"question":"Quels sont les rabais disponibles pour les commandes en gros via le plan Boîte à Outils Professionnelle?","answer":"Les membres de la Boîte à Outils Professionnelle ont droit à des rabais exclusifs sur les commandes en gros, dont le pourcentage peut varier en fonction du volume de la commande. Contactez-nous pour discuter de vos besoins, et nous vous fournirons une structure de rabais personnalisée."},{"question":"À quoi puis-je m'attendre en termes de support client?","answer":"Tous nos clients bénéficient d'un support par e-mail dédié. Avec le Kit de Démarrage, vous recevrez notre support standard, tandis que le plan Boîte à Outils Professionnelle vous mettra à niveau vers un support prioritaire, ce qui signifie des temps de réponse plus rapides et une assistance spécialisée."},{"question":"À quelle fréquence sont mises à jour les ressources en ligne et les tutoriels?","answer":"Nous mettons régulièrement à jour nos ressources en ligne et nos tutoriels pour refléter les dernières tendances en matière de bricolage et de construction, ainsi que les introductions de nouveaux outils et techniques. Notre matériel vise à être complet et convivial pour tous les niveaux de compétence."},{"question":"ScrewFast propose-t-il des services pour les grands projets de construction?","answer":"Oui, nos Solutions Entreprise sont conçues pour les grandes entreprises ayant besoin de services complets. Nous fournissons des consultations, de la planification et de l'approvisionnement en outils et matériaux de haute qualité, ainsi que des solutions de personnel pour des besoins de construction importants. Contactez-nous pour un devis personnalisé."}];
const faqs$1 = {
  subTitle: subTitle$1,
  faqs,
};

const features = [
	{
		heading: "Équipes dédiées",
		content: "Bénéficiez de nos équipes engagées qui veillent à ce que votre réussite soit personnelle. Comptez sur un accompagnement expert et des résultats exceptionnels tout au long de votre parcours de projet.",
		svg: "groups"
	},
	{
		heading: "Simplicité et accessibilité",
		content: "Trouvez des solutions faciles à utiliser et abordables avec la gamme d'outils et d'équipements de ScrewFast. Nos produits simplifient l'approvisionnement et permettent de respecter les budgets de projet.",
		svg: "verified"
	},
	{
		heading: "Documentation complète",
		content: "Intégrez facilement grâce aux guides exhaustifs et aux bibliothèques de ScrewFast. Réalisez une adoption de produit sans faille avec notre ensemble complet de documentation conçu pour votre succès.",
		svg: "books"
	},
	{
		heading: "Conception centrée sur l'utilisateur",
		content: "Faites l'expérience de la différence avec la conception axée sur l'utilisateur de ScrewFast, où la fonctionnalité rencontre la praticité pour une expérience de travail améliorée.",
		svg: "frame"
	}
];

const title = "Tarification Simple et Transparente";
const subTitle = "Augmentez l'efficacité avec les plans clairs et axés sur la valeur de ScrewFast.";
const badge = "Meilleure valeur";
const thirdOption = "Solutions Entreprise?";
const btnText = "Obtenez un Devis Personnalisé";
const starterKit = {"name":"Kit de Démarrage","description":"Meilleure option pour les projets de bricolage","price":"$49","cents":".00","billingFrequency":"USD / mensuel","features":["Outils matériels essentiels","Accès aux guides et tutoriels","Support standard"],"purchaseBtnTitle":"Obtenez le Kit de Démarrage","purchaseLink":"#"};
const professionalToolbox = {"name":"Boîte à Outils Professionnelle","description":"Idéale pour les utilisations à grande échelle","price":"$89","cents":".00","billingFrequency":"USD / mensuel","features":["Sélection d'outils premium","Support prioritaire","Contenu et offres exclusifs","Remises sur les commandes en gros"],"purchaseBtnTitle":"Obtenez la Boîte à Outils Professionnelle","purchaseLink":"#"};
const pricing = {
  title,
  subTitle,
  badge,
  thirdOption,
  btnText,
  starterKit,
  professionalToolbox,
};

const construction = new Proxy({"src":"/_astro/construction-image.6K-xbeL4.avif","width":1600,"height":2400,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/myProject/G K Enterprise/client/src/images/construction-image.avif";
							}
							
							return target[name];
						}
					});

const tools = new Proxy({"src":"/_astro/automated-tools.Csn_06Tm.avif","width":1264,"height":847,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/myProject/G K Enterprise/client/src/images/automated-tools.avif";
							}
							
							return target[name];
						}
					});

const dashboard = new Proxy({"src":"/_astro/dashboard-image.DDrnCTtL.avif","width":1033,"height":241,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/myProject/G K Enterprise/client/src/images/dashboard-image.avif";
							}
							
							return target[name];
						}
					});

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  const avatarSrcs = [
    "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    "https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80",
    "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
  ];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "lang": "fr" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AnnouncementBanner", $$AnnouncementBanner, { "btnId": "dismiss-button", "btnTitle": "Découvrez ScrewFast sur GitHub", "url": "https://github.com/mearashadowfax/ScrewFast" })} ${renderComponent($$result2, "HeroSection", $$HeroSection, { "title": `Équipez vos projets avec <span class="text-yellow-500 dark:text-yellow-400">ScrewFast</span>`, "subTitle": "Outils matériels de haute qualité et services de construction experts pour tous les besoins en projet.", "primaryBtn": "Commencez à explorer", "primaryBtnURL": getRelativeLocaleUrl("fr", "products"), "secondaryBtn": "Contacter l'équipe commerciale", "secondaryBtnURL": getRelativeLocaleUrl("fr", "contact"), "withReview": true, "avatars": avatarSrcs, "rating": `<span class="font-bold">4.8</span> / 5`, "starCount": 4, "reviews": `À partir de plus de <span class="font-bold">12,8k</span> avis`, "src": heroImage, "alt": "Pile de boîtes de produits ScrewFast contenant des outils matériels assortis" })} ${renderComponent($$result2, "ClientsSection", $$ClientsSection, { "title": "Faites confiance aux leaders de l'industrie", "subTitle": "Découvrez la fiabilité choisie par les géants de l'industrie.", "partners": partnersData })} ${renderComponent($$result2, "FeaturesGeneral", $$FeaturesGeneral, { "title": "Répondre aux exigences de l'industrie", "subTitle": "Chez ScrewFast, nous relevons les défis uniques rencontrés dans les secteurs du matériel et de la construction. Des outils de pointe aux services experts, nous sommes déterminés à vous aider à surmonter les obstacles et à atteindre vos objectifs.", "src": featureImage, "alt": "Produits ScrewFast dans des boîtes flottantes", "features": features })} ${renderComponent($$result2, "FeaturesNavs", $$FeaturesNavs, { "title": `Personnalisez les offres de <span class="text-yellow-500 dark:text-yellow-400">ScrewFast</span> pour répondre parfaitement à vos besoins en matériel et en construction.`, "tabs": [
    {
      heading: "Outils de pointe",
      content: "Optimisez vos projets avec les outils de pointe de ScrewFast. Faites l'expérience d'une efficacité accrue dans la gestion de la construction avec nos solutions automatisées sophistiquées.",
      svg: "tools",
      src: tools,
      alt: "Équipement lourd jaune et noir sur un champ d'herbe brune",
      first: true
    },
    {
      heading: "Tableaux de bord intuitifs",
      content: "Naviguez facilement avec les tableaux de bord intuitifs de ScrewFast. Configurez et supervisez vos projets de manière transparente, avec des interfaces conviviales conçues pour une gestion efficace des flux de travail rapide et efficace.",
      svg: "dashboard",
      src: dashboard,
      alt: "Capture d'écran ou représentation graphique du tableau de bord intuitif",
      second: true
    },
    {
      heading: "Fonctionnalités robustes",
      content: "Minimisez la complexité, maximisez la productivité. Les fonctionnalités robustes de ScrewFast sont conçues pour rationaliser votre processus de construction, offrant des résultats qui se distinguent par leur excellence.",
      svg: "house",
      src: construction,
      alt: "Structure métallique grise d'un bâtiment près d'une grue à tour pendant la journée"
    }
  ] })} ${renderComponent($$result2, "TestimonialsSection", $$TestimonialsSection, { "title": "Accélérez vos projets", "subTitle": "Chez ScrewFast, nous assurons un démarrage rapide avec une configuration de compte instantanée. Découvrez la vitesse de la construction redéfinie.", "testimonials": [
    {
      content: "ScrewFast a considérablement augmenté l'efficacité de notre projet. La configuration a été instantanée et leurs temps de réponse rapides sont phénoménaux. Vraiment un changement de jeu dans le support matériel et de construction !",
      author: "Samantha Ruiz",
      role: "Directrice des opérations | ConstructIt Inc.",
      avatarSrc: "https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?q=80&w=1453&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
    }
  ], "statistics": [
    {
      count: "70k+",
      description: "clients équipés — des bricoleurs aux grandes entreprises de construction"
    },
    {
      count: "35%",
      description: "hausse de l'efficacité des projets avec les outils et services de ScrewFast"
    },
    {
      count: "15,3%",
      description: "réduction des coûts de maintenance rapportée par des clients à long terme"
    },
    {
      count: "2x",
      description: "assemblage plus rapide grâce à des solutions de fixation innovantes"
    }
  ] })} ${renderComponent($$result2, "PricingSection", $$PricingSection, { "pricing": pricing })} ${renderComponent($$result2, "FAQ", $$FAQ, { "title": "Questions<br />fréquemment posées", "faqs": faqs$1 })} ${renderComponent($$result2, "HeroSectionAlt", $$HeroSectionAlt, { "title": "Construisons ensemble", "subTitle": "ScrewFast est un modèle open source, méticuleusement conçu avec les frameworks Astro, Tailwind CSS et Preline UI.", "url": "https://github.com/mearashadowfax/ScrewFast" })} ` })}`;
}, "C:/myProject/G K Enterprise/client/src/pages/fr/index.astro", void 0);

const $$file = "C:/myProject/G K Enterprise/client/src/pages/fr/index.astro";
const $$url = "/fr";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
