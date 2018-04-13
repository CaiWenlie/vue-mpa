#

> this is a project for sinaifloan

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:3000
 gulp serve or gulp default


## 结构


┏━ dist 生产环境静态资源
┣━ node_modules 包依赖
┣━ build webpack相关配置
┣━ config 环境配置(api地址前缀建议写在这里)
┣━ static 静态资源
┣━ src  源代码
┃  ┣━ assets
┃  ┃   ┣━ images 图片资源
┃  ┃   ┣━ sass/less 样式文件
┃  ┣━ components
┃  ┃   ┣━ common 公共组件（跨项目使用）
┃  ┃   ┣━ view 项目组件
┃  ┣━ modules 页面文件


```

## 说明
`/modules/*`中每个`entry.js`会生成一个单独的`index.html`

页面`/modules/hello/index.vue`，实际访问路径为，`/pages/moduleName`


## ps:
# svn 不上传dist文件与包依赖