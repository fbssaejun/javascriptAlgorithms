//return a random number from a range of myMin <= num <= myMax

const randomRange = (myMin, myMax) => {
  
  //Creates a random number from a range of (maxnumber - minnumber + 1) because it needs to be smaller than or equal to the max number, and also because we are adding minnumber at the end of the calculation, mymax needs to be subtracted with the mymin number. 
  //My min number gets added at the end since minimum range has not been controlled in the previous calculation in the return statement. 
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin

}