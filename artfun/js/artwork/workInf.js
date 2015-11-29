$(document).ready(function () {
    var w = $(window).width();
    var h = $(window).height();
    $(".des_com_content input").val("写下我的看法...");
    $(".subnav_left_dlist,#childItem").hide();
    $(".imgBack").css({
        'width': w,
        'height': h,
    });
    $(".imgBack,.des_story,.des_comment,.des_trade").hide();
    $(".PersonContent").bind("mouseover", function () {
        $(".content").css({
            "margin-top": "-70px",
            '-webkit-transition': 'margin-top 0.4s ease',
            '-moz-transition': 'margin-top 0.4s ease',
            '-o-transition': 'margin-top 0.4s ease',
            'transition': 'margin-top 0.4s ease',
            'transition': 'margin-top 0.4s ease',
        }, 2000);
        $(".mainImg >img:nth-child(3),.mainImg >img:nth-child(1)").css({
            "margin-top": '468px',
        }, 2000);
    });
    $(".PersonContent").bind("mouseout", function () {
        $(".content").css({
            "margin-top": "-400px",
        });
        $(".mainImg >img:nth-child(3),.mainImg >img:nth-child(1)").css({
            "margin-top": '200px',
        });
    });

    $(".item").dblclick(function () {
            var width = $(window).width();
            var scale = width / $(this).width();
            var height = $(this).height() * scale;
            $(".imgBack").toggle();
            $(".item").toggleClass("mainImg_center2");
            $("body").toggleClass("body");
            $(".carousel").toggleClass("carousel1");
            $(".item img").toggleClass("mainImg_center1");
    });
    $(".mainImg_border,.mainImg_bot_one,.mainImg_bot_two,.mainImg_bot_three,.mainImg_bot_four").mouseenter(function (e) {
        var w = $(this).width();
        var h = $(this).height();
        var x = new Number($(this).css("background-position-x").replace(/[^0-9]/ig, "")) + w;
        $(this).css("background-position-x","-"+x+"px");
    });
    $(".mainImg_border,.mainImg_bot_one,.mainImg_bot_two,.mainImg_bot_three,.mainImg_bot_four").mouseout(function (e) {
        var w = $(this).width();
        var h = $(this).height();
        var x = new Number($(this).css("background-position-x").replace(/[^0-9]/ig, "")) - w;
        //alert(x);
        $(this).css("background-position-x", "-" + x + "px");
    });
    $(".mainImg_bot_two").mouseenter(function () {
        $(".subnav_left_dlist").show();
    });
    $(".subnav_left_dlist li").hover(function () {
        $("#childItem").show();
    });
    $(".des_head ul li:nth-child(1)").bind("click", function () {
        $(".progress_block").css("margin-left", "403px");
        $(".des_content >div").hide();
        $(".des_details").show();
    });
    $(".des_head ul li:nth-child(2)").bind("click", function () {
        $(".progress_block").css("margin-left", "543px");
        $(".des_content >div").hide();
        $(".des_story").show();
    });
    $(".des_head ul li:nth-child(3)").bind("click", function () {
        $(".progress_block").css("margin-left", "683px");
        $(".des_content >div").hide();
        $(".des_comment").show();
    });
    $(".des_head ul li:nth-child(4)").bind("click", function () {
        $(".progress_block").css("margin-left", "823px");
        $(".des_content >div").hide();
    });
    $(".des_com_content input").bind("click", function () {
        if ($(this).val() == "写下我的看法...") {
            $(this).val("");
        };
    });
    $(".des_com_content input").blur(function () {
        if ($(this).val() == "") {
            $(".des_com_content input").val("写下我的看法...");
        }
    })
});