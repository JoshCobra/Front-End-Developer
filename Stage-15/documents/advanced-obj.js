// JavaScript Objects
let person = {
    name: "josh",
    age: 22,
    greet() {
        console.log(`greetings my name is ${this.name} and i am ${this.age} years old`)
    }
}

person.greet()

console.log(person.__proto__)
console.log(person.age)
console.log(Object.getPrototypeOf(person))

person.sayAge = function() {
    console.log(`My Age is ${this.age}`)
}

person.sayAge()

console.log(person)

// Inherit
let programmer = Object.create(person)

programmer.name = "Krissia"
programmer.ocupation = "Programmer"
programmer.avalible = false

console.log(programmer)
programmer.greet() // Inheriting the functions from original object person


// Working with object
const checkAvalible = (object) => {
    if (object.avalible) {
        console.log("Person is Avalible to work")
    } else {
        console.log("This person is not avalible")
    }
}

checkAvalible(programmer)

checkAvalible(person) // Does not have the attribute 'avalible' so its false