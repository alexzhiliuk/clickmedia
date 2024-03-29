$(".header__burger").click(function() {
    $(this).toggleClass("header__burger_active")
    let {top, left} = $(this).position(),
        wrapper = $(".header__wrapper"),
        menu = $(".header__menu"),
        contact = $(".header__contact")
    
    if ($(this).hasClass("header__burger_active")) {
        wrapper.parent().css("padding", "0").css("top", "0")
        wrapper.addClass("header__wrapper_active")
        menu.addClass("header__menu_active")
        contact.addClass("header__contact_active")
    } else {
        wrapper.parent().css("padding", "").css("top", "")
        wrapper.removeClass("header__wrapper_active")
        menu.removeClass("header__menu_active")
        contact.removeClass("header__contact_active")
    }


    $("body").toggleClass("lock")
})

