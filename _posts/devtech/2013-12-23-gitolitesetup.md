---
layout: post
category : playscala
tagline: "PlayScala is Great!"
tags : [playscala]
lang: zh
---
# CentOS下使用Gitolite架构Git服务的步骤

 1.  在服务端创建专用用户，如：git，可考虑不设置密码，从而无法用密码登录服务器。
 2.  在管理员电脑上创建管理员密钥对，并（通过U盘或root账号）拷贝到服务器上，之后添加到git用户目录的.ssh/authorized_keys文件中。从而达到无需密码从管理员电脑直接ssh到服务器git上的效果。
 3.  使用git clone下载Gitolite。
 4.  运行gl-system-install安装到服务器，此时会看到git用户目录中多出了bin, share, repositories等目录。
 5.  从客户端下载git clone 管理目录：gitolite-admin。
 6.  添加用户公钥\*.pub到keydir目录，配置用户权限在conf/gitolite.conf文件中。
