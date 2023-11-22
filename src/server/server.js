import express from 'express';
import router from '../routes/productRoutes.js';
import routeError from '../utils/routeError.js';
import routerShoppingCart from '../routes/shoppingCartRoutes.js';

const server = express();

server.use(express.json());

server.use(router);
server.use(routerShoppingCart)

server.use(routeError)
export default server;