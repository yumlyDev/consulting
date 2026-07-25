import Head from "next/head";
import Link from "next/link";
import OcasoBanner from "@/components/OcasoBanner";
export default function Servicios() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Yumly Consulting",
        url: "https://consulting.yumly.es",
        logo: "https://consulting.yumly.es/ConsultingLogo.png",
        description:
          "Consultoría tecnológica especializada en desarrollo web, SEO y soluciones digitales.",
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
  } as const;

  return (
    <>
      <Head>
        <title>Yumly Consulting - Servicios de Transformación Digital</title>
        <meta
          name="description"
          content="Servicios tecnológicos a medida: desarrollo de software, consultoría IT, ciberseguridad y soluciones escalables para tu empresa. Yumly Consulting transforma tu negocio digitalmente."
        />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#000000" />
        <link rel="canonical" href="https://consulting.yumly.es/servicios" />

        <meta
          property="og:title"
          content="Yumly Consulting - Servicios de Transformación Digital"
        />
        <meta
          property="og:description"
          content="Servicios tecnológicos a medida: desarrollo de software, consultoría IT, ciberseguridad y soluciones escalables para tu empresa."
        />
        <meta
          property="og:url"
          content="https://consulting.yumly.es/servicios"
        />
        <meta property="og:site_name" content="Yumly Consulting" />
        <meta
          property="og:image"
          content="https://consulting.yumly.es/ConsultingLogo.png"
        />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Yumly Consulting - Servicios de Transformación Digital"
        />
        <meta
          name="twitter:description"
          content="Servicios tecnológicos a medida: desarrollo de software, consultoría IT, ciberseguridad y soluciones escalables para tu empresa."
        />
        <meta
          name="twitter:image"
          content="https://consulting.yumly.es/ConsultingLogo.png"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <main>
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
            <Link href="/servicios/dev">
              <img
                className="paneles"
                src="/servicios/dev.png"
                alt="servicio de desarrollo"
              />
            </Link>

            <Link href="/servicios/infra">
              <img
                className="paneles"
                src="/servicios/infra.png"
                alt="Servicio de infraestructura tecnológica"
              />
            </Link>

            <Link href="/servicios/seguridad">
              <img
                className="paneles"
                src="/servicios/seguridad.png"
                alt="Servicio de ciberseguridad"
              />
            </Link>
          </div>

          <div className="paneles-container">
            <Link href="/servicios/transformacion">
              <img
                className="paneles"
                src="/servicios/transformacion.png"
                alt="Servicio de transformación digital"
              />
            </Link>

            <Link href="/servicios/soporte">
              <img
                className="paneles"
                src="/servicios/consultorial.png"
                alt="Servicio de consultoría IT"
              />
            </Link>

            <Link href="/servicios/gestion">
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
            Impulsamos la transformación digital de tu empresa mediante
            soluciones tecnológicas seguras, escalables y adaptadas a tus
            objetivos de negocio. Ofrecemos desarrollo de software, consultoría
            IT y ciberseguridad a medida.
          </p>

          <div>
            <div className="paneles-container">
              <Link href="/servicios/infra">
                <img
                  className="paneles"
                  src="/soluciones/continuidad.png"
                  alt="Solución de continuidad"
                />
              </Link>

              <Link href="/servicios/transformacion">
                <img
                  className="paneles"
                  src="/soluciones/eficiencia.png"
                  alt="Solución de eficiencia"
                />
              </Link>

              <Link href="/servicios/dev">
                <img
                  className="paneles"
                  src="/soluciones/escalabilidad.png"
                  alt="Solución de escalabilidad"
                />
              </Link>
            </div>

            <div className="paneles-container">
              <Link href="/servicios/seguridad">
                <img
                  className="paneles"
                  src="/soluciones/proteccion.png"
                  alt="Solución de protección"
                />
              </Link>

              <Link href="/servicios/gestion">
                <img
                  className="paneles"
                  src="/soluciones/insigths.png"
                  alt="Solución de insights"
                />
              </Link>

              <Link href="/servicios/soporte">
                <img
                  className="paneles"
                  src="/soluciones/soporte.png"
                  alt="Servicio de soporte"
                />
              </Link>
            </div>
          </div>
        </section>
        <OcasoBanner />
      </main>
    </>
  );
}
