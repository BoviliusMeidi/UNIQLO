app.controller('CartController', function ($http, $scope) {
  $scope.cart = [];
  $scope.loading = true;

  $http.get(API_URL + 'cart', { withCredentials: true })
    .then(function (response) {
      $scope.carts = response.data.cartItems;
      $scope.loading = false;
    })
    .catch(function (error) {
      console.error('Error fetching cart:', error);
      localStorage.setItem('showAlert', true);
      window.location.href = UI_URL + 'authentication/login.html';
      $scope.loading = false;
    });

  $scope.increaseQuantity = function (cartItem) {
    const newQuantity = cartItem.quantity + 1;

    $http.put(API_URL + `cart/${cartItem.cart_id}`, { quantity: newQuantity }, { withCredentials: true })
      .then(() => {
        cartItem.quantity = newQuantity;
      })
      .catch(error => {
        console.error('Error increasing quantity:', error);
      });
  };

  $scope.decreaseQuantity = function (cartItem) {
    if (cartItem.quantity > 1) {
      const newQuantity = cartItem.quantity - 1;

      $http.put(API_URL + `cart/${cartItem.cart_id}`, { quantity: newQuantity }, { withCredentials: true })
        .then(() => {
          cartItem.quantity = newQuantity;
        })
        .catch(error => {
          console.error('Error decreasing quantity:', error);
        });
    }
  };


  $scope.removeFromCart = function (cartItemId) {
    $http.delete(API_URL + `cart/${cartItemId}`, { withCredentials: true })
      .then(function () {
        $scope.carts = $scope.carts.filter(item => item.cart_id !== cartItemId);
      })
      .catch(function (error) {
        console.error('Error removing from cart:', error);
      });
  };

  $scope.getSubtotal = function() {
    let subtotal = 0;
    for (let i = 0; i < $scope.carts.length; i++) {
      subtotal += $scope.carts[i].price * $scope.carts[i].quantity;
    }
    return subtotal;
  };
});
