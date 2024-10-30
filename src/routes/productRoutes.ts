import { Router } from 'express';
import {
  obtenerProductos,
  mostrarFormularioCrearProducto,
  crearProducto,
  mostrarFormularioEditarProducto,
  editarProducto,
  eliminarProducto
} from '../controllers/productController';

const router = Router();

router.get('/', obtenerProductos); // Mostrar lista de productos
router.get('/crear', mostrarFormularioCrearProducto); // Formulario para crear producto
router.post('/crear', crearProducto); // Procesar creación de producto
router.get('/editar/:id', mostrarFormularioEditarProducto); // Formulario para editar producto
router.post('/editar/:id', editarProducto); // Procesar edición de producto
router.post('/eliminar/:id', eliminarProducto); // Procesar eliminación de producto

export default router;
