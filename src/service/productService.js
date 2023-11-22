import ProductModel from "../models/products.models.js";

const getProductsService = async () => {
  try {
    const products = await ProductModel.find();
    return products;
  } catch (error) {
    console.log(error);
    throw new Error("Internal server error");
  }
};

const getProductByIdService = async (idProduct) => {
  try {

    const product = await ProductModel.findOne({ _id: idProduct });

    return product;
  } catch (error) {
    console.log(error);
    throw new Error("Internal Server Error");
  }
};
const getProductByNameService = async (request) => {
  try {
    const name = request.params.name;
    const product = await ProductModel.findOne({ name: name });

    return product;
  } catch (error) {
    console.log(error);
    throw new Error("Internal Server Error");
  }
};
const createProductService = async (request) => {
  try {
    const newProduct = request.body;
    const newProductToDB = new ProductModel({
      name: newProduct.name,
      price: newProduct.price,
      description: newProduct.description,
      stock: newProduct.stock,
    });
    await newProductToDB.save();
    return { message: "Producto agregado con éxito." };
  } catch (error) {
    console.error(error);
  }
};

const updateProductService = async (request) => {
  try {
    const id = request.params.id;
    const updateProduct = request.body;
    const product = await ProductModel.findOneAndUpdate({_id: id}, updateProduct)
    if(!product) return undefined
    return product
  } catch (error) {
    console.error(error);
    throw new Error("Internal Server Error");
  }
};

const deleteProductService = async (request) => {
  try {
    const id = request.params.id;
    const deleteProduct = await ProductModel.deleteOne({_id: id})
    if(deleteProduct.deletedCount === 0) return undefined;

    return { message: 'Producto eliminado con exito.'}
  } catch (error) {
    console.error(error);
    throw new Error("Internal Server Error");
  }
};
export {
  getProductsService,
  getProductByIdService,
  createProductService,
  updateProductService,
  deleteProductService,
  getProductByNameService,
};
