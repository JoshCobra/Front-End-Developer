# Data Structures in JavaScript

## Arrays
Arrays are list-like objects used to store multiple values in a single variable.

```javascript
let fruits = ['Apple', 'Banana', 'Cherry'];
```

To access an element in an array, you can use the index of the element. For example, to access the second element in the array:

```javascript
console.log(fruits[1]); // Output: Banana
```

## Multidimensional Arrays
Multidimensional arrays are arrays of arrays, allowing for the storage of data in a grid-like format.

```javascript
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
```

To access an element in a multidimensional array, you can use the row and column indices. For example, to access the element at the second row and third column:

```javascript
console.log(matrix[1][2]); // Output: 6
```

## Objects
Objects are collections of key-value pairs like dictionaries in Python.

```javascript
let person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

let car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2020
};
```
### Methods in Objects
Methods are functions that are properties of an object. They allow objects to perform actions.

```javascript
let person = {
    name: 'John',
    age: 30,
    city: 'New York',
    greet: function() {
        console.log('Hello, my name is ' + this.name);
    }
};

// Calling the method
person.greet(); // Output: Hello, my name is John
```

You can also use ES6 shorthand syntax for defining methods:

```javascript
let car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2020,
    start() {
        console.log('The car has started.');
    }
};

// Calling the method
car.start(); // Output: The car has started.
```

### Accessing Object Keys and Values
You can access the keys and values of an object using various methods.

To access all the keys of an object, you can use the `Object.keys()` method:

```javascript
let person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

let keys = Object.keys(person);
console.log(keys); // Output: ['name', 'age', 'city']
```

To access all the values of an object, you can use the `Object.values()` method:

```javascript
let values = Object.values(person);
console.log(values); // Output: ['John', 30, 'New York']
```

To access both keys and values, you can use the `Object.entries()` method, which returns an array of key-value pairs:

```javascript
let entries = Object.entries(person);
console.log(entries); // Output: [['name', 'John'], ['age', 30], ['city', 'New York']]
```

To access individual keys and values, you can use the dot notation or bracket notation:

```javascript
console.log(person.name); // Output: John
console.log(person['age']); // Output: 30
```

## Arrays of Objects
Arrays can also contain objects, allowing you to store a collection of objects in a single array.

```javascript
let people = [
    { name: 'John', age: 30, city: 'New York' },
    { name: 'Jane', age: 25, city: 'San Francisco' },
    { name: 'Mike', age: 35, city: 'Chicago' }
];
```

To access an object in an array of objects, you can use the index of the object in the array. For example, to access the first object in the array:

```javascript
console.log(people[0]); // Output: { name: 'John', age: 30, city: 'New York' }
```

To access a property of an object in an array, you can use the index of the object and the property name. For example, to access the name of the second person in the array:

```javascript
console.log(people[1].name); // Output: Jane
```

You can also use a loop to iterate over the array of objects and access their properties:

```javascript
for (let i = 0; i < people.length; i++) {
    console.log(people[i].name + ' lives in ' + people[i].city);
}
// Output:
// John lives in New York
// Jane lives in San Francisco
// Mike lives in Chicago
```


## Sets
Sets are collections of unique values.

```javascript
let uniqueNumbers = new Set([1, 2, 3, 4, 4]);
```

## Maps
Maps are collections of key-value pairs where keys can be of any type.

```javascript
let map = new Map();
map.set('name', 'John');
map.set('age', 30);
```

## WeakSets
WeakSets are collections of objects, where the objects are held weakly.

```javascript
let weakSet = new WeakSet();
let obj = {};
weakSet.add(obj);
```

## WeakMaps
WeakMaps are collections of key-value pairs where keys are objects and are held weakly.

```javascript
let weakMap = new WeakMap();
let objKey = {};
weakMap.set(objKey, 'value');
```

## Typed Arrays
Typed Arrays provide a mechanism for accessing raw binary data.

```javascript
let buffer = new ArrayBuffer(16);
let int32View = new Int32Array(buffer);
```
