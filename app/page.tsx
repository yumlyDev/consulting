import Link from "next/link";
import type { Metadata, Viewport } from "next";
import "./page.css";
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: "Yumly Consulting - Transformamos ideas en resultados",
  description: "Tecnología, innovación y eficiencia para tu negocio. Consultoría tecnológica y desarrollo web a medida.",
  robots: "index, follow",
  alternates: {
    canonical: "https://consulting.yumly.es/",
  },
  openGraph: {
    title: "Yumly Consulting - Transformamos ideas en resultados",
    description: "Tecnología, innovación y eficiencia para tu negocio. Consultoría tecnológica y desarrollo web a medida.",
    url: "https://consulting.yumly.es/",
    siteName: "Yumly Consulting",
    images: [
      {
        url: "https://consulting.yumly.es/ConsultingLogo.png",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yumly Consulting - Transformamos ideas en resultados",
    description: "Tecnología, innovación y eficiencia para tu negocio. Consultoría tecnológica y desarrollo web a medida.",
    images: ["https://consulting.yumly.es/ConsultingLogo.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "Yumly Consulting",
        "url": "https://consulting.yumly.es",
        "logo": "https://consulting.yumly.es/ConsultingLogo.png",
        "description": "Consultoría tecnológica especializada en desarrollo web, SEO y soluciones digitales."
      },
      {
        "@type": "WebSite",
        "name": "Yumly Consulting",
        "url": "https://consulting.yumly.es",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://consulting.yumly.es/?s={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    ]
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <video
        className="video-bg"
        autoPlay
        loop
        muted
        playsInline
        role="presentation"
        aria-hidden="true"
      >
        <source src="/oficina.mp4" type="video/mp4" />
        Tu navegador no soporta la etiqueta de video.
      </video>

      <main>
        <section id="home">
          <h1>Transformamos ideas en resultados.</h1>
          <p>Tecnología, innovación y eficiencia para tu negocio.</p>
        </section>
        
        <Analytics />

        <section id="servicios">
          <h2>Servicios</h2>
          <p>Servicios tecnológicos eficientes, seguros y a medida.</p>
          <Link href="/servicios/dev">
            <img
              className="paneles"
              src="/servicios/dev.png"
              alt="Servicio de desarrollo web personalizado"
              loading="lazy"
            />
          </Link>
          <Link href="/servicios/transformacion">
            <img
              className="paneles"
              src="/servicios/transformacion.png"
              alt="Servicio de transformación digital"
              loading="lazy"
            />
          </Link>
          <Link href="/servicios/gestion">
            <img
              className="paneles"
              src="/servicios/gestion.png"
              alt="Servicio de gestión y mantenimiento tecnológico"
              loading="lazy"
            />
          </Link>
        </section>

        <section id="soluciones">
          <h2>Soluciones</h2>
          <p>Soluciones digitales pensadas para crecer contigo.</p>
          <Link href="/servicios/soporte">
            <img
              className="paneles"
              src="/soluciones/soporte.png"
              alt="Servicio de soporte técnico"
              loading="lazy"
            />
          </Link>
          <Link href="/servicios/seguridad">
            <img
              className="paneles"
              src="/soluciones/proteccion.png"
              alt="Servicio de protección digital"
              loading="lazy"
            />
          </Link>
          <Link href="/servicios/infra">
            <img
              className="paneles"
              src="/soluciones/eficiencia.png"
              alt="Servicio de eficiencia tecnológica"
              loading="lazy"
            />
          </Link>
        </section>

        <section id="contact">
          <h2>Casos de éxito</h2>
          <p>
            Proyectos donde optimizamos procesos, incrementamos resultados y generamos crecimiento real.
          </p>
          <a href="https://www.trainmovementscenter.es/" target="_blank" rel="noopener noreferrer">
            <img
              className="paneles"
              src="/tcm.png"
              alt="Caso de éxito: Fisioterapia TCM Alcorcón"
              loading="lazy"
            />
          </a>
        </section>
      </main>
    </div>
  );
}