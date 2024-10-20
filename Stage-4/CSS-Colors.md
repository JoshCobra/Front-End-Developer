# CSS Colors

CSS provides various ways to specify colors for your web elements. Here are some of the most common methods:

[Real Example](/Stage-4/documents/colors.html)

## Named Colors
CSS supports 140 named colors, such as `red`, `blue`, `green`, etc.

```css
color: red;
```

## Hexadecimal Colors
Hex colors are specified with a `#` followed by six hexadecimal digits.

```css
color: #ff5733;
```

## RGB Colors
RGB colors are specified with the `rgb()` function, which takes three values (red, green, blue) ranging from 0 to 255.

```css
color: rgb(255, 87, 51);
```

## RGBA Colors
RGBA is similar to RGB but includes an alpha channel for opacity.

```css
color: rgba(255, 87, 51, 0.5);
```

## HSL Colors
HSL stands for hue, saturation, and lightness.

```css
color: hsl(9, 100%, 60%);
```

## HSLA Colors
HSLA is similar to HSL but includes an alpha channel for opacity.

```css
color: hsla(9, 100%, 60%, 0.5);
```

## CurrentColor
The `currentColor` keyword can be used to apply the current color value to other properties.

```css
border: 1px solid currentColor;
```

## Transparent
The `transparent` keyword can be used to make an element fully transparent.

```css
background-color: transparent;
```

## Example
Here is an example of using different color methods in CSS:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Colors Example</title>
    <style>
        .named-color {
            color: red;
        }
        .hex-color {
            color: #ff5733;
        }
        .rgb-color {
            color: rgb(255, 87, 51);
        }
        .rgba-color {
            color: rgba(255, 87, 51, 0.5);
        }
        .hsl-color {
            color: hsl(9, 100%, 60%);
        }
        .hsla-color {
            color: hsla(9, 100%, 60%, 0.5);
        }
    </style>
</head>
<body>
    <p class="named-color">This is a named color.</p>
    <p class="hex-color">This is a hex color.</p>
    <p class="rgb-color">This is an RGB color.</p>
    <p class="rgba-color">This is an RGBA color.</p>
    <p class="hsl-color">This is an HSL color.</p>
    <p class="hsla-color">This is an HSLA color.</p>
</body>
</html>
```

This example demonstrates how to use different color methods in CSS to style text.