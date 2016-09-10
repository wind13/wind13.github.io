---
layout: post
title: "Re-natal 报错分析列表"
description: ""
category: devtech/clojure
tags: [clojure, re-natal, react native]
---
{% include JB/setup %}

```
Assert failed: c
customEval
    figwheel-bridge.js:75
<unknown>
    figwheel-bridge.js:88
<unknown>
    JSTimers.js:47
```

- 引入的控件不可用？

---
```
Uncaugh [object object]
```

- 可能是db.cljs里的检查项不合格。

---
```
Spec check failed: {:cljs.spec/problems {[] {:pred map?, :val nil, :via [:xumu-app.db/app-db], :in []}}}
```

- 传入参数为nil，不符合db.cljs中spec的检查项。

---
```
undefined is not an object (evaluating 'nextState.routes.forEach')
NavigationScenesReducer
    NavigationScenesReducer.js:116
NavigationTransitioner
    NavigationTransitioner.js:92
```

- 可能是sub.cljs加载错误，修改reg-sub为reg-sub-raw即可。

---
```
console.error: "Error rendering component (in env.android.main.reloader > xumu_app.android.core.app_root)"
```

- 可能是lein figwheel android未启动，或关闭了。

---

```
Error validating module options: child "platform" fails because ["platform" must be a string]
```

- 未知原因：添加了dispatch 方法到按钮上即报此错。

---

```
Cannot read property 'rowIdentities' of undefined
Constructor.render
    ListView.js:362
```

- ListView 的参数错误
- 参见[这里](http://stackoverflow.com/questions/35068905/the-data-source-property-isnt-propagated-from-reagent-to-the-render-method-of-t)

---

```
Assert failed: Missing tconfig key: :compiled-dictionary
(:compiled-dictionary tconfig)
customEval
    figwheel-bridge.js:75
```

- 应该是在i18n_l10n.cljs文件中少定义了:compiled-dictionary这项吧~

---

```
Assert failed: Invalid tconfig key: :dictionary
(not (:dictionary tconfig))
customEval
    figwheel-bridge.js:75
```

- 无效的key？

---

```
iOS build error
'React/RCTView.h' file not found #374
 Open
IOS build failed #392
```

- 原因参见 [#371](https://github.com/lelandrichardson/react-native-maps/issues/371)

---

```
Requiring unknown module "xxxx"....
```

- 因为没有加载，在figwheel模式下需要运行 `re-natal use-component some-library/Component`

---


```
onlyChild must be passed a children with exactly one child
```

- 通常是因为某个元素如：TouchableHighlight 不允许里面有多个子节点而报的错，检查相应的元素内部是否有多个子节点的情况，修改为只有一个子节点即可。
- 详细参见[此文](http://willi.am/blog/2015/05/08/react-native-fix-for-invariant-violation-onlychild-must-be-passed-a-children-with-exactly-one-child/)。

```
undefined is not an object (evaluating 'this.props.children.props.children')
stackedPresent
    ListItem.js:336
getInitialStyle
    ListItem.js:41
prepareRootProps
    ListItem.js:290
render
    ListItem.js:548
```
- 因为 List 下面含有非 ListItem 的元素。

---

```
Error while updating property 'justifyContent' in shadow node of type: RCTView
updateShadowNodeProp
    ViewManagersPropertyCache.java:109
setProperty
    ViewManagerPropertyUpdater.java:150
```
- 设置的 justifyContent 属性错误，必须是 space-around 等形式。

---

```
Assert failed: c
customEval
    figwheel-bridge.js:75
<unknown>
    figwheel-bridge.js:88
```
- 某个组件、控件有问题，不能正确render。

---

```
console.error: "goog.require could not find: figwheel.connect"
error
    YellowBox.js:60
<unknown>
    figwheel-bridge.js:223
customEval
    figwheel-bridge.js:81
<unknown>
    figwheel-bridge.js:109
```
- 修改了 project.clj 导致的错误，引用了错误的库，退回修改后正常。

---

### 另外，请参考：

- [React native开发中常见的错误](http://blog.csdn.net/xiangzhihong8/article/details/52223578)
