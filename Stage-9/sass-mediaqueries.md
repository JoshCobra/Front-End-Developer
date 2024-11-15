# Using Media Queries Inside Mixins

Media queries are a powerful tool in CSS that allow you to apply styles based on the characteristics of the device or viewport. When combined with Sass mixins, media queries can be reused throughout your stylesheets, making your code more modular and maintainable.

## Why Use Media Queries Inside Mixins?

1. **Reusability**: Define media queries once and reuse them across multiple selectors.
2. **Maintainability**: Centralize your media query logic, making it easier to update breakpoints.
3. **Readability**: Keep your styles organized and easier to read by separating concerns.

## Example

Here is an example of how to use media queries inside Sass mixins:

```scss
// Define a mixin for a media query
@mixin respond-to($breakpoint) {
    @if $breakpoint == small {
        @media (max-width: 600px) { @content; }
    } @else if $breakpoint == medium {
        @media (max-width: 900px) { @content; }
    } @else if $breakpoint == large {
        @media (max-width: 1200px) { @content; }
    }
}

// Use the mixin in your styles
.container {
    width: 100%;

    @include respond-to(small) {
        width: 100%;
    }

    @include respond-to(medium) {
        width: 80%;
    }

    @include respond-to(large) {
        width: 60%;
    }
}
```

In this example, the `respond-to` mixin takes a breakpoint parameter and applies the corresponding media query. The `.container` class then includes this mixin to adjust its width based on the viewport size.

By using mixins for media queries, you can ensure consistency across your styles and make your code easier to manage.