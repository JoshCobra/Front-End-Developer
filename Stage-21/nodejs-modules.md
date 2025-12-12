# Node JS Modules 

In Node.js, modules are reusable blocks of code that can be imported and used in other parts of your application. They help organize code, promote reusability, and manage dependencies. Node.js has a built-in module system based on CommonJS, which allows you to create and use modules easily.

## Creating a Module
To create a module, you typically create a new JavaScript file and export the functionality you want to make available to other files. You can use the `module.exports` object to define what your module exports.

// math.js
```javascript
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
module.exports = {
    add,
    subtract
};
```

## Importing a Module
To use a module in another file, you can use the `require` function to import it. This function takes the path to the module file as an argument and returns the exported object. 

// app.js
```javascript
const math = require('./math');
const sum = math.add(5, 3);
console.log(`Sum: ${sum}`); // Output: Sum: 8
const difference = math.subtract(5, 3);
console.log(`Difference: ${difference}`); // Output: Difference: 2
```

See the example in [simple-example](/Stage-21/simple-example/app.js) and [simple-example/math.js](/Stage-21/simple-example/math.js).

## Built-in Modules
Node.js comes with several built-in modules that provide various functionalities, such as file system operations, HTTP server creation, and more. You can import these modules using the `require` function without specifying a file path.
```javascript
const fs = require('fs');
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});
``` 

## Third-Party Modules
You can also use third-party modules from the npm (Node Package Manager) registry. To use a third-party module, you first need to install it using npm and then require it in your code.
```bash
npm install lodash
```
```javascript  
const _ = require('lodash');
const array = [1, 2, 3, 4];
const reversedArray = _.reverse(array.slice());
console.log(reversedArray); // Output: [4, 3, 2, 1]
```
[Lodash](https://lodash.com/)

## Summary
Node.js modules are essential for organizing and reusing code in your applications. By creating your own modules, using built-in modules, and leveraging third-party modules from npm, you can build efficient and maintainable Node.js applications.