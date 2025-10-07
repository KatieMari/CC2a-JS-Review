// UNNAMED OBJECTS

// In this example, instead of specifying the key for the object variables, the objects will take the as key, the name of the variable they originated from:
const a = "a";
const b = "b";
const c = "c";

const abc = {a, b, c}

// 1. Log the properties a, b and c of the object abc
console.log (abc.a, abc.b, abc.c);
// 2. Using this technique, create a new function that defines an object animals with two or three animal names and returns the object
function Animals(){
const dolphine = "dolphine";
const penguin = "penguin";
const seal = "seal";
const animalObject= {dolphine, penguin, seal}
return animalObject;
};
// 3. Create a constant variable myAnimals and use the function to define it
const myAnimals = Animals();
  


// 4. Log the variable myAnimals
console.log (myAnimals.dolphine);
console.log (myAnimals.penguin);
console.log (myAnimals.seal);