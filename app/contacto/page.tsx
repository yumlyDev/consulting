"use client";

import "./contacto.css";
import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";

export default function Contacto() {
  const [feedback, setFeedback] = useState({ mensaje: "", error: false });
  const [loading, setLoading] = useState(false);

  const enviarFormulario = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;

    emailjs
      .sendForm(
        "service_l77qfom",
        "template_g1un34g",
        form,
        "F3VvO9y1NuAjdecS-"
      )
      .then(
        (result) => {
          console.log("Correo enviado", result.text);
          setFeedback({
            mensaje: "Correo enviado correctamente",
            error: false,
          });
          setLoading(false);
          form.reset();
        },
        (error) => {
          setFeedback({
            mensaje: "Error al enviar: " + error.text,
            error: true,
          });
          setLoading(false);
        }
      );
  };

  return (
    <main className="contact-page">
      {/* HERO */}
      <section className="contact-hero">
        <div className="hero-content">
          <h1>Hablemos de tu proyecto</h1>
          <p>
            Cuéntanos tus ideas y necesidades. En Yumly Consulting
            transformamos tus proyectos en soluciones digitales seguras,
            escalables y orientadas a resultados.
          </p>
        </div>
      </section>

      {/* FORMULARIO */}
      <section className="contact-form-section">
        <div className="form-wrapper">
          <h2>Envíanos un mensaje</h2>

          <form className="contact-form" onSubmit={enviarFormulario}>
            <div className="form-group">
              <label htmlFor="nombre">Nombre *</label>
              <input
                id="nombre"
                type="text"
                name="nombre"
                placeholder="Tu nombre"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">E-mail *</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Tu correo"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="telefono">Teléfono</label>
              <input
                id="telefono"
                type="tel"
                name="telefono"
                placeholder="Tu teléfono"
                pattern="[0-9]{7,15}"
                title="Introduce solo números, entre 7 y 15 dígitos"
              />
            </div>

            <div className="form-group">
              <label htmlFor="asunto">Asunto</label>
              <input
                id="asunto"
                type="text"
                name="asunto"
                placeholder="Asunto"
              />
            </div>

            <div className="form-group">
              <label htmlFor="mensaje">Mensaje *</label>
              <textarea
                id="mensaje"
                name="mensaje"
                placeholder="Escribe tu mensaje..."
                required
              />
            </div>

            <button type="submit" disabled={loading}>
              {loading ? "Enviando..." : "Enviar mensaje"}
            </button>
          </form>

          {feedback.mensaje && (
            <p
              className={`feedback ${feedback.error ? "error" : "success"}`}
              aria-live="polite"
            >
              {feedback.mensaje}
            </p>
          )}
        </div>
      </section>
    </main>
  );
}