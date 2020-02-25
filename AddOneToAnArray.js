//Write a function that takes an array of integers and returns the sum of the integers after adding 1 to each.
let arrayToTest = [1, 2, 3, 4, 5];

let sumOfArrayPlusOnetoEach = function(array) {
    let newArray = []
    for (const el of array) {
        let sum = el + 1
        let newArray2 = newArray.push(sum)
    }
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let sumOfArray = newArray.reduce(reducer);
    console.log(sumOfArray);
    return sumOfArray;

}
sumOfArrayPlusOnetoEach(arrayToTest);