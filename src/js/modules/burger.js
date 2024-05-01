let contactInMobileMenu = false
function moveMobileMenu() {
    if (window.outerWidth < 1200 && !contactInMobileMenu) {
        $(".header__contact").appendTo(".header__menu")
        $(".header__contact").replaceWith('<li class="header__contact">' + $(".header__contact").html() +'</li>')
        contactInMobileMenu = true
        return
    }
    if (window.outerWidth >= 1200 && contactInMobileMenu) {
        $(".header__contact").insertBefore(".header__burger")
        $(".header__contact").replaceWith('<div class="header__contact">' + $(".header__contact").html() +'</div>')
        contactInMobileMenu = false
        return
    }
}
moveMobileMenu()
$(window).on("resize", function() {
    moveMobileMenu()
})

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
        $('.drop-menu').hide();
        $(".header__menu").css("overflow", "")
    }


    $("body, html").toggleClass("lock")

})

var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
       $(".header").addClass("header_scrolled")
   } else {
      $(".header").removeClass("header_scrolled")
   }
   lastScrollTop = st;

   if (st == 0) {
    $(".header__nav").removeClass("header__nav_bg")
   } else {
    $(".header__nav").addClass("header__nav_bg")
   }
});

$('#services-show').click(function() {
    $(this).toggleClass('active');
    $('.drop-menu').show();
    $(".header__menu").css("overflow", "hidden")

    if (window.outerWidth >= 1600) {
        $('body, html').toggleClass("lock");
    } 
    else if (!$("body").hasClass("lock")) {
        $('body, html').toggleClass("lock");
    }
});

$('#services-hide').click(function() {
    $('#services-show').removeClass('active');
    $(this).parents(".drop-menu").hide()
    $(".header__menu").css("overflow", "")
    $('body, html').removeClass("lock");
});

$('#services-nav').click(function() {
    let showValue = $(this).attr("data-show")
    if (showValue == "main-menu") {
        $('#services-show').removeClass('active');
        $(this).parents(".drop-menu").hide()
        $(".header__menu").css("overflow", "")
        return
    }
    if (showValue == "services") {
        $(".drop-menu__list").removeClass("drop-menu__list_active")
        $(".drop-menu__title").show()
        $(".drop-menu__section").css("padding", "")
        $(this).find("span").html("УСЛУГИ")
        $(this).attr("data-show", "main-menu")
        return
    }
});

$(".drop-menu__title").click(function() {
    if (window.outerWidth >= 1600) { return }

    let sectionTitle = $(this).children("span").html()
    $(this).parent().find(".drop-menu__list").addClass("drop-menu__list_active")

    let header = $(this).parents(".drop-menu").find("#services-nav")
    header.find("span").html(sectionTitle)
    header.attr("data-show", "services")
    $(".drop-menu__title").hide()
    $(".drop-menu__section").css("padding", "0")
})
