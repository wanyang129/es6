// 如果默认值是一个表达式,那么这个表达式是惰性求值的,即只有在用到的时候,才会求值.
function f() {
  console.log("aaa");
}
let [x = f()] = [1];
console.log(x);
// 其等价于下面代码
let y;
if ([1][0] === undefined) {
  y = f();
} else {
  y = [1][0];
}
console.log(y);