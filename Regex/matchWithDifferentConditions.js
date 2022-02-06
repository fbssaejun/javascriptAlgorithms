let petString = "James has a pet cat.";
let petRegex = /cat|dog|bird|fish/; // Change this line
let result = petRegex.test(petString);

console.log(result); // => true


let petString = "James has a pet dog.";
let petRegex = /cat|dog|bird|fish/; // Change this line
let result = petRegex.test(petString);

console.log(result); // => true

let petString = "James has a pet bird.";
let petRegex = /cat|dog|bird|fish/; // Change this line
let result = petRegex.test(petString);

console.log(result); // => true

let petString = "James has a pet fish.";
let petRegex = /cat|dog|bird|fish/; // Change this line
let result = petRegex.test(petString);

console.log(result); // => true