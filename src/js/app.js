import * as flsFunctions from './modules/functions.js';
import * as burger from './modules/burger.js';
import * as phoneMask from './modules/phoneMask.js';
import * as raiting from './modules/raiting.js';
import * as certificates from './modules/certificates.js';
import * as cases from './modules/cases.js';
import * as tabs from './modules/tabs.js';
import * as modal from './modules/modal.js';
import * as caseSlider from './modules/caseSlider.js';

import Chart from 'chart.js/auto';



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

const ctx = document.getElementById('myChart');
const DATA_COUNT = 7;


const data = {
  labels: ["Янв.", "Фев.", "Март", "Апр.", "Май", "Июнь", "Июль", "Июль", "Авг.", "Сент.", "Окт.", "Нояб.", "Дек."],
  datasets: [
    {
      data: {
        "Янв.": 6,
        "Фев.": 10,
        "Март": 6,
        "Апр.":  30,
        "Май": 9, 
        "Июнь": 10,
        "Июль": 25, 
        "Июль":  6,
        "Авг.":  9,
        "Сент.":  25,
        "Окт.": 60,
        "Нояб.": 70, 
        "Дек.": 75
      },
      borderColor: "#FF0000",
      backgroundColor: "rgba(255, 0, 0, 0.5)",
    },

  ]
};

// class MyScale extends Chart.Scale {
//     /* extensions ... */
// }
// MyScale.id = 'myScale';
// MyScale.defaults = defaultConfigObject;

// new Chart(ctx, {
//     type: 'line',
//     data: data,
//     options: {
//         responsive: true,
//         plugins: {
//             legend: {
//                 position: 'top',
//             },
//             title: {
//                 display: true,
//                 text: 'Chart.js Line Chart'
//             }
//         },
//         scales: {
//             y: {
//                 // beginAtZero: true,
//                 ticks: {
//                     callback: function(value) {
//                         const customLabels = [0, 5, 10, 75, 100];
//                         if (customLabels.includes(value)) {
//                             return value;
//                         }
//                         return null;
//                     },
//                     stepSize: 1
//                 }
            
                
//             }
//         },
//     },
// });