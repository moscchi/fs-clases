import express from 'express';
import router from '../routes/productRoutes.js';
import routeError from '../utils/routeError.js';

const server = express();

server.use(express.json());
server.use(router);

server.use(routeError)
export default server;