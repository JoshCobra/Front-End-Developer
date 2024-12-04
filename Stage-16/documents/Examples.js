// Arrow Functions

function x(arg) {
    console.log(arg);
}

x('Hello'); // Normal Function Call

// -------------------------------------

const arrow = (arg) => { // Syntax of Arrow Function
    console.log(arg);
}

arrow("hello");

const name = (n) => { return n };
const f  = name('World');

console.log(f)

// implicit return in arrow functions 

const nameTwo = (n) => n
const d  = nameTwo('implicit return');

console.log(d);