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


//获取参数，根据获取url中的参数演化而来的,只需在str最前面插入一个"?"的字符串即可
var str = "app_id=58game_sso_api&timestamp=1499749974000&sign=6dcdcd9a84cfe9a5bffab711005590c1"
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i");
    //这里是为测试给大家看的以下两行
    //测试开始
    var ur="?app_id=58game_sso_api&timestamp=1499749974000&sign=6dcdcd9a84cfe9a5bffab711005590c1"; //真实环境下删除
    var r = ur.substr(1).match(reg);//真实环境下删除
    //测试结束，
    //真实环境下请用下面一句。
    //var r = window.location.search.substr(1).match(reg); //真实环境请用这句
    if (r!=null) return (r[2]); return null;
}
console.log("获取sign值为："+GetQueryString("sign")+"<br>");
console.log("获取app_id值为："+GetQueryString("app_id")+"<br>");
console.log("获取timestamp值为："+GetQueryString("timestamp"));

//正则匹配  1561/2235
console.log(window.location.href);
console.log(typeof window.location.href);
var str="http://www.dqr2015.com/mood_detail/1561/2235"
document.write(str.lastIndexOf("/") + "<br />")
var reg=/\d{1,10}\/\d{1,10}/;
console.log(str.match(reg)[0]); //第一种
console.log(str.slice("35"));//第二种

//数据格式
Object {phone: "13211112222", sex: "男", name: "王某", teamList: Array(4), userId: "Localhost_nuCoZOrUMIo0"}
name:"王某"
phone:"13211112222"
sex:"男"
teamList:Array(4)
userId:"Localhost_nuCoZOrUMIo0"

 //动态设置option的选项
 $("#investigatorSex option[value='"+data.sex+"']").attr("selected","selected")
   
  //动态创建option的选项
   -for(var i=0;i<data.teamList.length;i++){
       var new_option = "<option value="+data.teamList[i].name+">"+data.teamList[i].name+"</option>";
        console.log(new_option);
         $("#teamName").append(new_option);
     }

//try catch
      function tst()
       {
           try
           { 
               alllert("asdf");  //可能出错的代码写在try里面
               //var i = 1;
               //i = "sss";
           }
           catch(msg)
           {
               /*for(var p in msg){
                document.writeln(msg[p]);
                }*/
               //上面可以遍历错误
               if(msg instanceof EvalError){
                   //如果非法调用了eval()函数，则会抛出EvalError的异常。
                   alert("EvalError");
               }else if(msg instanceof ReferenceError){
                   //从字面的意思应该是调用了错误的引用，此例子是执行到了本步。
                   alert("ReferenceError");
               }else if(msg instanceof RangeError){
                   //数值超出了范围
                   alert("RangeError");
               }else if(msg instanceof SyntaxError){
                   //语法错误，错误发生在eval()，
                   alert("SyntaxError");
               }else if(msg instanceof TypeError){
                   //变量类型不是预期的
                   alert("TypeError");
               }else if(msg instanceof URIError){
                   //错误发生在encodeURI()或decodeURI()中
                   alert("URIError");
               }
           }
       }
       tst()

//判断ios还是安卓
$(function () {
    var u = navigator.userAgent, app = navigator.appVersion;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
    var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    if (isAndroid) {
        alert("安卓机！")
    }
    if (isIOS) {
        alert("苹果果机！")
    }
});
//layer 嵌套iframe 依赖layer.js 和jq
   layer.open({
                type: 2,
                title: '上传活动提议封面图',
                shadeClose: true,
                shade: false,
                maxmin: false, //开启最大化最小化按钮
                area: ['100%', '100%'],
                content: './ima_up/index.html',
            });
//layer 弹层销毁后执行事件
  layer.open({
                skin:"demo-class",
                title:"提示",
                content:"报送成功",
                end: function(){window.location.href="./index.html"}
              });

    
