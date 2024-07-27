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
                preloader.fadeOut(500);
                playBg.play();
            }, 3000);
        }, 3000);
    }, 3000);

    // Fullpage
    new fullpage('#fullpage', {
        autoScrolling: true,
        showActiveTooltip: true,
        scrollingSpeed: 700
    });
});