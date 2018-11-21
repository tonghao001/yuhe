笔记本开发环境准备
  npm install -g ionic
  npm install -g cordova
  安卓环境：
    安装JDK 下载地址：https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html
    设置JDK环境变量PATH (参考百度)
    安装Android Studio 下载地址：https://developer.android.com/studio/
    安装Android SDK	   步骤： Android Studio -> Configure -> SDK Manager
    安装Android Virtual Device (AVD 模拟器)  步骤：用Android Studio打开工程，会出现AVD设置按钮，《参考百度》
  IOS环境：
    安装XCode


项目文件夹下操作：
  1、设置NPM淘宝镜像库  npm config set registry https://registry.npm.taobao.org 
  2、安装依赖          npm i
  3、安装安卓平台环境   ionic cordova platform add android  （如果已存在，可以先移除ionic cordova platform remove android）
  4、安装IOS平台环境   ionic cordova platform add ios      （如果已存在，可以先移除ionic cordova platform remove ios)
  5、web浏览器运行	   npm start
  6、安卓运行	         npm run start:android               (真机运行：npm run device:android)
  7、IOS运行	        npm run start:ios                   (真机运行：npm run device:ios)
     问题：卸载重新安装node，加上参数：--buildFlag="-UseModernBuildSystem=0" --target="iPhone-8"


源码目录：src
  page：放置所有子页面的内容
  assets：放置所有资源文件，主要是图片，程序中使用图片的路径示例：assets/image/*.png
  app: 放置程序启动时的入口文件，例如路由/main.ts
  theme: 防止全局样式文件

命名规则：
  文件/文件夹全部采用驼峰命名
  page中的文件命名参考page/login下的文件名称

页面路由规则：
  

