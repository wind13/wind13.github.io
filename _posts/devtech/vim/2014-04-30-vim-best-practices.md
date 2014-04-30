---
layout: post
category : devtech
tagline: "Vim is Great!"
title: "Vim 使用思路、最佳实践再整理"
tags : [vim iterm2 tomorrow theme]
lang: zh
---

在 Mac OS X 上使用 Vim 真的是很享受，所以决定要用好这个工具，以下记录下本人的最佳实践：

* 首先面临一个选择，是用 MacVim 还是 终端（Terminate）？我的选择是终端，不过我进一步选择了 iTerm2，功能强大些，界面漂亮些，再加上 [Tomorrow](https://github.com/chriskempson/tomorrow-theme) 的主题，就更爽了，呵呵……选择原因如下：
  - MacVim 下载安装后，没觉得有什么特别的功能，Vim 本身主要是在终端界面使用，所以菜单、工具等一切东西都会感觉多余，况且我打开 NERD_tree 时发现在 MacVim 中显示中文不正确，标识为一个框里面一个“字”的特殊字符，默认界面是白色的，找了半天不知道怎么换成暗色主题，于是放弃，想了一下多数情况还是习惯在终端直接 vim 使用，同时还会结合一些命令 shell 来使用，那么在终端中会更方便些。而 iTerm2 就成了很好的选择，替代了默认的终端，加强了各方面的功能，换上一个 Tomorrow Night Bright 的主题，便心旷神恰了:P。iTerm2 可以开多个标签，通过 Ctrl+左/右 或 Ctrl + {/}（即 Shift + [ 或 ]） 键来切换，这样一会儿运行 shell 命令，比如启动服务、监控日志什么的，一会再切换到 Vim 编程代码就很方便了。
* 其次是 Vim 的插件管理，这里个人觉得比较好的有两种：Vundle 和 [Pathogen](https://github.com/tpope/vim-pathogen)，我选择了 Pathogen，因为熟悉 git ，所以没什么压力，很自然也很喜欢这种方式。
* 主要插件，目前使用 NERD_Tree、Vim-markdown、Vim-Mou、Vim-powerline 等，[Command-T](https://github.com/wincent/Command-T) 安装的时候出错（make: Nothing to be done for 'all'.），没解决。
