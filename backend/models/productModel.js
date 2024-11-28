const db = require('../config/dbConfig');

const getProducts = async () => {
    try {
        const products = await db('products').select('*');
        return products;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

const updateProduct = async (productId, imageUrl) => {
    try {
        const updatedProduct = await db('products')
            .where({ product_id: productId })
            .update({ product_picture: imageUrl })
            .returning('*');
        return updatedProduct.length > 0 ? updatedUser[0] : null;
    } catch (error) {
        console.error('Error upload poduct picture:', error);
        throw error;
    }
};

module.exports = {getProducts, updateProduct };