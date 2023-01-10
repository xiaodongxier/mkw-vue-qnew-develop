<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data: function () {
    return {
      swiperOption: {
        // 设置pagination，选择器选择dom节点class
        pagination: '.swiper-pagination',
        // 设置轮播循环展示
        loop: true
      },
      swiperList: [
        {
          id: '0001',
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/1501/f4/f467729126949c3a.water.jpg_640x276_267de9bb.jpg'
        },
        {
          id: '0002',
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/1602/92/920e47352552c1c990.water.jpg_640x276_078119ce.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
// 样式穿透
.wrapper >>> .swiper-pagination-bullet-active
    background-color: #fff
.wrapper
  width: 100%
  height: 0
  overflow: hidden
  // 宽高比 276/640 = 43.12
  padding-bottom: 43.12%
  background-color: #eee
  .swiper-pagination-bullet-active
    background-color: red !important
.swiper-img
    width 100%
</style>
