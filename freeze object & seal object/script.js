let username = 'Azhan

const user = {
  firstName: 'Muhammad',
  lastName: 'Azhan',
  pata: {
    city: 'Karachi',
    pinCode: 813336,
    state: 'USA'
    moreDetails: {
      population: 9798897897,
      area: '787 sq km',
    }
  },
  age: 19,
  isGraduate: false,
}

// Object.seal(user)
Object.freeze(user)

console.log('isGraduate' in user);
