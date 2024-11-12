# SASS Mixins: Examples and Usage

## What are Mixins?
Mixins are reusable blocks of CSS code that can be included in multiple selectors. They help reduce code repetition and make stylesheets more maintainable.

## Basic Syntax
```scss
@mixin mixin-name {
    // CSS properties
}
```

## Common Examples

### 1. Flexbox Mixin
```scss
@mixin flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
}

// Usage
.container {
    @include flex-center;
}
```

### 2. Media Query Mixin
```scss
@mixin breakpoint($size) {
    @media (min-width: $size) {
        @content;
    }
}

// Usage
@include breakpoint(768px) {
    .element {
        width: 50%;
    }
}
```

### 3. Button Mixin with Parameters
```scss
@mixin button($bg-color, $text-color) {
    background-color: $bg-color;
    color: $text-color;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
}

// Usage
.primary-button {
    @include button(#007bff, white);
}
```

## Benefits
- Reduces code duplication
- Improves maintainability
- Makes code more organized
- Enables reusable components