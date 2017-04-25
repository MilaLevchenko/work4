/**
 * Created by Людмила on 24.04.2017.
 */
$( document ).ready(function() {

  $('.portfolio_item').hover(
      function(){
        $(this).find('.portfolio_item_dscr').slideDown(350); //.fadeIn(250)
      },
      function(){
        $(this).find('.portfolio_item_dscr').slideUp(350); //.fadeOut(205)
      }
  );

  $('.owl-carousel').owlCarousel({
    loop:true,
    dotsEach: true,
    autoplay: true,
    autoplayTimeout: 4000,
    responsive:{
      0:{
        items:1
      },
      380:{
        items:2
      },
      600:{
        items:3
      },
      1000:{
        items:5
      }
    }
  })





});



