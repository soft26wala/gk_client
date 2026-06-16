import { c as createComponent } from './consts_lZTZLDJh.mjs';
import 'piccolore';
import { aJ as maybeRenderHead, aK as addAttribute, Y as renderTemplate, X as renderComponent, aL as Fragment, aN as unescapeHTML, aM as renderSlot } from './sequence_BOg4xrWM.mjs';
import { $ as $$Image } from './_astro_assets_m5DGn2Iu.mjs';
import { $ as $$PrimaryCTA } from './PrimaryCTA_BAFe-Pzp.mjs';
import 'clsx';
import { $ as $$Icon } from './global_6cnxje-w.mjs';
import { r as renderScript } from './script_B7gzqb1r.mjs';

const $$SecondaryCTA = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$SecondaryCTA;
  const { title, url } = Astro2.props;
  const baseClasses = "inline-flex items-center justify-center gap-x-2 rounded-lg px-4 py-3 text-center text-sm font-medium text-neutral-600 shadow-xs outline-hidden ring-zinc-500 focus-visible:ring-3 transition duration-300";
  const borderClasses = "border border-neutral-200";
  const bgColorClasses = "bg-neutral-300";
  const hoverClasses = "hover:bg-neutral-400/50 hover:text-neutral-600 active:text-neutral-700";
  const disableClasses = "disabled:pointer-events-none disabled:opacity-50";
  const fontSizeClasses = "2xl:text-base";
  const ringClasses = "ring-zinc-500";
  const darkClasses = "dark:border-neutral-700 dark:bg-zinc-700 dark:text-neutral-300 dark:ring-zinc-200 dark:hover:bg-zinc-600 dark:focus:outline-hidden";
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`${baseClasses} ${borderClasses} ${bgColorClasses} ${hoverClasses} ${disableClasses} ${fontSizeClasses} ${ringClasses} ${darkClasses}`, "class")}${addAttribute(url, "href")}> ${title} </a>`;
}, "C:/myProject/G K Enterprise/client/src/components/ui/buttons/SecondaryCTA.astro", void 0);

const $$Avatar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Avatar;
  const { src, alt } = Astro2.props;
  return renderTemplate`${typeof src === "string" ? renderTemplate`${maybeRenderHead()}<img${addAttribute(src, "src")}${addAttribute(alt, "alt")} class="inline-block h-8 w-8 rounded-full ring-2 ring-neutral-50 dark:ring-neutral-800" loading="eager">` : renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": src, "alt": alt, "class": "inline-block h-8 w-8 rounded-full ring-2 ring-neutral-50 dark:ring-neutral-800", "loading": "eager" })}`}`;
}, "C:/myProject/G K Enterprise/client/src/components/ui/avatars/Avatar.astro", void 0);

const $$FullStar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg class="h-4 w-4 text-yellow-500 dark:text-yellow-400" width="51" height="51" viewBox="0 0 51 51" fill="none"> <path d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z" fill="currentColor"></path> </svg>`;
}, "C:/myProject/G K Enterprise/client/src/components/ui/stars/FullStar.astro", void 0);

const $$HalfStar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg class="h-4 w-4 text-yellow-500 dark:text-yellow-400" width="51" height="51" viewBox="0 0 51 51" fill="none"> <path d="M49.6867 20.0305C50.2889 19.3946 49.9878 18.1228 49.0846 18.1228L33.7306 15.8972C33.4296 15.8972 33.1285 15.8972 32.8275 15.2613L25.9032 0.317944C25.6021 0 25.3011 0 25 0V42.6046C25 42.6046 25.3011 42.6046 25.6021 42.6046L39.7518 49.9173C40.3539 50.2352 41.5581 49.5994 41.2571 48.6455L38.5476 32.4303C38.5476 32.1124 38.5476 31.7944 38.8486 31.4765L49.6867 20.0305Z" fill="transparent"></path> <path d="M0.313299 20.0305C-0.288914 19.3946 0.0122427 18.1228 0.915411 18.1228L16.2694 15.8972C16.5704 15.8972 16.8715 15.8972 17.1725 15.2613L24.0968 0.317944C24.3979 0 24.6989 0 25 0V42.6046C25 42.6046 24.6989 42.6046 24.3979 42.6046L10.2482 49.9173C9.64609 50.2352 8.44187 49.5994 8.74292 48.6455L11.4524 32.4303C11.4524 32.1124 11.4524 31.7944 11.1514 31.4765L0.313299 20.0305Z" fill="currentColor"></path> </svg>`;
}, "C:/myProject/G K Enterprise/client/src/components/ui/stars/HalfStar.astro", void 0);

const $$ReviewComponent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ReviewComponent;
  const { avatars, starCount = 0, rating, reviews } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="mt-6 lg:mt-10"> <div class="py-5"> <div class="text-center sm:flex sm:items-center sm:text-start"> <div class="shrink-0 pb-5 sm:flex sm:pe-5 sm:pb-0">  <div class="flex justify-center -space-x-3"> ${avatars?.map((src) => renderTemplate`${renderComponent($$result, "Avatar", $$Avatar, { "src": src, "alt": "Avatar Description", "data-aos": "fade-right", "data-aos-duration": "1000" })}`)} <span class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800 ring-2 ring-white dark:bg-zinc-900 dark:ring-zinc-800"> <span class="text-xs leading-none font-medium text-white uppercase">40+</span> </span> </div> </div> <div class="mx-auto h-px w-32 border-t border-neutral-400 sm:mx-0 sm:h-8 sm:w-auto sm:border-s sm:border-t-0 dark:border-neutral-500"></div>  <div class="flex flex-col items-center sm:items-start"> <div class="flex items-baseline space-x-1 pt-5 sm:ps-5 sm:pt-0"> <div class="flex space-x-1">  ${Array(starCount).fill(0).map((_, i) => renderTemplate`${renderComponent($$result, "FullStar", $$FullStar, { "key": i })}`)}  ${renderComponent($$result, "HalfStar", $$HalfStar, {})} </div> <p class="text-neutral-800 dark:text-neutral-200"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(rating)}` })} </p> </div> <div class="text-sm text-neutral-800 sm:ps-5 dark:text-neutral-200"> <p> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(reviews)}` })} </p> </div> </div> </div> </div> </div>`;
}, "C:/myProject/G K Enterprise/client/src/components/ui/blocks/ReviewComponent.astro", void 0);

const $$HeroSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$HeroSection;
  const {
    title,
    subTitle,
    primaryBtn,
    primaryBtnURL,
    secondaryBtn,
    secondaryBtnURL,
    withReview,
    avatars,
    starCount,
    rating,
    reviews,
    src,
    alt
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto grid max-w-[85rem] gap-4 px-4 py-14 sm:px-6 md:grid-cols-2 md:items-center md:gap-8 lg:px-8 2xl:max-w-full">  <div>  <h1 class="block text-3xl font-bold tracking-tight text-balance text-neutral-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-neutral-200" data-aos="fade-right" data-aos-duration="1000">  ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(title)}` })} </h1> ${subTitle && renderTemplate`<p class="mt-3 text-lg leading-relaxed text-pretty text-neutral-700 lg:w-4/5 dark:text-neutral-400" data-aos="fade-right" data-aos-duration="1000"> ${subTitle} </p>`}  <div class="mt-7 grid w-full gap-3 sm:inline-flex" data-aos="fade-up" data-aos-duration="2000"> ${primaryBtn && renderTemplate`${renderComponent($$result, "PrimaryCTA", $$PrimaryCTA, { "title": primaryBtn, "url": primaryBtnURL })}`} ${secondaryBtn && renderTemplate`${renderComponent($$result, "SecondaryCTA", $$SecondaryCTA, { "title": secondaryBtn, "url": secondaryBtnURL })}`} </div>  ${withReview ? renderTemplate`${renderComponent($$result, "ReviewComponent", $$ReviewComponent, { "avatars": avatars, "starCount": starCount, "rating": rating, "reviews": reviews, "data-aos": "fade-right", "data-aos-duration": "1000" })}` : ""} </div>  <div class="flex w-full"> <div class="top-12 overflow-hidden"> <!-- <div class="relative overflow-hidden h-[24rem] w-full rounded-[1.75rem] sm:h-[32rem] md:h-[40rem]"> --> ${src && alt && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": src, "alt": alt, "class": "h-full w-full scale-110 object-cover object-center", "draggable": "false", "loading": "eager", "format": "avif", "data-aos": "fade-left", "data-aos-duration": "1000" })}`} </div> </div> </section>`;
}, "C:/myProject/G K Enterprise/client/src/components/sections/landing/HeroSection.astro", void 0);

const $$IconBlock = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$IconBlock;
  const { heading, content } = Astro2.props;
  const headingClasses = "text-balance text-lg font-bold text-neutral-800 dark:text-neutral-200";
  const contentClasses = "mt-1 text-pretty text-neutral-700 dark:text-neutral-300";
  return renderTemplate`${maybeRenderHead()}<div class="flex gap-x-5">  ${renderSlot($$result, $$slots["default"])} <div class="grow">  <h3${addAttribute(headingClasses, "class")}> ${heading} </h3>  <p${addAttribute(contentClasses, "class")}>${content}</p> </div> </div>`;
}, "C:/myProject/G K Enterprise/client/src/components/ui/blocks/IconBlock.astro", void 0);

const $$FeaturesGeneral = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$FeaturesGeneral;
  const { title, subTitle, features } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full">  <div class="relative mb-6 overflow-hidden md:mb-8"> <!-- {
      src && alt && (
        <Image
          src={src}
          alt={alt}
          class="h-full w-full object-cover object-center"
          draggable={'false'}
          format={'avif'}
          loading={'eager'}
          data-aos="zoom-out-up" data-aos-duration="1000"
        />
      )
    } --> </div>  <div class="mt-5 grid gap-8 lg:mt-16 lg:grid-cols-3 lg:gap-12">  <div class="lg:col-span-3">  <h2 class="text-2xl font-bold text-balance text-neutral-800 md:text-3xl dark:text-neutral-200" data-aos="fade-up" data-aos-duration="1000"> ${title} </h2>  ${subTitle && renderTemplate`<p class="mt-2 text-pretty text-neutral-600 md:mt-4 dark:text-neutral-400" data-aos="fade-up" data-aos-duration="2000"> ${subTitle} </p>`} </div>  <div class="lg:col-span-2"> <div class="grid gap-8 sm:grid-cols-2 md:gap-12">  ${features && features.map((feature) => renderTemplate`${renderComponent($$result, "IconBlock", $$IconBlock, { "heading": feature.heading, "content": feature.content }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "name": feature.svg })} ` })}`)} </div> </div> </div> </section>`;
}, "C:/myProject/G K Enterprise/client/src/components/sections/features/FeaturesGeneral.astro", void 0);

const $$PricingSection = createComponent(async ($$result, $$props, $$slots) => {
  const apiBase = "https://gk-api-t0fo.onrender.com";
  return renderTemplate`${maybeRenderHead()}<section class="relative mx-auto max-w-[95rem] px-4 py-14 astro-oz4orftx"> <div class="mb-10 text-center astro-oz4orftx" data-aos="zoom-out-right" data-aos-duration="2000"> <h2 class="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white md:text-5xl astro-oz4orftx">
Products We Offer
</h2> <p class="mx-auto mt-3 max-w-2xl text-base text-neutral-600 dark:text-neutral-400 astro-oz4orftx" data-aos="zoom-out-left" data-aos-duration="2000">
Explore our range of products designed to meet your construction needs.
      From cutting-edge tools to robust features, we have everything you need to
      build with confidence.
</p> </div> <div class="relative astro-oz4orftx"> <button id="scrollLeft" class="absolute left-0 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white shadow-lg backdrop-blur-xl transition hover:scale-110 hover:bg-white/20 dark:bg-black/40 md:flex astro-oz4orftx" aria-label="Scroll products left"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 astro-oz4orftx" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" class="astro-oz4orftx"></path> </svg> </button> <button id="scrollRight" class="absolute right-0 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white shadow-lg backdrop-blur-xl transition hover:scale-110 hover:bg-white/20 dark:bg-black/40 md:flex astro-oz4orftx" aria-label="Scroll products right"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 astro-oz4orftx" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" class="astro-oz4orftx"></path> </svg> </button> <div id="templateSlider" class="flex gap-6 overflow-x-auto scroll-smooth pb-2 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] astro-oz4orftx"${addAttribute(apiBase, "data-api-base")} aria-live="polite"> ${Array.from({ length: 4 }).map(() => renderTemplate`<div class="min-w-[85%] snap-start sm:min-w-[48%] lg:min-w-[31%] xl:min-w-[24%] astro-oz4orftx"> <div class="overflow-hidden rounded-3xl border border-neutral-200/20 bg-white/70 shadow-xl backdrop-blur-2xl dark:border-white/10 dark:bg-white/5 astro-oz4orftx"> <div class="h-60 animate-pulse bg-neutral-100 dark:bg-white/10 astro-oz4orftx"></div> <div class="space-y-4 p-5 astro-oz4orftx"> <div class="h-6 w-2/3 animate-pulse rounded bg-neutral-200 dark:bg-white/10 astro-oz4orftx"></div> <div class="h-4 w-full animate-pulse rounded bg-neutral-200 dark:bg-white/10 astro-oz4orftx"></div> <div class="h-10 w-32 animate-pulse rounded-xl bg-neutral-900/20 dark:bg-white/10 astro-oz4orftx"></div> </div> </div> </div>`)} </div> </div> </section>  ${renderScript($$result, "C:/myProject/G K Enterprise/client/src/components/sections/pricing/PricingSection.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/myProject/G K Enterprise/client/src/components/sections/pricing/PricingSection.astro", void 0);

export { $$HeroSection as $, $$FeaturesGeneral as a, $$PricingSection as b };
