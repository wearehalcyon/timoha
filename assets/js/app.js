'use strict';

jQuery(document).ready(function($){
    const preloader = $('.preloader');
    setTimeout(function(){
        preloader.fadeOut(500);
    }, 1000);

    // Fullpage
    new fullpage('#fullpage', {
        autoScrolling: true,
        showActiveTooltip: true,
        scrollingSpeed: 1000
    });
});