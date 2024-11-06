# Responsive Text and Images 

[Example](documents/text-and-images/)

Additional resources:
[cdnjs](https://cdnjs.com/libraries/meyer-reset): CSS Reset
This is a type of style sheet that sets default styles for all elements. It is useful to ensure that all browsers render all elements more consistently.
If you want to apply it to your project, you can add the following line, before your actual style sheet, to the head of your HTML file:
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css">

<link rel="stylesheet" href="style.css">
```

1. **Fluid Typography**: Implement fluid typography using the `clamp()` function to create responsive text sizes that adjust between a minimum and maximum value.
    ```css
    h1 {
        font-size: clamp(1.5rem, 2.5vw, 3rem);
    }
    ```

2. **Responsive Images**: Use the `max-width` property to ensure images do not overflow their container.
    ```css
    img {
        max-width: 100%;
        height: auto;
    }
    ```

3. **Picture Element**: Use the `<picture>` element to serve different images based on the device's screen size.
    ```html
    <picture>
        <source media="(max-width: 799px)" srcset="small.jpg">
        <source media="(min-width: 800px)" srcset="large.jpg">
        <img src="default.jpg" alt="Responsive image">
    </picture>
    ```

4. **Responsive Frameworks**: Consider using responsive frameworks like Bootstrap or Foundation which have built-in classes for responsive text and images.


<div align="center">

[Intro Stage-7](/Stage-7/) --- [Go Back](/Stage-7/media-queries.md)  ---  [Next](/Stage-7/tips.md)

</div>