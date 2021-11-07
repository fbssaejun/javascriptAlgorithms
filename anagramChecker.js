

/* ================================================== SOLUTION 1 ================================================================ */

const anagramChecker = (str1, str2) => {

  //Remove any special characters, convert all letters to lowercase
  str1 = str1.replace(/[^\w]/g, '').toLowerCase()
  str2 = str2.replace(/[^\w]/g, '').toLowerCase()

  //If two string's length does not match, return false(shor circuiting)
  //Else, compare two equally sorted strings and return a boolean value
  return str1.length !== str2.length ? false
        :
         str1.split('').sort().join('') === str1.split('').sort().join(''); 

}

console.log(anagramChecker("silent!!!!", "LisTen!")) // => Return true



/* ================================================== SOLUTION 2 ================================================================ */

//Helper function that creates a hashtable from given string
const hashConverter = (str) => {
  const obj = {}

  for(let char of str) {
    obj[char] = obj[char] + 1 || 1
  }

  return obj
}

console.log(hashConverter("anthony")) // Output: { a: 1, n: 2, t: 1, h: 1, o: 1, y: 1 }

//Different solution using hash table
const anagramChecker2 = (str1, str2) => {

  //Remove any special characters, convert all letters to lowercase
  str1 = str1.replace(/[^\w]/g, '').toLowerCase()
  str2 = str2.replace(/[^\w]/g, '').toLowerCase()

  const str1Map = hashConverter(str1)
  const str2Map = hashConverter(str2)

  for(let char in str1Map) {
    if(str2Map[char] !== str1Map[char]) {
      return false
    }
  }

  return true;

}

console.log(anagramChecker2("silent", "listen!"))



