$(document).ready(function() {
    'use strict';
    $(".dropdown").hoverIntent({
        over: function() {
            $(this).find('.nav-link').addClass('arrow-up');
            $(this).find(".dropdown-menu").toggle();
        },
        out: function() {
            $(this).find('a.nav-link').removeClass('arrow-up');
            $(this).find(".dropdown-menu").toggle();
        },
        timeout: 100
    });
});