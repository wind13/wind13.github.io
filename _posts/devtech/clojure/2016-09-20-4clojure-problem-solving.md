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

### [#22](http://www.4clojure.com/problem/22)

```clojure
#(reduce (fn [a b] (inc a)) 0 %)
```

adereth's solution:

```clojure
(fn [sequence] (reduce (fn [acc v] (inc acc)) 0 sequence))
```

### [#23](http://www.4clojure.com/problem/23)

```clojure
#(reduce (fn [rs ls] (cons ls rs)) [] %)
```

adereth's solution:

```clojure
(fn [s]
  (loop [result []
         s s]
    (if (seq s)
      (recur (concat [(first s)] result) (rest s))
      result)))
```

### [#24](http://www.4clojure.com/problem/24)

```clojure
#(reduce + %)
```

adereth's solution:

```clojure
apply +
```

### [#25](http://www.4clojure.com/problem/25)

```clojure
#(filter odd? %)
```

adereth's solution:

```clojure
filter odd?
```

### [#26](http://www.4clojure.com/problem/26)
```clojure
#(take % ((fn fib [a b]
            (lazy-seq (cons a (fib b (+ b a))))) 1 1))
```

adereth's solution:

```clojure
#(take %
  (map first
    (iterate (fn [[i1 i2]]
      [i2 (+ i1 i2)])
      [1 1])))
```

### [#29](http://www.4clojure.com/problem/29)
```clojure
#(clojure.string/replace % #"[^A-Z]" "")
```

adereth's solution:

```clojure
(fn [s] (reduce str (filter #(Character/isUpperCase %) s)))
```

### [#27](http://www.4clojure.com/problem/27)
```clojure
#(= (reverse %) (seq %))
```

### [#28](http://www.4clojure.com/problem/28)
```clojure
(defn cci [ls r]
  (if (every? sequential? ls)
    (concat r ls)
    (apply cci r (partition-by sequential? ls))))

#(let [f (first %)]
  (if (sequential? f)
    )
  conj [] (first %))
```

### [#30](http://www.4clojure.com/problem/30)
```clojure
#((fn dis [ss l r]
    (if-let [f (first ss)]
      (let [rss (rest ss)]
      	(if (= l f)
        	(dis rss f r)
        	(dis rss f (conj r f))))
      r)) % nil [])
```
```clojure
#((fn dis [ss l r]
    (let [[f & s] ss]
      (cond
        (nil? f) r
        (= l f) (dis s f r)
        :else (dis s f (conj r f))))) % nil [])
```

adereth's solution:

```clojure
#(map first (partition-by identity %))
```

### [#32](http://www.4clojure.com/problem/32)
```clojure
#(mapcat (fn [s] [s s]) %)
```

### [#34](http://www.4clojure.com/problem/34)
```clojure
#((fn rng [s n r]
    (if (< s n)
      (rng (inc s) n (conj r s))
      r)) %1 %2 [])
```
adereth's solution:
```clojure
(fn [start end] (take-while #(< % end)
                            (iterate inc start)
                            )
  )
```

### [#35](http://www.4clojure.com/problem/35)
```clojure
7
```
### [#37](http://www.4clojure.com/problem/37)
```clojure
"ABC"
```
### [#38](http://www.4clojure.com/problem/38)
```clojure
(fn [& s] (reduce (fn mx [a b] (if (> a b) a b)) s))
```

adereth's solution:

```clojure
(fn [ & xs ]
  (reduce #(if (> %1 %2) %1 %2) xs))
```

### [#42](http://www.4clojure.com/problem/42)
```clojure
#((fn factorial [n r]
  (if (= n 1) r (factorial (dec n) (* n r)))) % 1)
```

adereth's solution:
```clojure
#(reduce * (range 1 (inc %)))
```


### [#48](http://www.4clojure.com/problem/48)
```clojure
6
```

### [#52](http://www.4clojure.com/problem/52)
```clojure
[c e]
```

### [#57](http://www.4clojure.com/problem/57)
```clojure
'(5 4 3 2 1)
```
### [#64](http://www.4clojure.com/problem/64)
```clojure
+
```
### [#71](http://www.4clojure.com/problem/71)
```clojure
last
```
### [#68](http://www.4clojure.com/problem/68)
```clojure
'(7 6 5 4 3)
```
adereth's solution:
```clojure
[7 6 5 4 3]
```
### [#72](http://www.4clojure.com/problem/72)
```clojure
apply +
```
adereth's solution:
```clojure
#(reduce + %)
```

### [#134](http://www.4clojure.com/problem/134)
```clojure
#(= nil (get %2 %1 0))
```
adereth's solution:
```clojure
#(nil? (get %2 % true))
```

### [#145](http://www.4clojure.com/problem/145)
```clojure
[1 5 9 13 17 21 25 29 33 37]
```

### [#156](http://www.4clojure.com/problem/156)
```clojure
#(apply merge (map (fn [k] {k %1}) %2))
```
```clojure
#(apply array-map (mapcat (fn [k] [k %1]) %2))
```
adereth's solution:
```clojure
(fn [default values] (reduce #(assoc %1 %2 default) {} values))
```

### [#161](http://www.4clojure.com/problem/161)
```clojure
#{1 2}
```
### [#162](http://www.4clojure.com/problem/162)
```clojure
1
```

## Another solution

[Solutions to 4Clojure Easy Problems](http://www.anthony-galea.com/blog/post/solutions-to-4clojure-easy-problems/)
