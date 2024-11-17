app.controller('UserController', function ($scope, $http, $timeout) {
    $scope.newUser = {};
    $scope.message = '';
    $scope.alertShown = false;

    if (localStorage.getItem('showAlert') === 'true') {
        localStorage.removeItem('showAlert');
        $timeout(function () {
            alert("You need to log in first to access the Favorite Magazine page.");
            $scope.alertShown = true;
            $scope.message = '';
        }, 0);
    }

    $scope.createUser = function () {
        $http.post('http://127.0.0.1:3000/api/users', {
            email: $scope.newUser.email,
            password: $scope.newUser.password,
            dob: $scope.newUser.dob,
            withCredentials: true
        }).then(function (response) {
            window.location.href = 'http://127.0.0.1:5500/frontend/views/authentication/login.html';
            console.log("User created successfully:", response.data.user);
        }).catch(function (error) {
            console.error("Error creating user:", error);
            $scope.message = 'Register failed! Email already registered.';
        });
    };

    $scope.user = {};

    $scope.loginUser = function () {
        $http.post('http://127.0.0.1:3000/api/login', {
            email: $scope.user.email.toLowerCase(),
            password: $scope.user.password,
            withCredentials: true
        }).then(function (response) {
            console.log("Login successful:", response.data);
            localStorage.removeItem('visitedFavorite');
            if (localStorage.getItem('visitedFavorite') === 'true') {
                localStorage.removeItem('visitedFavorite');
                window.location.href = 'http://127.0.0.1:5500/frontend/views/magazines/favorite-magazine.html';
            } else {
                window.location.href = 'http://127.0.0.1:5500/frontend/';
            }
        }).catch(function (error) {
            console.error("Login failed:", error);
            $scope.message = 'Login failed! Please check your email or password.';
        });
    };

    $scope.togglePassword = function () {
        const passwordInput = document.getElementById('password-input');
        const currentType = passwordInput.getAttribute('type');
        passwordInput.setAttribute('type', currentType === 'password' ? 'text' : 'password');
    };
});
