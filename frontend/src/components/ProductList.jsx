import React from 'react';
import ProductCard from './ProductCard.jsx';

function ProductList({ productos, onSeleccionar, onAgregar }) {
  if (!productos || productos.length === 0) {
    return <p>No hay productos disponibles.</p>;
  }

  return (
    <section className="product-list-grid">
      {productos.map((producto) => (
        <ProductCard
          key={producto.id}
          producto={producto}
          onSeleccionar={onSeleccionar}
          onAgregar={onAgregar}
        />
      ))}
    </section>
  );
}

export default ProductList;
