import { useState } from 'react';
import './contact-page.css';

export default function ContactPage() {
  const [isSuccess, setIsSuccess] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const nombre = formData.get('name')?.toString().trim();
    const email = formData.get('email')?.toString().trim();
    const motivo = formData.get('subject')?.toString().trim();
    const mensaje = formData.get('message')?.toString().trim();

    if (!nombre || !email || !motivo || !mensaje) {
      return;
    }

    setIsSuccess(true);
  }

  return (
    <main>
      <section className="contact">
        <div className="contact-container">
          <div className={`contact-form-card ${isSuccess ? 'is-success' : ''}`}>
            <form
              className="contact-form"
              onSubmit={handleSubmit}
              noValidate
              hidden={isSuccess}
            >
              <h2 className="contact-title">Formulario de contacto</h2>

              <div className="form-group">
                <label htmlFor="name">
                  Nombre y Apellido{' '}
                  <span className="required-mark" aria-hidden="true">
                    *
                  </span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Nombre completo"
                  required
                />
                <p className="form-error" id="name-error" role="alert"></p>
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  Correo{' '}
                  <span className="required-mark" aria-hidden="true">
                    *
                  </span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="ejemplo@email.com"
                  required
                />
                <p className="form-error" id="email-error" role="alert"></p>
              </div>

              <div className="form-group">
                <label htmlFor="phone">Telefono</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+54 11 2345-6789"
                />
                <p className="form-error" id="phone-error" role="alert"></p>
              </div>

              <div className="form-group">
                <label htmlFor="subject">
                  Motivo de contacto{' '}
                  <span className="required-mark" aria-hidden="true">
                    *
                  </span>
                </label>
                <select id="subject" name="subject" required>
                  <option value="">Elige Motivo</option>
                  <option value="consulta">Consulta General</option>
                  <option value="pedido">Realizar un Pedido</option>
                  <option value="personalizado">Mueble Personalizado</option>
                  <option value="otro">Otro</option>
                </select>
                <p className="form-error" id="subject-error" role="alert"></p>
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  Mensaje{' '}
                  <span className="required-mark" aria-hidden="true">
                    *
                  </span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Escribí tu mensaje aquí..."
                  required
                ></textarea>
                <p className="form-error" id="message-error" role="alert"></p>
              </div>

              <button type="submit" className="contact-button">
                ENVIAR
              </button>

              <p className="form-note" id="form-note">
                Por favor rellenar campos obligatorios
              </p>
            </form>

            <div className="contact-success" hidden={!isSuccess}>
              <img
                className="contact-success-image"
                src="/assets/icons/check_circle.svg"
                alt="Imagen de mensaje enviado con éxito"
                width="208"
                height="208"
              />
              <p className="contact-success-message">
                Mensaje enviado con éxito!
                <br />
                En nuestro equipo se comunicara dentro de breve
                <br />
                <strong>Muchas Gracias!</strong>
              </p>
              <a className="contact-success-button" href="/">
                VOLVER A INICIO
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
