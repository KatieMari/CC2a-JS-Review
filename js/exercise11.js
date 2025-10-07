// LOGGING OBJECTS

// 1. Create a constant person object with name 'Mary' and age 25
const personOne = {
    name: "Mary",
    age: 25
};
// 2. Create a constant person object with name 'Mark' and age 22
const personTwo = {
    name: "Mark",
    age: 22
};
// 3. Create a function that logs a the person's name and age
function logPerson (person){
   console.log(person.name)
   console.log(person.age)
};
// 4. Use the function to log Mary's details
logPerson (personOne);
// 5. Use the function to log Mark's details
logPerson (personTwo);