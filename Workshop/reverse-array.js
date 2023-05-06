//With a for loop, create a JavaScript code that creates a new array in reverse order.

//bundle each array line into variables 'countDown'
const array1 = [1, 2, 3];
const array2 = [1, 3, 5, 7, 9, 11];
const array3 = [20, 50, 30, 60, 200];
const array4 = [1, -1, 2, -3, 5, -8, 13];

const countDown = [...array4, ...array3, ...array2, ...array1];

//apply 'countDown' variable into a 'for' loop to display input data in reverse order

for (let index = countDown.length - 1; index >= 0; index-- ) {
  console.log(countDown[index]);
}

