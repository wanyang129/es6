// 函数的参数也可以使用解构赋值
function add([x, y]) {
  return x + y;
}
// 函数add的参数表面上是一个数组,但在传入参数的那一刻,数组参数就被解构成变量x和y.
console.log(add([1, 2]));

[[1, 2], [3, 4]].map(([a, b]) => {
  console.log(a + b);
  return a + b;
});
// 函数参数的解构也可以使用默认值
function move({ x = 0, y = 0 } = {}) {
  return [x, y];
}
console.log(move({ x: 3, y: 8 }));
console.log(move({ x: 3 }));
console.log(move({}));
console.log(move());

function move2({ x, y } = { x: 0, y: 0 }) {
  return [x, y];
}
console.log(move2({ x: 3, y: 8 }));
console.log(move2({ x: 3 }));
console.log(move2({}));
console.log(move2());

// 上面代码时为函数move2的参数指定默认值,而不是为变量x和y指定默认值,所以会得到与前一种写法不同的结果.
// undefined就会触发函数参数的默认值
[1, undefined, 3].map((x = "yes") => {
  console.log(x);
})