
# Basic Syntax of CSS

CSS (Cascading Style Sheets) is used to style and layout web pages. It is a stylesheet language that describes the presentation of an HTML document.
CSS is a powerful tool for web design, allowing you to create visually appealing and responsive web pages.

<em>This is the basic syntax of CSS:</em>

```css
selector {
    property: value;
}
```

## Example

```css
body {
    background-color: lightblue;
}

h1 {
    color: navy;
    margin-left: 20px;
}
```

In this example:
- `body` and `h1` are selectors.
- `background-color`, `color`, and `margin-left` are properties.
- `lightblue`, `navy`, and `20px` are values.

## Selectors

Selectors are used to target the HTML elements you want to style. Common selectors include:
- `element` (e.g., `p`, `h1`)
- `.class` (e.g., `.container`)
- `#id` (e.g., `#header`)

## Properties and Values

Properties are the aspects of the element you want to change, and values are the settings you apply to those properties.

## Comments

You can add comments in CSS using `/* comment */`.

```css
/* This is a comment */
p {
    color: green;
}
```
