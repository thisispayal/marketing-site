$(document).ready(function(){
                var intv;
                $('.slider_icons > li').slice(4).hide();
                $('.slider_descriptions> li').slice(1).hide();
                $('.slider_icons > li > div').first().addClass("selected");

                $("#next").click(function(){
                    scroll("next");
                })


                $("#prev").click(function(){
                    scroll("prev");
                })

                function auto(){
                    intv = setInterval(function() {
                        scroll("next");
                    }, 4000 );       
                }
                auto(); // to start immediately auto-slide

                // PAUSE ON MOUSEOVER
                
                $('.features_slider').on('mouseenter mouseleave', function( e ){
                    var onMouEnt = e.type=='mouseenter' ? clearInterval(intv) : auto() ;
                });


                function scroll(direction){                 
                    var icons_list = $(".slider_icons");
                    var icons = icons_list.children("li");

                    if (direction == "prev"){
                        icons_list.prepend(icons.slice(icons.length - 4,icons.length)).effect("slide");
                    }
                    else if (direction == "next"){
                        icons_list.append(icons.slice(0,4)).effect("slide",{direction: 'right'});
                    }

                    $('.slider_icons > li > div').slice(0).removeClass("selected");
                    $('.slider_icons > li > div').first().addClass("selected");

                    $('.slider_icons > li').slice(0, 4).show();
                    $('.slider_icons > li').slice(4).hide();
                

                    var descriptions_list = $(".slider_descriptions")
                    var descriptions = descriptions_list.children("li");

                    if (direction == "prev"){
                        descriptions_list.prepend(descriptions.slice(descriptions.length - 4, descriptions.length));
                    }
                    else if (direction == "next"){
                        descriptions_list.append(descriptions.slice(0,4));
                    }       
                    $('.slider_descriptions > li').slice(0, 1).show();
                    $('.slider_descriptions > li').slice(1).hide();
                }

                $(".slider_icons > li > div").click(function () {   
                    var descriptions_list = $(".slider_descriptions")
                    var descriptions = descriptions_list.children("li");
                    var index = $(".slider_icons > li > div").index(this);
    
                    $('.slider_descriptions > li').slice(index, index+1).show();                    
                    $('.slider_descriptions > li').slice(0, index).hide();
                    $('.slider_descriptions > li').slice(index+1).hide();

                    $('.slider_icons > li > div').slice(0).removeClass("selected");
                    $('.slider_icons > li > div').slice(index, index+1).addClass("selected");
                })
            });