---
layout: post
category : playscala
tagline: "PlayScala is Great!"
tags : [playscala]
lang: zh
---
# 定制Trac界面

[原文地址](http://trac-hacks.org/wiki/TracInterfaceCustomization)

##### 介绍

该页面旨提供有关如何定制Trac界面的建议. 话题涵盖了编辑HTML模板和CSS文件, 但不包含程序代码本身. 这些话题想要向用户展示如何更改Trac的外观来满足他们特定的要求. 

##### 项目Logo和图标

定制Trac界面最简单的部分是logo和站点的图标. 他们都可以通过[trac.ini](http://trac-hacks.org/wiki/TracIni)的设置进行配置.

logo或者图标应放在项目环境目录中的一个''htdocs''目录中(注意: 用Trac0.9之前的版本创建的项目, 你需要创建该目录).

 ''注意: 实际上你可以把logo和图标放在服务器的任何地方(只要通过服务器能访问到就可以), 并且在配置中使用他们的绝对URL或服务器的相对URL.''

在你的[trac.ini](http://trac-hacks.org/wiki/TracIni)中的配置相应的段:

#### Logo

将`src`设置改为`site/`, 后面跟着你的图像文件的名字. 应修改''宽度''和''高度''设置来匹配你的图像的尺寸(Trac的chrome处理器用""site/""对应位于项目目录的""htdocs"", 用""common/""对应普通文件).

	
	[header_logo]
	src = site/my_logo.gif
	alt = My Project
	width = 300
	height = 100


#### 图标

图标应该是`.gif`或`.ico`格式的大小16x16的图像. 将`icon`选项修改为`site/`, 后面跟着你的图标文件的名称. 在你的Web浏览器中, 图标一般会显示在站点的URL旁边或者在''书签''菜单中.

	
	[project]
	icon = site/my_icon.ico


'''注意''', 该图标会被 IE 忽略, 它只接受主机根路径下名为''favicon.ico''的文件. 要使项目图标在IE和其他浏览器中都起作用的话, 你可以将图标储存在主机的根路径中, 并按照下列方法在``trac.ini``中引用它:

	
	[project]
	icon = /favicon.ico


##### 站点页眉和页脚

在每个Trac项目的环境目录中, 应该有个叫templates的目录. 该目录包含文件site_header.cs和site_footer.cs. 用户可以通过添加所需的HTML标记到这些文件中, 来定制他们的Trac站点. 这两个文件的内容分别放在网站中每页的开始的标签`<body>`和结尾的标签`</body>`中.

这些文件可以包含静态HTML, 当然, 如果用户想要有动态的内容, 他们可以使用页面内部的[ClearSilver](http://www.clearsilver.net/)模板语言. 当你需要查看模板中有哪些可用变量, 将查询串''?hdfdump=1''添加到你的Trac站点的URL中. 这样将显示出模板数据的结构化视图.

##### 站点样式表

调整一个Trac网站的布局的主要方法是添加[CSS](http://www.w3.org/TR/REC-CSS2/)样式规则来覆盖默认的规则. 最好是通过编辑项目环境的`templates`目录下的`site_css.cs`文件来实现. 该模板中的内容会插入到Trac生成的每个HTML页面的`<style type="text/css">``</style>`中.

虽然你可以将定制样式规则直接添加到`site_css.cs`文件中, 我们建议你只引用一个外部样式表, 以便使浏览器能缓存此CSS文件, 而不是每次都传输这些样式规则.

下面的例子会导入一个位于根`style`目录下的样式表:

	
	@import url(/style/mytrac.css);


你可以使用一个!ClearSilver变量来引用存储在项目环境的`htdocs`目录中的样式表:

	
	@import url(`<?cs var:chrome.href ?>`/site/style.css);


##### 项目列表

如果你在使用Trac执行多个项目时, 你可以用一个定制!ClearSilver模板来显示项目的列表.

下面是Trac用来显示各项目链接的列表的基本模板. 对于不能加载的项目, 它会显示一个错误信息. 你可以将它作为你自己的索引模板的一个起点.

	:::html
	#!text/html
	`<html>`
	`<head>``<title>`Available Projects`</title>``</head>`
	`<body>`
	 `<h1>`Available Projects`</h1>`
	 `<ul>`<?cs
	 each:project = projects ?>`<li>`<?cs
	  if:project.href ?>
	   `<a href=""<?cs var:project.href ?>`"" title=""`<?cs var:project.description ?>`"">
	    `<?cs var:project.name ?>``</a>`<?cs
	  else ?>
	   `<small>``<?cs var:project.name ?>`: `<em>`Error`</em>` `<br />`
	   (`<?cs var:project.description ?>`)`</small>`<?cs
	  /if ?>
	  `</li>`<?cs
	 /each ?>
	 `</ul>`
	`</body>`
	`</html>`


一旦你创建了自己的定制模板, 你需要配置Web服务器, 来告诉Trac该模板的具体位置:

对于 [FastCGI](http://trac-hacks.org/wiki/TracFastCgi):

	
	FastCgiConfig -initial-env TRAC_ENV_PARENT_DIR=/parent/dir/of/projects \
	              -initial-env TRAC_ENV_INDEX_TEMPLATE=/path/to/template


对于 [mod_python](http://trac-hacks.org/wiki/TracModPython):

	
	PythonOption TracEnvIndexTemplate /path/to/template


对于 [CGI](http://trac-hacks.org/wiki/TracCgi):

	
	SetEnv TRAC_ENV_INDEX_TEMPLATE /path/to/template



##### 主要模板

!ClearSilver
也可以使用自己修改的Trac !ClearSilver模板. 注意, 不推荐使用该技术, 因为它使得升级Trac有很多问题: 很不幸的是, 在模板和程序代码间存在几个依赖关系, 例如表单域的名称, 模板数据的结构等, 这些在不同版本的Trac中都可能有变化.

如果你一定要使用修改的模板, 将默认模板目录(通常是在`$prefix/share/trac/templates`中)中的模板文件复制到项目环境中的`templates`目录中. 然后修改这些副本, 达到你想要的效果。
