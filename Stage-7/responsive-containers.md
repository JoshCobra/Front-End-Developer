# Apply Responsive Containers
To create responsive containers, you can use CSS to ensure that your containers adapt to different screen sizes. Here are some steps to apply responsive containers:

[Example](documents/Responsive-Containers/)

<div align="center">
    <img src= "resources/example-rescont_1.gif" width=85%"">
</div>

1. **Use Relative Units**: Instead of fixed units like `px`, use relative units like percentages (`%`), `em`, or `rem` to make your containers flexible.

    ```css
    .container {
        width: 80%;
        padding: 1em;
        margin: 0 auto;
    }
    ```

2. **Media Queries**: Use media queries to apply different styles at different screen sizes.

    ```css
    @media (max-width: 768px) {
        .container {
            width: 100%;
            padding: 0.5em;
        }
    }
    ```

3. **Flexbox or Grid Layout**: Utilize CSS Flexbox or Grid layout to create responsive designs.

    ```css
    .container {
        display: flex;
        flex-wrap: wrap;
    }

    .item {
        flex: 1 1 200px;
        margin: 10px;
    }
    ```

4. **Responsive Frameworks**: Consider using responsive frameworks like Bootstrap or Foundation which have built-in classes for responsive containers.

    ```html
    <div class="container">
        <div class="row">
            <div class="col-md-6">Column 1</div>
            <div class="col-md-6">Column 2</div>
        </div>
    </div>
    ```

By following these steps, you can ensure that your containers are responsive and adapt to various screen sizes.