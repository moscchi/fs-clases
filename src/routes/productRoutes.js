import express from "express";
import {
  getProductsController,
  getProductByIdController,
  createProductController,
  updateProductController,
  deleteProductController,
  getProductByNameController,
} from "../controller/productController.js";
import productBodyValidator from "../utils/productBodyValidator.js";

const router = express.Router();

router.get("/product", getProductsController);
router.get("/product/:id", getProductByIdController);
router.get("/product-name/:name", getProductByNameController);
router.put(
  "/product/:id",
  productBodyValidator,
  updateProductController
);
router.post("/product", productBodyValidator, createProductController);
/* 
Con express validator: Recordar instalar la libreria e importar la validator funtion
router.post("/product", body('id').isEmpty().isNumeric(), body('name').isString(),
body('price').isNumeric(). validator,  createProductController); */

router.delete("/product/:id", deleteProductController);

export default router;
