/**
 * 考虑到环境导致的行为差异太大,应该避免在块级作用域内声明函数.
 * 如果确实需要,也应该写成函数表达式,而不是函数声明语句.
 */
// 函数声明语句
{
  let a = "secret";
  function f() {
    return a;
  }
}
// 函数表达式
{
  let a = "secret";
  let f = function () {
    return a;
  }
}
// es6的块级作用域允许声明函数的规则,只在使用大括号的情况下成立,如果没有使用大括号,就会报错.
// "不报错"
"use strict";
if (true) {
  function f() { }
}
// 报错
"use strict";
if (true)
  function f() { }