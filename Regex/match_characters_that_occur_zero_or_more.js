//Finds "A" or "a" that occurs zero or more times. If either one occurs zero times, it will ignore it and  only return the one that occured, if both are not included, match will return null
let chewieRegex = /Aa*/; 
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let notChewieQuote = "Fabulous!"

let result = chewieQuote.match(chewieRegex);
let result2 = notChewieQuote.match(chewieRegex);

console.log(result); // => ['Aaaaaaaaaaaaaaaa']
console.log(result2); // => null