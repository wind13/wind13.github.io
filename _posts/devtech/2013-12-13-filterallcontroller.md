---
layout: post
category : playscala
tagline: "PlayScala is Great!"
tags : [playscala]
lang: zh
---
# 在Play!中如何实现类似过滤器的功能？

如果是单个Controller要实现过滤，只需写一个public static 的方法，加上@Before注解即可达到执行所有action前先执行这个方法的目的。

如果想实现全局即整个站点的action都被过滤，就需要写个BaseController（名字随便起，如SuperController，Application等）继承 Controller，在这里面写@Before的方法。然后其他的Controller都继承自BaseController即可。"

