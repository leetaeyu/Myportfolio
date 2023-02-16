$(function(){
    let wH = window.innerHeight;
    let scTop = 0;

    $('body').on('scroll touchmove mousewheel', function(e) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    });

    $(".leetaeyu").click(function(){
        $(".box").addClass("out");
        $(".box").addClass("none");
        $(".home_wrap").addClass("on");
        $('body').off('scroll touchmove mousewheel');
    })

    setTimeout(function(){
        $(".wrap").addClass("in");
    },400)

    $("#pf_main_container").fullpage({
        navigation:false,
    });

    var skillsSwiper = new Swiper(".skills_swiper", {
        slidesPerView: 4,
        spaceBetween:20,
        speed:800,
        infinite:true,
        loopAdditionalSlides: 1,
        loop:true,
        allowTouchMove: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: true,
        },
        breakpoints: {
            768: {
              slidesPerView: 5,  
            },
            1024: {
              slidesPerView: 6,  
            },
            1280: {
              slidesPerView: 7,
            },
        }
    });

    var portfolioSwiper = new Swiper(".portfolio_swiper", {
        slidesPerView: 1,
        speed:800,
        centeredSlides: true,
        infinite:true,
        loop:true,
        loopAdditionalSlides: 1,
        allowTouchMove: true,
        autoplay: {
            delay: 7000,
            disableOnInteraction: true,
        },
        navigation: {
            nextEl: ".next",
            prevEl: ".prev",
        },
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
    });

    $('.home_container').on('mouseover', function(){
        portfolioSwiper.autoplay.stop();
    });
    $('.home_container').on('mouseout', function(){
        portfolioSwiper.autoplay.start();
    });
    $('.box').on('mouseover', function(){
        portfolioSwiper.autoplay.stop();
    });
    $('.box').on('mouseout', function(){
        portfolioSwiper.autoplay.start();
    });


})