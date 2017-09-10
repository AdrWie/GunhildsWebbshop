angular.module("signup").controller("signupController", ["$scope", "$location", "signupService", "loginService", function ($scope, $location, signupService, loginService) {
    $scope.failMessage = true;
    
    if (loginService.isUserLoggedIn()) {
        $location.path("/");
    }

    $scope.signup = function () {
        $scope.failMessage = true;

        var user = {
            firstName: $scope.customer.firstName,
            lastName: $scope.customer.lastName,
            email: $scope.customer.email,
            phone: $scope.customer.phone,
            password: $scope.customer.password,
            address: $scope.customer.address,
            postalCode: $scope.customer.postalCode,
            city: $scope.customer.city
        };

        signupService.signup(user).then(function (response) {
            loginService.login({email: $scope.customer.email, password: $scope.customer.password})
        }, function (response) {
            $scope.failMessage = false;
        });
    }

    $scope.back = function() {
        $location.path("/products");
    };
}]);
