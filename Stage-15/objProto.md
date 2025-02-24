# Object Prototypes

Prototypes are the mechanism by which JavaScript objects inherit features from one another.

In order to understand this is effective to do an example using the browser console, by creating an object literal, for example:

```js
const myObject = {
  city: "Madrid",
  greet() {
    console.log(`Greetings from ${this.city}`);
  },
};

myObject.greet(); // Greetings from Madrid
```

In this example we see an object with one data property, `city` and with one function `greet()`.
If you type the object's name followed by a period into the console, like `myObject.`, then the console will pop up a list of all the properties available to this object. You'll see that as well as `city` and `greet()`, there are lots of other properties!

Every object in JavaScript has a built-in property, which is called its prototype. The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has `null` for its own prototype.

So basically every time the object we are creating doesn't include a property we want to use like `toString()` but keep in mind that our object `myObject` doesn't have this function on it, so we use the prototype object to access this property, finds it there an calls it.