/*

QUESTION)

Flatten a nested array. You must account for varying levels of nesting.

<!> Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() method <!>
*/

/* ================================================== SOLUTION 1 ================================================================ */

const steamrollArray1 = (arr) => {
  const flattenedArray = [];
  // Loop over array contents
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      // Recursively flatten entries that are arrays and push into the flattenedArray
      flattenedArray.push(...steamrollArray(arr[i]));
    } else {
      // Copy contents that are not arrays
      flattenedArray.push(arr[i]);
    }
  }
  return flattenedArray;
};

steamrollArray1([1, [2], [3, [[4]]]]); // => [1,2,3,4]

/* ================================================== SOLUTION 2 ================================================================ */

const steamrollArray2 = (arr) => {
  const flatStringArray = arr.toString().split(',');
  return flatStringArray.map(el => {
    if (el === "[object object]") {
      return {};
    } else if (isNaN(el)) {
      return el;
    } else {
      return parseInt(el);
    }
  });
};

steamrollArray2([1, [2], [3, [[4]]]]); // => [1,2,3,4]
