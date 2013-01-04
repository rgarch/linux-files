$(document).ready(function() {
    $('#nav, ul, li, a').mouseenter(function() {
        $(this).fadeTo('fast',1);
    });
    $().mouseleave(function() {
        $(this).fadeTo('fast', 0.5);
    });
});
