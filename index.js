"use strict";
exports.__esModule = true;
var restaurants_1 = require("./restaurants");
var orders_1 = require("./orders");
/// Add your getMaxPrice() function below:
function getMaxPrice(name) {
    switch (name) {
        case orders_1.PriceBracket.low:
            return 10.0;
        case orders_1.PriceBracket.Medium:
            return 20.0;
        case orders_1.PriceBracket.High:
            return 30.0;
    }
}
/// Add your getOrders() function below:
function getOrders(price, orders) {
    var filteredOrders = [];
    orders[0].filter(function (order) { return order.price <= getMaxPrice(price); });
    orders.forEach(function (restaurant) {
        var res = restaurant.filter(function (order) { return order.price <= getMaxPrice(price); });
        filteredOrders.push(res);
    });
    return filteredOrders;
}
/// Add your printOrders() function below:
function printOrders(restaurants, order) {
    restaurants.forEach(function (restaurant, index) {
        if (orders_1.orders[index].length > 0) {
            console.log(restaurant.name);
            orders_1.orders[index].forEach(function (order) {
                console.log("** ".concat(order.name, " :: ").concat(order.price));
            });
        }
    });
}
/// Main
var elligibleOrders = getOrders(orders_1.PriceBracket.low, orders_1.orders);
//console.log(elligibleOrders)
printOrders(restaurants_1.restaurants, elligibleOrders);
