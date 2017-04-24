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
});