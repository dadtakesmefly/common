/**
 * Created by 王涛 on 2017/4/12.
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

 //js异常捕获之 try catch   可以判断该页面是在app内还是在app外，以便于执行不同的操作，前提条件需要安卓和ios写一个共同的js然后调用。

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
//异常捕获之 window.onerror
    window.onerror= function (e) {
        if(e){
            alert(e)
        }
    }
    a();


   
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

 //layer询问删除、确认层
         layer.open({
                    skin:"demo-class",
                    content: '您确认提交？',
                    btn: ['确认', '取消'],
                    shadeClose: false,
                    yes: function(){
                        layer.open({content: '确认', time: 1});
                        $.ajax({
                            url:"http://192.168.31.248:7070/AXGY_OP/debug",
                            type:"post",
                            data:{"title":$(".title_top").val(),"src":$(".src").val(),"mark":str0,"data":str3},
                            success: function (data) {
                                console.log(data);
                                layer.open({
                                    skin:"demo-class",
                                    title:"提示",
                                    content:"提交成功"
                                })
                            }
                        })

                    }, no: function(){
                        layer.open({content: '您选择了取消', time: 1});
                    }
                });


// layer 的iframe弹出后执行完某个操作后在关闭iframe 
   
        parent.layer.closeAll()
// iframe 子操作父
    
   window.parent.$(".src").attr("value",data.data.url)


//判断textarea输入框不为空
function isTextAreaNull(){
    var str=document.getElementById("desc").value.replace(/(^[\s\t\xa0\u3000]+)|([\u3000\xa0\s\t]+$)/g, "");
    if(str==""){
        layer.open({
            skin:"demo-class",
            title:"提示",
            content:"输入错误",
        })
    }else{

    }
}

//将base64的data:image/png;base64,前缀去掉
    var data = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUg..........."
    var data = data.substring(data.indexOf(",") + 1)
    
 
//密码明文和密文之间的切换显示 即动态去改变input的输入类型
    var img =document.querySelector("img");
    var password = document.getElementById("password");
    var btn =   document.querySelector("button");
    console.log(img);
    var isopen=true;
    img.onclick= function () {

        if(isopen){
            this.src="images/eyesopen.png";
            password.setAttribute("type","text")
        }
        else{
            this.src="images/eyesclose.png";
            password.setAttribute("type","password")
        }
        isopen=!isopen;
    }
    password.onblur= function () {

        var val =this.value;
        console.log(val);
        var regchildname=/[\u4e00-\u9fa5]{1,}$/;
        console.log(regchildname.test(val));
        if(regchildname.test(val)){
            layer.open({
                skin:"demo-class",
                title:"提示",
                content:"请不要输入中文",
            })
            btn.disabled = "disabled"
        }
        else{
            btn.disabled = false;
        }
    }
    
    
 //input框禁止输入空格
    <input type="text" name="userName" onKeypress="javascript:if(event.keyCode == 32)event.returnValue = false;">

 //判断多选框是否被选中
     $('input[name="mark"]').is(':checked') 返回的是布尔值

  // H5 API 本地图片上传预览 获取图片的宽高  
    $("li").on("click", function () {
            var index = $(this).index();
            console.log(index);
            $(".file").eq(index).on("change", function () {
                // 获取第一个文件信息
                var fileData = this.files[0];
                //读取图片数据
                var reader = new FileReader();
                reader.readAsDataURL(fileData);
                reader.onload = function (e) {
                    var data = e.target.result;
                    //加载图片获取图片真实宽度和高度
                    var image = new Image();
                    image.onload=function(){
                        var width = image.width;
                        var height = image.height;
                        console.log(width);
                        console.log(height);
                    };
                    image.src= data;
                    $("#editable li:eq("+(index)+")").find(".img").attr("src",this.result);
                    var datas = data.substring(data.indexOf(",") + 1)
                    $.ajax({
                        url:"http://192.168.31.248:7070/AXGY_OP/uploadImage",
                        data:{"image":datas,"fileName":"",},
                        type:"post",
                        success: function (data) {
                            console.log(data);
                            console.log(data.data.url);
                            console.log(typeof data.data.url);
                            $("#editable li:eq("+(index)+")").find(".img").attr("src",data.data.url);
                        }
                    })
                };
            })
        })
    
   
 // 拖拽排序 设置拖动区域 带删除        父元素id名   
  var editableList = Sortable.create(editable, {
            sort:"true",
            animation: 150, 
            handle: '.my-handle', //设置可拖拽区域 class类名
            filter: '.js-remove', //删除class类名
            onFilter: function (evt) {
                var el = editableList.closest(evt.item); // get dragged item
                 //console.log(typeof el);
                //console.log(evt.item);
                //console.log(evt.item.children);
                //console.log(evt.item.children[1]);
                //console.log(evt.item.children[1].currentSrc);  //当前的图片路径
                //console.log(evt.item.children[5].innerHTML);  //当前的文本内容
                //删除时候判断该行有没有内容  有则提示是否确认删除 
                if(evt.item.children[1].currentSrc != "" || evt.item.children[5].innerHTML != ""){
                    layer.open({
                        skin:"demo-class",
                        content: '确认删除？',
                        btn: ['确认', '取消'],
                        shadeClose: false,
                        yes: function(){
                            layer.open({content: '确认', time: 1});
                            el && el.parentNode.removeChild(el);  //删除该行
                        }, no: function(){
                            layer.open({content: '您选择了取消', time: 1});
                        }
                    })
                }
                //没有则直接删除  
                else{ 
                    el && el.parentNode.removeChild(el);  //删除该行
                }
            }
        });

 //删除数组指定的内容的项
    Array.prototype.indexOf = function (val) {
        for(var i = 0; i < this.length; i++){
            if(this[i] == val){return i;}
        }
        return -1;
    }
    Array.prototype.remove = function (val) {
        var index = this.indexOf(val);
        if(index > -1){this.splice(index,1);}
    }
    var arr= [1,2,3,4,5]
    arr.remove(1);
 
//删除数组中的undefined 项
     var arr= [1,2,undefined,4,5,undefined];
     var b = [];
     for(var i=0;i<arr.length;i++){
            if(typeof(arr[i])!='undefined'){
                b.push(arr[i]);
            }
       }
       console.log(b); [1,2,4,5]

 //去重
 //定义一个新的数组
     var arr = [1,2,3,1,2,4,3]
     var s = [];
     //遍历数组
      for(var i = 0;i<arr.length;i++){
            if(s.indexOf(arr[i]) == -1){  //判断在s数组中是否存在，不存在则push到s数组中
                s.push(arr[i]);
            }
       }
        console.log(s) [1,2,3,4]
    
 //tabs结构转化  .具体结构详见微信公众号里面的markdown
    function tabstostring(data){
        //先循环data对象
        $.each(data, function (i,v) {
            //先循环 然后再创建数组
            var arr = [];
            //再循环data对象的tabs
            $.each(v.tabs,function(i,v){
                //console.log(v.name);
                //将标签名添加到数组里面
                arr[i] = v.name ;
            })
            //数组转字符串用 " | " 连接
            var str = arr.join(" | ");
            // 替换原始数据的tabs内容
            v.tabs = str
        })
        return data
    }
   
 //检测图片地址 是不是http开头的(七牛地址) 如果是表示图片上传成功 否则没有
    function regSrc(){
        var bool;
        $.each( $(".hidden_data li:gt(0)").children("img"), function (i, v) {
            console.log(i);
            console.log(v);
            console.log(v.src);
            console.log(typeof v.src);
            var reg =new RegExp("http");
            for(var s=0;s<=i;s++){
                if(reg.test(v.src)){
                   bool =true;
                }
                else{
                    bool =false;
                }
                console.log(bool);
            }
        })
        return bool
    }
    bool =  regSrc();//调用 返回一个bool值
    if( bool == false ){
                layer.open({
                    skin:"demo-class",
                    title:"提示",
                    content:"图片正在上传，请耐心等待"
                })
                return
      }    
//去掉url中的参数
function getDocumentUrl(){
    return location.protocol+'//'+location.host+location.pathname;
}
var shareUrl = getDocumentUrl();

function GetQueryString(name) {
                var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
                var r = window.location.search.substr(1).match(reg);  //获取url中"?"符后的字符串并正则匹配
                var context = "";
                if (r != null)
                    context = r[2];
                reg = null;
                r = null;
                return context == null || context == "" || context == "undefined" ? "" : context;
            }
            //pc和手机浏览器获取userId
            var userId=GetQueryString("userId");
            //微信浏览器获取openid
            var openid=GetQueryString("openid");
        //手机打开，切到手机页面
        var u = navigator.userAgent;
        if(u.indexOf('Android') > -1 || u.indexOf('iPhone') > -1 || u.indexOf('iPad') > -1) {
            //跳到手机链接
            //手机端浏览器检查useid
            //微信端检查openid
                //微信浏览器
                var ua = window.navigator.userAgent.toLowerCase();
                if(ua.match(/MicroMessenger/i) == 'micromessenger'){
                   if(openid == ""){
                       window.location.href = './login.html';
                   }
                }
                //手机非微信浏览器
                else if(userId == ""){
                     window.location.href = './login.html';
                }
        }
        //电脑端
        else if (userId == ""){
            window.location.href = './login.html';
        }
        else{

        }
