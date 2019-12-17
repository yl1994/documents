## MySql

数据库系统(Datebase System):DBS

- 数据库(Datebase)
- 数据库管理系统(Datebase Management System):DBMS
- 应用开发工具
- 管理员及用户

 *结构化查询语言*(Structured Query Language)简称*SQL* 

- DDL——数据定义语言
- DML——数据操作语言
- DQL——数据查询语言
- DCL——数据控制语言

`Wamp环境下MySql配置文件my.ini位置：\bin\mysql\mysql版本号`

### 2.MySql相关操作

配置文件：`my.cnf`

#### 登录/退出MySql

`登录`

```sh
mysql -uroot -p
```

```sh
mysql -uroot -proot
```

登陆的同时打开指定数据库

```sh
mysql -uroot -p -D db_name
```

得到版本号

```sh
mysql -V
mysql --version
```

退出`exit`   `quit`

登录信息中需要掌握的：

- 命令行结束符默认使用;或者\g来结束
- 可以通过help或者\h或者?加上相关关键字来查看手册
- \c可以取消当前命令的执行

#### SQL语句语法规范

- 常用MySQL的关键字我们需要大写，库名、表名、字段名称等使用小写
- SQL语句支持折行操作，拆分的时候不能把完整单词拆开
- 数据库名称、表名称、字段名称不要使用MySQL的保留字，如果必须要使用，需要用反引号``将其括起来

#### 常用SQL语句

- `SELECT USER()`得到登陆的用户

- `SELECT VERSION()`得到MySQL的版本信息

- `SELECT NOW()`得到当前的日期时间

- `SELECT DATABASE()`得到当前打开的数据库
  ​

### 3.数据库相关操作

#### 创建数据库

- `CREATE {DATABASE|SCHEMA} db_name;`
- 检测数据库名称是否存在，不存在则创建`CREATE DATABASE [IF NOT EXISTS] db_name;`
- 在创建数据库的同时指定编码方式`CREATE DATABASE [IF NOT EXISTS] db_name [DEFAULT] CHARACTER SET [=] charset;`

- 查看当前服务器下全部数据库`SHOW DATABASES|SCHEMAS;`
- 查看指定数据库的详细信息`SHOW CREATE DATABASE db_name;`
- 修改指定数据库的编码方式`ALTER DATABASE db_name [DEFAULT] CHARACTER SET [=] charset;`
- 打开指定数据库`USE db_name;`
- 得到当前打开的数据库`SELECT DATABASE()|SCHEMA();`
- 删除指定的数据库`DROP DATABASE db_name;`
- 如果数据库存在则删除`DROP DATABASE [IF EXISTS] db_name;`

### 4.数据表相关操作

**数据表**
	是数据库最重要的组成部分之一，数据是保存在数据表中
	数据表由`行(row)`和`列(column)`来组成
	每个数据表中至少有一列，行可以有零行一行或者多行组成
	表名要求唯一，不要包含特殊字符，最好含义明确

### 创建表

​	**CREATE TABLE [IF NOT EXISTS] tbl_name(**
​    **字段名称 字段类型 [完整性约束条件],**
​    **字段名称 字段类型 [完整性约束条件],**
​	**...**
**)ENGINE=存储引擎 CHARSET=编码方式;**

- `UNSIGNED`无符号，没有负数，从0开始
- `ZEROFILL`零填充，当数据的显示长度不够的时候可以使用前补0的效果填充至指定长度,字段会自动添加UNSIGNED
- `NOT NULL`非空约束，也就是插入值的时候这个字段必须要给值,值不能为空
- `DEFAULT`默认值，如果插入记录的时候没有给字段赋值，则使用默认值
- `PRIMARY KEY`主键，标识记录的唯一性，值不能重复，一个表只能有一个主键，自动禁止为空
- `AUTO_INCREMENT`自动增长，只能用于数值列，而且配合索引使用,默认起始值从1开始，每次增长1
- `UNIQUE KEY`唯一性，一个表中可以有多个字段是唯一索引，同样的值不能重复，但是NULL值除外
- `FOREIGN KEY`外键约束	
  ​		

**查看当前数据库下已有数据表**

- SHOW TABLES;
- SHOW [FULL] TABLES [{FROM | IN} db_name]
- [LIKE 'pattern' | WHERE expr]

**查看指定数据表的详细信息**
	SHOW CREATE TABLE tbl_name;

**查看表结构**

- DESC tbl_name;
- DESCRIBE tbl_name;
- SHOW COLUMNS FROM tbl_name;

**删除指定的数据表**
	DROP TABLE [IF EXISTS] tbl_name;

### 表结构相关操作

1. **添加字段**`ALTER TABLE tbl_name`, `ADD 字段名称 字段属性 [完整性约束条件] [FIRST|AFTER 字段名称]`
2. **删除字段**`ALTER TABLE tbl_name`,`DROP 字段名称`
3. **添加默认值**`ALTER TABLE tbl_name`,`ALTER 字段名称 SET DEFAULT 默认值;`
4. **删除默认值**`ALTER TABLE tbl_name`,`ALTER 字段名称 DROP DEFAULT`
5. **修改字段类型、字段属性**`ALTER TABLE tbl_name`,`MODIFY 字段名称 字段类型 [字段属性] [FIRST | AFTER 字段名称]`
6. **修改字段名称、字段类型、字段属性**`ALTER TABLE tbl_name`,`CHANGE 原字段名称 新字段名称 字段类型 字段属性 [FIRST | AFTER 字段名称]`
7. **添加主键**`ALTER TABLE tbl_name`,`ADD PRIMARY KEY(字段名称)`
8. **删除主键**`ALTER TABLE tbl_name`,`DROP PRIMARY KEY;`
9. **添加唯一**`ALTER TABLE tbl_name`,`ADD UNIQUE KEY|INDEX [index_name] (字段名称)`
10. **删除唯一**`ALTER TABLE tbl_name` ,`DROP index_name;`
11. **修改数据表名称**`ALTER TABLE tbl_name` ,`RENAME [TO|AS] new_tbl_name`,`RENAME TABLE tbl_name TO new_tbl_name;`
12. **修改AUTO_INCREMENT的值**`ALTER TABLE tbl_name AUTO_INCREMENT=值`	​​	

### 5.MYSQL中的数据类型

#### 整数型

| 数据类型     | 储存范围                                                     | 字节 |
| ------------ | ------------------------------------------------------------ | ---- |
| TINYINT      | 有符号值: -128 到127 (-2^7 到2^7-1)<br />无符号值: 0到255 (0到2^8-1) | 1    |
| SMALLINT     | 有符号值: -32768 到32767 (- 2^15到2^15-1)<br />无符号值: 0到65535 (0到2^16- 1) | 2    |
| MEDIUMINT    | 有符号值: -8388608 到8388607 (- 2^23到2^23 -1 )<br />无符号值: 0到16777215 (0到2^24-1) | 3    |
| INT          | 有符号值: -2147683648 到2147683647 (- 2^31到2^31.-1)<br />无符号值: 0到4294967295 (0 到2^32-1) | 4    |
| BIGINT       | 有符号值: -9223372036854775808 到9223373036854775807 (- 2^63到2^63-1)<br />无符号值: 0到18446744073709551615 (0到2^64-1) | 8    |
| BOOL,BOOLEAN | 等价于TINYINT(1)，0为false,其 余为true                       | 1    |

#### 浮点型

| 数据类型       | 存储范围                                                     | 字节 |
| -------------- | ------------------------------------------------------------ | ---- |
| FLOAT[(M,D)]   | 负数取值范围为-3.40E+38到-1.17E-38、0和1.175E-38到3.40E+38。<br />M是数字总位数，D是小数点后面的位数。如果M和D被省略，根据硬件允许的限制来保存值。单精度浮点数精确到大约7位小数位。 | 4    |
| DOUBLE[(M,D)]  | -1.79E+308到-2.22E-308、0和2.22E-308到1.79E+308。            | 8    |
| DECIMAL[(M,D)] | 和DOUBLE一样，内部以字符串形式存储数值                       | M+2  |

#### 字符串类型

	CHAR效率高于VARCHAR,CHAR相当于拿空间换时间，VARCHAR拿时间换空间
	CHAR默认存储数据的时候，后面会用空格填充到指定长度；而在检索的时候会去掉后面空格；VARCHAR在保存的时候不进行填充，尾部的空格会留下
	TEXT列不能有默认值,检索的时候不存在大小写转换
| 列类型                 | 存储需求                                                |
| ---------------------- | ------------------------------------------------------- |
| CHAR(M)                | M个字节，0<=M<= 255                                     |
| VARCHAR(M)             | L+1个字节，其中L <= M且0 <= M <= 65535                  |
| TINYTEXT               | L+1个字节，其中L<28                                     |
| TEXT                   | L+2个字节，其中L<2^16                                   |
| MEDIUMTEXT             | L+3个字节，其中L< 2^24                                  |
| LONGTEXT               | L+4个字节，其中L<2^32                                   |
| ENUM'aluel1'}value2..I | 1或2个字节，取决于枚举值的个数(最多65,535个值)          |
| SET('valuel1,'vlue2".. | 1、2. 3、4或者8个字节，取决于set成员的数目(最多64个成员 |

#### 日期时间类型

| 列类型    | 存储范围                                       | 存储需求 |
| --------- | ---------------------------------------------- | -------- |
| TIME      | -838:59:59 ~ 838:59:59                         | 3        |
| DATE      | 1000-01-01 ~ 9999-12-31                        | 3        |
| DATETIME  | 1000-01 -01 00:00:00~ 999-12-31 23:59:59       | 8        |
| TIMESTAMP | 1970-01 -01 00:00:01 UTC ~ 2038 01-19 03:14:07 | 4        |
| YEAR      | 1901~2155                                      | 1        |



### 6.MYSQL存储引擎

### MyISAM存储引擎

1. **默认MyISAM的表会在磁盘中产生3个文件**
   ​	.frm
   ​		`表结构文件`
   ​	.MYD
   ​		`数据文件`
   ​	.MYI
   ​		`索引文件`
2. **可以在创建的时候指定数据文件和索引文件的存储位置，只有MyISAM表支持**
   	**DATA DIRECORY [=] 数据保存的绝对路径**
      	INDEX DIRECTORY [=] 索引文件保存的绝对路径
3. MyISAM单表最大支持的数据量2的64次方条记录
4. 每个表最多可以建立64个索引
5. 如果是复合索引，每个复合索引最多包含16个列，索引值最大长度是1000B
6. **MyISAM引擎的存储格式**
   	`定长（FIXED 静态）`:
      		是指字段中不包含VARCHAR/TEXT/BLOB
      	`动态（DYNAMIC）`:
      		只要字段中包含了VARCHAR/TEXT/BLOB
      	`压缩（COMPRESSED）`:
      		myisampack创建

### InnoDB存储引擎

1. 设计遵循ACID模型，支持事务，具有从服务崩溃中恢复的能力，能够最大限度保护用户的数据
2. 支持行级锁，可以提升多用户并发时的读写性能
3. 支持外键，保证数据的一致性和完整性
4. InnoDB拥有自己独立的缓冲池，常用的数据和索引都在缓存中
5. 对于INSERT、UPDATE、DELETE操作，InnoDB会使用一种change buffering的机制来自动优化，还可以提供一致性的读，并且还能够缓存变更的数据，减少磁盘I/O，提高性能
6. **创建InnoDB表之后会产生两个文件**
   	.frm表结构文件
      	.ibd,数据和索引存储表空间中
7. 所有的表都需要创建主键，最好是配合上AUTO_INCREMENT,也可以放到经常查询的列作为主键



### 7.MYSQL数据操作

#### 添加记录

1. INSERT [INTO] tbl_name[(col_name,...)] {VALUE|VALUES}(VALUES...);
2. **不指定字段名称**:
   	INSERT tbl_name VALUE(value...)
      	需要按照建表时的字段顺序给每一个字段赋值
3. **列出指定字段**
   	INSERT tbl_name(字段名称,...) VALUES(值,...)
4. **INSERT ... SET的形式**
   	INSERT tbl_name SET 字段名称=值,...;
5. **INSERT ... SELECT**
   	INSERT tbl_name[(字段名称...)] SELECT 字段名称,... FROM  tbl_name [WHERE 条件]
6. **一次添加多条记录**
   	INSERT tbl_name[(字段名称,...)] VALUES(值,...),
   (值,....),
   (值,...)

#### 修改记录

- UPDATE tbl_name SET 字段名称=值,字段名称=值 [WHERE 条件]
- 如果不添加条件，整个表中的记录都会被更新

#### 删除记录

1. DELETE FROM tbl_name [WHERE 条件]
2. 如果不添加条件，表中所有记录都会被删除
3. DELETE 清空数据表的时候不会重置AUTO_INCREMENT的值，可以通过ALTER 语句将其重置为1
4. 彻底清空数据表
   	`TRUNCATE [TABLE] tbl_name;`
      		清除表中所有记录
      		会重置AUTO_INCREMENT的值

#### 查询记录

1. SELECT select_expr,... FROM tbl_name
   [WHERE 条件]
   [GROUP BY {col_name|position} HAVING 二次筛选]
   [ORDER BY {col_name|position|expr} [ASC|DESC]]
   [LIMIT 限制结果集的显示条数] 

2. **查询表中所有记录**:
   	SELECT * FROM tbl_name;
      		*所有字段

3. **指定字段的信息**:
   	SELECT 字段名称,... FROM tbl_name

4. **库名.表名**:
   	SELECT 字段名称,... FROM db_name.tbl_name;

5. **给字段起别名**:
   	SELECT 字段名称 [AS] 别名名称,... FROM db_name.tbl_name; 

6. **给数据表起别名**:
   	SELECT 字段名称 ,... FROM tbl_name [AS] 别名;

7. **表名.字段名的**:
   	SELECT tbl_name.col_name,... FROM tbl_name;

   

   ##### WHERE 条件

   会筛选出符合条件的记录

| 比较运算符    |                                  |
| ------------- | -------------------------------- |
| IS [NOT] NULL | 检测值是否为NULL或者NOT NULL     |
| 指定范围      | [NOT] BETWEEN ... AND            |
| 指定集合      | [NOT] IN(值,...)                 |
| 逻辑运算符    | AND    OR                        |
| 匹配字符      | [NOT] LIKE    %-任意长度的字符串 |

#####    GROUP BY分组

1. 把值相同放到一个组中，最终查询出的结果只会显示组中一条记录
2. 分组配合GROUP_CONCAT()查看组中某个字段的详细信息
3. 配合WITH ROLLUP关键使用,会在记录末尾添加一条记录，是上面所有记录的总和
4. HAVING子句对分组结果进行二次筛选

**配合聚合函数使用**

- `COUNT()`
  	统计记录总数
    	如果写的是COUNT(字段名称)，字段中的值为NULL，不统计进来
    	写COUNT(*)会统计NULL值
- `SUM()`
  	求和
- `MAX()`
  	求最大值
- `MIN()`
  	求最小值
- `AVG()`
  	求平均值

`ORDER BY 排序`
	ORDER BY 字段名称 ASC|DESC

**LIMIT 限制结果集显示条数**

- `LIMIT 值`
  	显示结果集的前几条记录
- `LIMIT offset,row_count`
  	从offset开始，显示几条记录,offset从0开始

#### 多表查询

`笛卡尔积的形式`

`内连接的形式：`

- 查询两个表中符合连接条件的记录
- `SELECT 字段名称,... FROM tbl_name1`
  `INNER JOIN tbl_name2`
  `ON 连接条件`

`外连接的形式：`

**左外连接**

- SELECT 字段名称,... FROM tbl_name1
  LEFT [OUTER] JOIN tbl_name2
  ON 条件;
- SELECT 字段名称,... FROM tbl_name1
  LEFT [OUTER] JOIN tbl_name2
  ON 条件;

**右外连接**

- SELECT 字段名称,... FROM tbl_name1
   RIGHT [OUTER] JOIN tbl_name2
  ON 条件;
- 先显示右表中的全部记录，再去左表中查询复合条件的记录，不符合的以NULL代替

#### 外键约束

**`只有InnoDB存储引擎支持外键`**

**创建外键：**

**建表时指定外键**

1. [CONSTRAINT 外键名称 ]FOREIGN KEY(字段名称) REFERENCES 主表(字段名称)

2. 子表的外键字段和主表的主键字段类型要相似；如果是数值型要求一致，并且无符号也要一致；如果是字符型，要求类型一致，长度可以不同

3. 如果外键字段没有创建索引，MySQL会自动帮我们添加索引

4. 子表的外键关联的必须是父表的主键

5. **外键约束的参照操作**:`CASCADE`从父表删除或更新，子表也跟着删除或者更新，级联的操作
   	
   `SET NULL`从父表删除或者更新记录，并设置子表的外键列为NULL。
   `NO ACTION | RESTRICT`拒绝对父表做更新或者删除操作
   
      		
   
      	
   
   
      	
      	

**动态创建外键**

1. 动态添加外键
   	`ALTER TABLE tbl_name ADD [CONSTRAINT 外键名称] FOREIGN KEY(外键字段) REFERENCES 主表(主键字段);`
      	`动态添加外键之前表中的记录一定合法的记录，没有脏值，否则外键添加不成功`
2. 动态删除外键
   	`ALTER TABLE tbl_name`
   `DROP FOREIGN KEY fk_name;`

#### 特殊形式的查询

##### 子查询

1. SELECT 字段名称 FROM tbl_name WHERE col_name=(SELECT col_name FROM tbl_name)
2. 内层语句查询的结果可以做为外层语句查询的条件
3. 由IN引发的子查询
4. 由比较运算符引出子查询
5. 由EXISTS引发的子查询
6. INSERT ... SELECT
7. CREATE ... SELECT
8. CREATE TABLE tbl_name LIKE tbl_name;

**ANY SOME ALL**

| 运算符 /关键字 | ANY    | SOME   | ALL    |
| :------------: | ------ | ------ | ------ |
|     >、>=      | 最小值 | 最小值 | 最大值 |
|     <、<=      | 最大值 | 最大值 | 最小值 |
|       =        | 任意值 | 任意值 |        |
|    <>、!=、    |        |        | 任意值 |



##### 联合查询

1. **UNION**
   SELECT 字段名称,... FROM tbl_name1 
   UNION
   SELECT 字段名称... FROM tbl_name2;
2. **UNION ALL**
   SELECT 字段名称,... FROM tbl_name1 
   UNION ALL
   SELECT 字段名称... FROM tbl_name2;
3. UNION ALL 是简单的合并，UNION会去掉表中重复记录

##### 自身连接查询

- 无限级分类的实现形式

### 8.MYSQL常用函数

### 数学函数

1. `CEIL()`进一取整
2. `FLOOR()`舍掉小数部分
3. `ROUND()`四舍五入
4. `TRUNCATE()`截取小数点后几位
5. `MOD()`取余数
6. `ABS()`取绝对值
7. `POWER()`幂运算
8. `PI()`圆周率
9. `RAND()或者RAND(X)`0~1之间的随机数
10. `SIGN(X)`得到数字符号
11. `EXP(X)`计算e的x次方



### 9.图形化工具管理数据库

**BS**:`phpmyadmin`

**CS**:

- Sequel Pro
- **windows**:`SQLyog`,`navit for mysql`,`mysql front`,`mysql workbench`
  	  	
  

