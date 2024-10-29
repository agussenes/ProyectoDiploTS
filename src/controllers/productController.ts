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