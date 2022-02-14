let quoteSample = "Blueberry 3.141592653s are delicious.";
//Match all letters between given alphabet range & numbers between given range
let myRegex = /[h-s2-6]/ig; 
let result = quoteSample.match(myRegex); 


console.log(result); // => ["l", "r", "r", "3", "4", "5", "2", "6", "5", "3", "s", "r", "l", "i", "i", "o", "s"]
