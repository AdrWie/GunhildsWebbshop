angular.module("shoppingCart").controller("shoppingCartController", ["$scope", "shoppingCartService", function ($scope, shoppingCartService) {
    $scope.cartProducts = [];

    $scope.removeCartItem = function (index) {
        shoppingCartService.removeCartItem(index);
    }

    $scope.$watchCollection(function () {
        return shoppingCartService.getCartProducts();

    }, function (newValue, oldValue) {
        $scope.cartProducts = newValue;
    });

    $scope.$watch(function () {
        return shoppingCartService.getCartTotalPrice();
    }, function (newValue, oldValue) {
        $scope.cartTotalPrice = newValue;
    });
}]);
