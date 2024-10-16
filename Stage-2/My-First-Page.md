# Basic Structure of an HTML Document:

An HTML document is structured with several key elements, wrapped inside tags, which tell the browser how to display the content.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```
You can get this basic structure with a simple command[^1].
[emmet-abbreviation]()


## Explanation 

### The `<!DOCTYPE html>` element:
```html
<!DOCTYPE html>
``` 
`<!DOCTYPE html>` is a declaration that defines the document type and version of HTML being used. It ensures that the browser renders the page in standards mode, which means it will follow the HTML specifications and display the content correctly.

---

### The `<html lang="en">`:
```html
<html lang="en">
    </html>
```
The `<html lang="en">` tag is part of the opening `<html>` tag and is used to specify the language of the content in an HTML document.

**Common lang values:**
   - `lang="en"`: English
   - `lang="es"`: Spanish
   - `lang="fr"`: French
   - `lang="de"`: German
   - `lang="zh"`: Chinese

---
### The `<head>` element:
```html
  <head>
    </head>
```
The `<head>` element in HTML contains metadata and other information about the webpage that is not directly displayed to users. This section provides important details for the browser, search engines, and external resources that help define how the page should behave and look.

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Title</title>
  <link rel="stylesheet" href="styles.css">
  <script src="script.js"></script>
</head>
```

### Common Elements Inside the `<head>`:
1. `<meta>` Tags:

    Metadata that provides information about the webpage, such as its character set, viewport settings for responsiveness, and SEO details.

    Example:
```html
<meta charset="UTF-8"> <!-- Sets character encoding to UTF-8 -->
<meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- Ensures responsive design -->
```
2. `<title>`:

    Defines the title of the webpage, which is displayed in the browser tab and used as the title in search engine results.

    Example:
```html    
<title>My Awesome Webpage</title>
```

3. `<link>`:

    Links to external resources like stylesheets, fonts, or icons.

    Example:
```html
<link rel="stylesheet" href="styles.css"> <!-- Links to an external CSS file -->
```
4. `<script>`:

    Includes external or inline JavaScript files to add functionality to the webpage.
    
    Example:
```html
<script src="script.js"></script> <!-- Links to an external JavaScript file -->
```

5. `<style>`:

    Allows you to include internal CSS styles that directly affect the webpage's appearance.

    Example:
```html
<style>
  body {
    background-color: lightblue;
  }
</style>
```

6. `<base>`:

    Specifies the base URL for all relative URLs in the document.
    
    Example:
```html
<base href="https://www.example.com/">
```
---
### The `<body>` element:

The `<body>` element in HTML is one of the core structural elements of a webpage. It contains all the content that will be displayed on the browser's screen, such as text, images, links, buttons, forms, and other visual components.

#### Structure of the <body> Element:

```html
<body>
  <h1>Welcome to My Website</h1>
  <p>This is a paragraph of text on the webpage.</p>
  <img src="image.jpg" alt="A description of the image">
  <a href="https://example.com">Click here to visit an external site</a>
</body>
```

#### Key Points About the `<body>`:
- **Content Display:**

    Everything inside the `<body>` tag is what the user sees on the webpage, including:

    - **Text:** Headings, paragraphs, lists, etc.
    - **Media:** Images, videos, audio.
    - **Links:** Hyperlinks to other pages or websites.
    - **Forms:** Input fields, buttons, checkboxes, etc.
    - **Interactive Elements:** Buttons, scripts, embedded elements like iframes, etc.

## Finally we can create our first page
With the things explained above we can create a new `.html` file and create our first webpage


[My First Web Page](/Stage-2/documents/basics-html/html-5.html) 


---
[^1]: You need to have an saved `.html` file in VsCode in order work, simply type `html:5` and select the "*Emmet Abbreviation*"



