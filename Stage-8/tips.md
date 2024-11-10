# TIPS 

1. **What is CSS Arquitecure?**
    - CSS Architecture is a set of guidelines that help you structure your CSS code in a way that makes it more maintainable and scalable. It is a way to organize your CSS code so that it is easier to manage and update as your project grows.

2. **Why is CSS Architecture important?**
    - CSS Architecture is important because it helps you write better CSS code. It helps you organize your code in a way that makes it easier to manage and update. It also helps you write more maintainable and scalable code.

3. **What are the benefits of using CSS Architecture?**
    - There are many benefits to using CSS Architecture. Some of the main benefits include:
        - Better organization of your CSS code
        - Easier to manage and update your code
        - More maintainable and scalable code
        - Better performance
        - Easier to collaborate with other developers

4. **What is BEM and its propuse?**
    - BEM stands for Block Element Modifier. It is a naming convention for CSS classes that helps you write more maintainable and scalable CSS code. BEM is based on the idea that each CSS class should represent a single block of content, an element within that block, or a modifier of that block or element.

5. **What are the three parts of a BEM class name?**
    - A BEM class name consists of three parts: the block name, the element name, and the modifier name. The block name represents the main block of content, the element name represents an element within that block, and the modifier name represents a modifier of that block or element.

6. **How BEM benefits to your project?**
    - BEM helps you write more maintainable and scalable CSS code. It helps you organize your CSS code in a way that makes it easier to manage and update. It also helps you write more modular and reusable code.

7. **How can you improve accessibility in a products section?**
    - To improve accessibility in a products section, you can:
        - Use aria-label attributes to provide descriptive labels for elements
        - Use aria-labelledby attributes to associate labels with form elements
        - Use aria-describedby attributes to provide additional information about form elements

8. **Avoid nesting selectors**
    - Avoid nesting selectors in your CSS code. Nesting selectors can make your code harder to read and maintain. Instead, use BEM or another naming convention to keep your code organized and easy to manage.

9. **Excessive specific selectors**
    - Avoid using excessively specific selectors in your CSS code. Excessively specific selectors can make your code harder to maintain and update. Instead, use more general selectors that target multiple elements.

10. **Avoid Redundant CSS**
    - Avoid writing redundant CSS code. Redundant CSS code can make your code harder to maintain and update. Instead, use a naming convention like BEM to keep your code organized and easy to manage.
    
    ```css
    Example:
    /* Unnecessary Code */ 
    h1 {  
        color: red; 
    } 
    /* Excessive specific selector */
    div.container ul#nav li a {  
        font-size: 16px; 
    } 
    
    Solution: 
    /* Avoid redundancy and unnecessary code */
    h1 {  
        color: blue; /* Modified to illustrate change */    } 
    /* More General Selector */ 
    .nav-link {  
        font-size: 16px; 
    } 
    ```

11. **Bad practices in Cascade and Inheritance**
    - Understand and handle the cascade and inheritance in CSS. Avoid bad practices like using `!important` or inline styles. Instead, use a naming convention like BEM to keep your code organized and easy to manage.

12. **Modularity and Reusability**
    - Write modular and reusable CSS code. Use a naming convention like BEM to keep your code organized and easy to manage. This will help you write more maintainable and scalable code.
    ```html 
    Problem: 
    <!-- Code without component division --> 
    <div class="header">  
        <ul class="menu">    
            <li><a href="#">Home</a></li>    
            <li><a href="#">About</a></li>  
        </ul> 
    </div> 

    Solution: 
    <!-- Component division --> 
    <header class="header">  
        <nav class="menu">    
            <ul>      
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>    
            </ul>  
        </nav> 
    </header>
    ```

13. **Avoid Non-Descriptive Class and ID Names**
    - Avoid using non-descriptive class and ID names in your CSS code. Non-descriptive class and ID names can make your code harder to read and maintain. Instead, use a naming convention like BEM to keep your code organized and easy to manage.

14. **Follow a Nomenclature Methodology**
    - Follow a nomenclature methodology like BEM, SMACSS o OOCSS to keep your code organized and easy to manage. This will help you write more maintainable and scalable code.
    Example: 

    Problem: 
    ```css
    /* Poorly named and hard to understand classes */ 
    .f1, .blue-text, .content-width { 
        /* Styles here */ 
    } 
    
    Solution: 
    /* Apply class naming methodology */ 
    .block {  
        /* Styles here */ 
    } 
    .block__text--blue {  
        /* Styles here */ 
    } 
    .block__content {  
        /* Styles here */ 
    }
    ```
    ```