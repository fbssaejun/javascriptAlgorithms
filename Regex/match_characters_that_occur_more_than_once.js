let difficultSpelling = "Mississippi";
let moreDifficultString = "ssasbscsdsss";
// the '+' symbol will look for all 's's from a string and return all 's's found.
// If there are consecutive 's' in the string, it will return them already concatenated.
// If there are other letters in between 's's, it will return each s separately in the array.
let myRegex = /s+/g; // Change this line

let result1 = difficultSpelling.match(myRegex);
let result2 = moreDifficultString.match(myRegex);

console.log(result1); // => ["ss", "ss"]
console.log(result2); // => ["ss", "s", "s", "s", "sss"]
