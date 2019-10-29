let showCat = function(prodID, ...categories) {
  console.log(categories instanceof Array);
};
showCat(123, "search", "advertising");
// true

let showCat = function(prodID, ...categories) {
  console.log(categories);
};
showCat(123, "search", "advertising");
// ['search','advertising']

let showCat = function(prodID, ...categories) {
  console.log(categories);
};
showCat(123);
// []

let showCat = function(prodID, ...categories) {};
console.log(showCat.length);
//1
// because of the product ID

let showCat = function(prodID, ...categories) {
  console.log(showCat.length);
};
showCat(123, "search", "advertising");
//3

let showCat = new Function("...categories", "return categories");
console.log(showCat("search", "advertising"));
//['search','advertising']

let prices = [1, 2, 3, 4, 5, 6, 7];
let macProce = Math.max(...prices);
console.log(maxPrice);
// 7

let prices = [1, 2, 3, 4, 5, 6, 7];
let newProceArray = [...prices];
console.log(newProceArray);
// [1, 2, 3, 4, 5, 6, 7];
