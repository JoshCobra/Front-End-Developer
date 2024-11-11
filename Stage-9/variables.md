# Variables in SCSS
Variables in SCSS allow you to store information that you want to reuse throughout your stylesheet. You can store things like colors, font stacks, or any CSS value you think you'll reuse. SCSS variables are defined with the `$` symbol followed by the variable name.

## Syntax

```scss
$variable-name: value;
```

## Examples

### Example 1: Color Variables

```scss
$primary-color: #3498db;
$secondary-color: #2ecc71;

body {
    background-color: $primary-color;
    color: $secondary-color;
}
```

### Example 2: Font Variables

```scss
$base-font-size: 16px;
$base-font-family: 'Helvetica, Arial, sans-serif';

body {
    font-size: $base-font-size;
    font-family: $base-font-family;
}
```

### Example 3: Using Variables in Mixins

```scss
$border-radius: 5px;

@mixin rounded-corners {
    border-radius: $border-radius;
}

.box {
    @include rounded-corners;
    background-color: $primary-color;
}
```

Variables in SCSS make your code more maintainable and easier to read. By using variables, you can ensure consistency across your stylesheets and make global changes quickly.