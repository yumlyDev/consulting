"use client";
import React, { useState, useRef, ChangeEvent } from "react";
import emailjs from "@emailjs/browser";
import "./formulario.css";

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const [mensajeStatus, setMensajeStatus] = useState<string>("");
  // AÑADE ESTA LÍNEA QUE TE FALTABA
  const [enviando, setEnviando] = useState(false);

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    subject: "Consulta",
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
    setEnviando(true); // Activamos el estado de carga

    if (form.current) {
      emailjs
        .sendForm(
          "service_okfb1vg", // <-- Cambiado al nuevo ID de servicio SMTP
          "template_g1un34g",
          form.current,
          "F3VvO9y1NuAjdecS-",
        )
        .then(
          () => {
            setMensajeStatus("¡Mensaje enviado con éxito!");
            setEnviando(false); // Desactivamos al terminar
            form.current?.reset();
          },
          (error) => {
            setMensajeStatus("Error al enviar: " + error.text);
            setEnviando(false); // Desactivamos al fallar
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
          placeholder="Nombre completo"
          required
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          required
          onChange={handleChange}
        />
        <input
          type="tel"
          name="telefono"
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
