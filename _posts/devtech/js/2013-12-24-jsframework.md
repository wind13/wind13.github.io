---
layout: post
categories : devtech js
title: Javascript框架及相关知识
tagline: "Js is Great!"
tags : javascript framework angularjs
lang: zh

---
## 综合框架

  * [arale.js](http://aralejs.org/){:target="_blank"} 支付宝的前端基础类库 Arale 基于 SeaJS 和 jQuery 等，目前新构建 2.0 版本。 demo: [计算器](http://seajs.org/docs/demo/calculator/){:target="_blank"}
  * [KISSY](http://docs.kissyui.com/){:target="_blank"} 是由淘宝前端攻城师们发起创建的一个开源 JS 类库。
  * [Ender.js](http://ender.no.de/){:target="_blank"} - Ender is a full featured package manager for your browser. 作者 [Dustin Diaz](http://www.dustindiaz.com/){:target="_blank"}

## 模块加载框架 [Javascript模块化](http://www.phphubei.com/article-4153-1.html){:target="_blank"}

  * [Seajs](http://seajs.org/){:target="_blank"} 由支付宝团队开源，基于（[CommonJS](http://www.commonjs.org/impl/){:target="_blank"}的一种实现，类似的模块加载框架：,,）和jquery的前端框架
  * BravoJS
  * [Require.js](http://requirejs.org/){:target="_blank"}
  * FlyScript
  * [AlmondJS](https///github.com/jrburke/almond){:target="_blank"} A minimal AMD API implementation for use after optimized builds
  * [Amdjs](https///github.com/amdjs/amdjs-api/wiki/AMD){:target="_blank"} The Asynchronous Module Definition (AMD) API specifies a mechanism for defining modules such that the module and its dependencies can be asynchronously loaded.
  * [ozjs](https///github.com/dexteryy/OzJS){:target="_blank"} 土豆网的开源模块加载js库

## 模板框架

  * [Handlebars.js](http://handlebarsjs.com/){:target="_blank"} provides the power necessary to let you build semantic templates effectively with no frustration.
  * [mustache.js](http://mustache.github.com/){:target="_blank"} - Logic-less templates with Javascript.
  * [Eco](https///github.com/sstephenson/eco/){:target="_blank"}: Embedded CoffeeScript templates
  * [Jade](http://jade-lang.com/){:target="_blank"}: Node Template Engine

## MVXX框架 （初步选择Emberjs，Knockoutjs 和 Canjs）

  * [The Top 10 Javascript MVC Frameworks Reviewed](http://codebrief.com/2012/01/the-top-10-javascript-mvc-frameworks-reviewed/){:target="_blank"}
  * [TodoMVC](https///github.com/addyosmani/todomvc){:target="_blank"} 「[官网](http://todomvc.com/){:target="_blank"}」A common learning application for popular JavaScript MV* frameworks
  * [最佳实践之 Javascript MVC](http://xhh.me/2012/06/best-practices-js-mvc.html){:target="_blank"}
  * [Vue.js v2.0 中文](http://vuefe.cn/){:target="_blank"} [官网](http://vuejs.org/){:target="_blank"}
  * [Backbone.js](http://documentcloud.github.com/backbone/){:target="_blank"}
    * [Backbone.js vs Ember.js](http://www.johng.co.uk/2012/01/11/backbone.js-vs-ember.js/){:target="_blank"}
    * [What are the key differences between Ember.js (formerly SproutCore 2.0) and Backbone.js?](http://www.quora.com/What-are-the-key-differences-between-Ember-js-formerly-SproutCore-2-0-and-Backbone-js){:target="_blank"}
    * [Marionette](http://marionettejs.com){:target="_blank"} Backbone.Marionette 组合应用库，用于简化大型 Javascript 应用。
    * [TroraxJS](http://thoraxjs.org/){:target="_blank"} 将 Backbone 和 Handlebars 结合的框架，适合大型可扩展的 Web 应用。
    * [RivetsJS](http://www.rivetsjs.com/){:target="_blank"} 轻量强大的数据模板绑定的解决方案，可与 Backbone 等合用。
    * [ChaplinJS](http://chaplinjs.org/){:target="_blank"} 可与 Backbone 结合使用，也可以与[Exoskeleton](http://exosjs.com/){:target="_blank"}（可替代 Backbone 系列，仅 8k） 结合使用。
  * [Emberjs](http://emberjs.com/){:target="_blank"}
    * [学习心得](https///github.com/alipay/arale/issues/48){:target="_blank"}
    * [Ember/Handlebars template precompilation with Play](http://eng.netwallet.com/2012/04/25/emberhandlebars-template-precompilation-with-play/){:target="_blank"}
    * [Ember data](https///github.com/emberjs/data#readme){:target="_blank"} 与RubyOnRails结合较好
    * [ember-rest](https///github.com/cerebris/ember-rest){:target="_blank"} Simple RESTful resources in Ember.js
    * [Beginning Ember.js on Rails](http://www.cerebris.com/blog/2012/01/24/beginning-ember-js-on-rails-part-1/){:target="_blank"}
    * [The architecture of Ember.js apps - data](http://jzajpt.github.com/2012/01/24/emberjs-app-architecture-data.html){:target="_blank"}
    * [ember.js and the server](http://stackoverflow.com/questions/8948213/ember-js-and-the-server){:target="_blank"}
    * [AngularJS vs Emberjs](http://discuss.emberjs.com/t/angularjs-vs-emberjs/1029/4){:target="_blank"} 英文贴，讨论哪个更好，其中提到AngularJS的机制有2000个绑定的限制，做大型系统更应该选Emberjs。
    * [Fire Up Ember.js](https///peepcode.com/products/emberjs){:target="_blank"} 代码实例录像，需购买？
    * [EMBLR, THE EMBER.JS TUMBLR](http://emberjs.tumblr.com/){:target="_blank"}
      * [Experimenting with the Architecture of Ember.js](http://techiferous.com/2012/05/experimenting-with-the-architecture-of-ember-js/){:target="_blank"}
  * [knockoutjs](http://knockoutjs.com/){:target="_blank"} Simplify dynamic JavaScript UIs by applying the Model-View-View Model (MVVM) pattern
    * 优点：HTML中的data-binding属性可以方便地与其他模板框架并用。如：[Django合用的比较案例](http://blog.bootstraptoday.com/2012/01/23/emberjs-vs-knockoutjs/){:target="_blank"}
    * [在线练习学习网站](http://learn.knockoutjs.com/){:target="_blank"}
    * [BootStrap网站使用 knockoutjs的文章](http://blog.bootstraptoday.com/2012/01/23/emberjs-vs-knockoutjs/){:target="_blank"} ，说明了Knockoutjs比Emberjs更适合改造网站的原因。
  * [AngularJS](http://angularjs.org/){:target="_blank"} HTML enhanced for web apps! MIT-licensed, Super-powered by Google!
    * [angularui](http://angular-ui.github.io/bootstrap/){:target="_blank"}
    * [一篇从Ember.js迁移到AngularJS的文章](http://beust.com/weblog/2012/12/29/migrating-from-ember-js-to-angularjs/){:target="_blank"}。介绍了AngularJs更加可扩展的好处。
    * [基于jQuery UI Autocomplete Widget的ui-autocomplete](http://www.angularjs.cn/A059){:target="_blank"}
    * [Ember.js or Angular.js?](https///news.ycombinator.com/item?id=5230636){:target="_blank"} 英文论坛一贴
    * [Choosing a JS MVC Framework: Angular.js vs Ember.js](http://dybskiy.com/js-mvc-angular-vs-ember/){:target="_blank"}
  * [Canjs](http://canjs.us/){:target="_blank"} is a MIT-licensed, client-side, JavaScript framework that makes building rich web applications easy. 与其他框架共用性最佳，[据评测性能也最佳](http://jsperf.com/canjs-ejs-performance/5){:target="_blank"} [还有这个测试](http://jsperf.com/tabs-timing-test){:target="_blank"} [这项显示knockoutjs在Live binding方面更好些](http://jsperf.com/canjs-ejs-performance){:target="_blank"}。
  * [Batman.js](http://batmanjs.org/){:target="_blank"} is a framework for building rich web applications with CoffeeScript or JavaScript.
  * [JavaScriptMVC](http://www.javascriptmvc.com/){:target="_blank"} is an open-source framework containing the best ideas in jQuery development. It guides you to successfully completed projects by promoting best practices, maintainability, and convention over configuration.
  * [PureJS](http://www.purejs.org/){:target="_blank"} effortless. javascript.The missing API for Javascript.
  * http://obvious.github.com/matador/
  * http://derbyjs.com/ interesting
  * http://flatironjs.org/ interesting
  * http://railwayjs.com/ pretty bad.

## 服务器端（并客户端）框架

  * [Nodejs](http://nodejs.org/){:target="_blank"}
    * [三种Javascript(NodeJS)异步编程代码模式比较](http://www.ituring.com.cn/article/62609){:target="_blank"}
    * [在Node.js 中用 Q 实现Promise – Callbacks之外的另一种选择](http://www.ituring.com.cn/article/54547){:target="_blank"}
  * [Meteor](http://meteor.com/){:target="_blank"} is a full stack framework 基于 Node.js，服务端与客户端都使用 javascript。
  * [Yahoo! Mojito](https///github.com/yahoo/mojito){:target="_blank"} is the JavaScript library implementing Cocktails, a JavaScript-based on-line/off-line, multi-device, hosted application platform.
  * [Wakanda](http://www.wakanda.org/){:target="_blank"} 服务器，开发工具studio和框架。

## 辅助工具及测试框架

  * [我终于弄懂了各种前端build工具](https://www.sdk.cn/news/5412){:target="_blank"}
  * [Jasmine](http://pivotal.github.com/jasmine/){:target="_blank"}
  * [QUnit](http://docs.jquery.com/QUnit){:target="_blank"} is a powerful, easy-to-use, JavaScript test suite.
  * [YEOMAN](http://yeoman.io/){:target="_blank"} 脚手架工具，与下面的 Grunt 和 Bower 工具合并使用。
  * [GruntJS](http://gruntjs.com/){:target="_blank"} 自动化任务的工具，可以压缩脚本、编译 coffescript、单元测试等。是一个基于任务的 JavaScript 项目命令行构建工具。
  * [Bower](http://bower.io/){:target="_blank"} 依赖管理工具
  * [JSHint](http://www.jshint.com/){:target="_blank"} 是一个 JavaScript 的代码质量检查工具，主要用来检查代码质量以及找出一些潜在的代码缺陷。
  * [Phantom JS](http://phantomjs.org/){:target="_blank"} 是一个服务器端的 JavaScript API 的 WebKit。其支持各种Web标准： DOM 处理, CSS 选择器, JSON, Canvas, 和 SVG。主要用于无首自动化测试、网页抓图或转 pdf 等、操控网页自动化、网络监控（类似YSLow）等方面。

## UI框架

  * [Aliceui](http://aliceui.com/){:target="_blank"} 是支付宝前端样式解决方案小组的项目代称。[Alice Css书写规范](http://aliceui.com/css-spec/){:target="_blank"} [支付宝CSS样式架构](http://www.slideshare.net/sofish/css-8943211){:target="_blank"} [样式库构建规范](http://aliceui.com/alice-css-guide/){:target="_blank"}
  * [D3.js](http://d3js.org/){:target="_blank"} is a JavaScript library for manipulating documents based on data. 二维图像生成框架
  * [Wijmo](https///wijmo.com/purchase/){:target="_blank"} 商业全面控件UI，包含类似Excel控件图表控件SpreadJS等企业级UI控件，价格：$895。
## 绘图报表
  * [jQuery Sparklines](http://omnipotent.net/jquery.sparkline/#s-about){:target="_blank"} 很特别的在一行内显示一个小曲线或柱状图等的功能。
  * [Peity](http://benpickles.github.com/peity/){:target="_blank"} 也是一行内的小图形功能。
  * [RGraph](http://www.rgraph.net/){:target="_blank"} 功能很全面，对公益或个人使用免费，有商业授权。
  * [Highcharts JS](http://www.highcharts.com/){:target="_blank"} 功能强大，对公益或个人使用免费，有商业授权，单网站$80。
  * [jQuery HighchartsTable](http://pmsipilot.github.com/jquery-highchartTable-plugin){:target="_blank"} 免费MIT授权，但基于Highcharts JS，基本的线图、柱图等。
  * [canvasXpress](http://canvasxpress.org/){:target="_blank"} 使用HTML5的&lt;canvas&rt;标签实现，功能全面，LGPL免费授权。
  * [JointJs](http://www.jointjs.com/demos.html){:target="_blank"} 用于创建完全互动式图表，如组织架构图、UML状态图、UML类图等。
  * [Elycharts](http://elycharts.com/examples){:target="_blank"} 是一个易于使用的，可定制的JavaScript图表绘制组件。这个组件可用于绘制大部分常用的图表类型包括：line, column, are, bar, pie, sparklines and combinations。图表利用SVG/VML技术生成，基于jQuery + Raphaël开发。

## 脚本压缩打包工具

  * [TUICompiler](https///github.com/dexteryy/TUICompiler){:target="_blank"} 土豆网的js打包工具

## 脚本牛人博客

  * [Evan Wallace](http://madebyevan.com/){:target="_blank"} HTML5和 Javascript 高手，擅长 WebGL 等技术。

## 其他相关

  * [Bootstrap中文官网](http://cnbootstrap.com/){:target="_blank"}
  * [指令式Callback和函数式Promise：对nodejs的一声叹息](http://www.ituring.com.cn/article/50561){:target="_blank"}
  * [七个富应用JavaScript框架](http://blog.geoinker.com/2012/12/29/seven-javascript/){:target="_blank"}
  * [UIBox](http://www.uibox.in/){:target="_blank"} 一个方便搜索Javascript UI 框架的网站。
  * [TodoMVC](https://github.com/tastejs/todomvc){:target="_blank"}各种js框架写的TODO示例，帮助选择适合自己的js框架。
  * [Yahoo开放的Json资源](http://query.yahooapis.com/v1/public/yql?q=show%20tables&format=json){:target="_blank"}
  * [JSONP详解](http://www.cnblogs.com/yuzhongwusan/archive/2012/12/11/2812849.html){:target="_blank"}
  * [jQuery的deferred对象详解](http://www.ruanyifeng.com/blog/2011/08/a_detailed_explanation_of_jquery_deferred_object.html){:target="_blank"}
  * [NodeJs中用node-webkit开发多平台的桌面客户端](http://www.baidufe.com/item/1fd388d6246c29c1368c.html){:target="_blank"}

## CoffeeScript

  * [《Smooth CoffeeScript》](http://autotelicum.github.io/Smooth-CoffeeScript/interactive/interactive-coffeescript.html){:target="_blank"}

## 脚本示例收集

  * [图片选择框](http://odyniec.net/projects/imgareaselect/examples.html){:target="_blank"}
  * [布仿真特效](http://andrew-hoyer.com/experiments/cloth/){:target="_blank"}
  * [数字用英文怎么读](http://andrew-hoyer.com/experiments/numbers/){:target="_blank"}
  * [粒子系统](http://andrew-hoyer.com/experiments/particle_system/){:target="_blank"}
  * [水滴下流系统](http://andrew-hoyer.com/experiments/dripsessions/){:target="_blank"}
  * [机械手臂系统](http://andrew-hoyer.com/experiments/robotarm/){:target="_blank"}
  * [字母雨系统](http://andrew-hoyer.com/experiments/rain/){:target="_blank"}

## 正则表达式在线测试：

  * [REGex TESTER](http://www.regextester.com/){:target="_blank"}
  * [JavaScript 正则表达式在线测试工具](http://tools.jb51.net/tools/regex.asp){:target="_blank"}
  * [regexpal](http://regexpal.com/){:target="_blank"} 0.1.4 — a JavaScript regular expression tester
