var set = "home";
var header_image = null;
var last = null;
    

$(document).ready(function() {
	landing = $('.landing_page').height() + $('.testimonials').height() - 300
	uses = landing + $('.uses').height()
	features = uses + $('.features').height()
	support = features + $('.support').height()
	pricing = support + $('.pricing').height()
	about_us = pricing + $('.about_us').height()
	contact = about_us + $('contact').height()


	set = "landing";
	last = "landing";
	
});
 


$(window).scroll( function() {
   var value = $(this).scrollTop();
if (value > 120 && header_image != "imageshare"){
	header_image = "imageshare";
		$('#vigilant').hide();
		$('#imageshare').show();
}

else if (value < 120 && header_image != "vigilant"){
	header_image = "vigilant";
	$('#imageshare').hide();
	$('#vigilant').show();
}

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
		};

	}
  
    if (value >= landing && value < uses && set != "uses" && scrolling == false){ 
    	setHash("uses");
   		unSelect();
   		$('#uses_link').css('border-bottom', '5px solid white')   
   		
	}
	 if (value >= uses && value < features & set!= "features" && scrolling == false){  
	 	setHash("features");	
   		unSelect();
   		$('#features_link').css('border-bottom', '5px solid white')   		
	}
	if (value >= features && value < support & set != "support" && scrolling == false){
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
	if (value >= about_us && set != "contact" && scrolling == false){
		setHash("contact");
		unSelect();
		$('#contact_link').css('border-bottom', '5px solid white')
	}

	$('.anchor_link').click(function(){
		if (last != null){
			$(last).removeAttr('style');
			unSelect();
			$(this).css('border-bottom', '5px solid white')
			last = this;
		}
		else {
			$(this).css('border-bottom', '5px solid white')
			last = this;
		}
		
		
	})

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

	

});