/**
 * 一个数据结构只要部署了Symbol.iterator属性，就被视为具有iterator接口，就可以用for...of循环遍历它的成员。
 * 也就是说，for...of循环内部调用的是数据结构的Symbol.iterator方法。
 * 
 * for...of循环可以使用的范围包括数组、Set和Map结构、某些类似数组的对象（比如arguments对象、DOM NodeList对象）、Generator对象，以及字符串。
 */
// 数组原生具备iterator接口(即默认部署了Symbol.iterator属性),for...of循环本质上就是调用这个接口产生的遍历器.
const arr = ['red', 'green', 'blue'];
for (let v of arr) {
  console.log(v);
}
const obj = {};
obj[Symbol.iterator] = arr[Symbol.iterator].bind(arr);
for (let v of obj) {
  console.log(v);
}
/**
 * 上面代码中,空对象obj部署了数组arr的Symbol.iterator属性,结果obj的for...of循环,
 * 产生了与arr完全一样的结果.
 */