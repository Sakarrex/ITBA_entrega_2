import { useState } from 'react';
import menuIcon from '../assets/icons/menu.svg';
import shoppingCartIcon from '../assets/icons/shopping_cart.svg';
import './Navbar.css';

function Navbar({ cantidadCarrito }) {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <>
      <header className="site-header">
        <nav className="nav">
          <button
            className="nav-toggle"
            type="button"
            aria-label={menuAbierto ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuAbierto}
            aria-controls="nav-menu"
            onClick={() => setMenuAbierto(!menuAbierto)}
          >
            <img src={menuIcon} alt="" width="24" height="24" />
          </button>

          <a className="nav-logo" href="index.html">
            <img src="/assets/img/logo.svg" alt="" width="44" height="44" />
            <span className="nav-logo-text">Hermanos Jota</span>
          </a>

          <div className="nav-actions">
            <a
              className="nav-cart"
              href="carrito.html"
              aria-label="Ver carrito de compras"
            >
              <img src={shoppingCartIcon} alt="" width="24" height="24" />
              <span className="nav-cart-count" id="cart-count">
                {cantidadCarrito}
              </span>
            </a>
          </div>

          <ul
            className={`nav-menu${menuAbierto ? ' is-open' : ''}`}
            id="nav-menu"
          >
            <li>
              <a href="index.html">Inicio</a>
            </li>
            <li>
              <a href="productos.html">Catalogo</a>
            </li>
            <li>
              <a href="contacto.html">Contacto</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
