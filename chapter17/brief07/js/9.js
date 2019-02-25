/**
 * 如果被代理的Generator函数具有return语句，
 * 那么就可以向代理它的Generator函数返回数据。
 */
function* foo() {
  yield 2;
  yield 3;
  return 'foo';
}
function* bar() {
  yield 1;
  var v = yield* foo();
  console.log("v:" + v);
  yield 4;
}
var it = bar();
it.next();
it.next();
it.next();
it.next();
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
/**
 * 上面代码在第四次调用next方法的时候，屏幕上会有输出，
 * 这是因为函数foo的return语句，向函数bar提供了返回值。
 */