# HTML Semantic Elements

Semantic elements in HTML provide meaning to the web page rather than just presentation. These elements clearly describe their meaning in a human- and machine-readable way.

## Common Semantic Elements

- `<header>`: Defines a header for a document or a section.

- `<nav>`: Defines a set of navigation links.

- `<section>`: Defines a section in a document.

- `<article>`: Defines an independent, self-contained content.

- `<aside>`: Defines content aside from the content it is placed in.

- `<footer>`: Defines a footer for a document or a section.

- `<main>`: Specifies the main content of a document.

- `<details>`: Defines additional details that the user can view or hide.

- `<cite>`: Defines the title of a work.

- `<time>`: Defines a date/time.

- `<abbr>`: Defines an abbreviation or an acronym.

- `<figure>`: Specifies self-contained content, like illustrations, diagrams, photos, code listings, etc.
    - `<figcaption>`: Defines a caption for a `<figure>` element.

## [Example](/Stage-3/documents/semantic.html)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Semantic Elements Example</title>
</head>
<body>
    <header>
        <h1>Welcome to My Website</h1>
    </header>
    <nav>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
    <main>
        <article>
            <h2>Main Article</h2>
            <p>This is the main content of the page.</p>
        </article>
        <aside>
            <h2>Related Links</h2>
            <ul>
                <li><a href="#link1">Link 1</a></li>
                <li><a href="#link2">Link 2</a></li>
            </ul>
        </aside>
    </main>
    <footer>
        <p>&copy; 2023 My Website</p>
    </footer>
</body>
</html>
```

Using semantic elements improves the accessibility and SEO of your web pages.

<div align="center">

[Intro Stage-3](/Stage-3/) --- [Go Back](/Stage-3/Entities.md)  ---  [Next](/Stage-3/Multi-Media-Elements.md)

</div>