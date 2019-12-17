---
sidebar: auto
---



## PHP面向对象

面向对象：由类得到具体的对象，由对象实现具体的工作

#### 面向对象三大特性：

**封装**

- 封装就是把对象的属性和服务结合成一个独立的相同单位，并尽可能隐蔽对象的内部细节。对外界形成一个边界(或者说形成一道屏障)，只保留有限的对外接口使之与外部发生联系

**继承**

**多态**

- 不同的形态

### **声明类**

1. 关键字class
2. 类名遵循大写开头的驼峰命名规范
3. 类的属性和方法必须添加访问修饰符(private,protected,public,var)

```
[修饰符]class类名   //修饰符可以省略
{
	[属性]
	[方法]
}
```

属性中的变量可以初始化，但是初始化的值必须是常数，这里的常数是指**PHP脚本在编译阶段时就可以得到其值，而不依赖于运行时的信息才能求值**

::: tip

目前高版本的PHP支持使用表达式初始化类属性，但是为了保证代码的正确和规范性，建议还是使用常量对属性进行初始化

:::

### 类实例化

```php
class Dog
{
  public $name = '小白';
  public $age;
  public function jiao()
  {
    echo '汪汪';
  }
}
$obj = new Dog()//实例化时，类名后面的括号可加可不加
```

### 对象

**属性，方法的调用**

可以用  `->` `对象运算符`这种方式来访问跟非静态属性

当一个方法在类定义内部被调用时，有一个可用的伪变量$this

在一个类中，可以访问一个特殊的指针 `$this`。如果当前类的一个属性为$attribute,则当前在该类中通过一个操作设置或访问该变量时，可以使用$this->attribute来引用

如下所示说明了如何在一个类中设置和访问属性：

```php
class classname
    {
      public $attribute;
      function operation($param){
        $this->attribute = $param;
        echo $this->attribute;
      }
    }
```

::: tip

伪变量$this,就代表着当前正在使用的对象

:::

```php
class Dog
{
  public $name = '小白';
  public function jiao()
  {
    echo '汪汪';
  }
  public functon show()
  {
    echo'我叫'.$this->name;
    $this->jiao();
  }
}
```

**传递赋值，引用赋值**

### 封装

- 访问控制(可见性约束)
- 魔术方法
- 静态方法，静态属性
- 重载

**封装**：

隐藏对象的属性和实现细节，仅对外提供公用的调用，控制在程序中属性的读取和修改的访问级别

**可见性约束：**

- 对属性或者方法的访问控制，是通过在前面添加关键字public(公有)，protected(受保护)或private(私有)来实现的

- **被定义为公有的类成员可以在任何地方被访问**

- 被定义为受保护的类成员则可以**被其自身以及其子类和父类**访问

- 被定义为私有的类成员则**只能被其定义所在的类访问**

  

|   调用位置   | public | protected | private |
| :----------: | :----: | :-------: | :-----: |
|     外部     |   ✔    |     ×     |    ×    |
|    子类中    |   ✔    |     ✔     |    ×    |
| 自身所在的类 |   ✔    |     ✔     |    ✔    |

### 构造函数

具有构造函数的类会在每次创建新对象时先调用此方法，所以非常适合在使用对象之前做一些初始化工作

```
public function __construct([参数])//此处双下划线
{
	方法体...
}
```

创建实例的时候，使用 __construct对这个对象进行初始化

### 析构函数

析构函数会在到某个对象的所有引用都被删除或者当对象被显示销毁时执行。

与构造函数相对的就是析构函数。**析构函数允许在销毁一个类之前被调用执行**，它将完成一些操作或实现一些功能，这些操作或功能通常在所有对该类的引用都被重置或曹处作用域时自动发生。

与构造函数的命名类似，一个析构函数名称必须是 __destruct()。析构函数不能带有任何参数

### static(静态)

- static关键字定义静态 **方法** 和 **属性**

- 声明类属性或方法为 **静态**，就可以不实例化类而 **直接访问**
- 静态属性不能通过一个类已实例化的对象来访问(但静态方法可以)
- 静态属性不可以由对象通过 _> 操作符来访问
- 由于静态方法不需要通过对象即可调用，所以伪变量 $this 在静态方法中不可用

------

静态访问 :: / self::

内部/外部  类名 :: 属性名  类名 :: 方法名

内部调用   类名 :: 属性名  self   :: 方法名

------

### 重载

PHP所提供的"重载"(overloading)是指  **动态的"创建"类属性和方法。**我们是通过魔术方法(magic methods)来实现的

当调用当前环境下 **未定义** 或 **不可见** 的类属性或方法时，重载方法会被调用

**属性重载**

在给不可访问属性赋值时，**__set()** 会被调用

读取不可访问属性赋值时，**__get()** 会被调用

当对不可访问属性调用 isset() 或 empty() 时，**__isset()** 会被调用

当对不可访问属性调用 unset() 时，**__unset()** 会被调用

**方法重载**

在对象调用一个不可访问方法时，**__call()** 会被调用

在静态上下文中调用一个不可访问方法时，**__callStatic()** 会被调用

### 继承

子类继承父类所有 **公有的** 和 **受保护的** 属性和方法

继承关键字 **extends** 一个类继承另一个类，不能继承多个

派生类，子类是指继承于基类的类

基类，父类，超类是指被继承的类

**重写：**

继承父类中的方法，子类中定义的与父类同名的方法

当一个子类重写其父类的方法时，PHP不会调用父类中已被重写的方法。是否调用父类的方法取决于子类

关键字 **parent::**  访问父类中的被重写的属性和方法

**final关键字：**

如果父类中的方法被声明为final，则子类无法重写该方法。如果一个类被声明为 **final** ，则不能被继承

### 多态

多态(Polymorphism)字面意思就是"多种状态"

接口的多种不同的实现方式即为多态

同一操作作用于不同的对象，可以有不同的解释，产生不同的执行结果

**抽象类**

- 抽象类至少要有一个抽象方法 声明关键字 **abstract**
- 抽象的方法只是声明了其调用方式(参数),不能定义其具体的功能实现
- 抽象类不能被实例化

**修饰关键字顺序**

- 类的属性和方法必须添加访问修饰符 (private,protected,public)
- abstract 以及 final 必须声明在访问修饰符之前
- static 必须声明在访问修饰符之后

### 接口

使用接口(interface)，可以指定某个类必须实现哪些方法，但不需要定义这些方法的具体内容。接口中也可以定义常量

- 不能有方法的具体定义和变量属性，只声明了方法名称和常量

实现 **关键字  implements** 一个类可以实现多个接口

接口也可以继承 **关键字 extends**

::: tip 注意

接口里定义的方法都是抽象方法，只有方法名称，没有方法体，不需要加抽象关键字 **abstract**

:::

------

```php
//类实现接口
class A implements Ainter
//完全写法
class A extends B implements Ainter,Binter,Cinter...
//接口继承接口
Ainter extends Binter
```

### 类型约束

类型运算符

- **instanceof** 用于确定一个PHP变量是否属于某一类class的实例
- **instanceof** 也可以用于确定一个变量是不是继承自某一父类的子类的实例
- **instanceof** 也可以用于确定一个变量是不是实现了某个接口的类的实例

**自动加载**

spl_autoload_register()函数可以注册任意数量的自动加载器，当使用尚未被定义的类和接口时自动去加载

```php
spl_autoload_register ([ callable $autoload_function [, bool $throw = true [, bool $prepend = false ]]] ) : bool
```

```
autoload_function
```

欲注册的自动装载函数。如果没有提供任何参数，则自动注册 autoload 的默认实现函数[spl_autoload()](https://www.php.net/manual/zh/function.spl-autoload.php)。

```
throw
```

此参数设置了 `autoload_function` 无法成功注册时， **spl_autoload_register()**是否抛出异常。

```
prepend
```

如果是 true，**spl_autoload_register()** 会添加函数到队列之首，而不是队列尾部。

### 命名空间

**概述：**

在PHP中，命名空间用来解决在编写类库或应用程序时创建可重用的代码如类或函数时碰到的两类问题

1. 用户编写的代码与PHP内部的类/函数/常量或第三方类/函数/常量之间的名字冲突。
2. 为很长的标识符名称(通常时为了缓解第一类问题而定义的)创建一个别名(或简短)的名称，提高源代码的可读性

**定义命名空间：**

- 声明单个命名空间 namespace Project
- 定义子命名空间 namespace Project\Sub\Level
- 可以在同一个文件中定义多个命名空间

命名空间通过关键字 **namspace** 来声明。如果一个文件中包含命名空间，它必须在其他所有代码之前声明命名空间

```php
//定义命名空间两种方式
namespace Project1;
/* 内容代码 */
namespace Project{
/* 内容代码 */
}
```

**全局空间：**

- 如果没有定义任何命名空间，所有的类与函数的定义都是在全局空间
- 在名称前加上前缀、表示该名称是全局空间中的名称

## PHP目录操作

**Table of Contents**

- [chdir](https://www.php.net/manual/zh/function.chdir.php) — 改变目录
- [chroot](https://www.php.net/manual/zh/function.chroot.php) — 改变根目录
- [closedir](https://www.php.net/manual/zh/function.closedir.php) — 关闭目录句柄
- [dir](https://www.php.net/manual/zh/function.dir.php) — 返回一个 Directory 类实例
- [getcwd](https://www.php.net/manual/zh/function.getcwd.php) — 取得当前工作目录
- [opendir](https://www.php.net/manual/zh/function.opendir.php) — 打开目录句柄
- [readdir](https://www.php.net/manual/zh/function.readdir.php) — 从目录句柄中读取条目
- [rewinddir](https://www.php.net/manual/zh/function.rewinddir.php) — 倒回目录句柄
- [scandir](https://www.php.net/manual/zh/function.scandir.php) — 列出指定路径中的文件和目录

