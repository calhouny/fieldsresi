(function ($) {
    "use strict";
    //portfolio close button 
    $('.close').click(function () {
        $('.worksajax').slideUp('slow', function () {
            $('.worksajax .content').remove();
        });
        return false;
    });

    $(".worksajax .slider").owlCarousel({
        navigation: true,
        navigationText: ['<span class="slide-nav inleft"><i class="fa fa-caret-left"></i></span >', '<span class="slide-nav inright"><i class="fa fa-caret-right"></i></span >'],
        slideSpeed: 800,
        autoplay: true,
        pagination: true,
        paginationSpeed: 800,
        singleItem: true,
        transitionStyle: "fade"
    });

    // portfolio Video responsive
    $(".worksajax .video").fitVids();

    // script prettyphoto 
    $(document).ready(function () {
        $("a[data-rel^='prettyPhoto']").prettyPhoto({
            social_tools: false,
            deeplinking: false
        });
    });

    //easing portfolio scrolling
    $(function () {
        $('.close').bind('click', function (event) {
            var $anchor = $('#work-ajax');

            $('html, body').stop().animate({
                scrollTop: $($anchor).offset().top - 89
            }, 1000, 'linear');
            event.preventDefault();
        });
    });

    // script prettyphoto
    $(document).ready(function () {
        $("a[data-rel^='prettyPhoto']").prettyPhoto({
            hook: 'data-rel',
            deeplinking: false
        });
    });

})(jQuery);