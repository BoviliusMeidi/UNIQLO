/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('product_sizes').del()
  await knex('product_sizes').insert([

    // Unique Code MEN

    // Endinburgh
    // Sweater
    { code_product: 469926, size: 'S', stock: 50 },
    { code_product: 469926, size: 'M', stock: 50 },
    { code_product: 469926, size: 'L', stock: 50 },
    { code_product: 469926, size: 'XL', stock: 50 },
    { code_product: 469926, size: 'XXL', stock: 50 },

    // Kemeja Broadcloth Oversize | Lengan Panjang
    { code_product: 478812, size: 'S', stock: 50 },
    { code_product: 478812, size: 'M', stock: 50 },
    { code_product: 478812, size: 'L', stock: 50 },
    { code_product: 478812, size: 'XL', stock: 50 },
    { code_product: 478812, size: 'XXL', stock: 50 },
  
    // Celana Chino Slim Fit
    { code_product: 463915, size: 'S', stock: 50 },
    { code_product: 463915, size: 'M', stock: 50 },
    { code_product: 463915, size: 'L', stock: 50 },
    { code_product: 463915, size: 'XL', stock: 50 },
    { code_product: 463915, size: 'XXL', stock: 50 },
      
    // T-Shirt Soft Touch (Soft brushed) Kerah Bulat | Lengan Panjang
    { code_product: 469940, size: 'S', stock: 50 },
    { code_product: 469940, size: 'M', stock: 50 },
    { code_product: 469940, size: 'L', stock: 50 },
    { code_product: 469940, size: 'XL', stock: 50 },
    { code_product: 469940, size: 'XXL', stock: 50 },


    // Kaos Kaki Warna
    { code_product: 477157, size: 'S', stock: 50 },
    // { code_product: 477157, size: 'M', stock: 50 },
    // { code_product: 477157, size: 'L', stock: 50 },
    // { code_product: 477157, size: 'XL', stock: 50 },
    // { code_product: 477157, size: 'XXL', stock: 50 },

    // Jaket Blouson Pendek Utilitas
    { code_product: 459592, size: 'S', stock: 50 },
    { code_product: 459592, size: 'M', stock: 50 },
    { code_product: 459592, size: 'L', stock: 50 },
    { code_product: 459592, size: 'XL', stock: 50 },
    { code_product: 459592, size: 'XXL', stock: 50 },

    // Sweater Extra Fine Merino Kerah Bulat Lengan Panjang
    { code_product: 469395, size: 'S', stock: 50 },
    { code_product: 469395, size: 'M', stock: 50 },
    { code_product: 469395, size: 'L', stock: 50 },
    { code_product: 469395, size: 'XL', stock: 50 },
    { code_product: 469395, size: 'XXL', stock: 50 },

    // Kemeja Oxford | Lengan Panjang Regular Fit
    { code_product: 475998, size: 'S', stock: 50 },
    { code_product: 475998, size: 'M', stock: 50 },
    { code_product: 475998, size: 'L', stock: 50 },
    { code_product: 475998, size: 'XL', stock: 50 },
    { code_product: 475998, size: 'XXL', stock: 50 },

    // Jeans Slim Fit Stretch Selvedge
    { code_product: 475548, size: 'S', stock: 50 },
    { code_product: 475548, size: 'M', stock: 50 },
    { code_product: 475548, size: 'L', stock: 50 },
    { code_product: 475548, size: 'XL', stock: 50 },
    { code_product: 475548, size: 'XXL', stock: 50 },

    // Kemeja Luaran Jersey | Lengan Panjang
    { code_product: 470298, size: 'S', stock: 50 },
    { code_product: 470298, size: 'M', stock: 50 },
    { code_product: 470298, size: 'L', stock: 50 },
    { code_product: 470298, size: 'XL', stock: 50 },
    { code_product: 470298, size: 'XXL', stock: 50 },

    // Kemeja Oxford Garis | Lengan Panjang Regular Fit
    { code_product: 475999, size: 'S', stock: 50 },
    { code_product: 475999, size: 'M', stock: 50 },
    { code_product: 475999, size: 'L', stock: 50 },
    { code_product: 475999, size: 'XL', stock: 50 },
    { code_product: 475999, size: 'XXL', stock: 50 },

    // Jeans Warna Ultra Stretch (Skinny Fit)
    { code_product: 477013, size: 'S', stock: 50 },
    { code_product: 477013, size: 'M', stock: 50 },
    { code_product: 477013, size: 'L', stock: 50 },
    { code_product: 477013, size: 'XL', stock: 50 },
    { code_product: 477013, size: 'XXL', stock: 50 },


    // Unique Code Woman

    // Endinburgh
    // T-Shirt Katun Lembut Rileks | Lengan Panjang
    { code_product: 472868, size: 'S', stock: 50 },
    { code_product: 472868, size: 'M', stock: 50 },
    { code_product: 472868, size: 'L', stock: 50 },
    { code_product: 472868, size: 'XL', stock: 50 },
    { code_product: 472868, size: 'XXL', stock: 50 },

    // Tas Eco-Friendly
    { code_product: 462191, size: 'S', stock: 50 },
    // { code_product: 462191, size: 'M', stock: 50 },
    // { code_product: 462191, size: 'L', stock: 50 },
    // { code_product: 462191, size: 'XL', stock: 50 },
    // { code_product: 462191, size: 'XXL', stock: 50 },

    // Jaket Ritsleting Lambswool Blend
    { code_product: 471464, size: 'S', stock: 50 },
    { code_product: 471464, size: 'M', stock: 50 },
    { code_product: 471464, size: 'L', stock: 50 },
    { code_product: 471464, size: 'XL', stock: 50 },
    { code_product: 471464, size: 'XXL', stock: 50 },

    // Kemeja Flannel Lembut Kerah Skipper | Kotak
    { code_product: 469425, size: 'S', stock: 50 },
    { code_product: 469425, size: 'M', stock: 50 },
    { code_product: 469425, size: 'L', stock: 50 },
    { code_product: 469425, size: 'XL', stock: 50 },
    { code_product: 469425, size: 'XXL', stock: 50 },

    // T-Shirt Katun Lembut Rileks | Lengan Panjang
    { code_product: 470129, size: 'S', stock: 50 },
    { code_product: 470129, size: 'M', stock: 50 },
    { code_product: 470129, size: 'L', stock: 50 },
    { code_product: 470129, size: 'XL', stock: 50 },
    { code_product: 470129, size: 'XXL', stock: 50 },

    // Rompi Crop Down
    { code_product: 472014, size: 'S', stock: 50 },
    { code_product: 472014, size: 'M', stock: 50 },
    { code_product: 472014, size: 'L', stock: 50 },
    { code_product: 472014, size: 'XL', stock: 50 },
    { code_product: 472014, size: 'XXL', stock: 50 },

    // Kemeja Flannel Lembut Kerah Skipper | Kotak
    { code_product: 469424, size: 'S', stock: 50 },
    { code_product: 469424, size: 'M', stock: 50 },
    { code_product: 469424, size: 'L', stock: 50 },
    { code_product: 469424, size: 'XL', stock: 50 },
    { code_product: 469424, size: 'XXL', stock: 50 },

    // HEATTECH T-Shirt Fleece Kerah Tinggi Lengan Panjang (Turtleneck)
    { code_product: 470142, size: 'S', stock: 50 },
    { code_product: 470142, size: 'M', stock: 50 },
    { code_product: 470142, size: 'L', stock: 50 },
    { code_product: 470142, size: 'XL', stock: 50 },
    { code_product: 470142, size: 'XXL', stock: 50 },

    // Jeans Skinny Comfort Ultra Stretch
    { code_product: 472489, size: 'S', stock: 50 },
    { code_product: 472489, size: 'M', stock: 50 },
    { code_product: 472489, size: 'L', stock: 50 },
    { code_product: 472489, size: 'XL', stock: 50 },
    { code_product: 472489, size: 'XXL', stock: 50 },

    // Rok Model Celana Korduroi
    { code_product: 471423, size: 'S', stock: 50 },
    { code_product: 471423, size: 'M', stock: 50 },
    { code_product: 471423, size: 'L', stock: 50 },
    { code_product: 471423, size: 'XL', stock: 50 },
    { code_product: 471423, size: 'XXL', stock: 50 },

    // Celana Sweat
    { code_product: 475382, size: 'S', stock: 50 },
    { code_product: 475382, size: 'M', stock: 50 },
    { code_product: 475382, size: 'L', stock: 50 },
    { code_product: 475382, size: 'XL', stock: 50 },
    { code_product: 475382, size: 'XXL', stock: 50 },

    // Jaket Ultra Light Down (Jaket Down)
    { code_product: 460914, size: 'S', stock: 50 },
    { code_product: 460914, size: 'M', stock: 50 },
    { code_product: 460914, size: 'L', stock: 50 },
    { code_product: 460914, size: 'XL', stock: 50 },
    { code_product: 460914, size: 'XXL', stock: 50 },

    // Kemeja Broadcloth | Lengan Panjang Kotak
    { code_product: 472535, size: 'S', stock: 50 },
    { code_product: 472535, size: 'M', stock: 50 },
    { code_product: 472535, size: 'L', stock: 50 },
    { code_product: 472535, size: 'XL', stock: 50 },
    { code_product: 472535, size: 'XXL', stock: 50 },

    // Pullover Lapis Brushed Kerah Tinggi
    { code_product: 471806, size: 'S', stock: 50 },
    { code_product: 471806, size: 'M', stock: 50 },
    { code_product: 471806, size: 'L', stock: 50 },
    { code_product: 471806, size: 'XL', stock: 50 },
    { code_product: 471806, size: 'XXL', stock: 50 },

    // Celana Panjang Jeans Lebar
    { code_product: 476088, size: 'S', stock: 50 },
    { code_product: 476088, size: 'M', stock: 50 },
    { code_product: 476088, size: 'L', stock: 50 },
    { code_product: 476088, size: 'XL', stock: 50 },
    { code_product: 476088, size: 'XXL', stock: 50 },

    // Pullover Sweat Hoodie
    { code_product: 469927, size: 'S', stock: 50 },
    { code_product: 469927, size: 'M', stock: 50 },
    { code_product: 469927, size: 'L', stock: 50 },
    { code_product: 469927, size: 'XL', stock: 50 },
    { code_product: 469927, size: 'XXL', stock: 50 },

    // Celana Chino Fit Lebar Lipit Uniqlo U
    { code_product: 457967, size: 'S', stock: 50 },
    { code_product: 457967, size: 'M', stock: 50 },
    { code_product: 457967, size: 'L', stock: 50 },
    { code_product: 457967, size: 'XL', stock: 50 },
    { code_product: 457967, size: 'XXL', stock: 50 },

    // Sepatu Sneakers Kombinasi Suede Sintetis
    { code_product: 471720, size: 'S', stock: 50 },
    { code_product: 471720, size: 'M', stock: 50 },
    { code_product: 471720, size: 'L', stock: 50 },
    { code_product: 471720, size: 'XL', stock: 50 },
    { code_product: 471720, size: 'XXL', stock: 50 },

    // Jaket Blouson Kerah Tegak Tahan Angin (Water-Repellent)
    { code_product: 475038, size: 'S', stock: 50 },
    { code_product: 475038, size: 'M', stock: 50 },
    { code_product: 475038, size: 'L', stock: 50 },
    { code_product: 475038, size: 'XL', stock: 50 },
    { code_product: 475038, size: 'XXL', stock: 50 },


    
    // Unique Code KID

    // Endinburgh
  ]);
};
