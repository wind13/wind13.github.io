---
layout: post
category : playscala
tagline: "PlayScala is Great!"
tags : [playscala]
lang: zh
---
# 移除Cache可以有时间参数吗？

是的，可以，使用下面这样的语句即可：

	:::java
	Cache.set("some", null, 0)

其中最后一个参数是时间，单位是秒。详见源代码。

