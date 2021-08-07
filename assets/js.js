$(document).on('scroll', function(){
    if ( $(window).scrollTop() > 30) {
        $('#header').addClass('changeColor');
    } else {
        $('#header').removeClass('changeColor');
    }
});

