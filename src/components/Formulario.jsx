import React from 'react';
import emailjs from '@emailjs/browser';

const Formulario = () => {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('TU_SERVICIO_ID', 'TU_TEMPLATE_ID', e.target, 'TU_USER_ID')
      .then((result) => {
        console.log('Correo enviado', result.text);
        alert('¡Mensaje enviado!');
        e.target.reset(); // limpia el formulario
      }, (error) => {
        console.log('Error', error.text);
        alert('Error al enviar, intenta de nuevo.');
      });
  };

  return (
    <form onSubmit={sendEmail}>
      <input type="text" name="user_name" placeholder="Tu nombre" required />
      <input type="email" name="user_email" placeholder="Tu correo" required />
      <textarea name="message" placeholder="Tu mensaje" required></textarea>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Formulario;
