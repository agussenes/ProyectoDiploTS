import fs from 'fs';
import path from 'path';

interface Producto{
    id: number;
    titulo: string;
    descripcion: string;
    precio: number;
    imagen: string;
}

export class ProductoModelo {
    private static filePath = path.join(__dirname, '../data/productos.json');


    //metodo para cargar productos del JSON
    static cargarProductos(): Producto[]{
        const data = fs.readFileSync(this.filePath, 'utf-8');
        return JSON.parse(data) as Producto[];
    }

    // Metodo para agregar un producto al JSON
    static agregarProducto(producto: Producto): void {
        const productos = this.cargarProductos();
        producto.id = productos.length + 1; // Genera nueva ID
        productos.push(producto);
        fs.writeFileSync(this.filePath, JSON.stringify(productos, null, 2));
    }
}