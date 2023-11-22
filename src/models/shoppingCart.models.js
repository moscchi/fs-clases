import { Schema, model } from "mongoose";

const ShoppingCartSchema = Schema({
  products: {
    type: Array,
  },
  username: { unique: true, type: String },
});

const ShoppingCartModel = model("ShoppingCart", ShoppingCartSchema);

export default ShoppingCartModel;
