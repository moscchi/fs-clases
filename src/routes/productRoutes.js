import express from "express";
import {
  getProductsController,
  getProductByIdController,
  createProductController,
  updateProductController,
  deleteProductController,
} from "../controller/productController.js";
import productBodyValidator from "../utils/productBodyValidator.js";
import paramValidatorNumber from "../utils/paramValidatorNumber.js";

const router = express.Router();

router.get("/product", getProductsController);
router.get("/product/:id", paramValidatorNumber, getProductByIdController);
router.put(
  "/product/:id",
  paramValidatorNumber,
  productBodyValidator,
  updateProductController
);
router.post("/product", productBodyValidator, createProductController);
/* 
Con express validator: Recordar instalar la libreria e importar la validator funtion
router.post("/product", body('id').isEmpty().isNumeric(), body('name').isString(),
body('price').isNumeric(). validator,  createProductController); */

router.delete("/product/:id", paramValidatorNumber, deleteProductController);

export default router;
