/*

QUESTION)

Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

*/

const getIndexToIns = (arr, num) => {
  //Check if array has any items
  if(!arr.length) return 0;
  //Sort array by ascending order
  const sorted = arr.sort((a,b) => a - b);
  //Loop through sorted array, return the index where num is smaller or equal to the looping number
  for(let i = 0; i < sorted.length; i++) {
    if(sorted[i] >= num) {
      return i
    }
  }
  //If num is the biggest value from the array, return the last index of the array + 1, which is the length of the array 
  return arr.length
}
