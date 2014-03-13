---
layout: post
category : devtech
title:  "常用Git命令说明"
tagline: "Git is Great!"
tags : [git]
lang: zh
---

*  进入你的工作目录

	
	cd yourworkpath


*  列出所有branch，当前所在branch前面有“\*”号。

	
	git branch -a


*  切换工作库

	
	git checkout v1.5.1


*  合并另一个branch，通常是master

	
	git merge master


*  再切换回来

	
	git checkout master


*  查看当前目录情况

	
	git status


*  将当前目录中的修改提交到相应的库（branch）中

	
	git commit -m ""此处添加修改说明""


*  从远程库中合并最新状态

	
	git pull

注：当使用git pull命令的时候如果提示有本地文件修改了，无法合并的时候，我们可以放弃本地修改（注意放弃的修改将不可恢复），然后再更新；
如果不想放弃本地修改，可以先提交，然后再合并更新。
如果要放弃本地修改后更新：

	
	git reset --hard
	git pull


*  将合并后的状态并入远程库中。

	
	git push origin master


*  如果是在分支上开发则为：

	
	git push origin v1.5.1


*  取消某个文件的版本控制，但实际不删除这个文件：

	
	git rm --cached somefile.txt
	# 然后再修改目录下的.gitignore文件，添加上这个文件的相应忽略即可。


*  查看每一行的改动：

	
	git blame `<filename>`


*  git 查看一个文件的所有修改历史

	
	git log --pretty=oneline `<filename>`


*  创建一个分支并切换到这个分支工作，通常可用于临时进行一些测试性的开发，如果要保留这个dirty的分支内容，可以commit上去，随时再切换回master就象一切没发生过。

	
	git checkout -b dirty


*  如果这个测试性的开发需要被接受合并到主干master，只要切换到master再合并即可：

	
	git checkout master
	git merge dirty


*  丢弃加入缓存区（即git add的准备提交的文件）的修改

	
	git reset --hard HEAD


*  丢弃某个文件的修改，和SVN的revert命令一样

	
	git checkout -- comefile.txt


*  丢弃本地所有文件的修改，和SVN的revert命令一样

	
	git checkout -- *.*

