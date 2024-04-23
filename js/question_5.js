// Write a function to swap pairs of adjacent digits of a given integer of even length
function swapAdjacentDigits(number) {
    // Convert the number to a string to work with individual digits
    const numberString = String(number);
    let swappedNumber = "";
    for (let i = 0; i < numberString.length; i += 2) {
        if (i + 1 < numberString.length) {
            swappedNumber += numberString[i + 1] + numberString[i];
        } else {
            swappedNumber += numberString[i];
        }
    }
    return parseInt(swappedNumber, 10);
}

const number = 123456;
const swapped = swapAdjacentDigits(number);
console.log("Swapped number:", swapped);

