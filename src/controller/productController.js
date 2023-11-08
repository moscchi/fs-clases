import {
  createProductService,
  deleteProductService,
  getProductByIdService,
  getProductsService,
  updateProductService,
} from "../service/productService.js";

const getProductsController = async (request, response) => {
  try {
    const products = await getProductsService();
    if (products.length === 0)
      return response.status(404).json({ message: "Products not found" });
    response.json(products);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

const getProductByIdController = async (request, response) => {
  try {
    const product = await getProductByIdService(request);
    if(!product) return response.status(404).json({message: "Product not found."})
    response.json(product);
  } catch (error) {
    response.status(500).json({ message: error.message });
    
  }
};

const updateProductController = async (request, response) => {
  try {
    const updateProduct = await updateProductService(request);
    if(!updateProduct) 
      return response.status(404).json({message: "Product not found"});
    
    response.status(204).json(updateProduct);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

const createProductController = async (request, response) => {
  const createProduct = await createProductService(request);
  response.json(createProduct);
};

const deleteProductController = async (request, response) => {
  const deleteProduct = await deleteProductService(request);
  response.json(deleteProduct);
};
export {
  getProductsController,
  getProductByIdController,
  updateProductController,
  createProductController,
  deleteProductController,
};
