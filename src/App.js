import React from 'react';
import Header from './components/Header';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div>
      <Header />
      <main role="main" className="main-content">
        <h1 tabIndex="0">Contáctanos</h1>
        <p>Si tienes alguna consulta, completa el siguiente formulario.</p>
        <ContactForm />
      </main>
    </div>
  );
}

export default App;
