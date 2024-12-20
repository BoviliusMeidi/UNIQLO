const app = angular.module('myApp', []);
const API_URL = "http://127.0.0.1:3000/api/";
const UI_URL = "http://127.0.0.1:5500/frontend/views/";
const HOME_URL = "http://127.0.0.1:5500/frontend/";

app.filter('priceFormat', function () {
    return function (price) {
        return new Intl.NumberFormat('id-ID', {
            style: 'decimal',
            maximumFractionDigits: 3
        }).format(price);
    };
});

app.filter('dateFormat', function() {
    return function(input) {
        if (input) {
            return input.split('T')[0];
        }
        return input;
    };
});

app.filter('sortByPrice', function() {
    return function(products, ascending) {
        return products.sort(function(a, b) {
            if (ascending) {
                return a.price - b.price;
            } else {
                return b.price - a.price;
            }
        });
    };
});

app.filter('sortBySize', function() {
    return function(products, ascending) {
        return products.sort(function(a, b) {
            if (ascending) {
                return a.size.localeCompare(b.size);
            } else {
                return b.size.localeCompare(a.size);
            }
        });
    };
});