console.log("Josh's eCommerce (Tienda Cobra)")
// Burger Menu Toggle
const menuIcon = document.querySelector(".header__icon-menu")

menuIcon.addEventListener("click", () => {
    document.querySelector(".menu").classList.toggle('open');
})

document.querySelector(".menu__closeIcon").addEventListener("click", () => {
    document.querySelector(".menu").classList.remove('open');
})


// Cart Toggle 
const cartIcon = document.querySelector(".header__icon-cart")
// console.log(cartIcon)

cartIcon.addEventListener("click", () => {
    document.querySelector(".cart").classList.toggle('open')
})

document.querySelector(".cart__closeIcon").addEventListener("click", () => {
    document.querySelector(".cart").classList.remove('open');
})

// Add To Cart
const products__items = document.getElementsByClassName("products__item")
const cart = document.querySelector(".cart")
const button = document.getElementsByClassName("products-item__btn")

Array.from(button).forEach(btn => {
    btn.addEventListener("click", (event) => {
        const productItem = event.target.closest(".products__item");
        const productClone = productItem.cloneNode(true);
        productClone.classList = "cart_item";
        productClone.classList.add("remove")
        
        const productImg = productClone.querySelector("img")
        productImg.classList = "cart-item__img";

        const productH3 = productClone.querySelector("h3")
        productH3.classList = "cart-item__title";

        const productPrice = productClone.querySelector("p")
        productPrice.classList = "cart-item__price";

        const button = productClone.querySelector("button")
        button.remove();

        cart.appendChild(productClone);
    });
}); 


// Remove From Cart
const removeItem = document.querySelectorAll(".remove")

removeItem.forEach(elem => {
    elem.addEventListener("click", () => {
        elem.remove();
    })
})
