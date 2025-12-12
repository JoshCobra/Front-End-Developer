# File System

The Node.js File System (fs) module, which allows us to interact with the file system on our computer. We will learn how to read from and write to files, create and delete files and directories, and work with file paths.

## Importing the File System Module
To use the File System module in Node.js, we need to import it using the `require` function.

```javascript
const fs = require('fs');
```

## Reading Files
We can read the contents of a file using the `fs.readFile` method. This method takes the file path, encoding, and a callback function as arguments.

```javascript
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File contents:', data);
});
```

## Writing Files
To write data to a file, we can use the `fs.writeFile` method. This method takes the file path, data to write, and a callback function as arguments.

```javascript
fs.writeFile('output.txt', 'Hello, World!', (err) => {
    if (err) {
        console.error('Error writing file:', err);
        return;
    }
    console.log('File written successfully');
});
```

## Creating Directories
We can create a new directory using the `fs.mkdir` method. This method takes the directory path and a callback function as arguments.

```javascript
fs.mkdir('newDirectory', (err) => {
    if (err) {
        console.error('Error creating directory:', err);
        return;
    }
    console.log('Directory created successfully');
});
``` 

## Deleting Files
To delete a file, we can use the `fs.unlink` method. This method takes the file path and a callback function as arguments.

```javascript
fs.unlink('output.txt', (err) => {
    if (err) {
        console.error('Error deleting file:', err);
        return;
    }
    console.log('File deleted successfully');
});
``` 

## Working with File Paths
The `path` module in Node.js provides utilities for working with file and directory paths. We can import it using the `require` function.

```javascript
const path = require('path');
const filePath = path.join(__dirname, 'example.txt');
console.log('File path:', filePath);
```

## Summary
The Node.js File System module allows us to perform various file operations such as reading, writing, creating, and deleting files and directories. By using the `fs` and `path` modules, we can effectively manage files and directories in our Node.js applications.