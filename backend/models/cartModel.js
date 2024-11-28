const db = require('../config/dbConfig');

const getCartItems = async (user_id) => {
  return await db('carts')
    .join('products', 'carts.product_id', 'products.product_id')
    .select(
      'carts.cart_id',
      'products.product_name',
      'products.price',
      'products.product_picture',
      'carts.quantity'
    ).where('carts.user_id', user_id);
};

const addToCart = async (user_id, product_id, quantity) => {
  const product = await db('products').where('product_id', product_id).first();
  if (!product || product.stock < quantity) {
    throw new Error('Insufficient stock');
  }

  await db('carts').insert({user_id, product_id, quantity });

  await db('products')
    .where('product_id', product_id)
    .update({ stock: product.stock - quantity });

  return true;
};

const updateCartItem = async (cart_id, newQuantity) => {
  const cartItem = await db('carts').where('cart_id', cart_id).first();
  if (!cartItem) {
    throw new Error('Cart item not found');
  }

  const product = await db('products').where('product_id', cartItem.product_id).first();
  if (!product) {
    throw new Error('Product not found');
  }

  const quantityDifference = newQuantity - cartItem.quantity;

  if (quantityDifference > 0 && product.stock < quantityDifference) {
    throw new Error('Insufficient stock available');
  }

  await db('products')
    .where('product_id', cartItem.product_id)
    .update({ stock: product.stock - quantityDifference });

  await db('carts')
    .where('cart_id', cart_id)
    .update({ quantity: newQuantity });
};


const removeFromCart = async (cart_id) => {
  const cartItem = await db('carts').where('cart_id', cart_id).first();
  if (!cartItem) {
    throw new Error('Cart item not found');
  }

  const product = await db('products').where('product_id', cartItem.product_id).first();

  await db('products')
    .where('product_id', cartItem.product_id)
    .update({ stock: product.stock + cartItem.quantity });

  await db('carts').where('cart_id', cart_id).del();
};

module.exports = {
  getCartItems,
  addToCart,
  removeFromCart,
  updateCartItem
};