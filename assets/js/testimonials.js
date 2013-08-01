$(document).ready(function(){
                var intv;
                $('.testimonial_slides > li').slice(1).hide();

                $("#next_testimonials").click(function(){
                    scroll("next");
                })

                $("#prev_testimonials").click(function(){
                    scroll("prev");
                })

                function auto(){
                    intv = setInterval(function() {
                        scroll("next");
                    }, 4000 );       
                }
                auto(); // to start immediately auto-slide

                // PAUSE ON MOUSEOVER
                
                $('.testimonial_slider').on('mouseenter mouseleave', function( e ){
                    var onMouEnt = e.type=='mouseenter' ? clearInterval(intv) : auto() ;
                });
                

                function scroll(direction){                 
                    var testimonials_list = $(".testimonial_slides");
                    var slides = testimonials_list.children("li");

                    if (direction == "prev"){
                        testimonials_list.prepend(slides.slice(slides.length - 1,slides.length)).effect("slide");
                    }
                    else if (direction == "next"){
                        testimonials_list.append(slides.slice(0,1)).effect("slide",{direction: 'right'});
                    }

                    $('.testimonial_slides > li').slice(0, 1).show();
                    $('.testimonial_slides > li').slice(1).hide();
                

            
            }
        });