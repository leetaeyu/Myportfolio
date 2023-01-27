$(function(){
    let wH = window.innerHeight;
    //플러그인
    (async () => {
        await loadFull(tsParticles);
        await tsParticles.loadJSON("tsparticles", "../particles/particles.json");
    })();

    $(document).scroll(function(){
        scTop = $(this).scrollTop();
        $(".ani_left, .ani_right, .ani_top").each(function(){
            let offsetTop = $(this).offset().top - wH + 100;
            if(scTop > offsetTop){
                $(this).addClass("fade_in");
            } else {
                $(this).removeClass("fade_in");
            }
        });
    });

    $("body").on({
        "mouseenter":function(){
        },
        // "mouseleave":function(){
            //     $(".home_wrap").removeClass("fade_in")
            // }
        })
        
        $(function(){
            $("#pf_main_container").fullpage({
                navigation:false,
            });
        })
        
    setTimeout(function() {
        $(".typing_txt2").addClass("fade_opacity");
        $(".name1").addClass("fade_in");
        $(".portfolio").addClass("fade_in");
    }, 500);
    setTimeout(function() {
        $(".name2").addClass("fade_in");
        $(".name3").addClass("fade_in");
    }, 700);
})