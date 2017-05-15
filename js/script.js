
$(document).ready(function () {
    $('#carousel').owlCarousel({
        loop: false,
       /* margin: 20,*/
        responsiveClass: true,
        navText:['<','>'],
        dots:false,
        dotsEach:false,
        responsive: {
            0: {
                items: 3,
                nav: true
            },
            600: {
                items: 5,
                nav: false
            },
            1000: {
                items: 8,
                nav: true,
                loop: false
            }
        }
    });
    $('.playlist').hide();
    $( ".programs-img" ).click(function() {
        var findPlaylist = $(this).parents('.programs').next('.playlist');
        var find = $(this).parent('.programs');
        if(find.is(':visible')) {
            $(find).hide();
            $(findPlaylist).show();
        }
    });
    $( ".program>.button-close" ).click(function() {
        var findplay = $('.playlist');
        if(findplay.is(':visible')){
            $(findplay).hide();
            $('.programs').show();
        }
    });

});



$(function() {
    $( ".carousel .week-container a .week-day").click(function(e) {
        e.preventDefault();
        $(".carousel .week-container a .week-day").removeClass('active-day');
        $(this).addClass('active-day');
    })
});