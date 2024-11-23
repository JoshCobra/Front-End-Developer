# Variable Types in JavaScript

JavaScript has several types of variables, each serving different purposes. Here are the main types:

## 1. `var`
- **Scope**: Function-scoped.
- **Hoisting**: Variables declared with `var` are hoisted to the top of their scope and initialized with `undefined`.
- **Re-declaration**: Allowed within the same scope.

```javascript
function exampleVar() {
    var x = 1;
    if (true) {
        var x = 2; // Same variable, re-declared
        console.log(x); // 2
    }
    console.log(x); // 2
}
exampleVar();
```

## 2. `let`
- **Scope**: Block-scoped.
- **Hoisting**: Variables declared with `let` are hoisted but not initialized.
- **Re-declaration**: Not allowed within the same scope.

```javascript
function exampleLet() {
    let x = 1;
    if (true) {
        let x = 2; // Different variable, block-scoped
        console.log(x); // 2
    }
    console.log(x); // 1
}
exampleLet();
```

## 3. `const`
- **Scope**: Block-scoped.
- **Hoisting**: Variables declared with `const` are hoisted but not initialized.
- **Re-declaration**: Not allowed within the same scope.
- **Assignment**: Must be initialized at the time of declaration and cannot be reassigned.

```javascript
function exampleConst() {
    const x = 1;
    if (true) {
        const x = 2; // Different variable, block-scoped
        console.log(x); // 2
    }
    console.log(x); // 1
}
exampleConst();
```

## Differences Summary
- **Scope**: `var` is function-scoped, while `let` and `const` are block-scoped.
- **Hoisting**: `var` is hoisted and initialized with `undefined`, while `let` and `const` are hoisted but not initialized.
- **Re-declaration**: `var` allows re-declaration within the same scope, while `let` and `const` do not.
- **Assignment**: `const` must be initialized at declaration and cannot be reassigned, while `var` and `let` can be reassigned.