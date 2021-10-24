
/* Takes in an integer and calculates the factorial of the number using recursion */

const factorial = (num) => {
  while (num > 0) {
    return num * factorial(num - 1)
  }
  return 1
}

//One line
const factorialOneLine = (num) => {
  return num ? num * factorial(num - 1) : 1 ;
}

//Non-recursive way
const facotrialNonRecursive = (num) => {

  let finalNum =  1;

  for(let i = num; i > 0; i--) {
     finalNum *= i
  }

  return finalNum;
}


//Test console.logs 
console.log(factorial(5))
console.log(factorialOneLine(5))
console.log(facotrialNonRecursive(5))