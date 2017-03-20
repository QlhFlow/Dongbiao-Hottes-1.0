//横屏
//var mql = window.matchMedia('(orientation: portrait)');
//console.log(mql);
//function handleOrientationChange(mql) {
//    if(mql.matches) {
//        portrait();  // 竖屏
//    }else {
//        landscape(); // 横屏
//    }
//}
//// 输出当前屏幕模式
//handleOrientationChange(mql);
//// 监听屏幕模式变化
//mql.addEventListener(handleOrientationChange);
//
//var mql = window.matchMedia("(orientation: portrait)");
//
//if(mql.matches) {
//         alert('portrait');   // 竖屏
//    portrait();
//}else {
//        //alert('landscape');  // 横屏
//    landscape();
//}
var musicStar = document.getElementById('musicStar');
var firstInit = true;
window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function() {
    if (window.orientation === 180 || window.orientation === 0) {
        portrait();

    }
    if (window.orientation === 90 || window.orientation === -90 ){
        landscape();
    }

}, false);

function landscape(){
    var w = window.innerWidth;
    var h = window.innerHeight;
    $(function(){
        init(firstInit);
        $("#portrait").css("display","none");
        $('#landscape').css({'display':'block'});
        $("body").css({"width":w,"height":h});
    });
    //firstInit = false;
    document.addEventListener("WeixinJSBridgeReady", function () {
        audioAutoPlay('musicStar');
    }, false);
    var firstTouch = true;
    $('body').bind("touchstart",function(e){
        if ( firstTouch ) {
            firstTouch = false;
            musicStar.play();
        }else{
            return;
        }
    });
    //动画开始播放音乐
    musicStar.load();
    musicStar.src="video/Echo.mp3";
    musicStar.play();
    $(".open").click(function(){
        musicStar.pause();
        $(this).css("display","none");
        $(".clock").css("display","block");
        $('.btn-music').removeClass('open-music');
    });
    $(".clock").click(function(){
        musicStar.play();
        $(this).css("display","none");
        $(".open").css("display","block");
        $('.btn-music').addClass('open-music');
    });
}

function portrait(){
    $(function(){
        if(musicStar.played){
            musicStar.pause();
        }
        var w = window.innerWidth;
        var h = window.innerHeight;
        $("body").css({"width":w,"height":h});
        $('#landscape').css({'display':'none'});
        $("#portrait").css("display","block");
    })

}
//landscape();