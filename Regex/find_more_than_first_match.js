let twinkleStar = "Twinkle, twinkle, little star";
//Searches string globally && ignore cases
let starRegex = /Twinkle/gi; 
let result = twinkleStar.match(starRegex); 

console.log(result); // => ["Twinkle", "twinkle"]