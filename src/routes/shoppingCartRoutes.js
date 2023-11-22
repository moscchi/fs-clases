import express from "express";
import addProductInCartController from '../controller/shoppingCartController.js'
const routerShoppingCart = express.Router();

routerShoppingCart.post('/shopping-cart/:username', addProductInCartController)

export default routerShoppingCart;