angular.module("login").factory("loginService", ["$http", "$location", "$rootScope", function ($http, $location, $rootScope) {
    var userId = 0;
    var userData = {};
    var userLoggedIn = false;
    $rootScope.loginLocation = "/";

    return {
        login: function (user) {
            return $http.post("http://nackbutik.azurewebsites.net/api/customer/login", user).then(function (response) {
                userId = response.data.customerId;
                userData = response.data;
                userLoggedIn = true;

                if ($rootScope.loginLocation.indexOf("login") == -1 ) {
                    $location.path($rootScope.loginLocation);
                } else {
                    $location.path("/");
                }

            }, function (response) {
                userId = 0;
                userData = {};
                userLoggedIn = false;
                $location.path("/login/fail");
            });
        },

        logout: function () {
            userId = 0;
            userData = {};
            userLoggedIn = false;
            $location.path("/");
        },

        isUserLoggedIn: function () {
            return userLoggedIn;
        },

        getLoggedInUser: function () {
            return userData;
        },

        getUserFullName: function () {
            return userData.firstName + " " + userData.lastName;
        }
    }
}]);
