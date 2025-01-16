# Asynchronous JavaScript

Asynchronous JavaScript allows you to execute tasks without blocking the main thread. This is essential for tasks that take time, such as fetching data from an API or reading a file.

## Key Concepts

### Callbacks
A callback is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

```javascript
function fetchData(callback) {
    setTimeout(() => {
        callback('Data received');
    }, 1000);
}

fetchData((data) => {
    console.log(data);
});
```

### Promises
A Promise is an object representing the eventual completion or failure of an asynchronous operation.

```javascript
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Data received');
    }, 1000);
});

promise.then((data) => {
    console.log(data);
}).catch((error) => {
    console.error(error);
});
```

### Async/Await
Async/Await is syntactic sugar built on top of Promises, making asynchronous code easier to write and read.

```javascript
async function fetchData() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data received');
        }, 1000);
    });

    let data = await promise;
    console.log(data);
}

fetchData();
```

## Use Cases
- Fetching data from a server
- Reading/writing files
- Handling user input events
