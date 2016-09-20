---
layout: post
title: "4clojure problem solving"
description: ""
category: "devtech/clojure"
tags: []
---
{% include JB/setup %}

14 题以前答案一般没啥区别，略过……

### [#15](http://www.4clojure.com/problem/15)

```clojure
#(* % 2)
```
adereth's solution:

```clojure
* 2
```
### [#16](http://www.4clojure.com/problem/16)

```clojure
format "Hello, %s!"
```
adereth's solution:

```clojure
#(str "Hello, " % "!")
```

### [#17](http://www.4clojure.com/problem/17)

```clojure
'(6 7 8)
```

adereth's solution:

```clojure
[6 7 8]
```

### [#18](http://www.4clojure.com/problem/18)

```clojure
'(6 7)
```
adereth's solution:

```clojure
'(6 7)
```

### [#19](http://www.4clojure.com/problem/19)

```clojure
#(peek (vec %))
```
adereth's solution:

```clojure
(comp first reverse)
```

### [#20](http://www.4clojure.com/problem/20)

```clojure
#(nth (reverse %) 1)
```
adereth's solution:

```clojure
(comp second reverse)
```

### [#21](http://www.4clojure.com/problem/21)

```clojure
(fn getn [ary n]
  (if (= n 0)
    (first ary)
    (getn (rest ary) (dec n))))
```

adereth's solution:

```clojure
#(first (drop %2 %1))
```

### [#35](http://www.4clojure.com/problem/35)
```
7
```
### [#37](http://www.4clojure.com/problem/37)
```
"ABC"
```
### [#64](http://www.4clojure.com/problem/64)
```
+
```
### [#57](http://www.4clojure.com/problem/57)
```
'(5 4 3 2 1)
```
### [#71](http://www.4clojure.com/problem/71)
```
last
```
