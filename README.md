1、设置NPM淘宝镜像库  npm config set registry https://registry.npm.taobao.org 
2、安装依赖          npm i
3、安装安卓平台环境   ionic cordova platform add android  （如果已存在，可以先移除ionic cordova platform remove android）
4、web浏览器运行	   npm start
5、安卓运行	         ionic cordova run android


源码目录：src
  page：放置所有子页面的内容
  assets：放置所有资源文件，主要是图片，程序中使用图片的路径示例：assets/image/*.png
  app: 放置程序启动时的入口文件，例如路由/main.ts
  theme: 防止全局样式文件

命名规则
  文件/文件夹全部采用驼峰命名
  page中的文件命名参考page/login下的文件名称
  

