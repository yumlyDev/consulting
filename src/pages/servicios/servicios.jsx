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
    <main
      className="servicios"
      style={{ padding: "100px 20px", textAlign: "center" }}
    >
      <h1>Servicios</h1>
      <p>Servicios tecnológicos eficientes, seguros y a medida.</p>
      <div>
        {/* Video de fondo */}
        <video className="video-bg" autoPlay loop muted playsInline>
          <source src="/banner.mp4" type="video/mp4" />
          Tu navegador no soporta la etiqueta de video.
        </video>
      </div>
      <section>
        <div className="paneles-container">
          <img
            className="paneles"
            src="/dev.png"
            alt="Servicio de desarrollo"
          />
          <img
            className="paneles"
            src="/infra.png"
            alt="Servicio de transformación digital"
          />
          <img
            className="paneles"
            src="/seguridad.png"
            alt="Servicio de gestión y mantenimiento"
          />
        </div>
      </section>
      <section>
        <div className="paneles-container">
          <img
            className="paneles"
            src="/transformacion.png"
            alt="Servicio de transformación digital"
          />
          <img
            className="paneles"
            src="/consultoria.png"
            alt="Servicio de desarrollo"
          />

          <img
            className="paneles"
            src="/gestion.png"
            alt="Servicio de gestión y mantenimiento"
          />
        </div>
      </section>
      <h1>Soluciones</h1>
      <p>Servicios tecnológicos eficientes, seguros y a medida.</p>
      <div>
        <div id="soluciones">
          <h2>Sección Soluciones</h2>

          <section>
            <div className="paneles-container">
              <img
                className="paneles"
                src="/dev.png"
                alt="Servicio de desarrollo"
              />
              <img
                className="paneles"
                src="/infra.png"
                alt="Servicio de infraestructura"
              />
              <img
                className="paneles"
                src="/seguridad.png"
                alt="Servicio de gestión y mantenimiento"
              />
            </div>
          </section>

          <section>
            <div className="paneles-container">
              <img
                className="paneles"
                src="/transformacion.png"
                alt="Servicio de transformación digital"
              />
              <img
                className="paneles"
                src="/consultoria.png"
                alt="Servicio de consultoría"
              />
              <img
                className="paneles"
                src="/gestion.png"
                alt="Servicio de gestión y mantenimiento"
              />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Servicios;
