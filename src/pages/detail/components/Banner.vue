<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img :src="bannerImg" alt="" class="banner-img">
      <div class="banner-info">
        <div class="banner-title">{{sightName}}</div>
        <div class="banner-number">
          <span class="banner-icons iconfont">&#xe632;</span>
          99
        </div>
      </div>
    </div>
    <detail-fade>
      <common-gallary
        :gallaryImgs="gallaryImgs"
        v-show="showGallary"
        @close="handleGallaryClose"
      ></common-gallary>
    </detail-fade>
  </div>
</template>

<script>
import CommonGallary from 'common/Gallary/Gallary.vue'
import DetailFade from 'common/fade/Fade.vue'
export default {
  name: 'DetailBanner',
  props: {
    gallaryImgs: {
      type: Array
    },
    sightName: {
      type: String
    },
    bannerImg: {
      type: String
    }
  },
  data () {
    return {
      showGallary: false
      // imgs: [
      //   'https://img1.qunarzz.com/vs_ceph_b2c_001/85447bb1-2a5e-427f-9019-e7bca5be292f.jpg_r_1280x840x95_66a11c68.jpg',
      //   'https://img1.qunarzz.com/vs_ceph_b2c_001/85447bb1-2a5e-427f-9019-e7bca5be292f.jpg_r_1280x840x95_66a11c68.jpg'
      // ]
    }
  },
  methods: {
    handleBannerClick: function () {
      this.showGallary = true
    },
    handleGallaryClose: function () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary,
    DetailFade
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    overflow hidden
    height 0
    padding-bottom: 55%
    position relative
    .banner-img
      width 100%
    .banner-info
      position absolute
      display: flex
      left 0
      right 0
      bottom: 0
      line-height: .6rem
      color #fff
      background: linear-gradient(to bottom, rgba(0,0,0,0), 46%, rgba(0,0,0,.6));
      .banner-title
        flex: 1
        font-size: .32rem
        padding: 0 .2rem
      .banner-number
        padding: 0 .4rem
        height .32rem
        line-height .32rem
        background: rgba(0,0,0,.8)
        color #fff
        border-radius: .2rem
        font-size: .24rem
        margin-top: .14rem
        .banner-icons
          font-size: .24rem
</style>
