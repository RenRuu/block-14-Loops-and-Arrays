let phrase = "hello";
let vowels = ['a', 'e', 'i', 'o', 'u'];
let numVowels = 0;
let numConsonants = 0;

// now we run a for loop with each letter of the variable 'phrase' being checked

for (let i = 0; i < phrase.length; i++) {
  let letter = phrase[i];
  if (vowels.includes(letter)) {   // if statement checks if our variable 'phrase' includes any of the letters in the array in 'vowels'
    numVowels++;   // if it does, add 1 to the numVowels counter
  } else {
    numConsonants++;  // if letter is not included in variable 'vowels' add 1 to numConsonants counter
  }
}