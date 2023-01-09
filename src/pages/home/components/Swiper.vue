<!-- 头部组件 -->
<template>
  <swiper :options="swiperOption">
    <swiper-slide>
      <img class="swiper-img" src="https://imgs.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg" alt="">
    </swiper-slide>
    <swiper-slide>
      <img class="swiper-img" src="https://imgs.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg" alt="">
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data: function () {
    return {
      swiperOption: {}
    }
  }
}
</script>

<style lang="stylus" scoped>
.swiper-img
  width 100%
</style>
