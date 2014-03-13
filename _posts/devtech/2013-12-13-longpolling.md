---
layout: post
category : playscala
tagline: "PlayScala is Great!"
tags : [playscala]
lang: zh
---
# Play!支持Comet-style或Long-polling这样的请求


*  参考[官方文档](http://www.playframework.com/documentation/1.2.7/asynchronous)

*  核心实现思想：通过在action中使用await(...);可以使http请求暂停在服务端，直到有符合的结果才返回。
