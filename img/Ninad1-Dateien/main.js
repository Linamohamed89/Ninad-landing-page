(function ($) {
    "use strict";
    
    // JS Index
    //----------------------------------------
    // 1. sticky menu
    // 2. background image
    // 3. slider - active
    // 4. mobile-menu(mean-menu)
    // 5. preloader
    // 6. One Page Nav
    // 7. mobile-menu-sidebar
    // 8. testimonial active
    // 9. wow animation  active
    // 10. Animate the scroll to top
    // 11. tilt js
    // 12. counter js

    //-------------------------------------------------

    // 1. sticky menu
    // ---------------------------------------------------------------------------
    var wind = $(window);
    var sticky = $("#header-sticky");
    wind.on('scroll', function () {
        var scroll = $(wind).scrollTop();
        if (scroll < 2) {
            sticky.removeClass("sticky-menu");
        } else {
            $("#header-sticky").addClass("sticky-menu");
        }
    });



    // 2. background image
    //---------------------------------------------------------------------------
    $("[data-background]").each(function (){
        $(this).css("background-image","url(" + $(this).attr("data-background") + ")");
    });



    // 3. slider - active
    //---------------------------------------------------------------------------
    function mainSlider() {
        var BasicSlider = $('.slider-active');

        BasicSlider.on('init', function (e, slick) {
            var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
            doAnimations($firstAnimatingElements);
        });

        BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
            var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
            doAnimations($animatingElements);
        });

        BasicSlider.slick({
            dots: false,
            fade: true,
            // autoplay: true,
            // autoplaySpeed: 3000,
            arrows: true,
            prevArrow:'<b><i class="l-a fas fa-arrow-left"></i></b>',
            nextArrow:'<b><i class="r-a fas fa-arrow-right"></i></b>',
            responsive: [
                { breakpoint: 767, settings: {
                    arrows: false,
                } }
            ]
        });

        function doAnimations(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function () {
                var $this = $(this);
                var $animationDelay = $this.data('delay');
                var $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay
                });
                $this.addClass($animationType).one(animationEndEvents, function () {
                    $this.removeClass($animationType);
                });
            });
        }
    }
    mainSlider();





    // 4. mobile-menu(mean-menu)
    //---------------------------------------------------------------------------
    $("#mobile-menu").meanmenu({
        meanMenuContainer: ".mobile-menu",
        meanScreenWidth: "991",
    });



    // 5. preloader
    //---------------------------------------------------------------------------
    $(window).load(function(){
        $('#preloader').fadeOut('slow',function(){$(this).remove();});
    });
    


    // 6. One Page Nav
    //---------------------------------------------------------------------------
    var top_offset = $('.header-area').height() - 10;
    $('.main-menu nav ul').onePageNav({
        currentClass: 'active',
        scrollOffset: top_offset,
    });



    // 7. mobile-menu-sidebar
    //---------------------------------------------------------------------------
    $(".mobile-menubar").on("click", function(){
        $(".side-mobile-menu").addClass('open-menubar');
        $(".body-overlay").addClass("opened");
    });
    $(".close-icon").click(function(){
        $(".side-mobile-menu").removeClass('open-menubar');
        $(".body-overlay").removeClass("opened");
    });

    $(".body-overlay").on("click", function () {
		$(".side-mobile-menu").removeClass('open-menubar');
		$(".body-overlay").removeClass("opened");
	});




    // 8. testimonial active
    //---------------------------------------------------------------------------
    $('.testimonial-active').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '30px',
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });



    // 9. wow animation  active
    // ---------------------------------------------------------------------------
    new WOW().init();







    // 10. Animate the scroll to top
    // --------------------------------------------------------------------------
    // Show or hide the sticky footer button
    $(window).on('scroll', function() {
    if($(this).scrollTop() > 600){
        $('#scroll').fadeIn(1000);
    } else{
        $('#scroll').fadeOut(1000);
    }
    });

    $('#scroll').on('click', function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: 0,
    }, 1500);
    });






    // 11. tilt js
    // ---------------------------------------------------------------------------
    $('.tilt').tilt({
        maxTilt:        15,
        perspective:    1500,
    });





    // 12. counter js
    // ---------------------------------------------------------------------------
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });








})(jQuery);	  