$(document).ready(function(){
 $('.slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
  	  arrows: true,
  	  fade: true,
  	  speed: 1000,
  	  cssEase: 'linear'
    });
  $('.client-slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
  	  arrows: false,
  	  fade: true,
  	  speed: 1000,
  	  dots: true,
  	  autoplay: true,
  	  autoplaySpeed: 2000,
    });
 });
