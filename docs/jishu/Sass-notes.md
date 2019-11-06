---
sidebar: auto
---





## 声明变量

```scss
$width: 300px !default;
//$声明变量
//如果值后面加上!default则表示默认值
```

 sass 的默认变量一般是用来设置默认值，然后根据需求来覆盖的，覆盖的方式也很简单，只需要在默认变量之前重新声明下变量即可 

```scss
$baseLineHeight: 2;
$baseLineHeight: 1.5 !default;
body{
    line-height: $baseLineHeight; 
}
```

### **全局变量与局部变量** 

------

```scss
$color: orange !default;//定义全局变量(在选择器、函数、混合宏...的外面定义的变量为全局变量)
.block {
  color: $color;//调用全局变量
}
em {
  $color: red;//定义局部变量
  a {
    color: $color;//调用局部变量
  }
}
span {
  color: $color;//调用全局变量
}
```

 **全局变量**就是定义在元素外面的变量

### 嵌套-选择器嵌套

---

 假设我们有一段这样的结构 

```html
<header>
<nav>
    <a href=“##”>Home</a>
    <a href=“##”>About</a>
    <a href=“##”>Blog</a>
</nav>
<header>
```

 想选中 header 中的 a 标签，在写 CSS 会这样写： 

```css
nav a {
  color:red;
}

header nav a {
  color:green;
}
```

 那么在 Sass 中，就可以使用选择器的嵌套来实现： 

```scss
nav {
  a {
    color: red;

    header & {
      color:green;
    }
  }  
}
```

### 嵌套-属性嵌套

---

 Sass 中还提供属性嵌套，CSS 有一些属性前缀相同，只是后缀不一样，比如：border-top/border-right，与这个类似的还有 margin、padding、font 等属性。假设你的样式中用到了： 

```css
.box {
    border-top: 1px solid red;
    border-bottom: 1px solid green;
}
```

 在 Sass 中我们可以这样写： 

```scss
.box {
  border: {
   top: 1px solid red;
   bottom: 1px solid green;
  }
}
```

### 嵌套-伪类嵌套

---

 其实伪类嵌套和属性嵌套非常类似，只不过他需要借助`&`符号一起配合使用。我们就拿经典的“clearfix”为例吧： 

```scss
.clearfix{
&:before,
&:after {
    content:"";
    display: table;
  }
&:after {
    clear:both;
    overflow: hidden;
  }
}
```

 编译出来的 CSS： 

```css
clearfix:before, .clearfix:after {
  content: "";
  display: table;
}
.clearfix:after {
  clear: both;
  overflow: hidden;
}
```

### **避免选择器嵌套：**

- 选择器嵌套最大的问题是将使最终的代码难以阅读。开发者需要花费巨大精力计算不同缩进级别下的选择器具体的表现效果。
- 选择器越具体则声明语句越冗长，而且对最近选择器的引用(&)也越频繁。在某些时候，出现混淆选择器路径和探索下一级选择器的错误率很高，这非常不值得。

为了防止此类情况，我们应该尽可能避免选择器嵌套。然而，显然只有少数情况适应这一措施。

### 混合宏-声明混合宏

---

 如果你的整个网站中有几处小样式类似，比如颜色，字体等，在 Sass 可以使用变量来统一处理，那么这种选择还是不错的。但当你的样式变得越来越复杂，需要重复使用大段的样式时，使用变量就无法达到我们目了。这个时候 Sass 中的混合宏就会变得非常有意义。在这一节中，主要向大家介绍 Sass 的混合宏。 

 **1、声明混合宏** 

 **不带参数混合宏：** 

 在 Sass 中，使用“@mixin”来声明一个混合宏。如： 

```scss
@mixin border-radius{
    -webkit-border-radius: 5px;
    border-radius: 5px;
}
```

 其中 @mixin 是用来声明混合宏的关键词，有点类似 CSS 中的 @media、@font-face 一样。border-radius 是混合宏的名称。大括号里面是复用的样式代码。 

 **带参数混合宏**： 

 除了声明一个不带参数的混合宏之外，还可以在定义混合宏时带有参数，如： 

```scss
@mixin border-radius($radius:5px){
    -webkit-border-radius: $radius;
    border-radius: $radius;
}
```

 **复杂的混合宏：** 

 上面是一个简单的定义混合宏的方法，当然， Sass 中的混合宏还提供更为复杂的，你可以在大括号里面写上带有逻辑关系，帮助更好的做你想做的事情,如： 

```scss
@mixin box-shadow($shadow...) {
  @if length($shadow) >= 1 {
    @include prefixer(box-shadow, $shadow);
  } @else{
    $shadow:0 0 4px rgba(0,0,0,.3);
    @include prefixer(box-shadow, $shadow);
  }
}
```

 这个 box-shadow 的混合宏，带有多个参数，这个时候可以使用“ … ”来替代。简单的解释一下，当 $shadow 的参数数量值大于或等于“ 1 ”时，表示有多个阴影值，反之调用默认的参数值“ 0 0 4px rgba(0,0,0,.3) ”。 

### 混合宏-调用混合宏

------

 在 Sass 中通过 @mixin 关键词声明了一个混合宏，那么在实际调用中，其匹配了一个关键词“@include”来调用声明好的混合宏。例如在你的样式中定义了一个圆角的混合宏“border-radius”: 

```scss
@mixin border-radius{
    -webkit-border-radius: 3px;
    border-radius: 3px;
}
```

 在一个按钮中要调用定义好的混合宏“border-radius”，可以这样使用： 

```scss
button {
    @include border-radius;
}
```

 这个时候编译出来的 CSS: 

```css
button {
  -webkit-border-radius: 3px;
  border-radius: 3px;
}
```

### 混合宏的参数--传一个不带值的参数

------

Sass 的混合宏有一个强大的功能，可以传参，那么在 Sass 中传参主要有以下几种情形：

A) 传一个不带值的参数

在混合宏中，可以传一个不带任何值的参数，比如：

```scss
@mixin border-radius($radius){
  -webkit-border-radius: $radius;
  border-radius: $radius;
}
```

 在混合宏“border-radius”中定义了一个不带任何值的参数“$radius”。 

 在调用的时候可以给这个混合宏传一个参数值： 

```scss
.box {
  @include border-radius(3px);
}
```

这里表示给混合宏传递了一个“border-radius”的值为“3px”。

编译出来的 CSS:

```css
.box {
  -webkit-border-radius: 3px;
  border-radius: 3px;
}
```

### 混合宏的参数--传一个带值的参数

------

 在 Sass 的混合宏中，还可以给混合宏的参数传一个默认值，例如： 

```scss
@mixin border-radius($radius:3px){
  -webkit-border-radius: $radius;
  border-radius: $radius;
}
```

 在混合宏“border-radius”传了一个参数“$radius”，而且给这个参数赋予了一个默认值“3px”。 

*在调用类似这样的混合宏时，会多有一个机会，假设你的页面中的圆角很多地方都是“3px”的圆角，那么这个时候只需要调用默认的混合宏“border-radius”: 

```scss
.btn {
  @include border-radius;
}
```

 编译出来的 CSS: 

```css
.btn {
  -webkit-border-radius: 3px;
  border-radius: 3px;
}
```

 但有的时候，页面中有些元素的圆角值不一样，那么可以随机给混合宏传值，如： 

```scss
.box {
  @include border-radius(50%);
}
```

 编译出来的 CSS: 

```css
.box {
  -webkit-border-radius: 50%;
  border-radius: 50%;
}
```

### 混合宏的参数--传多个参数

------

 Sass 混合宏除了能传一个参数之外，还可以传多个参数，如： 

```scss
@mixin center($width,$height){
  width: $width;
  height: $height;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -($height) / 2;
  margin-left: -($width) / 2;
}
```

 在混合宏“center”就传了多个参数。在实际调用和其调用其他混合宏是一样的： 

```scss
.box-center {
  @include center(500px,300px);
}
```

 编译出来 CSS: 

```css
.box-center {
  width: 500px;
  height: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -150px;
  margin-left: -250px;
}
```

  有一个特别的参数“**…**”。当混合宏传的参数过多之时，可以使用参数来替代，如： 

```scss
@mixin box-shadow($shadows...){
  @if length($shadows) >= 1 {
    -webkit-box-shadow: $shadows;
    box-shadow: $shadows;
  } @else {
    $shadows: 0 0 2px rgba(#000,.25);
    -webkit-box-shadow: $shadow;
    box-shadow: $shadow;
  }
}
```

 在实际调用中： 

```scss
.box {
  @include box-shadow(0 0 1px rgba(#000,.5),0 0 2px rgba(#000,.2));
}
```

 编译出来的CSS: 

```css
.box {
  -webkit-box-shadow: 0 0 1px rgba(0, 0, 0, 0.5), 0 0 2px rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.5), 0 0 2px rgba(0, 0, 0, 0.2);
}
```

### 混合宏的参数--混合宏的不足

------

 混合宏在实际编码中给我们带来很多方便之处，特别是对于复用重复代码块。但其最大的不足之处是会生成冗余的代码块。比如在不同的地方调用一个相同的混合宏时。如： 

```scss
@mixin border-radius{
  -webkit-border-radius: 3px;
  border-radius: 3px;
}

.box {
  @include border-radius;
  margin-bottom: 5px;
}

.btn {
  @include border-radius;
}
```

 示例在“.box”和“.btn”中都调用了定义好的“border-radius”混合宏。先来看编译出来的 CSS： 

```css
.box {
  -webkit-border-radius: 3px;
  border-radius: 3px;
  margin-bottom: 5px;
}

.btn {
  -webkit-border-radius: 3px;
  border-radius: 3px;
}
```

 上例明显可以看出，Sass 在调用相同的混合宏时，并不能智能的将相同的样式代码块合并在一起。这也是 Sass 的混合宏最不足之处。 

### 扩展/继承

------

 继承对于了解 CSS 的同学来说一点都不陌生，先来看一张图： 

 ![img](http://img.mukewang.com/55261e8200017bfc07910449.jpg) 

 图中代码显示“.col-sub .block li,.col-extra .block li” 继承了 “.item-list ul li”选择器的 “padding : 0;” 和 “ul li” 选择器中的 “list-style : none outside none;”以及 * 选择器中的 “box-sizing:inherit;”。 

 在 Sass 中也具有继承一说，也是继承类中的样式代码块。在 Sass 中是通过关键词 “@extend”来继承已存在的类样式块，从而实现代码的继承。如下所示 

```scss
//SCSS
.btn {
  border: 1px solid #ccc;
  padding: 6px 10px;
  font-size: 14px;
}

.btn-primary {
  background-color: #f36;
  color: #fff;
  @extend .btn;
}

.btn-second {
  background-color: orange;
  color: #fff;
  @extend .btn;
}
```

 编译出来之后： 

```css
//CSS
.btn, .btn-primary, .btn-second {
  border: 1px solid #ccc;
  padding: 6px 10px;
  font-size: 14px;
}

.btn-primary {
  background-color: #f36;
  color: #fff;
}

.btn-second {
  background-clor: orange;
  color: #fff;
}
```

 从示例代码可以看出，在 Sass 中的继承，可以继承类样式块中所有样式代码，而且编译出来的 CSS 会将选择器合并在一起，形成组合选择器： 

```css
.btn, .btn-primary, .btn-second {
  border: 1px solid #ccc;
  padding: 6px 10px;
  font-size: 14px;
}
```

### 占位符 %placeholder

------

 Sass 中的占位符 %placeholder 功能是一个很强大，很实用的一个功能，这也是我非常喜欢的功能。他可以取代以前 CSS 中的基类造成的代码冗余的情形。因为 %placeholder 声明的代码，如果不被 @extend 调用的话，不会产生任何代码。来看一个演示： 

```scss
%mt5 {
  margin-top: 5px;
}
%pt5{
  padding-top: 5px;
}
```

 这段代码没有被 @extend 调用，他并没有产生任何代码块，只是静静的躺在你的某个 SCSS 文件中。只有通过 @extend 调用才会产生代码： 

```scss
//SCSS
%mt5 {
  margin-top: 5px;
}
%pt5{
  padding-top: 5px;
}

.btn {
  @extend %mt5;
  @extend %pt5;
}

.block {
  @extend %mt5;

  span {
    @extend %pt5;
  }
}
```

 编译出来的CSS 

```css
//CSS
.btn, .block {
  margin-top: 5px;
}

.btn, .block span {
  padding-top: 5px;
}
```

 从编译出来的 CSS 代码可以看出，通过 @extend 调用的占位符，编译出来的代码会将相同的代码合并在一起。这也是我们希望看到的效果，也让你的代码变得更为干净。 