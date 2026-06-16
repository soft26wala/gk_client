import { c as createComponent } from './consts_lZTZLDJh.mjs';
import 'piccolore';
import { aJ as maybeRenderHead, X as renderComponent, Y as renderTemplate } from './sequence_BOg4xrWM.mjs';
import { $ as $$MainLayout } from './MainLayout_DWGq4cje.mjs';
import { r as renderScript } from './script_B7gzqb1r.mjs';
import { a as $$TextInput, b as $$AuthBtn, $ as $$Icon, S as SITE } from './global_6cnxje-w.mjs';
import { $ as $$EmailContactInput, a as $$PhoneInput, b as $$TextAreaInput, c as $$ContactIconBlock } from './TextAreaInput_BeSH1ZCV.mjs';

const $$ContactSectionFr = createComponent(async ($$result, $$props, $$slots) => {
  const title = "Contactez-nous";
  const subTitle = "Vous avez des questions ou souhaitez discuter d'un projet ? Contactez-nous et laissons-nous élaborer la solution parfaite avec nos outils et services.";
  const formTitle = "Remplissez le formulaire ci-dessous";
  const formSubTitle = "Nous vous répondrons dans un délai de 1 à 2 jours ouvrables.";
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14"> <div class="mx-auto max-w-2xl lg:max-w-5xl"> <div class="text-center"> <h1 class="text-2xl font-bold tracking-tight text-balance text-neutral-800 md:text-4xl md:leading-tight dark:text-neutral-200"> ${title} </h1> <p class="mt-1 text-pretty text-neutral-600 dark:text-neutral-400"> ${subTitle} </p> </div> <div class="mt-12 grid items-center gap-6 lg:grid-cols-2 lg:gap-16"> <div class="flex flex-col rounded-xl p-4 sm:p-6 lg:p-8"> <h2 class="mb-8 text-xl font-bold text-neutral-700 dark:text-neutral-300"> ${formTitle} </h2>  <form id="contactFormFr"> <div class="grid gap-4"> <div class="grid grid-cols-1 gap-4 sm:grid-cols-2"> ${renderComponent($$result, "TextInput", $$TextInput, { "id": "hs-firstname-contacts", "label": "Prénom", "name": "hs-firstname-contacts" })} ${renderComponent($$result, "TextInput", $$TextInput, { "id": "hs-lastname-contacts", "label": "Nom", "name": "hs-firstname-contacts" })} </div> ${renderComponent($$result, "EmailContactInput", $$EmailContactInput, { "id": "hs-email-contacts" })} ${renderComponent($$result, "PhoneInput", $$PhoneInput, { "id": "hs-phone-number" })} ${renderComponent($$result, "TextAreaInput", $$TextAreaInput, { "id": "hs-about-contacts", "label": "Détails", "name": "hs-about-contacts" })} </div> <div class="mt-4 grid"> ${renderComponent($$result, "AuthBtn", $$AuthBtn, { "title": "Envoyer un message" })} </div> <div class="mt-3 text-center"> <p class="text-sm text-neutral-600 dark:text-neutral-400"> ${formSubTitle} </p> </div> </form> </div>  <div class="divide-y divide-neutral-300 dark:divide-neutral-700"> ${renderComponent($$result, "ContactIconBlock", $$ContactIconBlock, { "heading": "Base de connaissances", "content": "Parcourez tous nos articles de base de connaissances.", "isLinkVisible": true, "linkTitle": "Visiter les guides et tutoriels", "linkURL": "#", "isArrowVisible": true }, { "default": async ($$result2) => renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "question" })} ` })} ${renderComponent($$result, "ContactIconBlock", $$ContactIconBlock, { "heading": "FAQ", "content": "Explorez notre FAQ pour des réponses rapides et claires aux questions courantes.", "isLinkVisible": true, "linkTitle": "Visiter la FAQ", "linkURL": "#", "isArrowVisible": true }, { "default": async ($$result2) => renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "chatBubble" })} ` })} ${renderComponent($$result, "ContactIconBlock", $$ContactIconBlock, { "heading": "Visitez notre bureau", "content": "ScrewFast UK", "isAddressVisible": true, "addressContent": "72 Union Terrace, E10 4PE London" }, { "default": async ($$result2) => renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "mapPin" })} ` })} ${renderComponent($$result, "ContactIconBlock", $$ContactIconBlock, { "heading": "Contactez-nous par e-mail", "content": "Préférez-vous le texte écrit ? Envoyez-nous un e-mail à", "isLinkVisible": true, "linkTitle": "support@screwfast.uk", "linkURL": "#" }, { "default": async ($$result2) => renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "envelopeOpen" })} ` })} </div> </div> </div> </section> ${renderScript($$result, "C:/myProject/G K Enterprise/client/src/components/sections/fr/ContactSection_fr.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/myProject/G K Enterprise/client/src/components/sections/fr/ContactSection_fr.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = `Nous Contacter | ${SITE.title}`;
  const metaDescription = "Vous avez des questions ou souhaitez discuter d'un projet ? Contactez-nous et élaborons ensemble la solution parfaite avec nos outils et services.";
  const ogTitle = "Nous Contacter | ScrewFast";
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle, "lang": "fr", "customDescription": metaDescription, "customOgTitle": ogTitle, "structuredData": {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://screwfast.uk/fr/contact",
    url: "https://screwfast.uk/fr/contact",
    name: "Nous Contacter | ScrewFast",
    description: "Vous avez des questions ou souhaitez discuter d'un projet ? Contactez-nous et élaborons ensemble la solution parfaite avec nos outils et services.",
    isPartOf: {
      "@type": "WebSite",
      url: "https://screwfast.uk/fr/",
      name: "ScrewFast",
      description: "ScrewFast propose des outils matériels de premier ordre et des services de construction experts pour répondre à tous vos besoins de projet."
    },
    inLanguage: "fr"
  } }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ContactSection", $$ContactSectionFr, {})} ` })}`;
}, "C:/myProject/G K Enterprise/client/src/pages/fr/contact.astro", void 0);

const $$file = "C:/myProject/G K Enterprise/client/src/pages/fr/contact.astro";
const $$url = "/fr/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
