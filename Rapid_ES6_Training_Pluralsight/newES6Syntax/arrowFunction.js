var getPrice = () => 5.99;
console.log(typeof getPrice);
//function

var getPrice = () => 5.99;
console.log(getPrice());
// 5.99
//in arrow function we can skup return AudioWorkletNode, whateer is there will be return

var getPrice = count => count * 4;
console.log(getPrice(2));
//8

var getPrice = (count, tax) => count * 4 * (1 + tax);
console.log(getPrice(2, 0.07));
//8.56

var getPrice = (count, tax) => {
  let price = count * 4;
  price *= 1 + tax;
  return price;
};
console.log(getPrice(2, 0.07));
8.56;
//when you declering with block word Return should be there to take the value out

//real purose of arrow functions it to hendle this keyword in a scope
document.addEventListener("click", function() {
  console.log(this);
});
// document

document.addEventListener("click", () => {
  console.log(this);
});
// Window {}

var invoice = {
  number: 123,
  process: function() {
    console.log(this);
  }
};
invoice.process();
// object = {
//     number : 123
//     process : function
// }

var getPrice = () 
=> 5.99;
console.log(typeof getPrice);
// SyntaxError: unexpected toke =>
// arro function needs to be in one line 

let getPrice = () => 5.99;
console.log(getPrice.hasOwnPropery("prototype"))
// false 
// with arrow finction you dont have acces to propery prototype 