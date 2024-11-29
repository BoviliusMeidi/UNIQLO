const app = angular.module('myApp', ['ngRoute']);
const API_URL = "http://127.0.0.1:3000/api/";
const UI_URL = "http://127.0.0.1:5500/frontend/views/";

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
