---
layout: post
category : playscala
tagline: "PlayScala is Great!"
tags : [playscala]
lang: zh
---
# Play在Windows的cmd窗口中中文乱码的解决办法

play在cmd 下，system.out()输出的中文都是乱码

首先，可参考：[cmd chcp命令切换字符格式](http://blog.csdn.net/xiezechang/article/details/8544292)

或参考：[在Windows的CMD中如何设置支持UTF8编码?](http://blog.csdn.net/AmosSword/article/details/26399083)

如果 chcp 65001 / chcp 936 改变cmd字符集都不行

参考：[http://www.oschina.net/news/19463/play-framework-1-2-2](http://www.oschina.net/news/19463/play-framework-1-2-2)

方法如下：
 1.  安装目录下找到C:\Program Files\play-1.2.3\framework\pym\play 目录下的application.py
 2.  修改245行中的java_args.append('-Dfile.encoding=utf-8')为 java_args.append('-Dfile.encoding=GBK')（play-1.2.4中在258行，需要用带行号自动分行的编辑打开。）
 3.  保存之后重新运行
