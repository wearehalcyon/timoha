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
                playBg.play();

                
            }, 3000);
        }, 3000);
    }, 3000);





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
        $('.tim-01-dialog').removeClass('show');
    }, 6000);
    setTimeout(function(){
        $('.tim-01-dialog-02').addClass('show');
    }, 6100);
















































    // Fullpage
    new fullpage('#fullpage', {
        autoScrolling: true,
        showActiveTooltip: true,
        scrollingSpeed: 700
    });
});