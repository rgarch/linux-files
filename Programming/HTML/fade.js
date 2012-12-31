$(document).ready(function() {
    $('#nav.a').mouseenter(function() {
        $(this).fadeTo('fast',1);
    });
    $('#nav.a').mouseleave(function() {
        $(this).fadeTo('fast', 0.5);
    });
});
