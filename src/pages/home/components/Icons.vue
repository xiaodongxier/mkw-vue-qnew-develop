<template>
  <div class="icons">
    <swiper>
      <!-- 循环页数 -->
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <!-- 循环每页的数据 -->
        <div class="icon"  v-for="item of page" :key="item.id">
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
  name: 'homeIcons',
  data: function () {
    return {
      swiperOption: {
        // 设置pagination，选择器选择dom节点class
        pagination: '.swiper-pagination',
        // 设置轮播循环展示
        loop: true
      },
      iconList: [
        {
          id: '0001',
          srcUrl: '//s.qunarzz.com/homenode/images/touchheader/hotel.png',
          desc: '景点门票文字超出'
        },
        {
          id: '0002',
          srcUrl: '//s.qunarzz.com/homenode/images/touchheader/flight.png',
          desc: '滑雪季节'
        },
        {
          id: '0003',
          srcUrl: '//s.qunarzz.com/homenode/images/touchheader/train.png',
          desc: '泡温泉'
        },
        {
          id: '0004',
          srcUrl: '//s.qunarzz.com/homenode/images/touchheader/package.png',
          desc: '动物园'
        },
        {
          id: '0005',
          srcUrl: '//s.qunarzz.com/homenode/images/touchheader/piao.png',
          desc: '植物园'
        },
        {
          id: '0006',
          srcUrl: '//s.qunarzz.com/homenode/images/touchheader/train.png',
          desc: '看日出'
        },
        {
          id: '0007',
          srcUrl: '//s.qunarzz.com/homenode/images/touchheader/package.png',
          desc: '看日落'
        },
        {
          id: '0008',
          srcUrl: '//s.qunarzz.com/homenode/images/touchheader/flight.png',
          desc: '故宫游'
        },
        {
          id: '0009',
          srcUrl: '//s.qunarzz.com/homenode/images/touchheader/hotel.png',
          desc: '长城游'
        }
      ]
    }
  },
  computed: {
    pages () {
      const pages = []
      // 对data里的每一项数据进行循环 (每一项内容, 每一项下标)
      // this.iconList.forEach((item, index) => {
      this.iconList.forEach(function (item, index) {
        // 当前下标数据应该展示在轮博的第几页，页面计算
        // 比如第 3 项数据，下标是2，2/8 向下取整是 0 页
        // 比如第 9 项数据，下标是8，8/8 向下取整是 1 页
        const page = Math.floor(index / 8)
        // pages 下面的 page 不存在，pages[page] 等于一个空数组
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
@import '~styles/mixins.styl';
.icons >>> .swiper-container
  overflow hidden
  height:0
  padding-bottom: 50%
.icons
  margin-top: .1rem
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
      // 封装方法使用
      ellipsis()
</style>
