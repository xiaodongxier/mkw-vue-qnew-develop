// - 整个项目的入口文件
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// - 没有后缀是因为，他会自己寻找，查看有没有 .vue .js .json 等等，直到找到和名字匹配的文件为止
import App from './App'
import router from './router'
// - 延迟300ms问题解决
import fastClick from 'fastclick'
// - 引入 vue-awesome-swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'
// - 默认样式重制/保证各个浏览器访问效果一样
import 'styles/reset.css'
// - 1px边框问题
import 'styles/border.css'
// - 引入 iconfont 图标文件
import 'styles/iconfont.css'
// - 引入 vue-awesome-swipercss文件
import 'swiper/dist/css/swiper.css'

// 使用 fastclick
Vue.config.productionTip = false
fastClick.attach(document.body)

// 使用vue-awesome-swiper
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  // - index.html 中元素#app 的挂载点
  el: '#app',
  // - 路由-后面讲
  router,
  // - 局部组件使用，ES6的写法，等同于  { App:App }，在ES6中当键和值一样的时候可以简写一个就可以
  store,
  components: { App },
  // - App组件显示在页面之上 ，App组件在哪里？上面第5行代码进行了引入
  template: '<App/>'
})
