<template>
  <div>
    <div class="home">Home</div>
    <router-link to="/list" class="home">列表页</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="">
  .home {
    font-size: 50px;
  }
</style>
