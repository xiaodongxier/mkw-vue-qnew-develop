# 第8章 项目实战 - 旅游网站城市列表页面开发 13 节 | 165分钟
    
> 本章将讲解景点详情页面的开发，主要讲解渐隐渐显 Header 组件的制作，公用组件的拆分，路由参数的获取与处理，以及递归组件的使用。在详情页面，我们还会对通用动画效果进行代码封装。
    
## 8-1 Vue项目城市选择页 - 路由配置

### 路由配置

`router > index.js`

```js
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/city'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    // 配置city 路由
    {
      path: '/City',
      name: 'City',
      component: City
    }
  ]
})
```


### 首页header点击跳转

`Header.vue` 组件配置 `router-link` 进行跳转

```html
<router-link to="/city">
  <div class="header-right">
    <!-- 三亚 -->
    {{this.city}}
    <span class="iconfont arrow-icon">&#xe6aa;</span>
  </div>
</router-link>
```


### city 页面开发

#### 组件使用

`Header.vue` 组件导出

```html
<template>
  <div class="header">
    城市选择
  </div>
</template>

<script>
  // 导出
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  .header
    height .86rem
    line-height: .86rem
</style>
```

`city.vue` 组件导入

```html
<template>
  <div>
    <city-header></city-header>
  </div>
</template>

<script>
  // 导入
import CityHeader from './components/Header'
export default {
  name: 'City',
  // 注册组件
  components: {
    CityHeader: CityHeader
  }
}
</script>

<style lang="stylus" scoped>

</style>

```


### header 组件开发

```html
<template>
  <div class="header">
    城市选择
    <!-- 返回首页 -->
    <router-link to="/">
      <div class="iconfont header-icon">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl';
  .header
    position relative
    overflow hidden
    height .86rem
    line-height: .86rem
    background: $bgColor
    text-align: center
    color #fff
    font-size: .32rem
    .header-icon
      width .64rem
      height .64rem
      font-size .4rem
      color #fff
      position absolute
      top 0
      left 0
</style>
```

添加常用值 `$headerHeight` 到 `viribles.styl` ,替换 `header.vue` 等组件值，方便后期整个项目的管理

```css
$headerHeight = .86rem
```










## 8-2 Vue项目城市选择页 - 搜索框布局


布局开发如下

```html
<template>
  <div class="search">
    <input type="text" class="search-input" placeholder="输入城市名或拼音">
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl';
  .search
    height .72rem
    padding 0 .1rem
    background $bgColor
    .search-input
      box-sizing border-box
      width 100%
      height .62rem
      line-height .62rem
      padding 0 .1rem
      text-align center
      border-radius: .06rem
      color #666
</style>

```





## 8-3 Vue项目城市选择页 - 列表布局

![列表页面](https://gitcdn.xiaodongxier.com/image/20230216160900.png)


### 布局开发

```html
<template>
  <div class="list">
    <div class="area">
      <div class="title border-topbottom">当前城市</div>
      <div class="button-list">
        <div class="button-wrap">
          <div class="button">北京</div>
        </div>
      </div>
    </div>
    <div class="area">
      <div class="title border-topbottom">热门城市</div>
      <div class="button-list">
        <div class="button-wrap">
          <div class="button">北京</div>
        </div>
        <div class="button-wrap">
          <div class="button">北京</div>
        </div>
        <div class="button-wrap">
          <div class="button">北京</div>
        </div>
        <div class="button-wrap">
          <div class="button">北京</div>
        </div>
        <div class="button-wrap">
          <div class="button">北京</div>
        </div>
      </div>
    </div>
    <div class="area">
      <div class="title border-topbottom">A</div>
      <div class="item-list">
        <div class="item border-bottom">北京</div>
        <div class="item border-bottom">北京</div>
        <div class="item border-bottom">北京</div>
        <div class="item border-bottom">北京</div>
        <div class="item border-bottom">北京</div>
        <div class="item border-bottom">北京</div>
      </div>
      <div class="title border-topbottom">A</div>
      <div class="item-list">
        <div class="item border-bottom">北京</div>
        <div class="item border-bottom">北京</div>
        <div class="item border-bottom">北京</div>
        <div class="item border-bottom">北京</div>
        <div class="item border-bottom">北京</div>
        <div class="item border-bottom">北京</div>
      </div>
      <div class="title border-topbottom">A</div>
      <div class="item-list">
        <div class="item border-bottom">北京</div>
        <div class="item border-bottom">北京</div>
        <div class="item border-bottom">北京</div>
        <div class="item border-bottom">北京</div>
        <div class="item border-bottom">北京</div>
        <div class="item border-bottom">北京</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CityList'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
.border-topbottom
  &:before
    border-color #ccc
  &:after
    border-color #ccc
.border-bottom
  &:before
    border-color #ccc
.list
  position absolute
  top 1.58rem
  bottom 0
  left 0
  right 0
  .title
    line-height: .44rem
    background: #eee
    padding-left: .2rem
    color #666
    font-size: .26rem
  .button-list
    overflow hidden
    padding .1rem .6rem .1rem .1rem
    .button-wrap
      float left
      width: 33%
      .button
        margin: .1rem
        padding: .1rem 0
        border: .02rem solid #ccc
        text-align: center
        border-radius: .06rem
  .item-list
    .item
      line-height .76rem
      padding-left: .2rem
</style>

```

- border-topbottom 边框颜色修改


## 8-4 Vue项目城市选择页 - BetterScroll 的使用和字母表布局

> [BetterScroll](https://github.com/ustbhuangyi/better-scroll) GitHub项目地址

### 安装 better-scroll

```
npm install better-scroll --save
```


### 使用 better-scroll

1. 要符合下面dom结构要求才能使用

```html
<div class="wrapper">
  <ul class="content">
    <li>...</li>
    <li>...</li>
    ...
  </ul>
  <!-- you can put some other DOMs here, it won't affect the scrolling
</div>
```

2. 使用

```js
import BScroll from '@better-scroll/core'
let wrapper = document.querySelector('.wrapper')
let scroll = new BScroll(wrapper)
```

- $refs 知识补充

```html
<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrap">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrap">
            <div class="button">北京</div>
          </div>
          <div class="button-wrap">
            <div class="button">北京</div>
          </div>
          <div class="button-wrap">
            <div class="button">北京</div>
          </div>
          <div class="button-wrap">
            <div class="button">北京</div>
          </div>
          <div class="button-wrap">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">北京</div>
          <div class="item border-bottom">北京</div>
          <div class="item border-bottom">北京</div>
          <div class="item border-bottom">北京</div>
          <div class="item border-bottom">北京</div>
          <div class="item border-bottom">北京</div>
        </div>
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">北京</div>
          <div class="item border-bottom">北京</div>
          <div class="item border-bottom">北京</div>
          <div class="item border-bottom">北京</div>
          <div class="item border-bottom">北京</div>
          <div class="item border-bottom">北京</div>
        </div>
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">北京</div>
          <div class="item border-bottom">北京</div>
          <div class="item border-bottom">北京</div>
          <div class="item border-bottom">北京</div>
          <div class="item border-bottom">北京</div>
          <div class="item border-bottom">北京</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScoll from 'better-scroll'
export default {
  name: 'CityList',
  mounted: function () {
    this.scoll = new BScoll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
.border-topbottom
  &:before
    border-color #ccc
  &:after
    border-color #ccc
.border-bottom
  &:before
    border-color #ccc
.list
  overflow hidden
  position absolute
  top 1.58rem
  bottom 0
  left 0
  right 0
  .title
    line-height: .54rem
    background: #eee
    padding-left: .2rem
    color #666
    font-size: .26rem
  .button-list
    overflow hidden
    padding .1rem .6rem .1rem .1rem
    .button-wrap
      float left
      width: 33%
      .button
        margin: .1rem
        padding: .1rem 0
        border: .02rem solid #ccc
        text-align: center
        border-radius: .06rem
  .item-list
    .item
      line-height .76rem
      padding-left: .2rem
</style>
```


#### 右侧字母表开发 

```html
<template>
  <ul class="list">
    <li class="item">A</li>
    <li class="item">B</li>
    <li class="item">C</li>
    <li class="item">D</li>
    <li class="item">D</li>
    <li class="item">D</li>
    <li class="item">D</li>
    <li class="item">D</li>
    <li class="item">D</li>
    <li class="item">D</li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
.list
  position absolute
  right 0
  top: 1.5rem
  bottom: 0
  width .4rem
  display: flex
  flex-direction: column
  justify-content: center
  .item
    text-align: center
    line-height: .4rem
    color: $bgColor
</style>

```

- 补充 flex 弹性盒子相关知识

























## 8-5 Vue项目城市选择页 - 页面的动态数据渲染


### 数据获取

createt 和 mounted 都行，建议是 `mounted`


#### city.vue

```html
<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :hot="hotCities" :cities="cities"></city-list>
    <city-alphabet :list="cities"></city-alphabet>
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
export default {
  name: 'City',
  data () {
    return {
      hotCities: [],
      cities: {}
    }
  },
  components: {
    CityHeader: CityHeader,
    CitySearch: CitySearch,
    CityList: CityList,
    CityAlphabet: CityAlphabet
  },
  methods: {
    getCityInfo: function () {
      axios.get('./api/city.json')
        // .then(function (res) {
        //   this.handleGetInfoSucc
        //   console.log('city', res)
        // })
        .then(this.handleGetInfoSucc)
    },
    handleGetInfoSucc: function (res) {
      res = res.data
      if (res.data && res.ret) {
        const data = res.data
        this.hotCities = data.hotCities
        this.cities = data.cities
      }
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
```

#### list.vue

```html
<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrap">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrap" v-for='item of hot' :key="item.id">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) of cities" :key="key">
        <div class="title border-topbottom">{{ key }}</div>
        <div class="item-list" v-for="inneritem of item" :key="inneritem.id">
          <div class="item border-bottom">{{ inneritem.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScoll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object
  },
  mounted: function () {
    this.scoll = new BScoll(this.$refs.wrapper)
    console.log(this)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
.border-topbottom
  &:before
    border-color #ccc
  &:after
    border-color #ccc
.border-bottom
  &:before
    border-color #ccc
.list
  overflow hidden
  position absolute
  top 1.58rem
  bottom 0
  left 0
  right 0
  .title
    line-height: .54rem
    background: #eee
    padding-left: .2rem
    color #666
    font-size: .26rem
  .button-list
    overflow hidden
    padding .1rem .6rem .1rem .1rem
    .button-wrap
      float left
      width: 33%
      .button
        margin: .1rem
        padding: .1rem 0
        border: .02rem solid #ccc
        text-align: center
        border-radius: .06rem
  .item-list
    .item
      line-height .76rem
      padding-left: .2rem
</style>
```

- 循环必须有key
- 双层循环情况下只要外部的key不一样即可
  - 和父级key值一样没关系
- 对象循环(item, key) key 即是 键值
- 使用 `better-scroll`
  - 放在 mounted 生命周期函数里面，等页面DOM挂载完毕执行


#### Alphabet.vue



```html
<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrap">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrap" v-for='item of hot' :key="item.id">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) of cities" :key="key">
        <div class="title border-topbottom">{{ key }}</div>
        <div class="item-list">
          <div class="item border-bottom"  v-for="inneritem of item" :key="inneritem.id">{{ inneritem.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScoll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object
  },
  mounted: function () {
    this.scoll = new BScoll(this.$refs.wrapper)
    console.log(this)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
.border-topbottom
  &:before
    border-color #ccc
  &:after
    border-color #ccc
.border-bottom
  &:before
    border-color #ccc
.list
  overflow hidden
  position absolute
  top 1.58rem
  bottom 0
  left 0
  right 0
  .title
    line-height: .54rem
    background: #eee
    padding-left: .2rem
    color #666
    font-size: .26rem
  .button-list
    overflow hidden
    padding .1rem .6rem .1rem .1rem
    .button-wrap
      float left
      width: 33%
      .button
        margin: .1rem
        padding: .1rem 0
        border: .02rem solid #ccc
        text-align: center
        border-radius: .06rem
  .item-list
    .item
      line-height .76rem
      padding-left: .2rem
</style>
```












## 8-6 Vue项目城市选择页 - 兄弟组件数据传递


### 字母点击跳转

BetterScroll 插件文档：https://better-scroll.github.io/docs/zh-CN/guide/base-scroll-api.html#%E6%96%B9%E6%B3%95

兄弟组件传值(非父子组件传值)

- 补充知识
  - 非父子组件传值
    - 子传父
    - 兄弟
      - 传值给父，父传递兄弟
      - 其他
    - 更深层级
  - e 事件对象
  - $emit 向外触发事件
  - watch 侦听器
  - ref
  - better-scroll
    -  this.scoll.scrollToElement(element)

```html
<template>
  <ul class="list">
    <li class="item"
        v-for="(item, key) of cities"
        :key="key"
        @click="handeLeetterClick">
        {{ key }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  methods: {
    // e 事件对象
    handeLeetterClick: function (e) {
      // 向外触发事件, 后面跟着传递的内容
      this.$emit('change', e.target.innerText)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
.list
  position absolute
  right 0
  top: 1.5rem
  bottom: 0
  width .4rem
  display: flex
  flex-direction: column
  justify-content: center
  .item
    text-align: center
    line-height: .4rem
    color: $bgColor
</style>
```

### 字母拖拽联动



```html
<template>
  <ul class="list">
    <li class="item"
        v-for="item of letters"
        :key="item"
        :ref="item"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        @click="handeLeetterClick">
        {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  computed: {
    letters: function () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
        console.log(i)
        console.log(letters)
      }
      return letters
    }
  },
  data: function () {
    return {
      touchStatus: false
    }
  },
  methods: {
    // e 事件对象
    handeLeetterClick: function (e) {
      // 向外触发事件, 后面跟着传递的内容
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart: function () {
      this.touchStatus = true
      // console.log('handleTouchStart')
    },
    handleTouchMove: function (e) {
      if (this.touchStatus) {
        // 元素距顶部的高度
        const startY = this.$refs['A'][0].offsetTop
        const touchY = e.touches[0].clientY - 79
        const index = Math.floor((touchY - startY) / 20)
        if (index >= 0 && this.letters.length) {
          this.$emit('change', this.letters[index])
          console.log(index)
        }
      }
      // console.log('handleTouchMove')
    },
    handleTouchEnd: function () {
      this.touchStatus = false
      // console.log('handleTouchEnd')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
.list
  position absolute
  right 0
  top: 1.5rem
  bottom: 0
  width .4rem
  display: flex
  flex-direction: column
  justify-content: center
  .item
    text-align: center
    line-height: .4rem
    color: $bgColor
</style>
```

重点消化这块算法内容

```js
 handleTouchMove: function (e) {
    if (this.touchStatus) {
      // 元素距顶部的高度
      const startY = this.$refs['A'][0].offsetTop
      const touchY = e.touches[0].clientY - 79
      const index = Math.floor((touchY - startY) / 20)
      if (index >= 0 && this.letters.length) {
        this.$emit('change', this.letters[index])
        console.log(index)
      }
    }
    // console.log('handleTouchMove')
  },
```

- 后续增加
  - 选择变色/点击增加class？
  - 










## 8-7 Vue项目城市选择页 - 列表性能优化


### updated

数据发生变化的时候执行

```js
data: function () {
  return {
    touchStatus: false,
    startY: 0,
    // 
    timer: null
  }
},
updated: function () {
  // 元素距顶部的高度
  this.startY = this.$refs['A'][0].offsetTop
},
```





### 函数截流

提升代码性能

- 箭头函数 this 指向

```js
handleTouchMove: function (e) {
  if (this.touchStatus) {
    if (this.timer) {
      clearTimeout(this.timer)
    }
    // this.timer = setTimeout(function () {
    this.timer = setTimeout(() => {
      const touchY = e.touches[0].clientY - 79
      const index = Math.floor((touchY - this.startY) / 20)
      if (index >= 0 && this.letters.length) {
        this.$emit('change', this.letters[index])
        console.log(index)
      }
    }, 16)
  }
  // console.log('handleTouchMove')
},
```




所有代码

```vue
<template>
  <ul class="list">
    <li class="item"
        v-for="item of letters"
        :key="item"
        :ref="item"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        @click="handeLeetterClick">
        {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  computed: {
    letters: function () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
        console.log(i)
        console.log(letters)
      }
      return letters
    }
  },
  data: function () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated: function () {
    // 元素距顶部的高度
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    // e 事件对象
    handeLeetterClick: function (e) {
      // 向外触发事件, 后面跟着传递的内容
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart: function () {
      this.touchStatus = true
      // console.log('handleTouchStart')
    },
    handleTouchMove: function (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        // this.timer = setTimeout(function () {
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && this.letters.length) {
            this.$emit('change', this.letters[index])
            console.log(index)
          }
        }, 16)
      }
      // console.log('handleTouchMove')
    },
    handleTouchEnd: function () {
      this.touchStatus = false
      // console.log('handleTouchEnd')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
.list
  position absolute
  right 0
  top: 1.5rem
  bottom: 0
  width .4rem
  display: flex
  flex-direction: column
  justify-content: center
  .item
    text-align: center
    line-height: .4rem
    color: $bgColor
</style>
```











## 8-8 Vue项目城市选择页 - 搜索逻辑实现

**模版里面尽量避免出现逻辑运算**


### 搜索逻辑


```html
<div class="search">
  <input type="text" class="search-input" placeholder="输入城市名或拼音" v-model="keyword">
</div>
```

```js
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
      console.log(this.list)
    }
  }
}
```



### 局部滚动


```html
<div class="search-content" ref="search" v-show="keyword">
  <ul>
    <li v-for="item of list" :key="item.id" class="search-item border-bottom">
      {{ item.name }}
    </li>
    <li class="search-item border-bottom" v-show="hasNoData">
      没有找到匹配的数据
    </li>
  </ul>
</div>
```

```js
import BScoll from 'better-scroll'
export default {
  mounted: function () {
    this.scoll = new BScoll(this.$refs.search)
  }
}
```






### search.vue 代码

```html
<template>
  <div>
    <div class="search">
      <input type="text" class="search-input" placeholder="输入城市名或拼音" v-model="keyword">
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li v-for="item of list" :key="item.id" class="search-item border-bottom">
          {{ item.name }}
        </li>
        <li class="search-item border-bottom" v-show="hasNoData">
          没有找到匹配的数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScoll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
      console.log(this.list)
    }
  },
  mounted: function () {
    this.scoll = new BScoll(this.$refs.search)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl';
  .search
    height .72rem
    padding 0 .1rem
    background $bgColor
    .search-input
      box-sizing border-box
      width 100%
      height .62rem
      line-height .62rem
      padding 0 .1rem
      text-align center
      border-radius: .06rem
      color #666
  .search-content
    overflow hidden
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    width 100%
    z-index 1
    background: #eee
    .search-item
      background: #fff
      line-height: .62rem
      padding-left: .2rem
      color #666
</style>
```


## 8-9 Vue项目城市选择页 - Vuex实现数据共享


vuex单项数据改变流程

![vuex](https://gitcdn.xiaodongxier.com/image/20230220170857.jpg)



### 安装 Vuex


大型项目中vue只能承担视图层的主要的内容

涉及到大量数据的时候就需要借助数据框架进行辅助，在vue当中就使用vuex (数据层框架)

![vuex](https://gitcdn.xiaodongxier.com/image/20230310133928.png)

```
suod npm i vuex --save
```

因为版本问题，直接安装启动项目会报错


所以这里暂时按视频教程版本安装v3.0.1版本

```
sudo cnpm install vuex@3.0.1 --save
```


### 使用 Vuex


```js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: 'shanghaihai'
  }
})
```

### vuex 数据传输



```
 {{this.$store.state.city}}
```

每一个字组件都能使用







#### changeCity(ctx, city)

接受两个参数，改变首页header，列表页，搜索列表数据共享

```html
<div class="area">
  <div class="title border-topbottom">热门城市</div>
  <div class="button-list">
    <div class="button-wrap"
          v-for='item of hot'
          :key="item.id"
          @click="handleCityClick(item.name)"
    >
      <div class="button">{{item.name}}</div>
    </div>
  </div>
</div>
```

```js
methods: {
  handleCityClick: function (city) {
    this.$store.dispatch('changeCity', city)
    // console.log(city)
  }
},
```



### 选择跳转到首页 vue-router

[编程式导航](https://router.vuejs.org/zh/guide/essentials/navigation.html)


js中页面跳转的方式

- a标签
- window.Location


vue中页面跳转的方式

- router-link
- 编程式导航 router.push()

```js
this.$router.push('/')
```



### seach.vue 源码

```html
<template>
  <div>
    <div class="search">
      <input type="text" class="search-input" placeholder="输入城市名或拼音" v-model="keyword">
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li
            v-for="item of list"
            :key="item.id"
            @click="handleCityClick(item.name)"
            class="search-item border-bottom"
        >
          {{ item.name }}
        </li>
        <li class="search-item border-bottom" v-show="hasNoData">
          没有找到匹配的数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScoll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  methods: {
    handleCityClick: function (city) {
      this.$store.commit('changeMutaCity', city)
      // 页面跳转
      this.$router.push('/')
    }
  },
  watch: {
    keyword () {
      // 截流函数
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
      console.log(JSON.parse(JSON.stringify(this.list)))
    }
  },
  mounted: function () {
    this.scoll = new BScoll(this.$refs.search)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl';
  .search
    height .72rem
    padding 0 .1rem
    background $bgColor
    .search-input
      box-sizing border-box
      width 100%
      height .62rem
      line-height .62rem
      padding 0 .1rem
      text-align center
      border-radius: .06rem
      color #666
  .search-content
    overflow hidden
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    width 100%
    z-index 1
    background: #eee
    .search-item
      background: #fff
      line-height: .62rem
      padding-left: .2rem
      color #666
</style>
```

### List.vue 源码


```html
<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrap">
            <div class="button">{{ this.$store.state.city }}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrap"
               v-for='item of hot'
               :key="item.id"
               @click="handleCityClick(item.name)"
          >
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{ key }}</div>
        <div class="item-list">
          <div class="item border-bottom"
               v-for="inneritem of item"
               :key="inneritem.id"
               @click="handleCityClick(inneritem.name)"
          >{{ inneritem.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScoll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  methods: {
    handleCityClick: function (city) {
      // this.$store.dispatch('changeCity', city)
      this.$store.commit('changeMutaCity', city)
      this.$router.push('/')
      // console.log(city)
    }
  },
  mounted: function () {
    this.scoll = new BScoll(this.$refs.wrapper)
  },
  watch: {
    letter: function () {
      if (this.letter) {
        // 需要思考的地方
        const element = this.$refs[this.letter][0]
        // console.log('element', element)
        this.scoll.scrollToElement(element)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
.border-topbottom
  &:before
    border-color #ccc
  &:after
    border-color #ccc
.border-bottom
  &:before
    border-color #ccc
.list
  overflow hidden
  position absolute
  top 1.58rem
  bottom 0
  left 0
  right 0
  .title
    line-height: .54rem
    background: #eee
    padding-left: .2rem
    color #666
    font-size: .26rem
  .button-list
    overflow hidden
    padding .1rem .6rem .1rem .1rem
    .button-wrap
      float left
      width: 33%
      .button
        margin: .1rem
        padding: .1rem 0
        border: .02rem solid #ccc
        text-align: center
        border-radius: .06rem
  .item-list
    .item
      line-height .76rem
      padding-left: .2rem
</style>
```




## 8-10 Vue项目城市选择页 - Vuex的高级使用及localStorage

localStorage 类似 cookie 的本地存储
api 比 cookie 更简单

### 注意事项

使用 localStorage 的时候，外出就要包裹一层 try catch


因为用户关闭本地存储 或者 隐私模式浏览的时候会存在问题，抛出异常，代码就会运行错误



### 代码优化/city

vuex 提供了一个 api


**展开运算符**

```js
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    // mapState 指把vuex里面的数据映射到组件的conputed计算属性里
    // 把 city 这个数据映射到 city 的计算属性当中
    ...mapState(['city'])
  }
}
```

```html
<!-- 优化前 -->
<div class="header-right">
  <!-- 需要写的太长 -->
  {{this.$store.state.city}}
  <span class="iconfont arrow-icon">&#xe6aa;</span>
</div>
<!-- 优化后 -->
<div class="header-right">
  <!-- 三亚 -->
  {{this.city}}
  <span class="iconfont arrow-icon">&#xe6aa;</span>
</div>
```














































## 8-11 【讨论题】对前端数据管理框架，你有怎样的理解？




## 8-12 Vue项目城市选择页 - 使用keep-alive优化网页性能

使用 `keep-alive` 会把内容缓存下来，不会在此发起请求，但是切换城市后列表不会去改变响应城市的数据，需要借助声明周期函数 `activated` 来解决

使用 `keep-alive` 的时候组件会多出了一个声明周期函数 `activated` （`keep-alive` 新增的声明周期函数）



借助 `lastCity` 临时缓存变量保存目前所在城市，然后通过与 `city` 比较是否进行了城市切换，判断是否发起请求


```js
activated: function () {
  console.log('activated')
  if (this.city === this.lastCity) {
    console.log('没有切换城市')
  } else {
    this.lastCity = this.city
    console.log('切换了城市')
    this.getHomeInfo()
  }
}
```



## 8-13 （新）细节优化




    
