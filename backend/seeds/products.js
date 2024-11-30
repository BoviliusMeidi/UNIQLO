/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  await knex('products').del()
  await knex('products').insert([
    { product_picture: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg', product_name: 'Kemeja Flannel I Lengan Panjang Kotak (Button-down)', category: 'MAN', price: '399000', stock: '100', size: 'XL', description: 'Kemeja Panjang' },
    { product_picture: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg', product_name: 'Kemeja Flannel I Lengan Panjang Kotak (Button-down)', category: 'MAN', price: '399000', stock: '100', size: 'S', description: 'Kemeja Panjang' },
  ]);
};
