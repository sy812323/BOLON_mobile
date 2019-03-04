$(function(){
    $(".left_list").toggle(function(){
        $(".hide_list").css("display","block");
    },function(){
        $(".hide_list").css("display","none");
    });
    $("#yu").toggle(function(){
        $("#yu").css({"background":"url(img/arrow_down.png) no-repeat center","background-size":"10px","background-position-x":"92%"});
        $(".yu_list").css("display","block");
    },function(){
        $("#yu").css({"background":"url(img/arrow_up.png) no-repeat center","background-size":"10px","background-position-x":"92%"});
        $(".yu_list").css("display","none");
    });
    $(".sir").toggle(function(){
            $(".sir").css({"background":"url(img/wap2.png) no-repeat center","background-size":"100%"});
            $(".sir_list").css("display","block");
            $(".madam").css({"background":"url(img/wap1.png) no-repeat center","background-size":"100%"});
            $(".madam_list").css("display","none");
            $(".brand").css({"background":"url(img/wap1.png) no-repeat center","background-size":"100%"});
            $(".brand_list").css("display","none");
        },function(){
            $(".sir").css({"background":"url(img/wap1.png) no-repeat center","background-size":"100%"});
            $(".sir_list").css("display","none");
        }
    );
    $(".madam").toggle(function(){
            $(".madam").css({"background":"url(img/wap2.png) no-repeat center","background-size":"100%"});
            $(".madam_list").css("display","block");
            $(".sir").css({"background":"url(img/wap1.png) no-repeat center","background-size":"100%"});
            $(".sir_list").css("display","none");
            $(".brand").css({"background":"url(img/wap1.png) no-repeat center","background-size":"100%"});
            $(".brand_list").css("display","none");
        },function(){
            $(".madam").css({"background":"url(img/wap1.png) no-repeat center","background-size":"100%"});
            $(".madam_list").css("display","none");
        }
    );
    $(".brand").toggle(function(){
            $(".brand").css({"background":"url(img/wap2.png) no-repeat center","background-size":"100%"});
            $(".brand_list").css("display","block");
            $(".sir").css({"background":"url(img/wap1.png) no-repeat center","background-size":"100%"});
            $(".sir_list").css("display","none");
            $(".madam").css({"background":"url(img/wap1.png) no-repeat center","background-size":"100%"});
            $(".madam_list").css("display","none");
        },function(){
            $(".brand").css({"background":"url(img/wap1.png) no-repeat center","background-size":"100%"});
            $(".brand_list").css("display","none");
        }
    );
});