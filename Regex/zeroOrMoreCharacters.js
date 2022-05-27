/*

QUeSTION)

For this challenge, chewieQuote has been initialized as the string Aaaaaaaaaaaaaaaarrrgh! behind the scenes. Create a regex chewieRegex that uses the * character to match an uppercase A character immediately followed by zero or more lowercase a characters in chewieQuote. Your regex does not need flags or character classes, and it should not match any of the other quotes.

*/

// Look for "a" or "A", return null if non matches, return any that matches the characters
let chewieRegex = /Aa*/;
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";

chewieQuote.match(chewieRegex); // => ["Aaaaaaaaaaaaaaaa"]


// Example with no matching characters
let randomString = "xyz";

randomString.match(chewieRegex); // => null
