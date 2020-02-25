class Task {}
console.log(typeof Task);
// function because of contructor

class Task {}
let task = new Task();
console.log(typeof task);
// object

class Task {}
let task = new Task();
console.log(task instanceof Task);
// true

class Task {
  showId() {
    console.log("99");
  }
}
let task = new Task();
task.showId();
// 99

class Task {
  showId() {
    console.log("99");
  }
}
let task = new Task();
console.log(task.showId() === Task.prototype.showId);
// true

class Task {
  constructor() {
    console.log("constructor Task");
  }
  showId() {
    console.log("99");
  }
}
let task = new Task();
// constructing Task = because during creating new Instance of Task, costructor is called first 

class Task {
    let taskId = 9000; 
}
// syntax error not allowed to declere variable inside the class

let newClass = class Task {
    constructor(){
        console.log('constructing task')
    }
}
new newClass;
// construcitng task 

let Task = function(){
    console.log('constructing Task')
}
let task = {};
Task.call(task);
// constructing Task

class Task {
    constructor(){
        console.log("constructing Task")
    }
}
let task = {};
Task.call(task)
//Error: class constructor cannot be called with the new keyword 