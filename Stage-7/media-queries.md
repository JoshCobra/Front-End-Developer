# Media Queries

Media queries are a crucial part of responsive web design. They allow you to apply CSS rules based on the characteristics of the device rendering the content, such as its width, height, orientation, and resolution.

## When to Apply Media Queries

[Example](documents/media-queries)

1. **Responsive Layouts**: Use media queries to adjust the layout of your website for different screen sizes. For example, you might want a single-column layout on mobile devices and a multi-column layout on desktops.
2. **Optimizing Images**: Serve different image sizes based on the device's screen size to improve load times and performance.
3. **Adjusting Typography**: Change font sizes, line heights, and other typographic properties to ensure readability across devices.
4. **Hiding/Showing Content**: Show or hide certain elements based on the device's screen size to improve user experience.

## How to Apply Media Queries

Media queries can be applied in various ways:

### Inline CSS

```html
<style>
    @media (max-width: 600px) {
        body {
            background-color: lightblue;
        }
    }
</style>
```

### External CSS

```css
/* styles.css */
@media (max-width: 600px) {
    body {
        background-color: lightblue;
    }
}
```

### Using Link Element

```html
<link rel="stylesheet" media="(max-width: 600px)" href="small-screen.css">
```

### Common Media Query Examples

- **Max-Width**: Apply styles up to a maximum width.

    ```css
    @media (max-width: 768px) {
        .container {
            width: 100%;
        }
    }
    ```

- **Min-Width**: Apply styles from a minimum width and up.

    ```css
    @media (min-width: 769px) {
        .container {
            width: 50%;
        }
    }
    ```

- **Orientation**: Apply styles based on the device's orientation.

    ```css
    @media (orientation: landscape) {
        .container {
            flex-direction: row;
        }
    }
    ```

By using media queries effectively, you can create a more flexible and user-friendly web experience.

<div align="center">

[Intro Stage-7](/Stage-7/) --- [Go Back](/Stage-7/responsive-containers.md)  ---  [Next](/Stage-7/responsive-images.md)

</div>