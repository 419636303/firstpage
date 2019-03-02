$(function(){
	  window.setTimeout(function(){
		$(".safe_warm").slideDown(300);
	  },500);
	$(".safe_warm .close_con").click(function(){		
		$(this).parents(".safe_warm").slideUp(100);
	})
})

console.log($('.safe_warm'))


$('.boxnav li').hover(function(){
	$(this).stop().animate({'left':'7px'},150)
},function(){
	$(this).stop().animate({'left':'0px'},150)
})

var i = 0
setInterval(() => {
	
		i++
	
	if(i>5){
		i=0
	}
 	$('.nums li').each(function(){
 	$('.nums li').removeClass('active')
 	$('.nums li').eq(i).addClass('active')
 })
	$('.bannerlist').animate({'left':-i*750},200)
}, 1000);



	$('.main_r p').each(function(){
		$('.main_r p').click(function(){
		$('.main_r p').removeClass('special')
		$(this).addClass('special')
		//console.log($(this).index())
		//console.log($('main_r div').index())
		//$('main_r div:not(".dc_ol")').eq($(this).index()).show()
			
	})
})
$('.zxzx').click(function(){
	$('.zxzx_list').show().siblings().hide()
})
$('.yswz').click(function(){
	$('.yswz_list').show().siblings().hide()
})

$('.zxzx_list i').hover(function(){
	console.log('aa')
	$(this).stop().animate({'top':'-10px'},100)
},function(){
	$(this).stop().animate({'top':0})
})

$('.tg_top li').each(function(){
	//$(this).addClass('tg_top_active').siblings().removeClass('tg_top_active')
	$('.tg_top li').hover(
		function(){
			$('.tg_top li').removeClass('tg_top_active')
			$(this).addClass('tg_top_active')
		}
	)
	
	$('.tg_top li:first').hover(
		// function(){
		// 	$('.ppqj').show();
		// },
		// function(){
		// 	$('.ppqj').hide();
		// }
		function(){
			console.log('aa')
			$('.ppqj').css({'display':'block'}).siblings().css({'display':'none'})
			
		}

	);
	$('.tg_top li:last').hover(
		
		// function(){
		// 	$('.yqlj').show();
		// },
		// function(){
		// 	$('.yqlj').hide();
		// }
		function(){
			
			$('.yqlj').css({'display':'block'}).siblings().css({'display':'none'})
		}


	)
})


$('.flog span').hover(function(){
	$(this).stop().animate({'top':'-15px'},200)
},function(){
	$(this).stop().animate({'top':'0px'},50)
})

$('.top').click(
	function(){
		$('body,html').animate({'scrollTop':'0'},500) 
	}
)
$(window).scroll(function(){
	var oSt = $(window).scrollTop();
	if(oSt>=$('.f1').height()){
		$('.floor').fadeIn();
		$('.f1').each(function(){
			if($(window).height()+oSt-$(this).offset().top>$(window).height()/2){
				//console.log('aa')
				//$('.floor span').removeClass('floor_li_active')
				//$('.floor li span').eq($(this).index()).addClass('floor_li_active')
				$('.floor li').eq($(this).index()+1).find('span').addClass('floor_li_active')
			}
		})
	}else{
		$('.floor').fadeOut();	
	}
})

var a = $('.floor li').not('.floor li:first-child')
a.click(function(){//点击列表跳转当前楼层
	$('body,html').animate({'scrollTop':$('.f1').eq($(this).index()).offset().top},500)
	console.log(a.eq($(this)).index())
})

$('img').click(function(){
	if(getCookie('lart')){
		window.location.href = 'list.html'
	}else{
		alert('请登录')
		window.location.href = 'login.html'
	}
		
	
	
})


	var obj = JSON.parse(getCookie("lart"));
	//console.log(obj)

var $user = obj[1]
var time = new Date();
var hour = time.getHours();
if(hour<11&&hour>=5){
	$('.login').html("早上好，"+$user)
}if(hour>=11&&hour<=13){
	$('.login').html("中午好，"+$user)
}if(hour>13&&hour<=18){
	$('.login').html("下午好，"+$user)
}
if(hour>18&&hour<=23){
	$('.login').html("晚上好，"+$user)
}if(hour>23&&hour<5){
	$('.login').html("注意休息哦，"+$user)
}











