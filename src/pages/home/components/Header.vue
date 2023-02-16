<!-- 头部组件 -->
<template>
  <div class="header">
    <!-- 60*86 -->
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/经典/游玩主题
      </div>
    <!-- 128*86 -->
    <router-link to="/city">
      <div class="header-right">
        <!-- 三亚 -->
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe6aa;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
.header
  display: flex
  height: .86rem
  line-height: $headerHeights
  background: $bgColor
  color #fff
  .header-left
    width: .64rem;
    float: left;
    display block
    .back-icon
      font-size .4rem
      text-align: center
  .header-input
    flex: 1;
    height .62rem
    line-height .62rem
    margin-top: .12rem
    margin-left: .2rem
    padding-left: .2rem
    background: #fff
    border-radius: .1rem
    color #ccc
  .header-right
    width: 1.24rem;
    float: right;
    text-align: center
    color: #fff
    .arrow-icon
      margin-left: -.07rem
      font-size .3rem
</style>
