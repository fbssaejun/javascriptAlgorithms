/*

Instructions
Your task is to create a function that will take in an array of weather objects and will return a rounded average of the wind speed.

Since we work with an unknown amount of entries, you will need to calculate the average wind speed using loops.

Examples
Input:

    const exampleEntries = [
      { 
        temperature:0, 
        weather:"sunny", 
        windDirection: "NNE", 
        windSpeed:24
      },
      { 
        temperature:10, 
        weather:"cloudy", 
        windDirection: "NNE", 
        windSpeed:9 
      }
    ] 
    
Output:

    17
    
*/

const averageWindSpeed = (weatherEntries) => {
  //Initialize variable with a vallue of 0 to add windspeed value from the input object
  let speed = 0;
  
  //Loop through weatherEntry input and sum the value of windspeed to speed variable
  for(let weather of weatherEntries) {
    speed += weather.windSpeed
  }
  //Round up the total average windspeed value
  return Math.round(speed / weatherEntries.length)
}