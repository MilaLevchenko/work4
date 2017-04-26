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

  var portfolio = $('.portfolio_item');
  var portfolioDscr = $('.portfolio_item_dscr');

  portfolio.click(function () {

    if (isClosed == true) {
      portfolioDscr.removeClass('is-open');
      isClosed = false;
    } else {
      portfolioDscr.addClass('is-open');
      isClosed = true;
    }
  });

  var showMore = $('.portfolio_btn');
  var portfolioHide = $('.addmore');
  IsHiden = true;

  showMore.click(function () {
    if (IsHiden == false) {
      portfolioHide.hide();
      showMore.text("Show more");
      IsHiden = true;
    }
    else {
      portfolioHide.show();
      showMore.text("Show less");
      IsHiden = false;
    }
  });


  $('.main-box').owlCarousel({
    loop:true,
    nav: true,
    navText: ['<i class="fa fa-angle-left fa-5x"></i>','<i class="fa fa-angle-right fa-5x"></i>'],
    dotsEach: true,
    autoplay: true,
    autoplayTimeout: 4000,
    items: 1
  });

  $('.team-box').owlCarousel({
    loop:true,
    dotsEach: true,
    autoplay: true,
    autoplayTimeout: 5000,
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
  });


  $('body').append('<div class="toTop"><i class="fa fa-angle-double-up fa-3x"></i></div>');
  $(window).scroll(function () {
    if ($(this).scrollTop() != 0) {
      $('.toTop').fadeIn();
    } else {
      $('.toTop').fadeOut();
    }
  });
  $('.toTop').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });

});



