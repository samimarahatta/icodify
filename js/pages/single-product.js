$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    
    focusOnSelect: true
  });
  $(".nav-link").click(function(){
    $(".slider-for").slick("refresh");
    $(".slider-nav").slick("refresh");
});