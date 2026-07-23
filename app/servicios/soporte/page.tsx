import "./consultoria.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consultoría Técnica IT | Yumly Consulting",
  description: "Orientación técnica profesional para mejorar aplicaciones web, optimizar infraestructura y resolver problemas de rendimiento en tu empresa.",
  robots: "index, follow",
  alternates: {
    canonical: "https://consulting.yumly.es/consultoria-tecnica",
  },
  openGraph: {
    title: "Consultoría Técnica IT | Yumly Consulting",
    description: "Orientación técnica profesional para mejorar aplicaciones web, optimizar infraestructura y resolver problemas de rendimiento en tu empresa.",
    url: "https://consulting.yumly.es/consultoria-tecnica",
    siteName: "Yumly Consulting",
    images: [{ url: "https://consulting.yumly.es/ConsultingLogo.png" }],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Consultoría Técnica IT | Yumly Consulting",
    description: "Orientación técnica profesional para mejorar aplicaciones web, optimizar infraestructura y resolver problemas de rendimiento en tu empresa.",
    images: ["https://consulting.yumly.es/ConsultingLogo.png"],
  },
};

export default function ConsultoriaTecnica() {
  const logo = "https://consulting.yumly.es/ConsultingLogo.png";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "Yumly Consulting",
        "url": "https://consulting.yumly.es",
        "logo": logo,
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
    <main className="consultoria-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="consultoria-hero">
        <h1>Consultoría Técnica para tu Empresa</h1>
        <p>
          Orientación técnica profesional para mejorar aplicaciones web,
          optimizar infraestructura y resolver problemas de rendimiento en tu empresa.
        </p>
        <a href="/contacto" className="cta-btn">
          Solicitar información
        </a>
      </section>

      {/* SERVICIOS */}
      <section className="consultoria-servicios">
        <h2>Servicios que ofrezco</h2>
        <div className="servicios-grid">
          <div className="servicio-card">
            <h3>Revisión Técnica</h3>
            <p>
              Revisión de aplicaciones y sistemas para detectar posibles mejoras
              y problemas técnicos.
            </p>
          </div>
          <div className="servicio-card">
            <h3>Optimización de Infraestructura</h3>
            <p>Mejora de configuraciones en servidores y entornos web.</p>
          </div>
          <div className="servicio-card">
            <h3>Recomendaciones Técnicas</h3>
            <p>
              Recomendaciones técnicas adaptadas a las necesidades del proyecto.
            </p>
          </div>
          <div className="servicio-card">
            <h3>Soporte y Guía</h3>
            <p>Soporte técnico bajo demanda y acompañamiento en mejoras.</p>
          </div>
        </div>
      </section>

      {/* PROBLEMAS */}
      <section className="consultoria-problemas">
        <h2>Problemas que ayudo a resolver</h2>
        <ul className="problemas-list">
          <li>Falta de visión clara sobre tecnología y sistemas</li>
          <li>Sistemas poco optimizados o con bajo rendimiento</li>
          <li>Problemas de rendimiento en aplicaciones web</li>
          <li>Falta de acompañamiento en proyectos técnicos</li>
        </ul>
      </section>

      {/* PROCESO */}
      <section className="consultoria-proceso">
        <h2>Enfoque de trabajo</h2>
        <div className="proceso-grid">
          <div className="proceso-card">
            <h3>1. Revisión técnica inicial</h3>
            <p>Evaluación técnica de sistemas para identificar riesgos.</p>
          </div>
          <div className="proceso-card">
            <h3>2. Propuesta de mejora</h3>
            <p>Diseñamos un plan de acción adaptado a tus objetivos.</p>
          </div>
          <div className="proceso-card">
            <h3>3. Despliegue y Soporte</h3>
            <p>Aplicación de mejoras y resolución de incidencias.</p>
          </div>
          <div className="proceso-card">
            <h3>4. Soporte Continuo</h3>
            <p>Mantenimiento y mejoras según las necesidades.</p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="consultoria-cta">
        <h2>Si quieres tomar decisiones tecnológicas acertadas, hablemos.</h2>
        <a href="/contacto" className="cta-btn">
          Contactar ahora
        </a>
      </section>
    </main>
  );
}