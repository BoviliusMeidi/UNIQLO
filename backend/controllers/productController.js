const { getProducts, updateProduct, createProduct, deleteProduct, updateProductImage, getProductById } = require('../models/productModel');

const listProducts = async (req, res) => {
  try {
    const products = await getProducts();
    res.status(200).json({ listProducts: products });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Failed to get products" });
  }
};

const listProductsbyID = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await getProductById(id);
    res.status(200).json({ product });
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ error: "Failed to get product" });
  }
};

const makeProduct = async (req, res) => {
  const { product_name, product_picture, category, price, stock, size, description } = req.body;

  try {
      if (!product_name || !product_picture || !category || !price || !stock || !size || !description) {
          return res.status(400).json({ message: 'All fields are required' });
      }
      const newProduct = await createProduct(product_name, product_picture, category, price, stock, size, description);
      res.status(201).json({ message: 'Product created successfully', product: newProduct });
  } catch (error) {
      console.error('Error creating product:', error);
      res.status(500).json({ message: 'Error creating product' });
  }
};

const editProduct = async (req, res) => {
  const { id } = req.params;
  const { product_name, price, description, stock, size, category } = req.body;

  if (!product_name && !price && !description && !stock && !category) {
    return res.status(400).json({ message: "No fields provided for update" });
  }

  try {
    const updatedProduct = await updateProduct(id, product_name, price, description, stock, size, category );

    if (updatedProduct) {
      res.json({ message: "Product updated successfully", product: updatedProduct });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ error: "Failed to update product" });
  }
};

const removeProduct = async (req, res) => {
  const { id, size } = req.params;

  try {
    const deleted = await deleteProduct(id, size);

    if (deleted) {
      res.json({ message: "Product deleted successfully" });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ error: "Failed to delete product" });
  }
};

const uploadProduct = async (req, res) => {
  if (req.file) {
    const filePath = `/uploads/products/${req.file.filename}`;

    try {
      const updatedUser = await updateProductImage(req.session.user.id, filePath);
      if (updatedUser) {
        res.json({ image_url: filePath });
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      console.error('Error saving image URL to database:', error);
      res.status(500).json({ message: 'Error saving image URL to database' });
    }
  } else {
    res.status(400).json({ message: 'No file uploaded' });
  }
};

const uploadProductImage = (req, res) => {
  if (!req.file) {
      return res.status(400).send({ message: 'No file uploaded' });
  }
  console.log(req.file.filename);

  res.json({
      filename: req.file.filename,
      image_url: `../../uploads/products/${req.file.filename}`
  });
};

module.exports = {
  listProducts, listProductsbyID,makeProduct, editProduct, removeProduct, uploadProduct, uploadProductImage
};