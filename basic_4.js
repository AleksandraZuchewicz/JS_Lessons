function square(x) {
  return x*x;
}
function addTwo(number) {
  return (number + 2);
}
//function addTwo(number) {
//  return (square(number) + 2);
//}
let result = square(2);
console.log(result);
let extra = addTwo(5);
console.log(extra);

let resultOne = square(5);
let resultTwo = addTwo(resultOne);
console.log(resultTwo);

console.log(addTwo(square(5)));

// Task 1
// Write function which takes 2 parameters: base and height, then returns the area of rectangle.
function calcRectangleArea (base, height){
  return base*height;
}
// Task 2
// Write function, which takes area of rectangle as parameter, then returns radius of the circle with equivalent area (areaOfCircle = 3.14*r^2)
// Use function from Task 1 to calculate radius of circle which area is equivalent of rectangle with b = 20, h = 10;
function radiusOfCircle(rectangleArea) {
  return Math.sqrt(rectangleArea/3.14);
}
console.log(radiusOfCircle(calcRectangleArea(20,10)));

let rectArea = calcRectangleArea(20,10);
let radius = radiusOfCircle(rectArea);
console.log(radius);
