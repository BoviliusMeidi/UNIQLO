/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("carts", function(table){
    table.increments('cart_id').primary();
    table.integer('user_id').unsigned().notNullable().references('user_id').inTable('users').onDelete('CASCADE');
    table.integer('product_id').unsigned().notNullable().references('product_id').inTable('products').onDelete('CASCADE');
    table.integer('quantity').notNullable();
    table.enum('size', ['S', 'M', 'L', 'XL', 'XXL']);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cart');
};
