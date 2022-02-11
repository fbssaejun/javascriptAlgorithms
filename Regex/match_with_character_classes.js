let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
//Use character class to find all characters inside [] globally, ignoring case
let vowelRegex = /[aeiou]/ig; 
//Returns all charaters from character class within matching string
let result = quoteSample.match(vowelRegex); 

console.log(result); // => ["e", "a", "e", "o", "u", "i", "e", "a", "o", "e", "o", "e", "I", "a", "e", "o", "o", "e", "i", "o", "e", "o", "i", "e", "i"]
