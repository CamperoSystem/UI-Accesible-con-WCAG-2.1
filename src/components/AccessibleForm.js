import React, { useRef, useState } from 'react';
import { useTextField } from 'react-aria';

function TextField(props) {
  const ref = useRef();
  const {
    labelProps,
    inputProps,
    descriptionProps,
    errorMessageProps
  } = useTextField(props, ref);

  return (
    <div className="field">
      <label {...labelProps}>{props.label}</label>
      <input {...inputProps} ref={ref} className="input" />
      {props.description && (
        <div {...descriptionProps} className="description">{props.description}</div>
      )}
      {props.errorMessage && (
        <div {...errorMessageProps} className="error">{props.errorMessage}</div>
      )}
    </div>
  );
}

export default function AccessibleForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit} aria-label="Formulario de contacto" className="form">
        <TextField
          label="Nombre"
          name="nombre"
          description="Introduce tu nombre completo."
        />
        <TextField
          label="Correo Electrónico"
          name="correo"
          description="Introduce una dirección de correo válida."
        />
        <TextField
          label="Mensaje"
          name="mensaje"
          description="Escribe tu mensaje."
        />
        <button type="submit" className="btn">Enviar</button>
      </form>
      {submitted && (
        <div role="status" aria-live="polite" className="mensaje-confirmacion">
          Gracias por enviar el formulario.
        </div>
      )}
    </>
  );
}
