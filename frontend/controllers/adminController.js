const app = angular.module('adminApp', []);
const API_ADMIN_URL = "http://127.0.0.1:3000/api/admin/";

app.filter('priceFormat', function () {
  return function (price) {
    return new Intl.NumberFormat('id-ID', {
      style: 'decimal',
      maximumFractionDigits: 3
    }).format(price);
  };
});

app.filter('ifNull', function () {
  return function (input) {
    if (input == null || input === '') {
      return 'No Data';
    }
    return input;
  };
});

app.filter('dateFormat', function () {
  return function (input) {
    if (input) {
      return input.split('T')[0];
    }
    return input;
  };
});

app.controller('AdminController', function ($scope, $http) {
  $scope.currentPage = 1;
  $scope.pageSize = 10;
  $scope.products = [];
  $scope.users = [];
  $scope.carts = [];
  $scope.searchQuery = '';
  $scope.newProduct = {};
  $scope.categories = ['MAN', 'WOMAN', 'KIDS'];
  $scope.sizes = ['S', 'M', 'L', 'XL', 'XXL'];

  // function for load data
  function loadData() {
    $http.get(API_ADMIN_URL + 'products', { withCredentials: true })
      .then(function (response) {
        $scope.products = response.data.listProducts.map(product => ({
          ...product,
          isEditing: false,
        }));
        $scope.totalProducts = $scope.products.length;
      })
      .catch(function (error) {
        console.error('Error fetching products:', error);
        alert('Failed to load products.');
      });

    $http.get(API_ADMIN_URL + 'users', { withCredentials: true })
      .then(function (response) {
        $scope.users = response.data.listUsers.map(user => ({
          ...user,
          isEditing: false,
        }));
        $scope.totalUsers = $scope.users.length
      })
      .catch(function (error) {
        console.error('Error fetching users:', error);
        alert('Failed to load users.');
      });

    $http.get(API_ADMIN_URL + 'carts', { withCredentials: true })
      .then(function (response) {
        if (response.data.listCarts == null) {
          $scope.message = 'Error creating product. Please try again.';
        } else {
          $scope.carts = response.data.listCarts.map(cart => ({
            ...cart,
            isEditing: false,
          }));
          $scope.totalCarts = $scope.carts.length;
        }
      })
      .catch(function (error) {
        console.error('Error fetching carts:', error);
        alert('Failed to load carts.');
      });
  }

  loadData();

  // create product
  $scope.createProduct = function (event) {
    event.preventDefault();
    if (!$scope.newProduct.product_picture) {
      $scope.message = 'Please upload a product image.';
      return;
    }

    $http.post(API_ADMIN_URL + 'products', $scope.newProduct, { withCredentials: true })
      .then(function (response) {
        $scope.message = 'Product created successfully!';
        $scope.newProduct = {};
      })
      .catch(function (error) {
        console.error('Error creating product:', error);
        $scope.message = 'Error creating product. Please try again.';
      });
  };

  // edit product
  $scope.editProduct = function (product) {
    product.isEditing = true;
  };

  // save product
  $scope.saveProduct = function (product) {
    $http.put(API_ADMIN_URL + `products/${product.product_id}`, product, { withCredentials: true })
      .then(function () {
        product.isEditing = false;
        alert('Product updated successfully.');
      })
      .catch(function (error) {
        console.error('Error updating product:', error);
        alert('Failed to update product.');
      });
  };

  // delete function
  $scope.deleteProduct = function (productId) {
    if (confirm('Are you sure you want to delete this product?')) {
      $http.delete(API_ADMIN_URL + `products/${productId}`, { withCredentials: true })
        .then(function () {
          $scope.products = $scope.products.filter(p => p.product_id !== productId);
          alert('Product deleted successfully.');
        })
        .catch(function (error) {
          console.error('Error deleting product:', error);
          alert('Failed to delete product.');
        });
    }
  };

  $scope.deleteUser = function (userId) {
    if (confirm('Are you sure you want to delete this user?')) {
      $http.delete(API_ADMIN_URL + `users/${userId}`, { withCredentials: true })
        .then(function () {
          $scope.users = $scope.users.filter(p => p.user_id !== userId);
          alert('User deleted successfully.');
        })
        .catch(function (error) {
          console.error('Error deleting user:', error);
          alert('Failed to delete user.');
        });
    }
  };

  $scope.deleteCart = function (cartId) {
    if (confirm('Are you sure you want to delete this cart?')) {
      $http.delete(API_ADMIN_URL + `carts/${cartId}`, { withCredentials: true })
        .then(function () {
          $scope.carts = $scope.carts.filter(p => p.cart_id !== cartId);
          alert('Cart deleted successfully.');
        })
        .catch(function (error) {
          console.error('Error deleting user:', error);
          alert('Failed to delete user.');
        });
    }
  };

  // pagination function
  $scope.getPagedData = function (data) {
    const startIndex = ($scope.currentPage - 1) * $scope.pageSize;
    return data.slice(startIndex, startIndex + $scope.pageSize);
  };

  $scope.changePage = function (page, type) {
    if (page > 0 && page <= $scope.getTotalPages(type)) {
      $scope.currentPage = page;
    }
  };

  $scope.getTotalPages = function (type) {
    if (type === 'products') {
      return Math.ceil($scope.products.length / $scope.pageSize);
    } else if (type === 'users') {
      return Math.ceil($scope.users.length / $scope.pageSize);
    } else if (type === 'carts') {
      return Math.ceil($scope.carts.length / $scope.pageSize);
    }
    return 0;
  };

  // filtered function
  $scope.filteredProducts = function () {
    const query = $scope.searchQuery.toLowerCase();
    return $scope.getPagedData($scope.products.filter(product => {
      return (
        product.product_name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
      );
    }));
  };

  $scope.filteredUsers = function () {
    const query = $scope.searchQuery.toLowerCase();
    return $scope.getPagedData($scope.users.filter(user => {
      return (
        user.username.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query) ||
        user.country.toLowerCase().includes(query) ||
        user.address.toLowerCase().includes(query)
      );
    }));
  };

  $scope.filteredCarts = function () {
    const query = $scope.searchQuery.toLowerCase();
    return $scope.getPagedData($scope.carts.filter(cart => {
      return (
        cart.username.toLowerCase().includes(query) ||
        cart.email.toLowerCase().includes(query) ||
        cart.product_name.toLowerCase().includes(query)
      );
    }));
  };

  $scope.onFileChange = function () {
    const fileInput = document.getElementById('product_picture');
    const file = fileInput.files[0];

    if (file) {
      const formData = new FormData();
      formData.append('image', file);

      $http.post(API_ADMIN_URL + 'product/upload', formData, {
        withCredentials: true,
        headers: {
          'Content-Type': undefined,
        },
      })
        .then(function (response) {
          $scope.newProduct.product_picture = '../../backend/uploads/products/' + response.data.filename;
          $scope.message = 'Product image uploaded successfully.';
        })
        .catch(function (error) {
          console.error('Error uploading image:', error);
          $scope.message = 'Error uploading image. Please try again.';
        });
    }
  };
});