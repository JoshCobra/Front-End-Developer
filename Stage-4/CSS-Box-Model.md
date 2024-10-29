# CSS Box Model

The CSS Box Model is a fundamental concept in web design and development. It describes the rectangular boxes generated for elements in the document tree and consists of the following components:

1. **Content**: The actual content of the box, where text and images appear.
2. **Padding**: The space between the content and the border. Padding is transparent.
3. **Border**: The area surrounding the padding (if any) and content. The border can have various styles, widths, and colors.
4. **Margin**: The space outside the border. Margins are transparent and separate the element from other elements.

## Visual Representation

<img width="40%" src="/Stage-4/resources/box-model-visual.png">
<img width="40%" src="/Stage-4/resources/box-model-example.png">

>[!NOTE]
> **Orange**: Margin,
> **Black**: Border,
> **Green**: Padding,
> **Blue**: Content

## CSS Properties

- `width` and `height`: Define the width and height of the content area.
- `padding`: Sets the padding area on all four sides of the content.
- `border`: Sets the border around the padding and content.
- `margin`: Sets the margin area on all four sides of the border.

## Example

```css
.box {
    width: 300px;
    height: 150px;
    padding: 20px;
    border: 5px solid black;
    margin: 10px;
}
```

In this example, the `.box` class will create an element with a content area of 300px by 150px, 20px of padding, a 5px solid black border, and a 10px margin.

Understanding the CSS Box Model is crucial for designing and laying out web pages effectively.

<div align="center">

[Intro Stage-4](/Stage-4/) --- [Go Back](/Stage-4/CSS-Units.md)  ---  [Next](/Stage-4/tips.md)

</div>