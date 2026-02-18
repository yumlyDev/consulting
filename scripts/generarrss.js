import fs from 'fs';
import RSS from 'rss';

// Crear feed RSS para tu web
const feed = new RSS({
  title: 'Yumly Consulting - Soluciones IT',
  description: 'Consultoría tecnológica y desarrollo web a medida para empresas.',
  feed_url: 'https://consulting.yumly.es/rss.xml',
  site_url: 'https://consulting.yumly.es',
  language: 'es',
  pubDate: new Date(),
  ttl: '60', // tiempo de vida del feed en minutos
});

// Lista de posts/artículos
const posts = [
  {
    title: 'Lanzamiento de nuestro servicio de transformación digital',
    url: '/servicios',
    date: '2026-02-18',
    description: 'Conoce cómo podemos modernizar tu negocio con soluciones digitales a medida.'
  },
  {
    title: 'Caso de éxito: Transformación tecnológica en TCM',
    url: '/contact',
    date: '2026-02-10',
    description: 'Descubre cómo ayudamos a TCM a optimizar sus procesos mediante IT.'
  },
];

// Agregar artículos al feed
posts.forEach(post => {
  feed.item({
    title: post.title,
    description: post.description,
    url: `https://consulting.yumly.es${post.url}`,
    date: post.date,
  });
});

// Guardar rss.xml en la carpeta pública
fs.writeFileSync('public/rss.xml', feed.xml({ indent: true }));

console.log('RSS generado en public/rss.xml');
