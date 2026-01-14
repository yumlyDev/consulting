import Menu from "../components/Menu.jsx";

function Index() {
  return (
    <div>
      {/* Video de fondo */}
      <video
        autoPlay
        loop
        muted
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source src="/oficina.mp4" type="video/mp4" />
        Tu navegador no soporta la etiqueta de video.
      </video>

      {/* Menú */}
      <Menu />

      {/* Contenido encima del video */}
      <main style={{ position: "relative", zIndex: 1, color: "white", paddingTop: "120px" }}>
        <section id="home" style={{ padding: "100px 20px", textAlign: "center" }}>
          <h1>Bienvenido a nuestra oficina</h1>
          <p>Texto visible encima del video.</p>
        </section>

        <section id="servicios" style={{ padding: "100px 20px", textAlign: "center" }}>
          <h2>Servicios</h2>
          <p>Descripción de servicios.</p>
        </section>

        <section id="soluciones" style={{ padding: "100px 20px", textAlign: "center" }}>
          <h2>Soluciones</h2>
          <p>Descripción de soluciones.</p>
        </section>

        <section id="contact" style={{ padding: "100px 20px", textAlign: "center" }}>
          <h2>Contacto</h2>
          <p>Formulario o información de contacto.</p>
        </section>
      </main>
    </div>
  );
}

export default Index;
