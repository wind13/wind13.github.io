---
layout: post
category : play1x
title: Xml 域名空间识别问题
tagline: "PlayScala is Great!"
tags : [play1x, xml, namespace, getXML]
lang: zh
---

相关文档见：[官方ticket任务#823](https///play.lighthouseapp.com/projects/57987/tickets/823-xpath-namespaces-with-httpresponsegetxml )

Yes, this is correct. In the .getXML function the namespace ness is not set.  
是的，有这个问题。在.getXML方法中允许命名空间（namespace）没有设置。

This line should be changed from:  
这一行应该从这样：

	:::java
	DocumentBuilder builder = DocumentBuilderFactory.newInstance().newDocumentBuilder();


to:  
变成：

	:::java
	DocumentBuilderFactory xmlFact = DocumentBuilderFactory.newInstance();
	xmlFact.setNamespace(true);
	DocumentBuilder builder = xmlFact.newDocumentBuilder();


The same problem exists in the XML lib in the getDocument function:  
同样的问题在XML的包里的getDocument方法中也存在：

	:::java
	DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();
	dbf.setNamespace(true); //Add this line!

