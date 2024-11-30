const app = angular.module('adminApp', []);
const API_ADMIN_URL = "http://127.0.0.1:3000/api/admin/";

app.controller('AdminController', function ($scope, $http) {
  $scope.products = [];
  $scope.users = [];
  $scope.carts = [];
  $scope.newProduct = {};

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

  $http.get(API_ADMIN_URL + 'products', { withCredentials: true })
    .then(function (response) {
      $scope.products = response.data.listProducts.map(product => ({
        ...product,
        isEditing: false,
      }));
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
      }
    })
    .catch(function (error) {
      console.error('Error fetching carts:', error);
      alert('Failed to load carts.');
    });

  $scope.editProduct = function (product) {
    product.isEditing = true;
  };

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
});