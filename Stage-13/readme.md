# JavaScript Functions and Conditionals

## Functions

Functions are blocks of code designed to perform a particular task. They are executed when "called" (invoked).

### Function Declaration

```javascript
function functionName(parameters) {
    // code to be executed
}
```

### Example

```javascript
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet('Alice')); // Output: Hello, Alice!
```

## Conditionals

Conditionals are used to perform different actions based on different conditions.

### if Statement

```javascript
if (condition) {
    // code to be executed if the condition is true
}
```

### if...else Statement

```javascript
if (condition) {
    // code to be executed if the condition is true
} else {
    // code to be executed if the condition is false
}
```

### Example

```javascript
let age = 18;

if (age >= 18) {
    console.log('You are an adult.');
} else {
    console.log('You are a minor.');
}
```

### else if Statement

```javascript
if (condition1) {
    // code to be executed if condition1 is true
} else if (condition2) {
    // code to be executed if condition2 is true
} else {
    // code to be executed if both condition1 and condition2 are false
}
```

### Example

```javascript
let score = 85;

if (score >= 90) {
    console.log('Grade: A');
} else if (score >= 80) {
    console.log('Grade: B');
} else if (score >= 70) {
    console.log('Grade: C');
} else if (score >= 60) {
    console.log('Grade: D');
} else {
    console.log('Grade: F');
}
```