(function ($) {
    "use strict";


    var $body = $("body"),
            $window = $(window);

    /*============================= Preload==============================*/

    $(window).on('load', function () {
        "use strict";
        // Animate loader off screen
        $(".se-pre-con").fadeOut("slow");
        ;
    });

    /*============================= Navigation Section ==============================*/

    $window.on('scroll', function () {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-default").addClass("small");
        } else {
            $(".navbar-default").removeClass("small");
        }
    });

    /*============================= Smoothscroll js ==============================*/

    $('.navbar-default').on('click', 'a', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 1
        }, 1000);
        event.preventDefault();
    });

    /*====================================== jquery scroll spy ========================================*/

    $body.scrollspy({
        target: ".navbar-collapse",
        offset: 15

    });

    /*======================================counter-up ========================================*/

    $('.Count').each(function () {
        "use strict";
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 10000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

    /*============================================carousel==========================================*/

    $('.carousel').carousel({
        interval: 3000
    });

    /*====================================== Fancybox ========================================*/

    $('.fancybox-buttons').fancybox({
        openEffect: 'fade',
        closeEffect: 'fade',
        prevEffect: 'fade',
        prevSpeed: 550,
        nextEffect: 'fade',
        nextSpeed: 550,
        closeBtn: true,
        helpers: {
            title: {
                type: 'inside'
            },
            buttons: {}
        }
    });

    /*====================================== Fancybox-script ========================================*/

    $(".fancybox").fancybox();

    /*====================================== Mixit-up ========================================*/

    var filterList = {
        init: function () {

            // MixItUp plugin
            // http://mixitup.io
            $('#portfoliolist').mixItUp({
                selectors: {
                    target: '.portfolio',
                    filter: '.filter'
                },
                load: {
                    filter: '.web, .graphics, .development, .photography'
                }
            });

        }

    };

    // Run the show!
    filterList.init();

    /*====================================== Parallex ========================================*/

    $('.parallax').scrolly({bgParallax: true});

    /*====================================== COLOR SCHEMES ========================================*/


    $(".option").on("click", function () {
        $(".box").toggleClass("open");
    });

    $("body").on("click", function (o) {
        $(o.target).closest(".box").length || $(".box").removeClass("open");
    });

    $(".style1").on("click", function () {
        $("#color").attr("href", "css/style1.css");
    });

    $(".style2").on("click", function () {
        $("#color").attr("href", "css/style2.css");
    });

    $(".style3").on("click", function () {
        $("#color").attr("href", "css/style3.css");
    });

    $(".style4").on("click", function () {
        $("#color").attr("href", "css/style4.css");
    });

    $(".default").on("click", function () {
        $("#color").attr("href", "css/default.css");
    });
    $(".style5").on("click", function () {
        $("#color").attr("href", "css/style5.css");
    });


})(jQuery);


