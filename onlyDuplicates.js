/*
QUESTION)

Given a string, remove any characters that are unique from the string.
The string should return in order of appearance.

Example:

input: "abccdefee"
output: "cceee"

*/

// SOLUTION 1:
function onlyDuplicates(str) {
  let strMap = {}
  let strArr = str.split('')
  strArr.forEach(letter => strMap[letter] = strMap[letter] + 1 || 1)

  return strArr.filter(letter => strMap[letter] > 1).join('')
}

// SOLUTIOJN 2:
function onlyDuplicates(str) {
  return str.split("").filter(char => str.indexOf(char) != str.lastIndexOf(char)).join("")
}

console.log(onlyDuplicates('abccdefee')) // => "cceee"
console.log(onlyDuplicates('hello')) // => "ll"
