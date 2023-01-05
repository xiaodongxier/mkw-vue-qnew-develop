# 第6章 Vue 项目预热 7 节 | 83分钟
    
> 本章首先讲解项目环境的基础配置，在此基础上分析工程代码目录结构，延展讲解 Vue中单文件组件及单页面应用路由的概念，最后将带大家整理项目目录，完成 stylus、reset.css 等基础工具及样式的引入，完成项目开发前的准备工作。...
    
## 6-1 Vue项目预热 - 环境配置


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


![项目初始化](https://gitcdn.xiaodongxier.com/image/20230104150210.jpg)

- `Target directory exists. Continue?` - 文件夹已经存在是否往文件夹里添加
- `Project name` - 项目名称，不填自动以文件夹名字命名
  - `Sorry name can no longer contain capital letters.` - 抱歉，名称不能再包含大写字母。
- `Proiect description` - 项目描述
- `Author` - 作者
- `Vue build` - 编译形式
  - `Runtime Compiler: recommended for most users` - 运行时编译 ✅
  - `Runtime-only: about 6KB lighter min+gzip, but templates (or any Vue-specific HTML are ONLY allowed in .vue files render functions are required elsewhere` - 运行时和其他时间编译
- `Install vue-router?`  - 是否安装 `vue-router` 路由 ✅
- `Use ESLint to lint your code?` - 是否使用 `ESLint` 对代码的公正度进行检查
- `Pick an ESLint preset` - 代码检测规范
  - `Standard (https://github.com/standard/standard)` ✅
  - `Airbnb (https://github.com/airbnb/javascript)`
  - `none (configure it yourself)`
- `Set up unit tests` - 自动化测试相关
- `Setup e2e tests with Nightwatch?` e2e端到端测试
- `Should we run npm install for you after the project has been created? (recommended)(Use arrow keys)` - 项目包管理工具
  - `Yes, use NPM` ✅
  - `Yes, use Yarn`
  - `No. I will handle that myself`




<wangyongjie class="wang-success">课下阅读官方文档 [命令行工具 (CLI)](https://v2.cn.vuejs.org/v2/guide/installation.html#%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%B7%A5%E5%85%B7-CLI) 章节内容 </wangyongjie>


Vue 提供了一个[官方的 CLI](https://github.com/vuejs/vue-cli)，为单页面应用 (SPA) 快速搭建繁杂的脚手架。它为现代前端工作流提供了开箱即用的构建设置。只需要几分钟的时间就可以运行起来并带有热重载、保存时 lint 校验，以及生产环境可用的构建版本。更多详情可查阅 [Vue CLI 的文档](https://cli.vuejs.org)。



```bash
git status
git add .
git commit -m "变更内容注释"
git push
```


#### 课外补充，md代码块支持的高亮标识

| 开发语言 | md中的标识 |
| - | - | 
| Bash | bash |
| C++ | cpp |
| C# | cs |
| CSS | css |
| D | d |
| Dart | d (dart) |
| Delphi | delphi |
| Go | go |
| Gradle | gradle |
| Groovy | groovy |
| HTML | html |
| Java | java |
| JavaScript | javascript |
| JSON | json |
| Less | less |
| Lisp | lisp |
| Lua | lua |
| Objective C | objectivec |
| Markdown | markdown |
| Nginx | nginx |
| Perl | perl |
| PHP | php |
| PowersShell | powershell |
| Python | python |
| Ruby | ruby |
| SCSS | scss |
| SQL | sql |
| Swift | swift |
| text | text/plain |
| TypeScript | typescript |
| Vim Script | vim |
| XML | xml |
| YAML | yml |







## 6-2 （新）Vue项目预热 - 项目环境准备(答疑)


> 慕课网源码：https://git.imooc.com/coding-203

>  卸载安装的新的版本 `npm uninstall @vue/cli -g`

> 淘宝镜像 https://developer.aliyun.com/mirror/NPM

 

![安装](https://gitcdn.xiaodongxier.com/image/20230104154456.jpg)



### 移除新版 `vue-cli`

```base
npm uninstall @vue/cli -g
```

### 安装旧版 `vue-cli`

```base
npm install vue-cli -g
```

卸载旧版

```base
npm uninstall vue-cli -g
```


###  淘宝 NPM 镜像

> 淘宝 NPM 镜像: https://developer.aliyun.com/mirror/NPM （旧）

> npmmirror 中国镜像站: http://www.npmmirror.com/?spm=a2c6h.14029880.0.0.3ba63839KoGSmz（新）

- 你可以使用我们定制的 [cnpm](https://github.com/cnpm/cnpm) (gzip 压缩支持) 命令行工具代替默认的 `npm`:

```
npm install -g cnpm --registry=https://registry.npmmirror.com
```

- 安装模块

```
cnpm install [name]
```














## 6-3 Vue项目预热 - 项目代码介绍

> 最主要是 `src` 目录下项目代码的开发


![初始化文件结构](https://gitcdn.xiaodongxier.com/image/20230104171656.png)

* `README` - 项目的说明文件
* `package` - 第三方模块依赖包
* `package-lock` - `package` 的一个锁文件，确定安装第三方包的版本，保证团队编程的统一
* `LICENSE` - 开源协议声明
* `index.html` - 默认的项目首页模版文件
* `.postcssrc.js` - `post css`配置项
* `.gitignore` - `git` 提交过滤，不想提交到仓库的文件可以进行配置
* `.eslintrc` - 代码规范检测
* `.eslintignore` - 文件不想被 `eslintrc` 进行检测可以配置到里面，写的不标准也不会进行提示
* `.editorconfig` - 关于编辑器的一些配置，方便统一编程
* `.babelrc` -  语法转换，转换成浏览器可以正常编译执行的代码
* `static` - 静态资源(图片/模拟的数据)
  * `.gitkeep` - 
* `src` - 整个项目的源代码
  * `assets` - 静态资源(图片类资源)
  * `components` - 组件
  * `router/index.js` - 路由
  * `App.vue` - 最原始的根组建
  * `main.js` - 整个项目的入口文件
* `node_modules` - 项目依赖的第三方包
* `config` - 项目的配置文件
  * `dev.env.js` - 开发环境配置
  * `index.js.js` - 基础的配置信息
  * `prod.env.js` - 线上环境配置
* `build` - `webpack` 配置项/`vue-cli`自动构建的/无需修改
  * `build.js` - 打包过程额外的 `webpack` 配置？
  * `check-versions.js` - 
  * `utils.js` - 
  * `vue-loader.conf.js` - 
  * `webpack.base.conf.js` - 基础的 `webpack` 配置项
  * `webpack.dev.conf.js` - 开发环境的 `webpack` 配置项
  * `webpack.prod.conf.js` - 线上环境的 `webpack` 配置项







## 6-4 Vue项目预热 - 单文件组件与Vue中的路由



> components: { App } 

es6的写法，同下面写法

```js
components: { 
  App : App
} 
```


> import App from './App'

默认去找App.js/App.json/App.vue等文件




> 以.vue结尾的文件称之为单文件组件


单文件组件基本结构


```vue
<template>
  <div id="app">
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
```







### 路由

> 路由：根据网址的不同，返回不同的内容给用户


> `<router-view/>`当前路由地址所对应的内容 
    

路由配置在 `./router/index.js` 文件

### 注意

1. `style` 后面要回车一行
2. `export default`中`name`的值要是单引号




















## 6-5 Vue项目预热 - 单页应用VS多页应用



### 多页面应用

![多页面应用](https://gitcdn.xiaodongxier.com/image/20230105141134.png)

页面跳转->返回 `HTML`

优点：首屏时间快/`SEO`效果好
缺点：页面切换慢



### 单页面应用

![单页面应用](https://gitcdn.xiaodongxier.com/image/20230105141055.png)

> vue里一般不用`a`标签做页面跳转

> `template` 里面像外暴露只能暴露一个跟标签

> 搜索引擎只认识 `html` 内容不认识 `js` 内容，所以 `seo` 差

页面跳转 -> `js`渲染

优点：页面切换快
缺点：首屏时间稍慢，`SEO` 差

**后期会学到服务器端渲染等可内容以解决但页面应用目前存在的问题，解决完这些问题，对前端来说 `vue` 是一个完美的开发应用**















## 6-6 【讨论题】对前端路由，你有怎样的理解？



















## 6-7 Vue项目预热 - 项目代码初始化

### viewport

> viewport 的 meta 标签进行配置,移动端禁止手指缩放 **ios safari浏览器目测不起作用**


```html
<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
```


### reset 

> 引入reset.css文件`import './assets/styles/reset.css'`，重置css默认样式进行浏览器之间样式的统一 

```css
@charset "utf-8";html{touch-action: manipulation;background-color:#fff;color:#000;font-size:12px}
body,ul,ol,dl,dd,h1,h2,h3,h4,h5,h6,figure,form,fieldset,legend,input,textarea,button,p,blockquote,th,td,pre,xmp{margin:0;padding:0}
body,input,textarea,button,select,pre,xmp,tt,code,kbd,samp{line-height:1.5;font-family:tahoma,arial,"Hiragino Sans GB",simsun,sans-serif}
h1,h2,h3,h4,h5,h6,small,big,input,textarea,button,select{font-size:100%}
h1,h2,h3,h4,h5,h6{font-family:tahoma,arial,"Hiragino Sans GB","微软雅黑",simsun,sans-serif}
h1,h2,h3,h4,h5,h6,b,strong{font-weight:normal}
address,cite,dfn,em,i,optgroup,var{font-style:normal}
table{border-collapse:collapse;border-spacing:0;text-align:left}
caption,th{text-align:inherit}
ul,ol,menu{list-style:none}
fieldset,img{border:0}
img,object,input,textarea,button,select{vertical-align:middle}
article,aside,footer,header,section,nav,figure,figcaption,hgroup,details,menu{display:block}
audio,canvas,video{display:inline-block;*display:inline;*zoom:1}
blockquote:before,blockquote:after,q:before,q:after{content:"\0020"}
textarea{overflow:auto;resize:vertical}
input,textarea,button,select,a{outline:0 none;border: none;}
button::-moz-focus-inner,input::-moz-focus-inner{padding:0;border:0}
mark{background-color:transparent}
a,ins,s,u,del{text-decoration:none}
sup,sub{vertical-align:baseline}
html {overflow-x: hidden;height: 100%;font-size: 50px;-webkit-tap-highlight-color: transparent;}
body {font-family: Arial, "Microsoft Yahei", "Helvetica Neue", Helvetica, sans-serif;color: #333;font-size: .28em;line-height: 1;-webkit-text-size-adjust: none;}
hr {height: .02rem;margin: .1rem 0;border: medium none;border-top: .02rem solid #cacaca;}
a {color: #25a4bb;text-decoration: none;}
```

### border

> 引入border.css文件`import './assets/styles/border.css'`，解决移动端1px问题

```css
@charset "utf-8";
.border,
.border-top,
.border-right,
.border-bottom,
.border-left,
.border-topbottom,
.border-rightleft,
.border-topleft,
.border-rightbottom,
.border-topright,
.border-bottomleft {
    position: relative;
}
.border::before,
.border-top::before,
.border-right::before,
.border-bottom::before,
.border-left::before,
.border-topbottom::before,
.border-topbottom::after,
.border-rightleft::before,
.border-rightleft::after,
.border-topleft::before,
.border-topleft::after,
.border-rightbottom::before,
.border-rightbottom::after,
.border-topright::before,
.border-topright::after,
.border-bottomleft::before,
.border-bottomleft::after {
    content: "\0020";
    overflow: hidden;
    position: absolute;
}
/* border
 * 因，边框是由伪元素区域遮盖在父级
 * 故，子级若有交互，需要对子级设置
 * 定位 及 z轴
 */
.border::before {
    box-sizing: border-box;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border: 1px solid #eaeaea;
    transform-origin: 0 0;
}
.border-top::before,
.border-bottom::before,
.border-topbottom::before,
.border-topbottom::after,
.border-topleft::before,
.border-rightbottom::after,
.border-topright::before,
.border-bottomleft::before {
    left: 0;
    width: 100%;
    height: 1px;
}
.border-right::before,
.border-left::before,
.border-rightleft::before,
.border-rightleft::after,
.border-topleft::after,
.border-rightbottom::before,
.border-topright::after,
.border-bottomleft::after {
    top: 0;
    width: 1px;
    height: 100%;
}
.border-top::before,
.border-topbottom::before,
.border-topleft::before,
.border-topright::before {
    border-top: 1px solid #eaeaea;
    transform-origin: 0 0;
}
.border-right::before,
.border-rightbottom::before,
.border-rightleft::before,
.border-topright::after {
    border-right: 1px solid #eaeaea;
    transform-origin: 100% 0;
}
.border-bottom::before,
.border-topbottom::after,
.border-rightbottom::after,
.border-bottomleft::before {
    border-bottom: 1px solid #eaeaea;
    transform-origin: 0 100%;
}
.border-left::before,
.border-topleft::after,
.border-rightleft::after,
.border-bottomleft::after {
    border-left: 1px solid #eaeaea;
    transform-origin: 0 0;
}
.border-top::before,
.border-topbottom::before,
.border-topleft::before,
.border-topright::before {
    top: 0;
}
.border-right::before,
.border-rightleft::after,
.border-rightbottom::before,
.border-topright::after {
    right: 0;
}
.border-bottom::before,
.border-topbottom::after,
.border-rightbottom::after,
.border-bottomleft::after {
    bottom: 0;
}
.border-left::before,
.border-rightleft::before,
.border-topleft::after,
.border-bottomleft::before {
    left: 0;
}
@media (max--moz-device-pixel-ratio: 1.49), (-webkit-max-device-pixel-ratio: 1.49), (max-device-pixel-ratio: 1.49), (max-resolution: 143dpi), (max-resolution: 1.49dppx) {
    /* 默认值，无需重置 */
}
@media (min--moz-device-pixel-ratio: 1.5) and (max--moz-device-pixel-ratio: 2.49), (-webkit-min-device-pixel-ratio: 1.5) and (-webkit-max-device-pixel-ratio: 2.49), (min-device-pixel-ratio: 1.5) and (max-device-pixel-ratio: 2.49), (min-resolution: 144dpi) and (max-resolution: 239dpi), (min-resolution: 1.5dppx) and (max-resolution: 2.49dppx) {
    .border::before {
        width: 200%;
        height: 200%;
        transform: scale(.5);
    }
    .border-top::before,
    .border-bottom::before,
    .border-topbottom::before,
    .border-topbottom::after,
    .border-topleft::before,
    .border-rightbottom::after,
    .border-topright::before,
    .border-bottomleft::before {
        transform: scaleY(.5);
    }
    .border-right::before,
    .border-left::before,
    .border-rightleft::before,
    .border-rightleft::after,
    .border-topleft::after,
    .border-rightbottom::before,
    .border-topright::after,
    .border-bottomleft::after {
        transform: scaleX(.5);
    }
}
@media (min--moz-device-pixel-ratio: 2.5), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 240dpi), (min-resolution: 2.5dppx) {
    .border::before {
        width: 300%;
        height: 300%;
        transform: scale(.33333);
    }
    .border-top::before,
    .border-bottom::before,
    .border-topbottom::before,
    .border-topbottom::after,
    .border-topleft::before,
    .border-rightbottom::after,
    .border-topright::before,
    .border-bottomleft::before {
        transform: scaleY(.33333);
    }
    .border-right::before,
    .border-left::before,
    .border-rightleft::before,
    .border-rightleft::after,
    .border-topleft::after,
    .border-rightbottom::before,
    .border-topright::after,
    .border-bottomleft::after {
        transform: scaleX(.33333);
    }
}
```


### fastclick

> 300ms click点击延迟的问题，安装fastclick `sudo npm i fastclick --save` 进行解决，安装到依赖之中，`--save`不管是开发环境，还是打包成线上版本的代码，都需要使用`fastclick`

> 安装存储在 `package.json` 中的 `dependencies` 里面

> 引入fastClick `import fastClick from 'fastclick'` ,使用fastClick `fastClick.attach(document.body)`


### iconfont

> https://www.iconfont.cn

创建项目


### 无用代码删除

### 代码提交线上

```bash
git add .     //本地修改提交到git缓存区
git commit -m "注释"      //本地缓冲区提交的本地仓库
git push      //本地代码提交到线上
```







