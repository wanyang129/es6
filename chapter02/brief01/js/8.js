// 只要块级作用域内存在let命令,它所声明的变量就"绑定"这个区域,不再受外部的影响.
var tmp = 123;
if (true) {
  tmp = "abc";
  let tmp;
}