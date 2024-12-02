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
  });
  