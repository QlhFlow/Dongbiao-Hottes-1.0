//横屏
    window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function() {
        if (window.orientation === 180 || window.orientation === 0) {
            alert('竖屏状态！');
        }
        if (window.orientation === 90 || window.orientation === -90 ){
            alert('横屏状态！');
            var musicStar = document.getElementById('musicStar');
			$("body").css({"width":w,"height":h});
			$(function () {
				//动画开始播放音乐
				musicStar.load();
			    musicStar.src="video/You.mp3";
			    musicStar.play();
				$(".open").click(function(){
					musicStar.pause();
					console.log(333);
					$(this).css("display","none");
					$(".clock").css("display","block");
				});
				$(".clock").click(function(){
					musicStar.play();
					console.log(444);
					$(this).css("display","none");
					$(".open").css("display","block");
				})  
			});
			
        } 
    }, false);