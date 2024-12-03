/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  await knex('products').del()
  await knex('products').insert([
    { product_picture: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg', product_name: 'Kemeja Flannel I Lengan Panjang Kotak (Button-down)', category: 'MEN', price: '399000', stock: '100', size: 'XL', description: 'Kemeja Panjang' },
    
    // Stockholm

    //Men Category

    //Edinburgh
    { product_picture: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg', product_picture_2: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg', product_picture_3: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg', product_name: 'Jaket Trucker Denim', category: 'MEN', price: '699000', stock: '100', size: 'XL', description: 'Kode Produk: 472294' },
    { product_picture: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg', product_picture_2: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg', product_picture_3: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg', product_name: 'Sweater', category: 'MEN', price: '399000', stock: '100', size: 'XL', description: 'Kode Produk: 469926' },
    { product_picture: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg', product_picture_2: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg', product_picture_3: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg', product_name: 'Kemeja broadcloth Oversize | Lengan Panjang', category: 'MEN', price: '499000', stock: '100', size: 'XL', description: 'Kode Produk: 478812' },
    { product_picture: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg', product_picture_2: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg', product_picture_3: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg', product_name: 'Celana Chino Slim Fit', category: 'MEN', price: '599000', stock: '100', size: 'XL', description: 'Kode Produk: 475560' },


    //Woman Category

    //Edinburgh
    { product_picture: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg', product_name: 'Kemeja Flannel | Lengan Panjang Kotak', category: 'MEN', price: '399000', stock: '100', size: 'XL', description: 'Kode Produk: 470189' },
    { product_picture: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg', product_name: 'Kemeja Flannel | Lengan Panjang Kotak', category: 'WOMAN', price: '399000', stock: '100', size: 'XL', description: 'Kode Produk: 470189' },
    { product_picture: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg', product_name: 'Celana Chino Fit Lebar', category: 'MEN', price: '599000', stock: '100', size: 'XL', description: 'Kode Produk: 475564' },
    { product_picture: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg', product_name: 'Jeans Lebar Lurus', category: 'WOMAN', price: '599000', stock: '100', size: 'XL', description: 'Kode Produk: 476090' },
    { product_picture: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg', product_name: 'Jaket Kemeja Double Face', category: 'MEN', price: '899000', stock: '100', size: 'XL', description: 'Kode Produk: 470045' },
    { product_picture: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg', product_name: 'Jeans Lurus Potongan Lebar', category: 'MEN', price: '599000', stock: '100', size: 'XL', description: 'Kode Produk: 475551' },
    { product_picture: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg', product_name: 'GIRLS Rok Model Celana Mini Denim', category: 'KIDS', price: '199000', stock: '100', size: 'S', description: 'Kode Produk: 474015' },
    { product_picture: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg', product_name: 'GIRLS Rok Model Celana Mini Kotak', category: 'KIDS', price: '299000', stock: '100', size: 'M', description: 'Kode Produk: 472706' },
    { product_picture: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg', product_name: 'Celana Rileks Korduroi', category: 'KIDS', price: '199000', stock: '100', size: 'L', description: 'Kode Produk: 470871' },
    { product_picture: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg', product_name: 'Celana Flannel | Kotak', category: 'WOMAN', price: '299000', stock: '100', size: 'L', description: 'Kode Produk: 471550' },
    { product_picture: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg', product_name: 'PUFFTECH Jaket Parka Washable Ritsleting', category: 'KIDS', price: '499000', stock: '100', size: 'XL', description: 'Kode Produk: 472294' },
    { product_picture: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg', product_name: 'Jaket Rajut Lambswool', category: 'MEN', price: '899000', stock: '100', size: 'S', description: 'Kode Produk: 472294' },
    { product_picture: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg', product_name: 'Jaket Rajut Lambswool', category: 'WOMAN', price: '899000', stock: '100', size: 'M', description: 'Kode Produk: 472294' },
    { product_picture: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg', product_name: 'Jeans Warna Ultra Stretch (Skinny Fit)', category: 'MEN', price: '499000', stock: '100', size: 'M', description: 'Kode Produk: 472294' },
    { product_picture: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg', product_name: 'Sweater Souffle Yarn Kerah Bulat', category: 'WOMAN', price: '399000', stock: '100', size: 'S', description: 'Kode Produk: 472294' },
    { product_picture: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg', product_name: 'Pullover Sweat Hoodie', category: 'MEN', price: '499000', stock: '100', size: 'S', description: 'Kode Produk: 472294' },
    { product_picture: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg', product_name: 'Pullover Sweat Hoodie', category: 'WOMAN', price: '499000', stock: '100', size: 'L', description: 'Kode Produk: 472294' },
    { product_picture: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg', product_name: 'Celana Parasut Fit Lebar', category: 'MEN', price: '599000', stock: '100', size: 'M', description: 'Kode Produk: 472294' },
    { product_picture: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg', product_name: 'Celana Parasut Fit Lebar', category: 'WOMAN', price: '599000', stock: '100', size: 'M', description: 'Kode Produk: 472294' },
    { product_picture: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg', product_name: 'Celana Lipit Denim', category: 'WOMAN', price: '599000', stock: '100', size: 'XL', description: 'Kode Produk: 472294' },
    { product_picture: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg', product_name: 'Jaket Fleece Lembut Ritsleting', category: 'KIDS', price: '699000', stock: '100', size: 'XXL', description: 'Kode Produk: 472294' },
    { product_picture: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg', product_name: 'BLOCKTECH Mantel Pendek', category: 'WOMAN', price: '1290000', stock: '100', size: 'XXL', description: 'Kode Produk: 472294' },
    { product_picture: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg', product_name: 'Kemeja Luaran Jersey | Denim Lengan Panjang', category: 'MEN', price: '599000', stock: '100', size: 'XXL', description: 'Kode Produk: 472294' },
  ]);
};
