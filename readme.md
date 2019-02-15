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
   
 - 小程序 文字跑马灯
   
             <view>1 显示完后再显示</view>
             <view class="example">
               <view class="marquee_box">
                 <view class="marquee_text" style="{{orientation}}:{{marqueeDistance}}px;font-size: {{size}}px;">
                   {{text}}
                 </view>
               </view>
             </view>
             <view>2 出现白边后即显示</view>
             <view class="example">
              <view class="marquee_box">
                 <view class="marquee_text" style="{{orientation}}:{{marqueeDistance2}}px;font-size: {{size}}px;">
                  <text>{{text}}</text>
                   <text wx:if="{{marquee2copy_status}}" style="margin-left:{{marquee2_margin}}px;">{{text}}</text>
                </view>
              </view>
             </view> 
             
             
      
            .announcement {
                color: #a0a0a0;
                background: #fff0e3;
                border-radius: 6rpx;
                line-height: 66rpx;
                height: 66rpx;
            }
            .announcement-context {
                width: 580rpx;
                /* 偏移出文本框的内容隐藏掉 */
                overflow: hidden;
            }
            .announcement-text {
                width: 570rpx;
                /* 文字内容只做一行显示 */
                white-space: nowrap;
            }
            .example {
              display: block;
              width: 100%;
              height: 100rpx;
            }

            .marquee_box {
              width: 100%;
              position: relative;
            }

            .marquee_text {
              white-space: nowrap;
              position: absolute;
              top: 0;
            }
      
               
                const App = getApp();
                const Simple = App.Simple;
      
                Page({
                  data: {
                    text: '这是一条会滚动的文字滚来滚去的文字跑马灯',
                    marqueePace: 1,//滚动速度
                    marqueeDistance: 0,//初始滚动距离
                    marqueeDistance2: 0,
                    marquee2copy_status: false,
                    marquee2_margin: 60,
                    size: 14,
                    orientation: 'left',//滚动方向
                    interval: 20 // 时间间隔
                  },
                  onShow:function(){
                    var vm = this;
                    var length = vm.data.text.length * vm.data.size;//文字长度
                    var windowWidth = wx.getSystemInfoSync().windowWidth;// 屏幕宽度
                    vm.setData({
                      length: length,
                      windowWidth: windowWidth,
                      marquee2_margin: length < windowWidth ? windowWidth - length : vm.data.marquee2_margin//当文字长度小于屏幕长度时，需要增加补白
                    });
                    vm.run1();// 水平一行字滚动完了再按照原来的方向滚动
                    vm.run2();// 第一个字消失后立即从右边出现


                  },
                  //  显示完后再显示
                  run1: function () {
                    var vm = this;
                    var interval = setInterval(function () {
                      if (-vm.data.marqueeDistance < vm.data.length) {
                        vm.setData({
                          marqueeDistance: vm.data.marqueeDistance - vm.data.marqueePace,
                        });
                      } else {
                        clearInterval(interval);
                        vm.setData({
                          marqueeDistance: vm.data.windowWidth
                        });
                        vm.run1();
                      }
                    }, vm.data.interval);
                  },
                  //  出现白边后即显示
                  run2: function () {
                    var vm = this;
                    var interval = setInterval(function () {
                      if (-vm.data.marqueeDistance2 < vm.data.length) {
                        // 如果文字滚动到出现marquee2_margin=30px的白边，就接着显示
                        vm.setData({
                          marqueeDistance2: vm.data.marqueeDistance2 - vm.data.marqueePace,
                          marquee2copy_status: vm.data.length + vm.data.marqueeDistance2 <= vm.data.windowWidth + vm.data.marquee2_margin,
                        });
                      } else {
                        if (-vm.data.marqueeDistance2 >= vm.data.marquee2_margin) { // 当第二条文字滚动到最左边时
                          vm.setData({
                            marqueeDistance2: vm.data.marquee2_margin // 直接重新滚动
                          });
                          clearInterval(interval);
                          vm.run2();
                        } else {
                          clearInterval(interval);
                          vm.setData({
                            marqueeDistance2: -vm.data.windowWidth
                          });
                          vm.run2();
                        }
                      }
                    }, vm.data.interval);
                  },
                
                })
  
        
