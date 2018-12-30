function f(x, y = 5, z) {
  return [x, y, z];
}
console.log(f());
console.log(f(1));
console.log(f(1, 2));
console.log(f(1, undefined, 2));
// 上面代码中,有默认值的参数都不是尾参数.这时,无法只省略该参数,而不省略它后面的参数,除非显示输入undefined
// 如果传入undefined,将触发该参数等于默认值,null则没有这个效果
function foo(x = 5, y = 6) {
  console.log(x, y);
}
foo(undefined, null);