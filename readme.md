## 总结
 - 小程序前端问题 ↵ 这个符号符合替换换成html的换行，replace 无效，解决办法：转译
   - `val.answer = val.answer.replace(/[\r\n]/g, '\n')`
   - 友情提示：必须在text标签中！
   
 - split按多个参数进行分割
   -    `var tempArr =  str.split(/[<br />,<br/>]/)  //按照多个参数进行分割`
