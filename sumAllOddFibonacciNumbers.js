/*

QUESTION)

Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 0 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first seven numbers of the Fibonacci sequence are 0, 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

*/

// Solution 1

function sumFibs(num) {
  let fibs = [1,1];

  for ( let i = 1; i <= num; i ++) {
    // check the next fibonacci number
    const nextFibNum = fibs[fibs.length - 1] +  fibs[fibs.length - 2]
    if (nextFibNum === i) {
      fibs.push(i)
    }
  }
  // filter all the odd fibonacci numbers and sum up all of them
  return fibs.filter(fibNums => fibNums % 2 !== 0).reduce((a,b) => a + b);
}

sumFibs(4); // => 5
sumFibs(10) // => 10
