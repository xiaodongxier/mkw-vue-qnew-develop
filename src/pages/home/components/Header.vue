<template>
  <div class="header">
    <!-- 60*86 -->
    <div class="header-left">
      <span class="iconfont back-icon">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/经典/游玩主题
      </div>
    <!-- 128*86 -->
    <div class="header-right">
      三亚
      <span class="iconfont">&#xe6aa;</span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
.header
  display: flex
  height: .86rem
  line-height: .86rem
  background: #00bcd4
  color #fff
  .header-left
    width: .64rem;
    float: left;
    display block
    .back-icon
      font-size .3rem
      text-align: center
  .header-input
    flex: 1;
    height .62rem
    line-height .62rem
    margin-top: .12rem
    margin-left: .2rem
    background: #fff
    border-radius: .1rem
    color #ccc
  .header-right
    width: 1.24rem;
    float: right;
    text-align: center
</style>
