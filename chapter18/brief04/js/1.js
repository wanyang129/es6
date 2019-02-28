// Thunk函数是自动执行Generator函数的一种方法.
// 传值调用和传名调用
var x = 1;
function f(m) {
  return m * 2;
}
console.log(f(x + 5));