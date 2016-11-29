##Weex之微体验##
###前言###
  之前的几个月里，已经狠狠地体验了一把React-Native，享受着React-Native带来的快捷，也承受着踩坑的痛苦。改用一句非常流行话“从入门到直接放弃”。而随着Weex的开源，仿佛又看到了一丝希望的曙光，于是闲暇之余先尝试一番，应大领导要求做些技能储备，以便将来不时之需……
    
  闲话不多说，下面开始体验之旅
  
--
###准备工作——Weex环境搭建###
####1. 首先安装Node.js####
> $ brew install node

####2. 安装Weex的集成环境####
> $ sudo npm install -g weex-toolkit

####3. 验证是否安装成功####
> $ weex

####4. 开发工具选择####
我使用的是 **Sublime Text**，期间也使用过WebStorm，但总是莫名的卡顿所以最终放弃了。  
**Sublime Text** 高亮状态设置：**View -> Syntax -> Vue Component**

###Weex项目——“Hello Weex!”###
1. 新建一个文件 WeexDemo，在 WeexDemo 目录下用终端执行：**```weex init```**，接着按照提示输入项目名称 XXX。运行后，相应的文件便会被创建。
 
 > $ weex init
 
2. 在被创建的文件中，对于熟悉前端或是React-Native的同学而言，你会看到一个尤为亲切的文件名——**package.json**。就是它告诉我们，我们还需要安装一些局部依赖库，所以老老实实地在终端接着运行**```npm install```**。（做个说明，新版的Node.js中已经集成了npm，所以我们在安装过新版的Node.js后就无需再安装npm了。当然你也可以运行```npm -v```来查看电脑中是否安装）。

 > $ npm install

3. 执行后，WeexDemo文件中的目录如图所示
  <img src="http://ww1.sinaimg.cn/mw690/c328505fgw1fa5xg1pefbj20bc08caao.jpg" width="200" height="150">  
  · index.html——浏览器启动页面  
  · src——用来存放.we文件   
  · webpack.config.js——webpack的配置文件
  
4. 一切就绪后，我们可以查看一下这个项目最终的运行结果是什么。终端运行**```npm run serve```**  
  浏览器访问： http://localhost:8080/，这样你就会看到一个“Hello Weex!” 的页面。（如果打开的页面没显示，可以先执行npm run dev 后再执行 npm run serve ）
  
  > $ npm run serve  
    
  当然也可以更快捷一点，weex-bootstrap.we为src中的文件，我们通过运行 **weex src/weex-bootstrap.we** 直接在浏览器中查看weex-bootstrap.we的运行结果。
  > $ weex src/weex-bootstrap.we  
    
5. 运行结果如图所示  
 <img src="http://ww1.sinaimg.cn/mw690/c328505fgw1fa86ix57zpj20ta13w417.jpg" width="220" height="300"> 

###如何集成Weex到iOS工程中
作为iOS开发，当然还需要把Weex集成到iOS工程中好好体验一把。说干就干，并且有图有真相。 
 
1.项目初始化 
    <img src="http://ww4.sinaimg.cn/mw690/c328505fgw1fa7ykg30i9j214k0sotej.jpg" width="430" height="300">  
    
2.在根目录下执行 **touch Podfile**，然后编辑Podfile文件，代码如图所示
<img src="http://ww2.sinaimg.cn/mw690/c328505fgw1fa7z0ut5dtj20mk07smxv.jpg" width="430" height="130"> 

3.下载最新的WeexSDK，地址为：https://github.com/alibaba/weex，将sdk文件夹拷贝到新建的iOS项目中，和Podfile里配置的路径保持一致
<img src="http://ww3.sinaimg.cn/mw690/c328505fgw1fa7z4bsnthj20y60i2myz.jpg" width="430" height="200"> 
4.在当前目录，终端执行 **pod install**
<img src="http://ww1.sinaimg.cn/mw690/c328505fgw1fa7z4d5420j20os0bc0x5.jpg" height="200">

5.当前目录下创建一个新文件夹weex（可命令行**mkdir weex**），终端 **cd** 到weex目录下，执行**weex init**
<img src="http://ww2.sinaimg.cn/mw690/c328505fgw1fa7zbqr0mcj20js08qwhv.jpg" height="200">

6.安装局部依赖库，在当前目录下（weex目录下）执行：**npm install**

7.创建一个文件夹js，存放后面**weex src -o js**生成的js文件。为什么要生成js文件，建议去查看Weex的工作原理
<img src="http://ww3.sinaimg.cn/mw690/c328505fgw1fa852waf6mj20tu04utad.jpg" width="430" height="80">

8.将创建的js文件夹导入到Xcode工程的文件列表,注意箭头所指
<img src="http://ww3.sinaimg.cn/mw690/c328505fgw1fa852vilszj20vo0icq59.jpg" width="430" height="300"> 

9.Xcode打开workspace项目文件，在```AppDelegate.m```文件中导入头文件```#import <WeexSDK/WeexSDK.h>```。初始化代码
<img src="http://ww4.sinaimg.cn/mw690/c328505fgw1fa85tqzwg4j21040qy137.jpg" width="430" height="340">

10.运行结果如图所示  
 <img src="http://ww4.sinaimg.cn/mw690/c328505fgw1fa85tq8yahj20ku112gm4.jpg" width="200" height="356">
 
在模拟器中，没有显示网络图片是因为需要在iOS代码中自定义图片加载类，该类需要遵守```WXImgLoaderProtocol```协议，并实现协议方法。图片加载类写好后，还需在入口函数中注册。这里不做过多叙述，可以参考官方Demo。在iOS中，一个Weex页面对应一个视图控制器，在这里用的是官方封装好的```WXBaseViewController```，你也可以选择继承它写一个视图控制器，或是自己写一个视图控制器配合WXSDKInstance来实现Weex页面渲染。

###Weex-Demo演示
1. Gif动态图展示  
<img src="http://ww3.sinaimg.cn/mw690/c328505fgw1fa8qrjanrsg207o0dv1ky.gif" height=500 width=278>     

2. Weex-Demo下载地址：https://github.com/yanshiyu/Weex-Demo.git 

里面的实现功能在这里不做叙述，有兴趣的同学可以下载Demo到本地阅读。有问题的也可以在github上留言提问。
###总结
1. 因为之前入手过React-Native，所以转战Weex还是很比较轻松，但是开发之前还是需要好好研究文档，遇到复杂点功能则需要仔细研读阿里的官方Demo。
2. 目前Weex的文档还不够详细，遭到很多开发人员的吐槽，阿里内部人员回复称，他们正在“憋大招”，所以还是很期待😆。
3. Weex自身还不能加载本地图片。不过集成到iOS工程中后，可以通过自定义图片加载类同时实现网络图片和本地图片的加载。
4. 不得不说，Weex中的ListView是一个很大亮点，不仅实现了cell复用，而且数据处理方面也很简单。
5. 说实话，Weex初体验感觉还是很好的，只是Weex现在还很“年轻”，使用的用户还不是很多，以至于社区不是很活跃，相关技术博客也不是很多。希望随着Weex各方面的完善，越来越多的人可以投身到Weex开发中来，真正的做到"Write once, run everywhere"。
