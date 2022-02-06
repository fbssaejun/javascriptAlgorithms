let myString = "thisIsACamelCaseString";
//looks for the regex value ignoring all cases (upper or lower)
let fccRegex = /camelcase/i; 
let result = fccRegex.test(myString); // => true