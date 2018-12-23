// es5只有全局作用域和函数作用域,没有块级作用域
var tmp = new Date();
// 内层变量会覆盖外层变量
function f() {
  console.log(tmp);
  if (false) {
    var tmp = "hello world";
  }
}
f();