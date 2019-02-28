/**
 * 编译器的"传名调用"实现,往往是将参数放到一个临时函数之中,再将这个临时函数传入函数体.
 * 这个临时函数就叫做Thunk函数.
 */
function f(m) {
  return m * 2;
}
f(x + 5);
// 等同于
var thunk = function () {
  return x + 5;
}
function f(thunk) {
  return thunk() * 2;
}