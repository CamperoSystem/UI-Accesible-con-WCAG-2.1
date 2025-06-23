import React from 'react';

function Header() {
  return (
    <header className="site-header" role="banner">
      <nav aria-label="Menú principal" className="navbar">
        <ul className="nav-list">
          <li><a href="/" tabIndex="0">Inicio</a></li>
          <li><a href="/nosotros" tabIndex="0">Nosotros</a></li>
          <li><a href="/contacto" tabIndex="0">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
