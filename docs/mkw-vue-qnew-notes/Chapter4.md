# 第4章 深入理解 Vue 组件 10 节 | 111分钟
    
> 本章将深入讲解 Vue 组件使用的细节点，从父子组件的参数传递及校验入手，逐步深入到非父子组件间传值、插槽、作用域插槽、动态组件等内容的讲解。
    
## 4-1 使用组件的细节点

### `is` 属性

> table 层级结构不对

```html
<div id="app">
  <table>
    <tbody>
      <row></row>
      <row></row>
      <row></row>
    </tbody>
  </table>
</div>
<script>
  Vue.component('row',{
    template: "<tr><td>this is row</td></tr>"
  })
  var app = new Vue({
    el: "#app",
  })
</script>
```

![table层级结构不对](https://upfile.wangyongjie.cn/preview/20220928165647TWVuXb1Yi.png)


> is 属性；https://v2.cn.vuejs.org/v2/api/#is
> 适用于 table，ol，ul, section 等标签上，解决dom结构不符合语意化问题

```html
  <div id="app">
    <table>
      <tbody>
        <tr is="row"></tr>
        <tr is="row"></tr>
        <tr is="row"></tr>
      </tbody>
    </table>
  </div>
  <script>
    Vue.component('row',{
      template: "<tr><td>this is row</td></tr>"
    })
    var app = new Vue({
      el: "#app",
    })
  </script>
```

![符合语意化](https://upfile.wangyongjie.cn/preview/20220929232540TpKyxdHKE.png)


<iframe height="300" style="width: 100%;" scrolling="no" title="使用组件的细节点" src="https://codepen.io/xiaodongxier/embed/eYjNJwY?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xiaodongxier/pen/eYjNJwY">
  使用组件的细节点</a> by 小东西儿 (<a href="https://codepen.io/xiaodongxier">@xiaodongxier</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>


### 子组件data数据

> 在组件中定义 `data` 的时候必须是一个函数，不能是对象，他不同于跟组件只调用一次，子组件可能会在很多地方调用多次，但是每个地方的数据又不能冲突，所以通过一个函数来返回对象的目的就是每一个子组件都拥有一个独立的数据存储，不会出现每个子组件之间互相影响的情况

```html
<div id="app">
  <table>
    <tbody>
      <tr is="row"></tr>
      <tr is="row"></tr>
      <tr is="row"></tr>
    </tbody>
  </table>
</div>
<script>
  Vue.component('row',{
  data: function(){
    return {
      mess: "this is row"
    }
  },
    template: '<tr><td>{{mess}}</td></tr>'
  })
  var app = new Vue({
    el: "#app",
    data: {
      mess:"hello world"
    }
  })
</script>
```

<iframe height="300" style="width: 100%;" scrolling="no" title="子组件data数据" src="https://codepen.io/xiaodongxier/embed/MWBwyaW?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xiaodongxier/pen/MWBwyaW">
  子组件data数据</a> by 小东西儿 (<a href="https://codepen.io/xiaodongxier">@xiaodongxier</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

<wangyongjie class="wang-success">课下阅读官方文档 [is](https://v2.cn.vuejs.org/v2/api/#is) 章节内容 </wangyongjie>



### `ref`/引用

#### 标签上使用`ref`

> 获取 DOM 节点

```html
<div id="app">
  <div @click="hanleBtnClick"
      ref="hello"
      >
    hello world
  </div>
</div>
<script>
  var app = new Vue({
    el: "#app",
    data: {
      mess:"hello world"
    },
    methods: {
    hanleBtnClick: function() {
      alert(this.$refs.hello.innerHTML)
    }
    },
  })
</script>
```


<iframe height="300" style="width: 100%;" scrolling="no" title="ref/引用" src="https://codepen.io/xiaodongxier/embed/WNKvwxW?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xiaodongxier/pen/WNKvwxW">
  ref/引用</a> by 小东西儿 (<a href="https://codepen.io/xiaodongxier">@xiaodongxier</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>


#### 组件上使用`ref`

> 获取的是子组件的引用

```html
<div id="app">
  <counter ref="one" @change="handleChange"></counter>
  <counter ref="two" @change="handleChange"></counter>
  <div>{{total}}</div>
</div>
<script>
  Vue.component('counter', {
    template: '<div @click="handleClick">{{number}}</div>',
    data: function () {
      return {
        number: 0
      }
    },
    methods: {
      handleClick: function () {
        this.number++
        this.$emit('change')
      }
    }
  })
  var app = new Vue({
    el: "#app",
    data: {
      total: 0
    },
    methods: {
      handleChange: function () {
        // console.log('change')
        console.log(this.$refs.one.number) // 打印出组件的引用
        console.log(this.$refs.two.number) // 打印出组件的引用
        this.total = this.$refs.one.number + this.$refs.two.number
      }
    }
  })
</script>
```


<iframe height="300" style="width: 100%;" scrolling="no" title="组件上使用ref" src="https://codepen.io/xiaodongxier/embed/VwBLadd?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xiaodongxier/pen/VwBLadd">
  组件上使用ref</a> by 小东西儿 (<a href="https://codepen.io/xiaodongxier">@xiaodongxier</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>




<wangyongjie class="wang-success">课下阅读官方文档 [ref](https://v2.cn.vuejs.org/v2/api/#ref) 章节内容 </wangyongjie>




## 4-2 父子组件间的数据传递


### 父->子 传值

> 父组件通过属性的方式向子组件传递数据，子组件通过 `props` 的方式接受数据



### 单项数据流

> 父组件可以随意的向子组件传递参数，但是子组件只能使用父组件传递过来的参数，不能反过来修改父组件的参数。

> 如果传递过来的是 `Object` 的数据，如果改变了数据的话，此数据可能还被其他数据所引用，改变数据的话会对其他组件产生影响，所以不允许这么做

> 子组件的 `data` 一定要是一个函数


### 子->父 传值


```html
<div id="app">
  <!-- 
    count="0"  传递的是一个字符串
    :count="0"  传递的是一个数字，加了':'后双引号内是js表达式
    
    父组件通过属性的方式向子组件传递数据，子组件通过 props 的方式接受数据
    -->
  <counter :count="countOne" @total="handleTotal"></counter>
  <counter :count="countTwo" @total="handleTotal"></counter>
  <div>{{total}}</div>
</div>
<script>
  var counter = {
    props:['count'],
    //子组件的data一定要是一个函数, 通过克隆一个副本出来避免修改父组件传递过来的数据
    data: function(){
      return {
        number: this.count
      }
    },
    template: '<div @click="handleClick">{{number}}</div>',
    methods: {
      handleClick: function(){
        this.number = this.number + 1
        this.$emit("total",1)
        // 可以携带多个参数，如下
        // this.$emit("total",1,23)
      }
    },
  }
  var app = new Vue({
    el: "#app",
    data: {
      countOne: 1,
      countTwo: 2,
      total: 3
    },
    components: {
      counter: counter
    },
    methods: {
      handleTotal: function(data1){
        // this.total = this.total + data1
        // 上面简写如下
        this.total +=  data1
      }
    }
  })
</script>
```


<iframe height="300" style="width: 100%;" scrolling="no" title="父子组件间的数据传递-子向父传值" src="https://codepen.io/xiaodongxier/embed/ZEjGJYM?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xiaodongxier/pen/ZEjGJYM">
  父子组件间的数据传递-子向父传值</a> by 小东西儿 (<a href="https://codepen.io/xiaodongxier">@xiaodongxier</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>


## 4-3 组件参数校验与非 props 特性




## 4-4 给组件绑定原生事件




## 4-5 非父子组件间的传值




## 4-6 在Vue中使用插槽




## 4-7 作用域插槽




## 4-8 （新）动态组件与v-once指令




## 4-9 （新）章节小结




## 4-10 【讨论题】组件究竟是什么？




    
