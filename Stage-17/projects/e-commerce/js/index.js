console.log("Josh's eCommerce (Tienda Cobra)")

const menu = document.querySelector(".menu")
const menuIcon = document.querySelector(".header__icon-menu")


const cart = document.querySelector(".cart")
const cartIcon = document.querySelector(".header__icon-cart")

cartIcon.appendChild(document.createElement("span"));
const cartItemsIndicator = document.querySelector(".header__icon-cart span")
cartItemsIndicator.id = "cartItemsIndicator"
cartItemsIndicator.textContent = "0"

const addToCartBtn = document.querySelectorAll(".products-item__btn")


const item = document.querySelectorAll(".products__item")

// Burger Menu Toggle
menuIcon.addEventListener("click", () => {
    menu.classList.toggle('open');
})

document.querySelector(".menu__closeIcon").addEventListener("click", () => {
    menu.classList.remove('open');
})
// --------------------------------------------------------------

// Cart Toggle 
cartIcon.addEventListener("click", () => {
    cart.classList.toggle('open')
})

document.querySelector(".cart__closeIcon").addEventListener("click", () => {
    cart.classList.remove('open');
})
// --------------------------------------------------------------

// Add To Cart
// When NodeLis, we need to add event listener for each

function addToCart() {
    addToCartBtn.forEach((button, index) => {
        if (button.classList.contains("products-item__btn--disabled")) {
            return null
        } else {
            button.addEventListener("click", () => {
                const selectedItem = item[index].cloneNode(true);
                selectedItem.classList = "cart__item remove";
                selectedItem.querySelector("img").classList = "cart-item__img";
                selectedItem.querySelector("h3").classList = "cart-item__title";
                selectedItem.querySelector("p").classList = "cart-item__price";
    
                
                if (selectedItem.querySelector("button").classList == "products-item__btn") {
                    selectedItem.querySelector("button").style.display = "none";
                }
    
                cart.appendChild(selectedItem);
                updateCartItems();
            });
        }
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

// Update Total Cart Items
function updateCartItems() {
    const cartItems = document.querySelectorAll(".cart__item").length;
    cartItemsIndicator.textContent = cartItems
}

addToCart();