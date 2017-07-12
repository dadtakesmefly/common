/**
 * Created by 王涛 on 2017/7/12.
 */


//回到顶部
$(window).scroll(function(){
    var top= $(document).scrollTop();
    if(top<200){
        $(".backtop").css({"display":"none"})
    }
    else{
        $(".backtop").css({"display":"block"})
    }
})
$(".backtop").on('click', function() {
    $("html,body").animate({scrollTop:0}, 0);
});

//自动触发点击事件
$(".tabs ul li").eq(eq).trigger("click");

//自动监听滚动条的高度
window.onscroll= function(){
    //变量t是滚动条滚动时，距离顶部的距离
    var h = document.documentElement.scrollTop||document.body.scrollTop;
    console.log(h);
}

//
