## PHP操作Mysql

### PHP操作数据库八步法

```php
$connection = mysqli_connect('localhost', 'root', '199717');
```

1. 参数1：mysql服务器的地址。对于安装在本机的数据库，可以传入`localhost`。或者传入`127.0.0.1`IP地址
2. 参数2：用户名
3. 参数3：密码
4. 可选参数4：连接到数据库的名称
5. 可选参数5：mysql服务器工作的端口



```php
<?php
	// 建立连接
	$connection = mysqli_connect('127.0.0.1', 'root', '199717');

	// 判断连接是否成功
	if (mysqli_connect_error() != null) {
		die(mysqli_connect_error());
	} else {
		echo "连接成功！";
	}

	// 选择数据库
	mysqli_select_db($connection, 'test');

	// 设置字符集
	mysqli_set_charset($connection, 'utf8');

	// 书写 SQL 语句
	$sql = "SELECT * FROM `user` LIMIT 1";

	// 执行 SQL 语句
	$result = mysqli_query($connection, $sql);

	// 解析结果集
	$array = mysqli_fetch_array($result, MYSQLI_BOTH);

	// 关闭连接
	mysqli_close($connection);

```

### 添加更新删除数据

```php
<?php
// 连接数据库
$link = mysqli_connect('127.0.0.1', 'root', '197461');

// 判断数据库连接是否成功
if (!is_null(mysqli_connect_error())) {
	die(mysqli_connect_error());
}

// 选择数据库
mysqli_select_db($link, 'test');

// 设置连接字符集
mysqli_set_charset($link, 'utf8');

// 书写 SQL 语句
// $sql = "INSERT INTO `user` (`username`, `password`) VALUES('user-5', 'password-5')";
// $sql = "UPDATE user SET password='password' WHERE id > 4";
$sql = "DELETE FROM user WHERE id > 4";

// 执行 SQL 语句
$result = mysqli_query($link, $sql);

// 解析 SQL 语句执行结果
if ($result) {
	echo "执行成功！"
	 . " 成功删除了数据 " . mysqli_affected_rows($link) . " 条！";
	 // . " 插入数据的 ID 是 " . mysqli_insert_id($link) . "。";
} else {
	echo "执行失败！";
}

// 关闭连接，释放资源
mysqli_close($link);
```

### 简单查询与结果解析

```php
<?php
	// 建立连接
	$link = mysqli_connect('127.0.0.1', 'root', 'q1w2e3r4');

	// 判断连接是否成功
	if (mysqli_connect_error() != null) {
		die(mysqli_connect_error());
	}

	// 选择数据库
	mysqli_select_db($link, 'test');

	// 设置字符集
	mysqli_set_charset($link, 'utf8');

	// 书写 SQL 语句
	$sql = "SELECT good, class, price, stock FROM good WHERE id < 4";

	// 执行 SQL 语句
	$result = mysqli_query($link, $sql);

	// 解析结果集
	echo "<pre>";
	// $data = mysqli_fetch_array($result);
	// var_dump($data);
	// while ($row = mysqli_fetch_array($result, MYSQLI_BOTH)) {
	// 	var_dump($row);
	// }
	// while ($row = mysqli_fetch_row($result)) {
	// 	var_dump($row);
	// }
	// while ($row = mysqli_fetch_assoc($result)) {
	// 	var_dump($row);
	// }
	// while ($row = mysqli_fetch_object($result)) {
	// 	var_dump($row);
	// }

	// $data = mysqli_fetch_all($result, MYSQLI_BOTH);
	// var_dump($data);
	// $num = mysqli_num_rows($result);
	// echo "共查询到 " . $num . " 条数据！";
	$num = mysqli_num_fields($result);
	echo "共查询到 " . $num . " 列数据！";

	// 关闭连接
	mysqli_close($link);
```

### 复杂查询

```php
<?php
	// 建立连接
	$link = mysqli_connect('127.0.0.1', 'root', 'q1w2e3r4');

	// 判断连接是否成功
	if (mysqli_connect_error() != null) {
		die(mysqli_connect_error());
	}

	// 选择数据库
	mysqli_select_db($link, 'test');

	// 设置字符集
	mysqli_set_charset($link, 'utf8');

	// 书写 SQL 语句
	$sql = "SELECT good.*, class.class FROM good, class WHERE good.class = class.id AND good.stock >= 25 AND good.price <= 50 AND good.class = 4 ORDER BY good.price ASC LIMIT 6";

	// 执行 SQL 语句
	$result = mysqli_query($link, $sql);

	// 解析结果集
	echo "<table border='1'>";
	echo "<tr>";
	echo "<th>ID</th>";
	echo "<th>商品</th>";
	echo "<th>类别</th>";
	echo "<th>单价</th>";
	echo "<th>库存</th>";
	echo "<th>更新时间</th>";
	echo "<th>创建时间</th>";
	echo "</tr>";
	while ($row = mysqli_fetch_assoc($result)) {
		echo "<tr>";
		echo "<td width='100px'>" . $row['id'] . "</td>";
		echo "<td width='100px'>" . $row['good'] . "</td>";
		echo "<td width='100px'>" . $row['class'] . "</td>";
		echo "<td width='100px'>" . $row['price'] . "</td>";
		echo "<td width='100px'>" . $row['stock'] . "</td>";
		echo "<td width='100px'>" . $row['updated_at'] . "</td>";
		echo "<td width='100px'>" . $row['created_at'] . "</td>";
		echo "</tr>";
	}
	echo "</table>";

	// 关闭连接
	mysqli_close($link);
```

### 程序错误排查

```php
<?php
	// 建立连接
	$link = mysqli_connect('127.0.0.1', 'root', 'q1w2e3r4');

	// 判断连接是否成功
	if (mysqli_connect_error() != null) {
		die(mysqli_connect_error());
	}

	// 选择数据库
	mysqli_select_db($link, 'test');

	// 设置字符集
	mysqli_set_charset($link, 'utf8');

	// 书写 SQL 语句
	// $sql = "SELECT * FROM good ORDER BY price ASC GROUP BY class";
	$sql = "INSERT INTO good (good, class, price, stock) VALUES('test', 'test', 20, 56)";
	// $sql = "INSERT INTO class(class) VALUES('水果')";

	// 执行 SQL 语句
	$result = mysqli_query($link, $sql);

	// 解析结果集
	// var_dump($result);
	$error = mysqli_error($link);
	$errno = mysqli_errno($link);

	echo "SQL 语句执行失败！错误代码：" . $errno . "，错误信息：" . $error;

	// 关闭连接
	mysqli_close($link);
```

## PHP操作Mysql2

PHP操作Mysql的三种方式

- Mysql：非永久链接，性能低，PHP之后被废弃
- Mysqli：永久连接，减轻服务器压力，只支持Mysql
- PDO：能实现MYsqli的常用功能，支持大部分数据库

PHP扩展查看函数：`phpinfp()`

