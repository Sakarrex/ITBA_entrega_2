import { useEffect, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import ProductList from './components/ProductList.jsx';
import ProductDetail from './components/ProductDetail.jsx';
import { obtenerProductos } from './services/productos.js';

function App() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [carrito, setCarrito] = useState([]);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  useEffect(() => {
    async function cargarProductos() {
      try {
        const datos = await obtenerProductos();
        setProductos(datos);
      } catch (err) {
        console.error('Error al cargar los productos:', err);
        setError(
          'No se han cargado los datos. Recargá la página para intentar de nuevo.'
        );
      } finally {
        setCargando(false);
      }
    }

    cargarProductos();
  }, []);

  function agregarAlCarrito(producto) {
    const existe = carrito.find((item) => item.id === producto.id);

    if (existe) {
      setCarrito(
        carrito.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
      );
      return;
    }

    setCarrito([...carrito, { ...producto, cantidad: 1 }]);
  }

  let cantidadCarrito = 0;
  for (const item of carrito) {
    cantidadCarrito += item.cantidad;
  }

  return (
    <>
      <Navbar cantidadCarrito={cantidadCarrito} />

      <main>
        {cargando && <p className="estado-carga">Cargando productos…</p>}

        {error && <p className="estado-error">{error}</p>}

        {!cargando &&
          !error &&
          (productoSeleccionado ? (
            <ProductDetail
              producto={productoSeleccionado}
              onVolver={() => setProductoSeleccionado(null)}
              onAgregar={agregarAlCarrito}
            />
          ) : (
            <ProductList
              productos={productos}
              onSeleccionar={setProductoSeleccionado}
              onAgregar={agregarAlCarrito}
            />
          ))}
      </main>
    </>
  );
}

export default App;
