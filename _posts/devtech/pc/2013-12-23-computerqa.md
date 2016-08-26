---
layout: post
category : pc
tags : [pc]
lang: zh
---
# 电脑使用及编程知识问答

## 网易闪电邮和网易邮箱助手有什么区别，如何选择？

> 网易闪电邮是功能比较全面的邮箱客户端，可以同时支持其他邮箱的邮件收发，类似Foxmail和Outlook这样的邮箱软件。而网易邮箱助手则是个轻客户端，只能连接网易的邮箱，提供来信提醒和桌面预览等功能。如果你还想用客户端收发其它邮箱，那就只能选择网易闪电邮了，如果你只有网易的邮箱，又不想安装个太大的软件，只想要个轻巧的来信提醒小工具，那么网易邮箱助手是不错的选择。

## 比较好的邮件客户端软件是什么？

> 最常见的是Foxmail，其他还有很多，网易闪电邮也比较简洁好用。但个人最推荐的还是Thunderbird，跨平台Windows和Linux系统都通用，安装上Thunderbird Conversations插件，Lightning插件和Provider for Google Calendar插件，这个邮件客户端软件就变得非常实用，让人爱不释手了。有日历、任务功能，邮件组织象gmail一样舒服，同时日历还可以跟google日历同步，这样你的手机什么的终端只要连上google日历就是一套非常好的GTD工具了！
## Html5实现多文件上传的方法？

> [基于html5的可预览多图片ajax上传](http://www.zhangxinxu.com/wordpress/2011/09/%E5%9F%BA%E4%BA%8Ehtml5%E7%9A%84%E5%8F%AF%E9%A2%84%E8%A7%88%E5%A4%9A%E5%9B%BE%E7%89%87ajax%E4%B8%8A%E4%BC%A0/)
> [使用HTML5实现多文件上传](http://jinghuainfo.iteye.com/blog/1193280)

## 升级Fedora后启动不了报File not found错怎么办？

> 一般情况是grub2未设置好，启动不了。
> 可先用 Fedora16 LiveCD 或 Fedora16 DVD 启动进入shell，然后找到升级了的Fedora 16的挂载盘，如果是DVD修复的话，会挂在 /mnt/syslinux（记不清了）下，则执行：


	chroot /mnt/syslinux

> 执行以下命令可修复grub2：


	grub2-mkconfig -o /boot/grub2/gub.cfg
	grub2-install /dev/sda

> 如果执行第二句时报：Your embedding area is unusually small...，则一般是因为引导区被占用了，比如安装了Win7等，则可执行：


	grub2-install --force /dev/sda

> 这样就强制写入grub2的引导信息了，一般情况重启就正常了！

## 主流代码仓库的选择，主要有哪些？


*  Subversion 集中式（目前还在大量使用的，熟悉的人员较多）

*  Git 分布式（更先进些，特别适用于开源项目，如 github 网站）

*  从Subversion转到Git有相应的工具和方法，参考：[转换你的 Subversion 到 Git](http://leeiio.me/convert-subversion-to-git/) 和 [如何将SVN仓库转换为Git仓库](http://rongjih.blog.163.com/blog/static/3357446120107111449543/)

*  [CentOS下使用Gitolite架构Git服务的步骤](GitoliteSetup)
