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
const products__items = document.getElementsByClassName("products__item")
const cart = document.querySelector(".cart")
const button = document.getElementsByClassName("products-item__btn")

Array.from(button).forEach(btn => {
    if (btn.classList.contains("products-item__btn--disabled")) {
        return null
    } else {
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
    }
}); 
// --------------------------------------------------------------

// Remove From Cart
cart.addEventListener("click", (event) => {
    if (event.target.classList.contains("cart-item__quit")) {
        event.target.closest(".cart_item").remove();
    }
});
// --------------------------------------------------------------

// Total Cart Items
const totalItems = () => {
    const cartItems = document.querySelectorAll(".cart_item");
    return cartItems.length;
};

const updateTotalItems = () => {
    return totalItems;
};

// Update total items whenever an item is added to the cart
Array.from(button).forEach(btn => {
    btn.addEventListener("click", () => {
        updateTotalItems();
    });
});

// Update total items whenever an item is removed from the cart
cart.addEventListener("click", (event) => {
    if (event.target.classList.contains("cart-item__quit")) {
        updateTotalItems();
    }
});

// Update total items on page load
updateTotalItems();

const updateCartBadge = () => {
    const badge = document.querySelector(".header__icon-cart .badge");
    if (badge) {
        badge.textContent = totalItems();
    } else {
        const newBadge = document.createElement("span");
        newBadge.classList.add("badge");
        newBadge.textContent = totalItems();
        document.querySelector(".header__icon-cart").appendChild(newBadge);
    }
};

// Update badge whenever an item is added to the cart
Array.from(button).forEach(btn => {
    btn.addEventListener("click", () => {
        updateCartBadge();
    });
});

// Update badge whenever an item is removed from the cart
cart.addEventListener("click", (event) => {
    if (event.target.classList.contains("cart-item__quit")) {
        updateCartBadge();
    }
});

// Update badge on page load
updateCartBadge();