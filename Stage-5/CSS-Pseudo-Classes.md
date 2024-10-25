# CSS Pseudo-Classes

CSS pseudo-classes are keywords added to selectors that specify a special state of the selected elements. Here are some commonly used pseudo-classes:

## Structural Pseudo-Classes

- `:first-child`: Selects the first child of an element.
- `:last-child`: Selects the last child of an element.
- `:nth-child(n)`: Selects the nth child of an element.
- `:nth-of-type(n)`: Selects the nth child of a specific type of element.

## UI Element States

- `:hover`: Applies when the user designates an element (with a pointing device), but does not activate it.
- `:focus`: Applies while an element has the focus (e.g., when a user clicks on an input field).
- `:active`: Applies while an element is being activated (e.g., when a button is being pressed).

## Form Pseudo-Classes

- `:checked`: Applies to input elements (such as checkboxes or radio buttons) that are checked or selected.
- `:disabled`: Applies to input elements that are disabled.
- `:enabled`: Applies to input elements that are enabled.

## Other Pseudo-Classes

- `:not(selector)`: Selects every element that does not match the given selector.
- `:empty`: Selects elements that have no children (including text nodes).

## Example Usage

```css
/* Change the color of the first child of any element */
/* This example is changing the color of the first list item in an unordered list */
ul:first-child {
    color: blue;
}

/* Change the background color of a button when hovered */
button:hover {
    background-color: lightblue;
}
```

For more detailed information, refer to the [MDN Web Docs on Pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes).