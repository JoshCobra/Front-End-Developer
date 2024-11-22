# JavaScript Basics

## Introduction
JavaScript is a versatile programming language commonly used in web development. It allows you to create dynamic and interactive web pages.

## Variables
Variables are used to store data values. You can declare a variable using `var`, `let`, or `const`.

```javascript
let name = "John";
const age = 30;
var isStudent = true;
```

## Data Types
JavaScript supports various data types including:

- String
- Number
- Boolean
- Object
- Array
- Null
- Undefined

## Functions
Functions are blocks of code designed to perform a particular task. You can define a function using the `function` keyword.

```javascript
function greet(name) {
    return `Hello, ${name}!`;
}
```

## Conditionals
Conditional statements control the flow of execution based on certain conditions. Commonly used conditionals are `if`, `else if`, and `else`.

```javascript
if (age > 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
```

## Loops
Loops are used to execute a block of code repeatedly. Common loops include `for`, `while`, and `do...while`.

```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

## JavaScript in Web Development

JavaScript plays a crucial role in web development. It is used for:

- **Client-Side Scripting**: JavaScript runs in the browser to create interactive web pages. It can manipulate the DOM, handle events, and validate form inputs.
- **Server-Side Scripting**: With environments like Node.js, JavaScript can be used on the server to handle requests, interact with databases, and serve content.
- **APIs and AJAX**: JavaScript can make asynchronous requests to servers using AJAX, allowing web pages to update dynamically without reloading.
- **Frameworks and Libraries**: Popular frameworks and libraries like React, Angular, and Vue.js are built with JavaScript, making it easier to build complex web applications.

```javascript
// Example of DOM manipulation
document.getElementById("demo").innerHTML = "Hello, World!";
```

JavaScript's versatility and wide adoption make it an essential tool for modern web development.

## ECMAScript

ECMAScript is the standard upon which JavaScript is based. It defines the core features and syntax of the language. The different versions of ECMAScript introduce new features and improvements to the language.

### ES6 (ECMAScript 2015)
ES6, also known as ECMAScript 2015, introduced many significant features to JavaScript, including:

- **Arrow Functions**: A shorter syntax for writing functions.
    ```javascript
    const add = (a, b) => a + b;
    ```

- **Classes**: A new way to create objects and handle inheritance.
    ```javascript
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        greet() {
            return `Hello, my name is ${this.name}`;
        }
    }
    ```

- **Template Literals**: A new way to create strings with embedded expressions.
    ```javascript
    const greeting = `Hello, ${name}!`;
    ```

- **Destructuring**: A convenient way to extract values from arrays and objects.
    ```javascript
    const [a, b] = [1, 2];
    const {name, age} = person;
    ```

- **Modules**: A way to organize and reuse code across different files.
    ```javascript
    // Exporting a function
    export function greet(name) {
        return `Hello, ${name}!`;
    }

    // Importing a function
    import { greet } from './greet.js';
    ```

### ES7 and Beyond
Subsequent versions of ECMAScript have continued to add new features and improvements. Some notable additions include:

- **ES7 (ECMAScript 2016)**: Introduced the `includes` method for arrays and the exponentiation operator (`**`).
    ```javascript
    [1, 2, 3].includes(2); // true
    2 ** 3; // 8
    ```

- **ES8 (ECMAScript 2017)**: Introduced `async`/`await` for asynchronous programming and `Object.entries`/`Object.values`.
    ```javascript
    async function fetchData() {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        return data;
    }
    ```

- **ES9 (ECMAScript 2018)**: Introduced rest/spread properties for objects and asynchronous iteration.
    ```javascript
    const {a, ...rest} = {a: 1, b: 2, c: 3};
    ```

- **ES10 (ECMAScript 2019)**: Introduced `Array.prototype.flat` and `Object.fromEntries`.
    ```javascript
    [1, [2, 3]].flat(); // [1, 2, 3]
    ```

Understanding ECMAScript and its evolution helps developers write modern and efficient JavaScript code.