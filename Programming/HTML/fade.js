$(document).ready(function() {
    $('#nav, ul, li, a').mouseenter(function() {
        $('#nav, ul, li, a').fadeTo('fast',1);
    });
    $('#nav, ul, li, a').mouseleave(function() {
        $('#nav, ul, li, a').fadeTo('fast', 0.5);
    });
});
