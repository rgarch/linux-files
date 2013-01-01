$(document).ready(function() {
    $('#nav, ul, li, a').mouseenter(function() {
        $(this).fadeTo('fast',1);
    });
    $('#nav, ul, li, a').mouseleave(function() {
        $(this).fadeTo('fast', 0.5);
    });
});
