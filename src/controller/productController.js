import { createProductService, deleteProductService, getProductByIdService, getProductsService, updateProductService } from "../service/productService.js";

const getProductsController = async (request, response) => {
    const products = await getProductsService()
    response.json(products);
};

const getProductByIdController = async (request, response) => {
  const product = await getProductByIdService(request);
  response.json(product)
};

const updateProductController = async (request, response) => {
  const updateProduct = await updateProductService(request);
  response.json(updateProduct)
};

const createProductController = async (request, response) => {
  const createProduct = await createProductService(request)
  response.json(createProduct)
};

const deleteProductController = async (request, response) => {
  const deleteProduct = await deleteProductService(request)
  response.json(deleteProduct)
};
export {
  getProductsController,
  getProductByIdController,
  updateProductController,
  createProductController,
  deleteProductController,
};
