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
            // let h3s=$(".xq_right_tit h3");
            // for(let i=0;i<h3s.length;i++){
            //     h3s[i].style.display="none";
            // }
            // h3s[currIndex].style.display="block";
            // let ps=$(".jingpian p");
            // for(let i=0;i<ps.length;i++){
            //     ps[i].style.display="none";
            // }
            // ps[currIndex].style.display="block";
            // let spans=$(".rmb span");
            // for(let i=0;i<spans.length;i++){
            //     spans[i].style.display="none";
            // }
            // spans[currIndex].style.display="inline-block";
            // let pss=$(".xq_xx2_pian");
            // for(let i=0;i<pss.length;i++){
            //     pss[i].style.display="none";
            // }
            // pss[currIndex].style.display="block";
        }
    });
});