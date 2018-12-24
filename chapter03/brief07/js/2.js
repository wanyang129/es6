// 从函数返回多个值
// 返回一个数组
function example() {
  return [1, 2, 3];
}
let [a, b, c] = example();
console.log(a);
console.log(b);
console.log(c);

// 返回一个对象
function example2() {
  return {
    foo: 1,
    bar: 2
  };
}
let { foo, bar } = example2();
console.log(foo);
console.log(bar);