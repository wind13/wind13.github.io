---
layout: post
categories : devtech uml
title: UML tools of Mac OSX 苹果系统下的建模工具
tagline: "UML is Great!"
tags : [Mac osx, uml, tools]
lang: zh
---

From: <http://wind13.lofter.com/post/b2b9b_fda5d7>

今天工作时需要设计一下程序的架构，即建模工作，这件事用纯文本似乎较难完成（本人是纯文本的 funs）。用手绘软件（Gimp, SketchBookExpress）也不太方便，失量图软件（Inkscape，LibreOfficeDraw）也要从画方框开始也不方便，毕竟是模块化的图形，还是用专用的建模工具比较方便。 

这方面工具不少，很多还有生成代码的功能，这个功能个人倒是不太需要，只是有个示意图可以引导思路就好了，毕竟有了思路后写代码时还会有很多变化，其实也就跟原图不太一致了，非要同步图与代码倒是给自己增加了很多麻烦和顾虑。 

之前用过 StarUML 工具，还不错，简单易用，生成的图样也比较美观，不过那个是在 Window 系统上的（见[12款相关工具][1]），现在用 Mac 了，当然应该找一款适合的工具了！ 

   [1]: http://developer.51cto.com/art/200911/161814.htm

大概看到所列的工具分为几类，一类是独立的工具，基于某个系统或跨平台系统，另一类是基于 Java 平台而可以跨平台使用，第三类就是 Eclipse 或 NetBean 的插件。 

首先选择尝试 [ArgoUML][2] 工具，官网上直接有针对 Mac 的下载链接，下载下来解压运行，居然提示已损坏，无法使用，郁闷，重新下载再试一次，结果还是一样，只好放弃。  


   [2]: http://argouml.stage.tigris.org/

其次选择尝试 [MDT-UML2Tools][3] 插件，在[Update页面][4]使用 update 链接 http://download.eclipse.org/modeling/mdt/uml2tools/updates/releases/ 用 Eclipse 的 Install new software 功能无法下载，于是另外找到了[下载地址][5]（Eclipse 的官网组织确实有点混乱），下载了 zip 压缩包，直接在 Eclipse 里安装，也许是网络速度慢的原因，整个安装和下载过程超级慢！一个小时有没有？安装完在 Eclipse 中找不到在哪儿，郁闷，放弃。

   [3]: http://wiki.eclipse.org/MDT-UML2Tools
   [4]: http://wiki.eclipse.org/MDT-UML2Tools/Updates
   [5]: http://www.eclipse.org/modeling/mdt/downloads/index.php?project=uml2tools&showAll=0&showMax=5

另外，国内的一款工具 [Trufun Plato UML2][6] 有免费版，也有商业版，个人还是倾向使用完全免费的工具比较省心，也就没再尝试了。

   [6]: http://www.trufun.net/www1/Ch/DownView.asp?ID=35&SortID=8

法国一款 [BOUML][7] 也是商业软件，无限时版居然要[150欧元][8]，还是算了。

   [7]: http://www.bouml.fr/
   [8]: http://www.bouml.fr/pricing.html

这个 [Papyrus UML][9] 看介绍不错，但是官网进不去，难道是停止维护了？

   [9]: http://www.papyrusuml.org

这个 [Umbrello UML][10] 看介绍也不错，不过是基于 KDE 技术的，不知道 Mac 方便安装不，未尝试。

   [10]: http://umbrello.kde.org/

这个 [TinyUML][11] 开源 Java 工具，特别小巧，jar 文件启动，界面功能都非常简单，只支持画类图，感觉更适合作为实现方式的源代码研究。

   [11]: http://sourceforge.net/projects/tinyuml/

在开源中国社区可以找到[120多种UML建模工具][12]。 

   [12]: http://www.oschina.net/project/tag/177/uml

有人提到 [astah][13] 不错，于是下载（社区免费版 72.5 MB）尝试，结果下载失败放弃。

   [13]: http://www.astah.net/

在 Eclipse 里面的 [Marketplace][14] 搜索到更多的 UML 插件，选择尝试 UML Designer，在这里安装似乎方便很多，但是也安装了很长时间，这网速还能再慢点吗？ 

   [14]: http://marketplace.eclipse.org/search/site/UML

还发现 [yEd Graph Editor][15]，这个流程图绘制工具，有 Mac 版本，于是下载尝试，结果下载失败放弃。

   [15]: http://www.yworks.com/

还有 [Diagramo][16] 这个 HTML5 实现的，可以[在线试用][17]，也可以下载轻量的本地运行，还有可以部署到 Web 服务器上的 LAMP 版本，区别在于是否能保存、导出图片等功能。是个学习 HTML5 的好案例。

   [16]: http://diagramo.com/
   [17]: http://diagramo.com/editor/editor.php

后找到 AmaterasUML，似乎看起来正是我想要的，简洁明快，于是下载试用，发现这个项目2012年7月后就再没有维护了，安装方式还是古老的将 jar 文件拷贝到 plugin 目录，需要 JDT 和 GEF 模块的支持，长远考虑还是放弃。

类似的还有 [GreenUML][18]，也是一样2011年后似乎也没再维护了，放弃。

   [18]: http://green.sourceforge.net/index.html

最终找到了 [CodeUML][19] 这个在线 UML 工具，发现原来是基于 [PlantUML][20] 实现的，去它的官网一看，发现了 Eclipse 的插件，安装尝试，通过输入文本生成 UML 图形，这个思路太合我的胃口了，纯文本控嘛！同时这个项目是组件式的，可用于多种语言开发，极具参考学习价值！ 

   [19]: http://www.codeuml.com/
   [20]: http://plantuml.sourceforge.net/


