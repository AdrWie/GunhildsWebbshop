angular.module("signup").factory("signupService", ["$http", function ($http) {
    return {
        signup: function (user) {
            return $http.post("http://nackbutik.azurewebsites.net/api/customer", user);
        }
    }
}]);
