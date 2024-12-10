console.log("My E-Commerce");

const title = document.getElementById("first-title");
console.log(title) // id only selects one element as is an id

const itemPrice = document.getElementsByClassName("products-item__price");
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