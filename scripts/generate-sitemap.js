const fs = require('fs');
const path = require('path');

// Simple sitemap generator for Next.js app/ routes (page.tsx files)
// - Scans the `app/` directory for `page.tsx` files and converts them to paths
// - Skips API and private folders
// - Writes `public/sitemap.xml`

const APP_DIR = path.join(__dirname, '..', 'app');
const OUT_FILE = path.join(__dirname, '..', 'public', 'sitemap.xml');
const BASE_URL = 'https://tigattech.com';

function walk(dir, cb) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, cb);
    else cb(full);
  }
}

const pages = new Set();

// Collect page.tsx files
walk(APP_DIR, (file) => {
  if (!file.endsWith('page.tsx')) return;
  // ignore api or private directories
  if (file.includes('/api/') || file.includes('/private/') || file.includes('/admin/')) return;
  // compute route
  const rel = path.relative(APP_DIR, file);
  const parts = rel.split(path.sep);
  // remove the last segment (page.tsx)
  parts.pop();
  let urlPath = parts.join('/');
  if (!urlPath || urlPath === '.') urlPath = '';
  // build URL (ensure trailing slash)
  let url = BASE_URL;
  if (urlPath) url = `${BASE_URL}/${urlPath}`;
  if (!url.endsWith('/')) url = url + '/';
  pages.add(url);
});

// Add explicit top-level routes that may not have page.tsx (if any)
const extras = [
  `${BASE_URL}/services/`,
  `${BASE_URL}/works/`,
  `${BASE_URL}/about/`,
  `${BASE_URL}/contact/`,
];
for (const e of extras) pages.add(e);

const urls = Array.from(pages).sort();

const xmlHeader = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
const xmlFooter = `</urlset>`;

const now = new Date().toISOString().split('T')[0];

let body = '';
for (const u of urls) {
  body += `  <url>\n    <loc>${u}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.7</priority>\n  </url>\n`;
}

fs.writeFileSync(OUT_FILE, xmlHeader + body + xmlFooter, 'utf8');
console.log(`Wrote sitemap with ${urls.length} URLs to ${OUT_FILE}`);
