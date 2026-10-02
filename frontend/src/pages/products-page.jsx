import { useNavigate, useOutletContext } from 'react-router-dom';
import ProductList from '../components/ProductList.jsx';

export default function ProductsPage() {
  const { productos, cargando, error, agregarAlCarrito } = useOutletContext();
  const navigate = useNavigate();

  if (cargando) {
    return <p className="estado-carga">Cargando productos…</p>;
  }

  if (error) {
    return <p className="estado-error">{error}</p>;
  }

  return (
    <section>
      <h1>Catálogo de productos</h1>
      <ProductList
        productos={productos}
        onSeleccionar={(producto) => navigate(`/productos/${producto.id}`)}
        onAgregar={agregarAlCarrito}
      />
    </section>
  );
}
