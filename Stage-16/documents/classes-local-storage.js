class Dog { //Definition of the class
    constructor(name, age, color, weight, size) {
        this.name = name
        this.age = age 
        this.color = color
        this.weight = weight
        this.size = size
    }

    giveInfo() {
        console.log(`Dog named ${this.name}, age ${this.age}, color ${this.color}, weight ${this.weight}, size ${this.size}`) 
    }

    bark() {
        console.log(`${this.name}: Woof Woof!!!`)
    }

    birthday() {
        this.age ++
        console.log(`Dogs BirthDay!!!!, New age is: ${this.age}`)
    }
};

// Inhernace
class SmallDog extends Dog {
    constructor(name, aggressive=false, size) {
        this.aggressive = aggressive
        super(name); // super refers to the main class
        super(size); 
    }

    describe() {
        if(this.aggressive) {
            console.log(` The small dog ${this.name} is aggressive`)
        } else {
            console.log(` The small dog ${this.name} is not aggressive`)
        }
    }
}


const dog1 = new Dog("Robin",4, "white", 2, "petite")
const dog2 = new Dog("Blacky",12, "black", 25, "medium-big")
const dog3 = new SmallDog("Lua", true, "small")

dog1.giveInfo() // 'Dog named robin, age 4, color white, weight 2, size petite'
dog2.giveInfo() // 'Dog named Blacky, age 12, color black, weight 25, size medium-big'

dog2.birthday() // 'Dogs BirthDay, New age is: 13'
dog1.bark() // 'Robin Woof Woof!!!'

dog3.describe()




// Local Storage
localStorage.setItem("user", "user03945"); // Save item in local storage
localStorage.removeItem("user") // Delete item

const user = localStorage.getItem("user") //get the item

console.log(`User name is: ${user}`) // User name is: user03945
console.log(`User name is: ${localStorage.getItem("user")}`)