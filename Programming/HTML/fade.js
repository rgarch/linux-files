$(document).ready(function() {
    $('#nav, ul, li, a:hover').mouseenter(function() {
        $(this).fadeTo('fast',1);
    });
    $('#nav, ul, li, a:hover').mouseleave(function() {
        $(this).fadeTo('fast', 0.5);
    });
});
