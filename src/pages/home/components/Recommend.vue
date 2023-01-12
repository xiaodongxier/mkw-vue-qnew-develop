<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom">
        <img class="item-img" src="https://imgs.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg" alt="">
        <div class="item-info">
          <p class="item-title">故宫博物院</p>
          <p class="item-desc">世界五大宫之首，穿越与您近在咫尺</p>
          <button class="item-buttom">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend'
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.title
  margin-top: .2rem
  background: #eee
  line-height: .8rem
  text-indent: 2em
.item
  overflow hidden
  display: flex
  height: 1.9rem
  .item-img
    width 1.7rem
    height 1.7rem
    padding: .1rem
  .item-info
    flex: 1
    padding: .1rem
    min-width:0
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      line-height: .4rem
      color: #ccc
      ellipsis()
    .item-buttom
      line-height: .44rem
      margin-top: .16rem
      background: #ff9300
      padding: 0 .2rem
      border-radius: .06rem
      color #fff
</style>
