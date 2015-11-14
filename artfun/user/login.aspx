<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="login.aspx.cs" Inherits="artfun.user.login" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <link href="../../css/reset.css" rel="stylesheet" type="text/css"/>
    <link href="../../css/login/login.css" rel="stylesheet" type="text/css" />
    <script type="text/javascript" src="../../js/jquery-1.11.2.min.js"></script>
    <script type="text/javascript" src="../../js/login/login.js"></script>
    <title>login</title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
	<span class="close"><img src="../../imgs/regist/close.png" /></span>
	</div>
        <div class="content">
		<div class="item1">
		      <span><label class="lb_regist">登录</label></span>
    		  <span class="regist">
    		      <label>没有注册？请></label>
    		      <a href="../../user/regist.html">注册</a>
    		  </span>
		<div>
		<div>
		  <span><label class="lb_society">社交账号登录</label></span>
		</div>
		<div class="img_society">
		     <div>
		     	<img src="../../imgs/regist/xinlang.png"/>
		     	<img src="../../imgs/regist/wechat.png"/>
		     	<img src="../../imgs/regist/qq.png"/>
		     </div>
		     <div class="img_society_2">
		     	<img src="../../imgs/regist/twitter.png"/>
		     	<img src="../../imgs/regist/facebook.png"/>
		     </div>
		</div>
        <div class="divider">
        </div>
		<div class="login2">
			注册账号登录
		</div>
		<div>
		     <div>					
				<span><input type="text" class="textbox" id="active"/></span>
			</div>
			 <div>
			    <span><input type="text" class="password"/></span>
			 </div>
		</div>
        <div>
			<input type="submit" class="login" value="登录"/>
		</div>
		<div>
			<input type="checkbox" class="cb_accept" checked="checked"/>
			<span><label>下次自动登录</label></span>
            <span><a href="">&nbsp&nbsp&nbsp&nbsp 找回密码</a></span>
		</div>
      </div>
    </div>
    </div>
    </form>
</body>
</html>
