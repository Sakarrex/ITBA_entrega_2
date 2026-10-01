// Versión mínima para probar App. La completa el Participante 4.
function ProductDetail({ producto, onVolver, onAgregar }) {
  return (
    <section>
      <button type="button" onClick={onVolver}>
        Volver
      </button>
      <h2>{producto.nombre}</h2>
      <p>{producto.descripcion}</p>
      <button type="button" onClick={() => onAgregar(producto)}>
        Añadir al carrito
      </button>
    </section>
  );
}

export default ProductDetail;
