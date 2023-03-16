<template>
  <div>
    <detail-banner :bannerImg="bannerImg" :sightName="sightName"  :gallaryImgs="gallaryImgs"></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :categoryList="categoryList"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner.vue'
import DetailHeader from './components/Header.vue'
import DetailList from './components/List.vue'
import axios from 'axios'
export default {
  name: 'Detail',
  data () {
    return {
      bannerImg: '',
      sightName: '',
      categoryList: [],
      gallaryImgs: []
    }
  },
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  methods: {
    getDatailInfo () {
      // axios.get('/api/detail.json?id=' + this.$route.params.id)
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.handleGetDateSucc)
    },
    handleGetDateSucc (res) {
      res = res.data
      console.log(res)
      if (res.ret && res.data) {
        const data = res.data
        this.bannerImg = data.bannerImg
        this.sightName = data.sightName
        this.categoryList = data.categoryList
        this.gallaryImgs = data.gallaryImgs
      }
    }
  },
  mounted () {
    this.getDatailInfo()
  }
}
</script>

<style lang="stylus" scoped>
.content
  height 50rem
</style>
