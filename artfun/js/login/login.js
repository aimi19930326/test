var value = "";
$(document).ready(function () {
    $(".textbox").val("手机\邮箱\用户名");
    $(".password").val("密码");
    $(".textbox,.password").bind("click", function () {
        value = $(this).val();
        $(this).val("");
    });
    $(".textbox,.password").blur(function () {
        if ($(this).val() == "") {
            $(this).val(value);
        }
    });
});