/**
 * Created by ���� on 2017/7/12.
 */


//�ص�����
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

//�Զ���������¼�
$(".tabs ul li").eq(eq).trigger("click");

//�Զ������������ĸ߶�
window.onscroll= function(){
    //����t�ǹ���������ʱ�����붥���ľ���
    var h = document.documentElement.scrollTop||document.body.scrollTop;
    console.log(h);
}

//
