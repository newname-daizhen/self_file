var is_mobile =  /iphone|ipod|ipad|android/i.test(window.navigator.userAgent || '');
// 在线客服
function online(){
	var left = (window.screen.width - 800 - 10) / 2;
	var top  = (window.screen.height - 600 -30) / 2;
	var t = new Date();
	var h = t.getHours();
	var w = t.getDay();
	if(h > 8 && h < 22 && w > 0 && w < 7){
		window.open("http://p.qiao.baidu.com/cps/chat?siteId=14090061&userId=29294290", "_blank", "width=800,height=600,left=" + left + ",top=" + top)
	}else{
		is_mobile ? $("body, html").animate({scrollTop: $("body, html").height()}) : $(".oh-desktop .word").trigger('click');
	}
}

var is_weixin = (function(){
	return navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1
	// true是微信
})();

function flatType(){
	var edit = true;
	var ua = navigator.userAgent;
	var isIOS = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
	var flatform = null;
	if(ua.indexOf("Android")>0 || ua.indexOf("iPhone")>0 || ua.indexOf("iPad")>0){
		// flatform = isIOS ? 'ios' : 'android';
		flatform = "phone"
	}else{
		flatform = "web";
	}
	$("body").addClass(flatform);
}


// H5点击弹出菜单
function menuHFive(){
	$(".menu_btn").click(function(){
		// $(".mask").show().css("opacity",1);
		$(".mask").fadeIn();
		$(".fixed-head .list-nav").addClass("pop");
	});
	$(".mask, .close_menu").click(function(){
		// $(".mask").css("opacity",0).delay(300).hide();
		$(".mask").fadeOut(200);
		$(".fixed-head .list-nav").removeClass("pop");
	});
}

// H5菜单交互
function menuHFiveClick(){
	// $(".item-menu:not(.item-menu)>a").click(function(){
	$(".item-menu>a").click(function(){
		if (!$(this).parent().hasClass("active")) {
			$(".item-menu").removeClass("active");
			$(this).parent().addClass("active");
		}else{
			$(this).parent().removeClass("active");
		}
	})
}


// 显示隐藏交互
function hideIs(scrollTop){
	if (scrollTop>0) {
		$(".smb-head").addClass("idx")
	}else{
		$(".smb-head").removeClass("idx")
	}
	if (scrollTop>200) {
		$(".smb-side").show();
	}else{
		$(".smb-side").hide();
	}
	if (scrollTop>800) {
		$(".totop").removeClass("hide-top");
	}else{
		$(".totop").addClass("hide-top");
	}
}

// 首页顶部交互
function indexTop(){
	var scrollTop = $(window).scrollTop();
	hideIs(scrollTop);
	$(window).scroll(function(){
		scrollTop = $(window).scrollTop();
		hideIs(scrollTop);
	})
}

// tab悬浮
function tabFixed(){
	
	if ($(".wraper-soft_tab").length==0) return false;
	var scrollTopTab = $(".wraper-soft_tab").offset().top;
	if($(".smb-head")){
		var navHeight = $(".smb-head").height();
	}else{
		var navHeight = 0;
	}
	var scrollTop = $(window).scrollTop();
	if (scrollTop>scrollTopTab) {
		$(".wraper-soft_tab").addClass("fixed").css("top",navHeight);
			$(".soft-banner").addClass("mb");
	}else{
		$(".wraper-soft_tab").removeClass("fixed").css("top",navHeight);
			$(".soft-banner").removeClass("mb");
	}
	$(window).scroll(function(){
		scrollTop = $(window).scrollTop();
		if (scrollTop>scrollTopTab-navHeight) {
			$(".wraper-soft_tab").addClass("fixed").css("top",navHeight);
			$(".soft-banner").addClass("mb");
		}else{
			$(".wraper-soft_tab").removeClass("fixed").css("top",navHeight);
			$(".soft-banner").removeClass("mb");
		}
	})
}


// 置顶
function toTop(){
	$(".totop").click(function(){
		$("html,body").animate({"scrollTop": 0});
	})
}

// 一站式解决方案
function setWay(time){
					
	var img_way = 1;
	setInterval(function(){
		$(".list-absolute li").removeClass("set");
		$(".item-"+ img_way).addClass("set");
		img_way++;
		if (img_way > 8) {
			img_way = 1;
		}
	},time)
}

// H5页脚交互
function footHFiveClick(){
	$(".smb-foot .foot-about-1 .foot-hfive .name").click(function(){
		if (!$(this).parent().hasClass("pop")) {
			$(".smb-foot .foot-about-1 .foot-hfive").removeClass("pop");
			$(this).parent().addClass("pop");
		}else{
			$(this).parent().removeClass("pop");
		}
	})
}

$(function(){
	flatType();
	tabFixed();
})