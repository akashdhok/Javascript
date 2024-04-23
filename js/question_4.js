// Write a function to return the sum of all the elements in the array.
  
  function arraySum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
const sum = arraySum(numbers);
console.log("Sum of the array elements:", sum);
