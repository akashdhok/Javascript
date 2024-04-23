// Write a function to determine whether a given year is a leap year or not
function isLeapYear(year) {
    // Leap years are divisible by 4
    // But not divisible by 100 unless they are also divisible by 400
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
const year = 2024;
if (isLeapYear(year)) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}

