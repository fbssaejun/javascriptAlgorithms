let quoteSample = "3 blind mice.";
//Match all characters including special characters excluding vowels and numbers
let myRegex = /[^aeiou^0-9]/gi; 
let result = quoteSample.match(myRegex); 

console.log(result); // => [" ", "b", "l", "n", "d", " ", "m", "c", "."]