import "./servicios.css";
function Servicios() {
  return (
    <main
      className="servicios"
      style={{ padding: "100px 20px", textAlign: "center" }}>
      <h1>Servicios</h1>
      <p>Servicios tecnológicos eficientes, seguros y a medida.</p>

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
    </main>
  );
}

export default Servicios;
