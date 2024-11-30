app.controller('AuthenticationController', function ($scope, $http, $timeout) {
    $scope.newUser = {};
    $scope.message = '';
    $scope.alertShown = false;
    $scope.isEditMode = false;

    if (localStorage.getItem('showAlert') === 'true') {
        localStorage.removeItem('showAlert');
        $timeout(function () {
            alert("You need to log in first to access the page.");
            $scope.alertShown = true;
            $scope.message = '';
        }, 0);
    }

    $scope.createUser = function () {
        $http.post(API_URL + 'users', {
            email: $scope.newUser.email,
            password: $scope.newUser.password,
            dob: $scope.newUser.dob,
        }).then(function (response) {
            window.location.href = UI_URL +'authentication/login.html';
            console.log("User created successfully:", response.data.user);
        }).catch(function (error) {
            console.error("Error creating user:", error);
            $scope.message = 'Register failed! Email already registered.';
        });
    };

    $scope.user = {};

    $scope.loginUser = function () {
        $http.post(API_URL + 'login',
            {
                email: $scope.user.email.toLowerCase(),
                password: $scope.user.password,
            },
            { withCredentials: true }
        ).then(function (response) {
            localStorage.removeItem('visitedFavorite');
            if(response.data.user.is_admin === true) {
                window.location.href = UI_URL + 'admin/landing-page.html';
            }else{
                if (localStorage.getItem('visitedFavorite') === 'true') {
                    localStorage.removeItem('visitedFavorite');
                    window.location.href = UI_URL + 'magazines/favorite-magazine.html';
                }
                else {
                    window.location.href = HOME_URL;
                }
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
