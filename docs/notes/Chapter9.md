# 第9章 项目实战 - 旅游网站详情页面开发 8 节 | 110分钟
    
> 本章将讲解景点详情页面的开发，主要讲解渐隐渐显Header组件的制作，公用组件的拆分，路由参数的获取与处理，以及递归组件的使用。在详情页面，我们还会对通用动画效果进行代码封装。
    
## 9-1 Vue项目详情页 - 动态路由和banner布局


动态路由带参数


DetailBanner

```js
<template>
  <div class="banner">
    <img src="https://img1.qunarzz.com/vs_ceph_b2c_001/85447bb1-2a5e-427f-9019-e7bca5be292f.jpg_r_1280x840x95_66a11c68.jpg" alt="" class="banner-img">
    <div class="banner-info">
      <div class="banner-title">哈哈哈哈哈哈哈</div>
      <div class="banner-number">
        <span class="banner-icons iconfont">&#xe632;</span>
        99
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBanner'
}
</script>

<style lang="stylus" scoped>
  .banner
    overflow hidden
    height 0
    padding-bottom: 55%
    position relative
    .banner-img
      width 100%
    .banner-info
      position absolute
      display: flex
      left 0
      right 0
      bottom: 0
      line-height: .6rem
      color #fff
      background: linear-gradient(to bottom, rgba(0,0,0,0), 46%, rgba(0,0,0,.6));
      .banner-title
        flex: 1
        font-size: .32rem
        padding: 0 .2rem
      .banner-number
        padding: 0 .4rem
        height .32rem
        line-height .32rem
        background: rgba(0,0,0,.8)
        color #fff
        border-radius: .2rem
        font-size: .24rem
        margin-top: .14rem
        .banner-icons
          font-size: .24rem
</style>
```




## 9-2 Vue项目详情页 - 公用图片画廊组件拆分


创建文件夹放置公共组件

```
src/common/
```

比如画廊组件

```
src/common/gallary/Gallary.vue
```

**创建 gallary 文件夹的目的是当组件比复杂比较较大的时候，可以在里面在新建 components 文件夹进行拆分方便后期开发**


DOM结构分发生变化的时候自我刷新一次，解决显示/隐藏 swiper 存在的滑动bug问题

[observeParents](https://3.swiper.com.cn/api/Observer/2015/0308/219.html)

将observe应用于Swiper的祖先元素。当Swiper的祖先元素变化时，例如window.resize，Swiper更新。


**Gallary.vue**

```html
<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="item of imgs" :key="item.kwy">
          <img class="gallary-img" :src="item" alt="">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    handleGallaryClick: function () {
      this.$emit('close')
    }
  },
  data: function () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observer: true,
        observeParents: true
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.container >>> .swiper-container
  overflow: inherit
.container
  display: flex
  position fixed
  top: 0
  left: 0
  right: 0
  bottom: 0
  flex-direction: column
  justify-content: center
  background: #000
  z-index 99
  .wrapper
    overflow hidden
    height 0
    padding-bottom: 100%
    color #fff
    background: #fff
    .gallary-img
      width 100%
    .swiper-pagination
      color #fff
      bottom: -1rem
</style>
```




## 9-3 Vue项目详情页 - 实现Header渐隐渐显效果



```html
<template>
  <div>
    <router-link
      class="header-abs"
      to="/"
      tag="div"
      v-show="showAbs"
    >
      <span class="banner-icons iconfont">&#xe624;</span>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link to="/">
        <span class="iconfont header-fixed-banck">&#xe624;</span>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetaillHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const scollTop = document.documentElement.scrollTop
      if (scollTop > 60) {
        let opacity = scollTop / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = false
        console.log(opacity)
      } else {
        this.showAbs = true
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header-abs
  position absolute
  top .2rem
  left .2rem
  width .6rem
  height .6rem
  line-height .6rem
  text-align: center
  font-size: .3rem
  border-radius: 50%
  background: rgba(0,0,0,.6)
  color #fff
.header-fixed
  position fixed
  top 0px
  left 0
  right 0
  height: $headerHeights
  line-height: $headerHeights
  text-align: center
  color: #fff
  background: $bgColor
  font-size: .32rem
  .header-fixed-banck
    position: absolute
    top: 0
    left: 0
    width: .64rem
    text-align: center
    font-size: .4rem
    color: #fff
</style>
```









## 9-4 【讨论题】移动端项目的开发过程中，你遇到过怎样的兼容性问题？




## 9-5 Vue项目详情页 - 对全局事件的解绑




## 9-6 Vue项目详情页 - 使用递归组件实现详情页列表




## 9-7 Vue项目详情页 - 动态获取详情页面数据




## 9-8 Vue项目详情页 - 在项目中加入基础动画




    
