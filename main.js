/**
 * Created by Людмила on 24.04.2017.
 */
$( document ).ready(function() {
  var trigger = $('.hamburger');
  var navSmall =  $('.nav-small');
       isClosed = false;

  trigger.click(function () {
    hamburger_cross();
  });

  function hamburger_cross() {

    if (isClosed == true) {
      trigger.removeClass('is-open');
      trigger.addClass('is-closed');
      navSmall.removeClass('is-open');
      navSmall.addClass('is-closed');
      isClosed = false;
    } else {
      trigger.removeClass('is-closed');
      trigger.addClass('is-open');
      navSmall.removeClass('is-closed');
      navSmall.addClass('is-open');
      isClosed = true;
    }
  }






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



