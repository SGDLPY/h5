$(window).scroll(function(){
	var top=$("body").scrollTop();
	if(top>1){
		$("nav").css({"height":"44px","background":"#0353b2","opacity":"1"})
	}else{
		$("nav").css({"height":"84px","background":"none","opacity":"1"})
}
	})