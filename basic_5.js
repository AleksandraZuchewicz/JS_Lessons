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
