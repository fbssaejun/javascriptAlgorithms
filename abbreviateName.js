/*
QUESTION)

Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F

*/

// SOLUTION 1:
function abbrevName(name){
  return name.split(" ").map(word => word[0].toUpperCase()).join(".")
}

// SOLUTIOJN 2:
function abbrevName(name){
  return name.split(" ").map(word => word[0].toUpperCase()).join(".")
}

console.log(abbrevName("Sam Harris")) // => "S.H"
console.log(abbrevName("bRiAN hARVEY")) // => "B.H"
