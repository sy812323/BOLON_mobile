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
    var mySwiper = new Swiper ('.swiper1', {
        direction : 'horizontal',
        centeredSlides: true,
        pagination: {
            el: '.swp1',
            clickable: true,
        }
    })
    var mySwiper2 = new Swiper ('.swiper2', {
        direction : 'horizontal',
        centeredSlides: true,
        pagination: {
            el: '.swp2',
            clickable: true,
        }
    })
    var mySwiper3 = new Swiper ('.swiper3', {
        direction : 'horizontal',
        centeredSlides: true,
        pagination: {
            el: '.swp3',
            clickable: true,
        }
    })
    var mySwiper4 = new Swiper ('.swiper4', {
        direction : 'horizontal',
        centeredSlides: true,
        pagination: {
            el: '.swp4',
            clickable: true,
        }
    })
    $(".desc_goods_list li").click(function(event){
        if(event.currentTarget === this){
            $(".desc_goods_list li").css({"border":"1px solid #fff"});
            $(event.currentTarget).css({"border":"1px solid black"});
            let dds=$(".con_goods .goods_list");
            // console.log(dds);
            let currIndex=$(this).attr("index");
            // console.log(currIndex);
            for(let i=0;i<dds.length;i++){
                dds[i].style.display="none";
            }
            dds[currIndex].style.display="block";
            //点击切换镜片颜色
            let ps=$(".jingpian p");
            for(let i=0;i<ps.length;i++){
                ps[i].style.display="none";
            }
            ps[currIndex].style.display="block";
            //点击切换型号名称
            let h3s=$(".goods_name");
            for(let i=0;i<h3s.length;i++){
                h3s[i].style.display="none";
            }
            h3s[currIndex].style.display="block";

            let pss=$(".info_show_jingpian");
            for(let i=0;i<pss.length;i++){
                pss[i].style.display="none";
            }
            pss[currIndex].style.display="block";
            // let imgs=$(".list_img dd:visible img");
            // // console.log(imgs.length);
            // for(let i=0;i<imgs.length;i++){
            //     imgs[i].style.zIndex=1;
            //     // console.log(imgs[i]);
            // }
            // imgs[0].style.zIndex=2;
            // let uls=$(".diandian a");
            // for(let i=0;i<uls.length;i++){
            //     uls[i].style.backgroundColor="white";
            // }
            // uls[0].style.backgroundColor="gray";
            // let spans=$(".rmb span");
            // for(let i=0;i<spans.length;i++){
            //     spans[i].style.display="none";
            // }
            // spans[currIndex].style.display="inline-block";

        }
    });
});
$(function(){
   $(".info_show1 h3").click(function(){
       if($(".info_show1 h3").hasClass("h3_back")){
           $(".info_show1 h3").removeClass("h3_back");
           $(".info_show1 div").css("display","none");
       }else{
           $(".info_show1 h3").addClass("h3_back");
           $(".info_show2 h3").removeClass("h3_back");
           $(".info_show3 h3").removeClass("h3_back");
           $(".info_show1 div").css("display","block");
           $(".info_show2 div").css("display","none");
           $(".info_show3 div").css("display","none");
       }
   });
    $(".info_show2 h3").click(function(){
        if($(".info_show2 h3").hasClass("h3_back")){
            $(".info_show2 h3").removeClass("h3_back");
            $(".info_show2 div").css("display","none");
        }else{
            $(".info_show2 h3").addClass("h3_back");
            $(".info_show1 h3").removeClass("h3_back");
            $(".info_show3 h3").removeClass("h3_back");
            $(".info_show2 div").css("display","block");
            $(".info_show1 div").css("display","none");
            $(".info_show3 div").css("display","none");
        }
    });
    $(".info_show3 h3").click(function(){
        if($(".info_show3 h3").hasClass("h3_back")){
            $(".info_show3 h3").removeClass("h3_back");
            $(".info_show3 div").css("display","none");
        }else{
            $(".info_show3 h3").addClass("h3_back");
            $(".info_show2 h3").removeClass("h3_back");
            $(".info_show1 h3").removeClass("h3_back");
            $(".info_show3 div").css("display","block");
            $(".info_show2 div").css("display","none");
            $(".info_show1 div").css("display","none");
        }
    });
});