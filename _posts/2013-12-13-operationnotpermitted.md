---
layout: post
category : playscala
tagline: "PlayScala is Great!"
tags : [playscala]
lang: zh
---
# Operation not permitted 执行权限的问题

在Linux系统中，正好项目放在原Windows的Fat32盘上，于是在执行play eclipsify的时候会报 Operation not permitted的错。

临时使用的话，只要使用root权限就可以正常执行。而Fat32的盘在Linux下是无法进行权限设置的，好像设置后还是无法记录下权限信息，所以要彻底解决这个问题就要将Fat32转为NTFS才行。
