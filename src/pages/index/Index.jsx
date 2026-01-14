import Menu from "../../components/Menu.jsx";
import { Link } from "react-router-dom";
import "./index.css";

function Index() {
  return (
    <div>
      {/* Video de fondo */}
      <video className="video-bg" autoPlay loop muted playsInline>
        <source src="/oficina.mp4" type="video/mp4" />
        Tu navegador no soporta la etiqueta de video.
      </video>

      {/* Menú */}
      <Menu />

      {/* Contenido */}
      <main>
        <section id="home">
          <h1>Transformamos ideas en resultados.</h1>
          <p>Tecnología, innovación y eficiencia para tu negocio.</p>
        </section>

        <section id="servicios">
          <h2>Servicios</h2>
            <p>Servicios tecnológicos eficientes, seguros y a medida.</p>
          <Link to="/servicios/desarrollo">
            <img
              className="paneles"
              src="/dev.png"
              alt="servicio de desarrollo"
            />
          </Link>
          <Link to="/servicios/gestion">
            <img
              className="paneles"
              src="/transformacion.png"
              alt="servicio de transformación digital"
            />
          </Link>
          <Link to="/servicios/gestion">
            <img
              className="paneles"
              src="/gestion.png"
              alt="servicio de gestión y mantenimiento"
            />
          </Link>
        </section>

        <section id="soluciones">
          <h2>Soluciones</h2>
          <p>Soluciones digitales pensadas para crecer contigo.</p>
          <Link to="/soluciones/soporte">
            <img
              className="paneles"
              src="/soporte.png"
              alt="servicio de soporte"
            />
          </Link>
          <Link to="/soluciones/proteccion">
            <img
              className="paneles"
              src="/proteccion.png"
              alt="servicio de proteccion"
            />
          </Link>
          <Link to="/soluciones/eficiencia">
            <img
              className="paneles"
              src="/eficiencia.png"
              alt="servicio de eficiencia"
            />
          </Link>
        </section>

        <section id="contact">
          <h2>Casos de exito</h2>
          <p>Formulario o información de contacto.</p>
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
