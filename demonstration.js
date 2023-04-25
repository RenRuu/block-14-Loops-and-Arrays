
// Fruit Salad
// Modify the array using various array methods:
// .pop(), .push(), .unshift(), .shift()

// As you modify the array, check the array.length to see how the array changes.
const fruits = ["lemon", "strawberry", "grape", "orange", "lime"];
console.log("fruits array: ", fruits)


// Remove lime from the end of fruits array.
// Your code below:
console.log("I expect 'lime': ",fruits.pop());


// Remove orange from the end of fruits array.
// Your code below:
console.log("I expect 'orange': ",fruits.pop());


// Add lime to the end of the fruits array.
// Your code blow:
fruits.push('lime');
console.log("expect lime at end of array", fruits);


// Add banana and dragonfruit to the end of the fruits array.
// Your code below:
fruits.push("banana");
fruits.push("dragonfruit");
console.log("expect banana and dragonfruit at end", fruits)



// Remove the first fruit in the fruits array.
// Your code below:
console.log("expecting lemon: ", fruits.shift());



// Add apple to the beginning of the fruits array.
// Your code below:
fruits.unshift("apple")
console.log("expect apple at the beginning", fruits);



// Add peach and watermelon to the beginning of the fruits array.
// Your code below:
fruits.unshift("peach", "watermelon")
console.log("expect peach and watermelon at the beginning", fruits);