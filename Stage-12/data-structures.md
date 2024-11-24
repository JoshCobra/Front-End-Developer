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
Objects are collections of key-value pairs.

```javascript
let person = {
    name: 'John',
    age: 30,
    city: 'New York'
};
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
