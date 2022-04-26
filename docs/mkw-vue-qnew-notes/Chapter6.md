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


![项目初始化](https://upfile.wangyongjie.cn/preview/20220316232411T031kDaxX.png)





## 6-2 （新）Vue项目预热 - 项目环境准备(答疑)


> 慕课网源码：https://git.imooc.com/coding-203

>  卸载安装的新的版本 `npm uninstall @vue/cli -g`

> 淘宝镜像 https://developer.aliyun.com/mirror/NPM



![安装](https://upfile.wangyongjie.cn/preview/20220316232411T031kDaxX.png)





## 6-3 Vue项目预热 - 项目代码介绍



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
  * App.vue - 最原始的根组建
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


## 6-4 Vue项目预热 - 单文件组件与Vue中的路由



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



## 6-5 Vue项目预热 - 单页应用VS多页应用



### 多页面应用

页面跳转-》返回HTML

优点：首屏时间快/SEO优化号
缺点：页面切换慢



### 单页面应用

> vue里一般不用`a`标签做页面跳转

> `template` 里面像外暴露只能暴露一个跟标签

> 搜索引擎只认识html内容不认识js内容，所以seo差

页面跳转-》js渲染

优点：页面切换快
缺点：首屏时间稍慢，SEO差

后期会学到服务器端渲染等可内容以解决但页面应用目前存在的问题


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

> 300ms click点击延迟的问题，安装fastclick `sudo npm i fastclick --save` 进行解决，安装到依赖之中，`--save`不管是开发环境，还是打包成线上版本的代码，都需要使用fastclick

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
