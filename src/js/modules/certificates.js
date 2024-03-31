import Swiper, {Autoplay, Navigation, Pagination} from 'swiper';
Swiper.use([Autoplay, Navigation, Pagination]);


const swiperCertificates = new Swiper('.certificates-slider', {
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
        nextEl: '.certificates__slider-btn_next',
        prevEl: '.certificates__slider-btn_prev',
    },

    
});
