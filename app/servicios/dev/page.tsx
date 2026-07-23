import "./dev.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Desarrollo Web y Automatización en Madrid | Yumly Consulting",
  description: "Desarrollo de aplicaciones web y automatización de procesos en Madrid. Soluciones a medida con enfoque técnico en sistemas e infraestructura.",
  robots: "index, follow",
  alternates: {
    canonical: "https://consulting.yumly.es/dev",
  },
  openGraph: {
    title: "Desarrollo Web y Automatización en Madrid | Yumly Consulting",
    description: "Desarrollo de aplicaciones web y automatización de procesos en Madrid. Soluciones a medida con enfoque técnico en sistemas e infraestructura.",
    url: "https://consulting.yumly.es/dev",
    siteName: "Yumly Consulting",
    images: [{ url: "https://consulting.yumly.es/ConsultingLogo.png" }],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Desarrollo Web y Automatización en Madrid | Yumly Consulting",
    description: "Desarrollo de aplicaciones web y automatización de procesos en Madrid. Soluciones a medida con enfoque técnico en sistemas e infraestructura.",
    images: ["https://consulting.yumly.es/ConsultingLogo.png"],
  },
};

export default function DesarrolloSoftware() {
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
    <main className="desarrollo-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="desarrollo-hero">
        <h1>Desarrollo Web y Automatización para Empresas en Madrid</h1>
        <p>
          Desarrollo aplicaciones web a medida y soluciones de automatización
          enfocadas a mejorar procesos internos. Soluciones prácticas,
          funcionales y adaptadas a cada proyecto.
        </p>
        <a href="/contacto" className="cta-btn">
          Solicitar información
        </a>
      </section>

      {/* SERVICIOS */}
      <section className="desarrollo-servicios">
        <h2>¿En qué te ayudamos?</h2>

        <div className="servicios-grid">
          <div className="servicio-card">
            <h3>Aplicaciones Web a Medida</h3>
            <p>
              Desarrollo de herramientas internas, paneles de gestión y
              aplicaciones web utilizando tecnologías modernas como React y
              bases de datos relacionales.
            </p>
          </div>

          <div className="servicio-card">
            <h3>Automatización de Procesos</h3>
            <p>
              Automatización de tareas repetitivas e integración básica entre
              herramientas para reducir errores y ahorrar tiempo.
            </p>
          </div>

          <div className="servicio-card">
            <h3>Optimización y Soporte Técnico</h3>
            <p>
              Mejora del rendimiento y estabilidad de aplicaciones web,
              aplicando buenas prácticas de desarrollo y mantenimiento.
            </p>
          </div>
        </div>
      </section>

      {/* PROBLEMAS */}
      <section className="desarrollo-problemas">
        <h2>Problemas a resolver</h2>

        <ul className="problemas-list">
          <li>Procesos manuales que generan pérdida de tiempo</li>
          <li>Falta de integración entre herramientas internas</li>
          <li>Dependencia excesiva de hojas de cálculo</li>
          <li>Sistemas poco optimizados o difíciles de mantener</li>
        </ul>
      </section>

      {/* ENFOQUE DIFERENCIAL */}
      <section className="desarrollo-proceso">
        <h2>Enfoque de trabajo</h2>

        <div className="proceso-grid">
          <div className="proceso-card">
            <h3>1. Análisis Técnico Real</h3>
            <p>
              Analizar tu situación actual y tus necesidades para proponer una solución adecuada.
            </p>
          </div>

          <div className="proceso-card">
            <h3>2. Diseño Sencillo y Escalable</h3>
            <p>
              Soluciones prácticas, sin sobrecomplicar, pero preparadas para
              crecer.
            </p>
          </div>

          <div className="proceso-card">
            <h3>3. Desarrollo y Pruebas</h3>
            <p>
              Aplicaciones funcionales, optimizadas y alineadas con buenas
              prácticas técnicas.
            </p>
          </div>

          <div className="proceso-card">
            <h3>4. Soporte Continuo</h3>
            <p>
              Mantenimiento y mejoras evolutivas según las necesidades del proyecto.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="desarrollo-cta">
        <h2>Si necesitas una solución práctica y bien planteada, hablemos.</h2>
        <a href="/contacto" className="cta-btn">
          Contactar ahora
        </a>
      </section>
    </main>
  );
}