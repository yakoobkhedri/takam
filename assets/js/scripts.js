// swiper
var login = new Swiper(".login", {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  slidesPerView: 1,
  spaceBetween: 36,
  pagination: {
    el: ".swiper-pagination",
  },
});
