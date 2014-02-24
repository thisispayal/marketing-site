var scrolling = false; //a global variable used to communicate to another JS module. Bad, but it stays for now.
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
    var caller = this;
    $(caller).click(function (event) {  
      event.preventDefault();
      var locationHref = window.location.href;
      var elementHash = $(caller).attr("href");
      var elementClick = elementHash.replace("#",".");
      scrolling = true;
      var destination = $(elementClick).offset().top - $('.site_header').height(); //want the top of the div to sit under the header
      $("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination}, settings.speed, function() {
         window.location.hash = elementHash;
         scrolling = false;
         last = caller;
      });
        return false;
    })
  })
}
