'use strict';

jQuery(document).ready(function($){
    const track = '../../media/background.mp3';
    const playBg = new Audio(track);
    const preloader = $('.preloader');
    
    setTimeout(function(){
        preloader.find('> h1').text('Почти готово');
        setTimeout(function(){
            preloader.find('> h1').text('О! Все, погнали :)');
            setTimeout(function(){
                preloader.fadeOut(100);

                $('.open-invation').on('click', function(event){
                    event.preventDefault();

                    playBg.play();

                    $(this).parent().remove();

                    // Screen 1 - show Tim
                    setTimeout(function(){
                        $('.tim-01').addClass('show');
                    }, 1000);
                    setTimeout(function(){
                        $('.tim-01-dialog').addClass('show');
                    }, 1500);
                    setTimeout(function(){
                        $('.baloons-01').addClass('show');
                    }, 2000);
                    setTimeout(function(){
                        $('.button-imaged').addClass('show');
                    }, 4000);
                    setTimeout(function(){
                        $('.tim-01-dialog').removeClass('show');
                    }, 6000);
                    setTimeout(function(){
                        $('.tim-01-dialog-02').addClass('show');
                    }, 6100);
                    $(document).on('click', '.go', function(event) {
                        event.preventDefault();

                        var buttonTarget = $(this).attr('href');
                        var sectionIndex = $(buttonTarget).index('.section');

                        if (sectionIndex !== -1) {
                            fullpage_api.moveTo(sectionIndex + 1);
                        }
                    });
                });

                
            }, 3000);
        }, 3000);
    }, 3000);
















































    // Fullpage
    new fullpage('#fullpage', {
        autoScrolling: true,
        showActiveTooltip: true,
        scrollingSpeed: 700,
        afterLoad: function(origin, destination, direction) {
            var loadedSection = this;

            if (destination.index === 1) {
                // Screen 2 - tim saying
                setTimeout(function() {
                    $('.tim-02-dialog').addClass('hide');
                }, 3000);
                setTimeout(function() {
                    $('.tim-02-dialog').attr('src', '../../assets/images/svg/tim-02-dialog-02.svg').removeClass('hide');
                }, 3100);
                setTimeout(function() {
                    $('.tim-02-dialog').addClass('hide');
                }, 6100);
                setTimeout(function() {
                    $('.tim-02-dialog').attr('src', '../../assets/images/svg/tim-02-dialog-03.svg').removeClass('hide');
                }, 6200);
                setTimeout(function() {
                    $('.tim-02-dialog').addClass('hide');
                }, 9300);
                setTimeout(function() {
                    $('.tim-02-dialog').attr('src', '../../assets/images/svg/tim-02-dialog-04.svg').removeClass('hide');
                }, 9400);
            }
        }
    });
});