app.controller('FavoriteController', function ($scope, $http) {
    $scope.message = '';

    $http.get(API_URL + 'check-session', { withCredentials: true })
        .then(function (response) {
            $scope.message = "Welcome to the Favorite Magazine Page!";
        })
        .catch(function (error) {
            localStorage.setItem('showAlert', true);
            localStorage.setItem('visitedFavorite', true);
            window.location.href = UI_URL + 'authentication/login.html';
        });

    $scope.logout = function () {
        $http.delete(API_URL + 'logout', {withCredentials: true })
            .then(function () {
                window.location.href = UI_URL + 'authentication/login.html';
            })
            .catch(function (error) {
                console.error("Error during logout:", error);
            });
    };
});
