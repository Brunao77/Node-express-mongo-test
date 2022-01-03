import { Schema, model } from "mongoose";

const productSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    urlImage: String
},{
    versionKey:false
});

export default model('Product', productSchema);