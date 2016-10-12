---
layout: post
title: "微信小程序相关学习"
description: ""
category: "devtech/js"
tags: []
---
{% include JB/setup %}

## 收集链接
- [微信小应用资源汇总整理](https://github.com/Aufree/awesome-wechat-weapp/blob/master/README.md){:target="_blank"}
- [开发微信小程序入门前](https://segmentfault.com/a/1190000006980941){:target="_blank"}
- [微信小程序设计指南](https://mp.weixin.qq.com/debug/wxadoc/design/){:target="_blank"}
- [CSS参考手册](http://css.doyoe.com/){:target="_blank"}
- [首个微信小程序开发教程！](http://gold.xitu.io/entry/57e34d6bd2030900691e9ad7){:target="_blank"}
- [微信小程序简易教程](https://mp.weixin.qq.com/debug/wxadoc/dev/?t=1474644089359){:target="_blank"}
- [微信web开发者工具](http://mp.weixin.qq.com/wiki/10/e5f772f4521da17fa0d7304f68b97d7e.html){:target="_blank"}
- [微信小程序分享1：开发环境的配置](http://mp.weixin.qq.com/s?__biz=MzAwNjMzOTU4Mg==&mid=2650540030&idx=1&sn=ee44ecdfa21ec2a423e640d755efbd3d&chksm=8306496fb471c079fcc1b6a136c362ea7e133e8a3832044b27778df17b7ca48e135fb632d827&scene=1&srcid=0924wMyuh4B9aAK3x2D3J30A#rd){:target="_blank"}
- [wechat-weapp-gank 一个图片App示例](https://github.com/lypeer/wechat-weapp-gank){:target="_blank"}
- [wxapp-cli: 一个简单的微信小程序的小（jiao）手架](https://github.com/MeCKodo/wxapp-cli){:target="_blank"}
- [通过微信小程序看前端](https://segmentfault.com/a/1190000007006479){:target="_blank"}

## 知识点

- rpx 是微信定义的像素单位，动态布局标量。
- 执行顺序： App Launch-->App Show-->onLoad-->onShow-->onReady。
  * App.onLaunch
  * App.onShow
  * index.onLoad（首次）
  * index.onShow（由App.onShow驱动）
  * index.onReady（我准备好互动了，可以操作了）

  * 进入后台时：
    * app.onHide
    * index.onHide

  * 恢复前台显示时：
    * app.onShow
    * index.onShow

- [破解方法](https://segmentfault.com/a/1190000006980941#articleHeader2){:target="_blank"} （测试发现有问题，不能用。）
