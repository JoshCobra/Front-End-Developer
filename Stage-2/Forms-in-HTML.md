# How to Create Forms in HTML

Forms in HTML allow users to enter data and submit it to a server. The main elements used in forms are `<form>`, `<input>`, `<label>`, `<textarea>`, and `<button>`.

Use the [`forms.html`](/Stage-2/documents/forms-html/forms.html) to see the basic inputs

The [`myform.html` Example](/Stage-2/documents/forms-html/myform.html)

### Basic Form Elements:
1. **`<form>`**: Defines the form and specifies where the data should be submitted using the `action` attribute.
2. **`<input>`**: Defines an input field where the user can enter data.
3. **`<label>`**: Defines a label for the form controls.
4. **`<textarea>`**: Defines a multi-line input field for longer text.
5. **`<button>`**: Defines a button that can submit the form.

### Example of a Basic Form:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Form Example</title>
</head>
<body>

<form>
    <div>
        <label for="name">Name:</label> <!-- A label for the name input -->
        <input type="text" id="name" name="name" required> <!-- A text input for the user's name -->
    </div>

    <div>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required> <!-- An email input field -->
    </div>

    <div>
        <label for="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea> <!-- A text area for multi-line input -->
    </div>
   
    <div>
        <button type="submit">Submit</button> <!-- A button to submit the form -->
    </div>
</form>

</body>
</html>
```

<div align="center">

[Intro Stage-2](/Stage-2/) --- [Go Back](/Stage-2/Tables-in-HTML.md)  ---  [Next](/Stage-2/Final-Website.md)

</div>


