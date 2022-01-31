/*

QUESTION)

Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.

*/

const mutation = (arr) => {
  const firstStr = arr[0].toLowerCase().split('');
  const secondStr = arr[1].toLowerCase().split('');

  for(let letter of secondStr) {
    if(!firstStr.includes(letter)) {
      return false
    }
  }
  return true
}

mutation(["hello", "hey"]); // => false, since string 'hello' does not contain letter 'y'.