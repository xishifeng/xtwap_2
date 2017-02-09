//URL参数抓取
function GetArgsFromHref(sHref, sArgName) {
	var args = sHref.split("?");
	var retval = "";

	if(args[0] == sHref) /*参数为空*/ {
		return retval; /*无需做任何处理*/
	}
	var str = args[1];
	args = str.split("&");
	for(var i = 0; i < args.length; i++) {
		str = args[i];
		var arg = str.split("=");
		if(arg.length <= 1) {
			continue;
		}
		if(arg[0] == sArgName) {
			retval = arg[1];
		}
	}
	return retval;
}

//function dengLu() {
//	return true;
//}

function resetInput(e){
	e.prevAll("input").val("");
	e.hide();
}

$(document).ready(function() {
//	flag = 0; //0表示.jia是否存在，或隐藏
//	$(".header-mulu").click(function() {
//		var jia1 = '<a href="zhuce.html">注册</a><a href="denglu.html">登录</a><a href="#" id="erweima-show">扫一扫</a>';
//		var jia2 = '<a href="wode.html">个人中心</a><a href="#" id="erweima-show">扫一扫</a>';
//		var erWeiMa = '<div class="erweima-lg"><img src="img/weixin-erweima.png" class="ab-center" /></div>';
//		if(flag) {
//			//console.log(1);
//			$(".jia").slideUp();
//			flag = 0;
//		} else {
//			//console.log(2);
//			$(".jia").remove();
//			$(".erweima-lg").remove(); //必须删除节点，不然会有多重
//			$("header").after('<div class="jia jia-weideng"></div>');
//			$("body").append(erWeiMa);
//			if(dengLu()) {
//				$(".jia").html(jia2);
//			} else {
//				$(".jia").html(jia1);
//			}
//			$(".jia").slideDown();
//			flag = 1;
//		}
//	});

		
	$(".header-mulu").click(function(){
		$(this).toggleClass("header-mulu-active");
		if(dengLu()){
			$(".jia-yideng").slideToggle();
		}else{
			$(".jia-weideng").slideToggle();
		}
	});
	


	//首页二维码点击大图部分
	$(document).on('click', '#erweima-show', function(event) {
		event.preventDefault();
		$(".erweima-lg").fadeIn();
	});
	$(document).on('click', '.erweima-lg', function() {
		$(this).fadeOut();
	});
	
	
	//注册页面里的一些
	var formZc = $('.form-zc');
	
	formZc.find("#phone-num").blur(function(){
		var pn = $(this).val();
		if(!(/^1[34578]\d{9}$/.test(pn))){
			$(".form-area-dxyzm").hide();
		}else{
		}
	});
	formZc.find("#zc-tx-yzm").blur(function(){
		if(1){
			var pn = $("#phone-num").val();
			if(/^1[34578]\d{9}$/.test(pn)){
				$(".form-area-dxyzm").show();
			}else{
				//验证码正确，手机号不正确
			}
		}else{
			//验证码不正确
		}
	});
	
	$(".header-search-icon").click(function(e){
		e.preventDefault();
		var _w = $(this).prev().val();
		window.location.href = "list-taocan.html";
	})

	//寻址链接部分,放到最后，保证data-url添加完毕后再执行
	$("[data-url]").click(function(event) {
		event.stopPropagation();
		location.href = $(this).attr("data-url");
	});
})