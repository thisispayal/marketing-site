$(window).scroll( function() {
   var value = $(this).scrollTop();
   if (value > 120){
   		$('#vigilant').hide();
   		$('#imageshare').show();
   }

   else{
   	$('#imageshare').hide();
   	$('#vigilant').show();
   }

    if (value >= 120 && value < 346){
   		
   		unSelect();
   		$('#overview_link').css('border-bottom', '5px solid white')
   		
}
	if (value >= 346 && value < 901){
		unSelect();
   		$('#features_link').css('border-bottom', '5px solid white')
   		
	}
   if (value >= 901 && value < 1779){
   	unSelect();
   		$('#support_link').css('border-bottom', '5px solid white')
   		$('')
	}
	if (value >= 1779 && value < 2432){
		unSelect();
   		$('#pricing_link').css('border-bottom', '5px solid white')
   		
	}
	if (value >= 2432){
		unSelect();
   		$('#about_us_link').css('border-bottom', '5px solid white')
   	
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

	$('#overview_link').click(function(){
			unSelect();
   		$('#overview_link').css('border-bottom', '5px solid white');

	});

	$('#uses_link').click(function(){
			unSelect();
   		$('#uses_link').css('border-bottom', '5px solid white');

	});

	$('#features_link').click(function(){
			unSelect();
   		$('#features_link').css('border-bottom', '5px solid white');

	});

	$('#support_link').click(function(){
			unSelect();
   		$('#support_link').css('border-bottom', '5px solid white');

	});

	$('#pricing_link').click(function(){
			unSelect();
   		$('#pricing_link').css('border-bottom', '5px solid white');

	});

	$('#about_us_link').click(function(){
			unSelect();
   		$('#about_us_link').css('border-bottom', '5px solid white');

	});

	$('#contact_link').click(function(){
			unSelect();
   		$('#contact_link').css('border-bottom', '5px solid white');

	});

});