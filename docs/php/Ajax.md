## Ajax基础

**AJAX = Asynchronous JavaScript and XML (异步的JavaScript和XML )**

**AJAX的工作原理**

- 使用XMLHttpRequest对象,发送对服务器数据的请求(同步、异步)
- 服务器做出响应
- (异步)接收服务器响应,更新页面内容

**使用AJAX的步骤**

- 创建XMLHttpRequest ( ActiveXObject)对象
- 准备请求的类型、URL以及 是否异步请求
- 发送请求
- 接收响应,修改页面元素

**XMLHttpRequest对象**

- XMLHttpRequest是AJAX的基础
- 所有现代浏览器均支持( IE5、IE6使用ActiveXObject )
- 直接创建实例即可使用

**请求前的准备**

- 使用XMLHttpRequest的open方法
- method :请求的类型( GET、POST )
- URL :服务器地址
- Async: true (异步)、false (同步)

**发送请求**

- 使用XMLHttpRequest的send方法,参数: POST请求的参数
- setRequestHeader方法添加HTTP头
- setRequestHeader("Content-type"," application/x-www-form-urlencoded")

**接收响应**

- 使用XMLHttpRequest的`responseText`和`responseXML`属性
- `responseText` :字符串形式的数据
- `responseXML` : XML形式的数据

**同步请求响应**

- 发送请求后直接接收即可
- 等待服务器响应后才会向下继续执行

**异步请求响应**

- 需要知道数据响应回来的时机
- `onreadystatechange事件`
- 监听readyState和status

**异步请求响应(续1 )**

- readyState : XMLHttpRequest状态
- 0~4的变化
- 0-请求未初始化、1 -服务器连接建立、2-请求已接收、3-请求处理中、4-请求已完成,响应已就绪

**异步请求响应(续2 )**

- status : HTTP响应码
- ◆200 :响应成功
- ◆404: 未找到页面

**异步请求响应(续3 )**

- 回调函数:条件满足后,调用函数,执行响应操作
- 自定义数据处理操作