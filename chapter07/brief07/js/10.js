// 蹦床函数可以将递归执行转为循环执行
function trampoline(f) {
  // 只要f执行后返回一个函数,就继续执行.
  // 这里是返回一个函数,然后执行该函数,而不是函数里面调用函数,这样就避免了递归执行
  while (f && f instanceof Function) {
    f = f();
  }
  return f;
}
// sum函数的每次执行,都会返回自身的另一个版本
function sum(x, y) {
  if (y > 0) {
    return sum.bind(null, x + 1, y - 1);
  } else {
    return x;
  }
}
// 使用蹦床函数执行sum
console.log(trampoline(sum(1, 100000)));