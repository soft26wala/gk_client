import { c as createComponent } from './consts_lZTZLDJh.mjs';
import 'piccolore';
import { aJ as maybeRenderHead, X as renderComponent, Y as renderTemplate, aK as addAttribute } from './sequence_BOg4xrWM.mjs';
import { $ as $$Image } from './_astro_assets_m5DGn2Iu.mjs';
import { f as formatDate, $ as $$AvatarBlogLarge } from './utils_CcQSjlOS.mjs';
import { $ as $$PrimaryCTA } from './PrimaryCTA_BAFe-Pzp.mjs';
import { $ as $$Icon } from './global_6cnxje-w.mjs';

const $$AvatarBlog = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$AvatarBlog;
  const { blogEntry } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="shrink-0"> ${renderComponent($$result, "Image", $$Image, { "class": "size-[46px] rounded-full border-2 border-neutral-50", "src": blogEntry.data.authorImage, "alt": blogEntry.data.authorImageAlt, "draggable": "false", "format": "avif" })} </div>`;
}, "C:/myProject/G K Enterprise/client/src/components/ui/avatars/AvatarBlog.astro", void 0);

const $$CardBlog = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$CardBlog;
  const { blogEntry, blogLocale = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a class="group relative block rounded-xl ring-zinc-500 outline-hidden transition duration-500 focus-visible:ring-3 dark:ring-zinc-200 dark:focus:outline-hidden"${addAttribute(blogLocale && blogLocale !== "en" ? `/${blogLocale}/blog/${blogEntry.id.replace(/^fr\//, "")}/` : `/blog/${blogEntry.id.replace(/^en\//, "")}/`, "href")} data-astro-prefetch>  <div class="relative h-[350px] w-full shrink-0 overflow-hidden rounded-xl before:absolute before:inset-x-0 before:z-1 before:size-full before:bg-linear-to-t before:from-neutral-900/[.7]"> ${renderComponent($$result, "Image", $$Image, { "class": "absolute start-0 top-0 size-full object-cover transition duration-500 group-hover:scale-110", "src": blogEntry.data.cardImage, "alt": blogEntry.data.cardImageAlt, "draggable": "false", "loading": "eager", "format": "avif" })} </div>  <div class="absolute inset-x-0 top-0 z-10"> <div class="flex h-full flex-col p-4 sm:p-6"> <div class="flex items-center"> ${renderComponent($$result, "AvatarBlog", $$AvatarBlog, { "blogEntry": blogEntry })} <div class="ms-2.5 sm:ms-4"> <h4 class="font-bold text-neutral-50"> ${blogEntry.data.author} </h4> <p class="text-xs text-neutral-50/[.8]"> ${formatDate(blogEntry.data.pubDate)} </p> </div> </div> </div> </div>  <div class="absolute inset-x-0 bottom-0 z-10"> <div class="flex h-full flex-col p-4 sm:p-6"> <h3 class="text-lg font-bold text-balance text-neutral-50 group-hover:text-neutral-50/[.8] sm:text-3xl"> ${blogEntry.data.title} </h3> <p class="mt-2 text-pretty text-neutral-50/[.8]"> ${blogEntry.data.description} </p> </div> </div> </a>`;
}, "C:/myProject/G K Enterprise/client/src/components/ui/cards/CardBlog.astro", void 0);

const $$CardBlogRecent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$CardBlogRecent;
  const { blogEntry, recentBlogLocale = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="grid gap-8 sm:grid-cols-2 sm:items-center">  <div class="sm:order-2"> <div class="relative rounded-lg pt-[50%] sm:pt-[100%]"> ${renderComponent($$result, "Image", $$Image, { "class": "absolute start-0 top-0 size-full rounded-xl object-cover", "src": blogEntry.data.cardImage, "alt": blogEntry.data.cardImageAlt, "draggable": "false", "loading": "eager", "format": "avif" })} </div> </div>  <div class="sm:order-1">  <h2 class="text-2xl font-bold tracking-tight text-balance text-neutral-800 md:text-3xl lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight dark:text-neutral-200"> <a class="ring-zinc-500 outline-hidden transition duration-300 hover:text-orange-400 focus-visible:ring-3 dark:text-neutral-300 dark:ring-zinc-200 dark:hover:text-neutral-50 dark:focus:outline-hidden"${addAttribute(recentBlogLocale && recentBlogLocale !== "en" ? `/${recentBlogLocale}/blog/${blogEntry.id.replace(/^fr\//, "")}/` : `/blog/${blogEntry.id.replace(/^en\//, "")}/`, "href")}> ${blogEntry.data.description} </a> </h2>  <div class="mt-6 flex items-center sm:mt-10"> ${renderComponent($$result, "AvatarBlogLarge", $$AvatarBlogLarge, { "blogEntry": blogEntry })} <div class="ms-3 sm:ms-4"> <p class="font-bold text-neutral-800 sm:mb-1 dark:text-neutral-200"> ${blogEntry.data.author} </p> <p class="text-xs text-neutral-500"> ${blogEntry.data.role} </p> </div> </div>  <div class="mt-5"> ${renderComponent($$result, "PrimaryCTA", $$PrimaryCTA, { "url": recentBlogLocale && recentBlogLocale !== "en" ? `/${recentBlogLocale}/blog/${blogEntry.id.replace(/^fr\//, "")}/` : `/blog/${blogEntry.id.replace(/^en\//, "")}/`, "title": "Read More", "data-astro-prefetch": true })} </div> </div> </div>`;
}, "C:/myProject/G K Enterprise/client/src/components/ui/cards/CardBlogRecent.astro", void 0);

const $$CardInsight = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$CardInsight;
  const {
    insightEntry,
    insightLocale,
    label = Astro2.currentLocale === "fr" ? "Lire plus" : "Read more"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a class="group rounded-xl ring-zinc-500 outline-hidden transition duration-300 focus-visible:ring-3 dark:ring-zinc-200 dark:focus:outline-hidden"${addAttribute(insightLocale && insightLocale !== "en" ? `/${insightLocale}/insights/${insightEntry.id.replace(/^fr\//, "")}/` : `/insights/${insightEntry.id.replace(/^en\//, "")}/`, "href")}>  <div class="relative overflow-hidden rounded-xl pt-[50%] sm:pt-[70%]"> ${renderComponent($$result, "Image", $$Image, { "class": "absolute start-0 top-0 size-full rounded-xl object-cover transition duration-500 ease-in-out group-hover:scale-105", "src": insightEntry.data.cardImage, "alt": insightEntry.data.cardImageAlt, "draggable": "false", "format": "avif" })} </div>  <div class="mt-7">  <h3 class="text-xl font-bold text-neutral-800 group-hover:text-neutral-600 dark:text-neutral-200 dark:group-hover:text-neutral-400"> ${insightEntry.data.title} </h3>  <p class="mt-3 text-neutral-600 dark:text-neutral-400"> ${insightEntry.data.description} </p>  <p class="mt-5 inline-flex items-center gap-x-1 font-medium text-orange-400 decoration-2 group-hover:underline dark:text-orange-300"> ${label} ${renderComponent($$result, "Icon", $$Icon, { "name": "arrowRightStatic" })} </p> </div> </a>`;
}, "C:/myProject/G K Enterprise/client/src/components/ui/cards/CardInsight.astro", void 0);

export { $$CardBlog as $, $$CardBlogRecent as a, $$CardInsight as b };
