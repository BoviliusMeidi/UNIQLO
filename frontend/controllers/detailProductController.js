app.controller('DetailProductController', function ($http, $scope, $location) {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get('product_id');

  $scope.product = {};
  $scope.loading = true;

  $http.get(API_URL + 'products/' + productId, { withCredentials: true })
    .then(function (response) {
      $scope.product = response.data.product;
      $scope.loading = false;
    })
    .catch(function (error) {
      console.error('Error fetching product details:', error);
      $scope.loading = false;
    });


  $scope.increaseQuantity = function (product) {
    if (product.selectedQuantity < product.sizes[product.index].stock) {
      product.selectedQuantity++;
    }
  };

  $scope.decreaseQuantity = function (product) {
    if (product.selectedQuantity > 1) {
      product.selectedQuantity--;
    }
  };

  $scope.addToCart = function (product) {
    if (product.selectedQuantity > 0 && product.selectedQuantity <= product.sizes[product.index].stock) {
      if (!product.selectedSize) {
        alert("Please select a size before adding to the cart!");
        return;
      }
  
      let cartItem = {
        product_id: product.product_id,
        stock: product.sizes[product.index].stock,
        quantity: product.selectedQuantity,
        size: product.selectedSize
      };

      $scope.loadingCart = true;
      $http.post(API_URL + 'cart', cartItem, { withCredentials: true })
        .then(function (response) {
          product.stock -= product.selectedQuantity;
          product.selectedQuantity = 1;
          product.selectedSize = null;
          alert(product.product_name + " added to cart!");
          window.location.reload();
        })
        .catch(function (error) {
          console.error('Error adding to cart:', error);
          alert("You must login first.");
          window.location.href = UI_URL + 'authentication/login.html';
        })
        .finally(function () {
          $scope.loadingCart = false;
        });
    } else {
      alert("Invalid quantity selected!");
    }
  };
  

  $scope.showCart = function () {
    window.location.href = UI_URL + 'tests/cart.html';
  };

  $scope.selectSize = function (selectedSize, stock, index) {
    $scope.product.selectedSize = selectedSize;
    $scope.product.selectedQuantity = stock;
    $scope.product.index = index;
  };

});