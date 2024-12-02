const db = require('../config/dbConfig');

const createProduct = async (product_name, product_picture, category, price, stock, size, description) => {
    try {
        const [product] = await db('products')
            .insert({
                product_name,
                product_picture,
                category,
                price,
                stock,
                size,
                description
            })
            .returning('*');
        return product;
    } catch (error) {
        console.error('Error creating product:', error);
        throw error;
    }
};

const getProducts = async () => {
    try {
        const products = await db('products').select('*');
        return products.length > 0 ? products : null;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

const getProductById = async (id) => {
    try {
        const product = await db('products')
            .where({ product_id: id })
            .first();
        if (!product) {
            throw new Error(`Product with ID ${id} not found.`);
        }
        return product;
    } catch (error) {
        console.error('Error fetching product by ID:', error.message || error);
        throw error;
    }
};


const updateProduct = async (productId, product_name, price, description, stock, size, category) => {
    try {
        const updatedProduct = await db('products')
            .where({ product_id: productId })
            .update({ product_name, category, price, stock, size, description})
            .returning('*');
        return updatedProduct.length > 0 ? updatedProduct[0] : null;
    } catch (error) {
        console.error('Error updating product:', error);
        throw error;
    }
};

const deleteProduct = async (productId) => {
    try {
        const deletedProduct = await db('products')
            .where({ product_id: productId })
            .del()
            .returning('*');
        return deletedProduct.length > 0 ? deletedProduct[0] : null;
    } catch (error) {
        console.error('Error deleting product:', error);
        throw error;
    }
};

const updateProductImage = async (productId, imageUrl) => {
    try {
        const updatedProduct = await db('products')
            .where({ product_id: productId })
            .update({ product_picture: imageUrl })
            .returning('*');
        return updatedProduct.length > 0 ? updatedUser[0] : null;
    } catch (error) {
        console.error('Error upload product picture:', error);
        throw error;
    }
};

module.exports = {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct,
    updateProductImage
};