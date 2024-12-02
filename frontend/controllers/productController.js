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
      const query = $scope.searchQuery.toLowerCase();
      const selectedCategory = $scope.category[$scope.currentIndex]; // Get the current category
    
      return $scope.products.filter(product => {
        return (
          (product.product_name.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query)) &&
          product.category.toUpperCase() === selectedCategory // Match the category
        );
      });
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

  $scope.sortByPrice = function (ascending) {
    $scope.products.sort(function (a, b) {
      return ascending ? a.price - b.price : b.price - a.price;
    });
  };

  // Sort products by size
  $scope.sortBySize = function (ascending) {
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
    const detailUrl = UI_URL + 'tests/selectedProduct.html?product_id=' + product.product_id;
    window.location.href = detailUrl;
  };

  // For switch tab
  $scope.openTab = function(index) {
    $scope.currentIndex = index;
    
  };

  $scope.isTabActive = function(index) {
    return $scope.currentIndex == index;
  };
});