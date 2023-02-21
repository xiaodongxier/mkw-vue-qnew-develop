<template>
  <div>
    <div class="search">
      <input type="text" class="search-input" placeholder="输入城市名或拼音" v-model="keyword">
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li
            v-for="item of list"
            :key="item.id"
            @click="handleCityClick(item.name)"
            class="search-item border-bottom"
        >
          {{ item.name }}
        </li>
        <li class="search-item border-bottom" v-show="hasNoData">
          没有找到匹配的数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScoll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  methods: {
    handleCityClick: function (city) {
      this.$store.commit('changeMutaCity', city)
      // 页面跳转
      this.$router.push('/')
    }
  },
  watch: {
    keyword () {
      // 截流函数
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
      console.log(JSON.parse(JSON.stringify(this.list)))
    }
  },
  mounted: function () {
    this.scoll = new BScoll(this.$refs.search)
  }
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
  .search-content
    overflow hidden
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    width 100%
    z-index 1
    background: #eee
    .search-item
      background: #fff
      line-height: .62rem
      padding-left: .2rem
      color #666
</style>
