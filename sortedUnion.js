/*

QUESTION)

Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.


e.g) uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].

*/

function uniteUnique(arr) {
  //Declare empty variable to push in values from arguments
  let combinedArr = [];
  // Loop through the arguments object to truly make the program work with two or more arrays
  // instead of 3.
  for (let array of arguments) {
    //Loop through all arrays from arguments, push only values inside each array to 'combinedArr'
    combinedArr.push(...array)
  }
  //Return a an array of a new object Set with combined array passed in, to remove duplicate values and only 
  //return distinct values
  return [...new Set(combinedArr)]
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]); // => [1, 3, 2, 5, 4]