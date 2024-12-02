app.controller('ProductController', function ($http, $scope) {
  $scope.message = "Welcome to the Product List!";
  $scope.loading = true;
  $scope.ascendingPrice = true;
  $scope.ascendingSize = true;
  $scope.searchQuery = '';
  $scope.products = [];
  $scope.cart = [];
  $scope.category = ["MEN", "WOMAN", "KIDS"];
  $scope.categoryLowercase = $scope.category.map(item => item.toLowerCase());
  $scope.currentIndex = 0;

  // Filtering and sorting
  $scope.filters = {
    newArrival: false,
    onSale: false,
    minPrice: null,
    maxPrice: null,
    size: null,
  };

  $scope.currentSort = '';

  // Pagination
  $scope.pageSize = 6; // Jumlah produk per halaman
  $scope.currentPage = 1; // Halaman saat ini
  $scope.totalPages = 1; // Total halaman


  $http.get(API_URL + 'products', { withCredentials: true })
    .then(function (response) {
      $scope.products = response.data.listProducts.map(product => {
        product.selectedQuantity = 1;
        return product;
      });
      $scope.loading = false;
    })
    .catch(function (error) {
      console.error('Error fetching products:', error);
      $scope.loading = false;
    });

$scope.filteredProducts = function () {
  const query = $scope.searchQuery ? $scope.searchQuery.toLowerCase() : '';
  const selectedCategory = $scope.category[$scope.currentIndex]; // Get the current category

  const filtered = $scope.products.filter(product => {
    const matchesQuery =
      product.product_name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query);

    const matchesCategory = product.category.toUpperCase() === selectedCategory;

    const matchesNewArrival = !$scope.filters.newArrival || product.newArrival === 'true';
    const matchesOnSale = !$scope.filters.onSale || product.onSale === 'true';
    const matchesPrice =
      (!$scope.filters.minPrice || product.price >= $scope.filters.minPrice) &&
      (!$scope.filters.maxPrice || product.price <= $scope.filters.maxPrice);
    const matchesSize = !$scope.filters.size || product.size === $scope.filters.size;

    return (
      matchesQuery &&
      matchesCategory &&
      matchesNewArrival &&
      matchesOnSale &&
      matchesPrice &&
      matchesSize
    );
  });

  // Hitung total halaman berdasarkan jumlah produk yang difilter
  $scope.totalPages = Math.ceil(filtered.length / $scope.pageSize);

  // Ambil produk yang sesuai dengan halaman aktif
  const startIndex = ($scope.currentPage - 1) * $scope.pageSize;
  const endIndex = startIndex + $scope.pageSize;

  return filtered.slice(startIndex, endIndex);
};
    

  setTimeout(() => {
    $scope.loading = false;
    $scope.$apply();
  }, 1000);

  $scope.increaseQuantity = function (product) {
    if (product.selectedQuantity < product.stock) {
      product.selectedQuantity++;
    }
  };

  $scope.decreaseQuantity = function (product) {
    if (product.selectedQuantity > 1) {
      product.selectedQuantity--;
    }
  };

  $scope.addToCart = function (product) {
    if (product.selectedQuantity > 0 && product.selectedQuantity <= product.stock) {
      let cartItem = {
        product_id: product.product_id,
        quantity: product.selectedQuantity
      };
      $http.post(API_URL + 'cart', cartItem, { withCredentials: true })
        .then(function (response) {
          product.stock -= product.selectedQuantity;
          product.selectedQuantity = 1;
          alert(product.product_name + " added to cart!");
        })
        .catch(function (error) {
          console.error('Error adding to cart:', error);
        });
    }
  };

  $scope.showCart = function () {
    window.location.href = UI_URL + 'tests/cart.html';
  };

  $scope.isSortActive = function(sortType) {
    return $scope.currentSort === sortType;
  };

  $scope.sortByPrice = function (ascending) {
    $scope.currentSort = ascending ? 'priceLow' : 'priceHigh';
    $scope.products.sort(function (a, b) {
      return ascending ? a.price - b.price : b.price - a.price;
    });
  };

  $scope.sortBySize = function (ascending) {
    $scope.currentSort = ascending ? 'sizeAtoZ' : 'sizeZtoA'; 
    $scope.products.sort(function (a, b) {
      return ascending ? a.size.localeCompare(b.size) : b.size.localeCompare(a.size);
    });
  };

  $scope.searchProducts = function () {
    if ($scope.searchQuery) {
      console.log('Searching for:', $scope.searchQuery);
    } else {
      console.log('Please enter a search term.');
    }
  };

  $scope.goToDetail = function (product) {
    const detailUrl = UI_URL + 'stores/product-detail.html?product_id=' + product.product_id;
    window.location.href = detailUrl;
  };

  // For switch tab
  $scope.openTab = function(index) {
    $scope.currentIndex = index;
    
  };

  $scope.isTabActive = function(index) {
    return $scope.currentIndex == index;
  };

  $scope.resetFilters = function () {
    $scope.filters = {
      newArrival: false,
      onSale: false,
      minPrice: null,
      maxPrice: null,
      size: null
    };
    $scope.currentPage = 1; // Reset ke halaman pertama saat filter di-reset
  };

  $scope.goToPage = function (page) {
    if (page >= 1 && page <= $scope.totalPages) {
      $scope.currentPage = page;
    }
  };
});