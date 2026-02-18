import Menu from "../../components/Menu.jsx";
import { Link } from "react-router-dom";
import "./index.css";

function Index() {
  return (
    <div>
      {/* Video de fondo */}
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

      {/* Contenido */}
      <main>
        <section id="home">
          <h1>Transformamos ideas en resultados.</h1>
          <p>Tecnología, innovación y eficiencia para tu negocio.</p>
        </section>

        <section id="servicios">
          <h2>Servicios</h2>
          <p>Servicios tecnológicos eficientes, seguros y a medida.</p>
          <Link to="/sesion">
            <img
              className="paneles"
              src="/servicios/dev.png"
              alt="servicio de desarrollo"
            />
          </Link>
          <Link to="/sesion">
            <img
              className="paneles"
              src="/servicios/transformacion.png"
              alt="servicio de transformación digital"
            />
          </Link>
          <Link to="/sesion">
            <img
              className="paneles"
              src="/servicios/gestion.png"
              alt="servicio de gestión y mantenimiento"
            />
          </Link>
        </section>

        <section id="soluciones">
          <h2>Soluciones</h2>
          <p>Soluciones digitales pensadas para crecer contigo.</p>
          <Link to="/sesion">
            <img
              className="paneles"
              src="soluciones/soporte.png"
              alt="servicio de soporte"
            />
          </Link>
          <Link to="/sesion">
            <img
              className="paneles"
              src="/soluciones/proteccion.png"
              alt="servicio de proteccion"
            />
          </Link>
          <Link to="/sesion">
            <img
              className="paneles"
              src="/soluciones/eficiencia.png"
              alt="servicio de eficiencia"
            />
          </Link>
        </section>

        <section id="contact">
          <h2>Casos de exito</h2>
          <p>
            Casos de éxito que hablan por sí mismos. Proyectos donde optimizamos
            procesos, incrementamos resultados y generamos crecimiento real
          </p>
          <Link to="https://www.trainmovementscenter.es/">
            <img
              className="paneles"
              src="/tcm.png"
              alt="fisioterapia TCM Alcorcon"
            />
          </Link>
        </section>
      </main>
    </div>
  );
}

export default Index;
