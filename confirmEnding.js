//Checks if the target string matches the ending of original str argument
function confirmEnding(str, target) {
  //Slice the str with length of the target from the end
  return str.slice(-target.length) === target
}