## vue mpa

> this is a vue mpa(multi-page-application) project


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

```


## 结构

``` bash
┏━ dist 输出目录
┣━ node_modules 包依赖
┣━ build webpack相关配置
┣━ config 环境配置
┣━ static 静态资源
┣━ src  源代码
┃  ┣━ assets
┃  ┃   ┣━ images 图片资源
┃  ┃   ┣━ sass/less 样式文件
┃  ┣━ components
┃  ┃   ┣━ common 公共组件
┃  ┃   ┣━ view 项目组件
┃  ┣━ modules 页面文件

```


## 说明

`/modules/*`中每个`entry.js`会生成一个单独的`index.html`

页面`/modules/hello/index.vue`，实际访问路径为，`/pages/moduleName`


## 切换运行环境

首先在/config目录下新建环境配置(例如 xxx.env.js)

``` bash
npm run dev -- --env=xxx
npm run build -- --env=xxx
```
