import "./about.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conócenos – Yumly Consulting",
  description: "Yumly Consulting: consultoría tecnológica especializada en desarrollo de software, infraestructura IT y transformación digital.",
  robots: "index, follow",
  alternates: {
    canonical: "https://consulting.yumly.es/about",
  },
  openGraph: {
    title: "Conócenos – Yumly Consulting",
    description: "Yumly Consulting: consultoría tecnológica especializada en desarrollo de software, infraestructura IT y transformación digital.",
    url: "https://consulting.yumly.es/about",
    siteName: "Yumly Consulting",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Conócenos – Yumly Consulting",
    description: "Yumly Consulting: consultoría tecnológica especializada en desarrollo de software, infraestructura IT y transformación digital.",
  },
};

export default function About() {
  return (
    <main className="about-page">
      {/* HERO */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>Construimos tecnología con sentido</h1>
          <p>
            Transformamos ideas en soluciones digitales sólidas, escalables y
            alineadas con objetivos reales de negocio.
          </p>
        </div>
      </section>

      {/* QUIÉN SOY */}
      <section className="about-intro">
        <div className="intro-text">
          <h2>Quién está detrás</h2>
          <p>
            Yumly Consulting es un proyecto fundado por Alejandro Herrera,
            especializado en soluciones tecnológicas para empresas que buscan
            eficiencia y crecimiento digital. Nace con una idea clara: hacer
            tecnología útil, bien pensada y sin complejidad innecesaria.
            Trabajo de forma cercana con cada cliente, entendiendo su negocio
            y proponiendo soluciones reales en desarrollo de software,
            infraestructura IT y seguridad.
          </p>
        </div>

        <div className="intro-image">
          <img src="/yo.png" alt="CEO Yumly Consulting" />
        </div>
      </section>

      {/* CÓMO TRABAJAMOS */}
      <section className="about-method">
        <h2>Nuestra forma de trabajar</h2>

        <div className="method-grid">
          <div className="method-card">
            <h3>Análisis real</h3>
            <p>
              Entendemos primero el contexto, los objetivos y el problema
              antes de proponer cualquier solución.
            </p>
          </div>

          <div className="method-card">
            <h3>Soluciones claras</h3>
            <p>
              Diseñamos arquitectura tecnológica eficiente, escalable y
              alineada con el negocio.
            </p>
          </div>

          <div className="method-card">
            <h3>Ejecución sólida</h3>
            <p>
              Llevamos las ideas a producción con enfoque práctico, seguro y
              orientado a resultados.
            </p>
          </div>
        </div>
      </section>

      {/* VISIÓN */}
      <section className="about-vision">
        <h2>Nuestra visión</h2>
        <p>
          Creemos que la tecnología debe estar al servicio del negocio, no al
          revés. Apostamos por comunicación directa, decisiones fundamentadas
          y soluciones que aporten valor real.
        </p>
      </section>
    </main>
  );
}