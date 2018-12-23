/**
 * es6引入了块级作用域,明确允许在块级作用域之中声明函数.
 * es6规定,块级作用域之中,函数声明语句的行为类似于let,在块级作用域之外不可引用.
 */
/**
 * 允许在块级作用域内声明函数
 * 函数声明类似于var,即会提升到全局作用域或函数作用域的头部
 * 同时,函数声明还会提升到所在的块级作用域的头部
 */
function f() {
  console.log("I am outside!");
}
(function () {
  if (false) {
    function f() {
      console.log("I am inside!");
    }
  }
  f();
}())

// 实际运行代码如下
function f() {
  console.log("I am outside!");
}
(function () {
  var f = undefined;
  if (false) {
    function f() {
      console.log("I am inside!");
    }
    f();
  }
}());