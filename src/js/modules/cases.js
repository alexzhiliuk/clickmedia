import Swiper, {Autoplay, Navigation, Pagination} from 'swiper';
Swiper.use([Autoplay, Navigation, Pagination]);


const swiperCases = new Swiper('.cases-slider', {
    slidesPerView: 1,
    spaceBetween: 10,
    speed: 1000,
    allowTouchMove: true,

    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },

    breakpoints: {
        576: {
            spaceBetween: 20,
        }
    },

    navigation: {
        nextEl: '.cases__slider-btn_next',
        prevEl: '.cases__slider-btn_prev',
    },

    
});
