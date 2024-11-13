# Functions in Sass

Sass provides a variety of built-in functions to manipulate and work with CSS values. These functions can help you perform calculations, manipulate colors, and more.

## Examples of Sass Functions

### 1. `darken($color, $amount)`

The `darken` function decreases the lightness of a color by a specified amount.

```scss
$primary-color: #3498db;
$darkened-color: darken($primary-color, 10%);
```

### 2. `lighten($color, $amount)`

The `lighten` function increases the lightness of a color by a specified amount.

```scss
$primary-color: #3498db;
$lightened-color: lighten($primary-color, 10%);
```

### 3. `mix($color1, $color2, [$weight])`

The `mix` function blends two colors together. The optional `$weight` parameter determines the proportion of the first color in the blend.

```scss
$color1: #3498db;
$color2: #2ecc71;
$mixed-color: mix($color1, $color2, 50%);
```

### 4. `percentage($value)`

The `percentage` function converts a unitless number to a percentage.

```scss
$decimal: 0.5;
$percentage: percentage($decimal); // 50%
```

### 5. `rgba($color, $alpha)`

The `rgba` function adds an alpha channel to a color, making it semi-transparent.

```scss
$color: #3498db;
$transparent-color: rgba($color, 0.5);
```

### 6. `ceil($number)`

The `ceil` function rounds a number up to the nearest whole number.

```scss
$number: 4.2;
$rounded-up: ceil($number); // 5
```

### 7. `floor($number)`

The `floor` function rounds a number down to the nearest whole number.

```scss
$number: 4.8;
$rounded-down: floor($number); // 4
```

### 8. `abs($number)`

The `abs` function returns the absolute value of a number.

```scss
$number: -10;
$absolute-value: abs($number); // 10
```

### 9. `min($numbers...)`

The `min` function returns the smallest value from a list of numbers.

```scss
$min-value: min(10, 20, 30); // 10
```

### 10. `max($numbers...)`

The `max` function returns the largest value from a list of numbers.

```scss
$max-value: max(10, 20, 30); // 30
```

These are just a few examples of the many functions available in Sass. Using these functions can help you write more dynamic and maintainable stylesheets.

In addition to the built-in functions, Sass allows you to create your own custom functions using the `@function` directive. Custom functions can help you encapsulate reusable logic and make your stylesheets more modular.

### Example of a Custom Function

Here's an example of a custom function that calculates the square of a number:

```scss
@function square($number) {
    @return $number * $number;
}

$squared-value: square(4); // 16
```

### Using `@if` and `@else` in Functions

You can also use conditional statements like `@if` and `@else` within your custom functions to add logic. For example, let's create a function that returns "light" or "dark" based on the lightness of a color:

```scss
@function light-or-dark($color) {
    @if (lightness($color) > 50%) {
        @return "light";
    } @else {
        @return "dark";
    }
}

$color-type: light-or-dark(#3498db); // "light"
```
This function uses the `lightness` built-in function to determine the lightness of the color and returns either "light" or "dark" based on the result.