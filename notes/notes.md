> 官网文档：https://cn.vuejs.org/index.html

## 1.1 课程介绍

中文文档完善/代码轻量/上手简单/容易使用

NUXT 服务器渲染
weex vue语法编写原生app

* 基础内容
  * 基础语法
  * MVVM模式 
  * 前端组件化
  * 声明周期函数 
  * 动画特效

* 实战项目
  * 环境搭建 
  * 使用git 
  * 数据模拟 
  * 本地开发
  * 前后端代码联挑 
  * 真机测试 
  * 上线

> 实战项目介绍

多区域轮博/多区域展示/城市展示/城市搜索/右侧字母与左侧联动.....
公用的画廊组件/递归展示的列表组件...

> 使用的内容

* Axios 数据获取
* Vuex 
* Vue Router 
* 异步组件
* Stylus
* 递归组件
* 插件 swiper...
* 公用组件

> 课程安排

* 第1章 课程介绍
* 第2章  Vue初探
* 第3-5章 基础知识精讲
* 第6-9章 Vue项目实战
* 第10章 项目测试上线流程几后续学习指南



> 学习前提

* js
* es6
* webpack
* npm



> 收获

* 入门Vue的使用
* 理解vue开发流程
* 移动端布局技巧
* 上手公司中型/大型项目
* 规范代码编写


## 2.1 学习方法

> 官网文档：https://cn.vuejs.org/index.html

最好的学习资料就是官方文档

视频+官方文档 进行学习



## 2.2 hello world

* 开发版 - 代码提示 代码报错
* 生产版

Vue 不支持 IE8 及以下版本，因为 Vue 使用了 IE8 无法模拟的 ECMAScript 5 特性。但它支持所有兼容 ECMAScript 5 的浏览器。


## 2.3 todo list

> 标签指令 

* v-for
* v-on
* v-model

MVVM 不关心DOM，只关注数据，数据发生改变，DOM结构就发生改变



## 2.4 MVVM模式


![MVVM设计模式](https://upfile.wangyongjie.cn/preview/20220316150127TJVs0DknT.png)






<!-- 




 -->



















## 6.1Vue项目预热 - 环境配置

### nodejs

> https://nodejs.org/en/

LTS - 长期维护版
Current - 最新版


> 版本检测 node -v

### 创建vue项目

> 全局安装 vue-cli
`$ npm install -g vue-cli`

> 创建项目
`$ vue init <template-name> <project-name>`
`$ vue init webpack mkw-vue-qnew-develop`


> 项目初始化
`$ vue init webpack my-project`


![项目初始化](https://upfile.wangyongjie.cn/preview/20220316232411T031kDaxX.png)






## 6.2 （新）Vue项目预热 - 项目环境准备

> 慕课网源码：https://git.imooc.com/coding-203

>  卸载安装的新的版本 `npm uninstall @vue/cli -g`

> 淘宝镜像 https://developer.aliyun.com/mirror/NPM



![安装](https://upfile.wangyongjie.cn/preview/20220316232411T031kDaxX.png)



## 6.3 项目代码结构

* README - 项目的说明文件
* package - 第三方模块依赖包
* package-lock - package的一个锁文件，确定安装第三方包的版本，保证团队编程的统一
* LICENSE - 开源协议声明
* index.html - 默认的项目首页模版文件
* .postcssrc.js - post css配置项
* .gitignore - git提交过滤，不想提交到仓库的文件可以进行配置
* .eslintrc - 代码规范检测
* .eslintignore - 文件不想被 eslintrc 进行检测可以配置到里面，写的不标准也不会进行提示
* .editorconfig - 关于编辑器的一些配置，方便统一编程
* .babelrc -  语法转换，转换成浏览器可以正常编译执行的代码
* static - 静态资源
  * .gitkeep - 
* src - 整个项目的源代码
  * assets - 静态资源
  * components - 组件
  * router/index.js - 路由
  * App.vue - 最原始的跟组建
  * main.js - 整个项目的入口文件
* node_modules - 项目依赖的第三方包
* config - 项目的配置文件
  * dev.env.js - 开发环境配置
  * index.js.js - 基础的配置信息
  * prod.env.js - 线上环境配置
* build - webpack配置项/vue-cli自动构建的/无需修改
  * build.js - 
  * check-versions.js - 
  * utils.js - 
  * vue-loader.conf.js - 
  * webpack.base.conf.js - 基础的webpack配置项
  * webpack.dev.conf.js - 开发环境的webpack配置项
  * webpack.prod.conf.js - 线上环境的webpack配置项

## 6.4 单文件组件与Vue中的路由


> components: { App } 

es6的写法，同下面写法

```
components: { 
  App : App
} 
```



> import App from './App'

默认去找App.js/App.json/App.vue等文件




> 以.vue结尾的文件称之为单文件组件

单文件组件


### 路由

> 路由：根据网址的不同，返回不同的内容给用户


> `<router-view/>`当前路由地址所对应的内容 
    

### 注意

1. `style` 后面要回车一行
2. `export default`中`name`的值要是单引号










































































