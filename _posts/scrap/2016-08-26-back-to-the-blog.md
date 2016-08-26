---
layout: post
title: "Back to the blog"
description: ""
category: scrap
tags: [essay]
---
{% include JB/setup %}

# 回归 Blog

有一段时间没有更新Blog了，有些时候用Lofter，因为方便而且容易分享，而技术、思路的收集则用Evernote，本来用得还挺好的，但Evernote加了限制，只能支持两个客户端什么的，于是转用有道云笔记，有道云笔记升级到2.x版，结果里面的查询太烂了，查到关键字在某些文章中，但不知道具体位置，反思了一下自己的选择，发现还是不科学，github的版本控制，markdown的纯文本，这不才应该是程序员最佳的选择吗？所以决定回归了，慢慢地搬运那些资料到这里吧，以后维护也方便，用vi编辑也快速，github保存也自由，搜索纯文本对于程序员来说也不是事儿~

慢慢来，急也没有用……

升级 jekyll 到 3.x，解决了几个问题：

- 留言 duoshuo 报个 js 警告 warning，提示需要添加 data-thread-key，于是在 comments-providers/duoshuo 文件中添加了如下代码：

```html
<div class="ds-thread" data-thread-key="{{page.id}}" data-title="{{page.title}}"></div>
```

- 另外，每次编译 jekyll 会报些 warning 警告：`A call to ‘\{\{ post_url /path/to/some/post }}` 之类的，一大堆，查看了这个[讨论](https://talk.jekyllrb.com/t/jekyll-3-0-deprecation-a-call-to-post-url/1420)，想了一会才想到，是链接的问题，原来的链接要写 path，现在不需要了，直接就是 id 就可以了。

```javascript
\{\{ post_url /devtech/git/2013-12-23-oftenused }}
// 修改为：
\{\% post_url 2013-12-23-oftenused %}
```

- 再就是 atom.xml 和 rss.xml 在 jekyll 编译时报了两个 warning 警告如下，查了一下，把 nil 改为 null 就好了，详见 [Issue #2712](https://github.com/jekyll/jekyll/issues/2712)。

```
Build Warning: Layout 'nil' requested in atom.xml does not exist.
```

看来这回归也不容易啊~！
