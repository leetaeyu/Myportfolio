$(function(){
    $(".gnb_button").click(function(){
        $("body").toggleClass("hidden");
        $(".map").toggleClass("active");
    });

    $("a").click(function(){
        if($(this).attr("href") == "#") {
            return false;
        }
    });
});