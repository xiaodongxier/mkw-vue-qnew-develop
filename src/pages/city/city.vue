<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :hot="hotCities" :cities="cities" :letter="letter"></city-list>
    <city-alphabet :cities="cities" @change="handeLeetterChange"></city-alphabet>
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
export default {
  name: 'City',
  data () {
    return {
      hotCities: [],
      cities: {},
      letter: ''
    }
  },
  components: {
    CityHeader: CityHeader,
    CitySearch: CitySearch,
    CityList: CityList,
    CityAlphabet: CityAlphabet
  },
  methods: {
    getCityInfo: function () {
      axios.get('./api/city.json')
        // .then(function (res) {
        //   this.handleGetInfoSucc
        //   console.log('city', res)
        // })
        .then(this.handleGetInfoSucc)
    },
    handleGetInfoSucc: function (res) {
      res = res.data
      if (res.data && res.ret) {
        console.log('City组件获取后端数据成功且不为空')
        const data = res.data
        this.hotCities = data.hotCities
        this.cities = data.cities
      }
    },
    handeLeetterChange: function (letter) {
      this.letter = letter
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
