import ProductModel from "../models/products.models.js"
import ShoppingCartModel from "../models/shoppingCart.models.js"
import { getProductByIdService } from "./productService.js"

export const addProductInCartService = async (request) => {
    try {
        const {username} = request.params
        // Vamos a recibir el idProduct y la cantidad (amount)
        const { idProduct, amountProducts } = request.body
        console.log(idProduct);
        const product = await getProductByIdService(idProduct)
        const productsForShoppingCart = []
        console.log(product);
        for (let i = 0; i < amountProducts; i++) {
            productsForShoppingCart.push(product)        
        }

        const shoppingCart = await ShoppingCartModel.findOne({ username: username });
        if(!shoppingCart){
            const newCart = new ShoppingCartModel({ username, products: productsForShoppingCart})
            await newCart.save()
            return newCart;
        } else {
            shoppingCart.products = [...shoppingCart.products, ...productsForShoppingCart]
            await shoppingCart.save();
            return shoppingCart
        }
    } catch (error) {
        console.error(error)
        throw new Error('Internal server error.')
    }
}
