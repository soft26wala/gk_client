import { c as createComponent } from './consts_lZTZLDJh.mjs';
import 'piccolore';
import { aJ as maybeRenderHead, X as renderComponent, Y as renderTemplate } from './sequence_BOg4xrWM.mjs';
import { $ as $$PrimaryCTA } from './PrimaryCTA_BAFe-Pzp.mjs';
import { $ as $$Image } from './_astro_assets_m5DGn2Iu.mjs';
import 'clsx';

const $$MainSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$MainSection;
  const { title, subTitle, btnExists, btnTitle, btnURL } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto mt-10 max-w-[85rem] px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-14 2xl:max-w-full"> <div class="max-w-(--breakpoint-md)">  <h1 class="mb-4 text-4xl font-extrabold tracking-tight text-balance text-neutral-800 dark:text-neutral-200"> ${title} </h1>  <p class="mb-8 max-w-prose font-normal text-pretty text-neutral-600 sm:text-xl dark:text-neutral-400"> ${subTitle} </p>  ${btnExists ? renderTemplate`<div class="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4"> ${renderComponent($$result, "PrimaryCTA", $$PrimaryCTA, { "title": btnTitle, "url": btnURL })} </div>` : null} </div> </section>`;
}, "C:/myProject/G K Enterprise/client/src/components/ui/blocks/MainSection.astro", void 0);

const $$LeftSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$LeftSection;
  const { title, subTitle, btnExists, btnTitle, btnURL, img, imgAlt } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto max-w-[85rem] items-center gap-8 px-4 py-10 sm:px-6 sm:py-16 md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 lg:px-8 lg:py-14 xl:gap-16 2xl:max-w-full">  ${renderComponent($$result, "Image", $$Image, { "class": "w-full rounded-xl", "src": img, "alt": imgAlt, "draggable": "false", "format": "avif" })}  <div class="mt-4 md:mt-0">  <h2 class="mb-4 text-4xl font-extrabold tracking-tight text-balance text-neutral-800 dark:text-neutral-200"> ${title} </h2>  <p class="mb-4 max-w-prose font-normal text-pretty text-neutral-600 sm:text-lg dark:text-neutral-400"> ${subTitle} </p>  ${btnExists ? renderTemplate`${renderComponent($$result, "PrimaryCTA", $$PrimaryCTA, { "title": btnTitle, "url": btnURL })}` : null} </div> </section>`;
}, "C:/myProject/G K Enterprise/client/src/components/ui/blocks/LeftSection.astro", void 0);

const $$RightSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$RightSection;
  const {
    title,
    subTitle,
    btnExists,
    btnTitle,
    btnURL,
    single,
    imgOne,
    imgOneAlt,
    imgTwo,
    imgTwoAlt
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto max-w-[85rem] items-center gap-16 px-4 py-10 sm:px-6 lg:grid lg:grid-cols-2 lg:px-8 lg:py-14 2xl:max-w-full"> <div>  <h2 class="mb-4 text-4xl font-extrabold tracking-tight text-balance text-neutral-800 dark:text-neutral-200"> ${title} </h2>  <p class="mb-4 max-w-prose font-normal text-pretty text-neutral-600 sm:text-lg dark:text-neutral-400"> ${subTitle} </p>  ${btnExists ? renderTemplate`${renderComponent($$result, "PrimaryCTA", $$PrimaryCTA, { "title": btnTitle, "url": btnURL })}` : null} </div>  ${single ? renderTemplate`<div class="mt-8">  ${renderComponent($$result, "Image", $$Image, { "class": "w-full rounded-lg", "src": imgOne, "alt": imgOneAlt, "format": "avif" })} </div>` : renderTemplate`<div class="mt-8 grid grid-cols-2 gap-4">  ${renderComponent($$result, "Image", $$Image, { "class": "w-full rounded-xl", "src": imgOne, "alt": imgOneAlt, "draggable": "false", "format": "avif" })}  ${renderComponent($$result, "Image", $$Image, { "class": "mt-4 w-full rounded-xl lg:mt-10", "src": imgTwo, "alt": imgTwoAlt, "draggable": "false", "format": "avif" })} </div>`} </section>`;
}, "C:/myProject/G K Enterprise/client/src/components/ui/blocks/RightSection.astro", void 0);

const $$StatsBig = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$StatsBig;
  const { title, subTitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="lg:pe-6 xl:pe-12"> <p class="text-6xl leading-10 font-bold text-orange-400 dark:text-orange-300"> ${title} </p> <p class="mt-2 text-neutral-600 sm:mt-3 dark:text-neutral-400">${subTitle}</p> </div>`;
}, "C:/myProject/G K Enterprise/client/src/components/ui/blocks/StatsBig.astro", void 0);

const $$StatsSmall = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$StatsSmall;
  const { title, subTitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div> <p class="text-3xl font-bold text-orange-400 dark:text-orange-300">${title}</p> <p class="mt-1 text-neutral-600 dark:text-neutral-400">${subTitle}</p> </div>`;
}, "C:/myProject/G K Enterprise/client/src/components/ui/blocks/StatsSmall.astro", void 0);

const $$FeaturesStats = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$FeaturesStats;
  const { title, subTitle, stats, mainStatTitle, mainStatSubTitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> <div class="max-w-(--breakpoint-md)">  <h2 class="mb-4 text-3xl font-extrabold tracking-tight text-balance text-neutral-800 dark:text-neutral-200"> ${title} </h2>  ${subTitle && renderTemplate`<p class="mb-16 max-w-prose font-normal text-pretty text-neutral-600 sm:text-xl dark:text-neutral-400"> ${subTitle} </p>`} </div>  <div class="grid items-center gap-6 lg:grid-cols-12 lg:gap-12">  <div class="lg:col-span-4"> ${renderComponent($$result, "StatsBig", $$StatsBig, { "title": mainStatTitle, "subTitle": mainStatSubTitle })} </div>  ${stats && renderTemplate`<div class="relative lg:col-span-8 lg:before:absolute lg:before:-start-12 lg:before:top-0 lg:before:h-full lg:before:w-px lg:before:bg-neutral-300 lg:dark:before:bg-neutral-700"> <div class="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4 lg:grid-cols-3">  ${stats.map((stat) => renderTemplate`${renderComponent($$result, "StatsSmall", $$StatsSmall, { "title": stat.stat, "subTitle": stat.description })}`)} </div> </div>`} </div> </section>`;
}, "C:/myProject/G K Enterprise/client/src/components/sections/features/FeaturesStats.astro", void 0);

const blueprints = new Proxy({"src":"/_astro/blueprints-image.DxAt2gto.avif","width":1333,"height":2000,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/myProject/G K Enterprise/client/src/images/blueprints-image.avif";
							}
							
							return target[name];
						}
					});

const personWorking = new Proxy({"src":"/_astro/person-working.aUGgRiE_.avif","width":1334,"height":2000,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/myProject/G K Enterprise/client/src/images/person-working.avif";
							}
							
							return target[name];
						}
					});

const beforeAfter = new Proxy({"src":"/_astro/before-after.BntBToq6.avif","width":2048,"height":1366,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/myProject/G K Enterprise/client/src/images/before-after.avif";
							}
							
							return target[name];
						}
					});

const constructionWorkers = new Proxy({"src":"/_astro/construction-workers.XhU7Ouf4.avif","width":1920,"height":1280,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/myProject/G K Enterprise/client/src/images/construction-workers.avif";
							}
							
							return target[name];
						}
					});

const aerialView = new Proxy({"src":"/_astro/aerial-view.CeV30CXX.avif","width":1920,"height":1282,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/myProject/G K Enterprise/client/src/images/aerial-view.avif";
							}
							
							return target[name];
						}
					});

const usingTools = new Proxy({"src":"/_astro/using-tools.BrEE8t5H.avif","width":1920,"height":1280,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/myProject/G K Enterprise/client/src/images/using-tools.avif";
							}
							
							return target[name];
						}
					});

const progressBuilding = new Proxy({"src":"/_astro/progress-building.Cjca0suI.avif","width":1920,"height":2560,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/myProject/G K Enterprise/client/src/images/progress-building.avif";
							}
							
							return target[name];
						}
					});

const underConstruction = new Proxy({"src":"/_astro/under-construction.DfISh1yq.avif","width":1920,"height":2876,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/myProject/G K Enterprise/client/src/images/under-construction.avif";
							}
							
							return target[name];
						}
					});

export { $$MainSection as $, beforeAfter as a, blueprints as b, aerialView as c, constructionWorkers as d, underConstruction as e, progressBuilding as f, $$RightSection as g, $$LeftSection as h, $$FeaturesStats as i, personWorking as p, usingTools as u };
