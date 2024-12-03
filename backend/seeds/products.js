/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  await knex('products').del()
  await knex('products').insert([

    //Men Category

    // //Edinburgh
    { product_picture: '../../assets/stores/products/Sweater_1.jpg', 
      product_picture_2: '../../assets/stores/products/Sweater_2.jpg', 
      product_picture_3: '../../assets/stores/products/Sweater_3.jpg',
      product_name: 'Sweater', 
      category: 'MEN', 
      price: '399000', 
      description: 'Bahan rajut halus dengan warna memukau dan tampilan yang elegan. Dengan ketebalan yang tepat sehingga mudah dilapiskan. Bahan lembut dengan serat tidak mudah mencuat. Desain klasik V dengan lengan rib. Lengan yang stylish.',
      material: 'Harap dicatat bahwa produk ini mungkin memiliki ID produk yang berbeda, meskipun itu adalah produk yang serupa. Detail kain Utama: 100% Kapas/Rib: 82% Kapas, 18% Poliester Instruksi pencucian Dicuci dengan mesin menggunakan air dingin, Tidak boleh dilakukan dry clean, Jangan gunakan mesin pengering.',
      fitur: 'Terasa lembut di bagian dalam dan luar, Lapisan khusus untuk mencegah bahan menggumpal, Desain kerah-V klasik dan rib panjang di bagian leher. Neck tape membuat bagian kerah mempertahankan bentuknya bahkan setelah dicuci berulang kali', 
      code_product:469926
    },

    { product_picture: '../../assets/stores/products/KemejaBroadcloth_1.jpg', 
      product_picture_2: '../../assets/stores/products/KemejaBroadcloth_2.jpg', 
      product_picture_3: '../../assets/stores/products/KemejaBroadcloth_3.jpg',
      product_name: 'Kemeja Broadcloth Oversize | Lengan Panjang', 
      category: 'MEN', 
      price: '499000', 
      description: 'Fit rileks dan oversize',
      fitur: '',
      material: 'Harap dicatat bahwa produk ini mungkin memiliki ID produk yang berbeda, meskipun itu adalah produk yang serupa. Detail kain 100% Kapas Detail fungsi Transparan: Tidak transparan(Hanya 00White yang sedikit transparan) Fit: Oversize Instruksi pencucian Dicuci dengan mesin menggunakan air dingin, Dry clean, Jangan gunakan mesin pengering.',
      code_product:478812
    },

    { product_picture: '../../assets/stores/products/CelanaChino_1.jpg', 
      product_picture_2: '../../assets/stores/products/CelanaChino_2.jpg', 
      product_picture_3: '../../assets/stores/products/CelanaChino_3.jpg',
      product_name: 'Celana Chino Slim Fit', 
      category: 'MEN', 
      price: '599000',
      description: 'Koleksi Uniqlo U adalah hasil karya tim desainer internasional terampil dan berdedikasi yang berbasis di Paris Research and Development Center yang dipimpin oleh Artistic Director Christophe Lemaire. - Bahan katun slub twill yang tebal dengan tekstur kasual. - Telah melalui proses wash untuk menghasilkan efek pudar. - Fit lebar di sekitar paha dengan siluet meruncing hingga ke bagian hem. - Desain lima saku yang autentik. - Bahan tebal menciptakan siluet yang stylish. - Teknologi BLUE CYCLE JEANS mengurangi volume air* yang digunakan dalam proses finishing. Penghematan air dapat bervariasi tergantung pada jenis produk. *Hingga 99%. Data yang digunakan didasarkan pada perbandingan antara Jeans Regular Fit Pria di tahun 2017 dan 2018 menggunakan teknologi yang dikembangkan tahun 2018 oleh Jeans Innovation Center kami.',
      fitur: '',
      material: 'Harap dicatat bahwa produk ini mungkin memiliki ID produk yang berbeda, meskipun itu adalah produk yang serupa. Kain Utama: 100% Kapas/ Kain Kantong: 100% Kapas. Fungsi Longgar, Taper (Meruncing), Ada Saku. Dicuci dengan mesin menggunakan air dingin, Tidak boleh dilakukan dry clean, Jangan gunakan mesin pengering.Bergantung pada panjang potongan, bekas dari jahitan aslinya bisa saja masih terlihat setelah proses alterasi. Khusus untuk produk dengan aksen damaged pada bagian ujung, aksen damaged akan hilang setelah proses alterasi. Terima kasih atas pengertian Anda. ',
      code_product:463915
    },

    { product_picture: '../../assets/stores/products/T-ShirtSoftTouch_1.jpg', 
      product_picture_2: '../../assets/stores/products/T-ShirtSoftTouch_2.jpg', 
      product_picture_3: '../../assets/stores/products/T-ShirtSoftTouch_3.jpg',
      product_name: 'T-Shirt Soft Touch (Soft brushed) Kerah Bulat | Lengan Panjang', 
      category: 'MEN', 
      price: '199000',
      description: 'Bahan 100% katun yang halus. Permukaan brushed yang terasa lembut dan nyaman di bagian dalam. Desain bagian pergelangan tangan yang mudah digulung. Desain kerah bulat klasik dengan garis rib yang nyaman. Desain stylish yang mudah dipadupadankan.',
      fitur: '',
      material: 'Harap dicatat bahwa produk ini mungkin memiliki ID produk yang berbeda, meskipun itu adalah produk yang serupa. Detail Kain 100% Kapas. Dicuci dengan mesin menggunakan air dingin, Tidak boleh dilakukan dry clean, Jangan gunakan mesin pengering.',
      code_product:469940
    },

    { product_picture: '../../assets/stores/products/KaosKakiWarna_1.jpg', 
      product_picture_2: '../../assets/stores/products/KaosKakiWarna_2.jpg', 
      product_picture_3: '../../assets/stores/products/KaosKakiWarna_3.jpg',
      product_name: 'Kaos Kaki Warna', 
      category: 'MEN', 
      price: '39000',
      description: 'Dibuat dari benang khusus yang dapat menetralkan dan mengendalikan bau. Bahan elastis yang tidak terasa ketat di pergelangan kaki sehingga tidak menimbulkan bekas.',
      fitur: '',
      material: 'Harap dicatat bahwa produk ini mungkin memiliki ID produk yang berbeda, meskipun itu adalah produk yang serupa. Produk ini terbuat dari pilihan komposisi material di bawah ini. Untuk saat ini, tidak diperkenankan memilih komposisi material untuk produk yang Anda beli. 43% Kapas, 42% Akrilat, 12% Nilon, 2% Poliester, 1% Elastan. Dicuci dengan mesin menggunakan air dingin, Tidak boleh dilakukan dry clean, Jangan gunakan mesin pengering.',
      code_product:477157
    },

    { product_picture: '../../assets/stores/products/JaketBlouson_1.jpg', 
      product_picture_2: '../../assets/stores/products/JaketBlouson_2.jpg', 
      product_picture_3: '../../assets/stores/products/JaketBlouson_3.jpg',
      product_name: 'Jaket Blouson Pendek Utilitas', 
      category: 'MEN', 
      price: '499000',
      description: 'Berbahan katun dengan potongan boxy. Kerah berbahan korduroi dan aksen motif kotak pada lapisan dalam. Lengan raglan dengan fit relax. Ukuran pendek cocok dengan pakaian apa pun. Saku berukuran besar di sekitar pinggul dengan desain 2-way. Pergelangan tangan di bagian dalam dapat disesuaikan untuk mencegah udara dingin masuk. Kerah tegak mampu memberikan perlindungan ekstra di berbagai cuaca. Terdapat saku di bagian dalam.',
      fitur: '',
      material: 'Harap dicatat bahwa produk ini mungkin memiliki ID produk yang berbeda, meskipun itu adalah produk yang serupa. Kulit: 100% Kapas/ Pelapis Badan Setelan: 100% Kapas/ Pelapis Lengan: 100% Poliester/ Kerah: 100% Kapas/ Kain Kantong: 100% Poliester Dicuci dengan tangan, Dry clean, Jangan gunakan mesin pengering.',
      code_product:459592
    },

    { product_picture: '../../assets/stores/products/SweaterExtraFine_1.jpg', 
      product_picture_2: '../../assets/stores/products/SweaterExtraFine_2.jpg', 
      product_picture_3: '../../assets/stores/products/SweaterExtraFine_3.jpg',
      product_name: 'Sweater Extra Fine Merino Kerah Bulat Lengan Panjang', 
      category: 'MEN', 
      price: '499000',
      description: 'Dari bahan 100% wol Merino extra fine untuk hasil akhir yang terasa halus dan mengkilap. Melalui proses yang membuatnya tidak mudah mencuat. Dapat dicuci dengan mesin untuk memudahkan perawatan. *Kami merekomendasikan untuk mencuci produk ini dengan kondisi terbalik kemudian masukkan ke dalam tas cucian tipe mesh. *Gantung dalam bentuk aslinya hingga kering. Diperbarui dengan rajutan yang lebih halus untuk menciptakan tekstur dan ketebalan yang sempurna. Kerah rib. Terdapat rib di bagian lengan dan hem.',
      fitur: 'Dibuat dari 100% Merino wool extra fine 19,5 mikron yang lembut dan tekstur berkilau. Desain rajut rib di bagian lengan dan hem untuk mencegah pakaian melar. Dapat dicuci dengan mesin, dilengkapi fitur anti-piling untuk memudahkan perawatan. *Kami merekomendasikan untuk mencuci produk ini dengan kondisi terbalik dalam tas cucian tipe mesh.',
      material: 'Harap dicatat bahwa produk ini mungkin memiliki ID produk yang berbeda, meskipun itu adalah produk yang serupa. Detail Kain 100% Wol. Dicuci dengan mesin menggunakan air dingin, kecepatan putaran rendah, Dry clean',
      code_product:469395
    },

    { product_picture: '../../assets/stores/products/KemejaOxford_1.jpg', 
      product_picture_2: '../../assets/stores/products/KemejaOxford_2.jpg', 
      product_picture_3: '../../assets/stores/products/KemejaOxford_3.jpg',
      product_name: 'Kemeja Oxford | Lengan Panjang Regular Fit', 
      category: 'MEN', 
      price: '399000',
      description: 'Ukuran lebar dan panjang yang didesain agar terlihat bagus saat dikenakan dengan dimasukkan atau dikeluarkan.',
      fitur: 'Dibuat dari benang combed triple-twisted untuk menghasilkan kombinasi ideal antara bahan yang tahan lama dan kualitas premium. Didesain dengan detail yang cermat, hingga bagian lebar placket, pergelangan tangan, panjang kerah, dan kerah model S. Desain kancing berbentuk bulat yang mudah dipasang.',
      material: 'Harap dicatat bahwa produk ini mungkin memiliki ID produk yang berbeda, meskipun itu adalah produk yang serupa. Detail Kain 100% Kapas. Dicuci dengan mesin menggunakan air dingin, kecepatan putaran rendah, Dry clean',
      code_product:475998
    },

    { product_picture: '../../assets/stores/products/JeansSlimFit_1.jpg', 
      product_picture_2: '../../assets/stores/products/JeansSlimFit_2.jpg', 
      product_picture_3: '../../assets/stores/products/JeansSlimFit_3.jpg',
      product_name: 'Jeans Slim Fit Stretch Selvedge', 
      category: 'MEN', 
      price: '599000',
      description: 'Produk ini tidak dapat dikembalikan.',
      fitur: 'Desain klasik yang terasa nyaman. Bahan denim selvedge inovatif yang terasa lentur. Potongan lurus slim yang ramping.',
      material: 'Harap dicatat bahwa produk ini mungkin memiliki ID produk yang berbeda, meskipun itu adalah produk yang serupa. Detail Kain 99% Kapas, 1% Elastan [69 NAVY] 98% Kapas, 2% Elastan. Dicuci dengan mesin menggunakan air dingin. Bergantung pada panjang potongan, bekas dari jahitan aslinya bisa saja masih terlihat setelah proses alterasi. Khusus untuk produk dengan aksen damaged pada bagian ujung, aksen damaged akan hilang setelah proses alterasi. Terima kasih atas pengertian Anda.',
      code_product:475548
    },

    { product_picture: '../../assets/stores/products/KemejaLuaranJersey_1.jpg', 
      product_picture_2: '../../assets/stores/products/KemejaLuaranJersey_2.jpg', 
      product_picture_3: '../../assets/stores/products/KemejaLuaranJersey_3.jpg',
      product_name: 'Kemeja Luaran Jersey | Lengan Panjang', 
      category: 'MEN', 
      price: '599000',
      description: 'Tekstur bahan jersey yang halus, lembut dan nyaman. Siluet rileks yang cocok dikenakan sendirinya atau sebagai outer layer.',
      fitur: 'Tekstur bahan jersey yang halus, lembut dan nyaman',
      material: 'Harap dicatat bahwa produk ini mungkin memiliki ID produk yang berbeda, meskipun itu adalah produk yang serupa. Detail Kain 60% Poliester, 36% Kapas, 4% Elastan ( 30% Menggunakan Serat Poliester Daur Ulang ) Transparan: Tidak transparan Fit: Rileks. Dicuci dengan mesin menggunakan air dingin, Dry clean, Jangan gunakan mesin pengering. Pakaian yang dibuat menggunakan bahan-bahan daur ulang merupakan bagian dari upaya kami untuk mendukung pengurangan limbah dan penggunaan bahan-bahan baru. Rasio bahan daur ulang dapat bervariasi berdasarkan jenis produk. Silakan cek bagian Material di bagian tag harga atau label',
      code_product:470298
    },

    { product_picture: '../../assets/stores/products/KemejaOxfordGaris_1.jpg', 
      product_picture_2: '../../assets/stores/products/KemejaOxfordGaris_2.jpg', 
      product_picture_3: '../../assets/stores/products/KemejaOxfordGaris_3.jpg',
      product_name: 'Kemeja Oxford Garis | Lengan Panjang Regular Fit', 
      category: 'MEN', 
      price: '399000',
      description: 'Dibuat dari benang combed triple-twisted untuk menghasilkan kombinasi ideal antara bahan yang tahan lama dan kualitas premium. Desain kancing berbentuk bulat yang mudah dipasang. Didesain dengan detail yang cermat, hingga bagian lebar placket, pergelangan tangan, panjang kerah, dan kerah model S. Ukuran lebar dan panjang yang didesain agar terlihat bagus saat dikenakan dengan dimasukkan atau dikeluarkan.',
      fitur: 'Dibuat dari benang combed triple-twisted untuk menghasilkan kombinasi ideal antara bahan yang tahan lama dan kualitas premium. Desain kancing berbentuk bulat yang mudah dipasang.',
      material: 'Harap dicatat bahwa produk ini mungkin memiliki ID produk yang berbeda, meskipun itu adalah produk yang serupa. Detail kain 100% Kapas Dicuci dengan mesin menggunakan air dingin, Dry clean, Jangan gunakan mesin pengering.',
      code_product:475999
    },

    { product_picture: '../../assets/stores/products/JeansWarnaUltra_1.jpg', 
      product_picture_2: '../../assets/stores/products/JeansWarnaUltra_2.jpg', 
      product_picture_3: '../../assets/stores/products/JeansWarnaUltra_3.jpg',
      product_name: 'Jeans Warna Ultra Stretch (Skinny Fit)', 
      category: 'MEN', 
      price: '399000',
      description: '',
      fitur: 'Bahan satin brushed yang elegan. *Warna White, Black, dan Navy Blue tidak di-brush. Dibuat dari bahan Ultra Stretch untuk fit yang nyaman. Pinggang elastis yang dilengkapi drawstring untuk kenyamanan. Fit yang tidak terasa ketat.',
      material: 'Harap dicatat bahwa produk ini mungkin memiliki ID produk yang berbeda, meskipun itu adalah produk yang serupa. Detail Kain Utama: 97% Kapas, 3% Elastan/ Kain Kantong: 65% Poliester, 35% Kapas Dicuci dengan mesin menggunakan air dingin, kecepatan putaran rendah, Dry clean, Jangan gunakan mesin pengering.',
      code_product:477013
    },

    // { product_picture: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg', 
    //   product_picture_2: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg', 
    //   product_picture_3: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg',
    //   product_name: '', 
    //   category: 'MEN', 
    //   price: '599000',
    //   description: '',
    //   fitur: '',
    //   material: '',
    //   code_product:
    // },


    // Woman Category


    // Edinburgh
    { product_picture: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg', 
      product_picture_2: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg', 
      product_picture_3: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg',
      product_name: 'T-Shirt Katun Lembut Rileks | Lengan Panjang', 
      category: 'WOMAN', 
      price: '199000',
      description: 'Bahan 100% katun yang lembut dan nyaman. Desain stylish dengan siluet lebar dan hem belakang yang lebih panjang. T-shirt yang mudah dipadupadankan.',
      fitur: 'Bahan 100% katun yang lembut dan nyaman.',
      material: 'Harap dicatat bahwa produk ini mungkin memiliki ID produk yang berbeda, meskipun itu adalah produk yang serupa. Detail Kain 100% Kapas Transparan: Tidak transparan(Hanya 01 OFF WHITE yang sedikit transparan) Fit: Oversize Saku: Tidak ada. Dicuci dengan mesin menggunakan air dingin, Dry clean, Jangan gunakan mesin pengering.',
      code_product:472868
    },

    { product_picture: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg', 
      product_picture_2: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg', 
      product_picture_3: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg',
      product_name: 'Tas Eco-Friendly', 
      category: 'WOMAN', 
      price: '39000',
      description: 'Bahan 100% katun. Desain simpel cocok dengan tampilan apa pun. Panjang handle yang optimal untuk digendong di bahu.',
      fitur: '',
      material: 'Harap dicatat bahwa produk ini mungkin memiliki ID produk yang berbeda, meskipun itu adalah produk yang serupa. Detail kain 100% Kapas. Dicuci dengan tangan.',
      code_product:462191
    },

    { product_picture: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg', 
      product_picture_2: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg', 
      product_picture_3: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg',
      product_name: 'Jaket Ritsleting Lambswool Blend', 
      category: 'WOMAN', 
      price: '699000',
      description: 'Bahan campuran wol yang lembut dan halus untuk kehangatan. Blouson dengan ukuran yang sedikit lebih pendek. Desain lengan set-in yang leluasa untuk menciptakan siluet rileks. Terdapat dua saku di bagian depan. Desain kerah tinggi dengan dua lapis rib. Cocok untuk gaya layering. Rajut rib yang leluasa.',
      fitur: 'Bahan campuran wol yang lembut dan halus untuk kehangatan. Blouson dengan ukuran yang sedikit lebih pendek. Desain lengan set-in yang leluasa untuk menciptakan siluet rileks. Terdapat dua saku di bagian depan. Desain kerah tinggi dengan dua lapis rib.',
      material: 'Harap dicatat bahwa produk ini mungkin memiliki ID produk yang berbeda, meskipun itu adalah produk yang serupa. Detail Kain 40% Wol, 35% Akrilat, 25% Nilon. Dicuci dengan tangan, Dry clean, Jangan gunakan mesin pengering.',
      code_product:471464
    },

    { product_picture: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg', 
      product_picture_2: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg', 
      product_picture_3: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg',
      product_name: 'Kemeja Flannel Lembut Kerah Skipper | Kotak', 
      category: 'WOMAN', 
      price: '399000',
      description: ' Bahan yang lembut dengan tekstur brushed untuk kelembutan ekstra. Siluet rileks dengan tampilan kerah skipper yang mudah dilapiskan. Desain sepanjang pinggul memberikan coverage yang cukup.',
      fitur: 'Bahan yang lembut dengan tekstur brushed untuk kelembutan ekstra.',
      material: 'Harap dicatat bahwa produk ini mungkin memiliki ID produk yang berbeda, meskipun itu adalah produk yang serupa. Detail Kain 33% Akrilat, 24% Lyocell, 22% Viskosa, 21% Kapas.Transparan: Tidak transparan Fit: Rileks. Dicuci dengan mesin menggunakan air dingin, kecepatan putaran rendah, Dry clean, Jangan gunakan mesin pengering.',
      code_product:469425
    },

    { product_picture: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg', 
      product_picture_2: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg', 
      product_picture_3: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg',
      product_name: 'T-Shirt Katun Lembut Rileks | Lengan Panjang', 
      category: 'WOMAN', 
      price: '199000',
      description: 'Bahan 100% katun yang lembut dan nyaman. Desain stylish dengan siluet lebar dan hem belakang yang lebih panjang. T-shirt yang mudah dipadupadankan.',
      fitur: '',
      material: 'Harap dicatat bahwa produk ini mungkin memiliki ID produk yang berbeda, meskipun itu adalah produk yang serupa. Detail Kain 100% Kapas Transparan: Tidak transparan(Hanya 00 WHITE yang sedikit transparan) Fit: Oversize Saku: Tidak ada. Dicuci dengan mesin menggunakan air dingin, Dry clean, Jangan gunakan mesin pengering.',
      code_product:470129
    },

    { product_picture: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg', 
      product_picture_2: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg', 
      product_picture_3: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg',
      product_name: 'Rompi Crop Down', 
      category: 'WOMAN', 
      price: '899000',
      description: 'Bahan down premium dengan fill power 750.* *Diukur dengan metode IDFB. Bahan matte untuk tampilan alami. Lapisan water-repellent yang melindungi dari hujan ringan. *Bahan dilapisi dengan lapisan water-repellent sehingga efeknya tahan lebih lama. Lapisan ini tidak permanen. Panjang crop yang cocok dengan bawahan atau gaun apa pun.',
      fitur: '',
      material: 'Harap dicatat bahwa produk ini mungkin memiliki ID produk yang berbeda, meskipun itu adalah produk yang serupa. Detail Kain Kulit: 100% Poliester/ Isian: 90% Down, 10% Feathers/ Pelapis: 100% Poliester/ Kain Kantong: 100% Poliester. Fit: Rileks Saku: Ada Dicuci dengan tangan, Tidak boleh dilakukan dry clean, Jangan gunakan mesin pengering.',
      code_product:472014
    },

    { product_picture: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg', 
      product_picture_2: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg', 
      product_picture_3: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg',
      product_name: 'Kemeja Flannel Lembut Kerah Skipper | Kotak', 
      category: 'WOMAN', 
      price: '399000',
      description: 'Bahan yang lembut dengan tekstur brushed untuk kelembutan ekstra. Siluet rileks dengan tampilan kerah skipper yang mudah dilapiskan. Desain sepanjang pinggul memberikan coverage yang cukup. ',
      fitur: 'Bahan yang lembut dengan tekstur brushed untuk kelembutan ekstra.',
      material: 'Harap dicatat bahwa produk ini mungkin memiliki ID produk yang berbeda, meskipun itu adalah produk yang serupa. Detail Kain 33% Akrilat, 24% Lyocell, 22% Viskosa, 21% Kapas. Transparan: Tidak transparan Fit: Rileks. Dicuci dengan mesin menggunakan air dingin, kecepatan putaran rendah, Dry clean, Jangan gunakan mesin pengering.',
      code_product:469424
    },

    { product_picture: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg', 
      product_picture_2: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg', 
      product_picture_3: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg',
      product_name: 'HEATTECH T-Shirt Fleece Kerah Tinggi Lengan Panjang (Turtleneck)', 
      category: 'WOMAN', 
      price: '149000',
      description: '',
      fitur: 'Bahan PUFFTECH Fleece. Desain kerah turtle untuk kenyamanan ekstra. Bahan fleece yang terasa halus dan nyaman.',
      material: 'HEATTECH fleece fabric. The soft and comfortable feel of fleece. Turtleneck design for extra warmth.',
      code_product:470142
    },

    { product_picture: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg', 
      product_picture_2: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg', 
      product_picture_3: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg',
      product_name: 'Jeans Skinny Comfort Ultra Stretch', 
      category: 'WOMAN', 
      price: '599000',
      description: 'Bahan berkontur untuk fit yang nyaman. Potongan skinny lurus yang stylish dan tidak terlalu ketat. Desain sederhana dengan detail minimal untuk kesan rapi.',
      fitur: '',
      material: 'Harap dicatat bahwa produk ini mungkin memiliki ID produk yang berbeda, meskipun itu adalah produk yang serupa. Detail kain [09 BLACK] Utama: 88% Kapas, 8% Poliester, 4% Elastan/ Kain Kantong: 65% Poliester, 35% Kapas [66 BLUE, 69 NAVY] Utama: 90% Kapas, 7% Poliester, 3% Elastan/ Kain Kantong: 65% Poliester, 35% Kapas. Dicuci dengan mesin menggunakan air dingin, Tidak boleh dilakukan dry clean, Jangan gunakan mesin pengering.  Bergantung pada panjang potongan, bekas dari jahitan aslinya bisa saja masih terlihat setelah proses alterasi. Khusus untuk produk dengan aksen damaged pada bagian ujung, aksen damaged akan hilang setelah proses alterasi. Terima kasih atas pengertian Anda.',
      code_product:472489
    },

    { product_picture: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg', 
      product_picture_2: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg', 
      product_picture_3: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg',
      product_name: 'Rok Model Celana Korduroi', 
      category: 'WOMAN', 
      price: '399000',
      description: 'Tampilan seperti rok dengan kenyamanan dan kemudahan bergerak seperti celana pendek. Bahan kurduroi berkontur. Waistband yang elastis untuk kenyamanan.',
      fitur: 'Tampilan seperti rok dengan kenyamanan dan kemudahan bergerak seperti celana pendek. Waistband yang elastis untuk kenyamanan. Bahan kurduroi berkontur.',
      material: 'Harap dicatat bahwa produk ini mungkin memiliki ID produk yang berbeda, meskipun itu adalah produk yang serupa. Detail Kain Utama: 98% Kapas, 2% Elastan/ Kain Kantong: 100% Poliester ( 60% Menggunakan Serat Poliester Daur Ulang ). Transparan: Tidak transparan Saku: Ada. Dicuci dengan mesin menggunakan air dingin, kecepatan putaran rendah, Dry clean, Jangan gunakan mesin pengering. ',
      code_product:471423
    },

    { product_picture: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg', 
      product_picture_2: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg', 
      product_picture_3: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg',
      product_name: 'Celana Sweat', 
      category: 'WOMAN', 
      price: '399000',
      description: 'Terasa lembut di bagian dalam dan luar. Rib di bagian pinggang dan hem untuk fit yang nyaman. Drawstring di pinggang bagian dalam untuk menyesuaikan ukuran. Saku samping dan belakang yang fungsional. Lapisan yang tahan lama untuk mencegah bahan menggumpal.',
      fitur: '',
      material: 'Harap dicatat bahwa produk ini mungkin memiliki ID produk yang berbeda, meskipun itu adalah produk yang serupa. Detail Kain Utama: 88% Kapas, 12% Poliester/ Rib: 82% Kapas, 18% Poliester/ Kain Kantong: Lapis Luar: 100% Kapas/ Lapis Dalam: 88% Kapas, 12% Poliester. Dicuci dengan mesin menggunakan air dingin, kecepatan putaran rendah, Tidak boleh dilakukan dry clean',
      code_product:475382
    },

    { product_picture: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg', 
      product_picture_2: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg', 
      product_picture_3: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg',
      product_name: 'Jaket Ultra Light Down (Jaket Down)', 
      category: 'WOMAN', 
      price: '999000',
      description: 'Dibuat dengan benang ultra fine sehingga terasa sangat ringan. Down premium yang hangat dengan tingkat kehangatan fill power 750*. *Diukur dengan metode IDFB. Dirancang khusus tanpa down packing membuatnya luar biasa ringan. Lapisan antistatis. Lapisan water-repellent. *Bahan dilapisi dengan lapisan water-repellent sehingga efeknya tahan lama. Lapisan tidak bersifat permanen. Potongan boxy dengan ukuran sedikit pendek. Ritsleting yang tertutup untuk mencegah udara dingin masuk. Desain pocketable.',
      fitur: '',
      material: 'Harap dicatat bahwa produk ini mungkin memiliki ID produk yang berbeda, meskipun itu adalah produk yang serupa. Produk ini terbuat dari pilihan komposisi material di bawah ini. Untuk saat ini, tidak diperkenankan memilih komposisi material untuk produk yang Anda beli. Sisi Luar: 100% Poliamida/ Isian: 90% Down, 10% Feathers/ Sisi Dalam: 100% Poliamida/ Kain Kantong: 100% Poliester. Sisi Luar: 100% Nilon/ Isian: 90% Down, 10% Feathers/ Sisi Dalam: 100% Nilon/ Kain Kantong: 100% Poliester. Dicuci dengan tangan, Tidak boleh dilakukan dry clean, Jangan gunakan mesin pengering.',
      code_product:460914
    },

    { product_picture: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg', 
      product_picture_2: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg', 
      product_picture_3: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg',
      product_name: 'Kemeja Broadcloth | Lengan Panjang Kotak', 
      category: 'WOMAN', 
      price: '399000',
      description: 'Dibuat dari benang 100% katun ultra-long yang menghasilkan warna menawan dan tekstur berkilau. Desain kancing berbentuk bulat yang mudah dipasang. Motif disusun secara cermat menggunakan tangan untuk memastikan tampilan motif yang simetris di bagian kerah, placket, lengan, dan pergelangan tangan. Ketebalan dan kepadatan benang telah dipilih secara khusus untuk menonjolkan motif dan warna.',
      fitur: 'Dibuat dari benang 100% katun ultra-long yang menghasilkan warna menawan dan tekstur berkilau. Desain kancing berbentuk bulat yang mudah dipasang.',
      material: 'Harap dicatat bahwa produk ini mungkin memiliki ID produk yang berbeda, meskipun itu adalah produk yang serupa. Detail kain 100% Kapas. Transparan: Tidak transparan Fit: Reguler. Dicuci dengan mesin menggunakan air dingin, Dry clean, Jangan gunakan mesin pengering.',
      code_product:472535
    },

    { product_picture: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg', 
      product_picture_2: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg', 
      product_picture_3: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg',
      product_name: 'Pullover Lapis Brushed Kerah Tinggi', 
      category: 'WOMAN', 
      price: '299000',
      description: 'Lapisan brush yang lembut dan nyaman. Ketebalan yang pas untuk dikenakan sendirinya atau dilapiskan. Desain kerah tinggi untuk menjaga leher tetap hangat. Rib di bagian ujung pergelangan tangan untuk memudahkan saat menggulung lengan. Desain mock neck yang serbaguna dengan bahu menurun dan fit yang leluasa, cocok dikenakan sendirinya atau dilapiskan.',
      fitur: 'Lapisan brush yang lembut dan nyaman. Ketebalan yang pas untuk dikenakan sendirinya atau dilapiskan. Rib di bagian ujung pergelangan tangan untuk memudahkan saat menggulung lengan. Desain kerah tinggi untuk menjaga leher tetap hangat.',
      material: 'Harap dicatat bahwa produk ini mungkin memiliki ID produk yang berbeda, meskipun itu adalah produk yang serupa. Utama: 56% Kapas, 44% Poliester/ Rib: 74% Kapas, 26% Poliester. Dicuci dengan mesin menggunakan air dingin, Dry clean, Jangan gunakan mesin pengering.',
      code_product:471806
    },

    { product_picture: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg', 
      product_picture_2: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg', 
      product_picture_3: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg',
      product_name: 'Celana Panjang Jeans Lebar', 
      category: 'WOMAN', 
      price: '599000',
      description: ' Pinggang elastis yang nyaman. Potongan ramping di bagian pinggang dan jatuh lurus ke bawah hingga bagian hem memberi kesan kaki yang jenjang. Desainnya menggabungkan detail ala celana panjang untuk tampilan yang lebih menawan. Bahan yang lembut dan nyaman. Produk ini dapat dialterasi dalam dua tipe yaitu jahitan normal: Metode jahit standar dengan single stitching di bagian dalam maupun luar celana. Bergantung pada panjang potongan, bekas dari jahitan akan tetap terlihat setelah proses alterasi. Atau jahitan dalam: Metode jahitan yang hampir tidak terlihat untuk memberikan tampilan yang lebih rapi.',
      fitur: '',
      material: 'Harap dicatat bahwa produk ini mungkin memiliki ID produk yang berbeda, meskipun itu adalah produk yang serupa. [00 WHITE] Utama: 99% Kapas, 1% Elastan/ Kain Kantong: 65% Poliester, 35% Kapas [04 GRAY] Utama: 99% Kapas, 1% Elastan/ Kain Kantong: 100% Kapas [67 BLUE, 69 NAVY] Utama: 98% Kapas, 2% Elastan/ Kain Kantong: 65% Poliester, 35% Kapas. Dicuci dengan mesin menggunakan air dingin, kecepatan putaran rendah, Tidak boleh dilakukan dry clean, Jangan gunakan mesin pengering. Bergantung pada panjang potongan, bekas dari jahitan aslinya bisa saja masih terlihat setelah proses alterasi. Khusus untuk produk dengan aksen damaged pada bagian ujung, aksen damaged akan hilang setelah proses alterasi. Terima kasih atas pengertian Anda.',
      code_product:476088
    },

    { product_picture: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg', 
      product_picture_2: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg', 
      product_picture_3: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg',
      product_name: 'Pullover Sweat Hoodie', 
      category: 'WOMAN', 
      price: '499000',
      description: '- Bahan halus dengan kesan yang premium. Desain tudung berkontur. Saku di bagian samping yang stylish dan fungsional. Lapisan khusus untuk mencegah bahan menggumpal dan melar.',
      fitur: '',
      material: 'Harap dicatat bahwa produk ini mungkin memiliki ID produk yang berbeda, meskipun itu adalah produk yang serupa. Detail kain Produk ini terbuat dari pilihan komposisi material di bawah ini. Untuk saat ini, tidak diperkenankan memilih komposisi material untuk produk yang Anda beli. Utama: 100% Kapas/ Rib: 82% Kapas, 18% Poliester/ Pelapis Tudung: 61% Kapas, 39% Poliester/ Kain Kantong: 100% Kapas. Utama: 100% Kapas/ Rib: 82% Kapas, 18% Poliester/ Pelapis Tudung: 60% Kapas, 40% Poliester/ Kain Kantong: 100% Kapas. Dicuci dengan mesin menggunakan air dingin, kecepatan putaran rendah',
      code_product:469927
    },

    { product_picture: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg', 
      product_picture_2: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg', 
      product_picture_3: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg',
      product_name: 'Celana Chino Fit Lebar Lipit Uniqlo U', 
      category: 'WOMAN', 
      price: '699000',
      description: 'Koleksi Uniqlo U adalah hasil karya tim desainer internasional yang terampil. Berbasis di Paris Research and Development Center yang dipimpin oleh Artistic Director, Christophe Lemaire. Dibuat dari katun twill. Desain lebar 2-lipit. Menggabungkan potongan roomy dengan ramping di bagian ujung celana untuk desain yang seimbang dan tidak terlalu kasual. Terdapat saku dengan penutup di bagian belakang. Cocok untuk gaya clean dan kasual.',
      fitur: '',
      material: 'Harap dicatat bahwa produk ini mungkin memiliki ID produk yang berbeda, meskipun itu adalah produk yang serupa. Detail kain Utama: 100% Kapas/ Kain Kantong: 68% Poliester, 32% Kapas. Dicuci dengan mesin menggunakan air dingin, Dry clean, Jangan gunakan mesin pengering.',
      code_product:457967
    },

    { product_picture: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg', 
      product_picture_2: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg', 
      product_picture_3: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg',
      product_name: 'Sepatu Sneakers Kombinasi Suede Sintetis', 
      category: 'WOMAN', 
      price: '699000',
      description: 'Desain Ramping yang Cocok dipadukan Dengan gaya apa pun. Skema warna pada midsole dan outsole untuk menambah sentuhan gaya. Desain lidah sepatu yang empuk dan melengkung pada bagian bukaan untuk fit yang nyaman.',
      fitur: '',
      material: 'Harap dicatat bahwa produk ini mungkin memiliki ID produk yang berbeda, meskipun itu adalah produk yang serupa. Detail kain Bahan Luar: Kulit Sintetis, Kulit Asli/ Sol Luar: Karet Sintetis. Tidak boleh dicuci, Tidak boleh dilakukan dry clean, Jangan gunakan mesin pengering.',
      code_product: 471720
    },
    
    { product_picture: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg', 
      product_picture_2: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg', 
      product_picture_3: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg',
      product_name: 'Jaket Blouson Kerah Tegak Tahan Angin (Water-Repellent)', 
      category: 'WOMAN', 
      price: '899000',
      description: '',
      fitur: 'Jaket berperforma tinggi untuk segala cuaca. Mampu menahan angin dengan lapisan mesh yang nyaman. Bagian tudung yang dapat dilipat ke dalam kerah. Bahan fungsional dengan lapisan film yang tahan angin. Lapisan water-repellent yang mampu menghalau hujan ringan. *Bahan dilapisi dengan lapisan water-repellent sehingga efeknya tahan lebih lama. Lapisan ini tidak permanen. Desain yang sangat praktis dengan saku di bagian pinggang dan saku dalam. Drawstring di bagian hem untuk menyesuaikan fit.',
      material: 'Jaket berperforma tinggi untuk segala cuaca. Mampu menahan angin dengan lapisan mesh yang nyaman. Bahan fungsional dengan lapisan film yang tahan angin. Lapisan water-repellent yang mampu menghalau hujan ringan. *Bahan dilapisi dengan lapisan water-repellent sehingga efeknya tahan lebih lama. Lapisan ini tidak permanen. Bagian tudung yang dapat dilipat ke dalam kerah. Desain yang sangat praktis dengan saku di bagian pinggang dan saku dalam. Drawstring di bagian hem untuk menyesuaikan fit. Tekstur kerut yang cocok untuk olahraga dan gaya kasual. Ukuran pendek dengan siluet rileks dan lengan raglan.',
      code_product:475038
    },

    // { product_picture: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg', 
    //   product_picture_2: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg', 
    //   product_picture_3: '../../assets/stores/products/KemejaFlannelILenganPanjangKotak(Button-Down).jpg',
    //   product_name: '', 
    //   category: 'WOMAN', 
    //   price: '199000',
    //   description: '',
    //   fitur: '',
    //   material: '',
    //   code_product:
    // },
  ]);
};
