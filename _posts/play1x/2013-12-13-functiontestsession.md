---
layout: post
category : playscala
tagline: "PlayScala is Great!"
tags : [playscala]
lang: zh
---
# FunctionTest中如何取得session的值

原文摘抄自：[https://groups.google.com/d/msg/play-framework/-/iQLX-uLwHWsJ](https///groups.google.com/d/msg/play-framework/-/iQLX-uLwHWsJ) （可能因墙访问不了……我是在邮件列表中收集的）

#### 需求和问题

原问及简单翻译说明如下：

Given a simple action:【简单给一个action如下：】

	:::java
	    public static void testAction() {
	      session.put("worked", "yes");
	    }


I want to test that the session is set:【我试着测试这个session是否被设置：】

	:::java
	  @Test
	  public void setsTheSession() {
	    Response response = GET("/test");
	    assertEquals("yes", Scope.Session.current().get("worked"));
	  }

But Scope.Session.current() always returns an empty map. Any clues?
【但Scope.Session.current()总是返回一个空的Map。有什么办法吗？】

#### 关键回答

原答及简单翻译如下：

I don't think that works because you are not in the context of a server request when in a test.  You are just acting as a regular browser making a GET request.\\
【我不认为可以那样写，因为在一个test中你不在服务请求的上下文中。你只是象一个普通的浏览器那样发送了一个GET请求。】\\
If you want to set a cookie from a Controller you do this:\\
【如果你想在Controller中设置cookie，你可以象这样：】\\
`response.setCookie("mycookie", "myvalue", "1d");`{java}
Then in your test you can do:\\
【然后在你的测试中，你可以这样：】\\

	:::java
	Http.Response response = GET("/home/cookie");
	assertEquals("myvalue", response.cookies.get("mycookie").value);

For sessions you should take a look at this first:\\
【而session方面，你就应该先看一下这个：】\\
http://www.playframework.org/documentation/1.2.3/controllers#session

"It's important to understand that Session and Flash data are not stored in the server but are added to each subsequent HTTP Request, using the Cookie mechanism. So the data size is very limited (up to 4 KB) and you can only store String values."\\
【理解这点很重要：Session和Flash的数据并不是保存在服务端，而是通过Cookie的机制加在每一次的HTTP请求中。所以数据的大小是受限制的（最多到4KB）并且你只可以保存String字串值。】\\
They are of course signed so they can't be changed.  If I write session.put("testcookie", "brian") I get this in the response header:\\
【它们当然是被加密的，所以你不能修改。如果我写session.put("testcookie", "brian")，那么我将在response的header中得到：】\\
`"PLAY_SESSION=31a4e4777b5950d78b9f3f88b02dfdb2361b5699-%00testcookie%3Abrian%00;Path=/"`

This makes the job of testing actual session variables a little harder.  I haven't seen anything in the test code that does this for you.  You have to go back to the play code to decode the session cookie to check for what you originally wanted to do.  The function in playframework\framework\src\play\mvc\Scope.java restore() isn't accessible so it looks like you have to either use reflection of some sort to call it or write your own session parse function like this (uses the secret from the application.conf to decode):\\
【这使得在测试中使用session值变得有点困难。我在测试的代码中没找到什么可以帮你做这件事的办法。你必须回到Play!的代码去解码那个session cookie以便得到原本的值。这个方法就在playframework\framework\src\play\mvc\Scope.java restore()是不可访问的，所以可能你只好使用类似反射的方法去调用它或者照着写一个你自己的session parse 方法（使用application.conf中的secret码来解码），参考：】\\
https://gist.github.com/1224015

Then you can assert your session code pretty much as you were doing:\\
【然后你就可以用类似下面的办法校验你的session值了：】\\

	:::java
	@Test
	public void setsTheSession() throws UnsupportedEncodingException
	{
	   Http.Response response = GET("/home/cookie");
	   Scope.Session session = parseSession(response.cookies.get("PLAY_SESSION").value);
	   assertEquals("yes", session.get("worked"));
	}


On a side note I have switched my functional tests to JWebUnit using the HtmlUnit driver.  It has more assert helpers, xpath html parsing and uses rhino for js parsing
... but alas you still have to "decode" the PLAY_SESSION either way.\\
【另，我已经将我的functional test转到使用HtmlUnit driver的JWebUnit了。它有更多的校验工具，xpath的html解析工具和rhino的js解析工具等……当然，你还是可以使用"decode"去处理PLAY_SESSION的问题。】

个人建议：在Play!中最好还是只做Model层的单元测试即可，在Controller层中尽量少写业务逻辑代码，方法都往Model层集中，如果项目需要可加上Selenium的Web测试就足够了，实际感觉Functional Test有点鸡肋，不用也罢！

