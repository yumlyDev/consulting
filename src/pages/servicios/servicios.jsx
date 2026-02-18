import "./servicios.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
function Servicios() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Si no hay hash, ir al inicio de la página
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <main>
      <div>
        {/* Video de fondo */}
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
          <img
            className="paneles"
            src="/servicios/dev.png"
            alt="Servicio de desarrollo"
          />
          <img
            className="paneles"
            src="/servicios/infra.png"
            alt="Servicio de transformación digital"
          />
          <img
            className="paneles"
            src="/servicios/seguridad.png"
            alt="Servicio de gestión y mantenimiento"
          />
        </div>

        <div className="paneles-container">
          <img
            className="paneles"
            src="/servicios/transformacion.png"
            alt="Servicio de transformación digital"
          />
          <img
            className="paneles"
            src="/servicios/consultorial.png"
            alt="Servicio de desarrollo"
          />

          <img
            className="paneles"
            src="/servicios/gestion.png"
            alt="Servicio de gestión y mantenimiento"
          />
        </div>
      </section>

      <section id="soluciones" className="servicios">
        <h1>Soluciones Tecnológicas para la Transformación Digital</h1>
        <p className="descripcion">
          Impulsamos la transformación digital de tu empresa mediante soluciones
          tecnológicas seguras, escalables y adaptadas a tus objetivos de
          negocio. Ofrecemos desarrollo de software, consultoría IT y
          ciberseguridad a medida.
        </p>

        <div>
          <div className="paneles-container">
            <img
              className="paneles"
              src="/soluciones/continuidad.png"
              alt="continuidad"
            />
            <img
              className="paneles"
              src="/soluciones/eficiencia.png"
              alt="Servicio de infraestructura"
            />
            <img
              className="paneles"
              src="/soluciones/escalabilidad.png"
              alt="Servicio de escalabilidad"
            />
          </div>
          <div className="paneles-container">
            <img
              className="paneles"
              src="/soluciones/proteccion.png"
              alt="proteccion"
            />
            <img
              className="paneles"
              src="/soluciones/insigths.png"
              alt="insigths"
            />
            <img
              className="paneles"
              src="/soluciones/soporte.png"
              alt="Soporte"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Servicios;
