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
          <p>Descripción de soluciones.</p>
        </section>

        <section id="contact">
          <h2>Contacto</h2>
          <p>Formulario o información de contacto.</p>
        </section>
      </main>
    </div>
  );
}

export default Index;
