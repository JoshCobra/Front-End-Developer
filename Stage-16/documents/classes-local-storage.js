class Dog { //Definition of the class
    constructor(name, age, color, weight, size) {
        this.name = name
        this.age = age 
        this.color = color
        this.weight = weight
        this.size = size
    }

    giveInfo() {
        return `Dog named ${this.name}, age ${this.age}, color ${this.color}, weight ${this.weight}, size ${this.size}`
    }

    bark() {
        return `${this.name}: Woof Woof!!!`
    }

    birthday() {
        this.age ++
        return `Dogs BirthDay!!!!, New age is: ${this.age}`
    }
};

const dog1 = new Dog("Robin",4, "white", 2, "petite")
const dog2 = new Dog("Blacky",12, "black", 25, "medium-big")

dog1.giveInfo() // 'Dog named robin, age 4, color white, weight 2, size petite'
dog2.giveInfo() // 'Dog named Blacky, age 12, color black, weight 25, size medium-big'

dog2.birthday() // 'Dogs BirthDay, New age is: 13'
dog1.bark() // 'Robin Woof Woof!!!'


// Local Storage

localStorage.setItem("user", "user03945"); // Save item in local storage
localStorage.removeItem("user") // Delete item

const user = localStorage.getItem("user") //get the item

console.log(`User name is: ${user}`)
console.log(`User name is: ${localStorage.getItem("user")}`)