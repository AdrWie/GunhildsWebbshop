angular.module("shoppingCart").factory("shoppingCartService", [function () {
    var cartProducts = [];
    var totalPrice = 0;
    var reCountItems = function () {
        var total = 0;
        angular.forEach(cartProducts, function (product) {
            total += (product.quantity * product.product.price);
        });
        return total;
    };

    return {
        addItemToCart: function (addProduct, quantity) {
            var added = false;
            angular.forEach(cartProducts, function (cartProduct) {
                if (cartProduct.product.id == addProduct.id && !added) {
                    cartProduct.quantity += quantity;
                    added = true;
                }
            });
            if (!added) {
                cartProducts.push({product:addProduct, quantity:quantity});
                totalPrice = reCountItems();
                alert("Placerad i kundvagnen");
            }    
        },

        removeCartItem: function (index) {
            cartProducts.splice(index, 1);
            totalPrice = reCountItems();
        },

        getCartSize: function () {
            return cartProducts.length;
        },

        getCartProducts: function () {
            return cartProducts;
        },

        getCartTotalPrice: function () {
            return totalPrice;
        },

        emptyCart: function () {
            cartProducts = [];
            totalPrice = 0;
        }
    }
}]);
