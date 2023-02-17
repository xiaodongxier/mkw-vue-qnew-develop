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


























- 后续增加
  - 选择变色/点击增加class？
  - 











































## 8-7 Vue项目城市选择页 - 列表性能优化




## 8-8 Vue项目城市选择页 - 搜索逻辑实现




## 8-9 Vue项目城市选择页 - Vuex实现数据共享




## 8-10 Vue项目城市选择页 - Vuex的高级使用及localStorage




## 8-11 【讨论题】对前端数据管理框架，你有怎样的理解？




## 8-12 Vue项目城市选择页 - 使用keep-alive优化网页性能




## 8-13 （新）细节优化




    
