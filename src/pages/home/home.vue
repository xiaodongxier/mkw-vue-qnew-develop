<!-- 首页组件/首页总组件 -->
<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    HomeHeader: HomeHeader,
    HomeSwiper: HomeSwiper,
    HomeIcons: HomeIcons,
    HomeRecommend: HomeRecommend,
    HomeWeekend: HomeWeekend
  },
  methods: {
    getHomeInfo: function () {
      axios.get('/api/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc: function (data) {
      console.log(data)
    }
  },
  mounted: function () {
    this.getHomeInfo()
  }
}
</script>

<style lang="">

</style>
