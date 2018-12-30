// 尾调用是函数式编程的一个重要概念,本身非常简单,就是指某个函数的最后一步是调用另一个函数.
function f(x) {
  return g(X);
}
// 以下三种情况,都不属于尾调用
function f(x) {
  let y = g(x);
  return y;
}
function f(x) {
  return g(x) + 1;
}
function f(x) {
  g(x);
}
function f(x) {
  g(x);
  return undefined;
}
function f(x) {
  if (x > 0) {
    return m(x);
  }
  return n(x);
}
// 上面代码中,函数m和n都属于尾调用,因为它们都是函数f的最后一步操作.