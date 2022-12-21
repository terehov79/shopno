(function ($) {

  $(document).ready(function () {
    // TODO SVG Sprite init in IE/SAFARI
    svg4everybody();
  });

  // TODO Burger
  $('button.menu').on('click', function (event) {
    event.preventDefault();
    $(this).toggleClass('active');
    $('.header__menu').toggleClass('menu--active');
    //$('body').toggleClass('overflow');
  });
  $('.wrapper').on('click', function () {
    $('button.menu').removeClass('active');
    $('.header__menu').removeClass('menu--active');
    //$('body').removeClass('overflow');
  });
  // TODO Wrapper click burger disabled
  $('button.menu, .header__menu').on('click', function (event) {
    event.stopPropagation();
  });

  new Swiper('.about--wrap .swiper-container', {
    speed: 1000,
    spaceBetween: 50,
    loop: true,
    slidesPerView: 1,
    pagination: {
      el: '.about--wrap .swiper-pagination',
      type: 'bullets',
      clickable: true
    },
  });

  let userSlider = new Swiper('.says_slider .swiper-container', {
    speed: 1000,
    spaceBetween: 50,
    loop: true,
    slidesPerView: 1,
    pagination: {
      el: '.says_slider .swiper-pagination',
      type: 'bullets',
      clickable: true
    },
  });

  let reviewSlider = new Swiper('.says_slider2 .swiper-container', {
    speed: 1000,
    spaceBetween: 50,
    loop: true,
    slidesPerView: 1,
    // effect: 'fade', разный контент в слайдере
    navigation: {
      nextEl: '.says_slider2 .btn-next',
      prevEl: '.says_slider2 .btn-prev',
    },
  });

  // связка двух слайдеров
  userSlider.controller.control = reviewSlider;
  reviewSlider.controller.control = userSlider;




  $("a[href*='#']").mPageScroll2id();

  $(".services_block__know").on("click", function (event) {
    event.preventDefault();
    let parentEl = $(this).closest('.services_block');
    $('.services_block').removeClass('services_block--active');
    parentEl.addClass('services_block--active')
  });

  $(".services_block__close").on("click", function (event) {
    event.preventDefault();
    $('.services_block').removeClass('services_block--active');
  });

  // TODO Rating init
  let stars = document.querySelectorAll(".stars");
  for (let i = 0; i < stars.length; i++) {
    let star = parseInt(stars[i].getAttribute('data-stars'));
    raterJs({
      max: 5,
      starSize: 18,
      rating: star,
      readOnly: true,
      element: stars[i]
    });
  }


})(jQuery);

