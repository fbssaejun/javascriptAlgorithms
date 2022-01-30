/*

QUESTION)

A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

sumPrimes(10) should return 17.

sumPrimes(977) should return 73156.

*/

const sumPrimes = (num) => {
  //Initialize empty array to find and store prime numbers
  let arr = [];
  //Initialize counter variable to count how many times a given number is divisible inside the loop
  let counter = 0;
  //Loop through num starting from 2, since 1 needs to be excluded
  for(let i = 2; i <= num; i++) {
    //Loop through i to check how many times i is divisible
    for(let j = 1; j <= i; j++) {
      if(i % j === 0) {
          counter += 1
      }
    }
    //if the given number (i) was only divisible two times, it means it is a prime number, push it to the empty array
    if(counter === 2) {
      arr.push(i)
    }
    //Reset the counter
    counter = 0;
  }
  //Sum all prime numbers in the array
  return arr.reduce((a,b) => a + b)
}

sumPrimes(10); // => 17