<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="item of gallaryImgs" :key="item.kwy">
          <img class="gallary-img" :src="item" alt="">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    gallaryImgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    handleGallaryClick: function () {
      this.$emit('close')
    }
  },
  data: function () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observer: true,
        observeParents: true
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.container >>> .swiper-container
  overflow: inherit
.container
  display: flex
  position fixed
  top: 0
  left: 0
  right: 0
  bottom: 0
  flex-direction: column
  justify-content: center
  background: #000
  z-index 99
  .wrapper
    // overflow hidden
    height 0
    padding-bottom: 100%
    color #fff
    background: #fff
    .gallary-img
      width 100%
    .swiper-pagination
      color #fff
      bottom: -1rem
</style>
