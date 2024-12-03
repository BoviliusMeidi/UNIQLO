/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('products', function (table) {
        table.increments('product_id').primary();
        table.string('product_picture', 255).notNullable();
        table.string('product_name', 255).notNullable();
        table.string('product_name_2', 255).notNullable();
        table.string('product_name_3', 255).notNullable();
        table.enum('category', ['MEN', 'WOMAN', 'KIDS']).notNullable();
        table.integer('price', 10).notNullable();
        table.integer('stock', 8).notNullable();
        table.enum('size', ['S', 'M', 'L', 'XL', 'XXL']).notNullable();
        table.string('description', 255).notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTableIfExists('products');
};
