// 如果yield*后面跟着一个数组，由于数组原生支持遍历器，因此就会遍历数组成员。
function* gen() {
  yield* ["a", "b", "c"];
}
console.log(gen().next());
/**
 * 上面代码中，yield命令后面如果不加星号，返回的是整个数组，
 * 加了星号就表示返回的是数组的遍历器对象。
 */
function* gen2() {
  yield ["a", "b", "c"];
}
console.log(gen2().next());
// 实际上，任何数据结构只要具有Iterator接口，就可以被yield*遍历。
let read = (function* () {
  yield 'hello';
  yield* 'hello';
})();
console.log(read.next().value);
console.log(read.next().value);
console.log(read.next().value);
console.log(read.next().value);
console.log(read.next().value);
console.log(read.next().value);
console.log(read.next().value);
/**
 * 上面代码中，yield表达式返回整个字符串，
 * yield*语句返回单个字符。因为字符串具有Iterator接口，所以被yield*遍历。
 */