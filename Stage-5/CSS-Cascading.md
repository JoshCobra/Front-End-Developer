# Cascading in CSS

Cascading in CSS refers to the way styles are applied to HTML elements based on the hierarchy and specificity of the rules. The term "cascading" comes from the fact that multiple CSS rules can apply to the same element, and the browser must determine which rule to apply.

## Key Concepts

- **Inheritance**: Some CSS properties are inherited from parent elements to child elements. For example, `color` and `font-family` are inherited, while `margin` and `padding` are not.

- **Specificity**: Specificity determines which CSS rule is applied by the browser when multiple rules could apply to the same element. Specificity is calculated based on the types of selectors used:
    1. Inline styles (e.g., `style="..."`) have the highest specificity.
    2. IDs (e.g., `#header`) have higher specificity than classes (e.g., `.menu`), attributes (e.g., `[type="text"]`), and pseudo-classes (e.g., `:hover`).
    3. Classes, attributes, and pseudo-classes have higher specificity than element selectors (e.g., `div`, `p`).

- **Source Order**: When two rules have the same specificity, the one that appears later in the CSS file takes precedence.

## Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>CSS Cascading Example</title>
     <style>
          p {
                color: blue; /* Element selector */
          }
          .highlight {
                color: red; /* Class selector */
          }
          #unique {
                color: green; /* ID selector */
          }
     </style>
</head>
<body>
     <p>This paragraph is blue.</p>
     <p class="highlight">This paragraph is red.</p>
     <p id="unique">This paragraph is green.</p>
     <p class="highlight" id="unique">This paragraph is green due to higher specificity of ID selector.</p>
</body>
</html>
```

In this example, the last paragraph has both a class and an ID. The ID selector has higher specificity, so the text color is green.

- **The `!important` Keyword**: 

The `!important` keyword can be used to override other styles and force a rule to take precedence. However, it is generally recommended to avoid using `!important` as it can make the CSS harder to maintain. Its considered a bad practice.

## Code Order 
In this example, the second rule will override the first rule because it appears later in the CSS file.

```css
main p{/*1st rule*/
    color: red;
}

main p{/*2nd rule*/
    color: blue;
}
```