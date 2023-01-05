<!-- 首页组件/首页总组件 -->
<template>
  <div>
    <home-header></home-header>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
export default {
  name: 'Home',
  components: {
    HomeHeader: HomeHeader
  }
}
</script>

<style lang="">

</style>
