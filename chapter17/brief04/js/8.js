// throw命令与g.throw方法是无关的,两者互不影响.
var gen = function* gen() {
  yield console.log('hello');
  yield console.log('world');
};
var g = gen();
g.next();
try {
  throw new Error();
} catch (e) {
  g.next();
}