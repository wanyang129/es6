/**
 * 通常情况下,定义了默认值的参数,应该是函数的尾参数.
 * 因为这样比较容易看出来,到底省略了哪些参数.
 * 如果非尾部的参数设置默认值,实际上这个参数是没法省略的.
 */
function f(x = 1, y) {
  return [x, y];
}
console.log(f());
console.log(f(2));
// console.log(f(, 1));
console.log(f(undefined, 1));
