
//Replaces beofre word in a sentence with after word
function myReplace(str, before, after) {
  //Checks if before word starts with a capital letter
	return before.split('')[0] === before.split('')[0].toUpperCase()
  //If yes, replace after word starting with a capital letter as well
  ? str.replace(before, after[0].toUpperCase() + after.slice(1,after.length))
  :
  //If not, always have the after word lowercased
  str.replace(before,after[0].toLowerCase() + after.slice(1,after.length))
}


myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped") // => A quick brown fox leaped over the lazy dog

myReplace("He is Sleeping on the couch", "Sleeping", "sitting") 
// => He is Sitting on the couch