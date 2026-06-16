import { c as createComponent } from './consts_lZTZLDJh.mjs';
import 'piccolore';
import { aJ as maybeRenderHead, aM as renderSlot, Y as renderTemplate, aK as addAttribute, X as renderComponent, aL as Fragment, aN as unescapeHTML } from './sequence_BOg4xrWM.mjs';
import 'clsx';

const $$ContactIconBlock = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ContactIconBlock;
  const {
    heading,
    content,
    isAddressVisible,
    addressContent,
    isLinkVisible,
    linkTitle,
    linkURL,
    isArrowVisible
  } = Astro2.props;
  const arrowSVG = `<svg
class="h-4 w-4 shrink-0 transition ease-in-out group-hover:translate-x-1"
fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /> </svg>`;
  return renderTemplate`${maybeRenderHead()}<div class="flex gap-x-7 py-6">  ${renderSlot($$result, $$slots["default"])} <div class="grow">  <h3 class="font-bold text-neutral-700 dark:text-neutral-300"> ${heading} </h3>  <p class="mt-1 text-sm text-neutral-600 dark:text-neutral-400">${content}</p>  ${isAddressVisible ? renderTemplate`<p class="mt-1 text-sm text-neutral-500 italic">${addressContent}</p>` : null}  ${isLinkVisible ? renderTemplate`<a class="group mt-2 inline-flex items-center gap-x-2 rounded-lg text-sm font-medium text-zinc-600 ring-zinc-500 outline-hidden transition duration-300 hover:text-zinc-800 focus-visible:ring-3 dark:text-zinc-400 dark:ring-zinc-200 dark:hover:text-zinc-200 dark:focus:ring-1 dark:focus:outline-hidden"${addAttribute(linkURL, "href")}> ${linkTitle} ${isArrowVisible ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(arrowSVG)}` })}` : null} </a>` : null} </div> </div>`;
}, "C:/myProject/G K Enterprise/client/src/components/ui/blocks/ContactIconBlock.astro", void 0);

const $$EmailContactInput = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$EmailContactInput;
  const { label = Astro2.currentLocale === "fr" ? "E-mail" : "Email", id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div>  <label${addAttribute(id, "for")} class="sr-only">${label}</label>  <input type="email" name="hs-email-contacts"${addAttribute(id, "id")} autocomplete="email" class="block w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700 placeholder:text-neutral-500 focus:border-neutral-200 focus:ring-3 focus:ring-neutral-400 focus:outline-hidden disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-600 dark:bg-neutral-700/30 dark:text-neutral-300 dark:placeholder:text-neutral-400 dark:focus:ring-1" placeholder="Email"> </div>`;
}, "C:/myProject/G K Enterprise/client/src/components/ui/forms/input/EmailContactInput.astro", void 0);

const $$PhoneInput = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$PhoneInput;
  const {
    label = Astro2.currentLocale === "fr" ? "Numéro de téléphone" : "Phone Number",
    id
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div> <label${addAttribute(id, "for")} class="sr-only">${label}</label> <input type="tel" name="hs-phone-number"${addAttribute(id, "id")} class="block w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700 placeholder:text-neutral-500 focus:border-neutral-200 focus:ring-3 focus:ring-neutral-400 focus:outline-hidden disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-600 dark:bg-neutral-700/30 dark:text-neutral-300 dark:placeholder:text-neutral-400 dark:focus:ring-1"${addAttribute(label, "placeholder")}> </div>`;
}, "C:/myProject/G K Enterprise/client/src/components/ui/forms/input/PhoneInput.astro", void 0);

const $$TextAreaInput = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$TextAreaInput;
  const { label, id, name } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div> <label${addAttribute(id, "for")} class="sr-only">${label}</label> <textarea${addAttribute(id, "id")}${addAttribute(name, "name")} rows="4" class="block w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700 placeholder:text-neutral-500 focus:border-neutral-200 focus:ring-3 focus:ring-neutral-400 focus:outline-hidden disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-600 dark:bg-neutral-700/30 dark:text-neutral-300 dark:placeholder:text-neutral-400 dark:focus:ring-1"${addAttribute(label, "placeholder")}></textarea> </div>`;
}, "C:/myProject/G K Enterprise/client/src/components/ui/forms/input/TextAreaInput.astro", void 0);

export { $$EmailContactInput as $, $$PhoneInput as a, $$TextAreaInput as b, $$ContactIconBlock as c };
