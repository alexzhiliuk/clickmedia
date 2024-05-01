$("[data-tabs][data-tab-btn]").click(function() {
    let tabsName = $(this).attr("data-tabs"),
        tabId = $(this).attr("data-tab-btn")

    $(`[data-tabs=${tabsName}][data-tab-btn]`).removeClass("tag_active")
    $(`[data-tabs=${tabsName}][data-tab-btn=${tabId}]`).addClass("tag_active")
    
    $(`[data-tabs=${tabsName}][data-tab-id]`).hide()
    $(`[data-tabs=${tabsName}][data-tab-id=${tabId}]`).show()

})