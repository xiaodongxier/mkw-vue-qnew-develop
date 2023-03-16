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
      console.log('Gallary组件中滑动事件影响全局')
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
  // 使用了 keep-alive 会多出来 activated 生命周期函数
  // 每次页面展示的时候会执行
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  // 页面被隐藏或者被替换的时候执行
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
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
  z-index 2
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
