# Playframework 1.4.x 与Playframework 2.5.x 选型比较

## Playframework 2.5.x

### 优势：

- 文档齐全，持续更新；
- 支持更多最新的技术，更清晰的底层技术；
- 完全异步的HTTP编程模型；
- 通过 Comet, long-polling and WebSockets 给客户端提供持续的连接；
- 通过 Akka 的 Actor 模型提供响应高并发的系统；
- 使用 Akka Streams
    - Filters
    - Streaming response bodies
    - Request body parsers
    - WebSockets
    - Streaming WS client responses
- 使用 Websocket
- 使用 Ebean 或 JPA 和 Anorm（用于Scala）作为数据层，Java 建议用 Ebean，
    - Ebean 可以很容易[跟 ElasticSearch 结合](http://ebean-orm.github.io/docs/features/elasticsearch/)做全文检索相关功能。
    - Ebean [服务端分页](https://github.com/playframework/play-ebean-example/blob/master/app/models/Computer.java)极为容易。
- 使用 [Comet sockets](https://www.playframework.com/documentation/2.5.x/JavaComet)
- 使用更强大的 The Twirl template engine，即 Scala 的界面模板，
    - 模板是要编译的，编译前更早报错，报错更准确。
    - 语法简洁，只有一个“@"特殊字符，借助强大的 Scala 语言功能更强大。
    - 函数式编程的语法和表达式非常适合模板引擎。
- 路由系统 routing system 也是编译的，帮助提早发现错误。
- 强大而易用的[自动化测试](https://www.playframework.com/documentation/2.5.x/JavaTest)系统。
- 采用 sbt 作为集成编译工具，可以很好地与 Maven 等传统工具结合，这样也就可以很好地和已有系统集成。
- 有很多的实际示例代码和模组 Module 可用，如下：
    - [swagger-play](https://github.com/swagger-api/swagger-play)
    - [PDF module](https://github.com/innoveit/play2-pdf)
    - [Geolocation](https://edulify.github.io/play-geolocation-module.edulify.com/)
- 很多方面都有针对性的优雅解决方案，如：
    - [CSRF](https://www.playframework.com/documentation/2.5.x/JavaCsrf)
    - [JSON 转换](https://www.playframework.com/documentation/2.5.x/JavaJsonActions) Play 2 使用的是 Jackson 而不是 google 的那个 gson。
    - [Database Evolutions](https://www.playframework.com/documentation/2.5.x/Evolutions)
    - [Deploy 部署](https://www.playframework.com/documentation/2.5.x/Deploying) dist 命令很强大，直接打个zip包，解压后，运行 bin 目录下的 run 命令就可以启动服务了。甚至可以打成各个系统 Native 的安装包，如 *.msi (Windows), *.apk (macOS), *.rpm (Linux) 等

### 劣势：

- 深入的功能，特别是 Akka 有一定的学习曲线。
- Java 和 Scala 有界线，有两套API，不能自然转换，未来要用 Scala 则可能需要重写。

## Playframework 1.4.x

### 优势：

- 有之前的项目经验，熟悉度高；
- 满足基本的项目需求，实现一般的（传统的）信息系统没有问题；
- 可用之前的项目快速起步，包括与 Swagger 等的结合，部署脚本文件等。

### 劣势：

- 动态语言的 Groovy 界面模板，非编译型语言，仅在运行时才能知道错误，不易排查错误原因，解释型运行效率低。
- 太多黑科技，“不正规”地使用“正规”的 Java 技术，可能导致一些很难解决的Bug，包括与第三方 jar 包的兼容问题等。
- 项目采用 python 做为编译等工作的工具，不易自定义和集成已有系统。

## 结论：越看越觉得应该直接开始使用 Play 2.5.x ，没什么可担心的，只会更好，不会入坑！

- 一般的应用，Play 2.5.x 与 Play 1.4.x 上手难度相当，甚至在[测试](https://www.playframework.com/documentation/2.5.x/JavaTest)、[Form表单](https://www.playframework.com/documentation/2.5.x/JavaForms)、Model层（Ebean）等方面 Play 2.5.x 更有优势，有更多更专业且现成的解决方案。
