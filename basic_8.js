// all below definitions are in global scope
//let variableGlobal = 4;
//const variableGlobal = 4;
//var variableGlobal = 4;
variableGlobal = 4;
variableOne = 77;

function scopeOne(object) {
  let variableOne = 1;
  const variableTwo = 2;
  for (let i = 0; i < 1; i++) {
    var variableTree = 3;
    variableGlobalTwo = 5;
  }
  console.log(variableOne);
  //console.log(variableTwo);
  console.log(variableTree);
  console.log(variableGlobal);
}
function scopeTwo(object) {
  let variableOne = 66;
  let variableFour = 6;
  console.log(variableOne);
  console.log(variableGlobalTwo);
  let scopeThree = function() {
    let variableFive = 7;
    console.log(variableGlobalTwo);
  };
}

scopeOne();
scopeTwo();
