// SELECT ELEMENTS OF THE DOM
console.log("My E-Commerce")

const title = document.getElementById("first-title")
console.log(title) // id only selects one element as is an id

const itemPrice = document.getElementsByClassName("products-item__price")
console.log(itemPrice) 
// HTML Collection of all elements with class name "products-item__price", as it is a class

console.log(itemPrice[2]) // Selecting the third element of the array

const tags = document.getElementsByTagName("section")
console.log(tags)

const elem = document.querySelector(".banner")
// Selects only the first element that matches "class="banner""
console.log(elem)

const elem2 = document.querySelectorAll(".products__item")
// Selects all the elements that matches "class= "products__item""
console.log(elem2) // NodeList 

//---------------------------------------------------------------------------

// CREATE ELEMENTS
const parent = document.querySelector(".products")
const newElem = document.createElement("article")

newElem.setAttribute("class","new") // <article class="new"></article>
console.log(newElem)

parent.append(newElem) // adds the "newElem" to parent ".products" 

//---------------------------------------------------------------------------

//MODIFY ATTRIBUTES
const logo = document.querySelector(".header__logo")
// logo.setAttribute("src","") Change an existing attribute

console.log(logo.getAttribute("src")) // img/cobra-logo.png
console.log(logo.hasAttribute("src")) // true, indicates if the element has the indicated attribute
// logo.removeAttribute("src") removes the attribute

if (logo.hasAttribute("src")) {
    //alert("ALERT!!")
}

//---------------------------------------------------------------------------

// CSS CLASSES

// Select element based on its position 
const parent2 = document.querySelector(".products")
const parent3 = parent2.firstElementChild;
const button = parent3.lastElementChild; // Selects <button class="products-item__btn">Comprar</button>

console.log(parent3)
console.log(button)

// button.classList.add("red") // <button class="products-item__btn red">Comprar</button>
// button.classList.remove("red") removes the class list "red"
// button.classList.replace("red", "blue") first the class to replace and second the replacement class


// Modify Text
const banner__subtitle = document.getElementsByClassName("banner__subtitle")

console.log(banner__subtitle[0].innerText)

banner__subtitle[0].innerText = "Explore Our New Products"


// Modify Style
console.log(button.style)
button.style.color = 'black' // Modifies the text color of the button

//---------------------------------------------------------------------------

// EVENTS 
// Syntax
// target.addEventListener(event, function)

button.addEventListener('click', () => {
    button.classList.toggle('toggle') //toggle class that toggles the bg color
    button.style.color = 'red'; //Changes text color on click
})

const removeItem = document.querySelectorAll(".remove")
console.log(removeItem) // NodeList(3)

removeItem.forEach(elem => {
    elem.addEventListener("click", () => {
        elem.remove();
    })
})

const header = document.querySelector("header")
const cartIcon = header.lastElementChild
const cart = document.querySelector(".cart")
//console.log(cartIcon)

cartIcon.addEventListener('click', () => {
    cart.classList.toggle('toggle')
})

const productMouse = document.querySelector(".mouse")

productMouse.addEventListener("mouseenter", () => {
    productMouse.style.opacity = "0.7"
})

productMouse.addEventListener("mouseleave", () => {
    productMouse.style.opacity = "1"
})