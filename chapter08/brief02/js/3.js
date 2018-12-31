// 只要是部署了Iterator接口的数据结构,Array.from都能将其转为数组
console.log(Array.from("hello"));
let nameSet = new Set(['a', 'b']);
console.log(Array.from(nameSet));

// 如果参数是一个真正的数组,Array.from会返回一个一模一样的新数组
console.log(Array.from([1, 2, 3]));
// 扩展运算符也可以将某些数据结构转为数组
// arguments对象
function foo() {
  const args = [...arguments];
}
// NodeList对象
[...document.querySelectorAll('div')]