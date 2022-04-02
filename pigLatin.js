/*

QUESTION)

Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.

*/

const translatePigLatin = (str) => {

  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const firstLetter = str[0]
  const stripped = str.slice(1, str.length)

  //If first letter starts with a vowel, return a string with 'ay' concatenated at the end
  if (vowels.includes(firstLetter)) {
    return `${str}way`
  }
  //Loop through each letter in str, if it meets a vowel return a string with the previous letters sliced from str, attached to the end and 'ay' concatenated at the end
  for (let i = 0; i < str.length; i++) {
    if(vowels.includes(str[i])) {
      let stripped = str.slice(i, str.length)
      let attach = str.slice(0, i)
      return `${stripped}${attach}ay`
    }
  }
  //If no vowels are in a string, return a string with 'ay' concatenated at the end
  return str + 'ay'
}

translatePigLatin("consonant"); // => "onsonantcay"
