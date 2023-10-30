const express = require('express');
const fs = require('fs/promises')
const { readDatabase } = require('./readDatabase')
const server = express();

server.use(express.json())

server.get('/', (request, response) => {
    response.send('Bienvenido a mi primer servidor.');
})
// EXPLICACION DE TIPOS DE PARAMETROS
server.get('/multiplicar/:valor', (request, response) => {
    console.log(request.params.valor)
    const valorConstante = request.params.valor
    response.json({message: `El valor de la multiplicación de 10 por ${valorConstante} es ${10*valorConstante}`})
})

server.get('/saludar', (request, response) => {
    console.log(request.query)
    response.json({message: `Hola soy ${request.query.nombre} ${request.query.apellido}.`})
})
// FIN EXPLICACION DE TIPOS DE PARAMETROS

// CRUD API: Crear un producto - Leer la lista de todos los productos - Leer un producto por id
// actualizar un producto por id - eliminar un producto por id
/**
 *  name: string
 *  description: string
 *  price: number
 *  image: string
 *  stock: number
 *  id: number
 */

// Leer los productos (READ)
server.get('/product', async (request, response) => {
    try {
        const products = await readDatabase();
        response.json({products})
    } catch (error) {
        console.error(error)
        response.json({message: 'Error al querer leer los productos.'})
    }
})

server.get('/product/:id', async (request, response) => {
    const id = Number(request.params.id);
try {
    const products = await readDatabase();
    const product = products.find(product => product.id === id);
    if(!product) return response.json({message: 'Product not found'})
    response.json({product})
} catch (error) {
    console.error(error);
    response.json({message: `Error al querer buscar el producto ${id}.`})
}

})

//Agregar producto (CREATE)
server.post('/product', async (request, response) => {
    try {
        // Guardamos en la constante newProduct el nuevo producto que viene del body.
        const newProduct = request.body

        //Leer la base de datos (el .txt)
        const products = await fs.readFile('./db/database.txt', 'utf-8')

        //Parseamos los productos
        const productsParsed = JSON.parse(products);
        
        // Agregamos el producto del body (newProduct) a la lista parseada.
        productsParsed.push(newProduct);

        // Sobreescribimos el viejo archivo con el nuevo array pasado a string.
        const stringProducts = JSON.stringify(productsParsed)
        await fs.writeFile('./db/database.txt', stringProducts, 'utf-8');
        console.log(productsParsed);

        response.json({message: "Producto añadido con éxito."})
    } catch (error) {
        console.error(error)
        response.json({message: "Error al querer agregar el producto."})
    }
})


server.listen(8080, () => console.log('Servidor escuchando en 8080'))