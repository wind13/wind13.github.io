---
layout: post
title: "Ionic 2 相关学习"
description: ""
category: "devtech/js"
tags: [angular]
---
{% include JB/setup %}

## 基础

## 问题

 - I18n [官方文档如此](http://ionicframework.com/docs/v2/resources/ng2-translate/){:target="_blank"}，
   使用[ng2-translate](https://github.com/ocombe/ng2-translate){:target="_blank"}库实现。
 - Angular2 debug tool: [Augury](https://augury.angular.io/){:target="_blank"}
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