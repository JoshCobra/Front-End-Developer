# The Ternary Operator in JavaScript

The ternary operator is a shorthand for the `if-else` statement in JavaScript. It is also known as the conditional operator. The syntax for the ternary operator is:

```javascript
condition ? expressionIfTrue : expressionIfFalse;
```

## Example

Here is a simple example of using the ternary operator:

```javascript
let age = 18;
let canVote = (age >= 18) ? "Yes" : "No";
console.log(canVote); // Output: Yes
```

In this example, the condition `age >= 18` is evaluated. If it is true, the value `"Yes"` is assigned to `canVote`. Otherwise, the value `"No"` is assigned.

## Nested Ternary Operators

You can also nest ternary operators, but it is generally not recommended for readability:

```javascript
let score = 85;
let grade = (score >= 90) ? 'A' :
            (score >= 80) ? 'B' :
            (score >= 70) ? 'C' :
            (score >= 60) ? 'D' : 'F';
console.log(grade); // Output: B
```

## Conclusion

The ternary operator is a concise way to perform conditional assignments. However, for complex conditions, it is better to use `if-else` statements for better readability.