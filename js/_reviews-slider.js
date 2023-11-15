// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

class ReviewsSlider {
    slider;
    sliderPagination;

    constructor() {
        this.slider = document.querySelector('.reviews-slider');
        this.sliderPagination = this.slider.querySelector('.slider-navs__pages');

        this.initializeSlider();
    }

    initializeSlider() {
        const slider = new Swiper(this.slider, {
            modules: [Navigation, Pagination],
            slidesPerView: 1,
            spaceBetween: 16,
            pagination: {
                el: this.sliderPagination,
                clickable: true,
            },
            slidesPerView: 'auto',
            breakpoints: {
                // when window width is >= 480px
                600: {
                    spaceBetween: 32,
                    slidesPerView: 1,
                },
                900: {
                    slidesPerView: 2,
                }
            }
        });

        const sliderWrapper = this.slider.closest('.reviews-slider__wrapper');
        const sliderNext = sliderWrapper.querySelector('.js-slider-next');
        const sliderPrev = sliderWrapper.querySelector('.js-slider-prev');

        sliderNext.addEventListener('click', function(e) {
            e.preventDefault();
            slider.slideNext()
        });

        sliderPrev.addEventListener('click', function(e) {
            e.preventDefault();
            slider.slidePrev()
        });
    }
}

document.addEventListener("DOMContentLoaded", function(_) {
    if (document.querySelector('.reviews-slider') !== null) {
        new ReviewsSlider();
    }
});
