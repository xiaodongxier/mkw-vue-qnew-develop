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
