import { Schema, model } from "mongoose";

const ProductSchema = Schema({
    name: {
        type: String,
        required: [true, 'Name is required.'],
        unique: true
    },
    price: Number,
    description: String,
    stock: Number,
})

const ProductModel = model('Product', ProductSchema);

export default ProductModel;