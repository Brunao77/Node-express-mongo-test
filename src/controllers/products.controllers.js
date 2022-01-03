import Product from "../models/Products";


export const createProduct = async (req,res)=>{
    const  { title, description, price, urlImage } = req.body;
    const newProduct = new Product({ title, description, price, urlImage})
    const productSaved = await newProduct.save()
    res.json(productSaved)
}

export const getProducts = async (req,res)=>{
    const products = await Product.find()
    res.json(products)
}

export const getProductById = async (req,res)=>{
    const product = await Product.findById(req.params.productId)
    res.json(product)
}

export const editProductById = async (req,res)=>{
    const productUpdated = await Product.findByIdAndUpdate(req.params.productId, req.body,{new: true})
    res.json(productUpdated);
}

export const deleteProductById = async (req,res)=>{
    await Product.findByIdAndDelete(req.params.productId);
    res.status(204).json();
}