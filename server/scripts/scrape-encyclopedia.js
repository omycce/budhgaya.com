// Node script to scrape and enrich encyclopedia content about Bodh Gaya & Buddhism
// Produces server/data/encyclopedia.json with structured sections and JSON-LD

const fs = require('fs');
const path = require('path');
const { load } = require('cheerio');
const fetch = require('node-fetch');

/**
 * Fetch a URL and return Cheerio root
 */
async function fetchHtml(url) {
  const res = await fetch(url, { headers: { 'User-Agent': 'budhgaya.com content bot' } });
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
  const html = await res.text();
  return load(html);
}

/**
 * Extract text safely
 */
function cleanText(text) {
  return (text || '')
    .replace(/\s+/g, ' ')
    .replace(/\u00A0/g, ' ')
    .trim();
}

/**
 * Build JSON-LD for an Article
 */
function buildArticleJsonLd({ title, description, url }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    mainEntityOfPage: url,
    author: {
      '@type': 'Organization',
      name: 'Budhgaya',
      url: 'https://budhgaya.com'
    }
  };
}

async function scrapeUnescoMahabodhi() {
  const url = 'https://whc.unesco.org/en/list/1056/';
  try {
    const $ = await fetchHtml(url);
    const title = cleanText($('h1').first().text()) || 'Mahabodhi Temple Complex at Bodh Gaya';
    const summary = cleanText($('#content .readmore ~ p').first().text()) || cleanText($('#content p').first().text());
    return {
      source: url,
      title,
      summary,
      jsonld: buildArticleJsonLd({ title, description: summary, url })
    };
  } catch (e) {
    return {
      source: url,
      title: 'Mahabodhi Temple Complex at Bodh Gaya',
      summary: 'UNESCO site information currently unavailable; using fallback summary.',
      jsonld: buildArticleJsonLd({
        title: 'Mahabodhi Temple Complex at Bodh Gaya',
        description: 'UNESCO site information currently unavailable; using fallback summary.',
        url
      })
    };
  }
}

async function scrapeWikipediaBodhGaya() {
  const url = 'https://en.wikipedia.org/wiki/Bodh_Gaya';
  try {
    const $ = await fetchHtml(url);
    const title = cleanText($('#firstHeading').text()) || 'Bodh Gaya';
    const lead = cleanText($('#mw-content-text .mw-parser-output > p').first().text());
    // Extract some headings
    const sections = [];
    $('#mw-content-text .mw-parser-output > h2').slice(0, 5).each((_, el) => {
      const h = cleanText($(el).text().replace('[edit]', ''));
      const para = cleanText($(el).nextAll('p').first().text());
      if (h && para) sections.push({ heading: h, text: para });
    });
    return {
      source: url,
      title,
      lead,
      sections,
      jsonld: buildArticleJsonLd({ title, description: lead, url })
    };
  } catch (e) {
    return {
      source: url,
      title: 'Bodh Gaya',
      lead: 'Wikipedia content currently unavailable; using fallback.',
      sections: [],
      jsonld: buildArticleJsonLd({ title: 'Bodh Gaya', description: 'Fallback description', url })
    };
  }
}

async function scrapeGayaNICPlaces() {
  const url = 'https://gaya.nic.in/places-of-interest/';
  try {
    const $ = await fetchHtml(url);
    const title = 'Gaya — Places of Interest';
    const sections = [];
    $('h2, h3').each((_, el) => {
      const heading = cleanText($(el).text());
      const para = cleanText($(el).nextAll('p').first().text());
      if (heading && para) sections.push({ heading, text: para });
    });
    return { source: url, title, sections, jsonld: buildArticleJsonLd({ title, description: 'Official district highlights', url }) };
  } catch (e) {
    return { source: url, title: 'Gaya — Places of Interest', sections: [], jsonld: buildArticleJsonLd({ title: 'Gaya — Places of Interest', description: 'Fallback', url }) };
  }
}

async function scrapeCNTravellerBodhGaya() {
  const url = 'https://www.cntraveller.in/story/buddha-purnima-the-best-things-to-do-in-bodh-gaya/';
  try {
    const $ = await fetchHtml(url);
    const title = cleanText($('h1').first().text()) || 'Buddha Purnima guide';
    const paras = [];
    $('h4, h5, p, ul li').each((_, el) => {
      const tag = el.tagName?.toLowerCase();
      const text = cleanText($(el).text());
      if (!text) return;
      paras.push({ tag: tag || 'p', text });
    });
    // collect images (metadata only)
    const images = [];
    $('img').each((_, el) => {
      const src = $(el).attr('src') || $(el).attr('data-src') || '';
      if (!src) return;
      try {
        const abs = new URL(src, url).toString();
        const alt = cleanText($(el).attr('alt')) || '';
        images.push({ src: abs, alt });
      } catch (_) {}
    });
    // dedupe and cap
    const seen = new Set();
    const uniqueImages = images.filter(img => {
      if (seen.has(img.src)) return false;
      seen.add(img.src);
      return true;
    }).slice(0, 30);
    return { source: url, title, content: paras, jsonld: buildArticleJsonLd({ title, description: 'Buddha Purnima guide', url }), images: uniqueImages };
  } catch (e) {
    return { source: url, title: 'Buddha Purnima guide', content: [], jsonld: buildArticleJsonLd({ title: 'Buddha Purnima guide', description: 'Fallback', url }), images: [] };
  }
}

async function main() {
  const outDir = path.join(__dirname, '..', 'data');
  const outFile = path.join(outDir, 'encyclopedia.json');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const [unesco, wikipedia, gayaNIC, cntraveller] = await Promise.all([
    scrapeUnescoMahabodhi(),
    scrapeWikipediaBodhGaya(),
    scrapeGayaNICPlaces(),
    scrapeCNTravellerBodhGaya()
  ]);

  const enriched = {
    updatedAt: new Date().toISOString(),
    topics: {
      bodhgaya: {
        title: 'Bodh Gaya — Overview',
        description: wikipedia.lead,
        sections: wikipedia.sections,
        sources: [wikipedia.source],
        jsonld: wikipedia.jsonld
      },
      mahabodhi_temple: {
        title: unesco.title,
        description: unesco.summary,
        sections: [],
        sources: [unesco.source],
        jsonld: unesco.jsonld
      }
    },
    highlights: {
      placesOfInterest: gayaNIC.sections,
      festivalGuide: cntraveller.content,
      cntravellerImages: (cntraveller.images || []).map(img => ({
        src: img.src,
        alt: img.alt,
        attribution: 'Condé Nast Traveller India',
        source: cntraveller.source
      }))
    },
    site: {
      canonical: 'https://budhgaya.com/encyclopedia.html',
      organization: {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Budhgaya',
        url: 'https://budhgaya.com'
      }
    }
  };

  fs.writeFileSync(outFile, JSON.stringify(enriched, null, 2));
  // eslint-disable-next-line no-console
  console.log(`Wrote ${outFile}`);
}

main().catch((err) => {
  // eslint-disable-next-line no-console
  console.error(err);
  process.exit(1);
});


