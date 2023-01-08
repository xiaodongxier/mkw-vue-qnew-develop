# 第7章 项目实战 - 旅游网站首页开发
    
> 本章正式进入项目开发环节，将带大家完整的实现项目中的首页，涵盖的功能点包含header组件拆分、iconfont引入、多区块轮播、热销推荐及周末游等展示模块。
    
## 7-1 Vue项目首页 - header区域开发

宽带750px
按照iPhone6的2倍图

### stylus 安装

> [Stylus](https://www.stylus-lang.cn/) 是一款 CSS 的预处理器，也就是我们常说的 CSS 框架

```base
npm i stylus --save
```

> https://www.stylus-lang.cn
> CSS的预处理框架，即将stylus转换为css使用, 可以使用变量

### stylus-loader 安装

```
npm i stylus-loader --save
```

> 让webpack理解stylus


### 局部组建使用

组建下面声明局部组建

```js
export default {
  name: 'Home',
  components: {
    HomeHeader: HomeHeader
  }
}
```

与下面相同

```js
export default {
  name: 'Home',
  components: {
    HomeHeader
  }
}
```

`home-header` == `HomeHeader`

> scoped css样式只对当前组建生效

> 1rem = html font-size = 50px  
> 86/100 = .86rem

### `lang="stylus"`报错

> 报错截图

![报错](https://gitcdn.xiaodongxier.com/image/20230106110729.jpg)

> 报错版本

![报错版本](https://gitcdn.xiaodongxier.com/image/20230106110741.jpg)

> 解决方法：https://segmentfault.com/q/1010000025218065 ，下面的评论

> stylus-loader 版本太高 把版本降到3.0.2就解决了最后贴一个GitHub issues的地址[https://github.com/vuejs/vue-cli/issues/5947](https://github.com/vuejs/vue-cli/issues/5947)

![解决办法](https://gitcdn.xiaodongxier.com/image/20230106110753.jpg)

卸载命令 `npm uninstall stylus-loader`

安装3.0.2 版本

安装指定版本命令 `npm i stylus-loader@3.0.2 --save`


#### 其他解决方法

> 方法1

1. 不卸载之前的高版本
2. 运行命令 `npm i stylus-loader@3.0.2 --save`

> 方法2

1. 先在package.json里修改好指定版本号，然后输入
2. 运行命令 `npm update stylus-loader@3.0.2`



### scoped

限制 `css` 样式仅对当前组件有效

```html
<style lang="stylus" scoped>
  /* css内容 */
</style>
```



#### 知识点

```
--save和--save-dev区别
一句话:--save-dev是你开发时依赖的东西，--save是发布后还依赖的东西.
```

#### 注释事项
1. 代码缩减问题
2. 代码一行结束后面不能跟空格
































## 7-2 Vue项目首页 - iconfont 的使用和代码优化


### header 位置开发

> `lang="stylus"` css使用stylus语法

> scoped css样式只对当前组建生效



### iconfont的使用

> [`iconfont`](https://www.iconfont.cn/) 引入

```js
import './assets/styles/iconfont.css'
```

### 代码优化

> css 色值放到一个变量里面 - 方便后期视觉主题维护 -提高可维护性，创建 `styl` 文件


> 样式里面引入样式 ，css引用需要使用 @import


![styl引用](https://gitcdn.xiaodongxier.com/image/20230106151546.jpg)



```css
<style lang="stylus" scoped>
@import '../../../assets/styles/varibles.styl';
</style>
```

```css
$bgColor = #00bcd4
```

`@` 代表 `src` 这个目录，但是在`css`引用其他的`css`使用的时候需要前面加`~`


```css
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';
</style>
```


> `styles` 文件夹路径使用比较高，起一个别名代替，类似上面的 @，使代码变得更加精简


找到`build/webpack.base.conf.js`这个文件(34行)


```js
resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
},
```

根据上面的写法可以为`styles`路径新增一个别名


```js
resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'styles': resolve('src/assets/styles'),
    }
  },
```


![Header.vue 中 ~styles使用](https://gitcdn.xiaodongxier.com/image/20230106152256.jpg)


![main.js中 styles使用](https://gitcdn.xiaodongxier.com/image/20230106152309.jpg)


修改后会有报错提示


![修改配置项报错](https://gitcdn.xiaodongxier.com/image/20230106152323.jpg)

**这是因为项目修改配置项，需要重启下服务器**


### 课程总结

* 如何在 `Header` 组建使用 `iconfont`
* 如何通过 `webpack` 对代码进行简化(文件夹路径)
* 如果在 `styl` 定义变量并在 `css` 中使用变量



























## 7-3 【讨论题】对于静态资源，如何处理会比较优雅呢？


<wangyongjie class="wang-success">课下阅读官方文档 [处理静态资源](https://cli.vuejs.org/zh/guide/html-and-static-assets.html#%E5%A4%84%E7%90%86%E9%9D%99%E6%80%81%E8%B5%84%E6%BA%90) 章节内容 </wangyongjie>


静态资源可以通过两种方式进行处理：

*   在 JavaScript 被导入或在 template/CSS 中通过相对路径被引用。这类引用会被 webpack 处理。

*   放置在 `public` 目录下或通过绝对路径被引用。这类资源将会直接被拷贝，而不会经过 webpack 的处理。




### 从相对路径导入 [#](https://cli.vuejs.org/zh/guide/html-and-static-assets.html#%E4%BB%8E%E7%9B%B8%E5%AF%B9%E8%B7%AF%E5%BE%84%E5%AF%BC%E5%85%A5)

当你在 JavaScript、CSS 或 `*.vue` 文件中使用相对路径 (必须以 `.` 开头) 引用一个静态资源时，该资源将会被包含进入 webpack 的依赖图中。在其编译过程中，所有诸如 `<img src="...">`、`background: url(...)` 和 CSS `@import` 的资源 URL **都会被解析为一个模块依赖**。

例如，`url(./image.png)` 会被翻译为 `require('./image.png')`，而：

```
<img src="./image.png">

```

将会被编译到：

```
h('img', { attrs: { src: require('./image.png') }})

```

在其内部，我们通过 webpack 的 [Assets Modules](https://webpack.js.org/guides/asset-modules/) 配置，用版本哈希值和正确的公共基础路径来决定最终的文件路径，并将小于 8KiB 的资源内联，以减少 HTTP 请求的数量。

你可以通过 [chainWebpack](https://cli.vuejs.org/zh/config/#chainwebpack) 调整内联文件的大小限制。例如，下列代码会将内联图片资源限制设置为 4KiB：

```
// vue.config.js
module.exports = {
  chainWebpack: config => {
    config.module
      .rule('images')
        .set('parser', {
          dataUrlCondition: {
            maxSize: 4 * 1024 // 4KiB
          }
        })
  }
}

```

### URL 转换规则 [#](https://cli.vuejs.org/zh/guide/html-and-static-assets.html#url-%E8%BD%AC%E6%8D%A2%E8%A7%84%E5%88%99)

*   如果 URL 是一个绝对路径 (例如 `/images/foo.png`)，它将会被保留不变。

*   如果 URL 以 `.` 开头，它会作为一个相对模块请求被解释且基于你的文件系统中的目录结构进行解析。

*   如果 URL 以 `~` 开头，其后的任何内容都会作为一个模块请求被解析。这意味着你甚至可以引用 Node 模块中的资源：

    ```
    <img src="~some-npm-package/foo.png">

    ```

*   如果 URL 以 `@` 开头，它也会作为一个模块请求被解析。它的用处在于 Vue CLI 默认会设置一个指向 `<projectRoot>/src` 的别名 `@`。**(仅作用于模版中)**

### `public` 文件夹 [#](https://cli.vuejs.org/zh/guide/html-and-static-assets.html#public-%E6%96%87%E4%BB%B6%E5%A4%B9)

任何放置在 `public` 文件夹的静态资源都会被简单的复制，而不经过 webpack。你需要通过绝对路径来引用它们。

注意我们推荐将资源作为你的模块依赖图的一部分导入，这样它们会通过 webpack 的处理并获得如下好处：

*   脚本和样式表会被压缩且打包在一起，从而避免额外的网络请求。
*   文件丢失会直接在编译时报错，而不是到了用户端才产生 404 错误。
*   最终生成的文件名包含了内容哈希，因此你不必担心浏览器会缓存它们的老版本。

`public` 目录提供的是一个**应急手段**，当你通过绝对路径引用它时，留意应用将会部署到哪里。如果你的应用没有部署在域名的根部，那么你需要为你的 URL 配置 [publicPath](https://cli.vuejs.org/zh/config/#publicpath) 前缀：

*   在 `public/index.html` 或其它通过 `html-webpack-plugin` 用作模板的 HTML 文件中，你需要通过 `<%= BASE_URL %>` 设置链接前缀：

    ```
    <link rel="icon" href="<%= BASE_URL %>favicon.ico">

    ```

*   在模板中，你首先需要向你的组件传入基础 URL：

    ```
    data () {
      return {
        publicPath: process.env.BASE_URL
      }
    }

    ```

    然后：

    ```
    <img :src="`${publicPath}my-image.png`">

    ```

### 何时使用 `public` 文件夹 [#](https://cli.vuejs.org/zh/guide/html-and-static-assets.html#%E4%BD%95%E6%97%B6%E4%BD%BF%E7%94%A8-public-%E6%96%87%E4%BB%B6%E5%A4%B9)

*   你需要在构建输出中指定一个文件的名字。
*   你有上千个图片，需要动态引用它们的路径。
*   有些库可能和 webpack 不兼容，这时你除了将其用一个独立的 `<script>` 标签引入没有别的选择。

















## 7-4 Vue项目首页 - 首页轮播图


### 新建 index-swiper 分支

- 线上平台新建 `index-swiper` 分支
- 本地 `git pull` 拉取远程分支
- 本地 `git checkout index-swiper` 切换本地分支到 `index-swiper` 分支进行开发



### 轮播插件 `vue-awesome-swiper`

> [vue-awesome-swiper 插件介绍](https://github.com/surmon-china/vue-awesome-swiper)

安装  `vue-awesome-swiper`

```
npm install vue-awesome-swiper --save
```

采用2.6.7版本

```
npm install vue-awesome-swiper@2.6.7 --save
```




















































## 7-5 Vue项目首页 - 图标区域页面布局
































## 7-6 Vue项目首页 - 图标区域逻辑实现
































## 7-7 Vue项目首页 - 热销推荐组件开发
































## 7-8 Vue项目首页 - 开发周末游组件
































## 7-9 Vue项目首页 - 使用 axios 发送 ajax 请求
































## 7-10 Vue项目首页 - 首页父子组组件间传值
































    
