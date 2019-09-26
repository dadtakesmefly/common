/**
 * Created by 王涛 on 2017/4/12.
 */


// 关于JS实现的4种数字千位符格式化，例如“10,000”
function toThousands(num) {
    return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
}

(12345).toLocaleString()
"12,345"


// 获取URL 指定参数  str是url ，name是参数名字
function GetQueryString(str, name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = str.split('?')[1];
    if (r) {
        r = r.match(reg); //search,查询？后面的参数，并匹配正则
    }
    if (r != null) return unescape(r[2]);
    return null;
}

// 批量删除url中的参数  name =  ['_at','openId']
function funcUrlDel(url, name=[]) {
    var baseUrl = url.split('?')[0] + '?'
    var r1 = url.split('?')[1]
    name.forEach((n,i)=>{
        if (r1.includes(n)) {
            var obj = {}
            var arr = r1.split("&");
            for (var i = 0; i < arr.length; i++) {
                arr[i] = arr[i].split("=");
                obj[arr[i][0]] = arr[i][1];
            };
            delete obj[n];
            var url = JSON.stringify(obj).replace(/[\"\{\}]/g, "").replace(/\:/g, "=").replace(/\,/g, "&");
            r1 = url
        }; 
    })
    return baseUrl + r1
   
}

cleanUrl = function () {
        var shortUrl = '';
        var cleanUrl = window.location.href;
        var cleanUrlParams = getURLParams() || {};
        var paramArray = ['_at','openId'];

        
            try {
                for (var m = 0; m < paramArray.length; m++) {
                    var keyItem = paramArray[m];
                    delete cleanUrlParams[keyItem];
                }

                shortUrl = cleanUrl.replace(/\?.*/gi, '') + '?' + $.param(cleanUrlParams) + window.location.hash;
            } catch (e) {
                console.log(e)
            }
        

        return shortUrl;

    }


//批量创建 50 下拉选项  且去掉 0 

var a = Array.from(new Array(51).keys()).slice(1).map(item=>{
            return `${item}人`
        }),
// 如果计算金额 去掉 人  replace('人'，'') 
    

//js随机从数组中取出几个元素
var a = [1,2,3,4,5,6,7,7,8,9,9,9,3]
a.sort(function() {
           return 0.5 - Math.random();
   }).slice(0, 3) //取数组随机的3个值




 //判断数组里面 的每个值 出现了多少次 并且去重
 let arr =  pages.map(item=>{
            return item.route || [1,1,2,3,455,3,4]
 })
        console.log(arr)
        var temp = [];
        var obj = {};
        var newArr = [];
        for (var i = 0; i < arr.length; i++) {
            var dt = arr[i];
            if (obj[dt]) {
                obj[dt]++;
            } else {
                temp.push(dt);
                obj[dt] = 1;
            }
        }
        console.log(temp);
        for (const i in obj) {
            newArr.push({
                'name': i,
                'value': obj[i]
            })
        }
        console.log(newArr);




  //js 去掉字符串前面的0
  var s='002345';
  alert(s.replace(/\b(0+)/gi,""));

//js如何将小数保留一位且不实现四舍五入！
function avg(a,b){
     var res= parseInt((a/b)*10)/10;//保留两位、三位小数 同理
     if(String(res).indexOf('.') === -1){
      res += ".0"
     }
     return res;
}
console.log(avg(2,3));//输出结果为0.6
 * 输入：秒 
 * 输出：时分秒 如100秒 00：01：40 
function time_To_hhmmss(seconds){  
    var hh;  
    var mm;  
    var ss;  
      
    if(seconds==null || seconds<=0){  
        return "00:00:00";  
    }  
    hh = seconds/3600|0;  
    seconds = parseInt(seconds)-hh*3600;  
    if(parseInt(hh)<10){  
        hh = "0"+hh;  
    }  
  
  mm = seconds/60|0;  
    
  ss = parseInt(seconds)-mm*60;  
  if(parseInt(mm)<10){  
   mm = "0"+mm;  
  }  
  if(ss<10){  
    ss = "0"+ss;  
  }  
  return hh+":"+mm+":"+ss;  
}

  /**
    * 初始化當前的起始位置
    */
  initLocation() {
    var that = this
    return new Promise((resolve, reject) => {
      wx.getLocation({
        type: 'wgs84',
        success: (res) => {
          console.log(res)
          that.setData({
            latitude: res.latitude,
            longitude: res.longitude
          })
          resolve();
        },
        fail: (err) => {
          wx.showModal({
            title: '获取不到您的定位',
            content: '允许使用您的定位，以获取准确的起点',
            confirmText: '开启定位',
            success: (res) => {
              if (res.confirm) {
                this.getAuthor().then(() => {
                  resolve();
                }).catch((err) => {
                  reject(err);
                });
              } else {
                reject();
              }
            }
          });
        }
      });
    });
  },    
  /**
   * 进入首页提示获取允许获取地理权限的时候，用户点击了“否”
   * 下次需要用到地理权限的时候，需要获取权限
   */
  getAuthor() {
    return new Promise((resolve, reject) => {
      // 获取到地理位置权限后，还需要重新初始化。
      wx.getSetting({
        success: (res) => {
          if (!res.authSetting['scope.userLocation']) {
            wx.openSetting({
              success: (res) => {
                if (!res.authSetting['scope.userLocation']) {
                  wx.showModal({
                    title: '获取不到您的定位',
                    content: '允许使用您的定位，以获取准确的起点',
                    confirmText: '开启定位',
                    success: (res) => {
                      if (res.confirm) {
                        this.getAuthor();
                      } else {
                        reject('refuseLocation');
                      }
                    }
                  });
                } else {
                  resolve();
                  this.initLocation()
                }
              }
            });
          }
        }
      });
    });
  },



//生成随机整数

parseInt(2 * Math.random())  //0-1
parseInt(3 * Math.random())  //0-2
parseInt(10 * Math.random())  //0-9

//原生滚动
 window.onscroll = function(){
           var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
           console.log(scrollTop)
           if( scrollTop >= 600 ) {
               that.setState({
                   fixShow:true,
               })
           } else {
               that.setState({
                   fixShow:false,
               })
           }
        }
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
   
 
