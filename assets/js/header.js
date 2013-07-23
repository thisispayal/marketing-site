$(window).scroll( function() {
    var value = $(this).scrollTop();
    if ( value > 120 )
        $(".site_header").css("border", "20px solid blue");
    else
        $(".site_header").css("border", "20px solid green");
});