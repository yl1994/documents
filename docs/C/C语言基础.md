---
sidebar: auto
---



## 2C语言概述

**frist.c**

```c
#include <stdio.h>

int main()	
{
	int num;
	num = 1;

	printf("I am TimSpan");
	printf("computer.\n");
	printf("hello");
	return 0;
}
```

### 第 1 遍：快速概要

```c
#include <stdio.h> //包含另一个文件
```

这行告诉编译器吧stdio.h中的内容包含在当前程序中。stdio.h是C编译器软件包的标准部分。它提供键盘输入和屏幕输出的支持

```c
int main(void)	//函数名
```

圆括号表明 main() 是一个函数名，int 表明 main() 函数返回一个整数，void 表明 main() 不带任何参数。左花括号函数定义开始，右花括号函数定义结束

```c
int num;
num = 1;//赋值
```

声明一个名为num的变量，且num 是int(整形)类型

```c
printf("I am TimSpan");//printf()是标准的C库函数
return 0;//C函数可以给调用方提供(或返回)一个数,
```

目前可以那是把该行看作是结束main() 函数的要求

### 第 2 遍：程序细节

深入代码背后的细节

### 1 #include 指令和头文件



## 3数据和C

### 示例程序

```c
/* platinum.c -- your weight in platinum */
#include <stdio.h>
int main(void)
{
	float weight; /* 你的体重 */
	float value; /* 相等重量的白金价值 */
	printf("Are you worth your weight in platinum?\n");
	printf("Let's check it out.\n");
	printf("Please enter your weight in pounds: ");
	/* 获取用户的输入 */
	scanf("%f", &weight);
	/* 假设白金的价格是每盎司$1700 */
	/* 14.5833用于把英镑常衡盎司转换为金衡盎司[1]*/
	value = 1700.0 * weight * 14.5833;
	printf("Your weight in platinum is worth $%.2f.\n", value);
	printf("You are easily worth that! If platinum prices drop,\n");
	printf("eat more to maintain your value.\n");
	return 0;
}

```

### 程序中的新元素 

- 为了打印新类型的变量，在printf()中使用%f来处理浮点值。%.2f中的.2 用于精确控制输出，指定输出的浮点数只显示小数点后面两位

- scanf()函数用于读取键盘的输入。%f说明scanf()要读取用户从键盘输入 的浮点数，&weight告诉 scanf()把输入的值赋给名为 weight 的变量。scanf() 函数使用&符号表明找到 weight变量的地点。下一章将详细讨论&。就目前 而言，请按照这样写。 


### 数据：数据类型关键字

在C语言中，用int关键字来表示基本的整数类型。后3个关键字（long、 short和unsigned）和C90新增的signed用于提供基本整数类型的变式，例如 unsigned short int和long long int。char关键字用于指定字母和其他字符（如， #、$、%和*）。另外，char类型也可以表示较小的整数。float、double和 long double表示带小数点的数。_Bool类型表示布尔值（true或false）， complex和_Imaginary分别表示复数和虚数。 通过这些关键字创建的类型，按计算机的储存方式可分为两大基本类 型：整数类型和浮点数类型

::: tip 位、字节和字 
位、字节和字是描述计算机数据单元或存储单元的术语。这里主要指存储单元。

最小的存储单元是位（bit），可以储存0或1（或者说，位用于设 置“开”或“关”）。虽然1位储存的信息有限，但是计算机中位的数量十分庞 大。位是计算机内存的基本构建块。 字节（byte）是常用的计算机存储单位。对于几乎所有的机器，1字节 均为8位。这是字节的标准定义，至少在衡量存储单位时是这样（但是，C 语言对此有不同的定义，请参阅本章3.4.3节）。既然1位可以表示0或1，那 么8位字节就有256（2的8次方）种可能的0、1的组合。通过二进制编码（仅 用0和1便可表示数字），便可表示0～255的整数或一组字符（第15章将详细 讨论二进制编码，如果感兴趣可以现在浏览一下该章的内容）

字（word）是设计计算机时给定的自然存储单位。对于8位的微型计算 机（如，最初的苹果机）， 1个字长只有8位。从那以后，个人计算机字长 增至16位、32位，直到目前的64位。计算机的字长越大，其数据转移越快， 允许的内存访问也更多

:::

## 4字符串和格式输入/输出

 本章介绍以下内容： 

- 函数：strlen() 

- 关键字：const 
- 字符串 
- 如何创建、存储字符串 
- 如何使用strlen()函数获取字符串的长度 
- 用C预处理器指令#define和ANSIC的const修饰符创建符号常量 


 本章将详细介绍C语言的两个输入/输出函数：printf()和scanf()。  最后，简要介绍一个重要的工具——C预处理器指令，并学习如何定 义、使用符号常量。 

### char类型数组和null字符

 C语言没有专门用于储存字符串的变量类型，字符串都被储存在char类 型的数组中。数组由连续的存储单元组成，字符串中的字符被储存在相邻的 存储单元中，每个单元储存一个字符 

 注意图中数组末尾位置的字符\0。这是空字符（null character），C 语言用它标记字符串的结束。空字符不是数字0，它是非打印字符，其ASCII 码值是（或等价于）0。C中的字符串一定以空字符结束，这意味着数组的 容量必须至少比待存储字符串中的字符数多1。因此，程序清单4.1中有40个 存储单元的字符串，只能储存39个字符，剩下一个字节留给空字符。  

 那么，什么是数组？可以把数组看作是一行连续的多个存储单元。用更 正式的说法是，数组是同类型数据元素的有序序列。程序清单4.1通过以下 声明创建了一个包含40个存储单元（或元素）的数组，每个单元储存一个 char类型的值： 

