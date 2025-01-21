# Async and Await in JavaScript

<a src="https://www.youtube.com/watch?v=9j1dZwFEJ-c" target="_blank">Async and Await in JavaScript Video</a>

`async` and `await` are keywords in JavaScript that make it easier to work with asynchronous code. They are built on top of Promises and *allow you to write asynchronous code that looks synchronous*.

## Async

The `async` keyword is used to declare an asynchronous function. An async function always returns a Promise. If the function returns a value, the Promise will be resolved with that value. If the function throws an error, the Promise will be rejected with that error.

```javascript
async function fetchData() {
    return "Data fetched";
}

fetchData().then(data => console.log(data)); // Output: Data fetched
```

## Await

The `await` keyword is used to wait for a Promise to resolve. It can only be used inside an async function. When the `await` keyword is used, the async function is paused until the Promise is resolved.

```javascript
async function fetchData() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Data fetched"), 1000);
    });

    let result = await promise; // Wait until the promise resolves
    console.log(result); // Output: Data fetched
}

fetchData();
```

## Example: Fetching Data from an API

Here is an example of using `async` and `await` to fetch data from an API:

```javascript
async function getUserData() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

getUserData();
```

In this example, the `fetch` function returns a Promise that resolves to a Response object. The `await` keyword is used to wait for the Promise to resolve, and then the `json` method is called on the Response object to get the data.

## Conclusion

`async` and `await` make it easier to work with asynchronous code in JavaScript. They allow you to write code that looks synchronous, making it easier to read and maintain.
