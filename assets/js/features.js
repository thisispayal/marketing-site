
            var descriptions = [
                        /* Accessible Anywhere Description */
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, eligendi, corporis, cupiditate quisquam nostrum deleniti itaque sapiente eum placeat dolore recusandae porro nesciunt", 

                        /* HIPPA Secure Description */
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, quos, doloribus ipsam fugiat rem architecto est temporibus iusto quisquam? Ex!", 

                        /* In Browser Viewing Description */
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, eius, officiis, dolorem sit nesciunt hic velit magni dolores porro et consectetur veritatis ratione sequi sint id placeat distinctio. Magnam numquam eligendi possimus ut placeat ducimus odio corporis a deserunt consequuntur. Sequi eaque maiores fugit doloribus voluptatem! Eligendi vitae cupiditate quae.", 

                        /* Support and Service Description */
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, sunt blanditiis rerum."
                        ];

            var titles = [
                            "Accessible Anywhere",
                            "HIPPA Secure",
                            "In Browser Viewing",
                            "Support and Service"
                        ];

            var i = 0;
            $(document).ready(function(){
                var slider = $('.bxslider_features').bxSlider({
                    mode: 'fade',
                    captions: true
                });

                $('.no_js').hide();
                $('.js').show();

                $('#title').text(titles[i]);
                    $('#description').text(descriptions[i]);
                
                $('.bx-prev').click(function(){
                    i = (i - 1) % descriptions.length;
                    j = (i + 4) % descriptions.length;
                    $('#title').text(titles[j]);
                    $('#description').text(descriptions[j]);                    
                });

                $('.bx-next').click(function(){
                    i = (i + 1) % descriptions.length;
                    $('#title').text(titles[i]);
                    $('#description').text(descriptions[i]);                    
                });

                $('.accessible').click(function(){
                    slider.goToSlide(0);
                    $('#title').text(titles[0]);
                    $('#description').text(descriptions[0]);
                });

                $('.secure').click(function(){
                    slider.goToSlide(1);
                    $('#title').text(titles[1]);
                    $('#description').text(descriptions[1]);
                })

                $('.viewing').click(function(){
                    slider.goToSlide(2);
                    $('#title').text(titles[2]);
                    $('#description').text(descriptions[2]);
                })
                $('.support').click(function(){
                    slider.goToSlide(3);
                    $('#title').text(titles[3]);
                    $('#description').text(descriptions[3]);
                })
            
            });             
  