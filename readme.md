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
  
  

货拉拉
总结
旷视
总结
编程猫
新东方
中商慧明
凤凰网
富途
58同城
涂鸦智能
美团闪购
知乎
快手
作业帮
顺丰
京东
tcl
美团企平



货拉拉
css垂直居中，右边定宽左边铺满
判断空对象
http过程
watch监听props变化
公司内部npm发布系统
总结
自我介绍：项目经历/擅长的技术点/离职原因/未来规划。
回答的太保守了，应该在回答问题的同时延申答案，充分展示自己的技术储备。比如回答promise的三种状态时，说下实现原理。回答用的的loader和plugin时怎么自己去写一个。

旷视
碰到哪些移动端兼容性问题
不同浏览器内核有什么区别
发布系统怎么做的
总结
没发挥好，不知道答案，就旧原则。不知道浏览器内核区别，就应该说说chrome内核

编程猫
函数组件如何保证状态连续性
useEffect 不执行第一次
组件报错白屏的处理(错误边界)
redux 数据流
thunk/saga 实现原理
promise.all 的实现原理
async awit为什么到下一步就能正常执行
硬件加速会有什么问题，硬件加速的属性
代码发布系统
如何知道浏览器是否空闲

新东方
邮箱正则
unmount的执行顺序
错误边界

中商慧明
form组件
单点登录
浏览器缓存如何清理

凤凰网
fetch xhr
自定义hooks
axios封装
上线流程

富途
五星好评组件
http强缓存
手写forEach
性能监控系统

58同城
class组件的内存问题
cookie、sessionStorage/localstorage
index页面放哪里
手写sort方法

涂鸦智能
ts泛型
lazy/suspense 原理
权限控制 链接

美团闪购
算法题 n次方
this.setState
虚拟dom的优点
计算属性的原理
技术选型

知乎
箭头函数的this问题
etag相比较文件最后修改时间的优点
变量提升的问题
事件循环微任务遇到微任务
node的事件循环
webpack性能优化后的效果比对
性能监控工具的具体比对：cdn还是npm包？执行时机？要注意的点？
无埋点 全埋点

快手
rem适配问题，都用rem？iPad?
微信内如何唤起app?
手机号正则匹配
redux数据流细节
es5原型继承
数组算法

作业帮
无头浏览器
vue也可以做单向数据流
context
跨域在哪一层被拦截
斐波拉且
react 状态合并原理

顺丰
写dialog组件

京东
AMD require.js import区别 link
npm包写公共逻辑用ts?
请求头

tcl
import
vue有哪些路由？区别 link
vue的data在最快在哪个生命周期拿到

美团企平
redux 和 react-redux的区别 link
this.state.a = 1;
移动端300ms延时为什么
移动端优化方案
  
        
