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


//��ȡ���������ݻ�ȡurl�еĲ����ݻ�������,ֻ����str��ǰ�����һ��"?"���ַ�������
var str = "app_id=58game_sso_api&timestamp=1499749974000&sign=6dcdcd9a84cfe9a5bffab711005590c1"
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i");
    //������Ϊ���Ը���ҿ�����������
    //���Կ�ʼ
    var ur="?app_id=58game_sso_api&timestamp=1499749974000&sign=6dcdcd9a84cfe9a5bffab711005590c1"; //��ʵ������ɾ��
    var r = ur.substr(1).match(reg);//��ʵ������ɾ��
    //���Խ�����
    //��ʵ��������������һ�䡣
    //var r = window.location.search.substr(1).match(reg); //��ʵ�����������
    if (r!=null) return (r[2]); return null;
}
console.log("��ȡsignֵΪ��"+GetQueryString("sign")+"<br>");
console.log("��ȡapp_idֵΪ��"+GetQueryString("app_id")+"<br>");
console.log("��ȡtimestampֵΪ��"+GetQueryString("timestamp"));

