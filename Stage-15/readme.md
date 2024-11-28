# JavaScript Methods

Examples [here](https://codepen.io/DE-LA-ROSA-VAZQUEZ-JOSUE/pen/dPbPOgw?editors=0012)

## Array Methods
- `push()`: Adds one or more elements to the end of an array and returns the new length of the array.
- `pop()`: Removes the last element from an array and returns that element.
- `shift()`: Removes the first element from an array and returns that element.
- `unshift()`: Adds one or more elements to the beginning of an array and returns the new length of the array.
- `map()`: Creates a new array with the results of calling a provided function on every element in the calling array.
- `filter()`: Creates a new array with all elements that pass the test implemented by the provided function.
- `reduce()`: Executes a reducer function on each element of the array, resulting in a single output value.
- `forEach()`: Executes a provided function once for each array element.
- `find()`: Returns the value of the first element in the array that satisfies the provided testing function.
- `includes()`: Determines whether an array includes a certain value among its entries, returning true or false.

More array methods can be found [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).

### Example of `map()` Method
The `map()` method creates a new array populated with the results of calling a provided function on every element in the calling array.

```javascript
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(number => number * 2);

console.log(doubled); // Output: [2, 4, 6, 8]
```

## String Methods
- `charAt()`: Returns the character at the specified index.
- `concat()`: Combines the text of two or more strings and returns a new string.
- `includes()`: Determines whether one string may be found within another string, returning true or false.
- `indexOf()`: Returns the index within the calling String object of the first occurrence of the specified value.
- `slice()`: Extracts a section of a string and returns it as a new string.
- `split()`: Divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.
- `toLowerCase()`: Returns the calling string value converted to lower case.
- `toUpperCase()`: Returns the calling string value converted to upper case.
- `trim()`: Removes whitespace from both ends of a string.

More string methods can be found [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String).

### Example of `split()` Method
The `split()` method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.

```javascript
const sentence = 'The quick brown fox jumps over the lazy dog.';
const words = sentence.split(' ');  // Split the sentence on each space
console.log(words[3]); // Output: fox
```


## Number Methods
- `toFixed()`: Formats a number using fixed-point notation.
- `toString()`: Returns a string representing the specified Number object.
- `toExponential()`: Returns a string representing the Number object in exponential notation.
- `toPrecision()`: Returns a string representing the Number object to the specified precision.

More number methods can be found [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number).

### Example of `toFixed()` Method
The `toFixed()` method formats a number using fixed-point notation.

```javascript
const num = 9.656; 
const n = num.toFixed(0); // Rounds to the nearest integer
console.log(n); // Output: 10
```

## Object Methods
- `keys()`: Returns an array of a given object's own enumerable property names.
- `values()`: Returns an array of a given object's own enumerable property values.
- `entries()`: Returns an array of a given object's own enumerable property [key, value] pairs.
- `assign()`: Copies all enumerable own properties from one or more source objects to a target object.
- `hasOwnProperty()`: Returns a boolean indicating whether the object has the specified property as its own property.
- `is()`: Determines whether two values are the same value, for example, to compare two objects.
- `freeze()`: Freezes an object: other code cannot delete or change its properties.
- `seal()`: Seals an object, preventing new properties from being added to it and marking all existing properties as non-configurable.

More object methods can be found [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object).

### Example of `keys()` Method 
The `keys()` method returns an array of a given object's own enumerable property names.

```javascript
const object = { a: 1, b: 2, c: 3 };
console.log(Object.keys(object)); // Output: ['a', 'b', 'c']
``` 

### Example of `is()` Method
The `is()` method determines whether two values are the same value.

```javascript
console.log(Object.is('foo', 'foo')); // Output: true
console.log(Object.is({}, {})); // Output: false
console.log(Object.is(NaN, NaN)); // Output: true
```
