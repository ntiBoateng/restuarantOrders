import { restaurants, Restaurant } from "./restaurants";
import { orders, Order, PriceBracket } from "./orders";

/// Add your getMaxPrice() function below:
function getMaxPrice(name: PriceBracket ){
switch(name){
case PriceBracket.low:
return 10.0
case PriceBracket.Medium:
return 20.0
case PriceBracket.High:
return 30.0
}
}
/// Add your getOrders() function below:
function getOrders(price:PriceBracket, orders:Order[][]){
let filteredOrders:Order[][]=[];
orders[0].filter((order:Order)=>order.price <= getMaxPrice(price))

orders.forEach((restaurant: Order[])=>{
  let res =restaurant.filter((order:Order)=>order.price <= getMaxPrice(price))
  filteredOrders.push(res)
})
return filteredOrders
}
/// Add your printOrders() function below:
function printOrders(restaurants: Restaurant[], order: Order[][]){
restaurants.forEach((restaurant:Restaurant, index: number)=>{
if(orders[index].length >0){
  console.log(restaurant.name)
  orders[index].forEach((order)=>{
    console.log(`** ${order.name} :: ${order.price}`)
  })
}
})
}
/// Main
const elligibleOrders = getOrders(PriceBracket.low, orders);
//console.log(elligibleOrders)
printOrders(restaurants, elligibleOrders);
