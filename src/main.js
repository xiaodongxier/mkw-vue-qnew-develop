// - 整个项目的入口文件
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// - 没有后缀是因为，他会自己寻找，查看有没有 .vue .js .json 等等，直到找到和名字匹配的文件为止
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'

Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  // - index.html 中元素#app 的挂载点
  el: '#app',
  // - 路由-后面讲
  router,
  // - 局部组件使用，ES6的写法，等同于  { App:App }，在ES6中当键和值一样的时候可以简写一个就可以
  components: { App },
  // - App组件显示在页面之上 ，App组件在哪里？上面第5行代码进行了引入
  template: '<App/>'
})
