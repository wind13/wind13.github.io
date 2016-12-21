---
layout: post
category : devtech
tagline: "DevOps Collection!"
title: "DevOps技术相关"
tags : [DevOps]
lang: zh
---

# DevOps技术相关

## 相关链接

  - [Ansible中文权威指南](http://www.ansible.com.cn/) 所有重复的IT工作可以被自动化并分享给其他组员。
  - [Choosing a deployment tool - ansible vs puppet vs chef vs salt](https://gist.github.com/jaceklaskowski/bd3d06489ec004af6ed9)

## 相关观点

  - Puppet is a similar tool to Chef
  - Vagrant is a tool for developers and a toy for admins, you can quickly stand up a development environment with vagrant, e.g. I want to develop an android app, grab an IDE from vagrant, I think it will be overtaken by Docker soon.
  - 我现在使用的是阿里容器服务: https://cs.console.aliyun.com ，配合阿里的虚拟主机以及代码托管(code.aliyun.com)，实在不能再方便。
  - 创业圈的docker服务，我比较推荐http://daocloud.io，很久以前我还去他们家上海总部做过使用开发demo，这是一家很有工程师文化的企业，而且里面确实有好几个国内docker界顶级玩家。
  - 假如你用的是VPS或者AWS什么的 首选Rex http://rexify.org/ 次选Ansible http://ansible.cc/

## Docker > Vagrant

那针对国内可以流畅使用docker但无法正常使用vagrant的情况，作如何处理呢？

我们团队的解决方案是将服务器部署的docker编排脚本(docker-compose)直接修改参数以适应Local开发。每次开发前，docker-compose up -d，再配以各类脚本。结果是，这样开发起来比在硅谷用Vagrant还要爽！！Vagrant所有的操作都可以用在docker中一样做，例如:
复制文件: vagrant scp; docker cp
ssh: vagrant ssh; docker-compose exec CONTAINER /bin/sh
所以，到最后，我们发现，开发部署都用docker还有一个额外好处，vagrant的开发环境到部署环境还是存在差异的，而我们开发用的起docker集群的编排脚本无需经过调试直接复制到服务器端就能一行命令解决部署: 
docker-compose up -d


What you developed is what will be deployed. 谢谢!

作者：大杰哥
链接：https://www.zhihu.com/question/32324376/answer/123239426
来源：知乎
著作权归作者所有，转载请联系作者获得授权。