import Swiper, {Autoplay, Navigation, Pagination} from 'swiper';
Swiper.use([Autoplay, Navigation, Pagination]);


const swiperRaiting = new Swiper('.raiting-slider', {
    slidesPerView: 'auto',
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
        nextEl: '.raiting__slider-btn_next',
        prevEl: '.raiting__slider-btn_prev',
    },

    
});
