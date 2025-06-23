import React, { useRef, useState } from 'react';
import { useTextField } from 'react-aria';

function TextField({ label, name, description }) {
  const ref = useRef();
  const {
    labelProps,
    inputProps,
    descriptionProps
  } = useTextField({ label, name, description }, ref);

  return (
    <div className="field">
      <label {...labelProps}>{label}</label>
      <input {...inputProps} ref={ref} className="input" />
      {description && (
        <div {...descriptionProps} className="description">{description}</div>
      )}
    </div>
  );
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form" aria-label="Formulario de contacto" role="form">
        <TextField label="Nombre completo" name="nombre" description="Introduce tu nombre completo." />
        <TextField label="Correo electrónico" name="email" description="Introduce un correo válido." />
        <TextField label="Mensaje" name="mensaje" description="Escribe tu mensaje aquí." />
        <button type="submit" className="btn">Enviar</button>
      </form>

      {submitted && (
        <div role="status" aria-live="polite" className="mensaje-confirmacion">
          Tu mensaje ha sido enviado. ¡Gracias por contactarnos!
        </div>
      )}
    </>
  );
}
