let getProduct = function(productID = 1000) {
  console.log(productID);
};
getProduct();
//1000

let getProduct = function(productID = 1000, type = "software") {
  console.log(productID + ", " + type);
};
getProduct(undefined, "hardware");
// 1000, hardware
// when we have indefined in a varabile java acreap will search for defould value of this variable, if there is one

let getTotal = function(price, tax = price * 0.07) {
  console.log(price + tax);
};
getTotal(5.0);
//5.35
let baseTax = 0.07;
let getTotal = function(price, tax = price * baseTax) {
  console.log(price + tax);
};
getTotal(5.0);
//5.35

let baseTaxGenerator = () => 0.07;
let getTotal = function(price, tax = price * baseTaxGenerator()) {
  console.log(price + tax);
};
getTotal(5.0);
//5.35

let getTotal = function(price, tax = 0.07) {
  console.log(arguments.length);
};
getTotal(5.0);
// 1
// arguments.length skips any variable declered in a function, and read only the variable declered during calling the functin

let getTotal = function(price = adjustment, adjustment = 1.0) {
  console.log(price + adjustment);
};
getTotal();
// SyntaxError: Use before declaration
// adjustment was declered after the price, program doesnon see value of adjutment

let getTotal = function(price = adjustment, adjustment = 1.0) {
  console.log(price + adjustment);
};
getTotal(5.0);
// 6
