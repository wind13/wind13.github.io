---
layout: post
category : playscala
tagline: "PlayScala is Great!"
tags : [playscala]
lang: zh
---
# HtmlUnitDriver中javascript的支持问题

参见：[http://code.google.com/p/selenium/issues/detail?id=371\#c4](http://code.google.com/p/selenium/issues/detail?id=371\#c4)，看不到的元素或ajax异步更新的元素，都可能遇到无法取得或取得旧数据的问题。

和：[http://code.google.com/p/selenium/wiki/FrequentlyAskedQuestions\#Q:_WebDriver_fails_to_find_elements_/_Does_not_block_on_page_loads](https://code.google.com/p/selenium/wiki/FrequentlyAskedQuestions#Q:_WebDriver_fails_to_find_elements_/_Does_not_block_on_page_loa)

因为[HtmlUnitDriver默认的javascript引擎是Rhino](http://seleniumhq.org/docs/03_webdriver.html\#javascript-in-the-htmlunit-driver)，所以很多的脚本动作可能无法和在浏览器中一样，不过基本的是以Firefox为准的。

另：[How_do_I_handle_authentication_with_the_HtmlUnitDriver?](http://code.google.com/p/selenium/wiki/FrequentlyAskedQuestions\#Q:_How_do_I_handle_authentication_with_the_HtmlUnitDriver?) 如何在HtmlUnitDriver中加上用户密码验证的方法。

