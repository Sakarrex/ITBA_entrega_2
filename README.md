# Trabajo integrador Fullstack Developer 2026 - ITBA

Repositorio para el trabajo integrador grupal del grupo 6 Comisión 1 TT. Consiste en una página de e-commerce para una mueblería ficticia: Hermanos Jota.

Esta es la **segunda entrega**: la página de la primera entrega (HTML, CSS y JavaScript vanilla) se reescribió con el stack MERN. El frontend ahora es una aplicación React que consume una API propia desarrollada con Node.js y Express.

Integrantes:
- Contreras Valentin Ramiro
- Dorado Escudero Facundo
- García Fontana Sebastián José
- Ramírez Lautaro Agustín
- Retamozo Sequeira Jorge Nicolas

## Ejecución

Se necesitan los dos servidores corriendo al mismo tiempo, cada uno en su propia terminal.

1. Clonar el repositorio e instalar las dependencias de cada parte:

```bash
git clone https://github.com/Sakarrex/ITBA_entrega_2.git
cd ITBA_entrega_2

cd backend
npm install

cd ../frontend
npm install
```

2. Levantar el backend (corre en `http://localhost:3000`) y el frontend:

```bash
# Terminal 1
cd backend
npm run dev

# Terminal 2
cd frontend
npm run dev
```

3. Abrir en el navegador la URL que muestra Vite en la terminal (normalmente `http://localhost:5173`).

No hace falta configurar variables de entorno. En desarrollo, Vite redirige las llamadas a `/api` hacia `http://localhost:3000`, por lo que el frontend y el backend se conectan solos.

El puerto del backend se puede cambiar con la variable de entorno `PORT` (por defecto `3000`). Si se cambia, hay que actualizar también el `proxy` en `frontend/vite.config.js`.

Para correr el backend sin recarga automática se puede usar `npm start`.

La primera entrega sigue desplegada en https://muebleria-hermanos.netlify.app/

## Funcionalidades

- Catálogo de productos cargado desde la API, con estados de carga y error
- Carrusel de productos destacados en la página de inicio
- Vista de detalle de cada producto con material, medidas, acabado y stock
- Carrito de compras: agregar productos, modificar cantidades, quitar productos, vaciar el carrito y ver el total
- Contador del carrito en la barra de navegación
- El carrito se conserva al recargar la página (persistencia en `localStorage`)
- Formulario de contacto con campos controlados, validación en frontend y mensaje de éxito (el envío es simulado, no se guarda en el backend)
- Diseño responsive para distintos tamaños de pantalla

## Tecnologías utilizadas

- React 19 y Vite
- React Router DOM
- Node.js y Express 5
- dotenv
- CSS3
- Git y GitHub para control de versiones

## API

Todas las respuestas tienen el formato `{ success, data, message }`.

| Método | Ruta | Descripción |
| --- | --- | --- |
| GET | `/api/productos` | Listado completo de productos |
| GET | `/api/productos/:id` | Producto por id (`404` si no existe) |

## Estructura del proyecto

- `backend/server.js`: punto de entrada del servidor Express
- `backend/controllers/`: lógica de cada endpoint
- `backend/middlewares/`: middlewares del servidor, incluido el manejador centralizado de errores
- `backend/data/`: datos locales de los productos
- `frontend/src/App.jsx`: estado global (productos y carrito) y definición de rutas
- `frontend/src/components/`: piezas reutilizables (`Navbar`, `Footer`, `ProductList`, `ProductCard`, `ProductDetail`)
- `frontend/src/pages/`: vistas principales
  - `home-page`: inicio con carrusel de destacados
  - `products-page.jsx`: catálogo completo
  - `product-detail-page.jsx`: detalle de un producto (`/productos/:productoId`)
  - `cart-page.jsx`: revisión del carrito, gestión de cantidades y total de compra
  - `contact-page`: formulario de contacto
- `frontend/src/services/`: llamadas a la API centralizadas con `fetch`

## Decisiones técnicas

- **Estado en `App.jsx`:** productos y carrito se comparten con las páginas mediante el contexto del `Outlet` de React Router, sin agregar librerías de estado.
- **Persistencia del carrito:** al iniciar, el carrito se lee de `localStorage` (clave `muebleria_carrito`) y un `useEffect` lo guarda cada vez que cambia. Si los datos guardados están dañados, el carrito empieza vacío.
- **Llamadas a la API en `services/`:** los componentes no conocen las URLs ni el formato de respuesta.
- **Proxy de Vite:** el frontend llama a rutas relativas (`/api/...`) y Vite las reenvía al backend, evitando problemas de CORS en desarrollo.
- **Sin base de datos en esta entrega:** los productos se leen de archivos locales en `backend/data/`. Mongoose ya está instalado, pero la conexión con MongoDB queda para la siguiente etapa.
