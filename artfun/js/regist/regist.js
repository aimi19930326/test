var registname = "";
$(document).ready(function () {
    $(".item2").hide();
	$("input").css({
		"font-size":"10pt",
		"font-family":"微软雅黑",
		"color":"#808080",
	});
	$(".textbox").val("请输入手机号");
	$(".password").val("请输入密码：至少6位");
	$(".confirmpsd").val("再次确认密码");
	$(".input_verify").val("验证码");
	$(".confirmpsd").blur(function () {
	    if ($(this).val() == "") {
	        $(this).val("再次确认密码");
	        $(this).attr("type", "text");
	    }
	});
	$(".textbox").bind("click",function(){
		registname="";
		registname=$(this).val();
		$(this).val("");
	});
	$(".textbox").blur(function(){
		var color=$(".btn_email").css("color");
		color=$.trim(color);
		if($(this).val()==""){
			$(this).val(registname);
		}
		else{
			if(registname=="请输入常用邮箱"){
				if(!$(this).val().match(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/)){
					alert("电子邮箱地址无效");
				}
			}
			else{
				if(!$(this).val().match(/^[1-9]{1}[0-9]{10}$/)){
					alert("手机号格式不对！");
				}
			}
		}
	});
	$(".input_verify").bind("click",function(){
		$(this).val("");
	});
	$(".input_verify").blur(function(){
		if($(this).val()==""){
			$(this).val("验证码");
		}
	});
	$(".password,.confirmpsd").bind("click", function () {
		$(this).val("");
		$(this).attr("type","password");
	});
	$(".password").blur(function(){
		if($(this).val()==""){
			$(this).attr("type","text");
			$(this).val("请输入密码：至少6位");
		}else{
			if(!$(this).val().match(/^[a-z0-9_-]{6,18}$/)){
				alert("格式不对或者位数不足6位，只能包含字母数字或者下划线");
			}
		}
	});
	$(".input_send").bind("click",function(){
		var value=60;
		var timer=setInterval(function(){
			$(".input_send").val("重新发送"+value+"秒");
			value--;
			if(value==0){
				clearInterval(timer);
				$(".input_send").val("发送手机验证码");
			}
		},1000);
	    $(this).css({
			"background-color":"rgb(255,255,90)",
			"color":"rgb(240,0,0)",
			"font_weight":"bold",
	    });
});
});

$(document).ready(function(){
	$(".btn_email").click(function(){
		$(".textbox").val("请输入常用邮箱");
		$(this).css({
			"color":"rgb(191,39,45)",
		});
		$(".btn_phone").css({
			"color":"#808080"
		});
		$(".input_send_group").hide();
		$(".confirmpsd").css({
            "margin-bottom":"15px",
		})
	});
	$(".btn_phone").click(function(){
		$(".textbox").val("请输入手机号");
			$(this).css({
				"color":"rgb(191,39,45)",
		});
			$(".btn_email").css({
				"color":"#808080"
			});
			$(".input_send_group").show();
			$(".confirmpsd").css({
			    "margin-bottom": "0px",
			})
	});
	$(".regist").bind("click", function () {
	    $(".item1").hide();
	    $(".item2").show();
	});
});