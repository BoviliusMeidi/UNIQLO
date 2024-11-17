/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('sessions', function(table) {
        table.string('sid').notNullable().primary(); // Session ID
        table.json('data').notNullable(); // Session data (stored as JSON)
        table.timestamp('expires', { precision: 6 }).notNullable(); // Expiration timestamp
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('sessions');
};
