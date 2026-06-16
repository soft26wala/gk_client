import { c as createComponent } from './consts_lZTZLDJh.mjs';
import 'piccolore';
import { X as renderComponent, Y as renderTemplate, aJ as maybeRenderHead, aK as addAttribute } from './sequence_BOg4xrWM.mjs';
import { $ as $$AdminLayout } from './AdminLayout_DhiT1FUb.mjs';

const prerender = false;
async function getStaticPaths() {
  let templates = [];
  try {
    const response = await fetch(`${"https://gk-api-t0fo.onrender.com"}/templates`);
    if (response.ok) {
      templates = await response.json();
    }
  } catch (error) {
    console.error("Failed to load templates for static paths:", error);
  }
  return templates.map((template) => ({
    params: {
      id: String(template.id)
    }
  }));
}
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  let product = null;
  try {
    const response = await fetch(`${"https://gk-api-t0fo.onrender.com"}/templates/${id}`);
    if (response.ok) {
      product = await response.json();
    } else {
      console.error("Backend ne error diya:", response.status);
    }
  } catch (error) {
    console.error("Fetch fail ho gaya:", error);
  }
  const pageTitle = product?.name ? `${product.name} | G K Enterprise` : "Product not found | G K Enterprise";
  return renderTemplate`${renderComponent($$result, "Layout", $$AdminLayout, { "title": pageTitle }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen px-4 pt-24 pb-12 dark:bg-neutral-800 dark:text-white"> <div class="mx-auto max-w-7xl"> <!-- <a
        href="/"
        class="group mb-8 inline-flex items-center gap-2 text-neutral-400 transition-colors hover:text-orange-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 transition-transform group-hover:-translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
        </svg>
        Back to Products
      </a> --> ${product ? renderTemplate`<div class="grid grid-cols-1 items-start gap-12 lg:grid-cols-2"> <div class="group relative sticky top-[100px]"> <div class="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-r from-orange-600 to-orange-400 opacity-25 blur transition duration-1000 group-hover:opacity-50"></div> <div class="relative overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-900 shadow-2xl"> <img${addAttribute(product.image_url, "src")}${addAttribute(product.name, "alt")} class="h-auto min-h-[500px] w-full object-cover"> <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div> </div> </div> <div class="space-y-8"> <div> <span class="mb-4 inline-block rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-1 text-sm font-bold tracking-widest text-orange-500 uppercase"> ${product.category} </span> <h1 class="mb-4 text-5xl font-black tracking-tight md:text-6xl"> ${product.name} </h1> <div class="h-1 w-20 rounded-full bg-orange-500"></div> </div> <div class="space-y-6 rounded-3xl border border-black bg-gray-50 p-8 backdrop-blur-xl dark:border-white/10 dark:bg-white/5"> <h3 class="text-xl font-bold">Description</h3> <p class="text-lg leading-relaxed text-neutral-800 italic dark:text-neutral-400"> ${product.description} </p> </div> <div class="grid grid-cols-2 gap-4"> <div class="rounded-2xl border border-black bg-gray-50 p-6 dark:border-white/10 dark:bg-white/5"> <p class="mb-1 text-xs font-bold tracking-widest text-neutral-500 uppercase">
Quality
</p> <p class="text-lg font-bold">Premium Grade</p> </div> <div class="rounded-2xl border border-black bg-gray-50 p-6 dark:border-white/10 dark:bg-white/5"> <p class="mb-1 text-xs font-bold tracking-widest text-neutral-500 uppercase">
Availability
</p> <p class="text-lg font-bold text-green-400">In Stock</p> </div> </div> <div class="flex flex-col gap-4 pt-4 sm:flex-row"> <button class="flex-1 transform rounded-2xl bg-white py-5 font-black text-black shadow-xl shadow-white/5 transition-all duration-300 hover:scale-[1.02] hover:bg-orange-500 hover:text-white">
Get Quote Now
</button>  </div> </div> </div>` : renderTemplate`<div class="rounded-3xl border border-white/10 bg-neutral-900 p-12 text-center"> <h1 class="mb-4 text-4xl font-black text-white">
Product not found
</h1> <p class="mb-6 text-neutral-400">
We could not find the product with ID <strong>${id}</strong>.
              Please check the URL or return to the products page.
</p> <a href="/products" class="inline-flex items-center justify-center rounded-full bg-orange-500 px-8 py-4 text-sm font-semibold text-white transition hover:bg-orange-400">
Back to Products
</a> </div>`} </div> </main> ` })}`;
}, "C:/myProject/G K Enterprise/client/src/pages/products/[id].astro", void 0);
const $$file = "C:/myProject/G K Enterprise/client/src/pages/products/[id].astro";
const $$url = "/products/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  getStaticPaths,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
