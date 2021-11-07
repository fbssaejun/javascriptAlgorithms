
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

console.log(anagramChecker("silent!!!!", "LisTen!"))