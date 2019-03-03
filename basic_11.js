//Clousure example
function prepareAddTo(number) {
  let addTo = numberTwo => {
    return number + numberTwo;
  };
  return addTo;
}
let addToFive = prepareAddTo(5); // addToFive is a closure. It contains not only addTo function but also scope in which addTwo was created. It has number == 5 in memory.
let addResult = addToFive(10);

function createWriter(number) {
  let doubleNumber = number * 2;
  let writerFunction = () => {
    console.log(doubleNumber);
  };
  return writerFunction;
}
let writer = createWriter(5);

writer();
