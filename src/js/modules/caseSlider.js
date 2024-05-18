import Swiper, {Autoplay, Navigation, Pagination} from 'swiper';
Swiper.use([Autoplay, Navigation, Pagination]);


$(".case-item__slider").each(function(i, el) {
    $(el).attr('id', `case-item-slider-${i}`)
    $(el).find(".case-item__slider-pagination").attr('id', `case-item-slider-${i}-pagination`)

    new Swiper(`#case-item-slider-${i}`, {
        slidesPerView: 'auto',
        spaceBetween: 10,
        speed: 1000,
        allowTouchMove: true,
    
        breakpoints: {
            576: {
                spaceBetween: 20,
            }
        },
    
        pagination: {
            el: `#case-item-slider-${i}-pagination`,
            type: 'bullets',
            clickable: true,
        },
    
        
    });
})

// const swiperCertificates = new Swiper('#case-item-slider-1', {
//     slidesPerView: 'auto',
//     spaceBetween: 10,
//     speed: 1000,
//     allowTouchMove: true,

//     breakpoints: {
//         576: {
//             spaceBetween: 20,
//         }
//     },

//     pagination: {
//         el: '#case-item-slider-1-pagination',
//         type: 'bullets',
//         clickable: true,
//     },

    
// });


// $('.case-item__slider').slick({
//     dots: true,
//     infinite: false,
//     arrows: false,
//     speed: 300,
//     slidesToShow: 1,
//     variableWidth: true,
//     touchThreshold:100,
//   });