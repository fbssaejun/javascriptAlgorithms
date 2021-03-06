/* 

QUESTION)

Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)

Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.

*/

let Person = (firstAndLast) => {
  let fullName = firstAndLast;

  this.getFirstName = () => {
    return fullName.split(" ")[0];
  };

  this.getLastName = () => {
    return fullName.split(" ")[1];
  };

  this.getFullName = () => {
    return fullName;
  };

  this.setFirstName = (first) => {
    fullName = `${first} ${fullName.split(" ")[1]}`;
  };

  this.setLastName = (last) => {
    fullName `${fullName.split(" ")[0]} ${last}`;
  };

  this.setFullName = (name) => {
    fullName = name;
  };
};

let bob = new Person("Bob Ross");

bob.getFullName();  //  => "Bob Ross"
// Sets first name as the input value
bob.setFirstName("Anthony")
bob.getFullName();  // => "Anthony Ross"
