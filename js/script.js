$(document).ready(function() {
    $('.head__slider').slick({
        dots: true,
        arrows: false,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        easing: 'ease',
        autoplay: true,
        autoplaySpeed: 4000,
        //fade: true,
        //pauseOnFocus: true,
        pauseOnHover: true,

        touchTreshhold: 5,
        touchMove: true,
        waitForAnimate: false,
        variableHeight: false,

    });
    $('.share__slider').slick({
        dots: true,
        arrows: false,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        easing: 'ease',
        autoplay: true,
        autoplaySpeed: 4000,
        fade: true,
        //pauseOnFocus: true,
        pauseOnHover: true,

        touchTreshhold: 5,
        touchMove: true,
        waitForAnimate: false,
        variableHeight: false,

    });
    $('.features__slider').slick({
        dots: true,
        arrows: false,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        //easing: 'ease',
        autoplay: true,
        autoplaySpeed: 4000,
        //fade: true,
        //pauseOnFocus: true,


        touchTreshhold: 5,
        touchMove: true,
        waitForAnimate: false,
        //variableHeight: false,
        //variableWidth: true,

    });
});