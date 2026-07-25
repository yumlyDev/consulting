import Link from "next/link";
import type { Metadata, Viewport } from "next";
import Image from "next/image";
import OcasoBanner from "@/components/OcasoBanner";
import "./servicios.css";
export const metadata: Metadata = {
  title:
    "Yumly Consulting - Servicios de Transformación Digital y Soluciones IT",
  description:
    "Servicios tecnológicos a medida en España: desarrollo de software, consultoría IT, ciberseguridad y soluciones escalables para tu empresa.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://consulting.yumly.es/servicios",
  },
  openGraph: {
    title: "Yumly Consulting - Servicios de Transformación Digital",
    description:
      "Servicios tecnológicos a medida: desarrollo de software, consultoría IT, ciberseguridad y soluciones escalables para tu empresa.",
    url: "https://consulting.yumly.es/servicios",
    siteName: "Yumly Consulting",
    images: [
      {
        url: "https://consulting.yumly.es/ConsultingLogo.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "Yumly Consulting Logo",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yumly Consulting - Servicios de Transformación Digital",
    description:
      "Servicios tecnológicos a medida: desarrollo de software, consultoría IT, ciberseguridad y soluciones escalables para tu empresa.",
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
        "@type": "ProfessionalService",
        telephone: "+34639253274",
        email: "info@yumly.es",
        priceRange: "€€",
        image: "https://consulting.yumly.es/ConsultingLogo.png",
        address: {
          "@type": "PostalAddress",
          postalCode: "28942",
          addressLocality: "Fuenlabrada",
          addressRegion: "Madrid",
          addressCountry: "ES",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "40.2842",
          longitude: "-3.7942",
        },
        sameAs: ["https://www.linkedin.com/company/yumly-consulting"],
        name: "Yumly Consulting",
        url: "https://consulting.yumly.es/servicios",
        logo: "https://consulting.yumly.es/ConsultingLogo.png",
        description:
          "Servicios de transformación digital y consultoría tecnológica en España.",
        areaServed: {
          "@type": "Country",
          name: "Spain",
        },
      },
      {
        "@type": "ItemList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: {
              "@type": "Service",
              name: "Desarrollo de Software a Medida",
              url: "https://consulting.yumly.es/servicios/dev",
            },
          },
          {
            "@type": "ListItem",
            position: 2,
            item: {
              "@type": "Service",
              name: "Infraestructura Tecnológica",
              url: "https://consulting.yumly.es/servicios/infra",
            },
          },
          {
            "@type": "ListItem",
            position: 3,
            item: {
              "@type": "Service",
              name: "Ciberseguridad Empresarial",
              url: "https://consulting.yumly.es/servicios/seguridad",
            },
          },
          {
            "@type": "ListItem",
            position: 4,
            item: {
              "@type": "Service",
              name: "Transformación Digital",
              url: "https://consulting.yumly.es/servicios/transformacion",
            },
          },
          {
            "@type": "ListItem",
            position: 5,
            item: {
              "@type": "Service",
              name: "Consultoría IT y Soporte",
              url: "https://consulting.yumly.es/servicios/soporte",
            },
          },
          {
            "@type": "ListItem",
            position: 6,
            item: {
              "@type": "Service",
              name: "Gestión y Mantenimiento Tecnológico",
              url: "https://consulting.yumly.es/servicios/gestion",
            },
          },
        ],
      },
    ],
  } as const;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main>
        <div>
          <video
            className="video-bg"
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            role="presentation"
            aria-hidden="true"
            poster="/poster.png"
          >
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
            <Link
              href="/servicios/dev"
              aria-label="Servicio de desarrollo de software a medida"
            >
              <Image
                className="paneles"
                src="/servicios/dev.png"
                alt="Servicio de desarrollo de software y aplicaciones a medida"
                width={600}
                height={400}
                loading="lazy"
              />
            </Link>

            <Link
              href="/servicios/infra"
              aria-label="Servicio de infraestructura tecnológica corporativa"
            >
              <Image
                className="paneles"
                src="/servicios/infra.png"
                alt="Servicio de infraestructura tecnológica y sistemas IT"
                width={600}
                height={400}
                loading="lazy"
              />
            </Link>

            <Link
              href="/servicios/seguridad"
              aria-label="Servicio de ciberseguridad para empresas"
            >
              <Image
                className="paneles"
                src="/servicios/seguridad.png"
                alt="Servicio de ciberseguridad y protección de datos"
                width={600}
                height={400}
                loading="lazy"
              />
            </Link>
          </div>

          <div className="paneles-container">
            <Link
              href="/servicios/transformacion"
              aria-label="Servicio de transformación digital empresarial"
            >
              <Image
                className="paneles"
                src="/servicios/transformacion.png"
                alt="Servicio de transformación digital y modernización"
                width={600}
                height={400}
                loading="lazy"
              />
            </Link>

            <Link
              href="/servicios/soporte"
              aria-label="Servicio de consultoría IT y soporte técnico"
            >
              <Image
                className="paneles"
                src="/servicios/consultorial.png"
                alt="Servicio de consultoría IT y asesoramiento tecnológico"
                width={600}
                height={400}
                loading="lazy"
              />
            </Link>

            <Link
              href="/servicios/gestion"
              aria-label="Servicio de gestión y mantenimiento informático"
            >
              <Image
                className="paneles"
                src="/servicios/gestion.png"
                alt="Servicio de gestión y mantenimiento de sistemas"
                width={600}
                height={400}
                loading="lazy"
              />
            </Link>
          </div>
        </section>

        <section id="soluciones" className="servicios">
          <h2>Soluciones Tecnológicas para la Transformación Digital</h2>

          <p className="descripcion">
            Impulsamos la transformación digital de tu empresa mediante
            soluciones tecnológicas seguras, escalables y adaptadas a tus
            objetivos de negocio. Ofrecemos desarrollo de software, consultoría
            IT y ciberseguridad a medida.
          </p>

          <div>
            <div className="paneles-container">
              <Link
                href="/servicios/infra"
                aria-label="Solución de continuidad de negocio y sistemas IT"
              >
                <Image
                  className="paneles"
                  src="/soluciones/continuidad.png"
                  alt="Solución de continuidad de negocio tecnológica"
                  width={600}
                  height={400}
                  loading="lazy"
                />
              </Link>

              <Link
                href="/servicios/transformacion"
                aria-label="Solución de eficiencia operativa digital"
              >
                <Image
                  className="paneles"
                  src="/soluciones/eficiencia.png"
                  alt="Solución de eficiencia y optimización de procesos"
                  width={600}
                  height={400}
                  loading="lazy"
                />
              </Link>

              <Link
                href="/servicios/dev"
                aria-label="Solución de escalabilidad de software"
              >
                <Image
                  className="paneles"
                  src="/soluciones/escalabilidad.png"
                  alt="Solución de escalabilidad tecnológica para empresas"
                  width={600}
                  height={400}
                  loading="lazy"
                />
              </Link>
            </div>

            <div className="paneles-container">
              <Link
                href="/servicios/seguridad"
                aria-label="Solución de protección y defensa digital"
              >
                <Image
                  className="paneles"
                  src="/soluciones/proteccion.png"
                  alt="Solución de protección de activos digitales"
                  width={600}
                  height={400}
                  loading="lazy"
                />
              </Link>

              <Link
                href="/servicios/gestion"
                aria-label="Solución de análisis de datos e insights"
              >
                <Image
                  className="paneles"
                  src="/soluciones/insigths.png"
                  alt="Solución de analítica de datos e insights de negocio"
                  width={600}
                  height={400}
                  loading="lazy"
                />
              </Link>

              <Link
                href="/servicios/soporte"
                aria-label="Servicio integral de soporte tecnológico"
              >
                <Image
                  className="paneles"
                  src="/soluciones/soporte.png"
                  alt="Solución integral de soporte y atención IT"
                  width={600}
                  height={400}
                  loading="lazy"
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
