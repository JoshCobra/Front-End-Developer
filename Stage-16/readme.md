# JavaScript ES6+ Characteristics

## Introduction
JavaScript ES6 (ECMAScript 2015) and later versions introduced several new features and improvements to the language. These enhancements make JavaScript more powerful and easier to work with.

## Key Features

### 1. Arrow Functions
Arrow functions provide a shorter syntax for writing function expressions and lexically bind the `this` value.
```javascript
const add = (a, b) => a + b;
```

### 2. Template Literals
Template literals allow for easier string interpolation and multi-line strings.
```javascript
const name = 'Josh';
const greeting = `Hello, ${name}!`;
```

### 3. Destructuring Assignment
Destructuring allows for unpacking values from arrays or properties from objects into distinct variables.
```javascript
const [a, b] = [1, 2];
const {name, age} = {name: 'Josh', age: 30};
```

### 4. Default Parameters
Default parameters allow you to set default values for function parameters.
```javascript
function greet(name = 'Guest') {
    return `Hello, ${name}!`;
}
```

### 5. Rest and Spread Operators
The rest operator (`...`) allows you to represent an indefinite number of arguments as an array. The spread operator allows an iterable to expand in places where multiple arguments or elements are expected.
```javascript
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

const arr = [1, 2, 3];
const newArr = [...arr, 4, 5];
```

### 6. Classes
ES6 introduced a new syntax for creating objects using the `class` keyword.
```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}
```

### 7. Promises
Promises provide a way to handle asynchronous operations more easily.
```javascript
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('Data fetched'), 1000);
    });
};

fetchData().then(data => console.log(data));
```

### 8. Modules
ES6 introduced a standardized module system to JavaScript.
```javascript
// Exporting a module
export const add = (a, b) => a + b;

// Importing a module
import { add } from './math.js';
```

## Conclusion
ES6+ has significantly improved JavaScript by introducing new syntax and features that make the language more powerful and easier to work with. These features help developers write cleaner, more maintainable code.
