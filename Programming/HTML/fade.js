$(document).ready(function() {
    $('#nav,.a').mouseenter(function() {
        $('#nav,.a').fadeTo('fast',1);
    });
    $('#nav,.a').mouseleave(function() {
        $('#nav,.a').fadeTo('fast', 0.5);
    });
});
