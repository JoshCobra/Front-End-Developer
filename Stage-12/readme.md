# Introduction to JavaScript

JavaScript is a versatile and powerful programming language commonly used in web development. It allows developers to create dynamic and interactive web pages. 

- **[Intro to JavaScript](javascript-basics.md)** : Learn about the basics of JavaScript, including variables, data types, and operators.
    - **[Operators](operators.md)** : Explore the different types of operators in JavaScript, such as arithmetic, comparison, and logical operators.
    - **[Variables](variables.md)** : Understand how to declare and assign values to variables in JavaScript.
- **[Data Types](data-types.md)** : Explore the different data types in JavaScript, such as strings, numbers, and booleans.
- **[Data Structures](data-structures.md)** : Discover built-in data structures like arrays, objects, maps, and sets.

Basics Practice: [JavaScript Basics Practice](https://codepen.io/DE-LA-ROSA-VAZQUEZ-JOSUE/pen/emOOrVd)

## Data Types

JavaScript has several data types that can be divided into two categories: primitive and non-primitive.

### Primitive Data Types
1. **String**: Represents textual data. Example: `"Hello, World!"`
2. **Number**: Represents numeric values. Example: `42`
3. **Boolean**: Represents logical values. Example: `true` or `false`
4. **Undefined**: Represents a variable that has been declared but not assigned a value.
5. **Null**: Represents the intentional absence of any object value.
6. **Symbol**: Represents a unique and immutable value, often used as object keys.
7. **BigInt**: Represents integers with arbitrary precision. Example: `1234567890123456789012345678901234567890n`

### Non-Primitive Data Types
1. **Object**: Represents a collection of key-value pairs. Example:
    ```javascript
    const person = {
        name: "John",
        age: 30
    };
    ```
2. **Array**: Represents an ordered list of values. Example:
    ```javascript
    const numbers = [1, 2, 3, 4, 5];
    ```

## Data Structures

JavaScript provides several built-in data structures to manage collections of data.

### Arrays
Arrays are used to store multiple values in a single variable. They are zero-indexed and can contain elements of different data types.
```javascript
const fruits = ["Apple", "Banana", "Cherry"];
```

### Objects
Objects are used to store collections of key-value pairs. Keys are strings (or Symbols), and values can be any data type.
```javascript
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};
```

### Maps
Maps are collections of key-value pairs where keys can be of any data type.
```javascript
const map = new Map();
map.set("name", "Alice");
map.set("age", 25);
```

### Sets
Sets are collections of unique values.
```javascript
const set = new Set();
set.add(1);
set.add(2);
set.add(3);
```