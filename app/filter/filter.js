angular.module("customFilter", []).filter("filterProducts", function() {
    return function(products, searchedProduct) {
        var foundProducts = [];
        if (searchedProduct) {
            angular.forEach(products, function(product) {
                if (product.name.toLowerCase().indexOf(searchedProduct) >= 0 || product.description.toLowerCase().indexOf(searchedProduct) >= 0) {
                    foundProducts.push(product);
                }     
            })
        } else {
            foundProducts = products;
        }
        return foundProducts;
    }
});

angular.module("customFilter").filter("filterCategory", function() {
    return function(products, searchedCategory) {
        var foundCategory = [];
        if(searchedCategory) {
            angular.forEach(products, function(product) {
                if(product.categoryId == searchedCategory) {
                    foundCategory.push(product);
                }                                            
            })
        } else {
            foundCategory = products;
        }
        return foundCategory;
    }
});
