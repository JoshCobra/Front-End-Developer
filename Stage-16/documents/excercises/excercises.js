// Exercise 1
class Dog {
    constructor(name, color) {
      this.name = name
      this.color = color
    }
    
    describe() {
      console.log(`The dog name is ${this.name} with color ${this.color}`)
    }
    
    bark() {
      console.log("woof woof!!!")
    }
    
    eat() {
      console.log(`${this.name} is eating`)
    }
  }
  
  const dog1 = new Dog("Robin", ["white","brown"])
  
  dog1.describe()
  dog1.bark()
  dog1.eat()
  console.log(dog1.name)
  
  
  // Exercise 2
  class Vehicle {
    constructor(brand) {
      this.brand = brand
    }
    
    displayInfo() {
      console.log(`Vehicle brand is: ${this.brand}`)
    }
  }
  
  const v1 = new Vehicle("Toyota")
  v1.displayInfo()
  
  
  
  // Exercise 3
  class Person {
    constructor(name,age) {
      this.name = name
      this.age = age
    }
    
    introduceYourself() {
      console.log(`Hi, my name is ${this.name} and I am ${this.age} years old`)
    }
  }
  
  const person1 = new Person("josh",22)
  person1.introduceYourself()
  
  
  // LOCAL STORAGE
  
  // Exercise 1
  function saveToLocalStorage(key,value) {
    localStorage.setItem(key,value);
    console.log(`${key} - Successfully saved to local storage`);
  }
  
  saveToLocalStorage("dogName","Robin")
  // console.log(localStorage.getItem("dogName"))
  saveToLocalStorage("dogName2","Lua")
  
  
  // Exercise 2
  const arrowLocalStorage = (userName) => { localStorage.setItem("userName",userName) }
  
  arrowLocalStorage("josh")
  
  console.log(localStorage.getItem("userName"))