---
layout: post
category : playscala
tagline: "PlayScala is Great!"
tags : [playscala]
lang: zh
---
# Javascript框架

	* 综合框架
		* [arale.js](http://aralejs.org/) 支付宝的前端基础类库 Arale 基于 SeaJS 和 jQuery 等，目前新构建 2.0 版本。 demo: [计算器](http://seajs.org/docs/demo/calculator/)
		* [KISSY](http://docs.kissyui.com/) 是由淘宝前端攻城师们发起创建的一个开源 JS 类库。
		* [Ender.js](http://ender.no.de/) - Ender is a full featured package manager for your browser. 作者 [Dustin Diaz](http://www.dustindiaz.com/)
	* 模块加载框架 [Javascript模块化](http://www.phphubei.com/article-4153-1.html)
		* [Seajs](http://seajs.org/) 由支付宝团队开源，基于（[CommonJS](http://www.commonjs.org/impl/)的一种实现，类似的模块加载框架：,,）和jquery的前端框架
		* BravoJS
		* [Require.js](http://requirejs.org/)
		* FlyScript
		* [AlmondJS](https///github.com/jrburke/almond) A minimal AMD API implementation for use after optimized builds 
		* [Amdjs](https///github.com/amdjs/amdjs-api/wiki/AMD) The Asynchronous Module Definition (AMD) API specifies a mechanism for defining modules such that the module and its dependencies can be asynchronously loaded.
		* [ozjs](https///github.com/dexteryy/OzJS) 土豆网的开源模块加载js库
	* 模板框架
		* [Handlebars.js](http://handlebarsjs.com/) provides the power necessary to let you build semantic templates effectively with no frustration.
		* [mustache.js](http://mustache.github.com/) - Logic-less templates with Javascript.
		* [Eco](https///github.com/sstephenson/eco/): Embedded CoffeeScript templates
		* [Jade](http://jade-lang.com/): Node Template Engine
	* MVC框架 （初步选择Emberjs，Knockoutjs 和 Canjs）
		* [The Top 10 Javascript MVC Frameworks Reviewed](http://codebrief.com/2012/01/the-top-10-javascript-mvc-frameworks-reviewed/)
		* [TodoMVC](https///github.com/addyosmani/todomvc) 「[官网](http://todomvc.com/)」A common learning application for popular JavaScript MV* frameworks
		* [最佳实践之 Javascript MVC](http://xhh.me/2012/06/best-practices-js-mvc.html)
		* [Backbone.js](http://documentcloud.github.com/backbone/)
			* [Backbone.js vs Ember.js](http://www.johng.co.uk/2012/01/11/backbone.js-vs-ember.js/)
			* [What are the key differences between Ember.js (formerly SproutCore 2.0) and Backbone.js?](http://www.quora.com/What-are-the-key-differences-between-Ember-js-formerly-SproutCore-2-0-and-Backbone-js)
		* [Emberjs](http://emberjs.com/)
			* [学习心得](https///github.com/alipay/arale/issues/48)
			* [Ember/Handlebars template precompilation with Play](http://eng.netwallet.com/2012/04/25/emberhandlebars-template-precompilation-with-play/)
			* [Ember data](https///github.com/emberjs/data#readme) 与RubyOnRails结合较好
			* [ember-rest](https///github.com/cerebris/ember-rest) Simple RESTful resources in Ember.js
			* [Beginning Ember.js on Rails](http://www.cerebris.com/blog/2012/01/24/beginning-ember-js-on-rails-part-1/)
			* [The architecture of Ember.js apps - data](http://jzajpt.github.com/2012/01/24/emberjs-app-architecture-data.html)
			* [ember.js and the server](http://stackoverflow.com/questions/8948213/ember-js-and-the-server)
			* [AngularJS vs Emberjs](http://discuss.emberjs.com/t/angularjs-vs-emberjs/1029/4) 英文贴，讨论哪个更好，其中提到AngularJS的机制有2000个绑定的限制，做大型系统更应该选Emberjs。
			* [Fire Up Ember.js](https///peepcode.com/products/emberjs) 代码实例录像，需购买？
			* [EMBLR, THE EMBER.JS TUMBLR](http://emberjs.tumblr.com/)
				* [Experimenting with the Architecture of Ember.js](http://techiferous.com/2012/05/experimenting-with-the-architecture-of-ember-js/)
		* [knockoutjs](http://knockoutjs.com/) Simplify dynamic JavaScript UIs by applying the Model-View-View Model (MVVM) pattern
			* 优点：HTML中的data-binding属性可以方便地与其他模板框架并用。如：[Django合用的比较案例](http://blog.bootstraptoday.com/2012/01/23/emberjs-vs-knockoutjs/)
			* [在线练习学习网站](http://learn.knockoutjs.com/)
			* [BootStrap网站使用 knockoutjs的文章](http://blog.bootstraptoday.com/2012/01/23/emberjs-vs-knockoutjs/) ，说明了Knockoutjs比Emberjs更适合改造网站的原因。
		* [AngularJS](http://angularjs.org/) HTML enhanced for web apps! MIT-licensed, Super-powered by Google!
			* [angularui](http://angular-ui.github.io/bootstrap/)
			* [一篇从Ember.js迁移到AngularJS的文章](http://beust.com/weblog/2012/12/29/migrating-from-ember-js-to-angularjs/)。介绍了AngularJs更加可扩展的好处。
			* [基于jQuery UI Autocomplete Widget的ui-autocomplete](http://www.angularjs.cn/A059)
			* [Ember.js or Angular.js?](https///news.ycombinator.com/item?id=5230636) 英文论坛一贴
			* [Choosing a JS MVC Framework: Angular.js vs Ember.js](http://dybskiy.com/js-mvc-angular-vs-ember/)
		* [Canjs](http://canjs.us/) is a MIT-licensed, client-side, JavaScript framework that makes building rich web applications easy. 与其他框架共用性最佳，[据评测性能也最佳](http://jsperf.com/canjs-ejs-performance/5) [还有这个测试](http://jsperf.com/tabs-timing-test) [这项显示knockoutjs在Live binding方面更好些](http://jsperf.com/canjs-ejs-performance)。
		* [Batman.js](http://batmanjs.org/) is a framework for building rich web applications with CoffeeScript or JavaScript.
		* [JavaScriptMVC](http://www.javascriptmvc.com/) is an open-source framework containing the best ideas in jQuery development. It guides you to successfully completed projects by promoting best practices, maintainability, and convention over configuration.
		* [PureJS](http://www.purejs.org/) effortless. javascript.The missing API for Javascript.
		* http://obvious.github.com/matador/
		* http://derbyjs.com/ interesting
		* http://flatironjs.org/ interesting
		* http://railwayjs.com/ pretty bad.
	* 服务器端（并客户端）框架
		* [Nodejs](http://nodejs.org/)
			* [三种Javascript(NodeJS)异步编程代码模式比较](http://www.ituring.com.cn/article/62609)
			* [在Node.js 中用 Q 实现Promise – Callbacks之外的另一种选择](http://www.ituring.com.cn/article/54547)
		* [Meteor](http://meteor.com/) is a full stack framework
		* [Yahoo! Mojito](https///github.com/yahoo/mojito) is the JavaScript library implementing Cocktails, a JavaScript-based on-line/off-line, multi-device, hosted application platform.
		* [Wakanda](http://www.wakanda.org/) 服务器，开发工具studio和框架。
	* 测试框架
		* [Jasmine](http://pivotal.github.com/jasmine/)
		* [QUnit](http://docs.jquery.com/QUnit) is a powerful, easy-to-use, JavaScript test suite.
	* UI框架
		* [Aliceui](http://aliceui.com/) 是支付宝前端样式解决方案小组的项目代称。[Alice Css书写规范](http://aliceui.com/css-spec/) [支付宝CSS样式架构](http://www.slideshare.net/sofish/css-8943211) [样式库构建规范](http://aliceui.com/alice-css-guide/)
		* [D3.js](http://d3js.org/) is a JavaScript library for manipulating documents based on data. 二维图像生成框架
		* [Wijmo](https///wijmo.com/purchase/) 商业全面控件UI，包含类似Excel控件图表控件SpreadJS等企业级UI控件，价格：$895。
	* 绘图报表
		* [jQuery Sparklines](http://omnipotent.net/jquery.sparkline/#s-about) 很特别的在一行内显示一个小曲线或柱状图等的功能。
		* [Peity](http://benpickles.github.com/peity/) 也是一行内的小图形功能。
		* [RGraph](http://www.rgraph.net/) 功能很全面，对公益或个人使用免费，有商业授权。
		* [Highcharts JS](http://www.highcharts.com/) 功能强大，对公益或个人使用免费，有商业授权，单网站$80。
		* [jQuery HighchartsTable](http://pmsipilot.github.com/jquery-highchartTable-plugin) 免费MIT授权，但基于Highcharts JS，基本的线图、柱图等。
		* [canvasXpress](http://canvasxpress.org/) 使用HTML5的<canvas>标签实现，功能全面，LGPL免费授权。
		* [JointJs](http://www.jointjs.com/demos.html) 用于创建完全互动式图表，如组织架构图、UML状态图、UML类图等。
		* [Elycharts](http://elycharts.com/examples) 是一个易于使用的，可定制的JavaScript图表绘制组件。这个组件可用于绘制大部分常用的图表类型包括：line, column, are, bar, pie, sparklines and combinations。图表利用SVG/VML技术生成，基于jQuery + Raphaël开发。
	* 脚本压缩打包工具
			* [TUICompiler](https///github.com/dexteryy/TUICompiler) 土豆网的js打包工具