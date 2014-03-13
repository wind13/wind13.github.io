---
layout: post
category : playscala
tagline: "PlayScala is Great!"
tags : [playscala]
lang: zh
---
# HQL 中 left join 的写法

用 Play 查询数据时，遇到关联对象的查询时，需要使用 left join 的语句，但与我们习惯的 SQL 语句不同，HQL 的写法和思路是面向对象的，所以下面就记录一些可用的例句供实际使用时参考：

	
	查询教的学生中有年龄大于30的老师
	hql = "select distinct o from Teacher o, Student r left join r.teacher h where r.age>=?";

