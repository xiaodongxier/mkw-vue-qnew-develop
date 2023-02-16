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












































## 8-4 Vue项目城市选择页 - BetterScroll 的使用和字母表布局




## 8-5 Vue项目城市选择页 - 页面的动态数据渲染




## 8-6 Vue项目城市选择页 - 兄弟组件数据传递




## 8-7 Vue项目城市选择页 - 列表性能优化




## 8-8 Vue项目城市选择页 - 搜索逻辑实现




## 8-9 Vue项目城市选择页 - Vuex实现数据共享




## 8-10 Vue项目城市选择页 - Vuex的高级使用及localStorage




## 8-11 【讨论题】对前端数据管理框架，你有怎样的理解？




## 8-12 Vue项目城市选择页 - 使用keep-alive优化网页性能




## 8-13 （新）细节优化




    
