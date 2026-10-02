export default function ProductCard({ producto, onSeleccionar, onAgregar }) {
  const { nombre, precio, imagen, categoria } = producto;

  return (
    <article className="product-card">
      {imagen && (
        <img
          src={imagen}
          alt={nombre}
          className="product-card-image"
          loading="lazy"
        />
      )}
      <div className="product-card-content">
        {categoria && (
          <span className="product-card-category">{categoria}</span>
        )}
        <h3 className="product-card-title">{nombre}</h3>
        <p className="product-card-price">${precio}</p>
        <div className="product-card-actions">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => onSeleccionar(producto)}
          >
            Ver detalle
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => onAgregar(producto)}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </article>
  );
}
