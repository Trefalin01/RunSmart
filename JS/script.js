$(document).ready(function(){
    $('.carousel__inner').slick({
      dots: false,
      infinite: true,
      speed: 500,
      prevArrow:'<button type="button" class="slick-prev"><img src="icons/carousel/left_solid.png"></button>',
      nextArrow:'<button type="button" class="slick-next"><img src="icons/carousel/right_solid.png"></button>',
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            infinite: true,
            dots: true
          }
        },
      ]

    });
  });
                  