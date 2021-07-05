$(document).ready(function () {
    $('.product-detail').slick({
        infinite: false,
        autoplay: false,
        arrows: true,
        speed: 300,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
  
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 780,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 599,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});