import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Yumly Consulting - Servicios de Transformación Digital",
  description: "Servicios tecnológicos a medida: desarrollo de software, consultoría IT, ciberseguridad y soluciones escalables para tu empresa. Yumly Consulting transforma tu negocio digitalmente.",
  robots: "index, follow",
  alternates: {
    canonical: "https://consulting.yumly.es/servicios",
  },
  openGraph: {
    title: "Yumly Consulting - Servicios de Transformación Digital",
    description: "Servicios tecnológicos a medida: desarrollo de software, consultoría IT, ciberseguridad y soluciones escalables para tu empresa.",
    url: "https://consulting.yumly.es/servicios",
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
    title: "Yumly Consulting - Servicios de Transformación Digital",
    description: "Servicios tecnológicos a medida: desarrollo de software, consultoría IT, ciberseguridad y soluciones escalables para tu empresa.",
    images: ["https://consulting.yumly.es/ConsultingLogo.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function Servicios() {
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
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div>
        <video className="video-bg" autoPlay loop muted playsInline>
          <source src="/banner.mp4" type="video/mp4" />
          Tu navegador no soporta la etiqueta de video.
        </video>
      </div>

      <section className="servicios">
        <h1>Servicios de Transformación Digital y Soluciones Tecnológicas</h1>
        <p>
          Ofrecemos servicios tecnológicos a medida: desarrollo de software,
          consultoría IT, ciberseguridad y soluciones escalables para impulsar
          la eficiencia y seguridad de tu empresa.
        </p>

        <div className="paneles-container">
          <a href="/dev">
            <img className="paneles" src="/servicios/dev.png" alt="servicio de desarrollo" />
          </a>

          <a href="/infraestructura">
            <img className="paneles" src="/servicios/infra.png" alt="Servicio de infraestructura tecnológica" />
          </a>

          <a href="/seguridad-cumplimiento">
            <img className="paneles" src="/servicios/seguridad.png" alt="Servicio de ciberseguridad" />
          </a>
        </div>

        <div className="paneles-container">
          <a href="/transformacion">
            <img className="paneles" src="/servicios/transformacion.png" alt="Servicio de transformación digital" />
          </a>

          <a href="/consultoria-tecnica">
            <img className="paneles" src="/servicios/consultorial.png" alt="Servicio de consultoría IT" />
          </a>

          <a href="/gestion">
            <img className="paneles" src="/servicios/gestion.png" alt="Servicio de gestión y mantenimiento" />
          </a>
        </div>
      </section>

      <section id="soluciones" className="servicios">
        <h1>Soluciones Tecnológicas para la Transformación Digital</h1>

        <p className="descripcion">
          Impulsamos la transformación digital de tu empresa mediante soluciones
          tecnológicas seguras, escalables y adaptadas a tus objetivos de
          negocio. Ofrecemos desarrollo de software, consultoría IT y
          ciberseguridad a medida.
        </p>

        <div>
          <div className="paneles-container">
            <a href="/infraestructura">
              <img className="paneles" src="/soluciones/continuidad.png" alt="Solución de continuidad" />
            </a>

            <a href="/transformacion">
              <img className="paneles" src="/soluciones/eficiencia.png" alt="Solución de eficiencia" />
            </a>

            <a href="/dev">
              <img className="paneles" src="/soluciones/escalabilidad.png" alt="Solución de escalabilidad" />
            </a>
          </div>

          <div className="paneles-container">
            <a href="/seguridad-cumplimiento">
              <img className="paneles" src="/soluciones/proteccion.png" alt="Solución de protección" />
            </a>

            <a href="/gestion">
              <img className="paneles" src="/soluciones/insigths.png" alt="Solución de insights" />
            </a>

            <a href="/consultoria-tecnica">
              <img className="paneles" src="/soluciones/soporte.png" alt="Servicio de soporte" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}