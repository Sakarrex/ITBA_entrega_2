import React from 'react';

function ProductDetail({ producto, onVolver, onAgregar }) {
  if (!producto) return null;

  return (
    <section className="product-detail">
      <button type="button" onClick={onVolver}>
        Volver
      </button>
      <div className="product-detail-card">
      <h2>{producto.nombre}</h2>
      {producto.precio && <p className="price">${producto.precio}</p>}
      <p>{producto.descripcion}</p>
      {producto.stock !== undefined && <p>Stock disponible: {producto.stock}</p>}
      <button type="button" onClick={() => onAgregar(producto)}>
        Añadir al carrito
      </button>
      </div>
    </section>
  );
}

export default ProductDetail;
