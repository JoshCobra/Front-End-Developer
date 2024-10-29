# CSS Basics

- [**Syntax in CSS**](/Stage-4/CSS-Syntax.md): Learn about the basic syntax of CSS.
- [**Colors in CSS**](/Stage-4/CSS-Colors.md): Learn how to use colors in CSS.
- [**Properties in CSS**](/Stage-4/CSS-Properties.md): Learn about some common CSS properties.
- [**Box Model in CSS**](/Stage-4/CSS-Box-Model.md): Learn about the box model in CSS.

# Introduction to CSS

CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of a document written in HTML or XML. CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.

## Why Use CSS?

- **Separation of Content and Design**: CSS allows you to separate the content of your HTML from the design and layout, making it easier to maintain and update.
- **Consistency**: CSS enables you to apply consistent styling across multiple web pages.
- **Efficiency**: By using CSS, you can reduce the amount of code you need to write, as you can apply styles to multiple elements with a single rule.

## Basic Syntax

A CSS rule consists of a selector and a declaration block:

```css
selector {
    property: value;
}
```

- **Selector**: Indicates which HTML element(s) the rule applies to.
- **Property**: The aspect of the element you want to change (e.g., color, font-size).
- **Value**: The value you want to apply to the property.

## Example

```css
body {
    background-color: lightblue;
}

h1 {
    color: navy;
    text-align: center;
}

p {
    font-family: Arial, sans-serif;
    font-size: 14px;
}
```

In this example:
- The `body` element has a light blue background.
- All `h1` elements have a navy color and are centered.
- All `p` elements use the Arial font and have a font size of 14px.

