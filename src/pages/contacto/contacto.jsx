import "./contacto.css";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Helmet } from "react-helmet";

function Contacto() {
  const [mensajeEstado, setMensajeEstado] = useState(""); // feedback en pantalla

  const enviarFormulario = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l77qfom", // tu servicio EmailJS
        "template_g1un34g",
        e.target,
        "F3VvO9y1NuAjdecS-", // tu clave pública EmailJS
      )
      .then(
        (result) => {
          console.log("Correo enviado", result.text);
          setMensajeEstado("Correo enviado correctamente");
          e.target.reset();
        },
        (error) => {
          console.log("Error", error.text);
          setMensajeEstado("Error al enviar: " + error.text);
        },
      );
  };

  return (
    <main id="contacto-main">
      {/* SEO */}
      <Helmet>
        <title>Yumly Consulting - Contacto</title>
        <meta
          name="description"
          content="Contacta con Yumly Consulting para consultas sobre desarrollo web, consultoría IT, ciberseguridad y transformación digital. Formulario seguro y fácil de usar."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://consulting.yumly.es/contacto" />
      </Helmet>

      <h1>Contacto</h1>

      <section id="formulario">
        <form onSubmit={enviarFormulario}>
          <div className="form-group">
            <label htmlFor="nombre">Nombre *</label>
            <input
              id="nombre"
              type="text"
              name="nombre"
              placeholder="Nombre"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">E-mail *</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="E-mail"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="telefono">Teléfono</label>
            <input
              id="telefono"
              type="tel"
              name="telefono"
              placeholder="Teléfono"
            />
          </div>

          <div className="form-group">
            <label htmlFor="asunto">Asunto</label>
            <input id="asunto" type="text" name="asunto" placeholder="Asunto" />
          </div>

          <div className="form-group">
            <label htmlFor="mensaje">Mensaje *</label>
            <textarea
              id="mensaje"
              name="mensaje"
              placeholder="Escribe tu mensaje..."
              required
            ></textarea>
          </div>

          <button type="submit">Enviar</button>
        </form>

        {mensajeEstado && <p className="feedback">{mensajeEstado}</p>}
      </section>
    </main>
  );
}

export default Contacto;
