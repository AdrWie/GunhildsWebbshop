angular.module("product").controller("productListController", ["$scope", "$routeParams", "productService", "shoppingCartService", function ($scope, $routeParams, productService, shoppingCartService) {
    var products = [];
    $scope.searchedProduct = "";
    $scope.searchedCategory = "";

    productService.getProducts().then(function (response) {

        products = response.data;
        $scope.searchedProduct = $routeParams.search;
        $scope.searchedCategory = $routeParams.category;
        $scope.products = products;
    });

    $scope.addItemToCart = function (product, quantity) {
        shoppingCartService.addItemToCart(product, quantity);
    }

}]);

