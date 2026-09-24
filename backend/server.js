import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/api/health', (request, response) => {
  response.json({
    success: true,
    data: {
      service: 'muebleria-jota-backend',
      status: 'ok',
      path: request.path,
    },
    message: 'Backend funcionando correctamente',
  });
});

app.use((request, response) => {
  response.status(404).json({
    success: false,
    data: null,
    message: `Ruta no encontrada: ${request.method} ${request.path}`,
  });
});

app.use((error, request, response, next) => {
  void next;
  console.error(error);
  response.status(500).json({
    success: false,
    data: null,
    message: `Error interno del servidor en ${request.path}`,
  });
});

app.listen(port, () => {
  console.log(`Backend escuchando en http://localhost:${port}`);
});
