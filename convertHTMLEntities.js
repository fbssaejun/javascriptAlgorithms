/*

QUESTION)

Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

*/

const convertHTML = (str) => {
  // Use Object Lookup to declare as many HTML entities as needed.
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };
  // Using a regex, replace characters with it's corresponding html entity
  return str.replace(/([&<>\"\'])/g, match => htmlEntities[match]);
}

convertHTML("Dolce & Gabbana"); // => "Dolce &amp;amp; Gabbana"
convertHTML('Stuff in "quotation marks"') // => "Stuff in &amp;quot;quotation marks&amp;quot;"
