import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import productRoutes from './routes/productRoutes';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

//configurar el motor de vistas EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


//Middlewar actúa como una capa intermedia que puede procesar, 
//modificar o controlar una solicitud antes de enviarla a la ruta o controlador adecuado
app.use(express.urlencoded({extended: true})); // Para leer datos del formulario
app.use(express.static(path.join(__dirname, '../public')));

//rutas
app.use('/', productRoutes); //Monta las rutas de productos en la raiz


app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`);
})