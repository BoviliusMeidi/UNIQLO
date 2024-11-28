const cartModel = require('../models/cartModel');

const getCart = async (req, res) => {
  const user = req.session.user;
  if (!user) {
    return res.status(401).json({ error: 'Unauthorized. Please log in.' });
  }

  try {
    const cartItems = await cartModel.getCartItems(user.id);
    res.status(201).json({ cartItems });
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving cart items.' });
  }
};

const addCartItem = async (req, res) => {
  const { product_id, quantity } = req.body;
  const user = req.session.user;
  
  if (!user) {
    return res.status(401).json({ error: 'Unauthorized. Please log in.' });
  }

  try {
    await cartModel.addToCart(user.id, product_id, quantity);
    res.json({ message: 'Added to cart.' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateCartItem = async (req, res) => {
  const { id } = req.params; // cart item ID
  const { quantity } = req.body; // new quantity
  const user = req.session.user;

  if (!user) {
    return res.status(401).json({ error: 'Unauthorized. Please log in.' });
  }

  if (quantity <= 0) {
    return res.status(400).json({ error: 'Quantity must be greater than zero.' });
  }

  try {
    await cartModel.updateCartItem(id, quantity);
    res.json({ message: 'Cart item updated successfully.' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const removeCartItem = async (req, res) => {
  const { id } = req.params;
  const user = req.session.user;

  if (!user) {
    return res.status(401).json({ error: 'Unauthorized. Please log in.' });
  }

  try {
    await cartModel.removeFromCart(id);
    res.json({ message: 'Removed from cart.' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getCart,
  addCartItem,
  removeCartItem,
  updateCartItem,
};
