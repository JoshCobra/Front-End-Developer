console.log("Josh's eCommerce (Tienda Cobra)")

const cart = document.querySelector(".cart")
const addToCartBtn = document.querySelectorAll(".products-item__btn")
const item = document.querySelectorAll(".products__item")
const menu = document.querySelector(".menu")
const menuIcon = document.querySelector(".header__icon-menu")

// Burger Menu Toggle
menuIcon.addEventListener("click", () => {
    menu.classList.toggle('open');
})

document.querySelector(".menu__closeIcon").addEventListener("click", () => {
    menu.classList.remove('open');
})
// --------------------------------------------------------------

// Cart Toggle 
const cartIcon = document.querySelector(".header__icon-cart")
// console.log(cartIcon)

cartIcon.addEventListener("click", () => {
    document.querySelector(".cart").classList.toggle('open')
})

document.querySelector(".cart__closeIcon").addEventListener("click", () => {
    document.querySelector(".cart").classList.remove('open');
})
// --------------------------------------------------------------

// Add To Cart
// When NodeLis, we need to add event listener for each
function addToCart() {
    addToCartBtn.forEach((button, index) => {
        button.addEventListener("click", () => {
            const selectedItem = item[index].cloneNode(true);
            selectedItem.classList = "cart__item remove";
            if (selectedItem.querySelector("button").classList == "products-item__btn") {
                selectedItem.querySelector("button").style.display = "none";
            }
            cart.appendChild(selectedItem);
            updateCartItems();
        });
    });
}

// --------------------------------------------------------------

// Remove From Cart
cart.addEventListener("click", (event) => {
    if (event.target.classList.contains("cart-item__quit")) {
        event.target.closest(".remove").remove();
        updateCartItems();
    }
});
// --------------------------------------------------------------

// Total Cart Items

const cartItems = document.querySelectorAll(".cart__item").length

function updateCartItems() {
    const cartItems = document.querySelectorAll(".cart__item").length;
    console.log(cartItems);
}

addToCart();