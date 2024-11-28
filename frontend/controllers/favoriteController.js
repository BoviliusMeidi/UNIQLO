app.controller('FavoriteController', function ($scope, $http) {
    $scope.message = '';

    $http.get('http://127.0.0.1:3000/api/check-session', { withCredentials: true })
        .then(function (response) {
            $scope.message = "Welcome to the Favorite Magazine Page!";
        })
        .catch(function (error) {
            localStorage.setItem('showAlert', true);
            localStorage.setItem('visitedFavorite', true);
            window.location.href = 'http://127.0.0.1:5500/frontend/views/authentication/login.html';
        });

    $scope.logout = function () {
        $http.delete('http://127.0.0.1:3000/api/logout', {withCredentials: true })
            .then(function () {
                window.location.href = 'http://127.0.0.1:5500/frontend/views/authentication/login.html';
            })
            .catch(function (error) {
                console.error("Error during logout:", error);
            });
    };
});
