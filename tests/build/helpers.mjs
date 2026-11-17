// Helpers for build checks. They read the HTML and XML that `next build` writes.
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const appDir = path.join(root, ".next/server/app");

const PAGES = ["/", "/leistungen", "/unser-team", "/ueber-uns", "/cloody", "/kontakt", "/impressum", "/datenschutz"];

export const EXISTING_ROUTES = [...PAGES, ...PAGES.map((p) => (p === "/" ? "/en" : `/en${p}`))];

export function readPage(route) {
  const file = route === "/" ? "index.html" : `${route.slice(1)}.html`;
  return readFileSync(path.join(appDir, file), "utf8");
}

function attr(tag, name) {
  const match = tag.match(new RegExp(`\\s${name}="([^"]*)"`));
  return match ? match[1] : null;
}

export function head(html) {
  const headPart = html.match(/<head>([\s\S]*?)<\/head>/)?.[1] ?? html;
  const htmlTag = html.match(/<html[^>]*>/)?.[0] ?? "";
  const description = headPart.match(/<meta name="description"[^>]*>/)?.[0];
  const canonical = headPart.match(/<link rel="canonical"[^>]*>/)?.[0];
  const alternates = {};
  for (const [tag] of headPart.matchAll(/<link rel="alternate"[^>]*>/g)) {
    const lang = attr(tag, "hrefLang");
    if (lang) alternates[lang] = attr(tag, "href");
  }
  return {
    lang: attr(htmlTag, "lang"),
    title: headPart.match(/<title>([\s\S]*?)<\/title>/)?.[1] ?? null,
    description: description ? attr(description, "content") : null,
    canonical: canonical ? attr(canonical, "href") : null,
    alternates,
    h1Count: (html.match(/<h1[\s>]/g) ?? []).length
  };
}

export function sitemapUrls() {
  const xml = readFileSync(path.join(appDir, "sitemap.xml.body"), "utf8");
  return [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].map(([, block]) => {
    const alternates = {};
    for (const [tag] of block.matchAll(/<xhtml:link[^>]*>/g)) {
      alternates[attr(tag, "hreflang")] = attr(tag, "href");
    }
    return {
      loc: block.match(/<loc>([^<]*)<\/loc>/)[1],
      alternates,
      lastmod: block.match(/<lastmod>([^<]*)<\/lastmod>/)?.[1] ?? null
    };
  });
}

export function jsonLd(html) {
  return [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(([, body]) =>
    JSON.parse(body)
  );
}
