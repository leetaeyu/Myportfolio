$(function(){
    let wH = window.innerHeight;
    let scTop = 0;

    $(".leetaeyu").click(function(){
        $(".box").addClass("out");
        $(".box").addClass("none");
        $(".home_wrap").addClass("on");
    })


    setTimeout(function(){
        $(".wrap").addClass("in");
    },400)
    // setTimeout(function(){
    //     $(".box").addClass("out");
    // },1700)
    // setTimeout(function(){
    //     $(".box").addClass("none");
    // },2800)
    // setTimeout(function(){
    //     $(".home_wrap").addClass("on");
    // },2700)

    $("#pf_main_container").fullpage({
        navigation:false,
    });

    var skillsSwiper = new Swiper(".skills_swiper", {
        slidesPerView: 6,
        speed:800,
        // centeredSlides: true,
        infinite:true,
        loop:true,
        loopAdditionalSlides: 1,
        allowTouchMove: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: true,
        },
    });
    var bannerSwiper = new Swiper(".banner_swiper", {
        slidesPerView: 1,
        speed:800,
        centeredSlides: true,
        infinite:true,
        loop:true,
        loopAdditionalSlides: 1,
        allowTouchMove: false,
        autoplay: {
            delay: 7000,
            disableOnInteraction: true,
        },
        navigation: {
            nextEl: ".next",
            prevEl: ".prev",
        },
    });

    $('.home_container').on('mouseover', function(){
        bannerSwiper.autoplay.stop();
    });
    $('.home_container').on('mouseout', function(){
        bannerSwiper.autoplay.start();
    });
    $('.box').on('mouseover', function(){
        bannerSwiper.autoplay.stop();
    });
    $('.box').on('mouseout', function(){
        bannerSwiper.autoplay.start();
    });

    $(".link_1 > a").mouseenter(function(){
        $(".right_1").addClass("enter");
    });
    $(".link_1 > a").mouseleave(function(){
        $(".right_1").removeClass("enter");
    });
    $(".link_2 > a").mouseenter(function(){
        $(".right_2").addClass("enter");
    });
    $(".link_2 > a").mouseleave(function(){
        $(".right_2").removeClass("enter");
    });
    $(".link_3 > a").mouseenter(function(){
        $(".right_3").addClass("enter");
    });
    $(".link_3 > a").mouseleave(function(){
        $(".right_3").removeClass("enter");
    });
    $(".link_4 > a").mouseenter(function(){
        $(".right_4").addClass("enter");
    });
    $(".link_4 > a").mouseleave(function(){
        $(".right_4").removeClass("enter");
    });
    $(".link_5 > a").mouseenter(function(){
        $(".right_5").addClass("enter");
    });
    $(".link_5 > a").mouseleave(function(){
        $(".right_5").removeClass("enter");
    });
    $(".link_6 > a").mouseenter(function(){
        $(".right_6").addClass("enter");
    });
    $(".link_6 > a").mouseleave(function(){
        $(".right_6").removeClass("enter");
    });
    $(".link_7 > a").mouseenter(function(){
        $(".right_7").addClass("enter");
    });
    $(".link_7 > a").mouseleave(function(){
        $(".right_7").removeClass("enter");
    });

    // const link = $('.banner_swiper .slidebox .link')
    // for (let i = 0; i < link.length; i++) {
    //     $(".link_ " + i +" > a").mouseenter(function(){
    //         $(".right_1").addClass("enter");
    //     });
    // }
})