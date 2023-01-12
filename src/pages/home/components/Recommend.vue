<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl" alt="">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-buttom">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data: function () {
    return {
      recommendList: [
        {
          id: '0001',
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg',
          title: '故宫博物院',
          desc: '世界五大宫之首，穿越与您近在咫尺'
        },
        {
          ia: '0002',
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/2005/39/3979f1867defec4ea3.water.jpg_200x200_325a015d.jpg',
          title: '八达岭长城',
          desc: '不到长城非好汉'
        },
        {
          ia: '0003',
          imgUrl: 'https://qimgs.qunarzz.com/piao_qsight_provider_piao_qsight_web/0100j1200087e9wb39FE1.jpg_200x200_e3180970.jpg',
          title: '颐和园',
          desc: '中国现存最大的皇家园林'
        },
        {
          ia: '0004',
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/1507/cc/19733fc0135062788140cbb48ae606a7.water.jpg_200x200_d9ebe2fd.jpg',
          title: '北京野生动物园',
          desc: '敢与森林之王近距离接触吗？'
        },
        {
          ia: '0005',
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/1505/f5/f5f45e1a83537bcb.water.jpg_200x200_444cc7e8.jpg',
          title: '圆明园',
          desc: '百年皇家的珍宝,民族耻辱的见证'
        },
        {
          ia: '0006',
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/201405/12/51b63883c25f5d87af3c08bb016e2bd7.jpg_200x200_8eb33f07.jpg',
          title: '恭王府',
          desc: '一座恭王府，半部清代史'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.title
  margin-top: .2rem
  background: #eee
  line-height: .8rem
  text-indent: 2em
.item
  overflow hidden
  display: flex
  height: 1.9rem
  .item-img
    width 1.7rem
    height 1.7rem
    padding: .1rem
  .item-info
    flex: 1
    padding: .1rem
    min-width: 0
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      line-height: .4rem
      color: #ccc
      ellipsis()
    .item-buttom
      line-height: .44rem
      margin-top: .16rem
      background: #ff9300
      padding: 0 .2rem
      border-radius: .06rem
      color #fff
</style>
