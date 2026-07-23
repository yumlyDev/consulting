import "./servicios.css";
import Link from "next/link";
import type { Metadata } from "next";

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
    images: [{ url: "https://consulting.yumly.es/ConsultingLogo.png" }],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yumly Consulting - Servicios de Transformación Digital",
    description: "Servicios tecnológicos a medida: desarrollo de software, consultoría IT, ciberseguridad y soluciones escalables para tu empresa.",
    images: ["https://consulting.yumly.es/ConsultingLogo.png"],
  },
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
          <Link href="/dev">
            <img
              className="paneles"
              src="/servicios/dev.png"
              alt="servicio de desarrollo"
            />
          </Link>
          <Link href="/infraestructura">
            <img
              className="paneles"
              src="/servicios/infra.png"
              alt="Servicio de infraestructura tecnológica"
            />
          </Link>
          <Link href="/seguridad-cumplimiento">
            <img
              className="paneles"
              src="/servicios/seguridad.png"
              alt="Servicio de ciberseguridad"
            />
          </Link>
        </div>

        <div className="paneles-container">
          <Link href="/transformacion">
            <img
              className="paneles"
              src="/servicios/transformacion.png"
              alt="Servicio de transformación digital"
            />
          </Link>
          <Link href="/consultoria-tecnica">
            <img
              className="paneles"
              src="/servicios/consultorial.png"
              alt="Servicio de consultoría IT"
            />
          </Link>
          <Link href="/gestion">
            <img
              className="paneles"
              src="/servicios/gestion.png"
              alt="Servicio de gestión y mantenimiento"
            />
          </Link>
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
            <Link href="/infraestructura">
              <img
                className="paneles"
                src="/soluciones/continuidad.png"
                alt="Solución de continuidad"
              />
            </Link>
            <Link href="/transformacion">
              <img
                className="paneles"
                src="/soluciones/eficiencia.png"
                alt="Solución de eficiencia"
              />
            </Link>
            <Link href="/dev">
              <img
                className="paneles"
                src="/soluciones/escalabilidad.png"
                alt="Solución de escalabilidad"
              />
            </Link>
          </div>

          <div className="paneles-container">
            <Link href="/seguridad-cumplimiento">
              <img
                className="paneles"
                src="/soluciones/proteccion.png"
                alt="Solución de protección"
              />
            </Link>

            <Link href="/gestion">
              <img
                className="paneles"
                src="/soluciones/insigths.png"
                alt="Solución de insights"
              />
            </Link>
            <Link href="/consultoria-tecnica">
              <img
                className="paneles"
                src="/soluciones/soporte.png"
                alt="Servicio de soporte"
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}