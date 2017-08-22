$(function () {
    // 招聘须知确认按钮
    $(".sure").hammer().on('tap',function(){
        $(".cll-alert").css("display","none")
        $("body").removeClass("active");
    })
    // 点击 招聘须知出现
    $(".head-right").hammer().on('tap',function(){
        $(".cll-alert").css("display","block")
        $("body").addClass("active");
    })
    // 点击 关闭查询弹窗
    $(".search .close").hammer().on('tap',function(){
        $(".search-box").css("display","none")
        $("body").removeClass("active");
    })
    // 点击 查询
    $(".head-left").hammer().on('tap',function(){
        $(".search-box").css("display","block")
        $("body").addClass("active");
    })
    // 确认查询




    //公司简介弹窗
    $("article ul li").hammer().on('tap',function(){
        //获取当前点击公司名
        var title=$(this).children('p').html();
        //获取当前点击公司简介内容
        var con=$(this).attr('mess');
        $(".company-box").css("display","block");
        $(".company-box h2").html(title)
        $(".company-box p").html(con)
        $("body").addClass("active");
        var myScroll;
            myScroll = new IScroll('#wrapper');
    })
    // 关闭公司简介弹窗
    $(".company-box .close").hammer().on('tap',function(){
        $(".company-box").css("display","none")
        $("body").removeClass("active");
    })


    //new
    $(".cll-alert").hammer().on('tap',function () {
        $(".cll-alert").css("display","none")
        $("body").removeClass("active");
    })
    $(".cll-alert .cll-con").hammer().on('tap',function (event) {
        event.stopPropagation();
    })
    $(".search-box").hammer().on('tap',function () {
        $(".search-box").css("display","none")
        $("body").removeClass("active");
    })
    $(".search-box .search").hammer().on('tap',function (event) {
        event.stopPropagation();
    })
    $(".company-box").hammer().on('tap',function () {
        $(".company-box").css("display","none")
        $("body").removeClass("active");
    })
    $(".company-box .company-body").hammer().on('tap',function (event) {
        event.stopPropagation();
    })




})