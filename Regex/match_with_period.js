let exampleStr = "Let's have fun with regular expressions!";
//Match anything with Wildcard Period. This looks for any matching word that ends with 'un'
let unRegex = /.un/; 
let result = unRegex.test(exampleStr);

console.log(result); // => true