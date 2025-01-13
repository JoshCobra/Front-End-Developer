// jQuery Script
// $(selector).action();

$(document).ready( function() { // All jQuery code, similar to 'defer'
    
    $("#item-1 .products__title").before("<span class='discount'> 🔥SALE!</span>")
    $("#item-6 .products__title").before("<span class='discount'> 🔥SALE!</span>")

    $("#icon__shopBag").click( function() {
        console.log("sopping bag clicked")
        $(".header__user--toggle").removeClass("show__nav")
        $(".header__nav--menu").removeClass("show__nav")
    })

    $("#icon__user").click( function() {
        $(".header__user--toggle").toggleClass("show__nav")
        $(".header__nav--menu").removeClass("show__nav")
    })

    $("#icon__menu").click( function() {
        $(".header__nav--menu").toggleClass("show__nav")
        $(".header__user--toggle").removeClass("show__nav")
    })

    $(".products__btn").click()
})