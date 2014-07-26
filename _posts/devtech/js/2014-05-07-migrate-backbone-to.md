---
layout: post
categories : devtech js
title: Backbone 路向何方？
tagline: "Js is Great!"
tags : javascript backbone angularjs
lang : zh

---

### 情况背景

使用 Backbone 开发 Web App 之后，特别是较大型的项目，会发现因为缺少一些关键的功能（如：双向绑定等）代码越来越多且复杂，从而导致后期扩展和更新越来越困难，因此从基本框架层面需要考虑改善，以便使整个框架更有条理，更易组织，更易扩展、复用、重构等……

目前可以想到的有三个方向：

  1. 在 Backbone 基础上结合如下一些增强框架实现双向绑定、易用的模板等机制，从而带来整个框架底层的改善。
     * [Marionette](http://marionettejs.com) Backbone.Marionette 组合应用库，用于简化大型 Javascript 应用。
     * [TroraxJS](http://thoraxjs.org/) 将 Backbone 和 Handlebars 结合的框架，适合大型可扩展的 Web 应用。
     * [RivetsJS](http://www.rivetsjs.com/) 轻量强大的数据模板绑定的解决方案，可与 Backbone 等合用。
     * [ChaplinJS](http://chaplinjs.org/) 可与 Backbone 结合使用，也可以与[Exoskeleton](http://exosjs.com/)（可替代 Backbone 系列，仅 8k） 结合使用。
     * [Backbone.stickit](http://nytimes.github.io/backbone.stickit/) Backbone的一个双向绑定插件。
     * [Backbone.databinding](https://www.npmjs.org/package/backbone.databinding) npmjs 开发的双向绑定插件。
     * [PubNub](http://www.pubnub.com/) 可在整个应用及所有客户端上同步Model和Collections的解决方案。

  2. 转移到 EmberJS 上，使用 Handlebar 的模板机制。
  3. 转移到 AngularJS 上，全新的理念和编程思路。

### 转移前的分析

* [Migration from Backbone to AngularJS - how difficult it is?](http://stackoverflow.com/questions/16039966/migration-from-backbone-to-angularjs-how-difficult-it-is) 这个讨论中提到一个5000行的 backbone 应用转移到 angular 要5天，估计还要对两个框架都很熟悉的情况下吧。所有的 Backbone 的 model 和 collection 都要转成 angular 的 services ，转移 html 和 Mustache 模板相对简单些，转移 jquery plugin 会比较麻烦，但如果简单的话就可以转到 [angular-ui](http://angular-ui.github.io/) 上了。
* [Migrating from Backbone JS to AngularJS](http://stackoverflow.com/questions/14875731/migrating-from-backbone-js-to-angularjs) 这个讨论中提到Angular 可以使用 POJO 式的 Model，是双向绑定的，model 是放在 scope 中的，如 $scope.model.foo = bar 这样。
* [How do I “think in AngularJS” if I have a jQuery background?](http://stackoverflow.com/questions/14994391/how-do-i-think-in-angularjs-if-i-have-a-jquery-background) 这里有个精彩的回答，关于如何避免 jQuery 式的思考而改用 AngularJS 式的思考。
* [Using Backbone models with AngularJS](http://stackoverflow.com/questions/16895758/using-backbone-models-with-angularjs) 这里讨论了在 AngularJS 中如何使用 Backbone 的 model 的问题，其中给出了一些解决方案的思路。可以用于项目从 Backbone 转型到 AngularJS 的一个思路，平滑过渡？！：）
  * [Backbone 和 AngularJS 共用的示例](http://jsbin.com/ivumuz/2/edit)
  * [Backbone 和 AngularJS 共存于项目是可行的](http://stackoverflow.com/questions/11663677/how-to-introduce-angularjs-into-an-existing-app-that-uses-backbone-jquery)
  * [另一个通过继承结合 Backbone 和 Angular 的方案示例](http://jsfiddle.net/HszLj/)
  * 使用 [Restangular](https://github.com/mgonto/restangular) 与 REST 的资源后台连接，是否真的比 Angular 的方法更好呢？这里有个[示例](http://jsfiddle.net/HszLj/)，需要再研究，使用了 [MongoLab](https://mongolab.com) 线上 MongoDB 数据服务实现了简单的项目增删改查功能。
