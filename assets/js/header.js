$(window).scroll( function() {
   var value = $(this).scrollTop();
//    if (value > 120){
//    		$('#vigilant').hide();
//    		$('#imageshare').show();
//    }

//    else{
//    	$('#imageshare').hide();
//    	$('#vigilant').show();
//    }

   	if (value <= 404){
   		unSelect();
   	}
    if (value > 404 && value <= 1361){   		
   		unSelect();
   		$('#uses_link').css('border-bottom', '5px solid white')   		
	}
	 if (value > 1361 && value <= 1931){   		
   		unSelect();
   		$('#features_link').css('border-bottom', '5px solid white')   		
	}
	if (value > 1931 && value <= 2785){
		unSelect();
		$('#support_link').css('border-bottom', '5px solid white')
	}
	if (value > 2785 && value <= 3668){
		unSelect();
		$('#pricing_link').css('border-bottom', '5px solid white')
	}
	if (value > 3668 && value <= 4440){
		unSelect();
		$('#about_us_link').css('border-bottom', '5px solid white')
	}
	if (value > 4440){
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