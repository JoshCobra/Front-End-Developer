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
};

const dog1 = new Dog("robin",4, "white", 2, "petite")
const dog2 = new Dog("Blacky",12, "black", 25, "medium-big")

dog1.giveInfo()
dog2.giveInfo()