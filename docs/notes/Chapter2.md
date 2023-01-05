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


> 有 23 种设计模式，不需要所有的回答，但是其中常用的几种设计模式应该去掌握。

总体来说设计模式分为三大类：

- 创建型模式共五种：工厂方法模式、抽象工厂模式、单例模式、建造者模式、原型模式。

- 结构型模式共七种：适配器模式、装饰器模式、代理模式、外观模式、桥接模式、组合模式、享元模式。

- 行为型模式共十一种：策略模式、模板方法模式、观察者模式、迭代子模式、责任链模式、命令模式、备忘录模式、状态模式、访问者模式、中介者模式、解释器模式。

这里主要讲解简单工厂模式,代理模式,适配器模式,单例模式4中设计模式.

### 1、简单工厂模式

主要特点是需要在工厂类中做判断，从而创造相应的产品，当增加新产品时，需要修改工厂类。使用简单工厂模式，我们只需要知道具体的产品型号就可以创建一个产品。

缺点：工厂类集中了所有产品类的创建逻辑，如果产品量较大，会使得工厂类变的非常臃肿。

### 2、代理模式

代理模式：为其它对象提供一种代理以控制这个对象的访问。在某些情况下，一个对象不适合或者不能直接引用另一个对象，而代理对象可以在客户端和目标对象之间起到中介作用。

优点：

职责清晰。真实的角色只负责实现实际的业务逻辑，不用关心其它非本职责的事务，通过后期的代理完成具体的任务。这样代码会简洁清晰。

代理对象可以在客户端和目标对象之间起到中介的作用，这样就保护了目标对象。

扩展性好。

### 3、适配器模式

适配器模式可以将一个类的接口转换成客户端希望的另一个接口，使得原来由于接口不兼容而不能在一起工作的那些类可以在一起工作。通俗的讲就是当我们已经有了一些类，而这些类不能满足新的需求，此时就可以考虑是否能将现有的类适配成可以满足新需求的类。适配器类需要继承或依赖已有的类，实现想要的目标接口。

缺点：过多地使用适配器，会让系统非常零乱，不易整体进行把握。比如，明明看到调用的是 A 接口，其实内部被适配成了 B 接口的实现，一个系统如果太多出现这种情况，无异于一场灾难。因此如果不是很有必要，可以不使用适配器，而是直接对系统进行重构。

### 4、单例模式

单例模式顾名思义，保证一个类仅可以有一个实例化对象，并且提供一个可以访问它的全局接口。实现单例模式必须注意一下几点：

单例类只能由一个实例化对象。

单例类必须自己提供一个实例化对象。

单例类必须提供一个可以访问唯一实例化对象的接口。

单例模式分为懒汉和饿汉两种实现方式。




## 2-6 前端组件化


组件：页面的一个部分，由原来的一个整体，切成一个一个的部分，每个部分可以称为一个组件

- 顶部轮播
- 搜索框
- 等等

都可以称之为一个组件

合理的拆分组件，可以把一个大型的项目像拼积木一样拼接起来

一个项目业务逻辑可能会很复杂，拆分成组件以后，每一个组件就会变得很轻巧，后期维护起来也会更加容易

每一个组件就是页面上的一个区域


## 2-7 使用组件改造TodoList


- 创建全局组件

```js
Vue.component() 
```

```
TodoItem == todo-item
```

```html
<TodoItem></TodoItem>
等于
<todo-item></todo-item>
```


> 全局组件

```html
 <!DOCTYPE html>
 <html lang="en">
 <head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>全局组件</title>
   <script src="./static/vue.js"></script>
 </head>
 <body>
   <div id="root">
     <div>
       <input type="text" v-model="todoVal">
       <button @click="handleBtnClick">提交</button>
     </div>
     <ul>
       <!-- <li v-for="item in list">
         {{item}}
       </li> -->
       <todo-item v-bind:content="item" 
                  v-for="item in list">
       </todo-item>
     </ul>
   </div>
   <script>
    Vue.component("TodoItem",{
      props: ['content'],
      template: "<li>{{content}}</li>"
    })
     new Vue({
       el:"#root",
       data: {
         todoVal:"",
         list: []
       },
       methods: {
         handleBtnClick: function(){
           this.list.push(this.todoVal)
           this.todoVal = ''
         }
       },
     })
   </script>
 </body>
 </html>
```

> 局部组件

```html
 <!DOCTYPE html>
 <html lang="en">
 <head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>局部组件</title>
   <script src="./static/vue.js"></script>
 </head>
 <body>
   <div id="root">
     <div>
       <input type="text" v-model="todoVal">
       <button @click="handleBtnClick">提交</button>
     </div>
     <ul>
       <todo-item v-bind:content="item" 
                  v-for="item in list">
       </todo-item>
     </ul>
   </div>
   <script>
    var TodoItem = {
      props: ['content'],
      template: "<li>{{content}}</li>"
    }
     new Vue({
       el:"#root",
       data: {
         todoVal:"",
         list: []
       },
       methods: {
         handleBtnClick: function(){
           this.list.push(this.todoVal)
           this.todoVal = ''
         }
       },
       components: {
        TodoItem:TodoItem
       }
     })
   </script>
 </body>
 </html>
```

> 关于keys的问题暂时记录下，后期补充

![控制台关于keys的提示问题](https://upfile.wangyongjie.cn/preview/20221215165049T3q0TW6ua.png)


## 2-8 简单的组件间传值

### 父向子传值

通过`v-bind`传值，通过`props`接收该值

### 子向父传值

> 添加todolist删除的功能

> 通过`$emit()`向外触发事件，父组件监听事件，监听的时候获取子组件带回的内容，实现子组件向父组件传值

>v-bind简写 ：


```js
<todo-item v-bind:content="item" 
          v-bind:index="index"
          v-for="(item,index) in list"  // item 数组的内容；index数组的下标
          @delete="handelItemDelete"
          >
</todo-item>
```


```html
 <!DOCTYPE html>
 <html lang="en">
 <head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>组件传值</title>
   <script src="./static/vue.js"></script>
 </head>
 <body>
   <div id="root">
     <div>
       <input type="text" v-model="todoVal">
       <button @click="handleBtnClick">提交</button>
     </div>
     <ul>
       <todo-item v-bind:content="item" 
                  v-bind:index="index"
                  v-for="(item,index) in list"
                  @delete="handelItemDelete"
                  >
       </todo-item>
     </ul>
   </div>
   <script>
    var TodoItem = {
      props: ['content','index'], //  父传子接收
      template: '<li @click="handleItemClick">{{content}}</li>',
      methods: {
        handleItemClick: function(){
          // 向外触发一个事件，通过v-on监听事件
          this.$emit("delete",this.index)
        }
      }
    }
     new Vue({
       el:"#root",
       data: {
         todoVal:"",
         list: []
       },
       methods: {
         handleBtnClick: function(){
           this.list.push(this.todoVal)
           this.todoVal = ''
         },
         handelItemDelete: function(index){
            console.log(index)
            this.list.splice(index,1)
         }
       },
       components: {
        TodoItem:TodoItem
       }
     })
   </script>
 </body>
 </html>
```

## 2-9 章节小结

* 通过`script`标签引入vuejs进行基础代码编写
* 数据的双向绑定
* 父子组件传值

[阅读官网介绍部分内容：https://v2.cn.vuejs.org/v2/guide/index.html](https://v2.cn.vuejs.org/v2/guide/index.html)


## 个人总结

- 不支持ie8及以下版本，因为使用了 ECMAScript 5 特性，ie8及以下版本无法模拟这些特性

-  vuejs介绍

 <iframe src="//player.youku.com/embed/XMzMwMTYyODMyNA==?autoplay=true&client_id=37ae6144009e277d" frameborder="0" style="display:block; width: 100%;height:65vmin;"></iframe>

-  声明式渲染
  - v-bind

-  条件与循环
  - v-if    ，dom节点不存在
  - v-show  ，dom节点存在，display：none / block
  - v-for   ，数据循环

-  处理用户输入
  - v-on    ，事件监听器
  - v-model ，双向数据绑定

-  组件化应用构建
  - 全局组件
  - 局部组件
  - 组件数据传递：父组件-> 子组件   (props)
  - 组件数据传递：子组件-> 父组件   (v-bind,v-on)

