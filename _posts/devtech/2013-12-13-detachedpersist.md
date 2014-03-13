---
layout: post
category : playscala
tagline: "PlayScala is Great!"
tags : [playscala]
lang: zh
---
# 分离实体持久化出错（PersistentObjectException: detached entity passed to persist）问题


在Play!使用中，会用到Job来异步执行一些耗时的操作，此时很容易犯这样的错误：

	:::java
	public class SomeLongJob extends Job`<Void>` {
	   private SomeModel model;
	   public SomeLongJob(SomeModel model) {
	      this.model =  model;
	   }
	
	   @Override
	   public void doJob() {
	       model.someprop = "new value";
	       model.save();
	   }
	}


此时执行后，会在save()方法处抛出异常：`PersistentObjectException: detached entity passed to persist`

这是因为对象是从外面传进来的，而（我想）doJob是另外一个新启动的线程，所以这里可能只是一个引用，而真正的对象在原来那个主线程中，这边可能就只是个分离的拷贝或只是个引用，所以无权进行持久化操作。尝试过使用 model.merge()，好像不报错了，但又好像没有真正保存了值，猜想是因为没有在主线程中再次执行真正的save()去持久化。

因此，为了彻底避免这样的复杂问题，还是采用比较简单的解决方案吧：

	:::java
	SomeLongJob extends Job`<Void>` {
	   private Long id;
	   public SomeLongJob(Long id) {
	      this.id =  id;
	   }
	
	   @Override
	   public void doJob() {
	       SomeModel model = SomeModel.findById(id);
	       model.someprop = "new value";
	       model.save();
	   }
	}


这样一来，只传入id即可，所有的操作都在doJob内部，应该说是统一的一个线程中，这样就没有问题了。
