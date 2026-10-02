import React from 'react';

function Navbar({ cantidadCarrito }) {
  return (
    <header className="navbar">
      <nav className="navbar-container">
        <span className="navbar-title">Hermanos Jota</span>
        <div className="navbar-cart">
          <span className="cart-icon">🛒</span>
          <span className="cart-badge">Carrito: {cantidadCarrito}</span>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
