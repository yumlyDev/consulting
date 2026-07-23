// sitemap.js
import { SitemapStream } from "sitemap";
import { createWriteStream } from "fs";
import { routes } from "./routes.js"; // <- ruta relativa con .js

const sitemap = new SitemapStream({ hostname: "https://consulting.yumly.es" });
const writeStream = createWriteStream("./public/sitemap.xml");
sitemap.pipe(writeStream);

routes.forEach(url => sitemap.write({ url, changefreq: "monthly", priority: 0.8 }));

sitemap.end();
writeStream.on("finish", () => console.log("Sitemap generado"));