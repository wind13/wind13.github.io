---
layout: post
category : playscala
tagline: "PlayScala is Great!"
tags : [playscala]
lang: zh
---
# 停止SSH，用Play!吧

Created 星期六 25 二月 2012

先看一段Playframework热情交流群（QQG：168013302）里的聊天记录：

木马@学生 09:59:13
   实现个功能..要调用service接口的方法, 方法又在他的impl里面实现, impl里面又是调用dao层接口, 
   dao层接口又是在dao的impl里面实现, dao的impl实现又是由hibernate访问的数据库, `
木马@学生 09:59:28
   真心蛋都碎了`
Freewind@play2 10:00:29
   为什么要这么多接口？
木马@学生 10:00:41
   学校的项目...SSH2
Freewind@play2 10:01:04
   话说我前公司也是这样的，看着都累
木马@学生 10:01:25
   对了, 还没说上层的 action,拦截分配 do了返回,
木马@学生 10:01:31
   头都大了`
木马@学生 10:01:57
   还前端的 jquery, ajax访问数据库, 再经过这些框架的时候`
Snake 10:01:59
   ssh2是这样的
Snake 10:02:13
   冠名弱耦合
木马@学生 10:02:14
   那叫一个个都要问候到啊...
Freewind@play2 10:03:01
   你能不能改代码，能删的都删了
木马@学生 10:03:25
   我就写个登陆功能, 就要搞这么多`
世风十三@用中 10:06:12
   我公司也是实现个简单的java app，用了无数接口，我重构时都删了。  
Freewind@play2 10:07:18
   都是当年spring惹的祸
Snake 10:09:00
   大项目是有需要的
Snake 10:09:29
   小项目用ssh有点小题大作
木马@学生 10:10:09
   学校总是搞最大的框架, 做最小的项目`
世风十三@用中 10:10:22
   算不算是接口滥用  
木马@学生 10:10:34
   说出来能唬人啊`
木马@学生 10:10:41
   写出来, 全是英文啊`
Snake 10:11:11
   现在外面很多的企业都要求ssh熟悉精通，所以学校也只能这样

应该说使用接口主要是基于开放封闭原则，即对扩展开放，而对修改封闭。而实际项目中，通常的开发是不断地修改完善，最终达到理想效果。所以开放封闭原则应该说不适用于项目内部，而是针对于打包对外服务的情况，所谓“接口”也正是对外来说的，如果你的项目是对外提供公用类库或是框架包等的，那就要严格定义准确的接口规范，并且尽量保持对外接口的稳定，在做系统分析时就要深入调研，考虑周到，对未来的变化有充分的预估。而相反如果是整个项目仅用于对内的应用，而所有代码都是自己控制，未来也没有与其他组群的协同问题，那就没有必要做到层层都接口，直接实现也未尝不可。

多数时候，初学者都是在对着SSH的框架照猫画虎，画的时候也不太深思为什么要这样做，只道是一种开发规范罢了，遵守便是，没什么好说，然而实际上SSH框架的创造者是思考了太多的可能性和各种问题后总结出的经验结晶，这其中考虑遇到最为复杂的情况类似大型企业复杂应用的开发等，而对于大多数中、小型项目而言，多少有点用牛刀杀鸡的感觉。

相对的，Play framework 则是从一开始就是针对Web应用开发来设计的，借鉴了其他很多优秀框架（如ROR）的思想，直接解决了中小型项目快速开发的问题，同时也提供了Module的机制，给予了无限的扩展空间，当然也适用于大型的企业应用项目，只要架构师在具体应用上掌握了一定的技巧和经验，开发起来还是相当敏捷和舒爽的！:)

所以，如果你们的团队是擅长Java这门语言的，你们的应用是基于Web的应用系统，你们有权决定使用什么样的技术路线和框架的话，那么强烈建议使用Playframework，放弃SSH的繁杂和冗余吧，在Playframework的世界里，你会接触到最新的技术思想，最敏捷的开发理念，最高效的代码实现！Welcome to Playframework world!
