---
layout: post
categories : devtech vim
title: 我的Mac OS X 开发环境和 Vim 的设置
tagline: "Vim is Great!"
tags : vim vimrc 
lang: zh

---

## 系统设置

* 需要将CapsLock键改为Esc键，以方便Vi习惯。方法：安装 [PCKeyboardHack](https://pqrs.org/macosx/keyremap4macbook/pckeyboardhack.html.en)，将CapsLock键的值从51改为53即可。

## Eclipse 设置

* 添加Vrapper插件，以便使用Vi习惯。update url: http://vrapper.sourceforge.net/update-site/stable
* 添加Js的编辑环境，使用nodeclipse插件，update url: http://www.nodeclipse.org/updates/
* 添加Html的编辑环境，在Eclipse的Marketplace中查找Html Editor，安装即可。
* 添加Html的快捷编辑方式[Emmet](http://emmet.io/)，在Eclipse的Marketplace中查找Emmet，安装即可（似乎Nodeclipse包含这项）。
* 添加UML的绘制工具，参考[这里](http://www.umlchina.com/Tools/Newindex1.htm)的列表，我选择了[AmaterasUML](http://amateras.sourceforge.jp/cgi-bin/fswiki_en/wiki.cgi?page=AmaterasUML)，下载zip文件解压后将三个jar文件放到eclipse/plugin/目录下即可。

## Vim 设置

* 添加[Pathogen插件](https://github.com/tpope/vim-pathogen)，以便管理其他插件。
* 添加[NERDTree插件](https://github.com/scrooloose/nerdtree)，以便使用目录树功能。
* 添加[Airline插件](https://github.com/bling/vim-airline)，在下面会出现一个漂亮的状态栏。
* 添加[Emmet-vim插件](https://github.com/mattn/emmet-vim)，以便快捷编辑html代码。

