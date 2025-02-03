# JSON (JavaScript Object Notation)

## What is JSON?
JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write, and easy for machines to parse and generate. It is based on a subset of the JavaScript Programming Language, Standard ECMA-262 3rd Edition - December 1999.

## Use of JSON
JSON is primarily used to transmit data between a server and a web application as text. It is commonly used in web services and APIs to exchange data between a client and a server.

## Examples

### Example 1: Simple JSON Object
```json
{
    "name": "John Doe",
    "age": 30,
    "isStudent": false
}
```

### Example 2: JSON Array
```json
{
    "employees": [
        { "firstName": "John", "lastName": "Doe" },
        { "firstName": "Anna", "lastName": "Smith" },
        { "firstName": "Peter", "lastName": "Jones" }
    ]
}
```

### Example 3: Nested JSON Object
```json
{
    "company": "Tech Solutions",
    "employees": [
        {
            "firstName": "John",
            "lastName": "Doe",
            "contact": {
                "email": "john.doe@example.com",
                "phone": "123-456-7890"
            }
        },
        {
            "firstName": "Anna",
            "lastName": "Smith",
            "contact": {
                "email": "anna.smith@example.com",
                "phone": "098-765-4321"
            }
        }
    ]
}
```