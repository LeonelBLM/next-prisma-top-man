"use client"
import React, { useState } from 'react';
import '../styles/forms.css';

const ContactPage = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);

    const response = await fetch(event.target.action, {
      method: 'POST',
      body: data,
      headers: {
        Accept: 'application/json',
      },
    });

    const result = await response.json();

    if (!response.ok) {
      setMessage(result.errors.map((error) => error.message).join(','));
    } else {
      setMessage('Se ha enviado tu correo satisfactoriamente');
      // Mostrar un mensaje de alerta después de enviar el formulario
      window.alert('¡Mensaje enviado con éxito!');
      // Actualizar la página después de que el usuario presiona "Aceptar"
      window.location.reload();
    }
  };

  return (
    <>
      <section id="hero" className="d-flex align-items-center justify-content-center py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1 style={{ fontSize: '4em', color: 'white', fontFamily: 'initial' }}>Mas sobre nosotros...</h1>
              <p id="texto" className="fst-italic">
                En Transporte Moyata, nos enorgullece contar con una historia sólida y arraigada en la industria del
                transporte pesado, nos basamos en los siguientes pilares.
              </p>
              <p id="texto">
                Ofrecer un servicio caracterizado por la excelencia, la confiabilidad y el compromiso con la satisfacción
                del cliente. Cumplir con los plazos acordados y garantizar la seguridad de la carga durante el transporte.
                Trabajamos de manera proactiva para mantener altos estándares de calidad en cada etapa del proceso
                logístico. Para más información contáctanos por nuestro correo.
              </p>
            </div>
            <div className="col-md-6">
              <div id="form-container">
                <h2 style={{ fontSize: '2em', color: 'white', fontFamily: 'initial' }}>Contáctanos</h2>
                <form
                  id="espejo"
                  className="card card-body border-primary rounded"
                  action="https://formspree.io/f/myyqqgvp"
                  method="POST"
                  onSubmit={handleSubmit}
                >
                  <input placeholder="Nombre" type="text" id="name" name="name" />
                  <input placeholder="Correo Electrónico" type="email" id="email" name="email" />
                  <textarea placeholder="Escribe tu mensaje aquí" name="message" id="message" className="textarea" />
                  <button className="button">Enviar</button>
                </form>
                {/* Mostrar el mensaje en la interfaz */}
                {message && <div className="alert">{message}</div>}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
