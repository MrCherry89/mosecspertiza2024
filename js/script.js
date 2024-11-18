$(document).ready(function () {
  const swiper = new Swiper(".home-slider-wrap .swiper-container", {
    autoplay: {
      delay: 3000,
    },
    speed: 800,
    loop: true,
    pagination: false,
    navigation: false,
  });

  const swiper2 = new Swiper(".brand-slider .swiper-container", {
    autoplay: {
      delay: 3000,
    },
    speed: 800,
    loop: true,
    pagination: false,
    navigation: false,
    slidesPerView: 10,
    spaceBetween: 20,
    breakpoints: {
      1901: {
        slidesPerView: 10, // На экранах шириной до 1200px — 8 слайдов
      },
      1601: {
        slidesPerView: 8, // На экранах шириной до 1200px — 8 слайдов
      },
      1300: {
        slidesPerView: 6, // На экранах шириной до 1200px — 8 слайдов
      },
      992: {
        slidesPerView: 5, // На экранах шириной до 992px — 6 слайдов
      },
      768: {
        slidesPerView: 4, // На экранах шириной до 768px — 4 слайда
      },
      576: {
        slidesPerView: 3, // На экранах шириной до 576px — 2 слайда
      },
      374: {
        slidesPerView: 2, // На экранах шириной до 576px — 2 слайда
      },
    },
  });

  $(".open-menu").on("click", function () {
    $(".menu-wrap").addClass("open");
    $("body, html").addClass("overflow");
  });

  $(".menu-wrap .close").on("click", function () {
    $(".menu-wrap").removeClass("open");
    $("body, html").removeClass("overflow");
  });
});
