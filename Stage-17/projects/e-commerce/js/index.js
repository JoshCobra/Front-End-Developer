console.log("Josh's eCommerce (Tienda Cobra)")
// Burger Menu Toggle
const menuIcon = document.querySelector(".header__icon-menu")

menuIcon.addEventListener("click", () => {
    document.querySelector(".menu").classList.toggle('open');
})

document.querySelector(".menu__closeIcon").addEventListener("click", () => {
    document.querySelector(".menu").classList.remove('open');
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
const cart = document.querySelector(".cart")
const addToCartBtn = document.querySelectorAll(".products-item__btn")
const item = document.querySelectorAll(".products__item")

// When NodeLis, we need to add event listener for each
addToCartBtn.forEach((button, index) => {
    button.addEventListener("click", () => {
        const selectedItem = item[index].cloneNode(true);
        selectedItem.classList = "cart__item remove";
        if (selectedItem.querySelector("button").classList == "products-item__btn") {
            selectedItem.querySelector("button").style.display = "none";
        }
        cart.appendChild(selectedItem);
    });
});

// --------------------------------------------------------------

// Remove From Cart
cart.addEventListener("click", (event) => {
    if (event.target.classList.contains("cart-item__quit")) {
        event.target.closest(".remove").remove();
    }
});
// --------------------------------------------------------------

// Total Cart Items