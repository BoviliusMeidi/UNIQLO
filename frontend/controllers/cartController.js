app.controller('CartController', function($http, $scope) {
    $scope.cart = [];
    $scope.loading = true;
  
    $http.get('http://127.0.0.1:3000/api/cart', {withCredentials: true})
      .then(function(response) {
        $scope.carts = response.data.cartItems;
        $scope.loading = false;
      })
      .catch(function(error) {
        console.error('Error fetching cart:', error);
        localStorage.setItem('showAlert', true);
        window.location.href = 'http://127.0.0.1:5500/frontend/views/authentication/login.html';
        $scope.loading = false;
      });

      $scope.increaseQuantity = function(cartItem) {
        const newQuantity = cartItem.quantity + 1;
      
        $http.put(`http://127.0.0.1:3000/api/cart/${cartItem.cart_id}`, { quantity: newQuantity }, { withCredentials: true })
          .then(() => {
            cartItem.quantity = newQuantity; // Update UI
          })
          .catch(error => {
            console.error('Error increasing quantity:', error);
          });
      };
      
      $scope.decreaseQuantity = function(cartItem) {
        if (cartItem.quantity > 1) {
          const newQuantity = cartItem.quantity - 1;
      
          $http.put(`http://127.0.0.1:3000/api/cart/${cartItem.cart_id}`, { quantity: newQuantity }, { withCredentials: true })
            .then(() => {
              cartItem.quantity = newQuantity; // Update UI
            })
            .catch(error => {
              console.error('Error decreasing quantity:', error);
            });
        }
      };
      
  
    $scope.removeFromCart = function(cartItemId) {
      $http.delete(`http://127.0.0.1:3000/api/cart/${cartItemId}`, {withCredentials: true})
        .then(function() {
          $scope.carts = $scope.carts.filter(item => item.cart_id !== cartItemId);
        })
        .catch(function(error) {
          console.error('Error removing from cart:', error);
        });
    };
  });
