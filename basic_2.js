let text = "number";
let text2 = "number2";
let text3 = text +" " + text2 + " "+ 122;
  console.log(text3);

for (let i = 0; i < 10; i = i+1) {
  console.log("Execution number: " + i);
}

let i = 1;
while (i < 100) {
  console.log(i);
  i = i + i;
}
function writeText (){
  console.log("text");
}

writeText ();
writeText ();

function square (x) {
  let square = x * x;
  console.log(square);
}

square(3);
