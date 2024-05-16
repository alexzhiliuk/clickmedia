$(".modal__close").click(function() {
    $(this).parents(".modal-wrapper").hide()
    $("html, body").removeClass("lock")
})

$(".modal-wrapper").click(function(e) {
    if ($(e.target).is(".modal-wrapper")) {
        $(this).hide()
        $("html, body").removeClass("lock")
    }
})
