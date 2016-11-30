---
layout: post
title: "Ionic 2 相关学习"
description: ""
category: "devtech/js"
tags: [angular]
---
{% include JB/setup %}

## 基础

 - [ionic2文档整理](http://rainey.space/2016/04/06/Ionic2_Chinese_Document/)

## 问题

 - I18n [官方文档如此](http://ionicframework.com/docs/v2/resources/ng2-translate/){:target="_blank"}，
   使用[ng2-translate](https://github.com/ocombe/ng2-translate){:target="_blank"}库实现。
 - Angular2 debug tool: [Augury](https://augury.angular.io/){:target="_blank"}
 - [Form validation is not working with Angular 2 FormBuilder in Ionic 2](http://stackoverflow.com/questions/39739979/form-validation-is-not-working-with-angular-2-formbuilder-in-ionic-2){:target="_blank"}
 - [Checkbox Group handling and Validation in Angular2](http://stackoverflow.com/questions/39674718/checkbox-group-handling-and-validation-in-angular2/39736803){:target="_blank"}
 - [ionic2+angular2中踩的那些坑](http://www.cnblogs.com/yanxiaodi/p/5750860.html)
 - 报以下错误，是因为 providers 填错了，应该只填 Service：

```
metadata_resolver.js:499 Uncaught Error: Can't resolve all parameters for Project: (?, ?).
    at CompileMetadataResolver.getDependenciesMetadata (http://localhost:8100/build/main.js:23905:19)
    at CompileMetadataResolver.getTypeMetadata (http://localhost:8100/build/main.js:23806:26)
    at http://localhost:8100/build/main.js:23949:41
    at Array.forEach (native)
    at CompileMetadataResolver.getProvidersMetadata (http://localhost:8100/build/main.js:23929:19)
    at CompileMetadataResolver.getDirectiveMetadata (http://localhost:8100/build/main.js:23569:34)
    at http://localhost:8100/build/main.js:23674:49
    at Array.forEach (native)
    at CompileMetadataResolver.getNgModuleMetadata (http://localhost:8100/build/main.js:23668:49)
    at RuntimeCompiler._compileComponents (http://localhost:8100/build/main.js:39512:47)
```

如，将：

```
@Component({
  selector: 'page-prj-detail',
  templateUrl: 'prj-detail.html',
  providers: [Project]
}
```
改为：
```
@Component({
  selector: 'page-prj-detail',
  templateUrl: 'prj-detail.html',
  providers: [ProjectService]
}
```


 - 遇到这个错误，可能是html界面的方法与ts中的方法对不上。

```
polyfills.js:3 Uncaught TypeError: exceptionHandler.handleError is not a function
at Object.next (http://localhost:8100/build/main.js:26130:82)
    at SafeSubscriber.schedulerFn [as _next] (http://localhost:8100/build/main.js:27643:52)
    at SafeSubscriber.__tryOrUnsub (http://localhost:8100/build/main.js:9761:16)
    at SafeSubscriber.next (http://localhost:8100/build/main.js:9710:22)
    at Subscriber._next (http://localhost:8100/build/main.js:9663:26)
    at Subscriber.next (http://localhost:8100/build/main.js:9627:18)
    at EventEmitter.Subject.next (http://localhost:8100/build/main.js:11949:25)
    at EventEmitter.emit (http://localhost:8100/build/main.js:27635:76)
    at NgZone.triggerError (http://localhost:8100/build/main.js:28451:76)
    at Object.onHandleError (http://localhost:8100/build/main.js:28430:23)
```