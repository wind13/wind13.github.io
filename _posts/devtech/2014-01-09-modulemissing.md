---
layout: post
category : playscala
tagline: "PlayScala is Great!"
tags : [playscala]
lang: zh
---
# 无法加载pdf等module的问题

简单地加载pdf的Module，如官网所述：

	
	play -> pdf 1.0

然而却提示无法加载。

尝试运行：

	
	play install pdf-1.0

提示：Cannot fetch the modules list from %%http://www.playframework.org/modules%%

后在playframework群中找到答案，是因为要用.com域名才能获取。

需要修改此文件：{PLAY_HOME}/framework/dependencies.yml
将最后面库路径的.org改为.com即可。

另外也可以自建仓库，如下：

	
	require
	   - play
	   - play1 -> pdf 1.0
	repositories
	   - play1modules:
	       type: http
	       artifact: "http://module.yourcompany.com/play1/modules/[module]-[version].zip"
	       contains:
	          - play1 -> *

之后就是从官网下载相应的zip文件放到你的网站相应目录%%http://module.yourcompany.com/play1/modules/%%下即可。
