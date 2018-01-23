---
layout: post
category : playscala
tagline: "PlayScala is Great!"
tags : [playscala]
lang: zh
---
# Ubuntu下Eclipse完美安装方案

## Ubuntu下直接apt-get安装Eclipse的问题

*  直接安装的版本较低，我用Ubuntu13.10安装的是Eclipse3.8，而要用ScalaIDE，最好是4.x以上版本。

*  其次是Eclipse的菜单显示问题，点击后看不到下拉菜单。

## 完美解决方案

*  直接从eclipse.org官方网站[下载](http://eclipse.org/downloads/)自己喜欢的版本，欲Java编程可选择Eclipse IDE for Java Developers。

*  解压到个人喜欢的软件目录即可。

*  使用此命令 sudo vim /usr/share/applications/eclipse.desktop 建立应用启动如下：

	
			[Desktop Entry]
			Name=Eclipse
			Comment=c project manage software
			Exec=/home/sam/develop/eclipse/eclipse
			Icon=/home/sam/develop/eclipse/icon.xpm
			Terminal=false
			Type=Application
			Categories=GNOME;GTK;Office;Eclipse


*  注意替换你自己的路径，这样就ok了，在Dash主页主就可以找到eclipse的图标启动了。
