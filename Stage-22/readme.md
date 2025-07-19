# TypeScript 
## Introduction

TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. It adds optional static types, classes, and interfaces, making code easier to read and maintain.

## Environment Configuration

To set up a TypeScript environment:

1. **Install Node.js**: Download and install from [nodejs.org](https://nodejs.org/).
2. **Initialize your project**:
    ```bash
    npm init -y
    ```
3. **Install TypeScript**:
    ```bash
    npm install --save-dev typescript
    ```
4. **Create a configuration file**:
    ```bash
    npx tsc --init
    ```
    This generates a `tsconfig.json` file to customize your TypeScript setup.

## Data Types and Structures

TypeScript supports several built-in data types:

- **Number**: `let age: number = 30;`
- **String**: `let name: string = "Alice";`
- **Boolean**: `let isActive: boolean = true;`
- **Array**: `let scores: number[] = [90, 80, 70];`
- **Tuple**: `let user: [string, number] = ["Bob", 25];`
- **Enum**:
  ```typescript
  enum Direction {
     Up,
     Down,
     Left,
     Right
  }
  ```
- **Any**: `let value: any = "Could be anything";`
- **Object**: 
  ```typescript
  let person: { name: string; age: number } = { name: "Eve", age: 22 };
  ```

TypeScript also supports interfaces and classes for defining complex data structures.
