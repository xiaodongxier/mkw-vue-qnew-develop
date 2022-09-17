# 第2章 Vue 起步 9 节
    
> 本章将快速讲解部分 Vue 基础语法，通过 TodoList 功能的编写，在熟悉基础语法的基础上，扩展解析 MVVM 模式及前端组件化的概念及优势。
    
## 2-1 课程学习方法


> 官网文档：https://cn.vuejs.org/index.html

最好的学习资料就是官方文档

视频+官方文档 进行学习




## 2-2 hello world


* 开发版 - 代码提示 代码报错
* 生产版

Vue 不支持 IE8 及以下版本，因为 Vue 使用了 IE8 无法模拟的 ECMAScript 5 特性。但它支持所有兼容 ECMAScript 5 的浏览器。



## 2-3 开发TodoList（v-model、v-for、v-on）


> 标签指令 

* v-for
* v-on
* v-model

MVVM 不关心DOM，只关注数据，数据发生改变，DOM结构就发生改变



## 2-4 MVVM模式








### MVP设计模式

![MVP设计模式](https://upfile.wangyongjie.cn/preview/20220316150127TJVs0DknT.png)

面向DOM开发

大多时间在操作DOM结构


```html
<div>
  <input type="text" id="input">
  <button id="btn">提交</button>
  <ul id="list">

  </ul>
</div>
<script>
  // 构造函数
  function Page() {}
  $.extend(Page.prototype, {
    init: function () {
      this.bindEvents()
    },
    bindEvents: function () {
      var btn = $("#btn");
      btn.on("click", $.proxy(this.handleBtnClick, this))
    },
    handleBtnClick: function () {
      var inputElem = $("#input");
      var inputVal = inputElem.val();
      var eulElem = $("#list");
      if (inputVal == '') {
        alert("不能为空")
      } else {
        eulElem.append('<li>' + inputVal + '</li>')
        inputElem.val('')
      }
    }
  })
  var page = new Page();
  page.init()
</script>
```


### MVVM设计模式

![MVVM设计模式](https://upfile.wangyongjie.cn/preview/20220810165624TcNUP4oWH.png)

vue 就是 vm 层

面向数据开发

只需要修改M层数据，无需操作DOM
<!-- 




 -->











## 2-5 【讨论题】你所知道的常用设计模式有哪些？




## 2-6 前端组件化




## 2-7 使用组件改造TodoList




## 2-8 简单的组件间传值




## 2-9 章节小结




    
## 个人总结

1. 不支持ie8及以下版本，因为使用了 ECMAScript 5 特性，ie8及以下版本无法模拟这些特性
2. 
