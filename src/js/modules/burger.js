let contactInMobileMenu = false
function moveMobileMenu() {
    if (window.outerWidth >= 1600 && $(".header__burger").hasClass("header__burger_active")) {
        let $menu = $(".header__menu"),
            $dropMenu = $(".drop-menu")

            $(".header__burger").removeClass("header__burger_active")
        
        $menu.removeClass("header__menu_active")
        $menu.insertAfter(".header__logo")

        $dropMenu.hide()
        $dropMenu.appendTo(".header__menu")

        $(".header__menu-link").removeClass("active")
    }
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
    let $menu = $(".header__menu"),
        contact = $(".header__contact")
    
    if ($(this).hasClass("header__burger_active")) {
        $menu.addClass("header__menu_active")
        $menu.appendTo("body")
        contact.addClass("header__contact_active")
    } else {
        $menu.removeClass("header__menu_active")
        $menu.insertAfter(".header__logo")
        contact.removeClass("header__contact_active")
        $('.drop-menu').hide();
        $(".header__menu").css("overflow", "")
        $(".header__menu-link").removeClass("active")
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

    let $dropMenu = $('.drop-menu');
    $dropMenu.appendTo("body")
    $dropMenu.show()

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
    let $dropMenu = $(this).parents(".drop-menu")
    $dropMenu.hide()
    $dropMenu.appendTo(".header__menu")
    
    $(".header__menu").css("overflow", "")
    $('body, html').removeClass("lock");
});

$('#services-nav').click(function() {
    let showValue = $(this).attr("data-show")
    if (showValue == "main-menu") {
        $('#services-show').removeClass('active');
        
        let $dropMenu = $(this).parents(".drop-menu")
        $dropMenu.hide()
        $dropMenu.appendTo(".header__menu")
        
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
