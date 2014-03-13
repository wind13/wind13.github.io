---
layout: post
category : playscala
tagline: "PlayScala is Great!"
tags : [playscala]
lang: zh
---
# 如何同时使用http和https协议

首先看[官方文档](http://www.playframework.org/documentation/1.2.3/production#https)

用openssl命令生成自己的签名文档

	
	openssl genrsa 1024 > host.key
	openssl req -new -x509 -nodes -sha1 -days 365 -key host.key > host.cert

生成签名时需回答类似这样的问题：

	
	Country Name (2 letter code) [XX]:
	State or Province Name (full name) []:
	Locality Name (eg, city) [Default City]:
	Organization Name (eg, company) [Default Company Ltd]:
	Organizational Unit Name (eg, section) []:
	Common Name (eg, your name or your server's hostname) []:
	Email Address []:

最终会得到两个文件：host.key和host.cert

然后在application.conf文件中配置如下：

	
	http.port=9000
	https.port=9443
	
	# X509 certificates
	certificate.key.file=conf/host.key
	certificate.file=conf/host.cert
	# In case your key file is password protected
	certificate.password=secret
	trustmanager.algorithm=JKS


[原问题及回答](http://stackoverflow.com/questions/6114104/play-framework-https-and-http-at-the-same-time)

You just need to have both http.port and https.port in the application.conf file. For the links you want to be different from the normal site, use the @@ notation:

你只需要在application.conf文件中配置http.port和https.port，然后在页面上使用如下链接即可：

	
	@@{Controller.action().secure()} =>https://...

	
	@@{Controller.action()} => http://

