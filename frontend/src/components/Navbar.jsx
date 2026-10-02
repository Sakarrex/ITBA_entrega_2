// Versión mínima para probar App. La completa el Participante 4.
function Navbar({ cantidadCarrito }) {
  return (
    <header>
      <nav>
        <span>Hermanos Jota</span>
        <span>Carrito: {cantidadCarrito}</span>
      </nav>
    </header>
  );
}

export default Navbar;
