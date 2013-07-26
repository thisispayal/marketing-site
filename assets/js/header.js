var set = null;
var header_image = null;
var last = null;

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
			if(navigator.userAgent.indexOf('Chrome/')!=-1){
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

   	if (value < 1385){
   		set = null;
   		unSelect();
   	}
    if (value >= 1385 && value < 2365 && set != "uses" && scrolling == false){ 
    	setHash("uses");
   		unSelect();
   		$('#uses_link').css('border-bottom', '5px solid white')   
   		
	}
	 if (value >= 2365 && value < 3003 & set!= "features" && scrolling == false){  
	 	setHash("features");	
   		unSelect();
   		$('#features_link').css('border-bottom', '5px solid white')   		
	}
	if (value >= 3003 && value < 3870 & set != "support" && scrolling == false){
		setHash("support");
		unSelect();
		$('#support_link').css('border-bottom', '5px solid white')
	}
	if (value >= 3870 && value < 4739 && set != "pricing" && scrolling == false){
		setHash("pricing");
		unSelect();
		$('#pricing_link').css('border-bottom', '5px solid white')
	}
	if (value >= 4739 && value < 5305 && set != "about_us" && scrolling == false){
		setHash("about_us");
		unSelect();
		$('#about_us_link').css('border-bottom', '5px solid white')
	}
	if (value >= 5305 && set != "contact" && scrolling == false){
		setHash("contact");
		unSelect();
		$('#contact_link').css('border-bottom', '5px solid white')
	}

	$('.anchor_link').click(function(){
		if (last != null){
			$(last).removeAttr('style');
			
		}
		unSelect();
		$(this).css('border-bottom', '5px solid white')
		last = this;
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