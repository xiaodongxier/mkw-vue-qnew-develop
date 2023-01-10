<template>
  <div class="icons">
    <div class="icon">
      <div class="icon-img">
        <img class="icon-img-content" src="https://cdn.jsdelivr.net/gh/xiaodongxier/gitcdn@master/image/mkw-vue-qnew-develop/icons/icon1.png" alt="">
      </div>
      <p class="icon-desc">热门景点</p>
    </div>
    <div class="icon">
      <div class="icon-img">
        <img class="icon-img-content" src="https://cdn.jsdelivr.net/gh/xiaodongxier/gitcdn@master/image/mkw-vue-qnew-develop/icons/icon2.png" alt="">
      </div>
      <p class="icon-desc">热门景点</p>
    </div>
    <div class="icon">
      <div class="icon-img">
        <img class="icon-img-content" src="https://cdn.jsdelivr.net/gh/xiaodongxier/gitcdn@master/image/mkw-vue-qnew-develop/icons/icon3.png" alt="">
      </div>
      <p class="icon-desc">热门景点</p>
    </div>
    <div class="icon">
      <div class="icon-img">
        <img class="icon-img-content" src="https://cdn.jsdelivr.net/gh/xiaodongxier/gitcdn@master/image/mkw-vue-qnew-develop/icons/icon4.png" alt="">
      </div>
      <p class="icon-desc">热门景点</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Icons'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
.icons
  overflow hidden
  height:0
  padding-bottom: 50%
  .icon
    position: relative
    overflow: hidden
    float: left
    height: 0
    width: 25%
    padding-bottom: 25%
    .icon-img
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: .44rem
      padding: .1rem
      box-sizing: border-box
      .icon-img-content
        display: block
        margin: 0 auto
        height 100%
    .icon-desc
      position: absolute
      left: 0
      right: 0
      bottom: 0
      height: .44rem
      line-height: .44rem
      text-align: center
      color: $darkTextColor
</style>
