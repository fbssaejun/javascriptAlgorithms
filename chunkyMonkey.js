/*

QUESTION)

Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

*/

const chunkArrayInGroups = (arr, size) => {
  //Initialize empty array to store child arrays and return at the final steip of this  function
  let x = [];
  //Initialize empty array to store values from arr, only until it is the length of input size (placeholder)
  let y = [];

  //Loop through array, add array's values to y until its length becomes equivalent to the size. When it does, push y to x as a sub  array and empty y to become a new  placeholder
  for (let i = 0; i < arr.length; i++) {
    y.push(arr[i]);
    if (y.length === size) {
      x.push(y);
      y = [];
    }
  }

  //If there are any  remainders in y, push it as a subarray to x
  if (y.length) x.push(y);
  //Return final result
  return x;
};
chunkArrayInGroups(["a", "b", "c", "d"], 2);
