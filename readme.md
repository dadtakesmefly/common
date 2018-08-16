## 总结
 - 小程序前端问题 ↵ 这个符号符合替换换成html的换行，replace 无效，解决办法：我们可以用\n来进行换行
   - `val.answer = val.answer.replace(/[\r\n]/g, '\n')`
   - 友情提示：必须在text标签中！
   
 - split按多个参数进行分割
   -    `var tempArr =  str.split(/[<br />,<br/>]/)  //按照多个参数进行分割`

-  小程序button标签自带样式 初始化
   -  button{
          margin: 0;
          padding: 0;
          line-height: normal;
          background-color: transparent;
       }
     button::after{
         content: none;
     }
  
  

 - 视频固定定位会滑动 解决办法 小程序tab栏高度为96；

       <scroll-view scroll-y style="height:{{winheight}}px;"><video></video> </scroll-view>
       data: {
         winheight: app.globalData.systemInfo.screenHeight-96,
       },

 - swiper图片轮播  手机在微信进入后台  再重新打开的时候  这个轮播有时会出现卡顿、鬼畜的来回滑动
   - autoplay 这个属性 默认设置 false  然后在 onHide里面设置为 false   onShow里面设置为true  
