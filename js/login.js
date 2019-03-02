// $('.loginway').find('p').each(function(){
//     $('.loginway').find('p').click(function(){
//         console.log('aa')
//         $('.loginway div p').removeClass('active')
//         $(this).addClass('active')
//     })
// }
    
// )

     $('.loginway').find('p').click(function(){
         console.log('aa')
        $('.loginway div p').removeClass('active')
        $(this).addClass('active')
         var a = $(this).index();
         console.log(a)
     })
  
$('.wrap_ptdl p').click(function(){
    $('.form1').show()
    $('.form2').hide();

})
$('.wrap_sjdl p').click(function(){
    $('.form2').show()
    $('.form1').hide();
    
})



$(function(){
	$("#btn").on("click",function(){
		$.post("http://47.104.244.134:8080/userlogin.do",{"name":$(".usn").val(),"password":$(".psw").val()},
		function(res){
			console.log(res);
			if(res.msg=="OK"){
				//window.location.href="#";
				window.location.href="index.html";
				console.log(res.data.token);
				//把登录的token存入cookie中
				var obj={};
				var $token=res.data.token;
				var $username = $('.usn').val()
				console.log($username)
				obj[0]=$token;
				obj[1]=$username;
				var objToStr = JSON.stringify(obj);
				setCookie("lart",objToStr);
				
			}else{
				alert("登录失败");
			}
			
		})
	})
})
