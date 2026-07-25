import "./gestion.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Configuración de Servidores y Entornos Cloud | Yumly Consulting",
  description:
    "Gestión profesional de servidores, cloud, redes y automatización para empresas. Seguridad, rendimiento y disponibilidad garantizados.",
  robots: "index, follow",
  alternates: {
    canonical: "https://consulting.yumly.es/gestion",
  },
  openGraph: {
    title: "Configuración de Servidores y Entornos Cloud | Yumly Consulting",
    description:
      "Gestión profesional de servidores, cloud, redes y automatización para empresas. Seguridad, rendimiento y disponibilidad garantizados.",
    url: "https://consulting.yumly.es/gestion",
    siteName: "Yumly Consulting",
    images: [{ url: "https://consulting.yumly.es/ConsultingLogo.png" }],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Configuración de Servidores y Entornos Cloud | Yumly Consulting",
    description:
      "Gestión profesional de servidores, cloud, redes y automatización para empresas. Seguridad, rendimiento y disponibilidad garantizados.",
    images: ["https://consulting.yumly.es/ConsultingLogo.png"],
  },
};

export default function Gestion() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Gestión y Mantenimiento Tecnológico",
        provider: {
          "@type": "ProfessionalService",
          name: "Yumly Consulting",
          url: "https://consulting.yumly.es",
          logo: "https://consulting.yumly.es/ConsultingLogo.png",
        },
        description:
          "Gestión profesional de servidores, cloud, redes y mantenimiento informático para empresas en Madrid.",
        url: "https://consulting.yumly.es/gestion",
        areaServed: {
          "@type": "AdministrativeArea",
          name: "Madrid",
        },
      },
      {
        "@type": "WebSite",
        name: "Yumly Consulting",
        url: "https://consulting.yumly.es",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://consulting.yumly.es/?s={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  return (
    <main className="gestion-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="gestion-hero">
        <h1>Gestión y Mantenimiento Tecnológico para Empresas en Madrid</h1>
        <p>
          Mantenimiento y mejora de aplicaciones web y servidores, aplicando
          buenas prácticas para mejorar seguridad y rendimiento.
        </p>
        <a href="/contacto" className="cta-btn">
          Solicitar información
        </a>
      </section>

      {/* SERVICIOS */}
      <section className="gestion-servicios">
        <h2>Servicios que ofrezco</h2>

        <div className="servicios-grid">
          <div className="servicio-card">
            <h3>Mantenimiento Web y Aplicaciones</h3>
            <p>
              Actualización de dependencias, corrección de errores, optimización
              de rendimiento, seguridad básica y copias de seguridad.
            </p>
          </div>

          <div className="servicio-card">
            <h3>Gestión de Bases de Datos</h3>
            <p>
              Optimización de consultas, copias de seguridad y mantenimiento de
              bases de datos.
            </p>
          </div>

          <div className="servicio-card">
            <h3>Infraestructura y Cloud</h3>
            <p>
              Configuración de servidores VPS y despliegue en entornos cloud
              para aplicaciones web.
            </p>
          </div>
        </div>
      </section>

      {/* PROBLEMAS */}
      <section className="gestion-problemas">
        <h2>Problemas que ayudo a resolver</h2>

        <ul className="problemas-list">
          <li>Sistemas y aplicaciones poco optimizados</li>
          <li>Falta de seguridad y copias de respaldo</li>
          <li>Bases de datos desorganizadas o sin control de crecimiento</li>
          <li>Infraestructura sin configuración adecuada</li>
        </ul>
      </section>

      {/* ENFOQUE DIFERENCIAL */}
      <section className="gestion-proceso">
        <h2>Enfoque de trabajo</h2>

        <div className="proceso-grid">
          <div className="proceso-card">
            <h3>1. Análisis y Revisión técnica inicial</h3>
            <p>
              Evaluación completa de sistemas, aplicaciones y bases de datos
              existentes para detectar riesgos y oportunidades de mejora.
            </p>
          </div>

          <div className="proceso-card">
            <h3>2. Propuesta de mantenimiento</h3>
            <p>
              Diseño de un plan de mantenimiento escalable, seguro y adaptado a
              tus necesidades.
            </p>
          </div>

          <div className="proceso-card">
            <h3>3. Despliegue y Mejora</h3>
            <p>
              Ejecución de mejoras, actualizaciones, optimización de rendimiento
              y configuración de monitorización.
            </p>
          </div>

          <div className="proceso-card">
            <h3>4. Soporte Continuo</h3>
            <p>
              Mantenimiento y mejoras evolutivas según las necesidades del
              proyecto.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gestion-cta">
        <h2>
          Si quieres estabilidad y seguridad tecnológica para tu empresa,
          hablemos.
        </h2>
        <a href="/contacto" className="cta-btn">
          Contactar ahora
        </a>
      </section>
    </main>
  );
}
