$(document).ready(function() {
    $('#nav ul li a h').mouseenter(function() {
        $(this).fadeTo('fast',1);
    });
    $('#nav ul li a h').mouseleave(function() {
        $(this).fadeTo('fast', 0.5);
    });
});
