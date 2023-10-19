const person = {
    name : "Rishu",
    age : 22,
    isMarrid : false
};

// destructing the object
const {name, age, isMarrid} = person;

console.log(age);
console.log(isMarrid ? "isMarrid" : "notMarred");

// const dragonName = "Vanshika";
// const ageOfDragon = 22;

// const Dragon = {
//     dragonName,
//     ageOfDragon,
// };

/* ************ Spread Operator *********** */

const person2 = {...person, name: "Vanshika"};
console.log(person2);
