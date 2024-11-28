app.controller('UserController', function ($scope, $http) {
    $scope.message = '';
    $scope.isEditMode = false;

    $scope.user = {};
    $scope.userProfile = function () {
        $http.get(API_URL + 'user', { withCredentials: true })
            .then(function (response) {
                $scope.user = response.data.dataUser;
            })
            .catch(function (error) {
                console.error('Error fetching user profile:', error);
                $scope.message = 'Failed to load user profile.';
            });
    };

    $scope.editUserProfile = function () {
        $scope.isEditMode = true;
    };

    $scope.saveUserProfile = function () {
        const updatedUser = angular.copy($scope.user);
        if (updatedUser.dob) {
            let dob = new Date(updatedUser.dob);
            dob.setDate(dob.getDate());
            dob.setMinutes(dob.getMinutes() - dob.getTimezoneOffset());
            updatedUser.dob = dob.toISOString().split('T')[0];
        }
        $http.put(API_URL + 'user', updatedUser, { withCredentials: true })
            .then(function (response) {
                $scope.isEditMode = false;
                console.log(updatedUser);
                alert('Profile updated successfully!');
            })
            .catch(function (error) {
                console.error('Error updating user profile:', error);
                alert('Failed to update profile.');
            });
    };

    $scope.deleteUserProfile = function () {
        if (confirm('Are you sure you want to delete your profile?')) {
            $http.delete('http://127.0.0.1:3000/api/user', { withCredentials: true })
                .then(function (response) {
                    alert('Your profile has been deleted.');
                    window.location.href = 'http://127.0.0.1:5500/frontend/views/authentication/login.html';
                })
                .catch(function (error) {
                    console.error('Error deleting user profile:', error);
                    alert('Failed to delete profile.');
                });
        }
    };

    $scope.userProfile();
});
