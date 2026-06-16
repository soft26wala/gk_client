import { c as createComponent } from './consts_lZTZLDJh.mjs';
import 'piccolore';
import { X as renderComponent, Y as renderTemplate, aK as addAttribute, aJ as maybeRenderHead } from './sequence_BOg4xrWM.mjs';
import { $ as $$MainLayout } from './MainLayout_DWGq4cje.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const faqs = [
    {
      question: "What are Rebar Couplers?",
      answer: "Rebar Couplers are mechanical connectors used to join two reinforcement bars, providing a strong, reliable, and efficient alternative to lap splicing."
    },
    {
      question: "What products does GK Enterprise Offer?",
      answer: "We offer Cold Forged Couplers, Rollfit Couplers, MBT Couplers, Taper Couplers"
    },
    {
      question: "Why should I choose GK Enterprise Rebar Couplers?",
      answer: "GK Enterprise offers precision-engineered couplers, consistent quality, competitive pricing, timely delivery, and dedicated customer support for all project requirements."
    },
    {
      question: "Can you supply couplers in bulk quantities?",
      answer: "Yes, GK Enterprise has the capability to fulfill both small and large-volume orders efficiently"
    },
    {
      question: "What is the delivery timeline? ",
      answer: "Delivery timelines depend on order quantity and location. We strive to ensure timely and reliable deliveries."
    },
    {
      question: "Do you offer customized solutions? ",
      answer: "Yes, we can provide customized coupler solutions based on project requirements and bar sizes."
    },
    {
      question: "Do you provide test certificates? ",
      answer: "Yes, test reports and quality documents can be provided as per customer requirements and project specifications."
    },
    {
      question: "How can I contact GK Enterprise?",
      answer: "You can reach us through our contact number, email address, or website inquiry form. Our team will respond promptly to your requirements."
    }
  ];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "FAQ | GK Enterprise", "customDescription": "Frequently asked questions about GK Enterprise products, rebar couplers, and order support.", "class": "astro-d7buufdx" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", '<section class="relative isolate overflow-hidden py-16 sm:py-20 lg:py-24 astro-d7buufdx"> <div class="mx-auto max-w-4xl astro-d7buufdx"> <div class="mb-10 max-w-2xl astro-d7buufdx" data-aos="fade-up"> <span class="inline-flex rounded-full border dark:border-yellow-300/50 border-yellow-400  bg-white/12 px-4 py-2 text-sm font-semibold text-yellow-400 backdrop-blur-md astro-d7buufdx">\nSupport Center\n</span> <h1 class="mt-5 text-4xl font-bold tracking-normal dark:text-white text-gray-600 sm:text-5xl astro-d7buufdx">\nFrequently Asked Questions\n</h1> <p class="mt-4 text-base leading-7 dark:text-neutral-100 text-gray-400 sm:text-lg astro-d7buufdx">\nCommon questions with answers for quick product and\n          order support.\n</p> </div> <div class="space-y-4 astro-d7buufdx"> ', " </div> </div> </section> <script>\n    document.querySelectorAll('.faq-toggle').forEach(button => {\n      button.addEventListener('click', () => {\n        const card = button.closest('.faq-card');\n        const isOpen = card.classList.toggle('is-open');\n        button.setAttribute('aria-expanded', String(isOpen));\n      });\n    });\n  <\/script> "])), maybeRenderHead(), faqs.map((faq, index) => renderTemplate`<article class="faq-card overflow-hidden rounded-2xl border border-white/40 bg-white/65 shadow-xl shadow-neutral-900/10 backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:border-yellow-300/70 hover:shadow-2xl hover:shadow-yellow-900/10 dark:border-white/10 dark:bg-neutral-900/58 astro-d7buufdx" data-aos="fade-up"${addAttribute(index * 100, "data-aos-delay")}> <button class="faq-toggle flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-7 astro-d7buufdx" type="button" aria-expanded="false"> <span class="flex min-w-0 items-start gap-4 astro-d7buufdx"> <span class="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-sm font-bold text-neutral-950 shadow-lg shadow-yellow-500/30 astro-d7buufdx"> ${String(index + 1).padStart(2, "0")} </span> <span class="astro-d7buufdx"> <span class="block text-lg font-bold text-neutral-950 dark:text-white astro-d7buufdx"> ${faq.question} </span> </span> </span> <span class="faq-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-neutral-300/80 bg-white/70 text-neutral-900 transition duration-300 dark:border-white/10 dark:bg-white/10 dark:text-white astro-d7buufdx"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 astro-d7buufdx" aria-hidden="true"> <path d="m6 9 6 6 6-6" class="astro-d7buufdx"></path> </svg> </span> </button> <div class="faq-answer grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out astro-d7buufdx"> <div class="overflow-hidden astro-d7buufdx"> <div class="border-t border-neutral-900/10 px-5 pb-6 pt-5 dark:border-white/10 sm:px-7 astro-d7buufdx"> <p class="leading-7 text-neutral-700 dark:text-neutral-200 astro-d7buufdx"> ${faq.answer} </p> </div> </div> </div> </article>`)) })}`;
}, "C:/myProject/G K Enterprise/client/src/pages/faq/index.astro", void 0);

const $$file = "C:/myProject/G K Enterprise/client/src/pages/faq/index.astro";
const $$url = "/faq";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
