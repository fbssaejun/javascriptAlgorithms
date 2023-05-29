/*
QUESTION)

Return the Nth Even Number

Example(Input --> Output)

1 --> 0 (the first even number is 0)
3 --> 4 (the 3rd even number is 4 (0, 2, 4))
100 --> 198
1298734 --> 2597466

The input will not be 0.
*/

function nthEven(n){
  // if n is 1, return 0, if not return the multiplied value of 2 (even number) and 1 subtracted from the input
  return n === 1 ? 0 : (n - 1) * 2
}
