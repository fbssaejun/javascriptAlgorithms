/*

QUESTION)

Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

*/

const dropElement = (arr, func) => {
  // Loop through argument array, if callback function returns true then return all the elements after the condition
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) return arr.slice(i)
  }
  return []
}

dropElements([1, 2, 3], function(n) {return n < 3; }); // => [1,2]
dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) // => [3, 4]
