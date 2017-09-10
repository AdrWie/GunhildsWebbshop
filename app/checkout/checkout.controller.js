angular.module("checkout").controller("checkoutController", ["$scope", "$rootScope", "$location", "loginService", "shoppingCartService", "checkoutService", function ($scope, $rootScope, $location, loginService, shoppingCartService, checkoutService) {
    $scope.checkoutClicked = false;
    $scope.orderError = false;


    $scope.$watch(function () {
        return shoppingCartService.getCartSize();
    }, function (newValue, oldValue) {
        $scope.emptyCart = newValue == 0;
    });

    if (!loginService.isUserLoggedIn()) {
        $rootScope.loginLocation = "/checkout";
        $location.path("/login/req");
    }

   $scope.customer = loginService.getLoggedInUser();

    $scope.checkout = function () {
        $scope.checkoutClicked = true;

        var order = {
            customerId: $scope.customer.customerId,
            products: []
        };

        var cartProducts = shoppingCartService.getCartProducts();

        angular.forEach(cartProducts, function (product) {
            order.products.push({productId:product.product.id, quantity: product.quantity})
        });

        checkoutService.sendOrder(order).then(function (response) {
            shoppingCartService.emptyCart();
            $location.path("/receipt");
        }, function (response) {
            $scope.checkoutClicked = false;
            $scope.orderError = true;
        })


    }
}]);
