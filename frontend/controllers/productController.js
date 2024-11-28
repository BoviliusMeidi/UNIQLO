app.controller('ProductController', function($http, $scope) {
    $scope.message = "Welcome to the Product List!";
    $scope.loading = true;
    $scope.products = [];
    $scope.cart = [];

    $http.get(API_URL + 'products', {withCredentials: true})
        .then(function(response) {
            $scope.products = response.data.listProducts.map(product => {
                product.selectedQuantity = 1;
                return product;
            });
            $scope.loading = false;
        })
        .catch(function(error) {
            console.error('Error fetching products:', error);
            $scope.loading = false;
        });
    
    setTimeout(() => {
        $scope.loading = false;
        $scope.$apply();
    }, 1000);

    $scope.increaseQuantity = function(product) {
        if (product.selectedQuantity < product.stock) {
            product.selectedQuantity++;
        }
    };

    $scope.decreaseQuantity = function(product) {
        if (product.selectedQuantity > 1) {
            product.selectedQuantity--;
        }
    };

    $scope.addToCart = function(product) {
        if (product.selectedQuantity > 0 && product.selectedQuantity <= product.stock) {
          let cartItem = {
            product_id: product.product_id,
            quantity: product.selectedQuantity
          };
          $http.post('http://127.0.0.1:3000/api/cart', cartItem, {withCredentials: true})
            .then(function(response) {
              product.stock -= product.selectedQuantity;
              product.selectedQuantity = 1; // Reset quantity
              alert(product.product_name + " added to cart!");
            })
            .catch(function(error) {
              console.error('Error adding to cart:', error);
            //   window.location.href = 'http://127.0.0.1:5500/frontend/views/authentication/login.html';
            });
        }
      };
    
      $scope.showCart = function() {
        window.location.href = 'http://127.0.0.1:5500/frontend/views/tests/cart.html';
      };
});