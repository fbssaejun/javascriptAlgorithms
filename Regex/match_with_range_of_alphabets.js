let quoteSample = "The quick brown fox jumps over the lazy dog.";
//Using hyphen will set a range of alphabets. This regex matches all characters within that range, globally & ignoring case.
let alphabetRegex = /[a-z]/ig;
let result = quoteSample.match(alphabetRegex); 

console.log(result); // => ["T", "h", "e", "q", "u", "i", "c", "k", "b", "r", "o", "w", "n", "f", "o", "x", "j", "u", "m", "p", "s", "o", "v", "e", "r", "t", "h", "e", "l", "a", "z", "y", "d", "o", "g"]


/* ===================================================================================================================================== */

let catStr = "cateaat";
let batStr = "bat";
let matStr = "mat";
//Matches all words that start with the alphabet in the range from a to e, ends with 'at'.
let bgRegex = /[a-e]at/;
console.log(catStr.match(bgRegex)) // => cat
console.log(batStr.match(bgRegex)) // => bat
console.log(matStr.match(bgRegex)) // => null
