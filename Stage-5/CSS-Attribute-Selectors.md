# CSS Attribute Selectors

CSS attribute selectors allow you to style HTML elements based on their attributes and attribute values. Here are some common types of attribute selectors:

## Basic Attribute Selector
Selects elements with a specified attribute.
```css
/* Selects all elements with a 'target' attribute */
[target] {
    background-color: yellow;
}
```

## Attribute Selector with Specific Value
Selects elements with a specific attribute value.
```css
/* Selects all elements with a 'target' attribute equal to '_blank' */
[target="_blank"] {
    color: red;
}
```

## Attribute Selector with Partial Value
### Begins with
Selects elements whose attribute value begins with a specified value.
```css
/* Selects all elements with a 'class' attribute that begins with 'btn-' */
[class^="btn-"] {
    font-weight: bold;
}
```

### Ends with
Selects elements whose attribute value ends with a specified value.
```css
/* Selects all elements with a 'class' attribute that ends with '-primary' */
[class$="-primary"] {
    border: 1px solid blue;
}
```

### Contains
Selects elements whose attribute value contains a specified value.
```css
/* Selects all elements with a 'class' attribute that contains 'nav' */
[class*="nav"] {
    padding: 10px;
}
```

## Attribute Selector with Space-separated Values
Selects elements whose attribute value is a space-separated list of words, one of which is a specified value.
```css
/* Selects all elements with a 'class' attribute that contains the word 'menu' */
[class~="menu"] {
    background-color: lightgray;
}
```

## Attribute Selector with Hyphen-separated Values
Selects elements whose attribute value is a hyphen-separated list of words, beginning with a specified value.
```css
/* Selects all elements with a 'lang' attribute that begins with 'en' */
[lang|="en"] {
    font-style: italic;
}
```

Attribute selectors are powerful tools for targeting elements in your CSS, providing flexibility and precision in styling.

More information on CSS attribute selectors can be found in the [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors).

<div align="center">

[Intro Stage-5](/Stage-5/) --- [Go Back](/Stage-5/CSS-Cascading.md)  ---  [Next](/Stage-5/tips.md)

</div>