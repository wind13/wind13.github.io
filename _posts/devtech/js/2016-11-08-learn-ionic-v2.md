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
 - [A Guide to Styling an Ionic 2 Application](http://www.joshmorony.com/a-guide-to-styling-an-ionic-2-application/)
 - [Tips & Tricks for Styling Ionic 2 Applications](http://www.joshmorony.com/tips-tricks-for-styling-ionic-2-applications/)
 - [User-Selected Style Themes in an Ionic 2 Application](https://webcake.co/theming-an-ionic-2-application/)
 - [Vonic简明教程（一）：起步](http://im.dahoo.wang/2016/12/03/Vonic%E7%AE%80%E6%98%8E%E6%95%99%E7%A8%8B%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E8%B5%B7%E6%AD%A5/){:target="_blank"}
 - [SQLite plugin](https://github.com/litehelpers/Cordova-sqlite-storage){:target="_blank"}
 - [Cordova plugin NativeStorage](https://github.com/TheCocoaProject/cordova-plugin-nativestorage){:target="_blank"}
 - [Debugging Ionic 2 Apps in Chrome from Visual Studio Code](http://www.damirscorner.com/blog/posts/20161122-DebuggingIonic2AppsInChromeFromVisualStudioCode.html){:target="_blank"}
 - [Ionic 2 Conference Application](https://github.com/driftyco/ionic-conference-app){:target="_blank"}
 - [Ionically Speaking](https://ionicallyspeaking.com/){:target="_blank"}

## 问题

 - I18n [官方文档如此](http://ionicframework.com/docs/v2/resources/ng2-translate/){:target="_blank"}，
   使用[ng2-translate](https://github.com/ocombe/ng2-translate){:target="_blank"}库实现。
 - Angular2 debug tool: [Augury](https://augury.angular.io/){:target="_blank"}
 - [Form validation is not working with Angular 2 FormBuilder in Ionic 2](http://stackoverflow.com/questions/39739979/form-validation-is-not-working-with-angular-2-formbuilder-in-ionic-2){:target="_blank"}
 - [Checkbox Group handling and Validation in Angular2](http://stackoverflow.com/questions/39674718/checkbox-group-handling-and-validation-in-angular2/39736803){:target="_blank"}
 - [ionic2+angular2中踩的那些坑](http://www.cnblogs.com/yanxiaodi/p/5750860.html){:target="_blank"}
 - [(Ionic 2) Getting data from php services is undefined](http://stackoverflow.com/questions/37618000/ionic-2-getting-data-from-php-services-is-undefined/37650922)
 - [解决 ionic 中的 CORS（跨域） 问题](http://ionichina.com/topic/54f051698cbbaa7a56a49f98){:target="_blank"}
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

```javascript
@Component({
  selector: 'page-prj-detail',
  templateUrl: 'prj-detail.html',
  providers: [Project]
}
```

改为：

```javascript
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

 - 编译时遇到这个错误：

```
[23:13:04]  Error: Error at [project path]/.tmp/pages/statis/projects.ngfactory.ts:351:29
[23:13:04]  Supplied parameters do not match any signature of call target.
[23:13:04]  ngc failed
[23:13:04]  ionic-app-script task: "build"
[23:13:04]  Error: Error
```

一般说明在程序的某处有个方法需求的参数与提供的参数对应不上，在build时无法通过，但在ionic serve时可正常运行，这个错误就比较难找了。这里注意看错误提示，说的是

```
.tmp/pages/statis/projects.ngfactory.ts
```

那么就去检查 /pages/statis/projects.ts 文件中的相应方法的参数吧！


 - 编译时遇到这个错误：

 ```
 FAILURE: Build failed with an exception.

* What went wrong:
Execution failed for task ':packageDebug'.
> java.io.FileNotFoundException: /Users/samliu/gits/jing-xi-h5/platforms/android/build/intermediates/assets/debug/www/assets/stub (Is a directory)
```

这个错误原因不明，但通常再次编译运行就好了。

 - 调试时遇到这个错误：

```
Application Error
There was a network error (http://192.168.56.1)
```

网上查到答案是要添加[whitelist的插件](https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-whitelist/){:target="_blank"}，然后添加相应的网址到config.xml中。

 - 发现这个错误，一般是 queries.sql 里面的SQL写错了。

```
ERROR Can not issue data manipulation statements with executeQuery()
```

原因是修改性的SQL语句，上面的声明要用“!”，而不能用“?”。


 - 遇到这个错：

 ```
 Can't bind to 'ngShow' since it isn't a known property of 'ion-list'.
1. If 'ion-list' is an Angular component and it has 'ngShow' input, then verify that it is part of this module.
2. If 'ion-list' is a Web Component then add "CUSTOM_ELEMENTS_SCHEMA" to the '@NgModule.schemas' of this component to suppress this message.
```

应该是说 ngShow 并不支持这样的写法，后改为 ` *ngIf `即可。


 - 遇到这个错：Can't coerce body of type class java.lang.Integer

 是因为返回的数据不是json，比如直接将db操作的update结果1返回给客户端，这里(ok 1)就会报这个错，改为：(ok {:success 1}) 即可。