# Asynchronous JavaScript Callbacks

Asynchronous JavaScript allows you to execute code without blocking the main thread. Callbacks are a common way to handle asynchronous operations in JavaScript.

## What is a Callback?

A callback is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

## Example of a Callback

Here is a simple example of a callback function:

```javascript
function fetchData(callback) {
    setTimeout(() => {
        const data = { name: "John", age: 30 };
        callback(data);
    }, 2000);
}

function displayData(data) {
    console.log(`Name: ${data.name}, Age: ${data.age}`);
}

fetchData(displayData);
```

In this example:
- `fetchData` is an asynchronous function that simulates fetching data with a `setTimeout`.
- `displayData` is a callback function that processes the fetched data.
- `fetchData` takes `displayData` as an argument and calls it once the data is available.

## Handling Errors with Callbacks

It's common to handle errors in asynchronous operations. Here's an example:

```javascript
function fetchData(callback, errorCallback) {
    setTimeout(() => {
        const success = Math.random() > 0.5;
        if (success) {
            const data = { name: "John", age: 30 };
            callback(data);
        } else {
            errorCallback("Error fetching data");
        }
    }, 2000);
}

function displayData(data) {
    console.log(`Name: ${data.name}, Age: ${data.age}`);
}

function handleError(error) {
    console.error(error);
}

fetchData(displayData, handleError);
```

In this example:
- `fetchData` now takes two callbacks: `callback` for success and `errorCallback` for errors.
- `handleError` is called if there is an error during data fetching.
