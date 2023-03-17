# 第10章 实战项目 - 项目的联调，测试与发布上线 6 节 | 42分钟
    
> 本章将以公司级别项目的要求，给大家讲解当项目开发完成后，开发人员进行联调，测试，及发布的详细流程，同时点出过程中可能遇到的问题及修复方案。另外，还会给大家补充讲解异步组件的知识点，通过使用异步组件，我们可以大幅提高大型项目的首屏速度。最后，我们将给大家讲解，在这么课程学习完之后，继续深入学习Vue的方...

## 10-1 Vue项目的联调测试上线 - 项目前后端联调

```
config/index.js
```

1. 使用 proxyTable 配置项

```js
dev: {
  // Paths
  assetsSubDirectory: 'static',
  assetsPublicPath: '/',
  proxyTable: {
    // 当请求api目录的时候
    '/api': {
      // 把请求转发到服务器8080端口上
      target: 'http://localhost:8081',
      // 路径进行一个替换
      pathRewrite: {
        // 一旦请求的地址是以api开头的,就请求到本地的 static 目录下 mock 文件夹下
        '^/api': '/static/mock/'
      }
    }
  }
```


## 10-2 【讨论题】作为前端，你在开发中是如何进行代码调试 Debug




## 10-3 Vue项目的联调测试上线 - 真机测试


获取当前的ip地址

**mac**

```
ifconfig
```

**Win**

```
ipconfig
```

然后获取到ip地址替换到服务器上的 localhost 就可以通过手机进行访问该网站了，前提是必须和电脑在同一网络环境下

默认是不支持ip地址访问的，需要修改 `package.json > scripts`

```js
 "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js"
```

修改为

```js
 "dev": "webpack-dev-server --host 0.0.0.0 --inline --progress --config build/webpack.dev.conf.js"
```


#### 问题


1. 列表页滚动会下拉的问题

```html
<template>
  <ul class="list">
    <li class="item"
        v-for="item of letters"
        :key="item"
        :ref="item"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        @click="handeLeetterClick">
        {{ item }}
    </li>
  </ul>
</template>
```

事件修饰符能阻止默认行为，阻止后就能解决下拉滑动的问题

```html
<template>
  <ul class="list">
    <li class="item"
        v-for="item of letters"
        :key="item"
        :ref="item"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        @click="handeLeetterClick">
        {{ item }}
    </li>
  </ul>
</template>
```

2. 部分安卓白屏问题

因为安卓版本太低不知道 Promise ，解决办法需要安装一个包

```shell
# 不支持 Promise ，会通过添加ES6的新特性来解决
sudo npm i babel-polyfill --save
```

在不支持Promise的浏览器会 polyfill一个全局的Promise对象供调用;

`main` 文件中引入 `babel-polyfill`

```
import 'babel-polyfill'
```





## 10-4 Vue项目的联调测试上线 - 打包上线


源代码打包，打包成浏览器能够访问的代码，并且是压缩后的

```
npm run build
```

生成 dist 目录，里面包含了压缩后的代码，把代码 dist 目录给到后端开发人员放到后端项目的根目录即可，就完成了简单的项目上线



#### 扩展问题

当需要把打包文件放到某个文件夹的目录下运行的话需要修改 `config/index.js` 文件

```
assetsPublicPath: '/',
```

修改为你要放置的目录名就行了，比如 `pages`

```
assetsPublicPath: '/pages',
```


然后重新通过 `npm run build `打包上线即可





## 10-5 Vue项目的联调测试上线 - 异步组件实现按需加载


合理使用一步组件可以提高项目的性能

.css.map 调试被压缩过的css代码 ,意义不大，就是开发调试的时候使用




- manifest.js 是webpack 打包的的文件，
  - 开发配置文件，没法做太多的修改

- vendor.js 是各个页面/组件公用的代码
  - 公用的组件优不优化区别不大

- app.js 项目中各个页面的业务逻辑代码
  - 默认方式打包的时候，访问首页的时候，把所有页面的逻辑都进行了加载 
    - 使用异步组件实现按需加载，`router/index.js`

**修改前** 同步加载

```js
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
    },
    {
      path: '/Detail/:id',
      name: 'Detail',
      component: Detail
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    return { y: 0 }
    // return { x: 0, y: 0}
  }
})
```

**修改后** 异步加载

```
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/pages/home/Home')
    },
    {
      path: '/City',
      name: 'City',
      component: () => import('@/pages/city/city')
    },
    {
      path: '/Detail/:id',
      name: 'Detail',
      component: () => import('@/pages/detail/detail')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    return { y: 0 }
    // return { x: 0, y: 0}
  }
})
```


根据项目情况，如果项目打不 app.js 文件很小的情况下没必要做这个组件的拆分，虽然文件变小了，但是访问其他页面的时候会再次发送ajax请求，所以具体情况还需要综合考虑使用不使用异步拆分


不仅是路由这块，其他使用组件的地方都可以使用异步加载，比如

```js
components: {
  CityHeader: CityHeader,
  CitySearch: CitySearch,
  CityList: CityList,
  CityAlphabet: CityAlphabet
}
```

异步加载使用

```js
components: {
  CityHeader: () => import(./components/Header),
  CitySearch: CitySearch,
  CityList: CityList,
  CityAlphabet: CityAlphabet
}
```




## 10-6 Vue项目的联调测试上线 - 课程总结与后续学习指南

### 知识点

- 插件
- 自定义指令

    
### vue-router

- 命名路由
- 重定向和别名
- 路由守卫
- 导航守卫

### vuex

- State
- Getter
- Mutation
- Action
- Module
- 大型的项目数据结构怎么设计
- vuex相关的插件


### 服务器端渲染

nodejs，vue，路由，前后端的渲染



### vue资源

- swiper



### vue源码

  - 根据GitHub中vue项目库每次的提交，阅读vue源码，理解逻辑思想

### webpack

### Babel

### ES6

