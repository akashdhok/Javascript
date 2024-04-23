// Write a function to get the largest even number from an array of integers
function largestEvenNumber(arr) {
    let largestEven = null;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0 && (largestEven === null || arr[i] > largestEven)) {
            largestEven = arr[i];
        }
    }

    return largestEven;
}
const numbers = [1, 3, 5, 8, 10, 15, 6, 12];
const largestEven = largestEvenNumber(numbers);
console.log("Largest even number:", largestEven);

