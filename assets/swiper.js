document.addEventListener('DOMContentLoaded', function() {
  
  const mySwiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      540: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 3
      },
      1025: {
        slidesPerView: 4
      },
      1440: {
        slidesPerView: 5
      }
    },
    watchSlidesProgress: true,
    // speed: 1000,
    // autoplay: {
    //   delay: 4000,
    //   disableOnInteraction: false,
    // },
    loop: true,
    loopAdditionalSlides: 1,
    disableOnInteraction: false,
    waitForTransition: false,
    crossFade: true,
  });  
});