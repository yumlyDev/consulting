import "./globals.css";
import "./page.css";
import Menu from "@/components/menu";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
  variable: "--font-montserrat", // Definimos la variable
});

export const metadata: Metadata = {
  metadataBase: new URL("https://consulting.yumly.es"),
  title: {
    default: "Yumly Consulting | Desarrollo Web y Soluciones Tecnológicas",
    template: "%s | Yumly Consulting",
  },
  description:
    "Consultoría tecnológica especializada en desarrollo web a medida, automatización de procesos, ciberseguridad e infraestructura IT para empresas.",
  robots: "index, follow",
  alternates: {
    canonical: "https://consulting.yumly.es",
  },
  openGraph: {
    title: "Yumly Consulting | Desarrollo Web y Soluciones Tecnológicas",
    description:
      "Consultoría tecnológica especializada en desarrollo web a medida, automatización de procesos, ciberseguridad e infraestructura IT.",
    url: "https://consulting.yumly.es",
    siteName: "Yumly Consulting",
    images: [{ url: "https://consulting.yumly.es/ConsultingLogo.png" }],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yumly Consulting | Desarrollo Web y Soluciones Tecnológicas",
    description:
      "Consultoría tecnológica especializada en desarrollo web a medida, automatización de procesos, ciberseguridad e infraestructura IT.",
    images: ["https://consulting.yumly.es/ConsultingLogo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Yumly Consulting",
    url: "https://consulting.yumly.es",
    logo: "https://consulting.yumly.es/ConsultingLogo.png",
    image: "https://consulting.yumly.es/ConsultingLogo.png",
    description:
      "Consultoría tecnológica especializada en desarrollo web, automatización de procesos y ciberseguridad para empresas.",
    areaServed: {
      "@type": "Country",
      name: "Spain",
    },
    priceRange: "$$",
  };

  return (
    <html lang="es" className={montserrat.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>
        <Menu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
