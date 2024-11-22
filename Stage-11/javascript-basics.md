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