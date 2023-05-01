// Create a JavaScript code that accepts an array of numbers 
// Then returns a new array with only the odd numbers from the original array. 
// If there is only one odd number in the array, return an array with that single value.

const array1 = [2, 4, 6, 8, 11, 20, 15, 22];
const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const array3 = [70, 42, 55, 81, 21, 91, 34];
const array4 = [2, 4, 6, 8, 10, 11, 12];
// Bundled each input arrays into "const nums"


const nums = [...array1, ...array2, ...array3, ...array4];

let odds = [];
for (const num of nums) {
    if (num % 2 === 1) {
        odds.push(num);
    }
}
console.log(odds);
// expected print: [11, 15, 1, 3, 5, 7, 9, 55, 81, 21, 91, 11]






