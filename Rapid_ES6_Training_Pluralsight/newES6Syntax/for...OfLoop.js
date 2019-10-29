let categories = ["hardware", "software", "vaporeware"];
for (let item of categories) {
  console.group(item);
}
//hardware
//software
//vaporeware

let categories = [, ,];
for (let item of categories) {
  console.group(item);
}
// undefined
// undefined
// undefined

let codes = "ABCDE";
let count = 0;
for (let code of codes) {
  count++;
}
console.log(count);
//5
