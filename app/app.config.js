angular.module("app").config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/", {
            template: "<root></root>"
        })
        .when("/login", {
            template: "<login></login>"
        })
        .when("/login/:message", {
            template: "<login></login>"
        })
        .when("/signup", {
            template: "<signup></signup>"
        })
        .when("/products", {
            template: "<product-list></product-list>"
        })
        .when("/products/category/:category", {
            template: "<product-list></product-list>"
        })
        .when("/products/search/:search", {
            template: "<product-list></product-list>"
        })
        .when("/product/:id", {
            template: "<product-details></product-details>"
        })
        .when("/receipt", {
            template: "<receipt-message></receipt-message>"
        })
        .when("/checkout", {
            template: "<checkout></checkout>"
        })
        .otherwise({template: "<error></error>"});
    $locationProvider.html5Mode(true);
}]);

