//Task.1 Prepare a function which takes array and return reversed array.
let array = [1,2,3];
function reverse(arr){
  let reversedArr =[];
  for (let i = arr.length-1; i >=0; i--) {
    let currentValue = arr[i];
    reversedArr.push(currentValue);
  }
  return reversedArr;
}
console.log(reverse(array));
//Task.2 Prepare a function which takes a string as argument and return true if the string is pallindrome and false otherwise.
let testString = "kayak";
function checkPallindrome(string){
  let array = string.split("");
  for (let i = 0, j=array.length-1; i<j; i++,j--) {
    if (array[i] != array[j]) {
      return false;
    }
  }
  return true;
}
console.log(checkPallindrome(testString));
console.log(checkPallindrome("anagra"));
//Task.3 Prepare a function which takes and e-mail adress as argument and returns domein part of adress.
//Task.4 Given a string of form number1-number2-number3 etc. Prepare afunction which counts digints in each number and sort list of numbers digits descendlty.
