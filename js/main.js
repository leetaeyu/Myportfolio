$(function(){
    let wH = window.innerHeight;

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
            $(".home_wrap").addClass("fade_in");
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
})