let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; 
//Extracts regex string from string that you are matching
let result = extractStr.match(codingRegex); 

console.log(result); // => ["coding"]


let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /something/; 
//Extracts regex string from string that you are matching
let result = extractStr.match(codingRegex); 

console.log(result); // => null