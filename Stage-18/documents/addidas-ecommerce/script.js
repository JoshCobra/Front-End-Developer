// jQuery Script
// $(selector).action();

$(document).ready( function() { // All jQuery code, similar to 'defer'
    
    $("#item-1 .products__title").before("<span class='discount'> 🔥SALE!</span>")
    $("#item-6 .products__title").before("<span class='discount'> 🔥SALE!</span>")

    $("#icon__shopBag").click( function() {
        console.log("sopping bag clicked")
    })

    $("#icon__user").click( function() {
        console.log("user clicked")
    })

    $("#icon__menu").click( function() {
        $(".header__nav--menu").toggleClass("show__nav")
    })
})