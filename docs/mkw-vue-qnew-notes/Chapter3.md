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



<wangyongjie class="wang-success">课下阅读官方文档 [Vue实例](https://v2.cn.vuejs.org/v2/guide/instance.html) 章节内容 </wangyongjie>


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




<wangyongjie class="wang-success">课下阅读官方文档 [计算属性和侦听器](https://v2.cn.vuejs.org/v2/guide/computed.html) 章节内容 </wangyongjie>

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

<wangyongjie class="wang-success">课下阅读官方文档 [计算属性的 setter](https://v2.cn.vuejs.org/v2/guide/computed. <html#%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7%E7%9A%84-setter) 章节内容/wangyongjie>




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

### `v-if`

> DOM节点移除或添加

`v-if` 和 `v-else-if` 和 `v-else` 同时使用的时候要紧挨着使用，否则会报错

```html
<div v-if="show === 'a'">This is A</div>
<div v-else-if="show === 'b'">This is B</div>
<div v-else>This is others</div>
```



### `v-show`

> DOm节点一直存在，display：none/blcok



```html
  <div id="app">
    <!-- 不存在dom节点/移除节点 -->
    <div v-if="show === 'a'">This is A</div>
    <div v-else-if="show === 'b'">This is B</div>
    <div v-else>This is others</div>
    <!-- 存在dom节点/display:none -->
    <div v-show="show" >{{mess}}</div>
  </div>
  <script>
    var app = new Vue({
      el: "#app",
      data: {
        show: "a",
        mess: "hello world"
      }
    })
  </script>
```

<iframe height="300" style="width: 100%;" scrolling="no" title="Vue中的条件渲染" src="https://codepen.io/xiaodongxier/embed/KKBKbZY?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xiaodongxier/pen/KKBKbZY">
  Vue中的条件渲染</a> by 小东西儿 (<a href="https://codepen.io/xiaodongxier">@xiaodongxier</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>


- 频繁的显示或者隐藏情况下 `v-show` 性能优于 `v-if`



### key

> `Vue` 重新渲染页面时，会优先复用页面上已经存在的 `DOM` (内容不清空，如果输入了内容切换的时候，`input` 中的内容还是存在)，例子如下

```html
<div id="app">
  <div v-if="show">
    用户名：<input type="text">
  </div>
  <div v-else>
    密码：<input type="text">
  </div>
  <button @click="btnClick">切换</button>
</div>
<script>
  var app = new Vue({
    el: "#app",
    data: {
      show: true,
    },
    methods: {
    btnClick: function() {
      this.show = !this.show
    }
    },
  })
</script>
```

<iframe height="300" style="width: 100%;" scrolling="no" title="Vue中的条件渲染key" src="https://codepen.io/xiaodongxier/embed/dyjywKz?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xiaodongxier/pen/dyjywKz">
  Vue中的条件渲染key</a> by 小东西儿 (<a href="https://codepen.io/xiaodongxier">@xiaodongxier</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>


通过添加 `key` 可以解决上面存在的问题

当给元素添加 `key` 的时候，`Vue` 认为是页面上唯一的一个元素，如果两个元素的 `key` 不一样，`Vue` 就不会尝试去复用该元素，就可以避免上面的情况发生



```html
<div id="app">
  <div v-if="show">
    用户名：<input type="text" key="username">
  </div>
  <div v-else>
    密码：<input type="text" key="password">
  </div>
  <button @click="btnClick">切换</button>
</div>
<script>
  var app = new Vue({
    el: "#app",
    data: {
      show: true,
    },
    methods: {
    btnClick: function() {
      this.show = !this.show
    }
    },
  })
</script>
```

<iframe height="300" style="width: 100%;" scrolling="no" title="Vue中的条件渲染key2" src="https://codepen.io/xiaodongxier/embed/dyjywgV?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xiaodongxier/pen/dyjywgV">
  Vue中的条件渲染key2</a> by 小东西儿 (<a href="https://codepen.io/xiaodongxier">@xiaodongxier</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>


<wangyongjie class="wang-success">课下阅读官方文档 [条件渲染](https://v2.cn.vuejs.org/v2/guide/conditional.html) 章节内容</wangyongjie>

- 因为 `v-if` 是一个指令，所以必须将它添加到一个元素上。但是如果想切换多个元素呢？此时可以把一个 `<template>` 元素当做不可见的包裹元素，并在上面使用 `v-if`。最终的渲染结果将不包含 `<template>` 元素。

```html
<template v-if="ok">
  <h1>Title</h1>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
</template>
```

- `v-else` 元素必须紧跟在带 `v-if` 或者 `v-else-if` 的元素的后面，否则它将不会被识别。
- 类似于 `v-else`，`v-else-if` 也必须紧跟在带 `v-if` 或者 `v-else-if` 的元素之后。
- `Vue` 会尽可能高效地渲染元素，通常会复用已有元素而不是从头开始渲染。这么做除了使 `Vue` 变得非常快之外，还有其它一些好处。例如，如果你允许用户在不同的登录方式之间切换。`<input>` 不会被替换掉——仅仅是替换了它的 `placeholder`。

<wangyongjie class="wang-tip">注意，`v-show` 不支持 `<template>` 元素，也不支持 `v-else`。</wangyongjie>


### v-if vs v-show

- `v-if` 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。
- `v-if` 也是**惰性的**：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。
- 相比之下，`v-show` 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。
- 一般来说，`v-if` 有更高的切换开销，而 `v-show` 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 `v-show` 较好；如果在运行时条件很少改变，则使用 `v-if` 较好。


### v-if 与 v-for 一起使用

<wangyongjie class="wang-tip">**不推荐**同时使用 `v-if` 和 `v-for`。请查阅[风格指南](https://v2.cn.vuejs.org/v2/style-guide/#%E9%81%BF%E5%85%8D-v-if-%E5%92%8C-v-for-%E7%94%A8%E5%9C%A8%E4%B8%80%E8%B5%B7-%E5%BF%85%E8%A6%81)以获取更多信息。</wangyongjie>

当 `v-if` 与 `v-for` 一起使用时，`v-for` 具有比 `v-if` 更高的优先级。请查阅[列表渲染指南](https://v2.cn.vuejs.org/v2/guide/list.html#v-for-with-v-if)以获取详细信息。


## 3-8 Vue中的列表渲染

### key

`key` 值唯一，最好不要用 `index` 下标作为 `key` ，正式项目一般后端会返回前端一个唯一的值

```html
<div id="app">
  <ul>
    <li v-for="(item,index) of list"
        :key="item.id">
      {{item.name}} --- {{index}}
    </li>
  </ul>
</div>
<script>
  var app = new Vue({
    el: "#app",
    data: {
      list: [
        {
          name: "xiao",
          id: "00001"
        },
        {
          name: "dong",
          id: "00002"
        },
        {
          name: "xi",
          id: "00003"
        },
        {
          name: "er",
          id: "00004"
        }
      ]
    }
  })
</script>
```

<iframe height="300" style="width: 100%;" scrolling="no" title="Vue中的列表渲染" src="https://codepen.io/xiaodongxier/embed/bGjGZwg?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xiaodongxier/pen/bGjGZwg">
  Vue中的列表渲染</a> by 小东西儿 (<a href="https://codepen.io/xiaodongxier">@xiaodongxier</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>






### 数组的循环

> push / pop /  shift / unshift / splice - 数组的截取/ sort - 对数组进行排序 / reverse -对数组进行取反

修改数组内容的时候， 不能通过下标的方式进行修改，这样操作打印 `data` 数据的时候，数据虽然添加成功了，但是不会渲染到页面上，只能通过 `Vue` 提供的几个变异方法来操作数组才能数据发生变化

##### 数据改变的方法

- `slice("截取开始位置下标", "删除条数", "增加的内容")` 或者 以上的其他的方法
- 改变数组的引用 

```js
app.list = [
    {
      name: "xiao",
      id: "00001"
    },
    {
      name: "dong",
      id: "00002"
    },
    {
      name: "xi",
      id: "00003"
    },
    {
      name: "er",
      id: "00004"
    }
];
```


##### 模版占位符 `template`

> `template` 可以包裹一些元素，但在循环的过程中并不会渲染到页面上

```html
<div id="app">
  <template v-for="(item,index) of list"
      :key="item.id">
    <div>
      {{item.name}} --- {{index}}
    </div>
    <span>
    {{item.name}} 
    </span>
  </template>
</div>
<script>
  var app = new Vue({
    el: "#app",
    data: {
      list: [
        {
          name: "xiao",
          id: "00001"
        },
        {
          name: "dong",
          id: "00002"
        },
        {
          name: "xi",
          id: "00003"
        },
        {
          name: "er",
          id: "00004"
        }
      ]
    }
  })
</script>
```

<iframe height="300" style="width: 100%;" scrolling="no" title="模版占位符" src="https://codepen.io/xiaodongxier/embed/qByEKmV?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xiaodongxier/pen/qByEKmV">
  模版占位符</a> by 小东西儿 (<a href="https://codepen.io/xiaodongxier">@xiaodongxier</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>


### 对象的循环

> key : 键名 ； index ：当前项的索引，类似数组的下标


```html
<div id="app">
  <!-- key: 键值  index: 当前项的索引 -->
  <div v-for="(item,key,index) of list">
    {{item}}---{{key}} ---{{index}}
  </div>
</div>
<script>
  var app = new Vue({
    el: "#app",
    data: {
      list: {
        name: "xiaodonxgier",
        age: "18",
        gender: "male",
        salary: "secret"
      }
    }
  })
```



<iframe height="300" style="width: 100%;" scrolling="no" title="Vue中的列表渲染-对象的循环" src="https://codepen.io/xiaodongxier/embed/YzjPjYK?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xiaodongxier/pen/YzjPjYK">
  Vue中的列表渲染-对象的循环</a> by 小东西儿 (<a href="https://codepen.io/xiaodongxier">@xiaodongxier</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>



##### 数据改变的方法

> 直接加值是无法渲然到页面上的

- 改变引用

```js
app.list = {
  name: "xiaodongxier",
  age: "18",
  gender: "male",
  salary: "secret",
  address: "Beijing"
}
```



<wangyongjie class="wang-success">课下阅读官方文档 [列表渲染](https://v2.cn.vuejs.org/v2/guide/list.html) 章节内容 </wangyongjie>

- 你也可以用 `of` 替代 `in` 作为分隔符，因为它更接近 `JavaScript` 迭代器的语法：

```html
<div v-for="item in items"></div>
<div v-for="item of items"></div>

```

<wangyongjie class="wang-tip">在遍历对象时，会按 `Object.keys()` 的结果遍历，但是**不能**保证它的结果在不同的 JavaScript 引擎下都一致。 </wangyongjie>

<wangyongjie class="wang-tip">不要使用对象或数组之类的非基本类型值作为 `v-for` 的 `key`。请用字符串或数值类型的值。 </wangyongjie>

- 由于 JavaScript 的限制，Vue **不能检测**数组和对象的变化。[深入响应式原理](https://v2.cn.vuejs.org/v2/guide/reactivity.html#%E6%A3%80%E6%B5%8B%E5%8F%98%E5%8C%96%E7%9A%84%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9)中有相关的讨论。
- `v-for` 也可以接受整数。在这种情况下，它会把模板重复对应次数。

```html
<div>
  <span v-for="n in 10">{{ n }} </span>
</div>
```

输出结果
```
1 2 3 4 5 6 7 8 9 10
```

- 2.2.0+ 的版本里，当在组件上使用 `v-for` 时，`key` 现在是必须的。




## 3-9 Vue中的set方法

> 即使 `Vue` 全局的一个方法，也是 `Vue` 实例上的方法


### 对象的 `set` 方法

```html
<div id="app">
  <!-- key: 键值  index: 对象的位置 -->
  <div v-for="(item,key,index) of list">
    {{item}}---{{key}} ---{{index}}
  </div>
  <span v-for="n in 10">{{ n }} </span>
</div>
<script>
  var app = new Vue({
    el: "#app",
    data: {
      list: {
        name: "xiaodonxgier",
        age: "18",
        gender: "male",
        salary: "secret"
      }
    }
  })
</script>
```

`Vue.set("实例数据", "新增的属性键", "新增的数据值")`

通过 `set` 方法往上面案例添加数据的写法为：

**全局方法：**

```js
Vue.set(app.list, "address", "Beijing")
```

**实例方法：**

```js
app.$set(app.list, "address", "Beijing")
```


### 数组的 `set` 方法

```html
<div id="app">
  <!-- key: 键值  index: 对象的位置 -->
  <div v-for="(item,key,index) of list">
    {{item}}---{{key}} ---{{index}}
  </div>
  <span v-for="n in 10">{{ n }} </span>
</div>
<script>
  var app = new Vue({
    el: "#app",
    data: {
        list: [1,2,3,4,5,6,7,8]
    }
  })
</script>
```

`Vue.set("实例数据", "需要改变的数组下标", "更新的内容")`

通过 `set` 方法向上面案例中的数据 `2` 变成 `22` 的方法为：

**全局方法：**

```js
Vue.set(app.list, 1, 22)
```

**实例方法：**

```js
app.$set(app.list, 1, 22)
```


<wangyongjie class="wang-success">课下阅读官方文档 [Vue.set( target, propertyName/index, value )](https://v2.cn.vuejs.org/v2/api/#Vue-set) 章节内容 </wangyongjie>


## 3-10 （新）Vue中的事件绑定

```html
<div id="app">
    <button @click="handleBtnClcik">Button</button>
    <button @click="handleBtnClcik()">Button()</button>
    <button @click="handleBtnClcik($event)">Button($event)</button>
    <button @click="handleBtnClcik($event,1,2,3)">Button($event)优势/可以传参</button>
</div>
<script>
  var app = new Vue({
    el: "#app",
    data: {
      list: [1,2,3,4,5,6,7,8]
    },
    methods: {
    handleBtnClcik:function(e,one,teo,three){
      console.log(e,one,teo,three)
    }
    },
  })
</script>
```

![打印结果](https://gitcdn.xiaodongxier.com/image/20221222142324.png)

<iframe height="300" style="width: 100%;" scrolling="no" title="Vue中的事件绑定" src="https://codepen.io/xiaodongxier/embed/RwBNXmj?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xiaodongxier/pen/RwBNXmj">
  Vue中的事件绑定</a> by 小东西儿 (<a href="https://codepen.io/xiaodongxier">@xiaodongxier</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>



#### 事件修饰符

**prevent**

> 阻止跳转

**stop**

>  阻止向外冒泡

**self**

> self要求，click事件只有在e.target = e.currenTaget 的时候才会执行/触发事件和绑定事件的元素相等的时候才会执行

**once**

> once修饰符/事件执行一次之后自动解绑/事件只执行一次

**capture** 

> 加了Capture修饰符/默认事件冒泡(内->外)被改变未捕获(外->内)/先执行父事件在执行子事件


```html
<div id="app">
  <form action="/abc">
    <input type="submit">
    <span>未添加事件</span>
  </form>
  <form action="/abc" @click="handleBtnClcik">
    <input type="submit">
    <span>添加了阻止事件</span>
  </form>
  <form action="/abc" @click.prevent>
    <input type="submit">
    <span>添加了事件修复</span>
  </form>
  <form action="/abc" @click.prevent="handleBtnClcik">
    <input type="submit">
    <span>添加了事件修复/后面也可以添加其他事件不影响</span>
  </form>
  <form action="/abc" @click.stop>
    <input type="submit">
    <span>stop修饰符/阻止向外冒泡</span>
  </form>
  <form action="/abc" @click.self>
    <div @click="handleSelfClick">
      父元素
      <div>
        子元素
      </div>
    </div>
    <span>未加self修饰符/点击父元素和子元素都能触发事件</span>
  </form>
  <form action="/abc" @click.self>
    <div @click.self="handleSelfClick">
      父元素
      <div>
        子元素
      </div>
    </div>
    <span>加了self修饰符/只有点击父元素才都能触发事件，点击子元素是不会触发的</span>
    <br>
    <span>self要求，click事件只有在e.target = e.currenTaget 的时候才会执行/触发事件和绑定事件的元素相等的时候才会执行</span>
  </form>
  <form action="/abc" @click.self>
    <div @click.once="handleOnceClick">
      <div>点我触发事件</div>
    </div>
    <span>once修饰符/事件执行一次之后自动解绑/事件只执行一次</span>
  </form>
  <form action="/abc" @click.self>
    <div @click="handleCaptureClickA">
      <div @click="handleCaptureClickB">点我触发事件</div>
    </div>
    <span>未加Capture修饰符/默认事件冒泡(内->外)/先执行子事件在执行父事件</span>
  </form>
  <form action="/abc" @click.self>
    <div @click.capture="handleCaptureClickA">
      <div @click.capture="handleCaptureClickB">点我触发事件</div>
    </div>
    <span>加了Capture修饰符/默认事件冒泡(内->外)被改变未捕获(外->内)/先执行父事件在执行子事件</span>
  </form>
</div>
<script>
  var app = new Vue({
    el: "#app",
    methods: {
      handleBtnClcik: function (e,) {
        e.preventDefault();
      },
      handleSelfClick: function(){
        alert("handleSelfClick")
      },
      handleOnceClick: function(){
        alert("handleOnceClick")
      },
      handleCaptureClickA: function(){
        alert("父元素事件/外")
      },
      handleCaptureClickB: function(){
        alert("子元素事件/内")
      }
    },
  })
</script>
```

<iframe height="300" style="width: 100%;" scrolling="no" title="Vue中的事件绑定-事件修饰符" src="https://codepen.io/xiaodongxier/embed/KKBpPgP?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xiaodongxier/pen/KKBpPgP">
  Vue中的事件绑定-事件修饰符</a> by 小东西儿 (<a href="https://codepen.io/xiaodongxier">@xiaodongxier</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

<wangyongjie class="wang-success">课下阅读官方文档 [事件修饰符](https://v2.cn.vuejs.org/v2/guide/events.html#%E4%BA%8B%E4%BB%B6%E4%BF%AE%E9%A5%B0%E7%AC%A6) 章节内容 </wangyongjie>


#### 按键修饰符


**enter/tab/delete/esc/shift/alt/....**

> 当摁下哪个键的时候执行

```html
<div id="app">
  <input type="text" @keydown="handleKeyDown">：输入的实时弹出内容
  <br><br>
  <input type="text" @keydown.enter="handleKeyDown">：回车/enter 的时候弹出结果
  <br><br>
  <input type="text" @keydown.delete="handleKeyDown">：delete的时候弹出结果
  <br><br>
  <input type="text" @keydown.esc="handleKeyDown">：esc的时候弹出结果
  <br><br>
  <input type="text" @keydown.shift="handleKeyDown">：shift的时候弹出结果
  <br><br>
  <input type="text" @keydown.alt="handleKeyDown">：alt的时候弹出结果
  <br><br>
  <input type="text" @keydown.tab="handleKeyDown">：tab的时候弹出结果
</div>
<script>
  var app = new Vue({
    el: "#app",
    methods: {
      handleKeyDown: function (e) {
        // e.target 指的是 input dom框这个节点，通过原生value可以把输入框的内容弹出来
        alert(e.target.value)
      }
    },
  })
</script>
```

<iframe height="300" style="width: 100%;" scrolling="no" title="Vue中的事件绑定-按键修饰符" src="https://codepen.io/xiaodongxier/embed/abjOoyW?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xiaodongxier/pen/abjOoyW">
  Vue中的事件绑定-按键修饰符</a> by 小东西儿 (<a href="https://codepen.io/xiaodongxier">@xiaodongxier</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>



<wangyongjie class="wang-success">课下阅读官方文档 [按键修饰符](https://v2.cn.vuejs.org/v2/guide/events.html#%E6%8C%89%E9%94%AE%E4%BF%AE%E9%A5%B0%E7%AC%A6) 章节内容 </wangyongjie>


#### 系统修饰符

**ctrl/alt/shift/meta**

> 需要同时摁住才能执行

<wangyongjie class="wang-success">课下阅读官方文档 [系统修饰键](https://v2.cn.vuejs.org/v2/guide/events.html#%E7%B3%BB%E7%BB%9F%E4%BF%AE%E9%A5%B0%E9%94%AE) 章节内容 </wangyongjie>






#### 鼠标修饰符

**right/left/middle**

<wangyongjie class="wang-success">课下阅读官方文档 [鼠标修饰键](https://v2.cn.vuejs.org/v2/guide/events.html#%E9%BC%A0%E6%A0%87%E6%8C%89%E9%92%AE%E4%BF%AE%E9%A5%B0%E7%AC%A6) 章节内容 </wangyongjie>


- 有一些按键 (`.esc` 以及所有的方向键) 在 IE9 中有不同的 `key` 值, 如果你想支持 IE9，这些内置的别名应该是首选。
- 注意：在 Mac 系统键盘上，meta 对应 command 键 (⌘)。在 Windows 系统键盘 meta 对应 Windows 徽标键 (⊞)。在 Sun 操作系统键盘上，meta 对应实心宝石键 (◆)。在其他特定键盘上，尤其在 MIT 和 Lisp 机器的键盘、以及其后继产品，比如 Knight 键盘、space-cadet 键盘，meta 被标记为“META”。在 Symbolics 键盘上，meta 被标记为“META”或者“Meta”。
- 请注意修饰键与常规按键不同，在和 `keyup` 事件一起用时，事件触发时修饰键必须处于按下状态。换句话说，只有在按住 `ctrl` 的情况下释放其它按键，才能触发 `keyup.ctrl`。而单单释放 `ctrl` 也不会触发事件。如果你想要这样的行为，请为 `ctrl` 换用 `keyCode`：`keyup.17`。




## 3-11 （新）Vue中的表单绑定




## 3-12 （新）章节小节

- 实例
- 模版语法
  - v-if
  - v-text
  - v-html
  - v-for
  - v-if
  - v-else
  - v-else-if
  - v-show
  - v-bind
  - v-on
- 计算属性
  - 避免代码冗余
- 样式
  - class
  - style
  - 对象绑定
  - 数组绑定
- 条件渲染
  - v-if
  - v-else
  - v-else-if
  - template 占位符
- 列表渲染
  - 数组
    - value值
    - index值(索引值)
  - 对象
    - value值
    - key值(键值)
    - index值(索引值)
- 事件处理
  - 事件绑定
  - 事件修饰符
    - 
- 表单绑定
  - v-model
    - textarea
    - input
    - option



## 3-13 【讨论题】你对前端中的面向对象有怎样的了解？




    
