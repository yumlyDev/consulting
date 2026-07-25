"use client";

import React, { useState, useRef, ChangeEvent } from "react";
import emailjs from "@emailjs/browser";
import "./formulario.css";

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const [mensajeStatus, setMensajeStatus] = useState<string>("");
  const [enviando, setEnviando] = useState(false);

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    subject: "Desarrollo", // Inicializa do con un valor válido del select
    mensaje: "",
    acceptTerms: false,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const enviarFormulario = (e: React.FormEvent) => {
    e.preventDefault();
    setEnviando(true);

    if (form.current) {
      emailjs
        .sendForm(
          "service_okfb1vg",
          "template_g1un34g",
          form.current,
          "F3VvO9y1NuAjdecS-",
        )
        .then(
          () => {
            setMensajeStatus("¡Mensaje enviado con éxito!");
            setEnviando(false);
            form.current?.reset();
            // Opcional: reiniciamos el estado del form por completo
            setFormData({
              nombre: "",
              email: "",
              telefono: "",
              subject: "Desarrollo",
              mensaje: "",
              acceptTerms: false,
            });
          },
          (error) => {
            setMensajeStatus("Error al enviar: " + error.text);
            setEnviando(false);
          },
        );
    }
  };

  return (
    <div className="form-wrapper" id="contacto-form">
      <h2 className="form-title">
        ¿Listo para mejorar? <span>Contáctanos</span>
      </h2>
      <form ref={form} className="contact-form" onSubmit={enviarFormulario}>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          placeholder="Nombre completo"
          required
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Correo electrónico"
          required
          onChange={handleChange}
        />
        <input
          type="tel"
          name="telefono"
          value={formData.telefono}
          placeholder="Teléfono"
          required
          onChange={handleChange}
        />

        <select name="subject" value={formData.subject} onChange={handleChange}>
          <option value="Desarrollo">Desarrollo</option>
          <option value="Seguridad">Seguridad</option>
          <option value="Infraestructura">Infraestructura</option>
          <option value="Mantenimiento">Mantenimiento</option>
          <option value="Consultas">Consultas</option>
        </select>

        <textarea
          name="mensaje"
          value={formData.mensaje}
          placeholder="¿Cómo podemos ayudarte?"
          required
          onChange={handleChange}
        ></textarea>

        <button type="submit" className="neon-button" disabled={enviando}>
          {enviando ? "ENVIANDO..." : "ENVIAR SOLICITUD"}
        </button>

        {mensajeStatus && (
          <p
            style={{ color: "#39ff14", textAlign: "center", marginTop: "15px" }}
          >
            {mensajeStatus}
          </p>
        )}
      </form>
    </div>
  );
}
