/*

QUESTION) 

Flatten a nested array. You must account for varying levels of nesting.

*/

const steamrollArray = (arr) => {
  // Map through array and if an item is an array, flatten out the array until it is not a nested array
  return  arr.map(el => {
    if(Array.isArray(el)) {
      return el.flat(Infinity)
    } else {
    return el
    }
    // Flatten out final array
  }).flat(Infinity)
}

steamrollArray([1, [2], [3, [[4]]]]); // => [1, 2, 3, 4]