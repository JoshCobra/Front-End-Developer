# Nesting in SASS
Nesting in SASS allows you to nest your CSS selectors in a way that follows the same visual hierarchy of your HTML. This makes your CSS more readable and maintainable.

## Example
[Example](documents/sas-practice/)

```scss
nav {
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    li { 
        display: inline-block; 
    }

    a {
        display: block;
        padding: 6px 12px;
        text-decoration: none;
    }
}
```

In this example, the `ul`, `li`, and `a` selectors are nested inside the `nav` selector, indicating that they are children of the `nav` element in the HTML structure.

### Comparison: Nesting vs Without Nesting

#### Without Nesting

```scss
nav ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

nav li { 
    display: inline-block; 
}

nav a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
}
```

#### With Nesting

```scss
nav {
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    li { 
        display: inline-block; 
    }

    a {
        display: block;
        padding: 6px 12px;
        text-decoration: none;
    }
}
```

As shown, nesting helps to group related styles together, making the code more organized and easier to read.
