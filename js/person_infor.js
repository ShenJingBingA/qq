$(function () {
    $("#mess").html("xxx").css("display","block");
    setTimeout(function(){
        $("#mess").css("display","none");
    },2000)

    // let data=[
    //     {id:1,name:"杭州台鸿科技有限公司1"},
    //     {id:2,name:"杭州台鸿科技有限公司2"},
    //     {id:3,name:"杭州台鸿科技有限公司3"},
    //     {id:4,name:"杭州台鸿科技有限公司4"},
    //     {id:5,name:"杭州台鸿科技有限公司5"},
    //     {id:6,name:"杭州台鸿科技有限公司6"},
    //     {id:7,name:"杭州台鸿科技有限公司7"},
    //     {id:8,name:"杭州台鸿科技有限公司8"},
    //     {id:9,name:"杭州台鸿科技有限公司9"},
    //     {id:10,name:"杭州台鸿科技有限公司10"},
    // ]

    //选中三个
    var arr=[];//存id
    var brr=[];//存公司名

    $(".choose-con").hammer().on('tap','.company',function () {
        if($(this).attr("class").indexOf("company-active")==-1){
            if(arr.length==3){
                return false;
            }else {
                $(this).addClass("company-active")
                arr.push($(this).attr("id"))
                brr.push($(this).find(".btn-con").html())
            }
        }else {
            $(this).removeClass("company-active")
            let that=this;
            let r=arr.findIndex(function (val,index) {
                return val==$(that).attr("id");
            })
            arr.splice(r,1)
            brr.splice(r,1)
        }
    })

    brr.forEach(function (val,index) {
        $("<li>").html(`${val}`).appendTo($(".company-show"))
    })
    $("#sure").hammer().on('tap',function (){
        $("body").removeClass("active")
        $(".hidden").val(arr.join());
        $("#alertBox").css("display","none");
        $(".company-show").html('');
        brr.forEach(function (val,index) {
            $("<li>").html(`${val}`).appendTo($(".company-show"))
        })
    })

    // 选择公司
    $(".choose").hammer().on('tap',function (){
        $("body").addClass("active")
        $("#alertBox").css("display","block")
        $(".company").each(function(val,index){
            arr.forEach(function (value,item) {
                if(value==$(val).attr("id")){
                    val.addClass("company-active")
                }
            })
        })
    })



    //new
    $(".education").change(function () {
        var val=$(this).val();
        if(val=='未选择'){
            $(".one").css("display","none")
        }else if(val=='专科'){
            $(".one").css("display","none")
        }else if(val=='本科'){
            $(".one").css("display","block")
            $(".two").css("display","none")
        }else if(val=='研究生'||val=='其他'){
            $(".one").css("display","block")
        }
    })

})