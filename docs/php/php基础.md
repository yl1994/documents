---
sidebar: auto
---



## **php基础**

### **安装   在Windows上搭建PHP开发环境**

推荐集成环境WAMP = Windows+Apache+MySQL+php

常见有这几个

- wamp
- PHPstudy
- xampp

这里以PHPstudy为例子，官网： https://m.xp.cn/ 

### php基础语法

### php变量

- 声明变量使用美元符号$
- 变量命名最好遵循驼峰标记法或者是下划线
- 变量命名严格区分太小写
- 变量名称重复，后面的变量会覆盖之前变量的值
- PHP是弱类型语言，变量可以不声明直接使用

### echo输出变量

```php
$_a = 'aaa';

echo $_a;
```

### 常量

定义常量

```php
define('TEST','this is a text');

echo TEST;//输出
```

## **PHP函数**

**声明自定义函数**

- PHP中所有函数具有全局域
- PHP不支持函数重载，也不可能取消或者重定义以声明的函数

### **变量作用域**

- 局部变量 —— 函数内部定义 —— 作用域为函数定义范围内

- 全部 —— 函数外部定义 —— 作用域从顶鬼畜一直到文件结尾

- 超全局

  

1. $GLOBALS
2. $_SERVER
3. $_GET
4. $_POST
5. $_COOKIE
6. $_FILES
7. $_ENV
8. $_REQUEST
9. #_SESSION

PHP中全局变量在函数中使用时必须声明为global，也可也使用$GLOBALS替代global

### **引用传值**

- 引用传值必须在参数的前面加上&符号；

- 引用传值的参数只能是变量；

- 引用传值会改变函数外部的值；

- 引用指向原始变量；

  

**总结**

引用赋值实质上是指将变量的空间地址赋给另一个变量。如此，两个变量指向了同一块地址，对两个变量的操作都是对这块空间的操作。

### **可变参数**

- 在PHP5.5及之前中，使用函数func_num_args(),func_get_arg(),和func_get_args()实现
- 在PHP5.6及之后中，由...语法实现

### **返回值**

- return中止函数玉兴，并将控制权交回调用该函数的代码行
- 如省略return语句，则返回值为null ，既空值
- 返回值可以是包括数组和对象的任意类型(资源除外)
- 函数只能有一个返回值

### **匿名函数**

匿名函数(Anonymous functions)，也称闭包函数(closures)，是指临时创建一个没有名称的函数；匿名函数主要用作回调函数(callback)参数的值

### **回调函数**

回调函数是作为参数传入另一个函数中使用的函数

### **内部函数及有条件函数**

- 内部函数指在函数体的内部声明的函数
- 内部函数只有在外部函数调用后才可以被调用

### **递归函数**

递归函数(Recursive Function)是指直接或者间接调用函数本身的函数

**递归函数的条件**

- 在每次一调用自己时。必须是(在某种意义上)更接近于解
- 必须有一个终止处理或计算的准则

### **可变函数**

- 可变函数是指如果一个变量名后有圆括号，PHP将寻找与变量的值同名的函数，并且尝试执行它
- 可变函数可以用来实现包含回调函数，函数表在内的用途
- 可变函数不呢个用于例如echo，print，unset，isset，empty，include。require以及类似的语言结构
- 可变函数的语法来带哦用一个对象的方法

## **PHP函数库**

### 获取字符长度函数strlen()

**获取字符长度**

strlen( string $str)



### strtolower函数

**将字符串转换为小写**

string strtolower( string $str)



### strtoupper函数

**将字符串转换成大写**

string strtolower( string $str)



**ucfirst函数**

**将句子首字母转换为大写**

string ucfirst ( string $str)



**ucwords函数**

**将每个单词的首字母转换为大写字母**

string ucwords ( string $str)



### str_replace函数

**实现字符替换，区分大小写**



### str_ireplace函数

**实现字符替换，不区分大小写**



### 与HTML实体相关的函数：htmlspecialchars()

预定义的字符转换为HTML实体



### **字符串截断函数**：chop(),Itrim(),trim()

这三个函数的不同之处在于trim()将除去整个字符串前后的空格，而Itrim()只从字符串的开始处(左边)除去空格，人rtrim()只从字符串的结束处()除去空格

你也可以使用rtrim()的别名函数chop()



### 查找字符串位置的函数：strpos(),strrpos()

**strpos() **返回一个字符串在另一个字符串第一次出现的位置

```php
int strpos(string haystack,string needle[,int offset=0])
```

**strrpos() **返回一个字符串在另一个字符串第一次出现的位置，区分大小写

**strripos() **返回一个字符串在另一个字符串第一次出现的位置，忽略大小写



### 字符串截取函数substr()

语法：

```php
string substr(string $string,int $start[,int $length])
```

**说明：**如果省略length，则返回从start至字符串结尾之间的字符串。如果start或length为负数，则倒数

### 在字符串中查找字符串：strstr(),strchr(),strrchr(),stristr()

**strstr()函数原型：**

```php
string strstr(string haystack,string needle[, bool before_needle=flase])
```

### **反转字符串函数：strrev()**

```php
string strrev(string $string)
```

### 字符串加密函数：md5()

实现计算字符串的md5哈希

```php
string md5(string $str)
```

### 连接和分割字符串

**explode()**：使用一个字符串 分割另一个字符串。**函数原型：**

```php
array explode(string $delimiter,string $string $string [,int $limit])
```

这个函数带有一个字符串(input)作为参数，并根据一个指定的分隔符字符串将输入字符串本身分割为小块，将分割后的小块返回到一个数组中。你可以通过可选的参数limit来限制分成字符串小块的数量

**implode()：**将一个一维数据的值转换为字符串

```php
string implode (string $glue,array $pieces)
string implode (array $pieces)
```

### 格式化字符串函数：sprintf()

```php
string sprintf(string $format [,mixed $arg[,mixed $...]])
//如果%符号多余arg参数，则必须使用占位符，占位符位于%符号之后，由数字和"\$"组成
```

## PHP数学函数

### 进一/舍一取整：floor和ceil

floor函数实现舍一取整

```php
float floor(float $value)
```

ceil函数实现进一取整

```php
float ceil(float $value)
```

### 幂运算/平方根：pow()和sqrt函数

pow()：幂指数运算

```php
number pow(number $base,number $exp)
//第一个参数底数，第二个参数指数
```

sqrt()：平方根

```php
float sqrt(float $arg)
```

### 最大值/最小值：max和min

```php
mixed max(mixed $value,mixed $value,...)//返回最大值
mixed min(mixed $value,mixed $value,...)//返回最小值
```

### 随机数：rand和mt_rand

```php
int rand(int $min,int max)//产生随机数
int mt_rand(int $min,int max)//产生一个更好的随机数
```

### 四舍五入：round

```php
float round(float $val[,int $precision=0])
//实现四舍五入的功能
```

### 数字格式化：number_format

```php
string number_format(float $number[,int $decimals=0])
//以千位分隔符方式格式化数字
```

### 浮点数余数：fmod

```php
float fmod(float $x,float $y)
//返回除法的浮点数余数
```

## PHP日期时间函数

### 格式化日期：date

```php
string date(string format[,int timestamp])
//格式化一个本地时间/日期
```

### 与时区相关的函数

date_default_timezone_set函数

```php
bool date_default_timezone_set(string timezone_identifier)
//设置默认时区
```

date_default_timezone_get函数

```php
string date_default_timezone_get(void)
//获取默认时区
```

### 与时间戳相关的函数：time(),strtotime(),microtime()

```php
int time(void)
//返回当前Unix时间戳
int strtotime(string $time[,int $now = time()])
//将字符串转换成Unix时间戳
mixed microtime([bool $get_as_float])
//返回当前Unix时间戳和微秒数
```

### 生成唯一ID：uniqid()

```php
string uniqid([string $prefix = ""[,bool $more_entropy = false]])
```

### 获取日期/时间信息：getdate()

```php
array getdate([int timestamp])
//可以获取日期/时间信息
```

## 数组

 PHP 中的数组实际上是一个有序映射。映射是一种把 ***values*** 关联到 ***keys*** 的类型。此类型在很多方面做了优化，因此可以把它当成真正的数组，或列表（向量），散列表（是映射的一种实现），字典，集合，栈，队列以及更多可能性。由于数组元素的值也可以是另一个数组，树形结构和多维数组也是允许的。 

### 数组定义

- 数据的集合，在PHP中数组是以恶搞有序映射

### 数组分类

- **索引**数组——数组的**下标**是**数字**

- **关联**数组——数组的**下标**是**字符串**

  

::: tip 注意

PHP中数组其实是不区分索引还是关联数组，都是根据键名找到对应的键值

:::

### 定义数组

- array()形式创建

- [ ]形式动态创建
- range()和compact()创建
- define()定义常量数组

### 通过array()下标连续的索引数组

```php
$arr = array(2,3,'king',true);
print_r($arr);
```

打印：

```php
/*
Array
(
	[0] => 2
	[1] => 3
	[2] => king
	[3] => 1
)
*/
```

### 定义关联数组

```php
$userInfo = array(
	'username'=>'king',
  'age'=>12
);
print_r($userInfo);
```

### 定义混合数组

```php
$arr = array(
	'a','b',
  'age'=>22,
  5=>'d',
  -12=>'e'
);
```

```php
/*
Array
(
	[0] => a
	[1] => b
	[age] => king
	[5] => d
	[-12] => e
)
*/
```

**注意**

::: tip 检测是否为数组

- var_dump(),gettype(),is_array()

:::

::: tip 数组键名

- 浮点数会舍掉小鼠部分，取整作为键名
- 布尔true->1,false->0
- null->空字符串
- 键名重复，后面的会覆盖之前的键值
- 如果没有指定键名，而且键名不都为负数，新添加的元素的键名为已有键名最大值加1
- 如果键名都为负数，那么新添加的元素键名从0开始

:::

### 多维数组

```php
//二维索引+索引
$arr array(array('a','b'),
           array('d','e')
          );
```

```php
//这是用的最多的。//数据库中查询出的记录就是这种形式
//二维索引+关联
$arr array(
  array(
    'id'=1,
    'username'='king'
  ),
  array(
    'id'=>2,
    'username'=>'kings'
  )
);
```

```php
//二维关联+索引
$arr array(
	'user' => array('king','queen')	,
  'ages' => array(12,18,22) 
);
```

```php
//二维关联+关联
$arr = array(
	'userInfo'=>array(
  	'id'=>1,
    'username'=>'king'
  ),
  'cuserInfo'=>array(
  	'cid'=>1,
    'cusername'=>'PHP'
  )
)
```

### 通过  [ ]动态创建

- 通过 **$数组名称[ ] = 值** 创建下标连续的索引数组
- 通过 **$数组名称[ 键名 ] = 值** 创建指定下标的索引数组和关联数组

### 动态创建下标连续的索引数组

```php
$arr1[] = 12;
$arr1[] = 18.8;
$arr1[] = true;
//array(12,18.8,true)
```

### 手动指定下标的索引数组

```php
$arr1[3] = 12;
$arr1[-2] = 18.8;
$arr1[0] = true;
```

### 动态创建关联数组

```php
$desc = 'this is a test';
$userInfo['usernme']='king';
$userInfo['age']=12;
$userInfo['desc']=$desc;
```

```php
//二维的索引+关联
$arr[] = ['id'=1,'username'='king1','age'=>12];
$arr[] = ['id'=1,'username'='king2','age'=>12];
$arr[] = ['id'=1,'username'='king3','age'=>12];
$arr[] = ['id'=1,'username'='king4','age'=>12];
```

```php
//二维关联+关联
$arr['course']=['courseName'=>'php','course'=>'PHP is the best language'];
```

### range()

range()快速创建下标连续的索引数组

 range — 根据范围创建数组，包含指定的元素 

```php
range ( mixed $start , mixed $end [, number $step = 1 ] ) : array
```

参数

------

```
start
```

序列的第一个值。

```
end
```

序列结束于 `end` 的值。

```
step
```

如果设置了步长 `step`，会被作为单元之间的步进值。`step` 应该为正值。不设置`step` 则默认为 1。

