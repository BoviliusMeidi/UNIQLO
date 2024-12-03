/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('product_sizes', function (table) {
        table.increments('id').primary();
        table.integer('code_product').unsigned().notNullable().references('code_product').inTable('products').onDelete('CASCADE');
        table.enum('size', ['S', 'M', 'L', 'XL', 'XXL']).notNullable();
        table.integer('stock').notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTableIfExists('product_sizes');
};