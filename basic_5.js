let numbers = [2,3,4,5,4,3,2];

// Print all values
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Sum of all values
let sum = 0;
for (let i = 0; i < numbers.length; i++){
  sum = sum + numbers[i];
}
console.log(sum);

// Calculate average of all values
let average = sum/numbers.length;
console.log(average);
// Arrays methods
let array = [4,6,8,22,6,5,99];
let array2 = [346,897,123,675,834];
let twoDimensionalArray = [[1,2,3],[4,5,6]];
let item = twoDimensionalArray[0][2];
//.concat()
console.log(array.concat(array2));
console.log(array.concat(array,array2,twoDimensionalArray));
//.filter()
function underTwentyFilter(element,index,arr){
  let isLessThanTwenty = element < 20;
  return isLessThanTwenty;
}

let filteredArray = array.filter(underTwentyFilter);
console.log(filteredArray);
console.log(array);
//.find()
function aboveTwentyFinder(element){
  let isAboveTwenty = element >20;
  return isAboveTwenty;
}
let aboveTwenty = array.find(aboveTwentyFinder);
console.log(aboveTwenty);
//.forEach()
let newArray = [];
function addTwo(element){
  let valueOfAddTwo = element + 2;
  newArray.push(valueOfAddTwo);
}
array2.forEach(addTwo);
console.log(newArray);
//.includes()
console.log(newArray.includes(59));
//.indexOf()
console.log(newArray.indexOf(899));
//.join()
console.log(array.join("-"));
//.slice()
console.log(array.slice(2,7));
//.pop()
//.push()
//.shift()
let queue = [];
queue.push(2);
queue.push(4);
let firstElement = queue.shift();
let secondElement = queue.shift();
console.log(firstElement,secondElement);
let stack = [];
stack.push(45);
stack.push(65);
console.log(stack.pop(),stack.pop());
//.map()
let array3 = [1,2,3];
function square(element){
  let squaredValue = (element*element);
  return squaredValue;
}
console.log(array3.map(square));
//.sort()
let sortedArray = array.sort();
console.log(sortedArray);
function ascendingSort(a,b){
  if (a>b) {
    return 1;
  }
  if (a<b){
    return -1;
  }
  if (a==b){
    return 0;
  }
}
console.log(array.sort(ascendingSort));

//.reduce()
function sumReducer(accumulator,currentValue){
  let currentSum = accumulator+currentValue;
  return currentSum;
}
console.log(array3.reduce(sumReducer, 0));
