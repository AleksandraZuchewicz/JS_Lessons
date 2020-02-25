//Write a function called lucky_sevens which takes an array of integers and 
//returns true if any three consecutive elements sum to 7.

function lucky_sevens(array) {
    if (array.length < 3) {
        console.log("not possible");
        return false;
    } else {
        for (let i = 0; i < array.length - 2; i++) {
            if ((array[i] + array[i + 1] + array[i + 2]) === 7) {
                console.log("true")
                return true;
            }
        }

    }
    console.log("false");
    return false
}


lucky_sevens([1, 2, 3, 4, 5, 6, 7, 8])
lucky_sevens([1, 3, 3, 4, 5, 6, 7, 8])