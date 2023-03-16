<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner.vue'
import DetailHeader from './components/Header.vue'
import DetailList from './components/List.vue'
export default {
  name: 'Detail',
  data () {
    return {
      list: [
        {
          title: '儿童',
          children: [
            {
              title: '儿童1班',
              children: [
                {
                  title: '儿童1-1班',
                  children: [
                    {
                      title: '儿童1-1-1班'
                    },
                    {
                      title: '儿童1-1-2班'
                    }
                  ]
                },
                {
                  title: '儿童1-2班'
                }
              ]
            },
            {
              title: '儿童2班'
            }
          ]
        },
        {
          title: '成人'
        },
        {
          title: '老人'
        }
      ]
    }
  },
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  }
}
</script>

<style lang="stylus" scoped>
.content
  height 50rem
</style>
