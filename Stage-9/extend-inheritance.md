# Extends in CSS 

## Using @extend in Sass

The `@extend` directive in Sass allows you to share a set of CSS properties from one selector to another. This helps to keep your code DRY (Don't Repeat Yourself).

### Example

```scss
// Define a base class with common styles
.button {
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 16px;
}

// Extend the base class in other classes
.primary-button {
    @extend .button;
    background-color: blue;
    color: white;
}

.secondary-button {
    @extend .button;
    background-color: gray;
    color: black;
}
```

### Output CSS

```css
.button, .primary-button, .secondary-button {
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 16px;
}

.primary-button {
    background-color: blue;
    color: white;
}

.secondary-button {
    background-color: gray;
    color: black;
}
```

In this example, both `.primary-button` and `.secondary-button` classes inherit the styles from the `.button` class, reducing redundancy in your CSS.