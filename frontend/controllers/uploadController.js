app.controller('UploadController', function ($scope, $http) {
    $scope.user = {};
    $scope.products = {};

    $http.get(API_URL + 'user', { withCredentials: true })
        .then(function (response) {
            $scope.user = response.data.dataUser;
        })
        .catch(function (error) {
            console.error('Error fetching user profile:', error);
            $scope.message = 'Failed to load user profile.';
        });


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

    $scope.triggerFileInput = function () {
        document.getElementById('file-upload').click();
        console.log("test")
    };

    $scope.onFileChange = function (type) {
        const fileInput = document.getElementById(`file-upload`);
        const file = fileInput.files[0];
        if (file) {
            if (type === 'user') {
                $scope.user.profile_picture = URL.createObjectURL(file);
            } else if (type === 'product') {
                $scope.product.product_pictur = URL.createObjectURL(file);
            }
        }
    };

    $scope.uploadImage = function (type) {
        const fileInput = document.getElementById(`file-upload`);
        const file = fileInput.files[0];

        if (file) {
            const formData = new FormData();
            formData.append('image', file);
            formData.append('type', type);

            $http.post(API_URL + `${type}/upload`, formData, {
                withCredentials: true,
                headers: {
                    'Content-Type': undefined,
                },
            })
                .then(function (response) {
                    if (type === 'user') {
                        $scope.user.profile_picture_url = response.data.image_url;
                    } else if (type === 'product') {
                        $scope.product.image_url = response.data.image_url;
                    }
                })
                .catch(function (error) {
                    console.error(`Error uploading ${type} image:`, error);
                    $scope.message = `Error uploading ${type} image. Please try again.`;
                });
        }
    };

});
