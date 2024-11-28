/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('users', (table) => {
        table.increments('user_id').primary();
        table.string('username', 100).notNullable();
        table.string('email', 255).notNullable().unique();
        table.string('password', 100).notNullable();
        table.string('profile_picture', 255).defaultTo('');
        table.string('country', 100).defaultTo('');
        table.string('address', 255).defaultTo('');
        table.string('phone_number', 15).defaultTo('');
        table.enum('payment_method', ['Credit Card', 'Transfer Bank'])
        table.decimal('balance', 12, 2).defaultTo(0.00);
        table.date('dob').notNullable();
        table.boolean('is_admin').defaultTo('false');
        table.timestamp('time_created').defaultTo(knex.fn.now());
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTableIfExists('users');
};
