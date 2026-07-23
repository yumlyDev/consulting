import "./seguridad.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seguridad y Cumplimiento Tecnológico | Yumly Consulting",
  description: "Aplicación de buenas prácticas de seguridad en aplicaciones web para reducir riesgos y proteger la información.",
  robots: "index, follow",
  alternates: {
    canonical: "https://consulting.yumly.es/seguridad",
  },
  openGraph: {
    title: "Seguridad y Cumplimiento Tecnológico | Yumly Consulting",
    description: "Aplicación de buenas prácticas de seguridad en aplicaciones web para reducir riesgos y proteger la información.",
    url: "https://consulting.yumly.es/seguridad",
    siteName: "Yumly Consulting",
    images: [{ url: "https://consulting.yumly.es/ConsultingLogo.png" }],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Seguridad y Cumplimiento Tecnológico | Yumly Consulting",
    description: "Aplicación de buenas prácticas de seguridad en aplicaciones web para reducir riesgos y proteger la información.",
    images: ["https://consulting.yumly.es/ConsultingLogo.png"],
  },
};

export default function SeguridadCumplimiento() {
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
    <main className="seguridad-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="seguridad-hero">
        <h1>Seguridad y Cumplimiento Tecnológico</h1>
        <p>
          Aplicación de buenas prácticas de seguridad en aplicaciones web para
          reducir riesgos y proteger la información.
        </p>
        <a href="/contacto" className="cta-btn">
          Solicitar información
        </a>
      </section>

      {/* SERVICIOS */}
      <section className="seguridad-servicios">
        <h2>Servicios que ofrecemos</h2>
        <div className="servicios-grid">
          <div className="servicio-card">
            <h3>Auditorías de Seguridad</h3>
            <p>
              Revisión técnica de seguridad. Análisis básico de vulnerabilidades
              comunes.
            </p>
          </div>
          <div className="servicio-card">
            <h3>Gestión de Cumplimiento</h3>
            <p>
              Asesoramiento técnico para adaptar aplicaciones web a requisitos
              básicos de protección de datos.
            </p>
          </div>
          <div className="servicio-card">
            <h3>Protección de Datos</h3>
            <p>
              Configuración de copias de seguridad, control de accesos y
              aplicación de buenas prácticas para proteger la información.
            </p>
          </div>
          <div className="servicio-card">
            <h3>Monitorización y Respuesta</h3>
            <p>
              Implementación de alertas básicas y revisión de incidencias en
              aplicaciones web.
            </p>
          </div>
        </div>
      </section>

      {/* PROBLEMAS */}
      <section className="seguridad-problemas">
        <h2>Problemas a resolver</h2>
        <ul className="problemas-list">
          <li>Fugas de datos y pérdida de información crítica</li>
          <li>Accesos sin control adecuado</li>
          <li>Vulnerabilidades en sistemas y aplicaciones</li>
          <li>Falta de planes de respuesta ante incidentes</li>
        </ul>
      </section>

      {/* PROCESO */}
      <section className="seguridad-proceso">
        <h2>Enfoque de trabajo</h2>
        <div className="proceso-grid">
          <div className="proceso-card">
            <h3>1. Revisión técnica inicial</h3>
            <p>
              Análisis detallado de sistemas, redes y procesos para identificar
              vulnerabilidades y brechas de cumplimiento.
            </p>
          </div>
          <div className="proceso-card">
            <h3>2. Aplicación de buenas prácticas</h3>
            <p>
              Diseño de políticas, procedimientos y medidas técnicas alineadas a
              la normativa y buenas prácticas.
            </p>
          </div>
          <div className="proceso-card">
            <h3>3. Implementación de Controles</h3>
            <p>
              Instalación de herramientas de seguridad, cifrado, monitorización
              y control de accesos.
            </p>
          </div>
          <div className="proceso-card">
            <h3>4. Soporte y Mejora Continua</h3>
            <p>
              Mantenimiento y mejoras evolutivas según las necesidades del
              proyecto.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="seguridad-cta">
        <h2>
          Si quieres proteger tu empresa y cumplir la normativa, hablemos.
        </h2>
        <a href="/contacto" className="cta-btn">
          Contactar ahora
        </a>
      </section>
    </main>
  );
}