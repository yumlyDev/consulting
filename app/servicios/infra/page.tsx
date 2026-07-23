import "./infraestructura.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Configuración de Servidores y Entornos Cloud | Yumly Consulting",
  description: "Gestión profesional de servidores, cloud, redes y automatización para empresas. Seguridad, rendimiento y disponibilidad garantizados.",
  robots: "index, follow",
  alternates: {
    canonical: "https://consulting.yumly.es/infraestructura",
  },
  openGraph: {
    title: "Configuración de Servidores y Entornos Cloud | Yumly Consulting",
    description: "Gestión profesional de servidores, cloud, redes y automatización para empresas. Seguridad, rendimiento y disponibilidad garantizados.",
    url: "https://consulting.yumly.es/infraestructura",
    siteName: "Yumly Consulting",
    images: [{ url: "https://consulting.yumly.es/ConsultingLogo.png" }],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Configuración de Servidores y Entornos Cloud | Yumly Consulting",
    description: "Gestión profesional de servidores, cloud, redes y automatización para empresas. Seguridad, rendimiento y disponibilidad garantizados.",
    images: ["https://consulting.yumly.es/ConsultingLogo.png"],
  },
};

export default function InfraestructuraCloud() {
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
    <main className="infra-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="infra-hero">
        <h1>Infraestructura y Cloud para Empresas</h1>
        <p>
          Configuración y mejora básica de servidores y entornos cloud para
          proyectos web y pequeñas aplicaciones.
        </p>
        <a href="/contacto" className="cta-btn">
          Solicitar información
        </a>
      </section>

      {/* SERVICIOS */}
      <section className="infra-servicios">
        <h2>Servicios que ofrecemos</h2>
        <div className="servicios-grid">
          <div className="servicio-card">
            <h3>Servidores y Hosting</h3>
            <p>
              Configuración de servidores virtuales, optimización básica y
              sistemas de copia de seguridad.
            </p>
          </div>
          <div className="servicio-card">
            <h3>Cloud y Virtualización</h3>
            <p>
              Despliegue en entornos cloud como AWS o servicios similares para
              alojar aplicaciones web y proyectos personalizados.
            </p>
          </div>
          <div className="servicio-card">
            <h3>Redes y Seguridad</h3>
            <p>
              Configuración de redes, control de accesos y buenas prácticas de
              seguridad en servidores.
            </p>
          </div>
          <div className="servicio-card">
            <h3>Integración y Automatización</h3>
            <p>
              Automatización de tareas, scripts y configuración básica de flujos
              de despliegue.
            </p>
          </div>
        </div>
      </section>

      {/* PROBLEMAS */}
      <section className="infra-problemas">
        <h2>Problemas a resolver</h2>
        <ul className="problemas-list">
          <li>Servidores sin optimización ni monitorización</li>
          <li>Falta de copias de seguridad</li>
          <li>Entornos cloud mal aprovechados</li>
          <li>Automatización inexistente o poco eficiente</li>
        </ul>
      </section>

      {/* PROCESO */}
      <section className="infra-proceso">
        <h2>Enfoque de trabajo</h2>
        <div className="proceso-grid">
          <div className="proceso-card">
            <h3>1. Revisión técnica inicial</h3>
            <p>
              Evaluación de servidores, redes y cloud para detectar riesgos y
              oportunidades de optimización.
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
            <h3>3. Despliegue</h3>
            <p>
              Configuración de servidores, redes, cloud y automatizaciones según
              el plan definido.
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
      <section className="infra-cta">
        <h2>Si quieres infraestructura segura y profesional, hablemos.</h2>
        <a href="/contacto" className="cta-btn">
          Contactar ahora
        </a>
      </section>
    </main>
  );
}