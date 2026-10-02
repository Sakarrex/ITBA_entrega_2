import { useOutletContext } from 'react-router-dom';

export default function CartPage() {
  const { carrito } = useOutletContext();
  const cantidadProductos = carrito.reduce(
    (total, item) => total + item.cantidad,
    0
  );

  return (
    <section>
      <h1>Carrito</h1>
      <p>Página en construcción. Productos agregados: {cantidadProductos}.</p>
    </section>
  );
}
