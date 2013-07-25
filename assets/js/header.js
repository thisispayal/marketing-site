var set = null;
var header_image = null;
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

   	if (value <= 404){
   		set = 0;
   		unSelect();
   	}
    if (value > 404 && value <= 1361 && set != "uses"){ 
    	setHash("uses");
   		unSelect();
   		$('#uses_link').css('border-bottom', '5px solid white')   
   		
	}
	 if (value > 1361 && value <= 1931 & set!= "features"){  
	 	setHash("features");	
   		unSelect();
   		$('#features_link').css('border-bottom', '5px solid white')   		
	}
	if (value > 1931 && value <= 2785 & set != "support"){
		setHash("support");
		unSelect();
		$('#support_link').css('border-bottom', '5px solid white')
	}
	if (value > 2785 && value <= 3668 && set != "pricing"){
		setHash("pricing");
		unSelect();
		$('#pricing_link').css('border-bottom', '5px solid white')
	}
	if (value > 3668 && value <= 4440 && set != "about_us"){
		setHash("about_us");
		unSelect();
		$('#about_us_link').css('border-bottom', '5px solid white')
	}
	if (value > 4440 && set != "contact"){
		setHash("contact");
		unSelect();
		$('#contact_link').css('border-bottom', '5px solid white')
	}

	function unSelect(){
		$('#overview_link').removeAttr('style');
		$('#uses_link').removeAttr('style');
		$('#features_link').removeAttr('style');
		$('#support_link').removeAttr('style');
		$('#pricing_link').removeAttr('style');
		$('#about_us_link').removeAttr('style');
		$('#contact_link').removeAttr('style');
	}

});