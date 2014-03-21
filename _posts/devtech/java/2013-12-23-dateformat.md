---
layout: post
category : playscala
tagline: "PlayScala is Great!"
tags : [playscala]
lang: zh
---
# String类型 格式 yyyy-MM-dd HH:mm:ss 转为 Date类型

通常情况下可用Date.valueOf(String)直接转换;

String类型格式："yyyy-MM-dd"
Date.valueOf("yyyy-MM-dd")

例：

	:::java
	String sd = "2012-01-12";
	Date sdate = Date.valueOf(sd);


但当String类型格式为"yyyy-MM-dd HH:mm:ss"时

则需使用：

	:::java
	SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss"); 
	sdf.parse(String);
	需要添加try/catch


例：

	:::java
	String sd = "2012-01-12 11:20:21";
	
	try {
	     SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss"); 
	     Date sdate =sdf.parse(sd);
	    } catch (ParseException e) {
	     e.printStackTrace();
	    }


SimpleDateFormat支持的其它格式:

	
	"yyyy.MM.dd G 'at' HH:mm:ss z"  2001.07.04 AD at 12:08:56 PDT  
	"EEE, MMM d, ''yy"  Wed, Jul 4, '01  
	"h:mm a"  12:08 PM  
	"hh 'o''clock' a, zzzz"  12 o'clock PM, Pacific Daylight Time  
	"K:mm a, z"  0:08 PM, PDT  
	"yyyyy.MMMMM.dd GGG hh:mm aaa"  02001.July.04 AD 12:08 PM  
	"EEE, d MMM yyyy HH:mm:ss Z"  Wed, 4 Jul 2001 12:08:56 -0700  
	"yyMMddHHmmssZ"  010704120856-0700  
	"yyyy-MM-dd'T'HH:mm:ss.SSSZ"  2001-07-04T12:08:56.235-0700  

