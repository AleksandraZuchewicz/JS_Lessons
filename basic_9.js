//arrow fuction example
let arrowFunction = x => {
  return x * x;
};

//new function
function prepareAddTo(number) {
  let addTo = numberTwo => {
    return number + numberTwo;
  };
  return addTo;
}
let addToFive = prepareAddTo(5);
let addResult = addToFive(10);

console.log(addResult);
console.log(prepareAddTo(5)(10));

let addToHundred = prepareAddTo(100);
addToHundred(5);
// using backtic `` to create multi line strings (string template literals)
const text = `
ddasdsa
dsasdasd
dsadsadas
`;
