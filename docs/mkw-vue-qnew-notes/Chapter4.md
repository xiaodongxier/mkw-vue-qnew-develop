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



<wangyongjie class="wang-success">课下阅读官方文档 [通过 Prop 向子组件传递数据](https://v2.cn.vuejs.org/v2/guide/components.html#%E9%80%9A%E8%BF%87-Prop-%E5%90%91%E5%AD%90%E7%BB%84%E4%BB%B6%E4%BC%A0%E9%80%92%E6%95%B0%E6%8D%AE) 章节内容 </wangyongjie>



## 4-3 组件参数校验与非 props 特性



### 组件参数校验

> 父传值的数据类型是可以约束(校验)的 

> 相关知识点记录在下面代码中

```html
<div id="app">
  <child :content="mess"></child>
</div>
<script>
  Vue.component('child',{
    // 接收参数
    // props:['content'],    
    // 接收参数，约束接受参数类型
    // props:{
    //   content: [String,Number]
    // },
    // 接收参数，约束接受参数类型，及其他约束
    props:{
      content: {
        // 约束类型
        type: [String,Number],
        // 值为 true/false ，约束 content 必须传/可不传
        required: true,
        // 如果 required 配置为 false，不是必传的，可以在此设置 default，default为不传值的情况下显示的默认值
        default: "required 配置为 false的默认值",
        // 自定义校验器
        validator: function(value){
          console.log(value)
          console.log(value.length)
          return value.length > 5
        }
      }
    },
    template: '<div>{{content}}</div>'
  })

  var app = new Vue({
    el: "#app",
    data: {
      // 上面自定义校验的是数据的leng长度，所以只能是字符串不能是数字，因为 Number 数字类型没有 leng 长度属性
      // https://xiaodongxier.com/1946.html
      mess: '1234567890'
    }
  })
</script>
```

<iframe height="300" style="width: 100%;" scrolling="no" title="组件参数校验" src="https://codepen.io/xiaodongxier/embed/vYaOJpy?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xiaodongxier/pen/vYaOJpy">
  组件参数校验</a> by 小东西儿 (<a href="https://codepen.io/xiaodongxier">@xiaodongxier</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>




### props 特性

**props 特性**

> 通过 `props` 接收的数据能直接通过插值表达式的方式使用

- 父组件传，子组件接，直接插值表达式用
- 不会把属性显示在 `dom` 标签中

**非 props 特性**

- 父组件传，子组件不接，就是如果不进行 `props` 接收的话是不能直接使用数据的
- 组件/父元素 的属性会展示着子组件的最外层标签上




<wangyongjie class="wang-success">课下阅读官方文档 [Prop](https://v2.cn.vuejs.org/v2/guide/components-props.html) 章节内容 </wangyongjie>



## 4-4 给组件绑定原生事件





```html
<div id="app">
  <!-- <child @handle="btnClick"></child> -->
  <child @click.native="ysClick"></child>
</div>
<script>
  Vue.component('child',{
    // template: '<div @click="handleClick">child</div>',
    template: '<div>child</div>',
    methods: {
      // handleClick: function(){
      //   alert("handleClick/子组件事件",)
      //   this.$emit("handle")
      // }
    },
  })
  
  var app = new Vue({
    el: "#app",
    data: {
      mess:"hello world"
    },
    methods: {
      ysClick: function(){
        alert("ysClick/原生事件")
      },
    }
  })
</script>
```

<iframe height="300" style="width: 100%;" scrolling="no" title="给组件绑定原生事件" src="https://codepen.io/xiaodongxier/embed/QWBbQzw?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xiaodongxier/pen/QWBbQzw">
  给组件绑定原生事件</a> by 小东西儿 (<a href="https://codepen.io/xiaodongxier">@xiaodongxier</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>


<wangyongjie class="wang-success">课下阅读官方文档 [将原生事件绑定到组件](https://v2.cn.vuejs.org/v2/guide/components-custom-events.html#%E5%B0%86%E5%8E%9F%E7%94%9F%E4%BA%8B%E4%BB%B6%E7%BB%91%E5%AE%9A%E5%88%B0%E7%BB%84%E4%BB%B6) 章节内容 </wangyongjie>





## 4-5 非父子组件间的传值

### vuex

> 放在后面项目中讲解


### 总线机制(Bus/总线/发布订阅模式/观察者模式)



```html
<div id="app">
    <child content="Xiao"></child>
    <child content="Dongxier"></child>
</div>
<script>
  Vue.prototype.bus = new Vue()
  Vue.component('child',{
    data: function(){
      return {
        selfContent: this.content
      }
    },
    props: {
      content: String
    },
    template: '<div @click="handleClick">{{selfContent}}</div>',
    methods: {
      handleClick: function(){
        // alert(this.content)
        this.bus.$emit('change',this.selfContent)
      }
    },
    mounted: function(){
      var _this = this;
      // 执行两次
      this.bus.$on('change',function(msg){
        // alert(msg)
        _this.selfContent = msg
      })
    }
  })
  var app = new Vue({
    el: "#app",
    data: {
      mess:"hello world"
    }
  })
</script>
```

<iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/xiaodongxier/embed/MWBaBRE?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xiaodongxier/pen/MWBaBRE">
  Untitled</a> by 小东西儿 (<a href="https://codepen.io/xiaodongxier">@xiaodongxier</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>








## 4-6 在Vue中使用插槽

> 父组件向子组件优雅的传递dom结构


```html
<div id="app">
  <child>
    <body-content>
      <div class="header" slot="header">header</div> 
      <div class="footer" slot="footer">footer</div> 
    </body-content> 
  </child>
</div>
<script>
  Vue.component('body-content',{
    template: `<div>
                  <slot name="header">默认内容</slot>
                  <div>hello </div>
                  <slot name="footer">默认内容</slot>
                  <slot>
                    <h1>默认插槽内容/可以是标签内容</h1>  
                  </slot>
                </div>`
  })
  var app = new Vue({
    el: "#app",
    data: {
      mess:"hello world"
    }
  })
</script>
```




<iframe height="300" style="width: 100%;" scrolling="no" title="在Vue中使用插槽(slot)" src="https://codepen.io/xiaodongxier/embed/eYjJYOZ?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xiaodongxier/pen/eYjJYOZ">
  在Vue中使用插槽(slot)</a> by 小东西儿 (<a href="https://codepen.io/xiaodongxier">@xiaodongxier</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>



<wangyongjie class="wang-success">课下阅读官方文档 [slot](https://v2.cn.vuejs.org/v2/api/#slot) 章节内容 </wangyongjie>

<wangyongjie class="wang-success">课下阅读官方文档 [插槽](https://v2.cn.vuejs.org/v2/guide/components-slots.html) 章节内容 </wangyongjie>


<wangyongjie class="wang-tip">在 2.6.0 中，我们为具名插槽和作用域插槽引入了一个新的统一的语法 (即 `v-slot` 指令)。它取代了 `slot` 和 `slot-scope` 这两个目前已被废弃但未被移除且仍在[文档中](https://v2.cn.vuejs.org/v2/guide/components-slots.html#%E5%BA%9F%E5%BC%83%E4%BA%86%E7%9A%84%E8%AF%AD%E6%B3%95)的 attribute。新语法的由来可查阅这份 [RFC](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0001-new-slot-syntax.md)。</wangyongjie>



## 4-7 作用域插槽

> 当子组件做循环，或某一部分他的dom结构由外部传入进来的时候用作用域卡槽

> 子组件可以向父组件里面传数据，父组件想接收的话必须在外层使用 template ，同时通过 slot-scope="属性的名字" 来接收传递过来的所有数据



```html
<div id="app">
  <child>
    <!-- 接收的数据放在 props 里面 -->
    <template slot-scope="props">
      <li>{{props.item}} -- hello</li>
    </template>
  </child>
</div>
<script>
  Vue.component('child',{
    data: function(){
      return {
        list: [1,2,3,4,5,6,7,8,9]
      }
    },
    template: `<div>
                  <ol>
                    <slot 
                          v-for='item of list'
                          :item=item
                    >
                      {{item}}
                    </slot>
                  </ol>
                </div>`
  })

  var app = new Vue({
    el: "#app",
    data: {
      mess:"hello world"
    }
  })
</script>
```



<iframe height="300" style="width: 100%;" scrolling="no" title="作用域插槽" src="https://codepen.io/xiaodongxier/embed/dyjGooX?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xiaodongxier/pen/dyjGooX">
  作用域插槽</a> by 小东西儿 (<a href="https://codepen.io/xiaodongxier">@xiaodongxier</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>






## 4-8 （新）动态组件与v-once指令

### 动态组件

> component 动态组件


```html
<div id="app">
  <h2>直接使用组件</h2>
  <child-one v-if="type == 'child-one'"></child-one>
  <child-two v-if="type == 'child-two'"></child-two>
  <h2>使用component动态组件</h2>
  <component :is="type"></component>
  <button @click="handleBtnClick">切换</button>

  <h2>直接使用component动态组件</h2>
  <!-- :is 使用的是data的 键 -->
  <component :is="type1"></component>
</div>
<script>
  Vue.component('child-one',{
    template: '<div>child-one</div>'
  })

  Vue.component('child-two',{
    template: '<div>child-two</div>'
  })

  Vue.component('child-three',{
    template: '<div>child-three</div>'
  })

  var app = new Vue({
    el: "#app",
    data: {
      type: 'child-one',
      type1: 'child-three',
    },
    methods: {
      handleBtnClick: function(){
        this.type = (this.type == 'child-one' ? this.type = 'child-two' : this.type = 'child-one')
        console.log(this.type)
      }
    },
  })
</script>
```

### v-once指令

> 只对内部的模版渲染一次，后期数据发生了改变也不会进行渲染


```html
<div id="app" v-once>
  <h2>直接使用组件</h2>
  <child-one v-if="type == 'child-one'"></child-one>
  <child-two v-if="type == 'child-two'"></child-two>
  <h2>使用component动态组件</h2>
  <component :is="type"></component>
  <button @click="handleBtnClick">切换</button>

  <h2>直接使用component动态组件</h2>
  <!-- :is 使用的是data的 键 -->
  <component :is="type1"></component>
</div>
<script>
  Vue.component('child-one',{
    template: '<div>child-one</div>'
  })

  Vue.component('child-two',{
    template: '<div>child-two</div>'
  })

  Vue.component('child-three',{
    template: '<div>child-three</div>'
  })

  var app = new Vue({
    el: "#app",
    data: {
      type: 'child-one',
      type1: 'child-three',
    },
    methods: {
      handleBtnClick: function(){
        this.type = (this.type == 'child-one' ? this.type = 'child-two' : this.type = 'child-one')
        console.log(this.type)
      }
    },
  })
</script>
```


<iframe height="300" style="width: 100%;" scrolling="no" title="动态组件与v-once指令" src="https://codepen.io/xiaodongxier/embed/QWBNWeN?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xiaodongxier/pen/QWBNWeN">
  动态组件与v-once指令</a> by 小东西儿 (<a href="https://codepen.io/xiaodongxier">@xiaodongxier</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>



### template模版


> template 里面的内容，中间没有内容的话可以写单标签就行

```js
template: `
  <div>
    <child-one v-if="type == 'child-one'"></child-one>
    <child-two v-if="type == 'child-two'"></child-two>
    <button @click="handleBtnClick">切换</button>
  </div>
`,
```
等于

```js
template: `
  <div>
    <child-one v-if="type == 'child-one'"/>
    <child-two v-if="type == 'child-two'"/>
    <button @click="handleBtnClick">切换</button>
  </div>
`,
```



```html
<div id="app"></div>
<script>
  Vue.component('child-one',{
    template: '<div>child-one</div>'
  })

  Vue.component('child-two',{
    template: '<div>child-two</div>'
  })

  var app = new Vue({
    el: "#app",
    data: {
      type: 'child-one',
      type1: 'child-three',
    },
    // 中间没有内容的话可以写单标签就行
    // 也可把v-once写在外层
    template: `
      <div>
        <child-one v-if="type == 'child-one'"/>
        <child-two v-if="type == 'child-two'"/>
        <button @click="handleBtnClick">切换</button>
      </div>
    `,
    methods: {
      handleBtnClick: function(){
        this.type = (this.type == 'child-one' ? this.type = 'child-two' : this.type = 'child-one')
        console.log(this.type)
      }
    },
  })
</script>
```



<iframe height="300" style="width: 100%;" scrolling="no" title="动态组件与v-once指令-template" src="https://codepen.io/xiaodongxier/embed/vYaGEOP?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xiaodongxier/pen/vYaGEOP">
  动态组件与v-once指令-template</a> by 小东西儿 (<a href="https://codepen.io/xiaodongxier">@xiaodongxier</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>



<wangyongjie class="wang-success">课下阅读官方文档 [动态组件 & 异步组件](https://v2.cn.vuejs.org/v2/guide/components-dynamic-async.html) 章节内容 </wangyongjie>

## 4-9 （新）章节小结

> 阅读官方文档 基础及深入了解组件 两部分内容


- [组件基础](https://v2.cn.vuejs.org/v2/guide/components.html)
- [深入了解组件](https://v2.cn.vuejs.org/v2/guide/components-registration.html)


**复杂/后期项目讲解**

- [异步组件](https://v2.cn.vuejs.org/v2/guide/components-dynamic-async.html)
- [访问父组件实例](https://v2.cn.vuejs.org/v2/guide/components-edge-cases.html#%E8%AE%BF%E9%97%AE%E7%88%B6%E7%BA%A7%E7%BB%84%E4%BB%B6%E5%AE%9E%E4%BE%8B)




## 4-10 【讨论题】组件究竟是什么？

> 组件是Vue.js最强大的功能之一。组件可以扩展HTML元素，封装可重用的代码。在较高层面上，组件是自定义的元素，Vue.js的编译器为它添加特殊功能。在有些情况下，组件也可以是原生HTML元素的形式，以is特性扩展


