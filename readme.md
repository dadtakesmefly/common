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

 - iphoneX 适配
  
         `onLoad: function () {
          console.log('onLoad')
          var that = this
          try {
            var res = wx.getSystemInfoSync()
            // console.log(res.model)
            // console.log(res.pixelRatio)
            // console.log(res.windowWidth)
            // console.log(res.windowHeight);
            var isIphonex = /iPhone X/.test(res.model)
            if (/iPhone X/.test(res.model)){
              var isIphonex = true
            }
            else{
              var isIphonex = false
            }
            // console.log(isIphonex)
            // console.log(res.language)
            // console.log(res.version)
            // console.log(res.platform)
            that.setData({
              height: res.windowHeight - 460,
              isIpx: isIphonex == true ? true:false
            })
          } catch (e) {
            // Do something when catch error
          }
        },
       <view class='layout-bottom {{isIpx == true ? "iphonex":""}}'>
       <view  wx:if="{{passlist.length > 0}}" style="height:{{height}}px;line-height:{{height}}px" class="screen">
            {{screenData}}
        </view>
       .iphonex {
          position: fixed;
          bottom: 68rpx;
      }`
