# CSS Selectors

## Type Selector 
The type selector targets elements by their tag name. Use the tag name to select all elements of that type.

```css
/* Selects all <p> elements */
p {
    color: blue;
}
```

## Class Selector
The class selector targets elements by their class attribute. Use a period (`.`) followed by the class name.

```css
/* Selects all elements with class="example" */
.example {
    font-size: 20px;
}
```
```html
<!-- Applies the .example style to this element -->
<div class="example">
    <p>This is an example.</p>
</div>
```

## ID Selector
The ID selector targets a single element by its id attribute. Use a hash (`#`) followed by the id name.

```css
/* Selects the element with id="unique" */
#unique {
    background-color: yellow;
}
```
```html
<!-- Applies the #unique style to this element -->
<div id="unique">
    <p>This is a unique element.</p>
</div>
```