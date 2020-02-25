//You will be given 2 parameters: a low and high number. Your goal is to print all numbers between low and high, and for each of these numbers print whether or not 
//the number is divisible by 3. If the number is divisible by 3, print the word "div3" directly after the number.

function print(low, hight) {
    let arrayToPrint = [];
    for (let i = low + 1; i < hight; i++) {
        if (i % 3 === 0) {
            arrayToPrint.push(i + "div3")
        } else {
            arrayToPrint.push(i)
        }
    }
    console.log(arrayToPrint)
    return arrayToPrint;
}

print(10, 100);