//Generates an array from starting number to ending number using recursion

const generateRange = (startNum, endNum) => {
  if(startNum === endNum) {
    return [startNum]
  }

  if(startNum <= endNum) {
    return [startNum].concat(generateRange(startNum + 1, endNum));
  }
};


//Test logs
console.log(generateRange(5,5)) // => returns [5]
console.log(generateRange(1,5)) // => returns [1,2,3,4,5]