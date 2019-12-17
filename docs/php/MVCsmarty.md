## MVC+Smarty模板引擎

### Composer

简单来说，Composer是一个安装包管理工具。服务于PHP生态系统。实际上包含了Composer和Packagist

- Composer中很多理念都是借鉴自npm和Bundler。Composer包含了一个依赖解析器，用来处理开发包之间复杂的依赖关系
- Packagist是Composer的默认开发仓库。你可以将自己的安装包提交到packagist，将来你在自己的VSC(源码管理软件，比如Github)仓库中新建了一个tag或更新了代码，packagist都会自动构建一个新的开发包。这就是packagist目前的运作方式，将来将允许直接上传开发包

**包安装**：

- 要开始在项目中使用Composer，你只需要一个composer.json文件。该文件包含了项目的依赖和其他的一些元数据

**require**：

- 只需要简单的告诉Composer你的项目需要依赖哪些包
- 包含包名称和包版本

### MVC

概述：(Model-view-controller)。把软件系统分为三个基本部分：模型(Model)，视图(View)，控制器(Controller)。

目的是实现一种动态的程序设计，使后续对程序的修改和扩展简化，并且使程序对某一部分的重复利用成为可能。通过对复杂度的简化，使程序结构更加直观。

- 控制器(Controller)发请求，对请求进行处理

- 视图(View)-前端

- 模型(Model)-程序员编写程序应有的功能(实现算法等等)，数据库专家进行数据管理和数据库设计(可以实现具体的功能)

- 入口文件(index.php)

- 请求参数(index.php?m=user&a=create)

  







### Smarty

- 模板引擎(这里特指用于Web开发的模板引擎)是为了使用户界面与业务数据(内容)分离而产生的，它可以生成特定格式的文档，用于网站的模板引擎就会生成一个标准的HTML文档
- 模板引擎不属于特定技术领域，它是跨领域跨平台的概念

**基本概述**：

Smarty是采用PHP写的一个模板引擎，设计的目的是要将PHP代码与HTML代码分离

速度快。编译型。缓存技术。插件技术。模板技术。