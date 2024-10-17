# HTML, CSS, and JavaScript Examples

## HTML Example

HTML (HyperText Markup Language) is the standard language for creating web pages and web applications. It provides the structure of a webpage, allowing you to define elements such as headings, paragraphs, links, images, and other types of content. HTML elements are represented by tags, which are written using angle brackets.

For example, the `<h1>` tag defines a top-level heading, and the `<p>` tag defines a paragraph. HTML documents are structured in a hierarchical manner, with elements nested within each other to create the desired layout and content structure.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Example</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This is an example of HTML.</p>
</body>
</html>
```


## What is CSS?

CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of a document written in HTML or XML. CSS defines how elements should be rendered on screen, on paper, in speech, or on other media. It allows you to control the layout, colors, fonts, and overall visual appearance of your web pages.

CSS works by associating rules with HTML elements. These rules specify how the content of the elements should be displayed. For example, you can use CSS to change the color of text, the spacing between paragraphs, the size and style of fonts, and the layout of the entire page.

A simple CSS rule consists of a selector and a declaration block. The selector points to the HTML element you want to style, and the declaration block contains one or more declarations separated by semicolons. Each declaration includes a CSS property name and a value, separated by a colon.

Here's an example of a CSS rule:

```css
h1 {
    color: blue;
    font-size: 24px;
}
```

In this example, the `h1` selector targets all `<h1>` elements in the HTML document, and the declarations set the text color to blue and the font size to 24 pixels.

### CSS Example

```css
body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    margin: 0;
    padding: 0;
}

h1 {
    color: #333;
    text-align: center;
}

p {
    color: #666;
    text-align: center;
}
```

## What is JavaScript?

JavaScript is a versatile programming language primarily used to create interactive and dynamic content on web pages. It is an essential part of web development, alongside HTML and CSS. JavaScript allows you to implement complex features such as form validation, interactive maps, animated graphics, and much more.

JavaScript can be used on both the client-side and server-side. On the client-side, it runs in the browser and can manipulate the Document Object Model (DOM) to update the content and style of a web page in real-time. On the server-side, JavaScript can be used with environments like Node.js to build scalable network applications.

JavaScript is known for its event-driven, functional, and imperative programming styles. It supports object-oriented programming and has a rich ecosystem of libraries and frameworks, such as React, Angular, and Vue.js, which simplify the development of complex web applications.

Here's a simple example of JavaScript code that changes the content of an HTML element when a button is clicked:

### JavaScript Example
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Example</title>
</head>
<body>
    <h1 id="greeting">Hello, World!</h1>
    <button onclick="changeGreeting()">Click me</button>

    <script>
        function changeGreeting() {
            document.getElementById('greeting').innerText = 'Hello, JavaScript!';
        }
    </script>
</body>
</html>
```

<div align="center">

[Stage 1 Intro](/Stage-1)    ---     [Go Back](/Stage-1/Difference-Front-End-Back-End.md)      ---     [Next](/Stage-1/Setting-Up-Development-Tools.md)

</div>
