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
    
    $(".header__user").prepend("<span class='item__counter'> 0 </span>")
    $(".item__counter").css("display", "none")
    let counter = 0;

    $(".products__btn").each( function(i, obj) {
        $(this).click( function() {
            if ( $(this).hasClass("products__btn--disabled") ) {
                return
            }
    
            $(".item__counter").text(counter += 1)
    
            if (counter) {
                $(".item__counter").css("display", "block")
            }

            console.log(i, obj)
        })
    })
})