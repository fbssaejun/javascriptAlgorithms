
const source = [1,2,3,4,5,6,7,8,9,10];

function removeFirstTwo(list) {

  //Destructures array, store all values after second index to 'arr' variable
  const [a,b,...arr] = list; 

  return arr;
}

console.log(removeFirstTwo(source)) // => [3,4,5,6,7,8,9,10]