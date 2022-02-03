/*

QUESTION)

Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

*/

const bouncer = (arr) => {
  return arr.filter(el => el);
}

bouncer([7, "ate", "", false, 9]) // => [7, "ate", 9]