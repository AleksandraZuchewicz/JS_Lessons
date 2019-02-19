// JavaScript Objects Example
let dog = {
  "name": "Max",
  "age" : 2,
  "sex" : "Male",
  "alive" : true,
  "owner" : {
    "name" : "Ola",
    "age" : 25,
  }
}

// Dot notation - way of accesing data in objects
console.log(dog.age + " " + dog.name + " " + dog.owner.name);

// Bracket notation - alternative way in accesing data in objects
console.log(dog["age"] + " " + dog["name"] + " " + dog["owner"]["name"]);

let nameOfField = "age";
console.log(dog[nameOfField]);
console.log(dog.nameOfField);

// Array Example (indexed from 0)
let dogArray = ["Max", 2, "Male", true, {"name": "Ola", "age": 25}];
console.log(dogArray[2]);
console.log(dogArray[4].age);
console.log({"name": "Ola", "age": 25}.name);
