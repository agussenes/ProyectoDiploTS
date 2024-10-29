import { Router} from 'express';
import { obtenerProductos, mostrarFormularioCrearProducto, crearProducto} from '../controllers/productController';

const router = Router();

router.get('/', obtenerProductos);
router.get('/crear', mostrarFormularioCrearProducto);
router.post('/crear', crearProducto);

export default router;