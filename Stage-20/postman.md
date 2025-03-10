# HTTP Methods

<img src='https://www.ionos.co.uk/digitalguide/fileadmin/_processed_/6/2/csm_diagram-of-http-communication-process_d3324c3b01.webp'>

HTTP defines a set of request methods to indicate the desired action to be performed for a given resource. Here are some commonly used HTTP methods:

### GET
The GET method requests a representation of the specified resource. Requests using GET should only retrieve data.

**Example Usage:**
```plaintext
GET /users
```

### POST
The POST method submits an entity to the specified resource, often causing a change in state or side effects on the server.

**Example Usage:**
```plaintext
POST /users
{
    "name": "Jane Doe",
    "email": "jane.doe@example.com"
}
```

### PUT
The PUT method replaces all current representations of the target resource with the request payload.

**Example Usage:**
```plaintext
PUT /users/1
{
    "name": "Jane Doe",
    "email": "jane.doe@example.com"
}
```

### DELETE
The DELETE method deletes the specified resource.

**Example Usage:**
```plaintext
DELETE /users/1
```

### PATCH
The PATCH method applies partial modifications to a resource.

**Example Usage:**
```plaintext
PATCH /users/1
{
    "email": "jane.newemail@example.com"
}
```

### HEAD
The HEAD method asks for a response identical to that of a GET request, but without the response body.

**Example Usage:**
```plaintext
HEAD /users
```

### OPTIONS
The OPTIONS method describes the communication options for the target resource.

**Example Usage:**
```plaintext
OPTIONS /users
```

### CONNECT
The CONNECT method establishes a tunnel to the server identified by the target resource.

**Example Usage:**
```plaintext
CONNECT /users
```

### TRACE
The TRACE method performs a message loop-back test along the path to the target resource.

**Example Usage:**
```plaintext
TRACE /users
```

# Postman

Postman is a collaboration platform for API development. It simplifies each step of building an API and streamlines collaboration so you can create better APIs faster. Postman provides a user-friendly interface to send requests, inspect responses, and automate testing.

## Examples of Usage

### Sending a GET Request
1. Open Postman and create a new request.
2. Set  the request type to `GET`.
3. Enter the URL of the API endpoint.
4. Click `Send` to execute the request.
5. Inspect the response in the lower pane.

```plaintext
GET https://api.example.com/data
```

### Sending a POST Request
1. Create a new request and set the request type to `POST`.
2. Enter the URL of the API endpoint.
3. Go to the `Body` tab and select `raw` and `JSON` format.
4. Enter the JSON payload.
5. Click `Send` to execute the request.
6. Inspect the response.

```json
POST https://api.example.com/data
{
    "name": "John Doe",
    "email": "john.doe@example.com"
}
```

### Automating Tests
1. Create a new request and set up the request details.
2. Go to the `Tests` tab.
3. Write test scripts using JavaScript to validate the response.

```javascript
pm.test("Status code is 200", function () {
        pm.response.to.have.status(200);
});

pm.test("Response time is less than 200ms", function () {
        pm.expect(pm.response.responseTime).to.be.below(200);
});
```

### Using Collections
1. Create a collection to group related requests.
2. Add requests to the collection.
3. Use the collection runner to execute all requests in the collection sequentially.

### Environment Variables
1. Define environment variables to manage different environments (e.g., development, staging, production).
2. Use variables in requests to dynamically change values.

```plaintext
{{base_url}}/data
```

Postman is a powerful tool that can help streamline API development and testing, making it easier to collaborate and ensure the quality of your APIs.