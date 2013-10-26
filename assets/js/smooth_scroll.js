var scrolling = false;
var last = null;
$(document).ready(function(){
  
  $("a.anchor_link").anchorAnimate()

 
});

jQuery.fn.anchorAnimate = function(settings) {

  settings = jQuery.extend({
    speed : 1100
  }, settings); 
  
  return this.each(function(){
    $(last).removeAttr('style');
    var caller = this
    $(caller).click(function (event) {  
      event.preventDefault()
      var locationHref = window.location.href
      var elementClick = $(caller).attr("href")
      scrolling = true;
      var destination = $(elementClick).offset().top;
      $("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination}, settings.speed, function() {
        window.location.hash = elementClick
         scrolling = false;
         $(caller).css('border-bottom', '5px solid white')
         last = caller;
      });
        return false;
    })
  })
}