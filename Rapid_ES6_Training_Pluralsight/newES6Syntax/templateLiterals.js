let invoice = "1350";
console.log(`Invoice Number: ${invoice}`);
// Invoice number: 1350

let invoice = "1350";
console.log(`Invoice Number: \${invoice}`);
// Invoice number: ${invoice}
// no interpolation takes place with backslash

let message = `A
B
C`;
console.log(message);
//A
//B
//C

let invoiceNumber = "1234";
console.log(`Invoice number: ${"INV-" + invoiceNumber}`);
//invoice number: INV-1234
