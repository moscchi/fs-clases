import express from 'express';
import routesProduct from '../routes/productRoutes.js';
import routesAuth from '../routes/authRoutes.js';
import routeError from '../utils/routeError.js';
import validateToken from '../utils/validateToken.js';

const server = express();

server.use(express.json());
server.use(routesAuth);
server.use(validateToken)
server.use(routesProduct);

server.use(routeError)
export default server;