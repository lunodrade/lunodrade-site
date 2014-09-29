
/*!
*   
*   Luciano Andrade
*   Teste de comentário para preservar no main.coffee
*
 */

(function() {
  $(function() {
    console.log("DOM is ready");
    console.log("teste segunda linha");
    console.log("terceiro console");
    $('.div-lorem').delay(5000).fadeOut('slow').delay(5000).fadeIn('slow');
    $('#nav').delay(5000).fadeOut('slow').delay(5000).fadeIn('slow');
    return $('.lorem p').animate({
      opacity: .2
    }, 2000, function() {
      return $('.lorem').fadeOut('slow').delay(2000).fadeIn('slow');
    });
  });

}).call(this);
