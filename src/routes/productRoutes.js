import express from 'express';
import { getProductsController, getProductByIdController, createProductController, updateProductController, deleteProductController } from '../controller/productController.js';

const router = express.Router();

router.get('/product', getProductsController);
router.get('/product/:id', getProductByIdController)
router.post('/product', createProductController)
router.put('/product/:id', updateProductController)
router.delete('/product/:id', deleteProductController)

export default router;