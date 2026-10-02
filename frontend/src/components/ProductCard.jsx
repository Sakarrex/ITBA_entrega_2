import React from 'react';

export default function ProductCard({ product, onSelectProduct, onAddToCart }) {
  const { nombre, precio, imagen, categoria } = product;

  return (
    <article className="product-card">
      {imagen && <img src={imagen} alt={nombre} className="product-card-image" loading="lazy" />}
      <div className="product-card-content">
        {categoria && <span className="product-card-category">{categoria}</span>}
        <h3 className="product-card-title">{nombre}</h3>
        <p className="product-card-price">${precio}</p>
        <div className="product-card-actions">
          <button type="button" className="btn btn-secondary" onClick={() => onSelectProduct(product)}>
            Ver detalle
          </button>
          <button type="button" className="btn btn-primary" onClick={() => onAddToCart(product)}>
            Agregar al carrito
          </button>
        </div>
      </div>
    </article>
  );
}