// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

class StagesSlider {
    slider;
    sliderPagination;
    sliderNavs;

    constructor() {
        this.slider = document.querySelector('.stages-slider');
        this.perview = this.slider.dataset.perview;
        this.sliderPagination = this.slider.closest(".stages-slider__wrapper").querySelector('.slider-navs__pages');
        this.sliderNavs = this.slider.closest(".stages-slider__wrapper").querySelector('.slider-navs');

        this.initializeSlider();
    }

    initializeSlider() {
        const slider = new Swiper(this.slider, {
            modules: [Navigation, Pagination],
            slidesPerView: 'auto',
            spaceBetween: 16,
            pagination: {
                el: this.sliderPagination,
                clickable: true,
            },
            breakpoints: {
                // when window width is >= 480px
                600: {
                    slidesPerView: this.perview - 2,
                    spaceBetween: 24,
                },
                // when window width is >= 640px
                900: {
                    slidesPerView: this.perview - 1,
                },
                1200: {
                    slidesPerView: this.perview,
                }
            },
            on: {
                init: function (swiper) {
                    const sliderNavs = this.el.closest(".stages-slider__wrapper").querySelector('.slider-navs');
                    const sliderItems = this.el.closest(".stages-slider__wrapper").querySelector('.stages-slider__items');
                    const sliderHeading = this.el.closest(".stages-slider__wrapper").querySelector('.stages-slider__heading');

                    const defaultSlideCount = this.el.querySelectorAll('.swiper-slide').length;

                    if (defaultSlideCount <= this.params.slidesPerView) {
                        sliderNavs.classList.add('hidden');
                    } else {
                        sliderNavs.classList.remove('hidden');
                    }

                    if (sliderNavs.hasAttribute("data-relocate")) {
                        var mediaQuery = window.matchMedia("(max-width: 600px)");
                        if (mediaQuery.matches) {

                        }
                        mediaQuery.addEventListener('change', event => {
                            if (event.matches) {
                                sliderItems.append(sliderNavs);
                            } else {
                                sliderHeading.append(sliderNavs);
                            }
                        });
                    }

                },
            },
        });

        const sliderWrapper = this.slider.closest('.stages-slider__wrapper');
        const sliderNext = sliderWrapper.querySelector('.js-slider-next');
        const sliderPrev = sliderWrapper.querySelector('.js-slider-prev');

        sliderNext.addEventListener('click', function (e) {
            e.preventDefault();
            slider.slideNext()
        });

        sliderPrev.addEventListener('click', function (e) {
            e.preventDefault();
            slider.slidePrev()
        });

        const defaultSlideCount = this.slider.querySelectorAll('.swiper-slide').length;
        const activeSlidesCount = this.slider.querySelectorAll('.swiper-slide-active').length;
        console.log(defaultSlideCount);
        console.log(slider.slidesPerView);

        if (slider.visibleSlides != undefined) {
            if (defaultSlideCount > slider.visibleSlides.length) {
                slider.classList.add("slider-has-init");
            } else {
                slider.classList.remove('slider-has-init');
            }
        }
    }
}

document.addEventListener("DOMContentLoaded", function (_) {
    if (document.querySelector('.stages-slider') !== null) {
        new StagesSlider();
    }
});
