/*

You are given two arrays and an index.

Copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.


*/

/* ================================================== SOLUTION 1 ================================================================ */

const frankenSplice = (arr1, arr2, n) => {
  if(!arr1.length || !arr2.length) return arr1.concat(arr2) 
	let arr = [];
  for(let i = 0; i < arr2.length; i++) {
  	if(i === n) arr.push(...arr1)
    arr.push(arr2[i])
  }
  return arr
}

frankenSplice([1, 2, 3], [4, 5, 6], 1); // => [4,1,2,3,5,6]

/* ================================================== SOLUTION 1 ================================================================ */

const frankenSplice = (arr1, arr2, n) => {
  //Make a local copy since we cannot mutate input array
  let localArr = [...arr2]
  //Insert copy of arr1 into local array at the index of n
  localArr.splice(n, 0, ...arr1);
  return localArr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1); // => [4,1,2,3,5,6]
