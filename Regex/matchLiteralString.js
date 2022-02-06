

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; 
//Find string 'Waldo' from waldoIsHiding
let result = waldoRegex.test(waldoIsHiding);

console.log(result); // => true