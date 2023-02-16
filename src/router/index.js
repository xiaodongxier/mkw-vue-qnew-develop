// - 路由文件 - wangyongjie.cn
import Vue from 'vue'
import Router from 'vue-router'
// - @ 指的是 src 目录， home.vue 简写成 home
import Home from '@/pages/home/Home'
import City from '@/pages/city/city'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/City',
      name: 'City',
      component: City
    }
  ]
})
