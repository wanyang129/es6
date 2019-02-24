// throw方法抛出的错误要被内部捕获,前提是必须至少执行过一次next方法.
function* gen() {
  try {
    yield 1;
  } catch (e) {
    console.log('内部捕获');
  }
}
var g = gen();
g.throw(1);