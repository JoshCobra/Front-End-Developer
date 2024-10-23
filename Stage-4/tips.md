# TIPS

### Avoid Using HTML Exclusively for Styling:
Understand that relying solely on HTML for styling a website is inefficient, hard to read, and restrictive. CSS is introduced to enhance both the readability and the efficiency of applying styles.

### Minimize Style Repetition:
Highlight the importance of avoiding style duplication by using external CSS files. This allows changes to be reflected consistently across the entire website by simply editing a single CSS file.

### Prefer RGB or Hexadecimal Color Codes:
It is recommended to avoid using color keywords in CSS due to their limited palette and the potential for spelling errors. Instead, use color systems like RGB or hexadecimal, which offer a broader range of colors and reduce the chance of mistakes.

### Use Color Picker Tools:
Recommend using online tools, such as color pickers, to efficiently and accurately choose colors, avoiding errors that may arise from manually defining values.

### Encourage the Use of CSS Variables:
Introduce the practice of using CSS variables to define primary colors and reuse them throughout the code. This approach ensures consistency and simplifies global updates to the color palette.

### Use Web-Safe Fonts:
When selecting the `font-family` property, choose web-safe fonts like Arial, Helvetica, and sans-serif. These fonts are widely supported by browsers and ensure consistent display.

### Explore and Use External Fonts:
Experiment with external fonts through services like Google Fonts. Make sure to properly link external fonts in the stylesheet and consider sequential loading to avoid display issues.

### Group Related Text Properties:
Keep your stylesheet organized by grouping text-related properties. For example, group `font-family`, `text-align`, and `letter-spacing` to improve code readability and maintainability.

### Understand the Importance of Sizing Elements:
Recognize that in CSS, all elements, including text and images, need to be properly sized. This contributes to a more accurate and controlled design.

### No Dimensions Without Units:
In CSS, it's essential to understand that dimensions cannot exist without measurements, and measurements require units. Each value must have a specific unit to be correctly interpreted.

### Understand the Use of em and rem for Text:
Use `em` and `rem` units for setting text size. While `em` is relative to the size of its parent element, `rem` is based on the root element (html) size. This approach provides flexibility and consistency in design.

### Experiment with vw and vh for Screen Sizing:
Leverage `vw` (viewport width) and `vh` (viewport height) to size elements relative to the width and height of the viewport. These units are particularly useful when designing components that need to scale proportionally with the screen size.

### Think About Responsive Design from the Start:
Consider using relative units and percentages from the beginning of development to make it easier to create responsive designs. This ensures that content adjusts properly across different devices and screen sizes.

### Avoid Excessive Use of Float:
Although `float` was demonstrated, keep in mind that excessive use can cause design issues. Instead, consider more modern layout techniques, such as Flexbox or Grid.
