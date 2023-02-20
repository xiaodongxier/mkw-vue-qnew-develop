<!-- 首页组件/首页总组件 -->
<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
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
  data: function () {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  methods: {
    getHomeInfo: function () {
      // 获取ajax数据
      axios.get('/api/index.json')
      // 数据获取成功执行 getHomeInfoSucc 函数
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc: function (res) {
      console.log(res)
      res = res.data
      if (res.ret && res.data) {
        console.log('Home组件获取后端数据成功且不为空')
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted: function () {
    // 页面挂载完成 使用axios 进行数据的获取
    // 函数定义在 methods 里面
    this.getHomeInfo()
  }
}
</script>

<style lang="">

</style>
