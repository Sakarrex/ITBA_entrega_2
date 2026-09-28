import express from 'express';
import { PRODUCTOS } from '../data/productos.js';

const router = express.Router();

router.get('/', (request, response) => {
  response.json({
    success: true,
    data: PRODUCTOS,
    message: 'Productos obtenidos correctamente',
  });
});

router.get('/:id', (request, response, next) => {
  const producto = PRODUCTOS.find(
    (item) => String(item.id) === request.params.id
  );

  if (!producto) {
    const error = new Error(
      `Producto con id ${request.params.id} no encontrado`
    );
    error.status = 404;
    return next(error);
  }

  response.json({
    success: true,
    data: producto,
    message: 'Producto obtenido correctamente',
  });
});

export default router;