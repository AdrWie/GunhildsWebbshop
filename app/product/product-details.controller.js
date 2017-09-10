angular.module("product").controller("productDetailsController", ["$scope", "$routeParams", "productService", "shoppingCartService", function ($scope, $routeParams, productService, shoppingCartService) {
    $scope.quantity = 1;
    $scope.product = {};
    
    productService.getProductById($routeParams.id).then(function (response) {
        $scope.product = response.data;
    });

    $scope.addItemToCart = function (product, quantity) {
        shoppingCartService.addItemToCart(product, quantity);
    };

    $scope.addProduct = function () {
        if ($scope.quantity < $scope.product.unitsInStock) $scope.quantity += 1;
    };

    $scope.removeProduct = function () {
        if ($scope.quantity > 1) $scope.quantity -= 1;
    };
}]);
