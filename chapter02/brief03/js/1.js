// const声明一个只读的常量.一旦声明,常量的值就不能改变.
const PI = 3.1415;
// const声明的变量不得改变值,这意味着,const一旦声明变量,就必须立即初始化,不能留到以后赋值.
// const的作用域与let命令相同,只在声明所在的块级作用域内有效.
if (true) {
  const MAX = 5;
}
// const命令声明的常量也是不提升,同样存在暂时性死区,只能在声明的位置后面使用
if (true) {
  // 报错
  console.log(MAX);
  const MAX = 5;
}
// const声明的常量,也与let一样不可重复声明.
var message = "Hello";
let age = 25;

// 报错
const message = "Goodbye";
const age = 30;