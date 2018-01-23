---
layout: post
categories: devtech js
title: easyui中form表单的ajax实现
tags: [easyui]
lang: zh
---

示例代码如下：

	:::java
	$('#ff').form({
	    url:$(this).attr(""action""),
	    onSubmit:function(){
	        return $(this).form('validate');
	    },
	    success:function(data){
	        alert(data);
	    }
	});


其中url的值是取的form中的action属性，故需注意填写form的相应属性，当然也可以为'/controller_name/action_name'。
