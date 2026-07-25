import Link from "next/link";
import type { Metadata, Viewport } from "next";
import "./page.css";
import { Analytics } from "@vercel/analytics/next";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Yumly Consulting | Desarrollo Web y Consultoría IT en España",
  description:
    "Empresa de desarrollo web a medida y consultoría IT en España. Impulsamos tu negocio con software escalable, ciberseguridad y transformación digital.",
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
    canonical: "https://consulting.yumly.es/",
  },
  openGraph: {
    title: "Yumly Consulting | Desarrollo Web y Consultoría IT en España",
    description:
      "Empresa de desarrollo web a medida y consultoría IT en España. Impulsamos tu negocio con software escalable, ciberseguridad y transformación digital.",
    url: "https://consulting.yumly.es/",
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
    title: "Yumly Consulting | Desarrollo Web y Consultoría IT en España",
    description:
      "Empresa de desarrollo web a medida y consultoría IT en España. Impulsamos tu negocio con software escalable y transformación digital.",
    images: ["https://consulting.yumly.es/ConsultingLogo.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function Home() {
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
        url: "https://consulting.yumly.es",
        logo: "https://consulting.yumly.es/ConsultingLogo.png",
        description:
          "Consultoría tecnológica en España especializada en desarrollo web full-stack, software a medida y soluciones digitales para empresas.",
        areaServed: {
          "@type": "Country",
          name: "Spain",
        },
        makesOffer: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Desarrollo Web a Medida",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Transformación Digital",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Ciberseguridad y Soporte IT",
            },
          },
        ],
      },
    ],
  } as const;

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
        <source src="/oficina.mp4" type="video/mp4" />
        Tu navegador no soporta la etiqueta de video.
      </video>

      <main>
        <section id="home">
          <h1>Consultoría IT y Desarrollo Web a Medida</h1>
          <p>
            Transformamos la estrategia digital de tu empresa con soluciones
            tecnológicas avanzadas, desarrollo full-stack escalable y
            optimización de infraestructuras.
          </p>
          <button> Solicita información</button>
        </section>

        <Analytics />

        <section id="servicios">
          <h2>Nuestros Servicios Tecnológicos para Empresas</h2>
          <p>
            Ofrecemos ingeniería de software, modernización de procesos y
            soporte integral adaptado a las necesidades de tu negocio.
          </p>

          <Link href="/servicios/dev" aria-label="Desarrollo web a medida">
            <Image
              className="paneles"
              src="/servicios/dev.png"
              alt="Servicio de desarrollo web personalizado y software a medida"
              width={600}
              height={400}
              loading="lazy"
            />
          </Link>

          <Link
            href="/servicios/transformacion"
            aria-label="Servicio de transformación digital empresarial"
          >
            <Image
              className="paneles"
              src="/servicios/transformacion.png"
              alt="Servicio de transformación digital empresarial"
              width={600}
              height={400}
              loading="lazy"
            />
          </Link>

          <Link
            href="/servicios/gestion"
            aria-label="Servicio de gestión y mantenimiento tecnológico integral"
          >
            <Image
              className="paneles"
              src="/servicios/gestion.png"
              alt="Servicio de gestión y mantenimiento tecnológico integral"
              width={600}
              height={400}
              loading="lazy"
            />
          </Link>
        </section>

        <section id="soluciones">
          <h2>Soluciones Digitales y Ciberseguridad</h2>
          <p>
            Infraestructuras seguras, alta disponibilidad y soporte técnico
            especializado para garantizar la continuidad de tu operativa.
          </p>

          <Link
            href="/servicios/soporte"
            aria-label="Servicio de soporte técnico IT avanzado"
          >
            <Image
              className="paneles"
              src="/soluciones/soporte.png"
              alt="Servicio de soporte técnico IT avanzado"
              width={600}
              height={400}
              loading="lazy"
            />
          </Link>

          <Link
            href="/servicios/seguridad"
            aria-label="Servicio de ciberseguridad y protección digital"
          >
            <Image
              className="paneles"
              src="/soluciones/proteccion.png"
              alt="Servicio de ciberseguridad y protección digital"
              width={600}
              height={400}
              loading="lazy"
            />
          </Link>

          <Link
            href="/servicios/infra"
            aria-label="Servicio de infraestructura cloud y eficiencia tecnológica"
          >
            <Image
              className="paneles"
              src="/soluciones/eficiencia.png"
              alt="Servicio de infraestructura cloud y eficiencia tecnológica"
              width={600}
              height={400}
              loading="lazy"
            />
          </Link>
        </section>

        <section id="tecnologias">
          <h2>Tecnologías y Stack de Desarrollo</h2>
          <p>
            Trabajamos con herramientas modernas, eficientes y seguras para
            garantizar un rendimiento óptimo y escalabilidad a largo plazo.
          </p>
          <div className="tech-grid">
            <span className="tech-badge">React & Next.js</span>
            <span className="tech-badge">TypeScript</span>
            <span className="tech-badge">Node.js</span>
            <span className="tech-badge">Linux & SysAdmin</span>
            <span className="tech-badge">Docker & Cloud</span>
            <span className="tech-badge">Ciberseguridad</span>
          </div>
        </section>
        <ContactForm />
        <section id="contact">
          <h2>Casos de Éxito y Proyectos Reales</h2>
          <p>
            Descubre cómo ayudamos a optimizar procesos, incrementar la
            rentabilidad y acelerar el crecimiento digital de nuestros clientes.
          </p>
          <a
            href="https://www.trainmovementscenter.es/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Caso de éxito de desarrollo web: Fisioterapia TCM"
          >
            <Image
              className="paneles"
              src="/tcm.png"
              alt="Caso de éxito de desarrollo web: Fisioterapia TCM"
              width={600}
              height={400}
              loading="lazy"
            />
          </a>
        </section>
      </main>
    </div>
  );
}
