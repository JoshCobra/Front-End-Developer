# BEM Methodology in CSS

BEM (Block Element Modifier) is a methodology that helps you to create reusable components and code sharing in front-end development.

## Key Concepts

1. **Block**: The top-level abstraction of a new component.
2. **Element**: A part of a block that performs a certain function.
3. **Modifier**: A flag on a block or element that changes its appearance or behavior.

## Naming Conventions

- **Block**: `.block`
- **Element**: `.block__element`
- **Modifier**: `.block--modifier` or `.block__element--modifier`

## Example

```html
<div class="button button--primary">
    <span class="button__text">Click me</span>
</div>
```

In this example:
- `button` is the Block.
- `button__text` is an Element of the Block.
- `button--primary` is a Modifier of the Block.

## Benefits

- **Reusability**: Encourages the creation of small, reusable components.
- **Maintainability**: Clear structure makes it easier to maintain and update code.
- **Scalability**: Helps in scaling projects by providing a consistent naming convention.

## Resources

- [BEM Official Website](http://getbem.com/)
- [BEM Cheat Sheet](https://en.bem.info/methodology/quick-start/)

