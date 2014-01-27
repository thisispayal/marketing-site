var set = "home";
var header_image = null;
   

function setHash(value){
	set = value;
	var r=value;
		if(navigator.userAgent.indexOf('Chrome/')!=-1 || navigator.userAgent.indexOf('Firefox/') !=-1 || navigator.userAgent.indexOf('MSIE 10.0')){
 		top.history.pushState("", "", "#" + r);
 		return;
			};
	if(r.charAt(0)=='/'){
 		top.location.replace(r);
 	}
 	else{
  	top.location.hash=r;
	}

}


function unSelect(){
	$(last).removeAttr('style');
	$('#overview_link').removeAttr('style');
	$('#uses_link').removeAttr('style');
	$('#features_link').removeAttr('style');
	$('#support_link').removeAttr('style');
	$('#pricing_link').removeAttr('style');
	$('#about_us_link').removeAttr('style');
	$('#contact_link').removeAttr('style');
}

 
function setSelected(selector){
	unSelect();
	selector.css('border-bottom', '5px solid white');
}

$(document).ready(function () {
    var thisHash = window.location.hash;
    var hashLength = thisHash.length;
    thisHash = thisHash.substring(1, hashLength);


    if (thisHash == "overview" || thisHash == "uses"
        || thisHash == "features" || thisHash != "support" ||
        thisHash != "pricing" ||thisHash != "about_us" ||
        thisHash != "contact") {
        setHash(thisHash);
        console.log("hello");
    } else {
        setHash("home");
    }

    /* GLOBAL VARIABLES? IS THAT NECESSARY?
    landing = $('.landing_page').height() + $('.testimonials').height() - 200
    overview = landing + $('.overview').height() + 400 //for some reason overview height is smaller than it should be
    uses = overview + $('.uses').height()
    features = uses + $('.features').height()
    support = features + $('.support').height()
    pricing = support + $('.pricing').height()
    about_us = pricing + $('.about_us').height()
    contact = about_us*/
    //Set these values to be the position where the section header sits just under the site nav header.
    var headerHeight = $('.site_header').height();
    var overview = $('.overview').offset().top - headerHeight;
    var uses = $('.uses').offset().top - headerHeight;
    var features = $('.features').offset().top - headerHeight;
    var support = $('.support').offset().top - headerHeight;
    var pricing = $('.pricing').offset().top - headerHeight;
    var about_us = $('.about_us').offset().top - headerHeight;
    var contact = $('.contac').ofset().top - headerHeight;
	
    $("a.anchor_link").click(function(){
      unSelect();
    });

    $(window).scroll( function() {
      var value = $(this).scrollTop();
      if (value > 120 && header_image != "imageshare"){
        header_image = "imageshare";
        $('#vigilant').fadeOut(600);
        $('#vigilant').hide();
	$('#imageshare').fadeIn(600);
      } else if (value < 120 && header_image != "vigilant"){
	header_image = "vigilant";
	$('#imageshare').fadeOut('600');
	$('#imageshare').hide();
	$('#vigilant').fadeIn('600');
      }

      if(scrolling == false){
	if (value < overview && set != "home"){
	  setHash("home");
          unSelect();
	}
	else if (value >= overview && value < uses && set != "overview"){
	  setHash("overview");
   	  setSelected($('#overview_link'));  
	}
        else if (value >= uses && value < features && set != "uses"){ 
    	  setHash("uses");
   	  setSelected($('#uses_link'));
	}
	else if (value >= features && value < support && set!= "features"){  
	  setHash("features");	
   	  setSelected($('#features_link'));
	}
	else if (value >= support && value < pricing && set != "support"){
	  setHash("support");
	  setSelected($('#support_link'));
	}
	else if (value >= pricing && value < about_us && set != "pricing"){
	  setHash("pricing");
	  setSelected($('#pricing_link'));
	}
	else if (value >= about_us && value < contact && set != "about_us"){
	  setHash("about_us");
	  setSelected($('#about_us_link'));
	}
	else if (value >= contact && set != "contact"){
	  setHash("contact");
	  setSelected($('#contact_link'));
	}
    }
  });	
});

