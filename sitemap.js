// sitemap.js
import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

const sitemap = new SitemapStream({ hostname: 'https://consulting.yumly.es' });

// Creamos un stream al archivo sitemap.xml en la carpeta public
const writeStream = createWriteStream('./public/sitemap.xml');

sitemap.pipe(writeStream);

// Agregamos las URLs de tu web
sitemap.write({ url: '/', changefreq: 'weekly', priority: 1.0 });
sitemap.write({ url: '/about', changefreq: 'monthly', priority: 0.8 });
sitemap.write({ url: '/contacto', changefreq: 'monthly', priority: 0.8 });
sitemap.write({ url: '/servicios', changefreq: 'monthly', priority: 0.8 });
sitemap.write({ url: '/soluciones', changefreq: 'monthly', priority: 0.8 });
sitemap.write({ url: '/sesion', changefreq: 'monthly', priority: 0.5 });

// Finalizamos el sitemap
sitemap.end();

// Opcional: mensaje cuando termine
writeStream.on('finish', () => {
  console.log('Sitemap generado en ./public/sitemap.xml');
});
