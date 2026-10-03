import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import Navbar from './components/navbar/Navbar.jsx';
import Footer from './components/footer/Footer.jsx';
import CartPage from './pages/cart-page.jsx';
import ContactPage from './pages/contact-page/contact-page.jsx';
import HomePage from './pages/home-page/home-page.jsx';
import ProductDetailPage from './pages/product-detail-page.jsx';
import ProductsPage from './pages/products-page.jsx';
import { obtenerProductos } from './services/productos.js';

function AppLayout({ productos, cargando, error, carrito, agregarAlCarrito }) {
  const cantidadCarrito = carrito.reduce(
    (total, item) => total + item.cantidad,
    0
  );

  return (
    <>
      <Navbar cantidadCarrito={cantidadCarrito} />
      <main>
        <Outlet
          context={{ productos, cargando, error, carrito, agregarAlCarrito }}
        />
      </main>
      <Footer />
    </>
  );
}

function App() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [carrito, setCarrito] = useState([]);

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
    setCarrito((carritoActual) => {
      const existe = carritoActual.find((item) => item.id === producto.id);

      if (existe) {
        return carritoActual.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      }

      return [...carritoActual, { ...producto, cantidad: 1 }];
    });
  }

  const layoutProps = {
    productos,
    cargando,
    error,
    carrito,
    agregarAlCarrito,
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout {...layoutProps} />}>
          <Route index element={<HomePage />} />
          <Route path="productos" element={<ProductsPage />} />
          <Route path="productos/:productoId" element={<ProductDetailPage />} />
          <Route path="carrito" element={<CartPage />} />
          <Route path="contacto" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
