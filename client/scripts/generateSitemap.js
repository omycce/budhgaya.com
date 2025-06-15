const { SitemapStream, streamToPromise } = require('sitemap');
const fs = require('fs');

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'weekly', priority: 0.8 },
  { url: '/travel-details', changefreq: 'weekly', priority: 0.8 },
];

const stream = new SitemapStream({ hostname: 'https://yourwebsite.com' });

streamToPromise(stream.pipe(fs.createWriteStream('./public/sitemap.xml')))
  .then(() => console.log('Sitemap created successfully!'));

links.forEach(link => stream.write(link));
stream.end();