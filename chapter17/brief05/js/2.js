// 如果return方法调用时,不提供参数,则返回值的value属性为undefined.
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}
var g = gen();
console.log(g.next());
console.log(g.return());
console.log(g.next());