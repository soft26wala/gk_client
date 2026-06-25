import type { APIRoute } from 'astro';

const SITE = 'https://gkenterpris.com';

const urls = [
  // English pages
  { loc: '/', lastmod: new Date().toISOString(), priority: '1.0' },
  { loc: '/aboutus', lastmod: new Date().toISOString(), priority: '0.8' },
  { loc: '/contact', lastmod: new Date().toISOString(), priority: '0.8' },
  { loc: '/services', lastmod: new Date().toISOString(), priority: '0.8' },
  { loc: '/blog', lastmod: new Date().toISOString(), priority: '0.7' },
  { loc: '/faq', lastmod: new Date().toISOString(), priority: '0.7' },
  { loc: '/insights', lastmod: new Date().toISOString(), priority: '0.7' },
  { loc: '/products', lastmod: new Date().toISOString(), priority: '0.8' },
  
  // French pages
  { loc: '/fr/', lastmod: new Date().toISOString(), priority: '1.0' },
  { loc: '/fr/aboutus', lastmod: new Date().toISOString(), priority: '0.8' },
  { loc: '/fr/contact', lastmod: new Date().toISOString(), priority: '0.8' },
  { loc: '/fr/services', lastmod: new Date().toISOString(), priority: '0.8' },
];

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls
  .map(
    (url) => `  <url>
    <loc>${SITE}${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <priority>${url.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

export const GET: APIRoute = () => {
  return new Response(sitemapXml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
