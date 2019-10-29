// let new keyword
// const stadnds from constand
// block scoping - when we declere a varaible in a curly brackets that becase a scope for this variable

console.log(productID);
var productID = 12;
// in console: Undefined
//Hoisting is JavaScript's default behavior of moving declarations to the top.

console.log(productID);
let productID = 12;
// ReferenceError: productID is not defined
// no hoisting when we using let keyword

let productID = 12;
console.log(productID);
//12
// declered before cariable was call

let productID;
console.log(productID);
// undefined

let productID = 12;
{
  let productID = 2000;
}
console.log(productID);
// 12

{
  let productID = 2000;
}
console.log(productID);
// Reference Error: ProducyID is nor defined

function updateProductID() {
  productId = 12;
}
let productId = null;
updateProductID();
console.log(productID);
// 12

let productId = 12;
for (let productID = 0; productID < 10; productID++) {}
console.log(productID);
//12

let updateFuntions = [];
for (var i = 0; i < 2; i++) {
  updateFuntions.push(function() {
    return i;
  });
}
console.log(updateFuntions[0]);
//2

let updateFuntions = [];
for (let i = 0; i < 2; i++) {
  updateFuntions.push(function() {
    return i;
  });
}
console.log(updateFuntions[0]);
//0

const MARK = 1000;
console.log(MARK);
//1000
// for const variable use the uppercase
