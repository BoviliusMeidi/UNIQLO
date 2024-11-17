/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema
        .dropTableIfExists('users')
        .then(() => {
            return knex.schema.createTable('users', (table) => {
                table.increments('id').primary();
                table.string('username', 100).notNullable();
                table.string('email', 255).notNullable().unique();
                table.string('password', 100).notNullable();
                table.date('dob');
            });
        });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTableIfExists('users');
};
