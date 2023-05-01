const cars = ["Honda", "Toyota", "Ford", "Subaru"];
//console.log("Cars Array:", cars);
// Transform above array to reflect "["Hyundai", "Toyota", "Mercedes", "Ford", "Audi"]" instead.
cars.pop(); //removes Subaru (end)
cars.pop(); //removes Ford (end)
cars.push("Mercedes", "Ford", "Audi"); //adds back "Mercedes", "Ford", "Audi".
cars.shift(); //removes "Honda"
cars.unshift("Hyundai"); //adds in "Hyundai"
console.log(cars) // New list will print > "Hyundai", "Toyota", "Mercedes", "Ford", "Audi"

const sentence = "There once was a donkey named Eeyore."
let counter = 0;

for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === "e") {
        counter++
    }
}

console.log(counter); //returns with "7"