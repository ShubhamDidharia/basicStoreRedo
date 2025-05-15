import Product from "../models/product.js";

export const getAllProducts =  async(req,res)=>{
  try{
    const products = await Product.find();
    res.status(200).json(products);

  }catch(err){
    console.error('Error fetching products', err);
    res.status(500).json({ message: 'Internal Server Error' });

  }
}

export const createProduct =  async(req,res) =>  {
    const product = req.body;
    const newProduct = new Product(product);
    try{
      await newProduct.save();
      res.status(201).json(newProduct);
    }
    catch(err){
        console.error('Error creating product', err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

export const updateProduct =  async(req,res) =>{
  const {id}  = req.params;
  const newproduct = req.body;
  try{
    const updatedProduct = await Product.findByIdAndUpdate(id,newproduct,{new: true});
    res.status(200).json(updatedProduct);
  }
  catch(err){
    console.error("error updating item", err);
    res.status(500).json({message: 'internal server error'});
  }
}

export const deleteProduct =  async(req,res)=>{
  const {id} = req.params;
  try{
    const deletedProdcut = await Product.findByIdAndDelete(id); 
    res.status(200).json(deletedProdcut);
  }catch(err){
    console.error('error deleting product', err);
    res.status(500).json({message: 'internal server error'});
  }
}