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
                description,
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
        const products = await db('products')
        .join('product_sizes', 'products.code_product', 'product_sizes.code_product')
        .select('*');
        return products.length > 0 ? products : null;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

const getProductById = async (id) => {
    try {
        const product = await db('products')
            .where({ 'products.product_id': id })
            .join('product_sizes', 'products.code_product', '=', 'product_sizes.code_product')
            .select(
                'products.product_id',
                'products.product_picture',
                'products.product_picture_2',
                'products.product_picture_3',
                'products.product_name',
                'products.category',
                'products.price',
                'products.description',
                'products.fitur',
                'products.material',
                'products.code_product',
                'product_sizes.id',
                'product_sizes.size',
                'product_sizes.stock'
            );

        if (product.length === 0) {
            throw new Error(`Product with ID ${id} not found.`);
        }

        const formattedProduct = {
            product_id: product[0].product_id,
            product_picture: product[0].product_picture,
            product_picture_2: product[0].product_picture_2,
            product_picture_3: product[0].product_picture_3,
            product_name: product[0].product_name,
            category: product[0].category,
            price: product[0].price,
            description: product[0].description,
            fitur: product[0].fitur,
            material: product[0].material,
            code_product: product[0].code_product,
            sizes: product.map((p) => ({
                id: p.id,
                size: p.size,
                stock: p.stock,
            })),
        };

        return formattedProduct;
    } catch (error) {
        console.error('Error fetching product by ID:', error.message || error);
        throw error;
    }
};



const updateProduct = async (productId, product_name, price, description, stock, size, category) => {
    try {
        const updatedProduct = await db('products')
            .where({ product_id: productId })
            .update({ product_name, category, price, description})
            .returning('*');
        await db('product_sizes')
            .where({ code_product: updatedProduct[0].code_product })
            .update({size: size, stock: stock})
            .returning('*');
        return updatedProduct.length > 0 ? updatedProduct[0] : null;
    } catch (error) {
        console.error('Error updating product:', error);
        throw error;
    }
};

const deleteProduct = async (productId, size) => {
    try {
        const deletedProduct = await db('products')
            .where({ product_id: productId })
            .returning('*');
            await db('product_sizes')
            .where({ code_product: deletedProduct[0].code_product, size: size })
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