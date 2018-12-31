// 扩展运算符是三个点...,他好比rest参数的逆运算，将一个数组转为用逗号分隔的参数序列
console.log(...[1, 2, 3]);
console.log(1, ...[2, 3, 4], 5);
console.log([...document.querySelectorAll("div")]);
// 该运算符主要用于函数调用
function push(array, ...items) {
  array.push(...items);
}
function add(x, y) {
  return x + y;
}
const numbers = [4, 38];
console.log(add(...numbers));
// 扩展运算符与正常的函数参数可以结合使用,非常灵活
function f(v, w, x, y, z) { }
const args = [0, 1];
f(-1, ...args, 2, ...[3]);
// 扩展运算符后面还可以放置表达式
// const arr = [
//   ...(x > 0 ? ['a'] : []),
//   'b'
// ];
// 如果扩展运算符后面是一个空数组,则不产生任何效果
console.log([...[], 1]);

// 扩展运算符如果放在括号中,javascript引擎就会认为这是函数调用,否则就会报错
// console.log((...[1,2]));
console.log(...[1, 2]);