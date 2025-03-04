// Async JavaScript

// Synchronous Code
console.log("Start")

for (let i = 0; i < 999; i++) { }

// In this code we simulate the call to an backend data base so if we add '99999999' the process will be blocked until the bucle is finished
console.log("End")

 // EVENT LOOP
 // Components of Event Loop

 // 1.- Call Stack 
 // 2.- Web APIs or Node.js: setTimeout()...
 // 3.- Task Queue and Microtask Queue 

 // Event Loop:
 // 1. Call Stack
 // 2. If Asynchronous Tasks -> Web APIs or Node.js
 // 3. When task finished -> Task Queue or Microtask Queue
 // 4. Checks is Call Stack is empty -> Moves Microtask Queue tasks or Task Queue tasks to Call Stack
 // 5. Process Repeats

 // Async Code
console.log("--------")
 // - Callbacks - Its a function passed to another function to execute when the principal function its finished

 console.log("Start")

 setTimeout(()=> { // Executes before the timeout
    console.log("Time Out After 2 Seconds")
 }, 2000) // Defined timeout of 2 seconds 

 console.log("Finish")


 // Example 

function step1(callback) {
    setTimeout(() => {
        console.log("Step - 1 Done")
        callback()
    }, 1000)
}

function step2(callback) {
    setTimeout(() => {
        console.log("Step - 2 Done")
        callback()
    }, 2000)
}

function step3(callback) {
    setTimeout(() => {
        console.log("Step - 3 Done")
        callback()
    }, 3000)
}

// Callback Hell
step1(() => {
    step2(()=> {
        step3(()=> {
            console.log("All events completed")
        })
    })
})

// - Promises

// https://www.youtube.com/watch?v=Xs1EMmBLpn4

console.log("------")

const timePassed = ()=> {

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            let finish = true

            // if (start) {
            //     resolve("Finish timePassed() function") 
            //     // The value on resolve becomes the 'result' reject becomes 'error'
            // } else {
            //     reject("variable 'start' is not false")
            //     // The value on reject becomes the 'result'
            // }

            finish ? resolve("Finish") : reject("Unfinished")
            // Ternary operator

        }, 4000)
    })
}

timePassed().then(result => console.log(result)) // Showing the result
            .catch(error => console.log(error))