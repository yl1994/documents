# vuepress踩坑

md文件中不要用到 vue 的语法，否则就会报错

vuepress会先解析vue语法，再解析md语法，最后解析html

`所以标准使用md，语法一定写在代码块中`



