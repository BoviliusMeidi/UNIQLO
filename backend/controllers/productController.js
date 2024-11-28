const { getProducts } = require('../models/productModel');

const listProducts = async (req, res) => {
  try {
    const listProducts = await getProducts();
    res.status(201).json({ listProducts });
  } catch (error) {
    res.status(500).json({ error: "Failed to get products" });
  }
}

const uploadProduct = async (req, res) => {
  if (req.file) {
    const filePath = `/uploads/products/${req.file.filename}`;

    try {
      const updatedUser = await updateProfilePicture(req.session.user.id, filePath);
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

module.exports = { listProducts, uploadProduct };