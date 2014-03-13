---
layout: post
category : playscala
tagline: "PlayScala is Great!"
tags : [playscala]
lang: zh
---
# 对像存储报错 validateAndSave问题

问题：在存储对像时，同时存储该对像的关联对像，则会报错。\\

例：
room为hotel的关联对像。

	:::java
	public class Room {
	 @ManyToOne
	 public Hotel hotel;
	}

	:::java
	Hotel hotel = new Hotel();
	Room room = new Room(hotel);
	room.validateAndSave();

会报错。这是因为在保存room对象的时候，hotel对象还没有持久化，所以room对象里面要保存一个hotelId就无法取得了，故必须要先保存父对象，再保存子对象。

**必须先将对像hotel存储，再存储一遍room对像。**

	:::java
	Hotel hotel = new Hotel();
	hotel.validateAndSave();
	Room room = new Room(hotel);
	room.validateAndSave();

