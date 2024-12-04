// Arrow Functions

function x(arg) {
    console.log(arg);
}

x('Hello'); // Normal Function Call

// -------------------------------------

const arrow = (arg) => { // Syntax of Arrow Function
    console.log(arg);
}

arrow("hello"); // hello

const name = (n) => { return n };
const f  = name("World");

console.log(f); // World

// implicit return in arrow functions 

const nameTwo = (n) => n
const d  = nameTwo('implicit return');

console.log(d); // implicit return

const sum = x => x+x
const e = sum(12);

console.log(e) // 24

// ----------------------------------------


// Default Parameters

const presentation = (name = "generic") => { //"generic" is default parameter for name, accepts any type
    console.log("My name is " + name);
}

presentation(); // My name is generic
presentation("josh"); // My name is josh

// ----------------------------------------

// Multiline Strings

let string = "string" //normal string

string = `string with
multiple lines are
allowed using backtick` //multiline string


// Template Literals

const h = "world"
const before = "hello " + h // hello world

const now = `hello ${h}` // hello world


// Destructing

// before, to access the array 
const animals = ["dog", "cat", "cow", "chicken"]
console.log(animals[2]) // cow 

// now
const [an1, an2, an3, an4] = animals;
console.log(an3) // cow


const obj = {
    dogName: "robin",
    species: "dog"
}

const {dogName, species} = obj;
console.log(dogName); // "robin"