const fruits = ['banana', 'apple', 'peach', 'mango', 'grapes']



const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 50,
    eyeColor: 'blue',
    city: 'Bangalore',
}

// for(const key in person) {
//     console.log(key, ': ' ,person[key]);
// }

const personKeys = Object.keys(person)
const personValues = Object.values(person)
const personEntries = Object.entries(person)
// for (const key of personKeys) {
//     console.log(person[key]);
// }

