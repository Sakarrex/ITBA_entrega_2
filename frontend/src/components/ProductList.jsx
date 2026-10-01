// Versión mínima para probar App. La completa el Participante 4.
function ProductList({ productos, onSeleccionar, onAgregar }) {
  return (
    <ul>
      {productos.map((producto) => (
        <li key={producto.id}>
          <button type="button" onClick={() => onSeleccionar(producto)}>
            {producto.nombre}
          </button>
          <button type="button" onClick={() => onAgregar(producto)}>
            Añadir al carrito
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ProductList;
