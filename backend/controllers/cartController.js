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

const listCarts = async (req, res) => {
  try {
      const listCarts = await cartModel.getCarts();
      res.status(201).json({ listCarts });
  } catch (error) {
      res.status(500).json({ error: "Failed to get user" });
  }
}

const addCartItem = async (req, res) => {
  const { product_id, stock, quantity, size } = req.body;
  const user = req.session.user;
  
  if (!user) {
    return res.status(401).json({ error: 'Unauthorized. Please log in.' });
  }

  try {
    await cartModel.addToCart(user.id, product_id, stock ,quantity, size);
    res.json({ message: 'Added to cart.' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateCartItem = async (req, res) => {
  const { id } = req.params;
  const { quantity, size } = req.body;
  console.log(req.body)
  const user = req.session.user;

  if (!user) {
    return res.status(401).json({ error: 'Unauthorized. Please log in.' });
  }

  if (quantity <= 0) {
    return res.status(400).json({ error: 'Quantity must be greater than zero.' });
  }

  try {
    await cartModel.updateCartItem(id, quantity, size);
    res.json({ message: 'Cart item updated successfully.' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const removeCart = async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await cartModel.deleteCart(id);

    if (deleted) {
      res.json({ message: "Cart deleted successfully" });
    } else {
      res.status(404).json({ message: "Cart not found" });
    }
  } catch (error) {
    console.error("Error deleting cart:", error);
    res.status(500).json({ error: "Failed to delete cart" });
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
  listCarts,
  addCartItem,
  removeCartItem,
  removeCart,
  updateCartItem,
};
