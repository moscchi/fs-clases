import { addProductInCartService } from "../service/shoppingCartServices.js";

const addProductInCartController = async (request, response) => {
  try {
    const addProductToCart = await addProductInCartService(request);
    response.json(addProductToCart);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

export default addProductInCartController;
