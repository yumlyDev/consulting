import "./index.css";

export default function Index() {
  return (
    <div>
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
          <div className="paneles-container">
            <a href="/dev">
              <img
                className="paneles"
                src="/servicios/dev.png"
                alt="Servicio de desarrollo web personalizado"
                loading="lazy"
              />
            </a>
            <a href="/transformacion">
              <img
                className="paneles"
                src="/servicios/transformacion.png"
                alt="Servicio de transformación digital"
                loading="lazy"
              />
            </a>
            <a href="/gestion">
              <img
                className="paneles"
                src="/servicios/gestion.png"
                alt="Servicio de gestión y mantenimiento tecnológico"
                loading="lazy"
              />
            </a>
          </div>
        </section>

        {/* Soluciones */}
        <section id="soluciones">
          <h2>Soluciones</h2>
          <p>Soluciones digitales pensadas para crecer contigo.</p>
          <div className="paneles-container">
            <a href="/sesion">
              <img
                className="paneles"
                src="/soluciones/soporte.png"
                alt="Servicio de soporte técnico"
                loading="lazy"
              />
            </a>
            <a href="/sesion">
              <img
                className="paneles"
                src="/soluciones/proteccion.png"
                alt="Servicio de protección digital"
                loading="lazy"
              />
            </a>
            <a href="/sesion">
              <img
                className="paneles"
                src="/soluciones/eficiencia.png"
                alt="Servicio de eficiencia tecnológica"
                loading="lazy"
              />
            </a>
          </div>
        </section>

        {/* Casos de éxito */}
        <section id="contact">
          <h2>Casos de éxito</h2>
          <p>
            Proyectos donde optimizamos procesos, incrementamos resultados y generamos crecimiento real.
          </p>
          <div className="paneles-container">
            <a href="https://www.trainmovementscenter.es/" target="_blank" rel="noopener noreferrer">
              <img
                className="paneles"
                src="/tcm.png"
                alt="Caso de éxito: Fisioterapia TCM Alcorcón"
                loading="lazy"
              />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}