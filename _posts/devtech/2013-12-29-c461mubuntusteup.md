---
layout: post
category : playscala
tagline: "PlayScala is Great!"
tags : [playscala]
lang: zh
---
# 联想C461M安装Ubuntu13.10问题

	
	本人的笔记本：联想旭日C461M，买来后安装的是Vista系统，用起来很不习惯，速度也慢，现在喜欢上了Linux的系统，
	不喜欢Windows系统，WinXP微软也放弃维护了，于是前一年安装Fedora系统，使用还算正常，但是发现软件升级总是出
	现问题，老是不顺利，19升20时直接失败。所以前两天尝试安装Ubuntu系统，发现界面、软件升级等都很爽，但是……
	
	安装Ubuntu112.04LTS系统后发现几个问题：
	一、没有无线网络：
	http://mikezero.blog.163.com/blog/static/17527658320131161054480/
	首先查看网卡状态，终端命令：
	sudo lshw -C network
	再查看网卡型号：
	sudo lspci -vnn | grep 802.11b
	或：
	sudo lspci -vnn | grep BCM4311
	
	下载：http://zh-cn.broadcom.com/support/802.11/linux_sta.php
	解压：/home/sam/download/hybrid-v35-nodebug-pcoem-6_30_223_141
	执行：make
	再执行：sudo insmod wl.ko
	结果没有反应，一直执行不动的样子。
	于是再下载了readme.txt：http://zh-cn.broadcom.com/docs/linux_sta/README.txt
	运行以下语句：
	On Ubuntu, you will need headers and tools.  Try these commands:
	# apt-get install build-essential linux-headers-generic
	# apt-get build-dep linux
	
	二、看不到输入法图标：
	使用以下两句：
	killall ibus-daemon
	ibus-daemon -d
	即可显示，但现在问题是启动后不显示。
	
	三、找不到五笔输入法：
	sudo apt-get install ibus-table-wubi
	然后重启可以找到海峰五笔。
	
	四、未升级到LibreOffice4，默认是3，看到网上有升级方法：
	sudo add-apt-repository ppa:libreoffice/libreoffice-4.0
	sudo apt-get update
	sudo apt-get dist-upgrade
	
	不过因为无线网络这个致命问题，而没有解决，纠结下一步做何打算。
	
	========================================================
	第二天，决定安装了Ubuntu13.10，结果还是无法连接wifi，五笔输入法没有找到
	killall ibus-daemon
	ibus-daemon -d
	后，重启正常了。
	另外 LibreOffice默认就是4，这点很开心。
	
	而尝试修复无线网络时，下载的hybrid-v35-nodebug-pcoem-6_30_223_141.tar.gz文件，
	在解压时提示：设置所有者出错，不允许的操作。
	后尝试重启，重新下载文件后，可以正常解压。但运行make报错，失败。
	
	再次查阅本机自带的帮助文件，找到无线网络驱动的内容，看到这个网址链接：
	http://wireless.kernel.org/en/users/Drivers/b43#supported
	其中尝试运行了以下命令：
	sudo apt-get install firmware-b43-installer
	似乎下载安装了：http://www.lwfinger.com/b43-firmware/broadcom-wl-5.100.138.tar.bz2
	尝试重启后依然无效。
	
	最后再尝试使用ndiswrapper调用windows的驱动程序的方法：
	sudo apt-get install ndisgtk
	查看这个文档：https://help.ubuntu.com/community/WifiDocs/Driver/Ndiswrapper#bcm43xx
	将/etc/modprobe.d/blacklist 中的bcm43xx相关语句屏蔽，尝试是否可以运行。
	
	下载了官网的驱动Broadcom802.11_Wlan_XP.exe文件，按装文档所说解压该文件失败，即使是安装了cabextract
	和 unshield也都不行。
	
	============================================================
	第二天 下午 ～
	再次查询google，发现此文：
	http://linuxg.net/how-to-fix-broadcom-bcm4311-wireless-driver-on-ubuntu-and-linux-mint/
	参考此文：http://blog.chinaunix.net/uid-22002627-id-3478362.html
	执行相关命令：
	1.进入驱动所在目录，即bcmwl5.inf和bcmwl5.sys所在目录
	ndiswrapper –I bcmwl5.inf
	2.查看驱动是否安装
	ndiswrapper –l
	3.写入配置文件
	ndiswrapper –m
	ndiswrapper –ma
	ndiswrapper –mi
	4.加载模块
	modprobe ndiswrapper
	
	当运行modprobe时，卡死，郁闷，每次运行这个命令就卡死～
	不过，好在重启之后，搞定了，识别了无线网络！！！折腾了两天终于好了。
	最终应该正解是：http://blog.chinaunix.net/uid-22002627-id-3478362.html
	
	＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
	另外，还有个问题：点重启时不能自动重启，停在“Ubuntu”的Logo界面很久不动，只好手工关机再开机。

