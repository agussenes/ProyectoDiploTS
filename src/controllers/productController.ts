import { Request, Response} from 'express';
import {ProductoModelo} from '../models/ProductModel';


export const obtenerProductos = (req: Request, res: Response) => {
    const products = ProductoModelo.cargarProductos();
    res.render('index', {products});
}

export const mostrarFormularioCrearProducto = (req: Request, res: Response) => {
    res.render('crearProducto'); // Renderiza la vista del formulario de creación 
}

export const crearProducto = (req: Request, res: Response) => {
    const {titulo, descripcion, precio, imagen} = req.body;
    const  nuevoProducto = { 
        id: ProductoModelo.cargarProductos().length + 1,
        titulo, 
        descripcion,
        precio: Number(precio),
        imagen };
    ProductoModelo.agregarProducto(nuevoProducto);
    res.redirect('/'); // // Redirige a la página de inicio después de crear el producto
}

//COntrolador para mostrar el formulario de edición
export const mostrarFormularioEditarProducto = (req: Request, res: Response) =>{
    const id = parseInt(req.params.id, 10);
    const producto = ProductoModelo.cargarProductos().find(p => p.id === id);
    if(producto){
        res.render('editarProducto', {producto});
    }else{
        res.status(404).send('Producto no encontrado');
    }
}

export const editarProducto = (req: Request, res:Response) => {
    const productoActualizado = {
        id: parseInt(req.params.id, 10),
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,  // Corrección aquí
        precio: parseFloat(req.body.precio),
        imagen: req.body.imagen
    };
    try {
        ProductoModelo.editarProducto(productoActualizado);
        res.redirect('/');
    } catch (error) {
        res.status(404).send((error as Error).message);
    }
}

// Controlador para eliminar el producto
export const eliminarProducto = (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    try {
        ProductoModelo.eliminarProducto(id);
        res.redirect('/');
    } catch (error) {
        res.status(404).send((error as Error).message);
    }
};