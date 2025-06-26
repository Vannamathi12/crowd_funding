import Product from '../models/Product.js';

export const getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

export const createProduct = async (req, res) => {
  const { title, description, price, condition, category, imageUrl } = req.body;
  const product = new Product({ title, description, price, condition, category, imageUrl });
  const created = await product.save();
  res.status(201).json(created);
};
