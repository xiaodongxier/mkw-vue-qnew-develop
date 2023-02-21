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
