const db = require('../config/dbConfig');

const getCarts = async () => {
  try {
      const carts = await db('carts')
      .join('products', 'carts.product_id', 'products.product_id').join('users', 'carts.user_id', 'users.user_id',)
      .select(
        'carts.cart_id',
        'users.username',
        'users.email',
        'products.product_name',
        'products.price',
        'products.product_picture',
        'carts.quantity',
        'carts.size'
      );
      return carts.length > 0 ? carts : null;
  } catch (error) {
      console.error('Error fetching carts:', error);
      throw error;
  }
};

const getCartItems = async (user_id) => {
  return await db('carts')
    .join('products', 'carts.product_id', 'products.product_id')
    .select(
      'carts.cart_id',
      'products.product_name',
      'products.product_picture',
      'products.price',
      'carts.size',
      'carts.quantity',
    ).where('carts.user_id', user_id);
};

const addToCart = async (user_id, product_id, stock, quantity, size) => {
  await db('carts').insert({user_id, product_id, quantity, size });

  await db('product_sizes')
    .where('size', size)
    .update({ stock: stock - quantity });

  return true;
};

const updateCartItem = async (cart_id, newQuantity, size) => {
  const cartItem = await db('carts').where('cart_id', cart_id).first();
  if (!cartItem) {
    throw new Error('Cart item not found');
  }

  const product = await db('product_sizes').where('size', size).first();
  if (!product) {
    throw new Error('Product not found');
  }

  const quantityDifference = newQuantity - cartItem.quantity;

  if (quantityDifference > 0 && product.stock < quantityDifference) {
    throw new Error('Insufficient stock available');
  }

  await db('product_sizes')
    .where('size', size)
    .update({ stock: product.stock - quantityDifference });

  await db('carts')
    .where('cart_id', cart_id)
    .update({ quantity: newQuantity });
};


const removeFromCart = async (cart_id, size) => {
  const cartItem = await db('carts').where('cart_id', cart_id).first();
  if (!cartItem) {
    throw new Error('Cart item not found');
  }
  const product = await db('product_sizes').where('size', cartItem.size).first();

  await db('product_sizes')
    .where('size', cartItem.size)
    .update({ stock: product.stock  + cartItem.quantity });

  await db('carts').where('cart_id', cart_id).del();
};

const deleteCart = async (cartId) => {
  try {
      const deletedCart = await db('carts')
          .where({ cart_id: cartId })
          .del()
          .returning('*');
      return deletedCart.length > 0 ? deletedCart[0] : null;
  } catch (error) {
      console.error('Error deleting cart:', error);
      throw error;
  }
};

module.exports = {
  getCarts,
  getCartItems,
  addToCart,
  removeFromCart,
  updateCartItem,
  deleteCart
};