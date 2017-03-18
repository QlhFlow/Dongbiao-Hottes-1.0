//横屏

    var musicStar = document.getElementById('musicStar');
    window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function() {
        if (window.orientation === 180 || window.orientation === 0) {
            //alert('竖屏状态！');
            if(musicStar.played){
                musicStar.pause();
            }
        }
        if (window.orientation === 90 || window.orientation === -90 ){
            //alert('横屏状态！');
            var w = window.innerWidth;
            var h = window.innerHeight;
          $(function(){
              init();
          });

			$("#portrait").css("display","none");
			$("body").css({"width":w,"height":h});
            document.addEventListener("WeixinJSBridgeReady", function () {
                audioAutoPlay('musicStar');
            }, false);
            document.addEventListener('touchstart',function(){
                if(musicStar.paused){
                    musicStar.play();
                }
            });
            //动画开始播放音乐
            //musicStar.load();
            musicStar.src="video/You.mp3";
            musicStar.play();
            $(".open").click(function(){
                musicStar.pause();
                $(this).css("display","none");
                $(".clock").css("display","block");
            });
            $(".clock").click(function(){
                musicStar.play();
                $(this).css("display","none");
                $(".open").css("display","block");
            });
        }
    }, false);
//$(function(){
//    init();
//});
//var w = window.innerWidth;
//var h = window.innerHeight;
//$("#portrait").css("display","none");
//$("body").css({"width":w,"height":h});
//document.addEventListener("WeixinJSBridgeReady", function () {
//    audioAutoPlay('musicStar');
//}, false);
//document.addEventListener('touchstart',function(){
//    if(musicStar.paused){
//        musicStar.play();
//    }
//});
////动画开始播放音乐
////musicStar.load();
//musicStar.src="video/You.mp3";
//musicStar.play();
//$(".open").click(function(){
//    musicStar.pause();
//    console.log(333);
//    $(this).css("display","none");
//    $(".clock").css("display","block");
//});
//$(".clock").click(function(){
//    musicStar.play();
//    console.log(444);
//    $(this).css("display","none");
//    $(".open").css("display","block");
//});