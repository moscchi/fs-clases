import { writeFile } from "fs/promises";
import readDatabase from "../utils/readDatabase.js";
import { __dirname } from "../db/databaseDir.js";

const getProductsService = async () => {
  try {
    const products = await readDatabase();
    return products;
  } catch (error) {
    console.log(error);
    throw new Error('Internal server error')
  }
};

const getProductByIdService = async (request) => {
  try {
    const id = Number(request.params.id);
    const products = await readDatabase();
    const product = products.find((product) => product.id === id);
    return product
  } catch (error) {
    console.log(error);
    throw new Error('Internal Server Error');
  }
};

const createProductService = async (request) => {
  try {
    const newProduct = request.body;
    const productsParsed = await readDatabase();
    productsParsed.push(newProduct);

    const stringProducts = JSON.stringify(productsParsed);
    await writeFile(__dirname + "/database.txt", stringProducts, "utf-8");
    return { message: "Producto agregado con éxito." };
  } catch (error) {
    console.error(error);
  }
};

const updateProductService = async (request) => {
  const id = Number(request.params.id);
  try {
    const updateProduct = request.body;
    const products = await readDatabase();
    const productsWithoutUpdateProduct = products.filter(
      (product) => product.id !== id
    );
    if (products.length === productsWithoutUpdateProduct.length)
      return undefined;

    updateProduct.id = id;
    productsWithoutUpdateProduct.push(updateProduct);

    const stringProducts = JSON.stringify(productsWithoutUpdateProduct);
    await writeFile(__dirname + "/database.txt", stringProducts, "utf-8");

    return { message: "Product update successfully." };
  } catch (error) {
    console.error(error);
    throw new Error('Internal Server Error');
  }
};

const deleteProductService = async (request) => {
  const id = Number(request.params.id);
  try {
    const products = await readDatabase();
    const productsWithoutUpdateProduct = products.filter(
      (product) => product.id !== id
    );
    if (products.length === productsWithoutUpdateProduct.length)
      return response.json({ message: "Product not found" });

    const stringProducts = JSON.stringify(productsWithoutUpdateProduct);
    await writeFile(__dirname + "/database.txt", stringProducts, "utf-8");
    return { message: "Producto eliminado con éxito." };
  } catch (error) {
    console.error(error);
  }
};
export {
  getProductsService,
  getProductByIdService,
  createProductService,
  updateProductService,
  deleteProductService
};
