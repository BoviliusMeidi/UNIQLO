app.controller('FavoriteController', function ($scope, $http, $location) {
    console.log(localStorage);
    $scope.message = '';

    $http.get('http://127.0.0.1:3000/api/check-session', { withCredentials: true })
        .then(function (response) {
            $scope.message = "Welcome to the Favorite Magazine Page!";
        })
        .catch(function (error) {
            localStorage.setItem('showAlert', true);
            localStorage.setItem('visitedFavorite', true);
            window.location.href = 'http://127.0.0.1:5500/frontend/views/login.html';
        });

    $scope.logout = function () {
        $http.post('http://127.0.0.1:3000/api/logout')
            .then(function (response) {
                localStorage.removeItem('user');
                window.location.href = 'http://127.0.0.1:5500/frontend/views/login.html';
            })
            .catch(function (error) {
                console.error("Error during logout:", error);
            });
    };
});
