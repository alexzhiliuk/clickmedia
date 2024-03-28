$(".header__burger").click(function() {
    $(this).toggleClass("header__burger_active")
    let {top, left} = $(this).position(),
        wrapper = $(".header__wrapper"),
        right = wrapper.outerWidth() - left - $(this).outerWidth(),
        menu = $(".header__menu"),
        contact = $(".header__contact")
    
    if ($(this).hasClass("header__burger_active")) {
        $(this).css("position", "absolute").css("right", `${right}px`).css("top", `${top}px`)
        wrapper.parent().css("padding", "0").css("top", "0")
        wrapper.addClass("header__wrapper_active")
        menu.css("display", "flex")
        contact.css("display", "flex")
    } else {
        $(this).css("position", "").css("right", ``).css("top", ``)
        wrapper.parent().css("padding", "").css("top", "")
        wrapper.removeClass("header__wrapper_active")
        menu.hide()
        contact.hide()
    }


    $("body").toggleClass("lock")
})

