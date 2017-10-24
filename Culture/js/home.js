$(function(){
	        $('.bor1').hover(function(){
	        	$('.bor1 .bor2').stop(true,true).fadeIn(200);
	        },function(){
	        	$('.bor1 .bor2').stop(true,true).fadeOut(200);	
	        });
	        $('.bor1 li').mouseover(function(){
	        	$('.bor1 .bor2').stop(true,true).animate({
	        		'left':$(this).position().left + 'px'
	        	},100,'swing');
	        });
	        
	        $(window).scroll(function(){
				var top=$("body").scrollTop();
				if(top>1){
					$("nav").css({"height":"44px","background":"#0353b2","opacity":"1"})
					$(".logo").css("height","44px")
					$(".logo a").css("margin-top","8px")
					$("nav ul li a").css({"height":"44px","line-height":"44px","color":"#fff"})
					$(".language").css({"height":"44px","padding-top":"15px"})
					$(".bor2").css("height","3px")
					$(".one").css("top","60px")
			        $("nav").mouseover(function(){
							$("nav").css({"height":"84px","background":"#0353b2","opacity":"1"})
							$(".logo").css("height","84px")
							$(".logo a").css("margin-top","24px")
							$("nav ul li a").css({"height":"84px","line-height":"84px","color":"#fff"})
							$(".language").css({"height":"84px","padding-top":"35px"})
							$(".bor2").css("height","5px")
			        })
			        $("nav").mouseout(function(){
							$("nav").css({"height":"44px","background":"#0353b2","opacity":"1"})
							$(".logo").css("height","44px")
							$(".logo a").css("margin-top","8px")
							$("nav ul li a").css({"height":"44px","line-height":"44px","color":"#fff"})
							$(".language").css({"height":"44px","padding-top":"15px"})
							$(".bor2").css("height","3px")
			        })
				}else{
					$("nav").css({"height":"84px","background":"#0353b2","opacity":"1"})
					$(".logo").css("height","84px")
					$(".logo a").css("margin-top","24px")
					$("nav ul li a").css({"height":"84px","line-height":"84px","color":"#fff"})
					$(".language").css({"height":"84px","padding-top":"35px"})
					$(".bor2").css("height","5px")
					$(".one").css("top","100px")
					
		        $("nav").mouseover(function(){
						$("nav").css({"height":"84px","background":"#0353b2","opacity":"none"})
						$(".logo").css("height","84px")
						$(".logo a").css("margin-top","24px")
						$("nav ul li a").css({"height":"84px","line-height":"84px","color":"#ffffff"})
						$(".language").css({"height":"84px","padding-top":"35px"})
						$(".bor2").css("height","5px")
						$(".one").css("top","100px")
		        })
		        $("nav").mouseout(function(){
						$("nav").css({"height":"84px","background":"#0353b2","opacity":"none"})
						$(".logo").css("height","84px")
						$(".logo a").css("margin-top","24px")
						$("nav ul li a").css({"height":"84px","line-height":"84px","color":"#fff"})
						$(".language").css({"height":"84px","padding-top":"35px"})
						$(".bor2").css("height","5px")
						$(".one").css("top","100px")
		        })
				}
			})
        });