# 第5章 Vue 中的动画特效 9 节 | 79分钟
    
> 本章将讲解 `Vue` 中的 `Css` 及 `Js` 动画原理，以及在 `Vue` 中如使用 `Animate.css` 及 `Velocity.js` 动画库，在理解了基础动画原理后，本章还扩展了 `Vue` 中多元素及列表过渡效果实现的知识，并会带同学们学习如何对通用动画效果进行代码封装。

## 5-1 `Vue` 动画 - `Vue` 中 `CSS` 动画原理

> 添加动画的标签使用 `transition` 标签包裹

> 通过某一时刻向标签上 **增加**/**去除** `class` 来实现

> 叫做 `css` 动画效果 / 过渡动画效果
### 隐藏 -> 显示

> 构建一个隐藏的动画流畅

![动画执行的原理](https://gitcdn.xiaodongxier.com/image/20221229152846.png)

- 即将执行的瞬间前会在元素上增加两个`calss`名字 
  - `fade-enter  `
  - `fade-enter-active`
- 当第一帧执行结束，运行第二帧的时候执行
  - 去除 ~~`fade-enter`~~
  - 新增 `fade-enter-to`
- 执行到最后一帧的时候
  - 去除 ~~`fade-enter-active`~~
  - 去除 ~~`fade-enter-to`~~


因为代码中 `name="fade"` `所以，class` 名字为 `fade- `
如果不写 `name` 的话，`class` 名字为 `v-`


### 显示 -> 隐藏 

> 构建一个隐藏的动画流畅

![动画执行的原理](https://gitcdn.xiaodongxier.com/image/20221229154929.png)

- 即将执行的瞬间前会在元素上增加两个`calss`名字 
  - `fade-leave`
  - `fade-leave-active`
- 当第一帧执行结束，运行第二帧的时候执行
  - 去除 ~~`fade-leave`~~
  - 新增 `fade-leave-to`
- 执行到最后一帧的时候
  - 去除 ~~`fade-leave-active`~~
  - 去除 ~~`fade-leave-to`~~


```html
<style>
  .fade-leave-to,
  .fade-enter {
    opacity: 0;
  }

  .fade-leave-active,
  .fade-enter-active { 
    transition: opacity 1s;
  }
</style>
</head>
<body>
<div id="app">
  <transition name="fade">
    <div v-show="show">v-show</div>
  </transition>
  <transition name="fade">
    <div v-if="show">v-if</div>
  </transition>
  <button @click="handleBtnClick">切换</button>
</div>
<script>
  var app = new Vue({
    el: "#app",
    data: {
      show:true
    },
    methods: {
      handleBtnClick: function(){
        this.show = !this.show
      }
    },
  })
</script>
```

<iframe height="300" style="width: 100%;" scrolling="no" title="Vue动画-Vue中CSS动画原理" src="https://codepen.io/xiaodongxier/embed/PoBNqdQ?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xiaodongxier/pen/PoBNqdQ">
  Vue动画-Vue中CSS动画原理</a> by 小东西儿 (<a href="https://codepen.io/xiaodongxier">@xiaodongxier</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>




<wangyongjie class="wang-success">课下阅读官方文档 [进入/离开 & 列表过渡](https://v2.cn.vuejs.org/v2/guide/transitions.html) 章节内容 </wangyongjie>

---

Vue 在插入、更新或者移除 DOM 时，提供多种不同方式的应用过渡效果。包括以下工具：

*   在 CSS 过渡和动画中自动应用 class
*   可以配合使用第三方 CSS 动画库，如 Animate.css
*   在过渡钩子函数中使用 JavaScript 直接操作 DOM
*   可以配合使用第三方 JavaScript 动画库，如 Velocity.js

在这里，我们只会讲到进入、离开和列表的过渡，你也可以看下一节的[管理过渡状态](https://v2.cn.vuejs.org/v2/guide/transitioning-state.html)。

---

Vue 提供了 `transition` 的封装组件，在下列情形中，可以给任何元素和组件添加进入/离开过渡

*   条件渲染 (使用 `v-if`)
*   条件展示 (使用 `v-show`)
*   动态组件
*   组件根节点

---

当插入或删除包含在 `transition` 组件中的元素时，Vue 将会做以下处理：

1.  自动嗅探目标元素是否应用了 CSS 过渡或动画，如果是，在恰当的时机添加/删除 CSS 类名。

2.  如果过渡组件提供了 [JavaScript 钩子函数](https://v2.cn.vuejs.org/v2/guide/transitions.html#JavaScript-%E9%92%A9%E5%AD%90)，这些钩子函数将在恰当的时机被调用。

3.  如果没有找到 JavaScript 钩子并且也没有检测到 CSS 过渡/动画，DOM 操作 (插入/删除) 在下一帧中立即执行。(注意：此指浏览器逐帧动画机制，和 Vue 的 `nextTick` 概念不同)

---


在进入/离开的过渡中，会有 6 个 class 切换。

1.  `v-enter`：定义进入过渡的开始状态。在元素被插入之前生效，在元素被插入之后的下一帧移除。

2.  `v-enter-active`：定义进入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数。

3.  `v-enter-to`：**2.1.8 版及以上**定义进入过渡的结束状态。在元素被插入之后下一帧生效 (与此同时 `v-enter` 被移除)，在过渡/动画完成之后移除。

4.  `v-leave`：定义离开过渡的开始状态。在离开过渡被触发时立刻生效，下一帧被移除。

5.  `v-leave-active`：定义离开过渡生效时的状态。在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在过渡/动画完成之后移除。这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数。

6.  `v-leave-to`：**2.1.8 版及以上**定义离开过渡的结束状态。在离开过渡被触发之后下一帧生效 (与此同时 `v-leave` 被删除)，在过渡/动画完成之后移除。


<!-- ![过渡的类名](https://v2.cn.vuejs.org/images/transition.png) -->

![过渡的类名](https://gitcdn.xiaodongxier.com/image/20221229162327.jpg)

对于这些在过渡中切换的类名来说，如果你使用一个没有名字的 `<transition>`，则 `v-` 是这些类名的默认前缀。如果你使用了 `<transition name="my-transition">`，那么 `v-enter` 会替换为 `my-transition-enter`。

`v-enter-active` 和 `v-leave-active` 可以控制进入/离开过渡的不同的缓和曲线，在下面章节会有个示例说明。

---




## 5-2 在`Vue` 中使用 `animate.css` 库



















## 5-3 在`Vue` 中同时使用过渡和动画



















## 5-4 `Vue` 中的 `Js` 动画与 `Velocity.js` 的结合



















## 5-5 `Vue` 中多个元素或组件的过渡



















## 5-6 `Vue` 中的列表过渡



















## 5-7 `Vue` 中的动画封装



















## 5-8 本章小节



















## 5-9 【讨论题】前端动画是如何实现的？



















    
<wangyongjie class="wang-success">课下阅读官方文档 [动态组件 & 异步组件](https://v2.cn.vuejs.org/v2/guide/components-dynamic-async.html) 章节内容 </wangyongjie>
