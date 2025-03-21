# Introduction to Node.js

Node.js is a powerful JavaScript runtime built on Chrome's V8 engine. It allows developers to execute JavaScript code server-side, enabling the creation of scalable and high-performance applications.

## Command Line
Node.js can be executed directly from the command line. To start a Node.js REPL (Read-Eval-Print Loop), simply type:
```bash
node
```
You can also run JavaScript files:
```bash
node filename.js
```

## Core Modules
Node.js comes with several built-in modules to handle various functionalities:
- **fs**: File system operations
- **http**: Building HTTP servers
- **path**: Working with file and directory paths
- **os**: Information about the operating system
- **events**: Event-driven programming

Example of using the `fs` module:
```javascript
const fs = require('fs');
fs.writeFileSync('example.txt', 'Hello, Node.js!');
```

## Local Modules
Local modules are custom modules created by developers. To create a local module:
1. Create a `.js` file (e.g., `math.js`).
2. Export functionality:
    ```javascript
    module.exports.add = (a, b) => a + b;
    ```
3. Import and use it:
    ```javascript
    const math = require('./math');
    console.log(math.add(2, 3)); // Output: 5
    ```

## npm Modules
npm (Node Package Manager) is used to install third-party modules. To install a module:
```bash
npm install module-name
```
Example:
```bash
npm install express
```
To use the installed module:
```javascript
const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Hello, World!'));
app.listen(3000, () => console.log('Server running on port 3000'));
```

Node.js, with its ecosystem of modules, is a versatile tool for modern web development.