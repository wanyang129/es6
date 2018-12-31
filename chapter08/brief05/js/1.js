// 数组实例的find方法,用于找出第一个符合条件的数组成员.如果没有符合条件的成员,则返回undefined
console.log([1, 4, -5, 10].find(n => n < 0));
console.log([1, 5, 10, 15].find(function (value, index, arr) {
  console.log("index", index);
  console.log("arr", arr);
  return value > 9;
}));
// 上面代码中,find方法的回调函数可以接受三个参数,依次为当前的值、当前的位置和原数组
// 数组实例的findIndex方法的用法与find方法非常类似,返回第一个符合条件的数组成员的位置,如果所有成员都不符合条件,则返回-1.
console.log([1, 5, 10, 15].findIndex(function (value, index, arr) {
  return value > 9;
}));
console.log("=======================");
// 这两个方法都可以接受第二个参数,用来绑定回调函数的this对象
function f(v) {
  return v > this.age;
}
let person = { name: "John", age: 20 };
console.log([10, 12, 26, 15].find(f, person));
// 这两个方法都可以发现NaN,弥补了数组的indexOf方法的不足
console.log([NaN].indexOf(NaN));
console.log([NaN].findIndex(y => Object.is(NaN, y)));