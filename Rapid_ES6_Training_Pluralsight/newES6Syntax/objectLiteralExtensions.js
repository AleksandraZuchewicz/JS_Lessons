let price = 5.99,
  quantity = 30;
let productView = {
  price,
  quantity
};
console.log(productView);
// {price : 5.99,
// quantity: 30}

let price = 5.99,
  quantity = 30;
let productView = {
  price,
  quantity,
  calculateValue() {
    return this.price * this.quantity;
  }
};
console.log(productView.calculateValue());
//59.90

let price = 5.99,
  quantity = 30;
let productView = {
  price,
  quantity,
  calculateValue() {
    return this.price * this.quantity;
  }
};
console.log(productView["calculateValue"]());
//59.90

let field = "dynamicField";
let price = 5.99;
let productView = {
  [field]: price
};
console.log(productView);
//{dynamicField: 5.99}
