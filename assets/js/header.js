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

	landing = $('.landing_page').height() + $('.testimonials').height() - 200
	overview = landing + $('.overview').height() + 400 //for some reason overview height is smaller than it should be
	uses = overview + $('.uses').height()
	features = uses + $('.features').height()
	support = features + $('.support').height()
	pricing = support + $('.pricing').height()
	about_us = pricing + $('.about_us').height()
	contact = about_us

	$("a.anchor_link").click(function(){
	unSelect();
	})
	
});
 


$(window).scroll( function() {
   var value = $(this).scrollTop();
if (value > 120 && header_image != "imageshare"){
    header_image = "imageshare";
        $('#vigilant').fadeOut(600);
        $('#vigilant').hide();
		$('#imageshare').fadeIn(600);
}

else if (value < 120 && header_image != "vigilant"){
	header_image = "vigilant";
	$('#imageshare').fadeOut('600');
	$('#imageshare').hide();
	$('#vigilant').fadeIn('600');
}


	if (value < landing && set != "home" && scrolling == false){
		setHash("home");
		unSelect();
	}
	if (value >= landing && value < overview && set != "overview" && scrolling == false){
		setHash("overview");
   		unSelect();
   		$('#overview_link').css('border-bottom', '5px solid white')   
	}
  
    if (value >= overview && value < uses && set != "uses" && scrolling == false){ 
    	setHash("uses");
   		unSelect();
   		$('#uses_link').css('border-bottom', '5px solid white')   
   		
	}
	 if (value >= uses && value < features && set!= "features" && scrolling == false){  
	 	setHash("features");	
   		unSelect();
   		$('#features_link').css('border-bottom', '5px solid white')   		
	}
	if (value >= features && value < support && set != "support" && scrolling == false){
		setHash("support");
		unSelect();
		$('#support_link').css('border-bottom', '5px solid white')
	}
	if (value >= support && value < pricing && set != "pricing" && scrolling == false){
		setHash("pricing");
		unSelect();
		$('#pricing_link').css('border-bottom', '5px solid white')
	}
	if (value >= pricing && value < about_us && set != "about_us" && scrolling == false){
		setHash("about_us");
		unSelect();
		$('#about_us_link').css('border-bottom', '5px solid white')
	}
	if (value >= contact && set != "contact" && scrolling == false){
		setHash("contact");
		unSelect();
		$('#contact_link').css('border-bottom', '5px solid white')
	}

	

});
