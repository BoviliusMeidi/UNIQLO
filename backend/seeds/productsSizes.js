/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('product_sizes').del()
  await knex('product_sizes').insert([
    { code_product: 472294, size: 'S', stock: 50 },
    { code_product: 472294, size: 'XL', stock: 50 },
    { code_product: 472294, size: 'L', stock: 50 },
    { code_product: 472294, size: 'M', stock: 50 },
    { code_product: 472294, size: 'L', stock: 50 },
  ]);
};
