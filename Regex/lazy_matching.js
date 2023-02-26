/*
QUESTION)
Fix the regex /<.*>/ to return the HTML tag <h1> and not the text "<h1>Winter is coming</h1>". Remember the wildcard . in a regular expression matches any character.
*/
let text = "<h1>Winter is coming</h1>";

// Regex are by default greedy, so if we do not include '?' in the expression it will find the largest sub-string possible to fit the pattern.
// In this case, if the expression was '/<.*>/', the result would be the entire string itself.
// We only want to return the first h1 tag, so we include '?' here to return a string when the expression finds the first '>'.
let myRegex = /<.*?>/;
let result = text.match(myRegex);

console.log(result) // => "<h1>"
