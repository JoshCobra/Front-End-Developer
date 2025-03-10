# HTTP Methods



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