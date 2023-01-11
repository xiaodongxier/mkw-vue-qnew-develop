<template>
  <div class="icons">
    <swiper>
      <swiper-slide>
        <div class="icon"  v-for="item of iconList" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.srcUrl" alt="">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'Icons',
  data: function () {
    return {
      iconList: [
        {
          id: '0001',
          srcUrl: 'https://cdn.jsdelivr.net/gh/xiaodongxier/gitcdn@master/image/mkw-vue-qnew-develop/icons/icon1.png',
          desc: '景点门票'
        },
        {
          id: '0002',
          srcUrl: 'https://cdn.jsdelivr.net/gh/xiaodongxier/gitcdn@master/image/mkw-vue-qnew-develop/icons/icon2.png',
          desc: '滑雪季节'
        },
        {
          id: '0003',
          srcUrl: 'https://cdn.jsdelivr.net/gh/xiaodongxier/gitcdn@master/image/mkw-vue-qnew-develop/icons/icon3.png',
          desc: '泡温泉'
        },
        {
          id: '0004',
          srcUrl: 'https://cdn.jsdelivr.net/gh/xiaodongxier/gitcdn@master/image/mkw-vue-qnew-develop/icons/icon4.png',
          desc: '动物园'
        },
        {
          id: '0005',
          srcUrl: 'https://cdn.jsdelivr.net/gh/xiaodongxier/gitcdn@master/image/mkw-vue-qnew-develop/icons/icon5.png',
          desc: '植物园'
        },
        {
          id: '0006',
          srcUrl: 'https://cdn.jsdelivr.net/gh/xiaodongxier/gitcdn@master/image/mkw-vue-qnew-develop/icons/icon6.png',
          desc: '看日出'
        },
        {
          id: '0007',
          srcUrl: 'https://cdn.jsdelivr.net/gh/xiaodongxier/gitcdn@master/image/mkw-vue-qnew-develop/icons/icon7.png',
          desc: '看日落'
        },
        {
          id: '0008',
          srcUrl: 'https://cdn.jsdelivr.net/gh/xiaodongxier/gitcdn@master/image/mkw-vue-qnew-develop/icons/icon8.png',
          desc: '故宫游'
        },
        {
          id: '0009',
          srcUrl: 'https://cdn.jsdelivr.net/gh/xiaodongxier/gitcdn@master/image/mkw-vue-qnew-develop/icons/icon9.png',
          desc: '长城游'
        }
      ]
    }
  },
  computed: {
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
.icons >>> .swiper-container
  overflow hidden
  height:0
  padding-bottom: 50%
.icon
  position: relative
  overflow: hidden
  float: left
  height: 0
  width: 25%
  padding-bottom: 25%
  .icon-img
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: .44rem
    padding: .1rem
    box-sizing: border-box
    .icon-img-content
      display: block
      margin: 0 auto
      height 100%
  .icon-desc
    position: absolute
    left: 0
    right: 0
    bottom: 0
    height: .44rem
    line-height: .44rem
    text-align: center
    color: $darkTextColor
</style>
