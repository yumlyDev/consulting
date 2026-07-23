import "./transformacion.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transformación Digital para Empresas | Yumly Consulting",
  description: "Ayudamos a empresas a digitalizar procesos, automatizar operaciones y modernizar su tecnología para ser más competitivas.",
  robots: "index, follow",
  alternates: {
    canonical: "https://consulting.yumly.es/transformacion",
  },
  openGraph: {
    title: "Transformación Digital para Empresas | Yumly Consulting",
    description: "Ayudamos a empresas a digitalizar procesos, automatizar operaciones y modernizar su tecnología para ser más competitivas.",
    url: "https://consulting.yumly.es/transformacion",
    siteName: "Yumly Consulting",
    images: [{ url: "https://consulting.yumly.es/ConsultingLogo.png" }],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Transformación Digital para Empresas | Yumly Consulting",
    description: "Ayudamos a empresas a digitalizar procesos, automatizar operaciones y modernizar su tecnología para ser más competitivas.",
    images: ["https://consulting.yumly.es/ConsultingLogo.png"],
  },
};

export default function Transformacion() {
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
    <main className="transformacion-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="transformacion-hero">
        <h1>Digitalización y Automatización de Procesos</h1>
        <p>
          Ayudamos a digitalizar procesos y automatizar tareas para mejorar la
          eficiencia en tu negocio.
        </p>
        <a href="/contacto" className="cta-btn">
          Solicitar información
        </a>
      </section>

      {/* SERVICIO */}
      <section className="transformacion-servicios">
        <h2>Cómo puedo ayudarte</h2>
        <div className="servicios-grid">
          <div className="servicio-card">
            <h3>Digitalización de Procesos</h3>
            <p>
              Digitalización de procesos manuales mediante herramientas web y
              automatizaciones sencillas.
            </p>
          </div>
          <div className="servicio-card">
            <h3>Automatización de Operaciones</h3>
            <p>
              Automatización de tareas repetitivas para ahorrar tiempo y reducir
              errores.
            </p>
          </div>
          <div className="servicio-card">
            <h3>Integración de Sistemas</h3>
            <p>
              Conexión entre aplicaciones y bases de datos para centralizar
              información.
            </p>
          </div>
          <div className="servicio-card">
            <h3>Asesoramiento técnico</h3>
            <p>
              Asesoramiento técnico para definir la mejor solución digital según
              las necesidades del proyecto.
            </p>
          </div>
        </div>
      </section>

      {/* PROBLEMAS */}
      <section className="transformacion-problemas">
        <h2>Problemas que resuelvo</h2>
        <ul className="problemas-list">
          <li>Procesos manuales que consumen demasiado tiempo</li>
          <li>Falta de integración entre sistemas y departamentos</li>
          <li>Errores frecuentes y pérdida de información</li>
          <li>Información dispersa en varias herramientas</li>
        </ul>
      </section>

      {/* PROCESO */}
      <section className="transformacion-proceso">
        <h2>Nuestro enfoque de trabajo</h2>
        <div className="proceso-grid">
          <div className="proceso-card">
            <h3>1. Revisión inicial del proyecto</h3>
            <p>
              Analizamos tus procesos actuales, sistemas y necesidades para
              identificar oportunidades de mejora.
            </p>
          </div>
          <div className="proceso-card">
            <h3>2. Propuesta de solución</h3>
            <p>
              Definimos un plan de transformación digital escalable, seguro y
              alineado a tus objetivos de negocio.
            </p>
          </div>
          <div className="proceso-card">
            <h3>3. Puesta en marcha</h3>
            <p>
              Digitalizamos procesos, automatizamos tareas e integramos sistemas
              para obtener resultados reales.
            </p>
          </div>
          <div className="proceso-card">
            <h3>4. Mejora Continua</h3>
            <p>
              Mantenimiento y mejoras evolutivas según las necesidades del
              proyecto.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="transformacion-cta">
        <h2>
          Si quieres digitalizar tu empresa y optimizar tus procesos, hablemos.
        </h2>
        <a href="/contacto" className="cta-btn">
          Contactar ahora
        </a>
      </section>
    </main>
  );
}