---
layout: post
category : devtech
tagline: "Vim is Great!"
title: "Vim 使用思路、最佳实践再整理"
tags : vim iterm2 tomorrow-theme
lang: zh

---

在 Mac OS X 上使用 Vim 真的是很享受，所以决定要用好这个工具，以下记录下本人的最佳实践：

* 首先面临一个选择，是用 MacVim 还是 终端（Terminate）？我的选择是终端，不过我进一步选择了 iTerm2，功能强大些，界面漂亮些，再加上 [Tomorrow](https://github.com/chriskempson/tomorrow-theme) 的主题，就更爽了，呵呵……选择原因如下：
  - MacVim 下载安装后，没觉得有什么特别的功能，Vim 本身主要是在终端界面使用，所以菜单、工具等一切东西都会感觉多余，况且我打开 NERD_tree 时发现在 MacVim 中显示中文不正确，标识为一个框里面一个“字”的特殊字符，默认界面是白色的，找了半天不知道怎么换成暗色主题，于是放弃，想了一下多数情况还是习惯在终端直接 vim 使用，同时还会结合一些命令 shell 来使用，那么在终端中会更方便些。而 iTerm2 就成了很好的选择，替代了默认的终端，加强了各方面的功能，换上一个 Tomorrow Night Bright 的主题，便心旷神恰了:P。iTerm2 可以开多个标签，通过 Ctrl+左/右 或 Ctrl + {/}（即 Shift + [ 或 ]） 键来切换，这样一会儿运行 shell 命令，比如启动服务、监控日志什么的，一会再切换到 Vim 编程代码就很方便了。
* 其次是 Vim 的插件管理，这里个人觉得比较好的有两种：Vundle 和 [Pathogen](https://github.com/tpope/vim-pathogen)，我选择了 Pathogen，因为熟悉 git ，所以没什么压力，很自然也很喜欢这种方式。
* 主要插件，目前使用 NERD_Tree、Vim-markdown、Vim-Mou、Vim-airline 等，[Command-T](https://github.com/wincent/Command-T) 安装的时候出错（make: Nothing to be done for 'all'.），今天 google 了一通，大概知道原因是因为系统的 ruby 版本和 vim 里面的 ruby 版本不一致导致编译 Command-T 与 vim 不能兼容使用，中间尝试重装了一两次，还会报出[这个错误](http://fantaxy025025.iteye.com/blog/1552009) 或[这个](https://github.com/carlhuda/janus/issues/109)
    ~~~~
    Vim: Caught deadly signal SEGV
    Vim: Finished.
    Segmentation fault
    ~~~~~
  * 解决方法[参考此文](https://wincent.com/forums/command-t/topics/425)：
    * 先将 Command-T 已经安装的删除掉。
    * 在 vim 中执行 :ruby p RUBY_VERSION 可以看到 vim 中的 ruby 编译版本为1.8.7，而系统 Mac OS X 10.9 中的 ruby 是2.0，可执行 ruby --version 看到，因此才会出现之前所述的编译错误。
    * 在 Mac OS X 系统中实际上是有 ruby1.8.7 的，因此做个软链接就方便使用了。
    * 执行sudo ln -s /System/Library/Frameworks/Ruby.framework/Versions/1.8/usr/bin/ruby /usr/bin/ruby1.8 建立 ruby1.8的软件链接。
    * 再重新 clone Command-T 到~/.vim/bundle/目录（因为我使用 Pathogen）下：git clone https://github.com/wincent/Command-T.git 。
    * 进入~/.vim/bundle/Command-T/ruby/command-t 目录，运行：ruby1.8 extconf.rb 会创建Makefile 。
    * 再运行 make 编译后就好了！
* Vim-airline 的颜色需要在.vimrc中设置：set t_Co=256，theme的更换可设置：let g:airline_theme="molokai"
* 一篇 Vim diff 比较文档的用法，[技巧：Vimdiff 使用](https://www.ibm.com/developerworks/cn/linux/l-vimdiff/)
* 一些使用 Vim 进行 Scala 编程的参考文档：
    * [My Vim setup for Scala](http://bleibinha.us/blog/2013/08/my-vim-setup-for-scala) 
    * [Coding Scala with Vim](http://derekwyatt.org/2013/12/31/coding-scala-with-vim.html)
    * [Editing Scala with vim](http://leonard.io/blog/2013/04/editing-scala-with-vim/)
    * [Vim Scala IDE (VimSIde) built upon ENSIME](https://github.com/megaannum/vimside)
