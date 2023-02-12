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
        loopAdditionalSlides: 1,
        loop:true,
        allowTouchMove: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: true,
        },
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
        breakpoints: {
            1024: {
                allowTouchMove: false,
            } 
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