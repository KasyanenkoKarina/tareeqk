$(document).ready(function(){
  $('.js-container-slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: true,
    arrows: false,
    variableWidth: true,
    swipe: false,
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          variableWidth: false,
        }
      },
      {
        breakpoint: 769,
        settings: {
          centerMode: true,
          variableWidth: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          swipe: true
        }
      },
    ]
  });
});