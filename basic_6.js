// Operatrion on strings = lancuch znakow
let text = "Quality Assurance is very important";
// Usage of escape character \ before quotation mark. Escpame character is needed to idnicate that there is a quotation mark in string and it not quotation mark edning whole string.
let text2 = new String("Quality Assurance is \"very\" important \u15D5");
console.log(text2);
// Interesting methods of String objects
//.charAt()
let letter = "Quality".charAt(2);
let letter2 = text.charAt(5);
console.log(letter+letter2);
//.concat()
let string = "Quality";
let string2 = "Assurance";
console.log(string.concat(string2));
//.endsWith()
console.log(string.endsWith("k"));
console.log(string.endsWith("ity"));
//.includes()
console.log(string.includes("l"));
//.indexOf()- position of letter
console.log(string.indexOf("l"));
console.log(string.indexOf("ity"));
//.replace()
console.log(string2.replace("s","lg"));
console.log(text.replace("Assurance",string));
//.split() returns Array
console.log(text.split(" "));
//.toLowerCase()
console.log(text.toLowerCase());
//.toUpperCase()
console.log(text.toUpperCase());
//.substring() cut inclisive firts index and exclusive last index
console.log(text.substring(8,17));
//.trim()
console.log("     row  ".trim());
