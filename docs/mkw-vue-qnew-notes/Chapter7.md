# 第7章 项目实战 - 旅游网站首页开发
    
> 本章正式进入项目开发环节，将带大家完整的实现项目中的首页，涵盖的功能点包含header组件拆分、iconfont引入、多区块轮播、热销推荐及周末游等展示模块。
    
## 7-1 Vue项目首页 - header区域开发

宽带750px
按照iPhone6的2倍图

### stylus 安装

```
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

![报错](https://upfile.wangyongjie.cn/preview/20220323173330Tg9PvfOGb.png)

> 报错版本

![报错版本](https://upfile.wangyongjie.cn/preview/20220323173826TBysA0dn2.png)

> 解决方法：https://segmentfault.com/q/1010000025218065 ，下面的评论

> stylus-loader 版本太高 把版本降到3.0.2就解决了最后贴一个GitHub issues的地址[https://github.com/vuejs/vue-cli/issues/5947](https://github.com/vuejs/vue-cli/issues/5947)

![解决办法](https://upfile.wangyongjie.cn/preview/20220323174025TBfaTVWgD.png)

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



### iconfont的使用和代码优化

> iconfont引入

```js
import './assets/styles/iconfont.css'
```


> css值放到一个变量里面 - 方便后期视觉主题维护 -提高可维护性


> 样式里面引入样式 ，css引用需要使用 @import


![styl引用](https://upfile.wangyongjie.cn/preview/20220413170924TTM1E2Z1O.png)



```css
@import '../../../assets/styles/varibles.styl';
```

`@` 代表 `src` 这个目录，但是在`css`引用其他的`css`使用的时候需要前面加`~`


```css
@import '~@/assets/styles/varibles.styl';
```



> styles 文件夹路径使用比较高，起一个别名代替，类似上面的 @，使代码变得更加精简


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


![Header.vue 中 ~styles使用](https://upfile.wangyongjie.cn/preview/20220413173351T6zYm8aGd.png)


![main.js中 styles使用](https://upfile.wangyongjie.cn/preview/20220413173627TsPLS18W5.png)


修改后会有报错提示


![修改配置项报错](https://upfile.wangyongjie.cn/preview/20220413173730TFsA95QZm.png)

这是因为项目修改配置项，需要重启下服务器


### 课程总结

* 如何在head组建使用iconfont
* 如果在styl定义变量并在css中使用变量
* 如何通过webpack对代码进行简化(文件夹路径)


## 7-3 【讨论题】对于静态资源，如何处理会比较优雅呢？




## 7-4 Vue项目首页 - 首页轮播图




## 7-5 Vue项目首页 - 图标区域页面布局




## 7-6 Vue项目首页 - 图标区域逻辑实现




## 7-7 Vue项目首页 - 热销推荐组件开发




## 7-8 Vue项目首页 - 开发周末游组件




## 7-9 Vue项目首页 - 使用 axios 发送 ajax 请求




## 7-10 Vue项目首页 - 首页父子组组件间传值




    
