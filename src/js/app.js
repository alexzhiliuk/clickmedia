import * as flsFunctions from './modules/functions.js';
import * as burger from './modules/burger.js';
import * as phoneMask from './modules/phoneMask.js';
import * as raiting from './modules/raiting.js';
import * as certificates from './modules/certificates.js';
import * as cases from './modules/cases.js';
import * as tabs from './modules/tabs.js';
import * as modal from './modules/modal.js';



flsFunctions.isWebp()

let sectionsOffset = new Object()

for (let panel of $(".top-panel__item")) {
    let sectionId = panel.id.slice(4)
    sectionsOffset[sectionId] = $(`#${sectionId}`).offset().top
}

if (Object.keys(sectionsOffset).length > 0) {
    $(window).on("scroll", function() {
    
        let scrollTop = $(window).scrollTop()
        for (let sectionId in sectionsOffset) {
            if (scrollTop > sectionsOffset[sectionId] - 200 && scrollTop < sectionsOffset[sectionId] + 200) {
                $(".top-panel__item").removeClass("top-panel__item_active")
                $(`#for-${sectionId}`).addClass("top-panel__item_active")
            }
        }
    })
}