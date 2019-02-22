/**
 * 任意一个对象的Symbol.iterator方法，等于该对象的遍历器生成函数，
 * 调用该函数会返回该对象的一个遍历器对象。
 * 
 * 由于Generator函数就是遍历器生成函数，
 * 因此可以把Generator赋值给对象的Symbol.iterator属性，
 * 从而使得该对象具有Iterator接口。
 */
var myIterable = {};
myIterable[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
};
console.log([...myIterable]);
/**
 * 上面代码中，Generator函数赋值给Symbol.iterator属性，
 * 从而使得myIterable对象具有了Iterator接口，可以被扩展运算符遍历了。
 */
// 只要某个数据结构部署了 Iterator 接口，就可以对它使用扩展运算符，将其转为数组
// Generator函数执行后，返回一个遍历器对象。该对象本身也具有Symbol.iterator属性，执行后返回自身。
function* gen() {

}
var g = gen();
console.log(g[Symbol.iterator]() === g);
/**
 * 上面代码中，gen是要给Generator函数，
 * 调用它会生成一个遍历器对象g。
 * 它的Symbol.iterator属性，也是一个遍历器对象生成函数，
 * 执行后返回它自己。
 */