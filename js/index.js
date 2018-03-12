$(function () {
    $(".next").click(function () {
        $(".page1").hide();
        $(".page2").show();
    });
    $(".previous").click(function () {
        $(".page2").hide();
        $(".page1").show();
    });
    //页面无法停留
    /*banner start!! 图片轮播*/
    var length=$(".banner-cont li").length;//4
    var index=0;
    var timer="";
    timer = setInterval(play,2000);
     var lunbo=function () {
         $(".banner-cont li").eq(index).show().siblings().hide();
         $(".bannerpager ul li").eq(index).addClass("current").siblings().removeClass("current");
     };
    //自动轮播函数
    function play() {
        index++;
        if(index===length){
            index=0;
        }
       lunbo();
        //setTimeout(play,2000);
        //console.log("自动播放："+index);
    }
    //鼠标放在图片上，图片不动
    $(".banner-cont li").hover(function () {
        clearInterval(timer);
    },function () {
        clearInterval(timer);
        timer = setInterval(play,2000);
    });
    //鼠标放在圆点上显示当前页面
    $(".bannerpager ul li").hover(function () {
        clearInterval(timer);
        index=$(this).index();
       lunbo();

    },function () {
        clearInterval(timer);
        timer = setInterval(play,2000);
    });
    $(".banner-previous").click(function () {
        clearInterval(timer);
        index--;
        if(index<0){
            index=length-1;
        }
        //console.log("点击左边："+index);
        lunbo();
    }).mouseleave(function () {
        clearInterval(timer);
        timer = setInterval(play,2000);
    });
    $(".banner-next").click(function () {
        clearInterval(timer);
        index++;
        if(index===length){
            index=0;
        }
        //console.log("右边点击："+index);
     lunbo();
    }).mouseleave(function () {
        clearInterval(timer);
        timer = setInterval(play,2000);
    });
    //banner end!!

    /*回到顶部*/
    $(".gototop").click(function () {
        $("html,body").animate({scrollTop:0},200);
    });

    /*视频播放*/
    //生成一个播放器
    $("video,audio").mediaelementplayer(
        //{features: ['playpause','progress','volume','postroll']}
    );
    //通过动态获取地址，并让视频播放
    $(".js-show").click(function () {
        var titl = $(this).data("title");
        var vidsrc = $(this).data("src");
        $(".model-title").html(titl);
        $(".video-model").show().find('video').attr("src",vidsrc).get(0).play();

    });
    //关闭视频，并将src清空
    $(".close").click(function () {
        $(".video-model").hide().find("video").attr("src","");
    });

    //搜索框显示
    $("#search-showe").click(function () {
        $(".s-input").show().animate({width:'180px'},'500');
        setTimeout(function () {
            $("#js-search").val("").focus();
            $(".list").show();
        },500)
    });
    $("#js-search").blur(function () {
        //alert(1);
        $('.s-input').hide().css("width","0px").find("input").val("搜索关键字");
        $('.list').hide();
    }).on("keypress keydown",function (e) {
        var e = e || window.event;
        if(e.keyCode === 13){
            if($(this).val()){
                window.location.href='https://www.baidu.com';
            }
        }
    })

});
