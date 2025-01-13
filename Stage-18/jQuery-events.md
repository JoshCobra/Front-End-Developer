# Applying jQuery Events

jQuery makes it easy to handle events in a web page. Here are some common jQuery event methods:

## Click Event

To handle a click event:

```javascript
$(document).ready(function(){
    $("#myButton").click(function(){
        alert("Button was clicked!");
    });
});
```

## Hover Event

To handle hover events:

```javascript
$(document).ready(function(){
    $("#myElement").hover(
        function(){
            $(this).css("background-color", "yellow");
        }, 
        function(){
            $(this).css("background-color", "");
        }
    );
});
```

## Keypress Event

To handle keypress events:

```javascript
$(document).ready(function(){
    $(document).keypress(function(event){
        alert("Key pressed: " + event.which);
    });
});
```

## Form Submit Event

To handle form submit events:

```javascript
$(document).ready(function(){
    $("#myForm").submit(function(event){
        event.preventDefault();
        alert("Form submitted!");
    });
});
```

These are just a few examples of how you can use jQuery to handle events. For more information, refer to the [jQuery documentation](https://api.jquery.com/category/events/).