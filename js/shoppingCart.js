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
$(function(){
    $(".list_left a").addClass("return_dui");
    $(".quanxuan a").addClass("return_dui");
    $(".right_num_left").click(function(){
        let count = $(".right_num_center").val();
        // console.log(count);
        count--;
        // console.log(count);
        if(count<1){
            count=1;
        }
        $(".right_num_center").val(count);
        if($(".list_left a").hasClass("return_dui")){
            $(".zongji_rmb span").html(($(".right_num_center").val())*($(".center_rmb span").html()));
        };
    });
    $(".right_num_right").click(function(){
        let count = $(".right_num_center").val();
        // console.log(count);
        count++;
        // console.log(count);
        $(".right_num_center").val(count);
        if($(".list_left a").hasClass("return_dui")){
            $(".zongji_rmb span").html(($(".right_num_center").val())*($(".center_rmb span").html()));
        };
    });
    $(".list_left a").click(function(){
        if($(".list_left a").hasClass("return_dui")){
            $(".list_left a").removeClass("return_dui");
            $(".quanxuan a").removeClass("return_dui");
            $(".zongji_rmb span").html("0");
            $(".pay").css("background-color","#aaa");
        }else{
            $(".list_left a").addClass("return_dui");
            $(".quanxuan a").addClass("return_dui");
            $(".pay").css("background-color","#000");
            $(".zongji_rmb span").html(($(".right_num_center").val())*($(".center_rmb span").html()));
        }
    });
    $(".quanxuan a").click(function(){
        if($(".quanxuan a").hasClass("return_dui")){
            $(".list_left a").removeClass("return_dui");
            $(".quanxuan a").removeClass("return_dui");
            $(".zongji_rmb span").html("0");
            $(".pay").css("background-color","#aaa");
        }else{
            $(".list_left a").addClass("return_dui");
            $(".quanxuan a").addClass("return_dui");
            $(".pay").css("background-color","#000");
            $(".zongji_rmb span").html(($(".right_num_center").val())*($(".center_rmb span").html()));
        }
    });
    $(".delete").click(function(){
        $(".goods_list,.con_total").css("display","none");
        $(".m_t_num span").html("0");
        $(".pay").css("background-color","#aaa");
        $(".count").html("0");
        // $(".zongji_rmb span").html(($(".right_num_center").val())*($(".center_rmb span").html()));
        // $(".quanxuan a").removeClass("return_dui");
    });
    $(".right_num_center").blur(function(){
        if($(".right_num_center").val()==0){
            $(".right_num_center").val("1");
            $(".zongji_rmb span").html(($(".right_num_center").val())*($(".center_rmb span").html()));
        }else{
            $(".zongji_rmb span").html(($(".right_num_center").val())*($(".center_rmb span").html()));
        }
    });
});