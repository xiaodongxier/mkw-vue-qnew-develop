# 第3章 Vue 基础精讲 13 节 | 163分钟
    
> 本章通过精挑细选的案例，精讲 Vue 中的基础知识，包括实例、生命周期、指令、计算属性、方法、侦听器，表单等部分内容。
    
## 3-1 Vue实例

创建组件的时候，vue底层也是把他编译成vue的一个实例


```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vue实例</title>
  <script src="./static/vue.js"></script>
</head>
<body>
  <div id="root">
    <div v-on:click="handleBtnClick">
      {{mess}}
    </div>
    <item></item>
  </div>
  <script>
    Vue.component("item",{
      template: "<div>hello item</div>"
    })
    var vm = new Vue({
      el: "#root",
      data: {
        mess:"hello world"
      },
      methods: {
        handleBtnClick: function(){
          alert(this.mess)
        }
      },
    })
  </script>
</body>
</html>
```

- `vm` 一般指一个 `vue` 的实例
- `el` 接管的标签
- `data` 存放的数据
- `{{mess}}` 插值表达式
- 事件必须定义在 `methods` 里面
- `v-on` 简写 `@`
- 除了`el`，`data`，`methods`方法， 还有其他的，比如 `props`，`watch`...
- 一个`vue`项目是有很多个小的组件（实例）组成的
- `vm.$` 凡是 `$` 开头的一般指 `vue` 的实例属性(方法)，例如 `vm.$data`,`vm.$el` ...
- `vm.$destroy` 销毁实例，销毁后数据发生变化的时候，页面不会跟着变，但是 <u>**之前的事件还是存在的**</u>










## 3-2 Vue实例生命周期

> 生命周期函数，就是vue实例在 <u>**某一个时间**</u> 点自动执行的函数
> 不行药手动的去调用，vue的内部会在某个时刻自动的去执行这些函数

![生命周期](https://v2.cn.vuejs.org/images/lifecycle.png)

![生命周期中文对照](https://upfile.wangyongjie.cn/preview/20221216162939TgzS3blM7.jpg)


- `beforeCreate`:    无法通过实例访问data数据和methods方法
- `created`:     可以通过实例访问data数据和methods方法
- `beforeMount`:    hello world 并未渲染到页面上
- `mounted`:       hellow world 已经渲染到页面上
- `beforeDestroy`:    实例销毁之前执行
- `destroyed`:    实例销毁之后执行
- `beforeUpdate`:      数据发生改变，还未渲染之前
- `updated`:      数据发生改变，重新渲染之后

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>生命周期</title>
  <!-- <script src="./static/vue.js"></script> -->
  <script src="https://cdn.jsdelivr.net/npm/vue@2.7.14/dist/vue.js"></script>
</head>
<body>
  <div id="app">
    <h1>通过控制台查看生命周期函数的执行过程</h1>
      <div id="mydomid">
        {{number}}
      </div>
      <input type="text" v-model="number"><hr>
      <button @click="upDataClick">更新数据</button>
      <button @click="delVueClick">销毁实例</button>
  </div>
  <script>
    var vm = new Vue({
      el: "#app",
      data: {
        mess:"hello world",
        number: 0
      },
      methods: {
        upDataClick: function(){
          this.number ++
        },
        delVueClick: function(){
          this.$destroy()
        }
      },
      beforeCreate: function(){   //无法通过实例访问data数据和methods方法
        console.table([{
          生命周期: "beforeCreate",
          解释说明: "无法通过实例访问data数据和methods方法",
          时间戳: new Date().getTime(),
          data数据: this.number,
          渲染数据: document.getElementById("mydomid").innerText,
          挂载节点:this.$el
        }])
      },  
      created: function(){    //可以通过实例访问data数据和methods方法
        console.table([{
          生命周期: "created",
          解释说明: "可以通过实例访问data数据和methods方法",
          时间戳: new Date().getTime(),
          data数据: this.number,
          渲染数据: document.getElementById("mydomid").innerText,
          挂载节点:this.$el
        }])
      },
      beforeMount: function(){  // data数据并未渲染到页面上
        console.table([{
          生命周期: "beforeMount",
          解释说明: "data数据未渲染到页面上",
          时间戳: new Date().getTime(),
          data数据: this.number,
          渲染数据: document.getElementById("mydomid").innerText,
          挂载节点:this.$el
        }])
      },
      mounted: function(){    //  data数据已经渲染到页面上
        console.table([{
          生命周期: "mounted",
          解释说明: "data数据已渲染到页面上",
          时间戳: new Date().getTime(),
          data数据: this.number,
          渲染数据: document.getElementById("mydomid").innerText,
          挂载节点:this.$el
        }])
      },
      beforeDestroy: function(){  // 实例销毁之前执行
        console.table([{
          生命周期: "beforeDestroy",
          解释说明: "实例销毁之前执行",
          时间戳: new Date().getTime(),
          data数据: this.number,
          渲染数据: document.getElementById("mydomid").innerText,
          挂载节点:this.$el
        }])
      },
      destroyed: function(){  // 实例销毁之后执行
        console.table([{
          生命周期: "destroyed",
          解释说明: "实例销毁之后执行",
          时间戳: new Date().getTime(),
          data数据: this.number,
          渲染数据: document.getElementById("mydomid").innerText,
          挂载节点: this.$el
        }])
      },
      beforeUpdate: function(){    // 数据发生改变，还未渲染之前
        console.table([{
          生命周期: "beforeUpdate",
          解释说明: "数据发生改变，还未渲染之前",
          时间戳: new Date().getTime(),
          data数据: this.number,
          渲染数据: document.getElementById("mydomid").innerText,
          挂载节点:this.$el
        }])
      },
      updated: function(){    // 数据发生改变，重新渲染之后
        console.table([{
          生命周期: "updated",
          解释说明: "数据发生改变，重新渲染之后",
          时间戳: new Date().getTime(),
          data数据: this.number,
          渲染数据: document.getElementById("mydomid").innerText,
          挂载节点:this.$el
        }])
      },
    })
  </script>
</body>
</html>
```

[生命周期函数代码演示地址](https://gitcdn.xiaodongxier.com/pages/20221216181348.html)

![生命周期函数执行过程](https://gitcdn.xiaodongxier.com/image/20221216183311.png)



生命周期函数不是放在 `methods` 对象里，而是单独的放在 `vue` 的实例里面


vue 一共有11个生命周期函数，上面只讲解了8个生命周期函数，另外3个( `activated` , `deactivated` ,`errorCaptured`)参考官方文档API [选项 / 生命周期钩子](https://v2.cn.vuejs.org/v2/api/#%E9%80%89%E9%A1%B9-%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E9%92%A9%E5%AD%90)



课下阅读官方文档 [Vue实例](https://v2.cn.vuejs.org/v2/guide/instance.html) 章节内容


不要在选项 property 或回调上使用[箭头函数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)，比如 `created: () => console.log(this.a)` 或 `vm.$watch('a', newValue => this.myMethod())`。因为箭头函数并没有 `this`，`this` 会作为变量一直向上级词法作用域查找，直至找到为止，经常导致 `Uncaught TypeError: Cannot read property of undefined` 或 `Uncaught TypeError: this.myMethod is not a function` 之类的错误。



## 3-3 Vue的模版语法



插值表达式 `{{` 开始，`}}` 结束

`v-***="value"`，`value` 指的不在是某个值，而是 `js` **变量** 或者 **表达式**

`v-text=""` 等于 插值表达式

`v-html=""` 类似插值表达式， 但是`v-html=""` 能解析标签内容，而插值表达式和 `v-text` 是不可以的


```html
<div id="app">
    <div v-text="mess + ' 表达式拼接'"></div>
    <div v-html="mess + ' 表达式拼接'"></div>
    <div v-html="messhtml + ' 表达式拼接'"></div>
      {{mess + ' 表达式拼接'}}
</div>
<script>
  var vm = new Vue({
    el: "#app",
    data: {
      mess:"hello world",
      messhtml:"<h1>hello world</h1>",
    }
  })
</script>
```



<iframe height="300" style="width: 100%;" scrolling="no" title="模版语法" src="https://codepen.io/xiaodongxier/embed/gOjOMar?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xiaodongxier/pen/gOjOMar">
  模版语法</a> by 小东西儿 (<a href="https://codepen.io/xiaodongxier">@xiaodongxier</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>





## 3-4 计算属性,方法与侦听器


### 计算属性 `computed`

> 计算属性存在 **缓冲机制**

- 当计算的内容没有发生变化时，页面重新渲染的时候不会重新进行计算渲染该元素
- 当计算的内容发生变化时，页面重新渲染的时候会重新进行计算渲染该元素


```html
<div id="app">
  {{fullName}}
  {{age}}
  <hr>
  <button @click="count">计算属性缓冲机制，当计算的内容没有发生变化时，页面重新渲染的时候不会重新进行计算渲染该元素/弹窗只会在运行的时候弹出1次</button>
  <br><br>
  <button @click="upName">计算属性缓冲机制，当计算的内容发生变化时，页面重新渲染的时候会重新进行计算渲染该元素/弹窗会在运行的时候再次弹出1次</button>
</div>
<script>
  var app = new Vue({
    el: "#app",
    data: {
      firstName: "xiao",
      lastName: "dongxier",
      age: "28"
    },
    // 计算属性，内置缓存
    computed: {
      fullName: function(){
        alert("计算了1次")
        return this.firstName + " " + this.lastName
      }
    },
    methods: {
      count: function(){
        this.age ++
      },
      upName: function(){
        this.firstName += "xiao"
      }
    },
  })
</script>
```

<iframe height="300" style="width: 100%;" scrolling="no" title="计算属性" src="https://codepen.io/xiaodongxier/embed/KKBKMmo?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xiaodongxier/pen/KKBKMmo">
  计算属性</a> by 小东西儿 (<a href="https://codepen.io/xiaodongxier">@xiaodongxier</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>



### 方法 `methods`

> 虽然改变的是 `age` ，但是只要页面重新渲染都会再次执行计算一次

相同的效果 **计算属性** 和 **方法** 都可以实现的情况下，**计算属性** 的性能更高

- 当计算的内容没有发生变化时，页面重新渲染的时候也会重新进行计算渲染该元素，性能方面不如 **计算属性**


```html
<div id="app">
  {{fullName()}}
  {{age}}
  <hr>
  <button @click="count">方法，当计算的内容没有发生变化时，页面重新渲染的时候会重新进行计算渲染该元素/弹窗会在每次改变的时候弹出1次</button>
</div>
<script>
  var app = new Vue({
    el: "#app",
    data: {
      firstName: "xiao",
      lastName: "dongxier",
      age: "28"
    },
    methods: {
      fullName: function(){
        alert("计算了1次")
        return this.firstName + " " + this.lastName;
      },
      count: function(){
        this.age ++
      }
    },
  })
</script>
```

<iframe height="300" style="width: 100%;" scrolling="no" title="方法" src="https://codepen.io/xiaodongxier/embed/GRBRqyN?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xiaodongxier/pen/GRBRqyN">
  方法</a> by 小东西儿 (<a href="https://codepen.io/xiaodongxier">@xiaodongxier</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>




### 侦听器 `watch`


> 存在 **缓冲机制**，与 **计算属性** `computed` 类似，如果同一个需求两种方法都能实现，那么优先使用 **计算属性** `computed` ，因为相比 **侦听器** `watch` 更简洁，性能更高


```html
<div id="app">
    {{fullName}} {{age}}
    <hr>
    <button @click="count">侦听器缓冲机制，当计算的内容没有发生变化时，页面重新渲染的时候不会重新进行计算渲染该元素/控制台只会在运行的时候打印1次</button>
    <br><br>
    <button @click="upName">侦听器缓冲机制，当计算的内容发生变化时，页面重新渲染的时候会重新进行计算渲染该元素/控制台会在运行的时候再打印1次</button>
</div>
<script>
    var app = new Vue({
        el: "#app",
        data: {
            firstName: "xiao",
            lastName: "dongxier",
            fullName: "xiao dongxier",
            age: "28"
        },
        watch: {
            firstName: function() {
                console.log("计算了1次")
                this.fullName = this.firstName + " " + this.lastName
            },
            lastName: function() {
                console.log("计算了1次")
                this.fullName = this.firstName + " " + this.lastName
            }
        },
        methods: {
            count: function() {
                this.age++
            },
            upName: function() {
                this.firstName += "xiao"
            }
        }
    })
</script>
```

<iframe height="300" style="width: 100%;" scrolling="no" title="侦听器" src="https://codepen.io/xiaodongxier/embed/OJwJXoj?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xiaodongxier/pen/OJwJXoj">
  侦听器</a> by 小东西儿 (<a href="https://codepen.io/xiaodongxier">@xiaodongxier</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>




课下阅读官方文档 [计算属性和侦听器](https://v2.cn.vuejs.org/v2/guide/computed.html) 章节内容

- 模板内的表达式非常便利，但是设计它们的初衷是用于简单运算的。在模板中放入太多的逻辑会让模板过重且难以维护。
- 

## 3-5 计算属性的 getter 和 setter

> 计算属性 `computed` 上的 `get` 方法通过其他值算一个新值，还可以通过 `set` 方法 通过设置一个值，来改变相关联的值，改变相关联值的同时又会引起计算属性的相关计算，重新渲染页面上的内容


```html
<div id="app">{{fullName}}</div>
<script>
var app = new Vue({
  el: "#app",
  data: {
    firstName: "xiao",
    lastName: "dongxier"
  },
  computed: {
    fullName: {
      get: function(){
        return this.firstName + " " + this.lastName
      },
      set: function(val){
        console.log(val)
        var arr = val.split(" ");
        this.firstName = arr[0]
        this.lastName = arr[1]
      }
    }
  }
})
```


<iframe height="300" style="width: 100%;" scrolling="no" title="计算属性的 getter 和 setter" src="https://codepen.io/xiaodongxier/embed/jOpOrge?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xiaodongxier/pen/jOpOrge">
  计算属性的 getter 和 setter</a> by 小东西儿 (<a href="https://codepen.io/xiaodongxier">@xiaodongxier</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

课下阅读官方文档 [计算属性的 setter](https://v2.cn.vuejs.org/v2/guide/computed.html#%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7%E7%9A%84-setter) 章节内容




## 3-6 Vue中的样式绑定

> DOM 绑定样式
### `class` 对象绑定


```html
<div id="app">
  <div @click="handleDivClick"
        :class="{actived: isActived}"
  >
    hello world
  </div>
</div>
<script>
  var app = new Vue({
    el: "#app",
    data: {
      isActived: false
    },
    methods: {
      handleDivClick: function(){
        this.isActived = !this.isActived
      }
    },
  })
</script>
```

<iframe height="300" style="width: 100%;" scrolling="no" title="Vue中的样式绑定-class对象绑定" src="https://codepen.io/xiaodongxier/embed/WNKNGRL?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xiaodongxier/pen/WNKNGRL">
  Vue中的样式绑定-class对象绑定</a> by 小东西儿 (<a href="https://codepen.io/xiaodongxier">@xiaodongxier</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>



### `class` 数组绑定

> 动态的新增 `class` 或删除 `class`，实现页面效果的变更


```html
<div id="app">
  <div @click="handleDivClick"
      :class="[activated, activatedOne]"
  >
    hello world
  </div>
</div>
<script>
  var app = new Vue({
    el: "#app",
    data: {
    activated: "",
    activatedOne: "activated-one"
    },
    methods: {
      handleDivClick: function(){
      // if(this.activated === "activated") {
      //   this.activated = ""
      // } else {
      //   this.activated = "activated"
      // }
      console.log(this.activated === "activated")
      this.activated = (this.activated === "activated") ? "" : "activated"
      }
    }
  })
</script>
```

<iframe height="300" style="width: 100%;" scrolling="no" title="Vue中的样式绑定-class数组绑定" src="https://codepen.io/xiaodongxier/embed/ZEjEpoG?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xiaodongxier/pen/ZEjEpoG">
  Vue中的样式绑定-class数组绑定</a> by 小东西儿 (<a href="https://codepen.io/xiaodongxier">@xiaodongxier</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>


### `style` 改变样式 (内链)

#### 对象方式


```html
  <div id="app">
    <div @click="handleDivClick"
        :style="styleObj"
    >
      hello world
    </div>
  </div>
  <script>
    var app = new Vue({
      el: "#app",
      data: {
      styleObj: {
        color: '#000'
      }
      },
      methods: {
        handleDivClick: function(){
        this.styleObj.color = (this.styleObj.color === "#000") ? "red" : "#000"
        }
      }
    })
  </script>
```

<iframe height="300" style="width: 100%;" scrolling="no" title="Vue中的样式绑定-style对象" src="https://codepen.io/xiaodongxier/embed/RwBwGeJ?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xiaodongxier/pen/RwBwGeJ">
  Vue中的样式绑定-style对象</a> by 小东西儿 (<a href="https://codepen.io/xiaodongxier">@xiaodongxier</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>


#### 数组方式


> 由数组里的对象所决定，数组内可以添加多个对象


```html
<div id="app">
    <div @click="handleDivClick" :style="[styleObj, {fontSize: '30px'}]">
        hello world
    </div>
</div>
<script>
    var app = new Vue({
        el: "#app",
        data: {
            styleObj: {
                color: '#000'
            }
        },
        methods: {
            handleDivClick: function() {
                this.styleObj.color = (this.styleObj.color === "#000") ? "red" : "#000"
            }
        }
    })
</script>
```


<iframe height="300" style="width: 100%;" scrolling="no" title="Vue中的样式绑定-style数组" src="https://codepen.io/xiaodongxier/embed/YzjzGda?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xiaodongxier/pen/YzjzGda">
  Vue中的样式绑定-style数组</a> by 小东西儿 (<a href="https://codepen.io/xiaodongxier">@xiaodongxier</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>









## 3-7 Vue中的条件渲染
































## 3-8 Vue中的列表渲染




## 3-9 Vue中的set方法




## 3-10 （新）Vue中的事件绑定




## 3-11 （新）Vue中的表单绑定




## 3-12 （新）章节小节




## 3-13 【讨论题】你对前端中的面向对象有怎样的了解？




    
