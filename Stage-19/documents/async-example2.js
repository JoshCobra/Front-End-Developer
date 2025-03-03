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
    console.log("Time Out")
 }, 2000) // Defined timeout of 2 seconds 

 console.log("Finish")


 // Example 

 function step1(callback) {
    setTimeout(() => {
        console.log("Step - 1 Done")
    })
 }