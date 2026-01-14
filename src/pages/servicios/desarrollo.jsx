import Menu from "../../components/Menu.jsx";
import "./index.css";
function Index() {
  return (
    <div>
      {/* Video de fondo */}
      <video autoPlay loop muted>
        <source src="/oficina.mp4" type="video/mp4" />
        Tu navegador no soporta la etiqueta de video.
      </video>

      {/* Menú */}
      <Menu />

      {/* Contenido encima del video */}
      <main>
        <section id="home">
          <h1>Transformamos ideas en resultados.</h1>
          <p>Tecnología, innovación y eficiencia para tu negocio.</p>
        </section>

        <section id="servicios">
          <h2>Servicios</h2>
          <p>Descripción de servicios.</p>
          <img className="paneles" src=".\public\dev.png" alt="servicio de desarrollo"></img>
          <img className="paneles" src=".\public\transformacion.png" alt="servicio de transformacion digital "></img>
         <a href=".\src\pages\servicios\gestion.jsx" > <img className="paneles" src=".\public\gestion.png" alt="servicio de vgestion y mantenimiento"></img></a>
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
