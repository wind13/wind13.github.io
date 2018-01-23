---
layout: post
category : play1x
title: Play!中如何用module组织多个相关项目？
tagline: "PlayScala is Great!"
tags : [play1x, module]
lang: zh
---


*  首先按业务需求划分为多个应用，应用就是用 play new xxx来创建的。

*  其次将公用部分划分为多个子项目或称子模块，就是用 play new-module创建的。

*  这些项目均并列导入eclipse中，应用引用相应需要的子项目，需要在application.conf中添加，有多个就添加多行：
<pre><code>
    	module.base=../base
    	module.common=../common
</code></pre>
*  在eclipse的项目属性中添加引用的子项目即可。

*  注：关键在于项目规划合理，子项目或公用项目中model层可以分包，如：com.xxx.pack，而controllers和views也可以分包，但要慎重使用，在引用时也有一点小特殊写法。
