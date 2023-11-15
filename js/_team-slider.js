// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

class TeamSlider {
    slider;
    sliderPagination;

    constructor() {
        this.slider = document.querySelector('.team-slider');
        this.sliderPagination = this.slider.querySelector('.slider-navs__pages');

        this.initializeSlider();
    }

    initializeSlider() {
        const slider = new Swiper(this.slider, {
            modules: [Navigation, Pagination],
            slidesPerView: 4,
            spaceBetween: 24,
            pagination: {
                el: this.sliderPagination,
                clickable: true,
            },
            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 1,
                },
                // when window width is >= 480px
                600: {
                    slidesPerView: 2,
                },
                // when window width is >= 640px
                900: {
                    slidesPerView: 3,
                },
                1200: {
                    slidesPerView: 4,
                }
            }
        });

        const sliderWrapper = this.slider.closest('.team-slider__wrapper');
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
    if (document.querySelector('.team-slider') !== null) {
        new TeamSlider();
    }
});
