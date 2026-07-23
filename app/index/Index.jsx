import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./index.css";

function Index() {
  return (
    <div>
      {/* ===================================== */}
      {/* META SEO Y REDES */}
      {/* ===================================== */}
      <Helmet>
        <title>Yumly Consulting - Transformamos ideas en resultados</title>
        <meta
          name="description"
          content="Tecnología, innovación y eficiencia para tu negocio. Consultoría tecnológica y desarrollo web a medida."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://consulting.yumly.es/" />

        {/* Open Graph */}
        <meta property="og:title" content="Yumly Consulting - Transformamos ideas en resultados" />
        <meta
          property="og:description"
          content="Tecnología, innovación y eficiencia para tu negocio. Consultoría tecnológica y desarrollo web a medida."
        />
        <meta property="og:image" content="https://consulting.yumly.es/ConsultingLogo.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://consulting.yumly.es/" />
        <meta property="og:site_name" content="Yumly Consulting" />
        <meta property="og:locale" content="es_ES" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Yumly Consulting - Transformamos ideas en resultados" />
        <meta
          name="twitter:description"
          content="Tecnología, innovación y eficiencia para tu negocio. Consultoría tecnológica y desarrollo web a medida."
        />
        <meta name="twitter:image" content="https://consulting.yumly.es/ConsultingLogo.png" />

        {/* Theme color */}
        <meta name="theme-color" content="#000000" />

        {/* Preload logo */}
        <link rel="preload" as="image" href="/ConsultingLogo.png" />

        {/* Schema.org Organization + WebSite */}
        <script type="application/ld+json">
          {`
            {
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
            }
          `}
        </script>
      </Helmet>

      {/* ===================================== */}
      {/* VIDEO DE FONDO */}
      {/* ===================================== */}
      <video
        className="video-bg"
        autoPlay
        loop
        muted
        playsInline
        role="presentation"
        aria-hidden="true"
      >
        <source src="/oficina.mp4" type="video/mp4" />
        Tu navegador no soporta la etiqueta de video.
      </video>

      {/* ===================================== */}
      {/* CONTENIDO PRINCIPAL */}
      {/* ===================================== */}
      <main>
        {/* Home */}
        <section id="home">
          <h1>Transformamos ideas en resultados.</h1>
          <p>Tecnología, innovación y eficiencia para tu negocio.</p>
        </section>

        {/* Servicios */}
        <section id="servicios">
          <h2>Servicios</h2>
          <p>Servicios tecnológicos eficientes, seguros y a medida.</p>
          <Link to="/dev">
            <img
              className="paneles"
              src="/servicios/dev.png"
              alt="Servicio de desarrollo web personalizado"
              loading="lazy"
            />
          </Link>
          <Link to="/transformacion">
            <img
              className="paneles"
              src="/servicios/transformacion.png"
              alt="Servicio de transformación digital"
              loading="lazy"
            />
          </Link>
          <Link to="/gestion">
            <img
              className="paneles"
              src="/servicios/gestion.png"
              alt="Servicio de gestión y mantenimiento tecnológico"
              loading="lazy"
            />
          </Link>
        </section>

        {/* Soluciones */}
        <section id="soluciones">
          <h2>Soluciones</h2>
          <p>Soluciones digitales pensadas para crecer contigo.</p>
          <Link to="/sesion">
            <img
              className="paneles"
              src="/soluciones/soporte.png"
              alt="Servicio de soporte técnico"
              loading="lazy"
            />
          </Link>
          <Link to="/sesion">
            <img
              className="paneles"
              src="/soluciones/proteccion.png"
              alt="Servicio de protección digital"
              loading="lazy"
            />
          </Link>
          <Link to="/sesion">
            <img
              className="paneles"
              src="/soluciones/eficiencia.png"
              alt="Servicio de eficiencia tecnológica"
              loading="lazy"
            />
          </Link>
        </section>

        {/* Casos de éxito */}
        <section id="contact">
          <h2>Casos de éxito</h2>
          <p>
            Proyectos donde optimizamos procesos, incrementamos resultados y generamos crecimiento real.
          </p>
          <a href="https://www.trainmovementscenter.es/" target="_blank" rel="noopener noreferrer">
            <img
              className="paneles"
              src="/tcm.png"
              alt="Caso de éxito: Fisioterapia TCM Alcorcón"
              loading="lazy"
            />
          </a>
        </section>
      </main>
    </div>
  );
}

export default Index;