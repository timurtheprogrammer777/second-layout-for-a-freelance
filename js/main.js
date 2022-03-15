$(function () {


    $('.examples__content').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: true,
      
  
    });

    $('.burger__btn').on('click', function(){
      $('.header__menu__ul').slideToggle();
  });
  
 
  
  
  });