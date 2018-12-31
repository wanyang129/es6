// 扩展运算符内部调用的是数据结构的Iterator接口,因此只要具有Iterator接口的对象,都可以使用扩展运算符,比如Map结构
let map = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);
let arr = [...map.keys()];
console.log("arr", arr);
// Generator函数运行后,返回一个遍历器对象,因此可以使用扩展运算符
const go = function* () {
  yield 1;
  yield 2;
  yield 3;
}
console.log([...go()]);
/**
 * 上面代码中,变量go是一个Generator函数,执行后返回的是一个遍历器对象,
 * 对这个遍历器对象执行扩展运算符,就会将内部遍历器得到的值,转为一个数组.
 */